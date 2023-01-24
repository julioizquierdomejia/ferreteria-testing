import { Component, OnInit } from '@angular/core';
import { Ferreteria } from 'src/app/interfaces/ferreteria';
import { FerreteriaService } from 'src/app/services/ferreteria.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  ferreteria!:Ferreteria[];

  constructor( private ferreteriaService:FerreteriaService ){}

  ngOnInit(): void {

    this.ferreteriaService.getFerreteria().subscribe(Ferreteria => {
      this.ferreteria = Ferreteria
    })
  }

  onClickDelete(ferreteria : Ferreteria){
    const response = this.ferreteriaService.deleteFerreteria(ferreteria)
    console.log(response)
  }


}
