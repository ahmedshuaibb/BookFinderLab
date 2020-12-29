import { Component } from '@angular/core';
import {BookSearchService} from './book-search.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulab3';

  
  
  data: any;
  name: any;

  constructor(private bookService:BookSearchService){
   
  }

  searchBooks(){

    
    this.name=document.getElementById('user');
    this.name=this.name.value;
    this.bookService.setParram(this.name);
    
    this.bookService.getData().subscribe({
      next: (data) => {
        data['items'].forEach(element => {
          console.log(element.volumeInfo.title);
        });
        this.data=data['items']; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })
    
  }


  }

