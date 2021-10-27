import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  mock: boolean = true;

  devices: Device[] = [
      {
          "Id": 1,
          "Category": 1,
          "Name": "Celular",
          "Color": "Preto",
          "partNumber": 152452
      },
      {
          "Id": 6,
          "Category": 1,
          "Name": "Celular",
          "Color": "Rosa",
          "partNumber": 21313
      },
      {
          "Id": 7,
          "Category": 1,
          "Name": "Celular",
          "Color": "Vermelho",
          "partNumber": 521633
      },
      {
          "Id": 8,
          "Category": 1,
          "Name": "Celular",
          "Color": "Azul",
          "partNumber": 152634
      },
      {
          "Id": 9,
          "Category": 2,
          "Name": "Computador",
          "Color": "Azul Turquesa",
          "partNumber": 1522344
      },
      {
          "Id": 10,
          "Category": 2,
          "Name": "Computador",
          "Color": "Azul Oceano",
          "partNumber": 1522344
      },
      {
          "Id": 11,
          "Category": 1,
          "Name": "Celular",
          "Color": "Verde Limão",
          "partNumber": 1522344
      },
      {
          "Id": 12,
          "Category": 1,
          "Name": "Celular",
          "Color": "Verde Limão",
          "partNumber": 1522344
      }];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.getDevices();
  }

  getDevices() {
    this.deviceService.getDevices().subscribe((devices: Device[]) => {
      if (!this.mock) {
        this.devices = devices;
      }
    });
  }
}