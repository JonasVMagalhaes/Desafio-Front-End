import { Component, Input, OnInit } from '@angular/core';
import { ConfigSidemenuService } from 'src/app/services/config-sidemenu.service';

@Component({
  selector: 'c-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit { 
  @Input() public pageName: string = "";

  constructor(
    private readonly configSideMenu: ConfigSidemenuService
  ) { }

  ngOnInit(): void { }

  showHideSideMenu():void {
    this.configSideMenu.display = !this.configSideMenu.display;
  }

}
