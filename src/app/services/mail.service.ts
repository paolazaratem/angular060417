import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message: string;

  constructor() { 
    this.message = '¡¡You have got mail!!';
  }

}
