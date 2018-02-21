import { Component, OnInit , HostListener} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openTest() {
    let dialogRef = this.dialog.open(TestComponent, {
      height: '90%',
      width: '90%',
      disableClose: true,
      data: { name: 'ww', animal: 2 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  // @HostListener('mouseover') onMouseOver() { 
  //   let part = this.el.nativeElement.querySelector('.card-text') 
  //   this.renderer.setElementStyle(part, 'display', 'block'); 
  // }
}
