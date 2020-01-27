import { Directive, Renderer, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckPayment]'
})
export class CheckPaymentDirective implements OnInit{

  @Input() stat:String
  @Input() mes:Number
  @Input() target:HTMLTableDataCellElement;

  constructor(
    private el: ElementRef,
    private render: Renderer
  ) { }
  
  ngOnInit(){
    this.checkPayment()

  }

  checkPayment(){
    let mesAtual = (new Date()).getMonth()
    let diaAtual = (new Date()).getDate()
    if(Number(this.mes) < mesAtual){
      this.changeStyle()
    }else if(Number(this.mes) == mesAtual){
      if(diaAtual >= 20){
        this.changeStyle()
      }else{
        if(this.stat==='true'){
          this.render.setElementStyle(this.el.nativeElement, 'background-color', ` rgb(120, 185, 120)`);
        }
      }
    }
  }
  changeStyle(){
    if(this.stat==='true'){
      this.render.setElementStyle(this.el.nativeElement, 'background-color', ` rgb(120, 185, 120)`);
    }else{
      this.render.setElementStyle(this.el.nativeElement, 'background-color', `red`);
    }
  }

}
