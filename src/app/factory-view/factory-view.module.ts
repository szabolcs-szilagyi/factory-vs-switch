import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryViewComponent } from './factory-view.component';
import { MonstersComponent } from './monsters/monsters.component';
import { SpellsComponent } from './spells/spells.component';
import { ProxyChildDirective } from './proxy-child.directive';
import { FactoryConfig } from './factory-config';


@NgModule({
  declarations: [
    FactoryViewComponent,
    MonstersComponent,
    SpellsComponent,
    ProxyChildDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: FactoryConfig,
      useValue: {
        monsters: MonstersComponent,
        spells: SpellsComponent,
        default: MonstersComponent,
      }
    }
  ],
  exports: [FactoryViewComponent]
})
export class FactoryViewModule { }
