import { AutenticationService } from 'src/app/services/autentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Conflux
//import { AutenticationService } from '../../../../services/autentication.service';

@Component({
  selector: 'app-gatekeeper-container',
  templateUrl: './gatekeeper-container.component.html',
  styleUrls: ['./gatekeeper-container.component.scss']
})
export class GateKeeperContainerComponent implements OnInit {

  constructor(
    private _router: Router,
    private confluxAuth: AutenticationService, 
  ) {
    // ...
  }

  ngOnInit(): void {
    //console.log("GateKeeper init: ", this.confluxAuth.getUserLogge());
    this._router.navigate(['/rosco']);
    /*if (this.confluxAuth.getUserLogge() != null) {
      console.log("this.confluxAuth.getUserLogge():", this.confluxAuth.getUserLogge());
      switch (this.confluxAuth.recoverRol()) {
    
        case 0: {
          this._router.navigate(['/rosco']);

          break;
        }

        default: {
          this._router.navigate(['/login']);
          break;
        }
        
      }

    } else {
      console.log("Redireccion al login por no estar logueado");
      this._router.navigate(['/login']);
    }*/

  }

}