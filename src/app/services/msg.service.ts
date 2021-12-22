import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
    private readonly messageService: MessageService
  ) { }

  success(title: string, message: string) {
    this.messageService.add({ severity: 'success', summary: title, detail: message });
  }

  warn(title: string, message: string) {
    this.messageService.add({ severity: 'warn', summary: title, detail: message });
  }
}
