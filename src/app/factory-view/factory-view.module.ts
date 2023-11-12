import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FactoryViewComponent } from './factory-view.component';
import { MonstersComponent } from './monsters/monsters.component';
import { SpellsComponent } from './spells/spells.component';
import { ProxyChildDirective } from './proxy-child.directive';
import { RacesComponent } from './races/races.component';


@NgModule({
  declarations: [
    FactoryViewComponent,
    MonstersComponent,
    SpellsComponent,
    ProxyChildDirective,
    RacesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [FactoryViewComponent]
})
export class FactoryViewModule { }
