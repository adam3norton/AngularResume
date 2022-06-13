import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { mapPin } from 'src/app/shared/pinModel';
import { pinService } from 'src/app/shared/pins.service';

@Component({
  selector: 'app-place-pins',
  templateUrl: './place-pins.component.html',
  styleUrls: ['./place-pins.component.css']
})
export class PlacePinsComponent implements OnInit {
  pins: mapPin[] = [];
  pinStyleCount: number = 0;
  pinStyles = ['../../../../assets/Website-Pins-White.png',
               '../../../../assets/Website-Pins-Yellow.png',
               '../../../../assets/Website-Pins-Blue.png',
               '../../../../assets/Website-Pins-Red.png',
               '../../../../assets/Website-Pins-Green.png',
               '../../../../assets/Website-Pins-Black.png']
  image = this.pinStyles[this.pinStyleCount];

  constructor(private pinService: pinService) { }

  ngOnInit(): void {
    this.pins = this.pinService.getPins();

    let loader = new Loader({
      apiKey: "AIzaSyCCfzqOKwOKa5OpdbgrBgHYyzp9EheZ95k",
      version: "weekly"
    });

    let mapOptions = {
      center: { lat: 40.5247, lng: -111.863 },
      zoom: 14,
    };

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);

      this.pins.forEach(pin => {
        let newPin = new google.maps.Marker({
          position: pin.latlong,
          map,
          icon: this.pinStyles[this.pinStyleCount],
          title: pin.title,
          draggable: true
        })
      });

      map.addListener("rightclick", (event) => {
        this.onPinCreated(event.latLng, map);
      })
    });
  }

  onPinCreated(location: google.maps.LatLngLiteral, map: google.maps.Map) {
    new google.maps.Marker({
      position: location,
      map: map,
      icon: this.pinStyles[this.pinStyleCount],
      draggable: true
    });
  }

  onChangeColor(colorId: number) {
    this.pinStyleCount = colorId;
  }
}
