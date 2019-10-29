import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isSampleWorks: boolean = false;
  constructor(private messageService: MessageService) { }
}
