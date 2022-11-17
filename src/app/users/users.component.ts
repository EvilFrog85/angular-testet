import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    public store: StoreService
  ) { }

  ngOnInit(): void {
  }

}
