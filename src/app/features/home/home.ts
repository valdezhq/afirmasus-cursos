import { Component } from '@angular/core';
import { Courses } from '../courses/courses';
import { AboutUs } from '../about-us/about-us';

@Component({
  imports: [
    Courses,
    AboutUs
  ],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {}
