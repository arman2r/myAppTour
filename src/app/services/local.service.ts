import { Injectable } from '@angular/core';
import * as AES from 'crypto-js/aes';
import * as Utf8 from 'crypto-js/enc-utf8';

@Injectable({
  providedIn: 'root',
})
export class LocalService {

  key = "--MyAppTour2024**";

  constructor() { }
  
  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }
  
  public getData(key: string) {
    let data = localStorage.getItem(key) || "";
    return this.decrypt(data);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return AES.decrypt(txtToDecrypt, this.key).toString(Utf8);
  }
}
