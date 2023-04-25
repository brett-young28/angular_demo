import { Component, OnInit } from '@angular/core';

interface Standings {
  [key: string]: string;
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
  ];

  celticsStandings: Standings = {
    '2017': 'Your 2017 standings data here',
    '2018': 'Your 2018 standings data here',
    '2019': 'Your 2019 standings data here',
    '2020': 'Your 2020 standings data here',
    '2021': 'Your 2021 standings data here',
  };

  selectedYear: string = this.years[0].value;
  standings: string = this.celticsStandings[this.selectedYear];

  constructor() { }

  ngOnInit(): void {
  }

  onYearChange(): void {
    this.standings = this.celticsStandings[this.selectedYear];
  }

}
