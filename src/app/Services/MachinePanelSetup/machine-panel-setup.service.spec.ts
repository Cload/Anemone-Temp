import { TestBed, async } from '@angular/core/testing';
import { MachinePanelSetupService} from './machine-panel-setup.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { SIGTTIN } from 'constants';
import { MachineStatusesService } from '../MachineStatuses/machine-statuses.service';
describe('MachinePanelSetupService testing', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })

     httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController)
    
  });

  it('Can test getMachinePanelSetUp works', () => {

    let testResponse: number = 54;
    let machinePanelSetUpService: MachinePanelSetupService = new MachinePanelSetupService(httpClient)
    machinePanelSetUpService.getMachinePanelSetUp()
      .subscribe(res =>
        expect(res).toEqual(testResponse)
        );

    const req = httpTestingController.expectOne('/MachinePanelSetup');
    expect(req.request.method).toEqual('GET');
    req.flush(`54`,
      { headers: new HttpHeaders({ 'content-type:':  'application/json; charset=utf-8'}) })
    httpTestingController.verify();
  });


});
