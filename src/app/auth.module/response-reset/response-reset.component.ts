import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotifierService } from 'angular-notifier';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { responsePasswordStart } from '../state/auth.actions';


@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent implements OnInit {

  responseResetForm: FormGroup;
  notifier: NotifierService;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
    ) {
  }

   ngOnInit(): any {
    this.responseResetForm = new FormGroup(
      {
        newPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
      },
      {
        validators: this.validate(this.responseResetForm)
      }
    );
  }

  validate(form: FormGroup): any {
    const new_password = form.controls.newPassword.value;
    const confirm_password = form.controls.confirmPassword.value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }


  resetPassword(): any {
      const formData = new FormData();
      const data = {...this.responseResetForm.value};
      this.store.dispatch(responsePasswordStart(data));
      this.notifier.notify('success', 'The password has been changed!');
      this.authService.changeNewPasswordAfterReset(data)
        .subscribe((resp) => {
        });
    }
}
