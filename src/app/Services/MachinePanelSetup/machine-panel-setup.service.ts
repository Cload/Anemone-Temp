import { Injectable, Optional } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable , from} from 'rxjs';
import { map, catchError, flatMap, mergeAll} from 'rxjs/operators';
import { ApiUrlService } from '../ApiUrl/api-url.service';

@Injectable({providedIn: 'root'})
export class MachinePanelSetupService {

  private machinePanelSetUpUrl: string = "/MachinePanelSetup";
  constructor(
    private http: HttpClient,
    @Optional() private apiUrlService: ApiUrlService = null  ) { }

   getMachinePanelSetUp(): Observable<number>
   {
    
    let responseObservable = this.http.get(`${this.apiUrlService ? this.apiUrlService.baseApiUrl : ""}${this.machinePanelSetUpUrl}`, { observe: "body", responseType: 'json' });
    let numberObservable =   responseObservable.pipe(map(rawxmlresponse => +(rawxmlresponse as unknown) ));
    return numberObservable;

    
  }

}
