import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'texts and dates',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'no-commons',
            icon: 'pi pi-globe',
            routerLink: 'no-commons'
          }
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: 'sort'
      }
    ];
  }
}
