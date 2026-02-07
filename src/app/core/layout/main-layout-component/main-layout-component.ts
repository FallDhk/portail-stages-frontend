import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../../../shared/navbar-component/navbar-component';
import {SidebarComponent} from '../../../shared/sidebar-component/sidebar-component';

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.scss',
})
export class MainLayoutComponent {

}
