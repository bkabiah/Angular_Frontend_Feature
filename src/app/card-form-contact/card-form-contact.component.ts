import { ContactService } from './../services/contact.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-form-contact',
  templateUrl: './card-form-contact.component.html',
  styleUrls: ['./card-form-contact.component.scss']
})
export class CardFormContactComponent implements OnInit {

  @Output() refreshDatas = new EventEmitter();

  constructor(private service: ContactService) { }

  ngOnInit() {
  }

  addContact(name: string, vorname: string, nummer: string) {
    this.service.createContact(name, vorname, nummer).subscribe(
      result => { this.refreshDatas.emit(); },
      error => {},
      () => {}
    );
  }

}
