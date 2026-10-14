import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  imports: [
    TranslatePipe,
    NzIconModule,
    NzCardModule
  ],
  selector: 'app-about-us',
  styleUrl: './about-us.less',
  templateUrl: './about-us.html',
})
export class AboutUs {}
