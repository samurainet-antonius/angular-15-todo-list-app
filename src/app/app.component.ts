import { Component } from '@angular/core';

// interface
interface TodoList {
  text: string,
  checked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  list: TodoList[]
  txtItem = ''

  constructor() {
    this.list = []
  }

  addItem() {
    this.list.push({ text: this.txtItem, checked: false})
    this.txtItem = ''
  }

  completeItem(item: any) {
    if(item.checked == false) {
      item.checked = true
    } else {
      item.checked = false
    }
  }

  deleteItem(index: number) {
    this.list.splice(index, 1)
  }

  deleteAll () {
    let todoLength = this.list.length
    this.list.splice(0, todoLength)
  }
}
