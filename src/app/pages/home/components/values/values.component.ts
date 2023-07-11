import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  isMobile: boolean = false;
  width: number = 0;
  showText1: boolean = false;
  showText2: boolean = false;
  showText3: boolean = false;
  showText4: boolean = false;


  constructor() {
  }

  ngOnInit(): void { }

  joinUs() {
    window.open("https://b4a.gupy.io/");
  }

  listenerResize() {
    this.width = window.innerWidth;
    if (this.width > 990) {
      this.isMobile = false;
      this.showText1 = true;
      this.showText2 = true;
      this.showText3 = true;
      this.showText4 = true;
    } else {
      this.isMobile = true;
      this.showText1 = false;
      this.showText2 = false;
      this.showText3 = false;
      this.showText4 = false;
    }
  }

  handleShowTexts(text: any) {
    if (this.isMobile) {
      if (text === 1) {
        this.showText1 = !this.showText1;
        this.showText2 = false;
        this.showText3 = false;
        this.showText4 = false;
      }
      if (text === 2) {
        this.showText1 = false;
        this.showText2 = !this.showText2;
        this.showText3 = false;
        this.showText4 = false;
      }
      if (text === 3) {
        this.showText1 = false;
        this.showText2 = false;
        this.showText3 = !this.showText3;
      }

      if (text === 4) {
        this.showText1 = false;
        this.showText2 = false;
        this.showText3 = false;
        this.showText4 = !this.showText4;
      }
    }
  }

}
