import { Config } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Contact } from '../models/contact.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getListContact() {
    return this.http.get<Contact[]>(Config.SERVER_URL + 'contacts/read.php').pipe(
      map(datas => datas.map(data => new Contact().deserialize(data))),
    );
  }

  createContact(name: string, vorname: string, nummer: string) {
    const datas = JSON.stringify({
      name,
      vorname,
      nummer
    });
    return this.http.post<string>(Config.SERVER_URL + 'contacts/create.php', datas);
  }

  updateFavValue(id: number, favorten: boolean) {
    const datas = JSON.stringify({
      id,
      favoriten
    });
    return this.http.put<string>(Config.SERVER_URL + 'contacts/update.php', datas);
  }

}
