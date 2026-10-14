import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    NzCardModule,
    NzGridModule
  ],
  selector: 'app-courses',
  styleUrl: './courses.less',
  templateUrl: './courses.html',
})
export class Courses {}
