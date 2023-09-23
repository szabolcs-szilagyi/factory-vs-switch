import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  @Input() data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  hoomanData() {
    return JSON.stringify(this.data, null, '  ');
  }

}
