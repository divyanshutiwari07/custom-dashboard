import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {PocService} from '../../poc.service';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-camera-info',
  templateUrl: './camera-info.component.html',
  styleUrls: ['./camera-info.component.scss'],
  animations: [routerTransition()]
})
export class CameraInfoComponent implements OnInit {

  resolutions: string[];
  cameraHeights: string[];

  @Input() cameraIndex;
  @Output() getSearchStatusChange = new EventEmitter<any>();

  camera: any = {};

  constructor(private pocService: PocService) { }

  ngOnInit() {
    console.log('camera page');
    this.resolutions = this.pocService.getResolution();
    this.cameraHeights = this.pocService.getCameraHeight();
    this.camera = {
      model: '',
    };
  }

  dataChanged() {
    this.getSearchStatusChange.emit({key: this.cameraIndex, data: this.camera});
  }

}
