
import { User } from './../model/user.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user : User = new User("","","");

  @Output() deleted : EventEmitter<String> = new EventEmitter();

  constructor(library: FaIconLibrary){
    // Add an icon to the library for convenient access in other components
    library.addIcons(faUser);
  }

  onDelete(){
    this.deleted.emit(this.user.email);
  }

}
