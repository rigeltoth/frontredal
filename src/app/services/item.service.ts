import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url_api = "http://localhost:4000/api/items"

  items: Item[] = []
  FormItem: Item = {
    name: '',
    brand: '',
    price: 0,
    cant: 0
  }

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get<Item[]>(this.url_api)
  }

  createItem(item: Item){
    return this.http.post(this.url_api, item)
  }

  deleteItem(id: any){
    return this.http.delete(`${this.url_api}/${id}`)
  }

  uploadItem(item: Item){
    return this.http.put(`${this.url_api}/${item._id}`, item )
  }
}
