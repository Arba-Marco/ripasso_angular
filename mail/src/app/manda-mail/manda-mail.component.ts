import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manda-mail',
  templateUrl: './manda-mail.component.html',
  styleUrls: ['./manda-mail.component.css']
})
export class MandaMailComponent {
  @Input() emails: any[] = [];

  toggleEmail(index: number) {
    this.emails[index].espansa = !this.emails[index].espansa;
  }

  evidenziaSpeciale(index: number) {
    this.emails[index].evidenziato = !this.emails[index].evidenziato;
  }
}

