import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {logoutUser, State, store} from '../../store';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  @select('userLoggedIn') userLoggedIn$: Observable<boolean>;
  @select('employeeUser') employeeUser$: Observable<string>;
  @select('supervisorUser') supervisorUser$: Observable<string>;
  @select('administratorUser') administratorUser$: Observable<string>;

  constructor(private ngRedux: NgRedux<State>) { }

  logout() {
    store.dispatch(logoutUser());
  }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
