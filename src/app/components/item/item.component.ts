import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems()
  }
  
  resetForm(form: NgForm){
    form.reset()
  }

  getItems(){    
    this.itemService.getItems().subscribe(
    res => {
      this.itemService.items = res
    },
    err => console.log(err))
  }

  createItem(form: NgForm){
    if (form.value._id){
      this.itemService.uploadItem(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
        
      )
    }else{
      this.itemService.createItem(form.value).subscribe(
        res => {
          this.getItems()
          form.reset()
        },
        err => console.error(err) )
    }
  }

  deleteItem(id: any) {
    console.log(id);
    
    if (confirm('are you sure you want to delete it?')){
      this.itemService.deleteItem(id).subscribe(
        res => {
          this.getItems()
        },
        err => console.error(err)
      )
    }
  }
  
  uploadItem(item: Item){
    this.itemService.FormItem = item
  }
}

