import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
  standalone: false
})
export class ActividadPage implements OnInit {
  selectedFilter: string = 'todo';
  constructor() { }

  ngOnInit() {
  }

}
