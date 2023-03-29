import { Component, OnInit } from '@angular/core';
import { NbaService } from '../nba.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [DatePipe]
})
export class ScheduleComponent implements OnInit {
  seasons: string[] = ['2017', '2018', '2019', '2020', '2021']; // Add more seasons if needed
  season = '2021';
  games: any[] = [];

  constructor(private nbaService: NbaService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.onSeasonChange();
  }

  onSeasonChange() {
    const startDate = `${this.season}-10-01`; // October 1st
    const endDate = `${this.season}-12-31`; // December 31st

    this.nbaService.getCelticsGamesByDateRange(startDate, endDate).subscribe((data: any) => {
      this.games = data.data
        .map((game: any) => {
          game.date = this.datePipe.transform(game.date, 'MMM d, y');
          return game;
        })
        .sort((a: any, b: any) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });
    });
  }
}