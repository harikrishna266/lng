import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-box',
  templateUrl: './program-box.component.html',
  styleUrls: ['./program-box.component.css']
})
export class ProgramBoxComponent implements OnInit {

  @Input() program;
  
  constructor() { }

  ngOnInit() {
  }

}
