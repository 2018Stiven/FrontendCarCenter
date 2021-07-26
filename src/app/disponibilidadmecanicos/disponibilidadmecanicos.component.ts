import { Component, OnInit } from '@angular/core';
import { MecanicoservicesService } from '../services/mecanicoservices.service';

@Component({
  selector: 'app-disponibilidadmecanicos',
  templateUrl: './disponibilidadmecanicos.component.html',
  styleUrls: ['./disponibilidadmecanicos.component.css']
})
export class DisponibilidadmecanicosComponent implements OnInit {

  mecanicos: any = [];

  constructor(private mecanicoservice: MecanicoservicesService) { }

  ngOnInit(): void {
    this.seletProductos();
  }

  seletProductos() {

    this.mecanicoservice.getMecanicos().subscribe(
      res => {
        this.mecanicos = res;
        console.log(res);

      },
      err => console.error(err)
    )
  }

}
