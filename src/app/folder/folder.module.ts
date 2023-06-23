import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ListuserComponent } from '../components/listuser/listuser.component';
import { UserComponent } from '../components/user/user.component';
import { UserPipe } from '../pipes/user.pipe';
import { CamComponent } from '../components/cam/cam.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,ListuserComponent,UserComponent,UserPipe,CamComponent]
})
export class FolderPageModule {}
