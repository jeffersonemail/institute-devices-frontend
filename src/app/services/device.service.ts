import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Device } from '../models/device';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  url = environment.urlApi + "devices/";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getDeviceById(id: number): Observable<Device> {
    return this.httpClient.get<Device>(this.url + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveDevice(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(this.url, JSON.stringify(device), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteDevice(device: Device) {
    return this.httpClient.delete<Device>(this.url + '/' + device.Id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}