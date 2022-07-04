import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
    @Input()lonn: any;
    @Input()latt: any;
    map:any=mapboxgl.Map;
    Longtitude : any;
    Latitude : any;
    
   
 
  constructor() { }

  ngOnInit(): void {
  console.log(this.lonn,this.latt,"inside");
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/anujanr/cl4h089ip000r15pjodgj640z', // style URL
    center: [this.lonn, this.latt], // starting position [lng lat]
    zoom: 12 // starting zoom
    });
    

      // this.map.on('load', () => {
      //   // Load an image from an external URL.
      //   this.map.loadImage(
      //   '../../../assets/marker.png',
      //   (error:any, image:any) => {
      //   if (error) throw error;
         
      //   // Add the image to the map style.
      //   this.map.addImage('cat', image);
         
      //   // Add a data source containing one point feature.
      //   this.map.addSource('point', {
      //   'type': 'geojson',
      //   'data': {
      //   'type': 'FeatureCollection',
      //   'features': [
      //   {
      //   'type': 'Feature',
      //   'geometry': {
      //   'type': 'Point',
      //   'coordinates': [this.lonn, this.latt]
      //   }
      //   }
      //   ]
      //   }
      //   });
         
      //   // Add a layer to use the image to represent the data.
      //   this.map.addLayer({
      //   'id': 'points',
      //   'type': 'symbol',
      //   'source': 'point', // reference the data source
      //   'layout': {
      //   'icon-image': 'cat', // reference the image
      //   'icon-size': 0.25
      //   }
      //   });
      //   }
      //   );
      //   });
      const geojson = {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'properties': {
        'message': 'Bar',
        'iconSize': [60, 60]
        },
        'geometry': {
        'type': 'Point',
        'coordinates': [this.lonn, this.latt]
        }
        },
        
        ]
        };
        // Add markers to the map.
        for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        el.style.backgroundImage = `url(../../../../../assets/marker.png)`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';
         
        el.addEventListener('click', () => {
        window.alert(marker.properties.message);
        });
         
        // Add markers to the map.
        const marker1 = new mapboxgl.Marker(el,{
          draggable: true,
        }).setLngLat([this.lonn, this.latt])
        .addTo(this.map);

        marker1.on('drag',() => {
          console.log(marker1.getLngLat());
        });
  }
}

}
