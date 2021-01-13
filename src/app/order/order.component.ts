import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { User } from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  addOrderForm: FormGroup;
  order: Order = new Order();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private authService: AuthService ,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.addOrderForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      manicure: new FormControl(null),
      user: new FormControl(this.user)
    });
  }

  addOrder(): any {
    const newOrder = {...this.addOrderForm.value};
    console.log(newOrder);
    this.authService.addOrderForm(newOrder)
      .subscribe((response) => {
        this.order = response;
        console.log(this.order);
        this.router.navigate(['/']);
      });
  }
}
