import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ],
})
export class AppComponent {
  title:string  = 'Angular Crud(No DB) Beta';
  msg:string = '';

  empl = [
    {'name': 'Doctor', position: 'Timelord', email: 'timelordsdontneedmail@gallifrey.com'},
    {'name': 'Master', position: 'Timelord', email: 'timelordsdontneedmail@gallifrey.com'},
    {'name': 'Rassilion', position: 'Timelord President', email: 'timelordsdontneedmail@gallifrey.com'},
  ];

  model:any = {}; //object 1
  model2:any = {};//object 2
  hideUpdate:boolean = true;
  
  
  addEmpl():void{
    this.empl.push(this.model);
    this.msg ='Added Field';
  }
  deleteEmpl(i):void{
    var answer = confirm('Do you want to delete this item?')
    if (answer){
      this.empl.splice(i, 1)//deletes the item declared in the index
    }
    this.msg ='Deleted Field';
    
  }
  myValue;//declares a variable for storing the index
  editEmpl(i):void{
    this.hideUpdate = false;
    this.model2.name = this.empl[i].name;
    this.model2.position = this.empl[i].position;
    this.model2.email = this.empl[i].email;
    this.myValue = i;
    this.msg = "";
    
  }//declares in this method an index for the empl list and stores it in model2
  updateEmpl():void{
    let i = this.myValue;
    for(let j = 0; j < this.empl.length; j++)
    if( i == j){
      this.empl[i] = this.model2;
      this.model2 = {};
      this.msg ='Updated Field Successfully';
      
    }
  }

  closeAlert():void{
    this.msg = ""
  }

  show:boolean = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }
  toggleNotification(){
      this.toggle()
    setTimeout(()=>{
      this.show = false;
    }, 3000);
  }

}
