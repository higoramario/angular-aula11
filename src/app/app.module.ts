import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ContaStringsPipe } from './conta-strings.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PessoaComponent, ContaStringsPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
