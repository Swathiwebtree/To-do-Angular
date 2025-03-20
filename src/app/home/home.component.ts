import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
  imports: [CommonModule]
})
export class HomeComponent {
  tasks: any= [];
  
  newtask(content: string) {
    if (content  != '') {
      this.tasks.push({ id: this.tasks.length, title: content });
      console.log(this.tasks);
    }
  }

  removetask(id: number) {
    this.tasks = this.tasks.filter((item: { id: number }) => item.id !== id);
  }

  removealltasks() {
    this.tasks = [];
  }
}
