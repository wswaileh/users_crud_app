import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  users : any;

  constructor(private _userService : UserService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this._userService.getUsers().subscribe( response => {
      console.log(response);
      this.users = response;
    } ) );
  }

  deleteUser (userId : number){
    this._userService.deleteUser(userId).subscribe(res =>{
      console.log(res);
      this._toastr.success("Deleted Successfully!");
      this.ngOnInit();
    });
  }

}
