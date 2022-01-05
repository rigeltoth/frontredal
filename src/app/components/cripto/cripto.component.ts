import { Component, OnInit } from '@angular/core';
import { CriptoService } from 'src/app/services/cripto.service';
import { Cripto } from 'src/app/models/cripto.model';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.css']
})
export class CriptoComponent implements OnInit {

  constructor(public criptoService: CriptoService) { }

  Filtredcoins: Cripto[] = []
  searchText = ''

  ngOnInit(): void {
    this.getCripto()
  }

  getCripto(){
    this.criptoService.getCripto().subscribe(
      res => {
        this.criptoService.coins = res
        this.Filtredcoins = res
        console.log(this.criptoService.coins);
      },
      err => console.error(err)
    )
  }

  searchCoin(){
    this.Filtredcoins = this.criptoService.coins.filter(coin => 
      coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.searchText.toLowerCase()) )
  }
}
