import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IIten } from 'src/app/interfaces/iten';
import { ItensService } from 'src/app/services/itens.service';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {
  public itens: IIten[] = []

  constructor(
    private readonly itensService: ItensService,
    private readonly confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getItens();
  }

  async getItens() {
    return this.itens = await this.itensService.getItens();
  }

  async removeIten(id: string) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja remover este item?',
      accept: () => {
        this.itensService.removeIten(id);
        return this.getItens();
      }
    });

    
  }

}
