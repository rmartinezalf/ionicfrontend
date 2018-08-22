import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { ViewOrContainerState } from '../../../node_modules/@angular/core/src/render3/interfaces';
import { MyserviceProvider } from '../../providers/myservice/myservice'
/**
 * Generated class for the CountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-count',
  templateUrl: 'count.html',
  providers: [MyserviceProvider]
})
export class CountPage {
  // https://ghibliapi.herokuapp.com/films
  // https://github.com/JerryLagos/julion-ion.git
  options: Array<{option: string, nota:string, img: string}>;
  listD:object = {error: true, data: []};
  listC:object = {error: true, data: []};
  formu:object = {name: '', email: '', login: ''};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public alertCtrl: AlertController,
    public rest: MyserviceProvider) { 

      // for (let index = 0; index < 5; index++) {
      //   this.personas.push({
      //     nombre: 'jerry' + 0,
      //     apellido: 'Lagos' + 0,
      //     cedula: "1000"+index+"58"
      //   })
        
      // }



    }

    // funDelete(i){
    //   this.personas.splice(i, 1);
    // }

  // Proceso para que se inicie de forma automatica
    list :Array<any> = [];
    ngOnInit(): void {
      
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.options = [
        {option: 'Usuario', nota: 'usuario', img: 'imagen'},
        {option: 'Contraseña', nota: 'Dedicado para la pass', img: 'imagen'},
        {option: 'Electiva', nota: 'electiva', img: 'imagen'},
        {option: 'Elect 2', nota: 'asdfds sdf ', img: 'imagen'},
        {option: 'elect 3', nota: 'dkr', img: 'imagen'}
      ]
    } 

  // Funcion para guardar
  // Funcion para consular
  // Funcion para editar
  // Funcion para editar
  // Proceso para traer mi servicio desde el mas alla y ponerlo mas aca 

  getService(){
    this.rest.myApi().subscribe((res)=> {
        if (res) {
          this.listD = {error: false, data: res};
          console.log(typeof this.listD, this.listD)
        }
    })
  }

  getArticle(){
    this.rest.getArticles().subscribe((res)=> {
      if (res) {
        this.listC = {error: false, data: res};
        console.log(typeof this.listC, this.listC)
      }
  })
  }

  viewData(data:any){
    console.log(data);
  }
  // Alertas para ionic
  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'New Alert',
      subTitle: 'This is my example to a alert to create',
      buttons: [
        {
          text: 'ok',
          handler: data => {
            console.log("click sobre ok")
          }
        },{
          text: 'Cancel',
          handler: data => {
            console.log("Click sobre cancelar")
          }
        }
      ]
    })

    alert.present();
  }
  // Sheet buttons
  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // Proceso para que me muestra donde estoy dando clic
  selectOp(data): void {
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountPage');
  }

}



