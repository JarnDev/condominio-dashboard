import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { PainelDashboardComponent } from './painel/painel-dashboard/painel-dashboard.component';
import { SindicoComponent } from './sindico/sindico.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { CheckPaymentDirective } from './diretivas/check-payment/check-payment.directive';



@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    PainelDashboardComponent,
    SindicoComponent,
    DetalhamentoComponent,
    CheckPaymentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
