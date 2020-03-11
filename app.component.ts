import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  data: Array<Map<string, string>>;
  headers: Array<string>;
  filters: Array<Ifilter>;

  constructor(){}
  

  ngOnInit(){
    this.data = new Array(
      new Map([["Book ID", "1"], ["Book Title", "Android for Expert"], ["Book Author", "George R.R"], ["Book Year of Publish", "1996"]]),
      new Map([["Book ID", "2"], ["Book Title", "Complete Reference"], ["Book Author", "George P.R.Martin"], ["Book Year of Publish", "1998"]]),
      new Map([["Book ID", "3"], ["Book Title", "BackBone JS"], ["Book Author", "Kalvin R.V"], ["Book Year of Publish", "2000"]]),
      new Map([["Book ID", "4"], ["Book Title", "Knock Out JS"], ["Book Author", "J.J.Markin"], ["Book Year of Publish", "2005"]])
    );
    this.headers = Array.from((this.data[0]).keys()); //to print headers 
    this.filters = new Array({ header: "Book ID", filter: "" }, { header: "Book Title", filter: "" }, { header: "Book Author", filter: "" }, { header: "Book Year of Publish", filter: "" })
  }
}
export interface Ifilter {
  header: string;
  filter: string;
}
