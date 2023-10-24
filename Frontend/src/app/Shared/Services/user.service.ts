import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { IUserLogin } from '../Interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../Constants/urls';
import { ToastrService } from 'ngx-toastr';

const User_Key = 'User';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getFromLocalStorage());
  public userObservable: Observable<User>;
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setToLocalStorage(user)
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Trendflaunt ${user.name}!`,
            `Login Successful`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed ');
        },
      })
    );
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(User_Key);
    window.location.reload();
  }

  private setToLocalStorage(user : User){
    localStorage.setItem(User_Key, JSON.stringify(user));
  }
  
  private getFromLocalStorage():User{
    const userJson = localStorage.getItem(User_Key)
    if(userJson)return JSON.parse(userJson)as User;
    return new User();
  }

}
