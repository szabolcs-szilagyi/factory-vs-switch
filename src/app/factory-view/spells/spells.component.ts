import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  @Input() data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  hoomanData() {
    return JSON.stringify(this.data, null, '  ');
  }
}
