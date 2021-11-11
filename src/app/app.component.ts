import { PostServiceService } from './post-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-app';
  allPosts:any = [];
  
  constructor(private ps:PostServiceService){
    
  }

  ngOnInit() {
    this.ps.getPosts().subscribe((data)=>{
      this.allPosts = data;
    });
  }
}
