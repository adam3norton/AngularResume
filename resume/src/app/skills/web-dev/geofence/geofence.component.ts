import { Component } from '@angular/core';

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.css']
})
export class GeofenceComponent {

  constructor() { }

  onBegin() {
    console.log("this is it!");
  }

  // onBegin() {
  //   let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center: { lat: 40.5247, lng: -111.863 },
  //     zoom: 14,
  //   });

  //   const drawingManager = new google.maps.drawing.DrawingManager({
  //     drawingMode: google.maps.drawing.OverlayType.MARKER,
  //     drawingControl: true,
  //     drawingControlOptions: {
  //       position: google.maps.ControlPosition.TOP_CENTER,
  //       drawingModes: [google.maps.drawing.OverlayType.POLYGON]
  //     }
  //   });

  //   drawingManager.setMap(map);
  // }

}
