import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  mock: boolean = true;
  
  device = {
    "Id": 1,
    "Category": 1,
    "Name": "Celular",
    "Color": "Preto",
    "partNumber": 152452
} as Device;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getDeviceById(this.route.snapshot.params["id"]);
  }

  getDeviceById(id: number) {
    this.deviceService.getDeviceById(id).subscribe((device) => {
      if (!this.mock) {
        this.device = device as Device;
      }
    });
  }
}