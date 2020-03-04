import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrlService } from '../ApiUrl/api-url.service';

@Injectable({providedIn: 'root'})
export class MachineStatusesService {

  private machineStatusesUrl: string = "/MachineStatuses";
  

  constructor(
    private http: HttpClient,
    @Optional()  private apiUrlService : ApiUrlService = null) { }

  getMachineStatuses(): Observable<any[]>
  {
    let statusesObservable = this.http.get<any[]>(`${this.apiUrlService ? this.apiUrlService.baseApiUrl : ""}${this.machineStatusesUrl}`);
    return statusesObservable;
  }
    
}
