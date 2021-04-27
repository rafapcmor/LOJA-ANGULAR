import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { BarraComponent } from './barra/barra.component';
import { RouterModule } from '@angular/router';
import { ProdutoAlertasComponent } from './produto-alertas/produto-alertas.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    BarraComponent,
    ProdutoAlertasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ListaProdutosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
