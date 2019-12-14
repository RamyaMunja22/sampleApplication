import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  signup(userObject) {
    this.http.post('http://localhost:8086/signup', userObject).subscribe(
      res => {
        const response = res.text();
        this.router.navigateByUrl('app-login')
    }, error => {
      alert("Please enter valid details");
    }
    
    )
  }
}
