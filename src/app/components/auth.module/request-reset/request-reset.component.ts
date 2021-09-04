import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';
import {AuthService} from 'src/app/services/auth.service';
import { AppState } from 'src/app/state/app.state';
import { requestPassword ,resetNewPassword } from '../state/auth.actions';



@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {
  requestResetForm: FormGroup;
  notifier: NotifierService

  constructor(
    notifier: NotifierService,
    private authService: AuthService,
    private store: Store<AppState>
  ) { 
    this.notifier= notifier;
  }

  ngOnInit(): void {
    this.store.dispatch(requestPassword());
    this.requestResetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  requestResetUser(form): any {
    this.store.dispatch(resetNewPassword());
      const data = {...this.requestResetForm.value};
      const email = data.email;
      this.notifier.notify('success', 'The reset password link was sent!');
      this.authService.requestReset(email)
        .subscribe((resp) => {
        });
    }

}
