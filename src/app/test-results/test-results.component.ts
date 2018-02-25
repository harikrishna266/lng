import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<TestResultsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }
  
  close() {
    this.dialogRef.close();
  }
}
