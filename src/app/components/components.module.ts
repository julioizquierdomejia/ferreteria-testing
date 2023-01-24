import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FotterComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
