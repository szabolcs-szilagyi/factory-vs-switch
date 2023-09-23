import { Component, ElementRef, Input, OnChanges, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FactoryConfig } from './factory-config';
import { MonstersComponent } from './monsters/monsters.component';
import { ProxyChildDirective } from './proxy-child.directive';
import { SpellsComponent } from './spells/spells.component';

@Component({
  selector: 'app-factory-view',
  templateUrl: './factory-view.component.html',
  styleUrls: ['./factory-view.component.css']
})
export class FactoryViewComponent implements OnInit, OnChanges {
  @Input() data!: any;
  @ViewChild(ProxyChildDirective, { static: true }) childHost!: ProxyChildDirective;

  constructor(
    private readonly elementTypes: FactoryConfig,
  ) {}

  private updateViewConfig() {
    const component = this.getComponent();

    const childViewRef = this.childHost.viewContainerRef;
    childViewRef.clear();

    const componentRef = childViewRef.createComponent(component);
    componentRef.instance.data = this.data;
  }

  private getComponent(): Type<any> {
    const dataType = this.data.dataType;
    const component = this.elementTypes[dataType];
    return component || this.elementTypes['default'];
  }

  ngOnInit(): void {
    this.updateViewConfig();
  }

  ngOnChanges() {
    this.updateViewConfig();
  }
}
