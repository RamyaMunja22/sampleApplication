import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems = [{'name':'Home', 'path':'', 'icon':'bars'},{'name':'Menu1', 'path':'Menu1', 'icon':'bars'},
                {'name':'Menu2', 'path':'Menu2', 'icon':'bars'}, {'name':'Menu3', 'path':'Menu3', 'icon':'bars'},
               {'name':'Menu4', 'path':'Menu4', 'icon':'bars'}]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(menuItem) {
    this.router.navigateByUrl('/home'+menuItem);
    if (menuItem.length > 0) {
      this.router.navigateByUrl('/home/'+menuItem);
    }
  }
}
