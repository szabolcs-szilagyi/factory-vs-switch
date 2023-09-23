import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchableViewComponent } from './switchable-view/switchable-view.component';
import { CharacterClassComponent } from './switchable-view/character-class/character-class.component';
import { ItemFeatureComponent } from './switchable-view/item-feature/item-feature.component';
import { FactoryViewModule } from './factory-view/factory-view.module';

@NgModule({
  declarations: [
    AppComponent,
    SwitchableViewComponent,
    CharacterClassComponent,
    ItemFeatureComponent
  ],
  imports: [
    BrowserModule,
    FactoryViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
