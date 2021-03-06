import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the WizardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {

  private todo : FormGroup;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams) {
    this.todo = this.formBuilder.group({
      injured: ["injured", Validators.required],
      EnlistingDate: ['', Validators.required],
      branch: ['' ]
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WizardPage');
    console.log('Number of slides are :dcdcd');
    this.lockNextSlide()
  }
  nextButton: boolean = true;

  logForm(){
    console.log(this.todo.value)
 }

  shouldLockSwipeToNext= false;

  slideChanged() {
    let index = this.slides.getActiveIndex() 
    console.log(index);
    if(index == 5) {
      
    this.shouldLockSwipeToNext = true;
    this.lockNextSlide()
    } else {
      this.shouldLockSwipeToNext = false;
      this.lockNextSlide()
    }
  }

  lockNextSlide(){
     ; //  shouldLockSwipeToNext can be either true/false
    this.slides.lockSwipeToNext(this.shouldLockSwipeToNext);
    console.log('Number of slides are :dcdcd'); 
  }
 
  //when navigating to the new slide when user clicks submit 
  onSubmit() {  
    this.shouldLockSwipeToNext = false;
    this.lockNextSlide()
    this.next();

    }

  next() {
    this.slides.slideNext(500);
  }

}
