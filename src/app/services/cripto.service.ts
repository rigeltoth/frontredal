import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cripto } from '../models/cripto.model';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  coins: Cripto[] = []
  url_api_cripto = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  constructor(private http: HttpClient) {}

  getCripto(){
    return this.http.get<Cripto[]>(this.url_api_cripto)
  }
}
