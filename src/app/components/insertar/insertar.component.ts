import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import{Router} from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import {DepartamentoService} from './../../services/departamento.service';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  @ViewChild("cajanumero") cajanumero:ElementRef;
  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad:ElementRef;

  insertarDepartamento(){
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom=this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;
    //insertar mediante servicio
    var dept = new Departamento(num,nom,loc);
    this._service.insertarDepartamento(dept).subscribe(response=>{

      this._router.navigate(["/"]);

    },error=>{
      console.log(error);
    })
  }

   constructor(private _service: DepartamentoService, private _router:Router) { 
     this.cajanumero = ElementRef.prototype;
     this.cajanombre=ElementRef.prototype;
     this.cajalocalidad=ElementRef.prototype;
   }

  ngOnInit(): void {
  }

}
