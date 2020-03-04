import { Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { parseString, Parser } from 'xml2js';
import { parseNumbers } from 'xml2js/lib/processors';



@Injectable({ providedIn : 'root'})
export class XMLToJsonService {

  xmlToJSON(xmlString : string): Observable<any>
  {
    return new Observable<any>(observer => {
      let parser: Parser = new Parser({ explicitCharkey: false, explicitRoot: false, valueProcessors : [parseNumbers] });
      parser.parseString(xmlString, (err, result) =>
      {
        observer.next((result._));
        observer.complete();
      })
    });
  }

}
