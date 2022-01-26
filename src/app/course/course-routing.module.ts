import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAuthGuard } from './course-auth.guard';
import { CourseHomeComponent } from './course-home/course-home.component';

const routes: Routes = [
  {
    path: '',
    component: CourseHomeComponent,
    canActivate: [CourseAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
