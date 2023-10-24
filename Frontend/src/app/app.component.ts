import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  showFooter = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFooter = true;
      }
    });
    this.promisAndObservables()
  }

  promisAndObservables() {
    // promise
    let promise = new Promise<void>((resolve, reject) => {
      console.log('Hello Abid from promise side');
      // setTimeout(() => {
      //   resolve();
      // }, 100);
    });
    
    // Observable
    let observable = new Observable<void>((observer: any) => {
      console.log('Hello Abid from Observable side');
      observer.next('next by observable');
    });
    observable.subscribe((res)=> {
      console.log(res);
    })
  }
}
