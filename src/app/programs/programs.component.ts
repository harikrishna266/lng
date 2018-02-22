import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {


  public programs: any = [];

  constructor() {
      this.programs.push({image:'image',h1:'this  my 1st title', para: 'lorum gymsum fghjkl'});
      this.programs.push({image:'image',h1:'this is 2nd title', para: 'lorum gymsum fghjkl'});    
      this.programs.push({image:'image',h1:'this is 3d title', para: 'lorum gymsum fghjkl'});   
  }

  ngOnInit() {
  }

}
