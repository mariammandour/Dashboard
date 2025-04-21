import { Component ,Input} from '@angular/core';
import { pagesList1 } from '../../constants/pages.constant';
import { pagesList2 } from '../../constants/pages.constant';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() isSidebarOpen = true;
  pagesList1 = pagesList1;
  pagesList2 = pagesList2;
  
}
