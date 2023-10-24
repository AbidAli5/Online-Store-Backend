import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  returnUrl = '';
  checkoutForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuiler : FormBuilder, private userService : UserService,
    private activatedRout : ActivatedRoute,
    private router : Router){
      this.checkoutForm = this.formBuiler.group({
        email: '',
        Password: ''
      });
    }

   
  ngOnInit(): void {
   this.returnUrl = this.activatedRout.snapshot.queryParams.returnUrl;
  }
  get fc(){
    return this.checkoutForm.controls
  }

  onSubmit(): void {
    this.isSubmitted = true
    if(this.checkoutForm.invalid)return
    
    this.userService.login({email : this.fc.email.value,
    password :this.fc.Password.value }).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    });


  }


}
