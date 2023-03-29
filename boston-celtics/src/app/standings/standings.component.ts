import { Component, OnInit } from '@angular/core';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  seasons: string[] = ['2017', '2018', '2019', '2020', '2021'];
  standings: any[] = [];

  constructor(private nbaService: NbaService) { }

  ngOnInit() {
    this.seasons.forEach((season, index) => {
      this.nbaService.getCelticsGames(season).subscribe((data: any) => {
        let wins = 0;
        let losses = 0;

        data.data.forEach((game: any) => {
          if (game.status === 'Final') {
            if (game.home_team.id === this.nbaService.celticsId) {
              if (game.home_team_score > game.visitor_team_score) {
                wins++;
              } else {
                losses++;
              }
            } else {
              if (game.home_team_score < game.visitor_team_score) {
                wins++;
              } else {
                losses++;
              }
            }
          }
        });

        this.standings[index] = {
          season: season,
          wins: wins,
          losses: losses
        };
      });
    });
  }
}
