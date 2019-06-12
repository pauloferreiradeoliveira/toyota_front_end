import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreComponent } from './sobre/sobre.component';
import { PrincipalComponent } from './principal/principal.component';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    PrincipalComponent,
    SobreComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
