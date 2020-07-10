import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'googlemaps';

@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.css']
})
export class GMapComponent implements OnInit {
	@ViewChild('mapElement', {static: false }) mapElement;
	map: google.maps.Map;
	
  constructor() { }

  ngOnInit() {
	// set map properties
                const mapProps = {
                        center: new google.maps.LatLng(35.2271, -80.8431),
                        zoom: 11,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapProps)
  }

}
