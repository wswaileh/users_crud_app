import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user-service';
import { User } from 'src/app/models/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  user: User = null;

  userId: number;
  userName: string;
  name: string;
  email: string;

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService,
     private _router: Router, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this._userService.getUser(this.userId).subscribe(
        user => {
          this.user = user as User;
          this.name = this.user.name;
          this.userName = this.user.userName
          this.email = this.user.email;
        });

    });
  }

  onSubmit(editUserForm: NgForm) {
    this.user.name = this.name;
    this.user.email = this.email;
    
    this._userService.updateUser(this.user).subscribe( res => {
      editUserForm.reset();
      console.log(res);
      this._toastr.success("Updated Successfully!");
      this._router.navigate(['/']);
    });
  }

}
