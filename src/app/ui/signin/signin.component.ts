import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseEffect } from '../core/intent';
import { GoToDashboardEffect, OnEmailChangeAction, OnPasswordChangeAction, OnSignInClickAction, ShowLoginErrorEffect, SigninState } from './signin.intent';
import { SigninViewModel } from './signin.viewmodel';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SigninViewModel]
})

export class SigninComponent implements OnInit, OnDestroy {

  constructor(private readonly signinViewModel: SigninViewModel, private readonly router: Router, private toastr: ToastrService) { }

  state!: SigninState;
  private stateSubscription: Subscription | undefined;
  private effectSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.stateSubscription = this.signinViewModel.stateObservable.subscribe(state => {
      this.state = state;
    });
    this.effectSubscription = this.signinViewModel.effectObservable.subscribe(effect => {
      this.handleEffect(effect);
    });
  }

  handleEffect(effect: BaseEffect | null) {
    if (effect instanceof GoToDashboardEffect) {
       this.router.navigateByUrl('/dashboard'); 
    } else if (effect instanceof ShowLoginErrorEffect) {
      // show error using effect.data
    }
  }

  ngOnDestroy(): void {
    this.stateSubscription?.unsubscribe();
    this.effectSubscription?.unsubscribe();
  }

  onSignInClick() {
    this.signinViewModel.setAction(new OnSignInClickAction());
  }

  onEmailChange(value: Event) {
    this.signinViewModel.setAction(new OnEmailChangeAction((value.target as HTMLInputElement).value));
  }

  onPasswordChange(value: Event) {
    this.signinViewModel.setAction(new OnPasswordChangeAction((value.target as HTMLInputElement).value));
  }

}
