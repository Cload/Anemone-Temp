import { Component, OnInit } from '@angular/core';
import { IMachineDisplaySetup } from 'src/data/IMachineDisplaySetup';
import { forkJoin } from 'rxjs';
import { MachineDisplaySetupService } from 'src/app/Services/MachineDisplaySetup/machine-display-setup.service';
import { MachineStatusesService } from 'src/app/Services/MachineStatuses/machine-statuses.service';
import { MachinePanelSetupService } from 'src/app/Services/MachinePanelSetup/machine-panel-setup.service';
import { IMachineStatus } from 'src/app/Objects/IMachineStatus';

@Component({
  selector: 'app-machines-dashboard',
  templateUrl: './machines-dashboard.component.html',
  styleUrls: ['./machines-dashboard.component.scss']
})
export class MachinesDashboardComponent implements OnInit {


  isLoading : boolean = true;
  machinePanelSetUp : number;
  machineStatuses : IMachineStatus[];
  machineDisplaySetUp : IMachineDisplaySetup;

  constructor(
    private machinePanelSetUpService : MachinePanelSetupService,
    private machineStatusesService: MachineStatusesService,
    private machineDisplaySetUpService: MachineDisplaySetupService
  ){}
  
  ngOnInit(): void {
    let machinePanelObservable = this.machinePanelSetUpService.getMachinePanelSetUp();
    let machineStatusesObservable = this.machineStatusesService.getMachineStatuses();
    let machineDisplayObservable = this.machineDisplaySetUpService.getMachineDisplaySetup(7);
    forkJoin(
      {
        machinePanelSetup : machinePanelObservable,
        machineStatuses : machineStatusesObservable,
        machineDisplaySetUp : machineDisplayObservable
      }
    )
    .subscribe(res =>this.onDataRetrieved(res))
  }

  onDataRetrieved({machinePanelSetup, machineStatuses, machineDisplaySetUp} : 
                  {machinePanelSetup : number , machineStatuses : any[], machineDisplaySetUp : IMachineDisplaySetup})
  {
    let formattedMachineStatuses : IMachineStatus[] = [];
    machineStatuses.forEach(ms => 
      {
        let currentMachineStatus :  IMachineStatus= {};
        Object.keys({...machineDisplaySetUp, ...ms}).forEach(key => 
          {
              let field = key.split('_');
              field.forEach((value, index, array) => 
                {
                  field[index] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() //Maiuscolare la prima lettera 
                });
              if (ms[machineDisplaySetUp[key]])
              {
                currentMachineStatus[`${field.join('')}`] = ms[machineDisplaySetUp[key]]
              } else if (machineDisplaySetUp[key])
              {
                currentMachineStatus[`${field.join('')}`] = machineDisplaySetUp[key];
              } else if (ms[key]) {
                currentMachineStatus[`${field.join('')}`] = ms[key];
              }
            
          });
        formattedMachineStatuses.push(currentMachineStatus)
      });
    this.machineStatuses = formattedMachineStatuses;
    this.isLoading = false;
  }

}
