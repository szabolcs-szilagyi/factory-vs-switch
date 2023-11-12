import { Component, ElementRef, Input, OnChanges, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MonstersComponent } from './monsters/monsters.component';
import { ProxyChildDirective } from './proxy-child.directive';
import { RacesComponent } from './races/races.component';
import { SpellsComponent } from './spells/spells.component';

/**
 * This is where we declare which class should be use for which element type,
 * in case we would need to add a new class, then just this object would need to
 * be extended.
 * The object below could be moved to a separate file or could be passed in as a
 * configuration object to the module.
 */
const possibleElementTypes: Record<string, any> = {
  monsters: MonstersComponent,
  spells: SpellsComponent,
  races: RacesComponent,
  default: MonstersComponent,
};

@Component({
  selector: 'app-factory-view',
  templateUrl: './factory-view.component.html',
})
export class FactoryViewComponent implements OnInit, OnChanges {
  @Input() data!: any;
  @ViewChild(ProxyChildDirective, { static: true }) childHost!: ProxyChildDirective;

  private updateViewConfig() {
    const component = this.getComponent();

    const childViewRef = this.childHost.viewContainerRef;
    childViewRef.clear();

    const componentRef = childViewRef.createComponent(component);
    componentRef.instance.data = this.data;
  }

  private getComponent(): Type<any> {
    const dataType = this.data.dataType;
    const component = possibleElementTypes[dataType];
    return component || possibleElementTypes['default'];
  }

  ngOnInit(): void {
    this.updateViewConfig();
  }

  ngOnChanges() {
    this.updateViewConfig();
  }
}
