import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  items : Array <any> = [];

  constructor(public navCtrl: NavController) {
    this.items = [
      {base: "web",
        values:[
          "HTML",
          "CSS",
          "JS"
        ]
      },
      {base:"mobile",
        values:[
        "Ionic",
          "Java"
        ]
      }
    ];
  }

  itemSelected(item){

    console.log(item);
  }

}
