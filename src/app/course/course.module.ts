import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseHomeComponent } from './course-home/course-home.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseToolbarComponent } from './course-toolbar/course-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CourseHomeComponent, CourseToolbarComponent],
  imports: [CommonModule, MaterialModule, CourseRoutingModule],
})
export class CourseModule {}
