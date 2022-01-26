import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Appwrite } from 'appwrite';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export type Account = {
  $id: string;
  email: string;
  emailVerification: boolean;
  name: string;
  registration: number;
  status: boolean;
  prefs: object;
};

export type Session = {
  $id: string;
  userId: string;
  expire: number;
  provider: string;
  providerUid: string;
  providerToken: string;
  ip: string;
  osCode: string;
  osName: string;
  osVersion: string;
  clientType: string;
  clientCode: string;
  clientName: string;
  clientVersion: string;
  clientEngine: string;
  clientEngineVersion: string;
  deviceName: string;
  deviceBrand: string;
  deviceModel: string;
  countryCode: string;
  countryName: string;
  current: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class AppwriteService {
  appwrite = new Appwrite();
  avatars = this.appwrite.avatars;
  accountSubject = new BehaviorSubject<Account>({} as Account);
  sessionSubject = new BehaviorSubject<Session>({} as Session);
  account = {} as Account;
  session = {} as Session;
  redirectUrl = '/courses';
  errorSubject = new BehaviorSubject<string>('');
  recovered = false;

  constructor() {
    this.appwrite
      .setEndpoint(environment.APP_ENDPOINT)
      .setProject(environment.APP_PROJECT);
    this.getSession();
  }

  async createSession(email: string, password: string) {
    try {
      this.session = (await this.appwrite.account.createSession(
        email,
        password
      )) as Session;
      this.account = (await this.appwrite.account.get()) as Account;
      this.errorSubject.next('');
    } catch (error: any) {
      this.errorSubject.next(error.message);
    }
  }

  async signup(email: string, password: string, name: string) {
    try {
      await this.appwrite.account.create('unique()', email, password, name);
      this.createSession(email, password);
    } catch (error: any) {
      this.errorSubject.next(error.message);
    }
  }

  async logout() {
    await this.appwrite.account.deleteSession(this.session.$id);
    this.reset();
  }

  async getSession() {
    try {
      this.account = (await this.appwrite.account.get()) as Account;
      this.session = (await this.appwrite.account.getSession(
        'current'
      )) as Session;
      this.accountSubject.next(this.account);
      this.sessionSubject.next(this.session);
    } catch (error) {}
  }

  reset() {
    this.account = {} as Account;
    this.session = {} as Session;
    this.accountSubject.next(this.account);
    this.sessionSubject.next(this.session);
  }

  async recover(email: string) {
    try {
      await this.appwrite.account.createRecovery(
        email,
        environment.APP_RECOVERY_REDIRECT
      );
      this.errorSubject.next('');
    } catch (error: any) {
      this.errorSubject.next(error.message);
    }
  }
  async recoverConfirmation(
    userId: string,
    secret: string,
    password: string,
    passwordConfirmation: string
  ) {
    try {
      await this.appwrite.account.updateRecovery(
        userId,
        secret,
        password,
        passwordConfirmation
      );
      this.recovered = true;
      this.errorSubject.next('');
    } catch (error: any) {
      this.errorSubject.next(error.message);
    }
  }
}
