import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  animations: [routerTransition()]
})
export class GoogleMapComponent implements OnInit {
  // public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor() { }

  lat = 51.678418;
  lng = 7.809007;

  ngOnInit() {
  }

  onChoosenLocation(event: { coords: { lat: number; lng: number; }; }) {
    this.lat =  event.coords.lat;
    this.lng = event.coords.lng;
  }
}
