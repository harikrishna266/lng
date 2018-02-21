import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-test-guide',
  templateUrl: './test-guide.component.html',
  styleUrls: ['./test-guide.component.css']
})
export class TestGuideComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TestGuideComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
      this.dialogRef.close();
    }
    
    ngOnInit() {}

}
