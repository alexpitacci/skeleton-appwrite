import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverSentComponent } from './recover-sent.component';

describe('RecoverSentComponent', () => {
  let component: RecoverSentComponent;
  let fixture: ComponentFixture<RecoverSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
