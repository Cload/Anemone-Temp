import { Component, OnInit } from '@angular/core';
import { MachinePanelSetupService } from './Services/MachinePanelSetup/machine-panel-setup.service';
import { MachineStatusesService } from './Services/MachineStatuses/machine-statuses.service';
import { MachineDisplaySetupService } from './Services/MachineDisplaySetup/machine-display-setup.service';
import { forkJoin } from 'rxjs';
import { IMachineDisplaySetup } from 'src/data/IMachineDisplaySetup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{


  title = 'FabbricaConnessaFrontend';
}
