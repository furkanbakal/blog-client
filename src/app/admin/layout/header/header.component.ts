import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
          label:'Dashboard',
          icon:'pi pi-fw pi-chart',
          routerLink: ['/admin']
      },
      {
          label:'Bloglar',
          icon:'pi pi-fw pi-pencil',
          routerLink: ['/admin/blogs']
      },
      {
          label:'Kullanıcılar',
          icon:'pi pi-fw pi-users',             
      },
      {
        label:'Profil',
        icon:'pi pi-fw pi-user',
        badgeStyleClass: 'display: flex; justify-content: flex-end'           
    },
  ];
}
}
