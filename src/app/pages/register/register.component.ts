import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIten } from 'src/app/interfaces/iten';
import { ItensService } from 'src/app/services/itens.service';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public measurement: any = { name: 'Litro', code: 'Litro' }
  public editPage: boolean = false;
  public validates: any = {
    perishable: ""
  };
  public iten: IIten = {
    name: "",
    measurement: "Litro",
    quantity: 0,
    price: 0,
    perishable: false,
    dateVality: "",
    dateManufacturing: ""
  }

  public measurements: any[] = [
    { name: 'Litro', code: 'Litro' },
    { name: 'Quilograma', code: 'Quilograma' },
    { name: 'Unidade', code: 'Unidade' }
  ];

  constructor(
    private readonly itensService: ItensService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly msgService: MsgService
  ) { }

  ngOnInit(): void {
    this.getItenToEdit();
  }

  setPrice(event: any) {
    this.iten.measurement = event.code;
  }

  valityItem() {
    if (!this.iten.name) return "O nome do ítem precisa ser preenchido";
    if (this.iten.quantity === 0) return "A quantidade do ítem precisa ser escolhida";
    if (!this.iten.dateManufacturing) return "É necessário selecionar uma data de fabricação para o ítem";
    if (this.iten.perishable && !this.iten.dateVality) return "Ítens perecíveis precisam possuir uma data de validade";
    if (this.validates.perishable) return this.validates.perishable;
    return false;
  }

  async saveIten() {
    const error = this.valityItem();
    if (error) return this.msgService.warn("Ítem não adicionado", error);

    if (this.editPage) {
      this.itensService.updateIten(this.iten);
    } else {
      this.itensService.saveNewIten(this.iten);
    }

    return this.router.navigateByUrl('/itens')
  }

  async getItenToEdit() {
    let id: string = "";
    this.route.params.subscribe(params => id = params['id']);

    if (id) {
      this.editPage = true;
      const itens: IIten[] = await this.itensService.getItens();
      const iten: IIten[] = itens.filter(item => item.id === id);
      if (iten.length > 0) {
        this.iten.id = iten[0].id;
        this.iten.name = iten[0].name;
        this.iten.measurement = iten[0].measurement;
        this.iten.quantity = iten[0].quantity;
        this.iten.perishable = iten[0].perishable;
        this.iten.dateVality = new Date(iten[0].dateVality);
        this.iten.dateManufacturing = new Date(iten[0].dateManufacturing);
      };
    }
  }

  verifyVality() {
    const datetimeVality: number = new Date(this.iten.dateVality).getTime();
    const datetime: number = new Date().getTime();


    if (datetimeVality <= datetime) {
      this.validates.perishable = "Este produto encontra-se vencido";
    }
    else {
      this.validates.perishable = "";
    }

    this.verifyDateManufacturing();
  }

  verifyDateManufacturing() {
    const datetimeVality: number = new Date(this.iten.dateVality).getTime();
    const datetimeManufacturing: number = new Date().getTime();

    if (datetimeVality <= datetimeManufacturing) {
      this.iten.dateManufacturing = "";
    };
  }

  cancel() {
    return this.router.navigateByUrl('/itens')
  }
}
