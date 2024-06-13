import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private imagesUrl = 'assets/Json/images.json';
  constructor(
    //public http: HttpClient
  ) { }

//   getImages(): Observable<string[]> {
//     return this.http.get<string[]>(this.imagesUrl);
//   }
}
