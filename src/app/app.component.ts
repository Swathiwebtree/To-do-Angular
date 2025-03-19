import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mytodoapp';
  tasks:any=[];
  newtask(content:string) {
    if(content !=''){
      this.tasks.push({id:this.tasks.length,title:content})
      console.log(this.tasks)
    }
  }

  removetask(id: number){
    this.tasks = this.tasks.filter((item:{id:number})=> item.id != id)
  }


  removealltasks(){
    this.tasks = []
  }
}
