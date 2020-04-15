import { Component, OnInit } from '@angular/core';



export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public target : Date
  ){
    } 
  }
  
@Component({ 
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  //ts array
  todos = [
    new Todo(1, 'learn to dance',true,new Date()),
    new Todo(2, 'become an angular expert',false,new Date()),
    new Todo(3, 'learn to sing',false,new Date()),
    new Todo(4, 'study for exam',true,new Date()),
  ]

  //ts object

  /* todo = {
    id :1,
   description: 'Learn to dance'

  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
