import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device = {} as Device;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.getDeviceById();
  }

  getDeviceById() {
    this.deviceService.getDeviceById(1).subscribe((device) => {
      this.device = device as Device;
    });
  }
}