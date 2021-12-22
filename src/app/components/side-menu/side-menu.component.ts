import { Component, OnInit } from '@angular/core';

import { ConfigSidemenuService } from 'src/app/services/config-sidemenu.service';

@Component({
  selector: 'c-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  constructor(
    public readonly configSideMenu: ConfigSidemenuService
  ) { }

  ngOnInit(): void { }

  showHideSideMenu(): void {
    this.configSideMenu.display = !this.configSideMenu.display;
  }
}
