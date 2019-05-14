import { Component, OnInit, Input } from '@angular/core';
import { SuatAnService } from '../@web-core/http/suat-an';

@Component({
  selector: 'app-agm-googlemap',
  templateUrl: './agm-googlemap.component.html',
  styleUrls: ['./agm-googlemap.component.scss']
})
export class AgmGooglemapComponent implements OnInit {

    @Input() objectSuatAn: any;
    // TOA DO GOOGLE MAP
    latitude = 15.9668732;
    longitude = 107.1941452;
    zoom = 5.2;
    public markers = [];
    public objectInput: any;
  constructor(
    private _suatAnService: SuatAnService
  ) { }

  ngOnInit() {
    this._suatAnService.getObjSuatAn.subscribe((res: any) => {
      this.objectSuatAn = res;
    });

  }

}
