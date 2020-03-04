import { Injectable } from '@angular/core';
import { BaseApiUrl } from '../../Utils/Consts'

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() 
  {
  }

  get baseApiUrl() : string 
  {
    return BaseApiUrl;
  }
}
