import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:'Tacinin değişimi',
      imageUrl: 'assets/değişim.jpg',
      username: '@taci',
      content: 'Tacinin muhteşem değişimi !'
    },
    {
      title:'Peri Taci',
      imageUrl: 'assets/geldi.jpg',
      username: '@taciiii',
      content: 'Taci peri oluyor !'
    },
    {
      title:'Tacinin İsteği',
      imageUrl: 'assets/tacii.jpg',
      username: '@anil',
      content: 'Taci çocuk istiyor !'
    }
  ]
}
