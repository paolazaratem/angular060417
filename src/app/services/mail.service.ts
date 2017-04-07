import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  public message: string;
  public messages: string[];

  constructor() { 
    this.message = '¡¡You have got mail!!';
    this.messages = [
      'You are new here!!',
      'You are the best developer',
      'You can...'
    ]; 
  }

}
