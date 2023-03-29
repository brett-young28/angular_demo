import { Component, OnInit } from '@angular/core';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  season = '2021';
  celticsId = 2;
  players: any[] = [];
  playerStats: any[] = [];

  constructor(private nbaService: NbaService) { }

  ngOnInit() {
    this.fetchPlayersByPage(1);
  }

  fetchPlayersByPage(page: number) {
    this.nbaService.getAllPlayers(page).subscribe((data: any) => {
      const filteredPlayers = data.data.filter((player: any) => player.team.id === this.celticsId);

      this.players.push(...filteredPlayers);

      if (data.meta.current_page < data.meta.total_pages) {
        this.fetchPlayersByPage(page + 1);
      } else {
        this.players.forEach(player => {
          this.nbaService.getPlayerSeasonAverages(player.id, this.season).subscribe((statsData: any) => {
            if (statsData.data.length > 0) {
              this.playerStats.push(statsData.data[0]);
            }
          });
        });
      }
    });
  }
}
