import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  textoPrincipal: string = '';
  textoBuscado: string = '';
  textoResultado: any;
  infoDate: any;
  pipeDate = new DatePipe('en-US')
  constructor() {
    let date = new Date;
    this.infoDate =  date
    this.infoDate = this.pipeDate.transform(Date.now(), 'h:mm a');
  }

  ngOnInit(): void {


  }

  getSearch(seacrh: any){
    console.log(seacrh.target.value, 'Busqeuda');
    const text = this.textoPrincipal
    const items = seacrh.target.value
    let textSearch =text.search(items)
    console.log(textSearch, 'items')
    let x = text.indexOf(items)
    console.log(x, 'items')
    this.textoResultado = textSearch

  }
  // getSearchOfButton(){
  //   this.getSearch(this.textoBuscado)
  // }
}
