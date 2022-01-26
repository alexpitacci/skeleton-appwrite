import { TestBed } from '@angular/core/testing';

import { CourseAuthGuard } from './course-auth.guard';

describe('CourseAuthGuardGuard', () => {
  let guard: CourseAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
