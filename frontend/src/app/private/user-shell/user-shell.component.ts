import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
export class UserShellComponent implements OnInit {
  selectedTabIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  changeTabIndex = (index) => (this.selectedTabIndex = index);
}
