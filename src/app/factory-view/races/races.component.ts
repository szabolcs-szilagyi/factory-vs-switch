import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  @Input() data!: any;

  public details: Record<string, any> = {};

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.data.data.forEach((data: any) => this.getDetails(data.index))
  }

  getDetails(race: string) {
    this.http.get(`https://www.dnd5eapi.co/api/races/${race}`, { observe: 'body', responseType: 'json' })
      .subscribe((details) => {
        this.details[race] = details;
      })
  }

}
