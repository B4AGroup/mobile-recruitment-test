import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.svg',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() icon?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
