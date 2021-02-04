import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { IMachineDisplaySetup } from 'src/data/IMachineDisplaySetup';
import { ApiUrlService } from '../ApiUrl/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class MachineDisplaySetupService {

  private machinePanelSetUpUrl: string = "/MachineDisplaySetup";
  mockResponse : string  = `{"ELEMENT_ID_FIELD":"ID","ELEMENT_ID_TYPE":"string","HEADER_1_LABEL":"","HEADER_1_FIELD":"Risorse_Description","HEADER_1_TYPE":"string","HEADER_1_FORMAT":"","HEADER_2_LABEL":"","HEADER_2_FIELD":"DescrizioneProdotto","HEADER_2_TYPE":"string","HEADER_2_FORMAT":"","BODY_1_LABEL":"Media","BODY_1_FIELD":"VelocitaMediaGiornata","BODY_1_TYPE":"string","BODY_1_FORMAT":"","BODY_2_LABEL":"Teorica","BODY_2_FIELD":"VelocitaComuneGiornata","BODY_2_TYPE":"string","BODY_2_FORMAT":"","BODY_3_LABEL":"","BODY_3_FIELD":"","BODY_3_TYPE":"string","BODY_3_FORMAT":"","FOOTER_1_LABEL":"","FOOTER_1_FIELD":"StatiMacchine_Name","FOOTER_1_TYPE":"string","FOOTER_1_FORMAT":"","FOOTER_2_LABEL":"Dalle","FOOTER_2_FIELD":"OraInizioGiornata","FOOTER_2_TYPE":"DateTime","FOOTER_2_FORMAT":"HH:MM","FOOTER_3_LABEL":"Kg","FOOTER_3_FIELD":"KgGiornata","FOOTER_3_TYPE":"string","FOOTER_3_FORMAT":"","WIDGET_TYPE":"A","SUMMARY_HEADER":"GENERALE","SUMMARY_LABEL":"QUINTALI GIORNATA","SUMMARY_FIELD":"KgGiornata","SUMMARY_TYPE":"double","SUMMARY_FORMAT":"0.##","SUMMARY_VALUE_FUNCTION":"SUM"}`;


  constructor
  (
    private http : HttpClient,
    @Optional() private apiUrlService: ApiUrlService = null
  ) { }

  getMachineDisplaySetup(machineId: number) : Observable<IMachineDisplaySetup>
  {
    var response : IMachineDisplaySetup = JSON.parse(this.mockResponse);
    var data = from([response]);
    return data;


  }

}
