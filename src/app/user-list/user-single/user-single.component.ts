import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user:User[] = [];
  @Output() delete = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  
  deleteUser(user:User){
    this.delete.emit(user);
  }

}
