import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CamService } from 'src/app/services/cam.service';
import { UserPhoto } from 'src/app/services/userphoto';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss'],
})
export class CamComponent  implements OnInit {

  constructor(public camservice:CamService, public actionSheetController: ActionSheetController) { }

  async ngOnInit() {
    await this.camservice.loadSaved();
  }

  takephoto()
  {
    this.camservice.takePhoto();
  }


  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.camservice.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }
}
