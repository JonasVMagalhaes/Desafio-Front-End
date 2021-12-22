import { Injectable } from '@angular/core';
import { IIten } from '../interfaces/iten';
import { LocalStorageService } from './local-storage.service';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private readonly keyLocalStorage: string = "itens";

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly msgService: MsgService
  ) { }

  async saveNewIten(iten: IIten) {
    const id = "id" + Math.random().toString(16).slice(2);
    iten.id = id;
    const itens = this.localStorage.get(this.keyLocalStorage) || "[]";
    const itensJson = JSON.parse(itens);
    itensJson.push(iten);
    this.localStorage.save(this.keyLocalStorage, JSON.stringify(itensJson));
  }

  async updateIten(iten: IIten) {
    const itens = this.localStorage.get(this.keyLocalStorage) || "[]";
    const itensJson = JSON.parse(itens);
    const itensUpdated = itensJson.map((item: IIten) => {
      if (item.id === iten.id) return iten;
      return item;
    })
    this.localStorage.save(this.keyLocalStorage, JSON.stringify(itensUpdated));
  }

  async removeIten(id: string) {
    const itens = this.localStorage.get(this.keyLocalStorage) || "[]";
    const itensJson = JSON.parse(itens);
    const itensUpdated = itensJson.filter((item: IIten) => item.id !== id);
    this.localStorage.save(this.keyLocalStorage, JSON.stringify(itensUpdated));
    return this.msgService.warn("Ítem excluído", "O ítem selecionado foi excluído com sucesso");
  }

  async getItens() {
    const itens = this.localStorage.get(this.keyLocalStorage) || "[]";
    const itensJson = JSON.parse(itens);
    return itensJson;
  }
}
