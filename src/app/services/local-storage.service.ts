import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }
}
