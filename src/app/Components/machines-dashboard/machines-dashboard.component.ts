import { Component, OnInit } from '@angular/core';
import { IMachineDisplaySetup } from 'src/data/IMachineDisplaySetup';
import { forkJoin } from 'rxjs';
import { MachineDisplaySetupService } from 'src/app/Services/MachineDisplaySetup/machine-display-setup.service';
import { MachineStatusesService } from 'src/app/Services/MachineStatuses/machine-statuses.service';
import { MachinePanelSetupService } from 'src/app/Services/MachinePanelSetup/machine-panel-setup.service';

@Component({
  selector: 'app-machines-dashboard',
  templateUrl: './machines-dashboard.component.html',
  styleUrls: ['./machines-dashboard.component.scss']
})
export class MachinesDashboardComponent implements OnInit {


  isLoading : boolean = true;
  machinePanelSetUp : number;
  machineStatuses : any[];
  machineDisplaySetUp : IMachineDisplaySetup;

  constructor(
    private machinePanelSetUpService : MachinePanelSetupService,
    private machineStatusesService: MachineStatusesService,
    private machineDisplaySetUpService: MachineDisplaySetupService
  ){}
  
  ngOnInit(): void {
    let machinePanelObservable = this.machinePanelSetUpService.getMachinePanelSetUp();
    let machineStatusesObservable = this.machineStatusesService.getMachineStatuses();
    let machineDisplayObservable = this.machineDisplaySetUpService.getMachineDisplaySetup(54);
    forkJoin(
      {
        machinePanelSetUp : machinePanelObservable,
        machineStatuses : machineStatusesObservable,
        machineDisplaySetUp : machineDisplayObservable
      }
    )
    .subscribe(res => console.log(res))
  }

  onDataRetrieved({machinePanelSetup, machineStatuses, machineDisplaySetUp} : 
                  {machinePanelSetup : number , machineStatuses : any[], machineDisplaySetUp : IMachineDisplaySetup})
  {
    this.isLoading = false;
  }

}
