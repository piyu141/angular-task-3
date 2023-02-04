import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accordianservice } from '../services/accordian.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  myForm : FormGroup | any
  
  constructor(private accService : Accordianservice){}
  AccordianList = this.accService.AccList

  ngOnInit(){
   this.myForm = new FormGroup({
    header : new FormControl('',Validators.required),
    body : new FormControl('',Validators.required),
   })
  }

  handleClick(){
    let obj = {header:this.myForm.value.header,body : this.myForm.value.body}
    this.AccordianList.push(obj)
    this.myForm.reset()
  }
   
}
