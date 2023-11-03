// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contentLoaded = false;
  hoverButton = false;
  buttonMove = 0;
  starCount = new Array(100); // Number of stars
  shootCount=new Array(5)
  selectedBut=false;
  constructor(){}
  ngOnInit() {
    // Simulate content loading after a delay
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000); // Adjust the delay as needed
  }

  onMouseOverButton() {
    if (this.hoverButton) {
      this.buttonMove = 10; // Adjust the distance to move
    }
  }

  onMouseOutButton() {
    if (this.hoverButton) {
      this.buttonMove = 0;
    }
  }

  getStarted(){
    this.selectedBut=true;
  }
}
