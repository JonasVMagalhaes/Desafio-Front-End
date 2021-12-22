import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigSidemenuService {
  public display: boolean = false;

  constructor() { }
}
