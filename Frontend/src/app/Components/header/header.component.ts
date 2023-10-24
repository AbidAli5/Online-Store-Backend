import { UserService } from 'src/app/Shared/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Shared/Models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchTerm : string = '';
  isSubmenuOpen = false;
  user !: User;
  toggleSubmenu(event: Event): void {
    event.stopPropagation(); // Prevent the click event from bubbling up
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
  constructor(activatedRoute : ActivatedRoute,private router : Router, private userService : UserService){
    activatedRoute.params.subscribe((pararms)=>{
      if(pararms.searchTerm)this.searchTerm = pararms.searTerm;
    })
    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }
  ngOnInit(){
    
  }
  logout(){
    this.userService.logout();
  }
  get Auth(){
    return this.user.token;
  }

  search(term : string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }

}
