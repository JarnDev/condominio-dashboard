import { Component, OnInit, Input } from '@angular/core';
import { ApService } from 'src/app/services/ap.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-painel-dashboard',
  templateUrl: './painel-dashboard.component.html',
  styleUrls: ['./painel-dashboard.component.css']
})
export class PainelDashboardComponent implements OnInit {

  public anoAtivo= String((new Date()).getFullYear())

  public meses:Array<String>
  
  public apartamentos : any
  public anosList:any

  constructor(private apService: ApService) { }

  ngOnInit() {
    this.anosList = this.getAnos()
    this.meses = this.apService.getMeses()
    this.apService.getAll(this.anoAtivo).subscribe(aps => {
      this.apartamentos = aps;
      // console.log(this.apartamentos)
    });

  }
  getResumoAno(ano){
    this.anoAtivo=ano
    this.apService.getAll(this.anoAtivo).subscribe(aps => {
      this.apartamentos = aps;
    });
  }

  getAnos(){
    return this.apService.getAnos()
  }
}
