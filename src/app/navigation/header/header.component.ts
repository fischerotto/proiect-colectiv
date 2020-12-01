import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { store, logoutUser, State } from '../../store';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  @select('userLoggedIn') userLoggedIn$: Observable<boolean>;
  @select('employeeUser') employeeUser$: Observable<string>;
  @select('supervisorUser') supervisorUser$: Observable<string>;
  @select('administratorUser') administratorUser$: Observable<string>;

  constructor(private ngRedux: NgRedux<State>) { }

  logout() {
    store.dispatch(logoutUser());
  }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
