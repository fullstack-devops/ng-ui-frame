import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgUiFrameService {

  isMenuClosed = new EventEmitter<boolean>();

  constructor() { }
}
