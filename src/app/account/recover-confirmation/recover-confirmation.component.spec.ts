import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverConfirmationComponent } from './recover-confirmation.component';

describe('RecoverConfirmationComponent', () => {
  let component: RecoverConfirmationComponent;
  let fixture: ComponentFixture<RecoverConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
