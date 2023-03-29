import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private apiUrl = 'https://www.balldontlie.io/api/v1';
  public celticsId = 2;

  constructor(private http: HttpClient) { }

  getAllPlayers(page: number = 1) {
    return this.http.get(`${this.apiUrl}/players?page=${page}`).pipe(delay(1000));
  }

  getPlayerSeasonAverages(playerId: number, season: string) {
    return this.http.get(`${this.apiUrl}/season_averages?season=${season}&player_ids[]=${playerId}`).pipe(delay(1000));
  }
  
  getCelticsGames(season: string) {
    return this.http.get(`${this.apiUrl}/games?seasons[]=${season}&team_ids[]=${this.celticsId}`).pipe(delay(1000));
  }
  
  getStandings(season: string) {
    return this.http.get(`${this.apiUrl}/standings?season=${season}`).pipe(delay(1000));
  }
  getCelticsGamesByDateRange(startDate: string, endDate: string) {
    return this.http.get(`${this.apiUrl}/games?start_date=${startDate}&end_date=${endDate}&team_ids[]=${this.celticsId}`).pipe(delay(1000));
  }
  
}
