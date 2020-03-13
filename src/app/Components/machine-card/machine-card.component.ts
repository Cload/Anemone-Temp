import { Component, OnInit, Input, ElementRef, ɵConsole, ComponentRef } from '@angular/core';
import { IMachineStatus } from 'src/app/Objects/IMachineStatus';
import { LightenDarkenColor } from 'src/app/Utils/ColorUtils';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.scss']
})
export class MachineCardComponent implements OnInit {

  @Input()
  machineData :  IMachineStatus;
  @Input()
  maxContentWidth : string = "unset";

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.machineData);
    
    
  }

  get darkBackgroundColor() : string {

    if (!this.machineData.StatimacchineColorcode) {
      return "";
    }
    return LightenDarkenColor(this.machineData.StatimacchineColorcode, -40);
  }
  

}
