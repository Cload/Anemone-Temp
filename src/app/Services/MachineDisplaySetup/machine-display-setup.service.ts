import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMachineDisplaySetup } from 'src/data/IMachineDisplaySetup';
import { ApiUrlService } from '../ApiUrl/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class MachineDisplaySetupService {

  private machinePanelSetUpUrl: string = "/MachineDisplaySetup";


  constructor
  (
    private http : HttpClient,
    @Optional() private apiUrlService: ApiUrlService = null
  ) { }

  getMachineDisplaySetup(machineId: number) : Observable<IMachineDisplaySetup>
  {
    let url = `${this.apiUrlService ? this.apiUrlService.baseApiUrl : ""}${this.machinePanelSetUpUrl}/${machineId}`;
    let responseObservable = this.http.get<IMachineDisplaySetup>(url, {observe: "body", responseType : 'json'});
    return responseObservable;


  }

}
