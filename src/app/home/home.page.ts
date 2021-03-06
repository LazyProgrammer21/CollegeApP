import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 
  datas: [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 5,
    centeredSlides: true
  };
 
 
  constructor(
    private router: Router, 
    public db:AngularFirestore, private storage:Storage
    ) { }
 
  ngOnInit() {
    this.getAllPosts().subscribe((data: any) => {
      this.datas = data,this.storage.set('college', data);
      console.log(data);
    });
  }
 
  getAllPosts() {
    return this.db
      .collection("allcollege")
      //.doc("vaf3q5sDJmXxD1FeQZAY")
      //.collection("BachelorCollege")
      

      .valueChanges();
  }
  async openDetail(data) {
    await this.storage.set('college',data)
      
     // this.storage.get('college').then((val)=>console.log(val))

    this.router.navigateByUrl('/detail');  }
}