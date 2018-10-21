import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';


@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3KrANZeNUrp_WtpfqGl03mw4_N3bVe34'
    })
  ],

  providers: [
    MapService
  ]
})
export class MapModule { }
