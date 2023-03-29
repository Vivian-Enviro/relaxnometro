import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { WxResponse } from 'src/app/models/wxresponse';
import { AutenticationService } from 'src/app/services/autentication.service';

import { environment } from '../../../../../environments/environment';

//import { ConfluxAuthService } from '../../../../../conflux/services/conflux-auth.service';
//import { WxResponse } from '../../../conflux/models/wxresponse';


@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SignInPageComponent implements OnInit, OnDestroy {

  public loading: boolean = false;

  public userIncorrect: boolean = false;

  public signInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public inicio: string = 'Iniciar Sesión';
  public signInInvalid: boolean = false;

  private signInSubscription$: Subscription ;

  constructor(
    private _formBuilder: FormBuilder, 
    private confluxAuth: AutenticationService,
    private router: Router,
 //   public dialog: MatDialog
  ) {
    // ...
    this.signInSubscription$ = new Subscription();
    console.log("el loginnnnn");
  }

  ngOnInit(): void {
    console.log("Login");
    // initialize form
    if (!environment.production){
      this.signInForm = this._formBuilder.group({
        email    : ['glassword@gmail.com', [Validators.required, Validators.pattern(environment.expresion)]],
        password : ['demo', Validators.required]
      });
    }else{
      console.log("Login");
      this.signInForm = this._formBuilder.group({
        email    : ['glassword@gmail.com', [Validators.required, Validators.pattern(environment.expresion)]],
        password : ['demo', Validators.required]
      });
    }

  }

  ngOnDestroy() {
    if (this.signInSubscription$ != undefined) this.signInSubscription$.unsubscribe;
  }

  // --------------------------------------------------------------------------
  // Submit: SignIn User
  // --------------------------------------------------------------------------
  doSignIn() {
    
    this.loading = true;


    
    this.signInSubscription$ = this.confluxAuth.getLogin(this.signInForm.value).subscribe(
      
      // Next
      (res: WxResponse) => {
        this.loading = false;
        if (res != null) {
          this.confluxAuth.saveUser(res.json);
          ///this.router.navigate(['/admin']);
          this.router.navigate(['']);
        }
      },

      // Error
      (e) => {
        this.loading = false;
        console.error(this.constructor.name, e);
      }

    );
  
    //this.router.navigate(['/admin']);

  }

}
