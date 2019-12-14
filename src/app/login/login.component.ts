import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string;
  public password: string;
  public isLoggedIn = false;
  constructor(private http: Http, private router: Router) { }

  login(userObj) {
    this.http.post('http://localhost:8086/login', userObj).subscribe(
      res => {
        const response = res.text();
        this.isLoggedIn = true;
        this.router.navigateByUrl('home');
    }, error => {
      alert("Please enter valid username/password");
    }

    )
  }
}
