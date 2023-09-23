import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchable-view',
  templateUrl: './switchable-view.component.html',
})
export class SwitchableViewComponent implements OnInit, OnChanges {
  @Input() data: any;
  public color = 'red';

  constructor() {}

  private updateViewConfig() {
    switch (this.data.dataType) {
      case 'character-class':
        this.color = 'lightblue';
        break;
      case 'item-feature':
        this.color = 'lightgreen';
        break;
      default:
        this.color = 'red';
        break;
    }
  }

  ngOnInit(): void {
    this.updateViewConfig();
  }

  ngOnChanges() {
    this.updateViewConfig();
  }

  hoomanData() {
    return JSON.stringify(this.data, null, '  ');
  }
}
