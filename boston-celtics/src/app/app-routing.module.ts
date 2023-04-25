import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamStatsComponent } from './team-stats/team-stats.component';
import { StandingsComponent } from './standings/standings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RosterComponent } from './roster/roster.component'; // import the RosterComponent

const routes: Routes = [
  { path: 'team-stats', component: TeamStatsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'roster', component: RosterComponent }, // add the RosterComponent route
  { path: '', redirectTo: '/roster', pathMatch: 'full' } // set default path to '/roster'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
