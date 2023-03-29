import { RosconometroModule } from './../rosconometro/rosconometro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// WebSpa GateKeeper
import { GateKeeperRoutingModule } from './gatekeeper-routing.module';
import { GateKeeperContainerComponent } from './container/gatekeeper-container/gatekeeper-container.component';

// WebSpa Admin Role
//import { AdminModule } from '../roles/admin/admin.module';

@NgModule({
  declarations: [
    GateKeeperContainerComponent
  ],
  imports: [
    CommonModule,
    GateKeeperRoutingModule,
    RosconometroModule, 
  ],
  exports:[
    GateKeeperRoutingModule,
  ]
})
export class GateKeeperModule { }