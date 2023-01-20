import { Component, OnInit, Input } from '@angular/core'; //Input sonradan eklendi..

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
/*Bir componentten diğer component’e data geçerken (angularda) aldığımız yerden input keyword’ü ile alınmalı.*/
export class NewcomponentComponent implements OnInit {
  @Input() title:string = ''; //İlk başta kızacaktır. Kızarır.. :String ile tipini belirtiriz.
  @Input() imageUrl:string = ''; //Yine kızacaktır çünkü bir başlangıç değeri ister.. Boş bir string verildi.
  @Input() username:string = '';
  @Input() content:string = ''; //NOT: APP.COMPONENT.HTMLDEKİ DEĞİŞKENLERİN İSİMLERİ VERİLDİ.

  constructor() { }
  ngOnInit(): void {
  }
}
