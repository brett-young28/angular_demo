import { Component } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  players = [
    {
      name: 'Jayson Tatum',
      position: 'Forward',
      number: 0,
      ppg: 30.1,
      rpg:8.8,
      apg: 4.6,
      fg: 0.500
    },
    {
      name: 'Marcus Smart',
      position: 'Guard',
      number: 36,
      ppg: 11.5,
      rpg: 4.0,
      apg: 6.0,
      fg: 0.400
    },
    {
      name: 'Jaylen Brown',
      position: 'Forward',
      number: 7,
      ppg: 26.6,
      rpg: 6.9,
      apg: 3.5,
      fg: 0.490
    },
    {
      name: 'Al Horford',
      position: 'Center',
      number: 42,
      ppg: 10.0,
      rpg: 6.0,
      apg: 4.0,
      fg: 0.450
    },
    {
      name: 'Derrick White',
      position: 'Guard',
      number: 9,
      ppg: 12.4,
      rpg: 3.9,
      apg: 3.6,
      fg: 0.420
    },
    {
      name: 'Sam Hauser',
      position: 'Guard',
      number: 30,
      ppg: 6.4,
      rpg: 2.6,
      apg: 0.9,
      fg: 0.420
    },
    {
      name: 'Robert Williams',
      position: 'Center',
      number: 44,
      ppg: 6.0,
      rpg: 5.0,
      apg: 1.0,
      fg: 0.500
    },
    {
      name: 'Grant Williams',
      position: 'Forward',
      number: 12,
      ppg: 4.0,
      rpg: 3.0,
      apg: 1.0,
      fg: 0.330
    },
    {
      name: 'Blake Griffen',
      position: 'Forward',
      number: 91,
      ppg: 4.1,
      rpg: 3.8,
      apg: 1.0,
      fg: 0.450
    },
    {
      name: 'Payton Pritchard',
      position: 'Guard',
      number: 11,
      ppg: 7.0,
      rpg: 2.0,
      apg: 2.0,
      fg: 0.450
    },
    {
      name: 'Malcolm Brogdon',
      position: 'Guard',
      number: 13,
      ppg: 14.9,
      rpg: 4.2,
      apg: 3.7,
      fg: 0.450
    }
  ];
}
