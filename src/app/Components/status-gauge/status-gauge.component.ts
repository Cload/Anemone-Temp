import { Component, OnInit } from '@angular/core';
import { IStatusData } from '../machines-dashboard/IStatusData';

@Component({
  selector: 'app-status-gauge',
  templateUrl: './status-gauge.component.html',
  styleUrls: ['./status-gauge.component.scss']
})
export class StatusGaugeComponent implements OnInit {

  statusData : IStatusData[] = [
    {
       backgroundColor : "#44ae20",
       number: 12,
       desc: "Macchine Attive",
       id : "2"
    },
    {
      backgroundColor : "#dc1818",
      number: 15,
      desc: "Macchine Ferme",
      id : "5"
   },
    {
      backgroundColor : "#ff882e",
      number: 16,
      desc: "Macchine Ferme",
      id : "4"
   }
   
  ] 
  constructor() { }

  ngOnInit(): void {
  }

  getStatusStyle(status : IStatusData) : Object
  {
    return {
      backgroundColor : status.backgroundColor,
      flex : status.number,
    }
  }
}
