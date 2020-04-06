import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user-service';
import { User } from 'src/app/models/User';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newUser: User;
  name: string;
  email: string;
  userName: string;
  constructor(private _userService: UserService, private _toastr: ToastrService, private _router: Router) { }

  ngOnInit(): void {
    this.newUser = new User();

  }

  onSubmit(form: NgForm) {
    this.newUser.name = this.name;
    this.newUser.userName = this.userName;
    this.newUser.email = this.email;
    console.log(this.newUser);
    this._userService.addUser(this.newUser).subscribe(user => {
      form.reset();
      this._toastr.success("Added Successfully!");
      this._router.navigate(['/']);
    });
  }



}
