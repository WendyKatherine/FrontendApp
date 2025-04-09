import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [NgIcon],
  providers: [provideIcons({ heroBars3, heroMagnifyingGlass  })],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
