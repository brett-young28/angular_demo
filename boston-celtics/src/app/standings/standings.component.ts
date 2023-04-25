import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Standings {
  [key: string]: { team: string; wins: number; losses: number; winPercentage: number }[];
}


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  years = [
    {value: '2017', display: '2017'},
    {value: '2018', display: '2018'},
    {value: '2019', display: '2019'},
    {value: '2020', display: '2020'},
    {value: '2021', display: '2021'},
    {value: '2022', display: '2022'}
  ];

  celticsStandings: Standings = {};
  selectedYear: string = this.years[0].value;
  standings: { team: string; wins: number; losses: number; winPercentage: number }[] = [];
  displayedColumns: Array<string> = ['rank', 'team', 'wins', 'losses', 'winPercentage'];

  constructor(private http: HttpClient) {
    this.fetchStandingsData();
  }

  ngOnInit(): void {
  }

  fetchStandingsData(): void {
    this.http.get<Standings>('assets/standings-data.json').subscribe(data => {
      this.celticsStandings = data;
      this.standings = this.celticsStandings[this.selectedYear];
    });
  }

  onYearChange(): void {
    this.standings = this.celticsStandings[this.selectedYear].sort((a, b) => b.wins - a.wins);
  }
  

}
