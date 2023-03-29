import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {
  teamStats = {
    pointsPerGame: 112.0,
    reboundsPerGame: 44.3,
    assistsPerGame: 23.0,
    fieldGoalPercentage: 47.0,
    threePointPercentage: 37.7,
    freeThrowPercentage: 80.4,
    stealsPerGame: 8.0,
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
