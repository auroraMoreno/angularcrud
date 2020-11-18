import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';
import { Departamento } from '../models/departamento';

@Injectable()
export class DepartamentoService{

    private url:string;

    constructor(private _http:HttpClient) {
        this.url=Global.urldept;
    }

    getDepartamentos():Observable<any>{
        var request="/api/departamentos";
        return this._http.get(this.url + request);
    }

    insertarDepartamento(departamento: Departamento):Observable<any>{

        var request = "/api/departamentos";
        //convertir el obj a json
        var json = JSON.stringify(departamento);
        //para enviar la info al servicio se realiza mediante cabecera
        var header = new HttpHeaders().set("Content-Type","application/json");
        return this._http.post(this.url + request, json,{
            headers:header
        });
    }

    buscarDepartamento(iddepartamento:string):Observable<any>{
        var request = "/api/departamentos/" + iddepartamento;
        return this._http.get(this.url + request);
    }


    deleteDepartamento(iddepartamento: string):Observable<any>{
        var request = "/api/departamentos/" + iddepartamento;
        return this._http.delete(this.url + request);
    }

    updateDepartamento(departamento:Departamento):Observable<any>{
        let json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request="/api/departamentos/";
        return this._http.put(this.url + request,json, {
            headers:header
        });
    }
}