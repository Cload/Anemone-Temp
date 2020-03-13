import { sandboxOf } from 'angular-playground';
import { MachineCardComponent } from './machine-card.component';
import { IMachineStatus } from 'src/app/Objects/IMachineStatus';

const mockData : IMachineStatus =  JSON.parse(`{"ElementIdField":1,"ElementIdType":"string","Header1Field":"linea 1","Header1Type":"string","Header2Field":"CAT. DIN 5685/C mm 11X72X44 LUCIDA MAT  ","Header2Type":"string","Body1Label":"Media","Body1Field":3,"Body1Type":"string","Body2Label":"Teorica","Body2Field":4,"Body2Type":"string","Body3Type":"string","Footer1Field":"stato A","Footer1Type":"string","Footer2Label":"Dalle","Footer2Field":"2019-06-25T10:46:00","Footer2Type":"DateTime","Footer2Format":"HH:MM","Footer3Label":"Kg","Footer3Field":234,"Footer3Type":"string","WidgetType":"A","SummaryHeader":"GENERALE","SummaryLabel":"QUINTALI GIORNATA","SummaryField":234,"SummaryType":"double","SummaryFormat":"0.##","SummaryValueFunction":"SUM","Id":1,"Risorsaid":1,"Eventoproduzioneid":1891,"Statomacchinaid":2,"Descrizioneprodotto":"CAT. DIN 5685/C mm 11X72X44 LUCIDA MAT  ","Velocita":23,"Contatoremacchina":123456,"Orainiziogiornata":"2019-06-25T10:46:00","Velocitamediagiornata":3,"Velocitacomunegiornata":4,"Numeropezzigiornata":123,"Kggiornata":234,"Lavorazionegiornata":55,"Efficienzagiornata":98,"EventiproduzioneUniqueid":1891,"EventiproduzioneLabel":1,"EventiproduzioneStartdate":"2019-10-21T17:34:00","EventiproduzioneEnddate":"2019-11-11T16:00:00","EventiproduzioneAllday":true,"EventiproduzioneCodiceprodotto":"CTDC110A34XLUMA","EventiproduzioneDescrizione":"CAT. DIN 5685/C mm 11X72X44 LUCIDA MAT  ","EventiproduzioneLinea":1,"EventiproduzionePezzi":10,"EventiproduzionePeso":140,"EventiproduzioneLavorazione":0.618,"EventiproduzioneQuantitalotto":11111,"EventiproduzioneOregiornopresunte":15,"EventiproduzioneKgorapresunti":50,"RisorseId":1,"RisorseIdsort":1,"RisorseDescription":"linea 1","StatimacchineId":2,"StatimacchineName":"stato A","StatimacchineColor":"rosa","StatimacchineColorcode":"#F274A8","StatimacchineHidespeed":true}`);
export default sandboxOf(MachineCardComponent)
  .add('default', {
    template: `
    <div class="container-fluid p-3">
      <app-machine-card class="col-lg-3" [machineData]="mockData" ></app-machine-card>
    </div>`,
    context : {
      mockData : mockData
    }
  });
