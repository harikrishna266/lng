import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.css']
})
export class HomeBoxComponent implements OnInit {

  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
