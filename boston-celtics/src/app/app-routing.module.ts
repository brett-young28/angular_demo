import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { StandingsComponent } from './standings/standings.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'player-stats', component: PlayerStatsComponent },
  { path: 'team-stats', component: TeamStatsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', redirectTo: '/player-stats', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
