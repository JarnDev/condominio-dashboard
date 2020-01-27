import { Component, OnInit } from '@angular/core';
import { ApService } from '../services/ap.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sindico',
  templateUrl: './sindico.component.html',
  styleUrls: ['./sindico.component.css']
})
export class SindicoComponent implements OnInit {

  public meses:Array<String>

  public anoAtivo = String((new Date()).getFullYear())
  public apartamentos: any
  public anosList:any
  constructor(private apService: ApService) { }

  ngOnInit() {
    this.meses = this.apService.getMeses()
    this.anosList = this.getAnos()
    this.getResumoAno(this.anoAtivo)
  }
  
  getAnos(){
    return this.apService.getAnos()
  }

  getResumoAno(ano){
    this.anoAtivo=ano
    this.apService.getAll(this.anoAtivo).subscribe(aps => {
      this.apartamentos = aps;
    });
  }

  update(apt,index){
    this.apartamentos[apt][index] = !this.apartamentos[apt][index]
  }
  save(){
    console.log(this.apartamentos)
    this.apService.updateOne(this.anoAtivo,this.apartamentos)
  }

}
