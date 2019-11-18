import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-alerts',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertsComponent implements OnInit {

  loc$: Observable<string>;
  loc: string;

  constructor(private store: Store<any>) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
    })
  }

  ngOnInit() {
  }

}
