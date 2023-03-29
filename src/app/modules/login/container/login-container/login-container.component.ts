import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

// Conflux
//import { ConfluxAuthService } from '../../../../../conflux/services/conflux-auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  constructor(
    private confluxAuth: AutenticationService, 
    private router: Router, 
  ) {
    // ...
  }

  ngOnInit(): void {
    if (this.confluxAuth.isUserLogge()) {
      this.router.navigate(['/admin']);
    } else{
      this.router.navigate(['/login']);
    }
  }

}
