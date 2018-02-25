import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestGuideComponent } from '../test-guide/test-guide.component';
import { TestResultsComponent } from '../test-results/test-results.component';
import { Router } from '@angular/router';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public questions:any = [];
  public pagingIndex:number = 0;
  public pageSizeOptions = [ 10, 25, 100];
  public startTest:boolean = false;
  public minute:any  = .1;
  public seconds:any =0;
  pageEvent: PageEvent;
  public testmodal;

  startTimer() {
    const interval = 1000;
    const duration = (this.minute*60*1000)+(this.seconds*1000) ;
    this.startTest = true;

    const stream$ = Observable.timer(0, interval)
      .finally( () => this.congrats())
      .takeUntil(Observable.timer(duration))
      .map(value => duration - 1000*value );
      stream$.subscribe(value => { 
          this.minute = Math.floor(value/(1000*60));
          this.seconds = (value%(1000*60)/1000);          
      });
  }

  constructor(public dialog: MatDialog, public router:Router,public dialogRef: MatDialogRef<TestComponent>) { 
    for(let i=0;i<100;i++) {
      this.questions = [...this.questions,{q:'this is a question'+ i, id:i, sele:'',o:[
                                                                    {option: 'a',key: 1},
                                                                    {option: 'b',key: 2},
                                                                    {option: 'c',key: 3},
                                                                    {option: 'd',key: 4},
                                                                    {option: 'e',key: 5}                                                                    
                                                                  ]}];
    }
  }
  openTest() {
    this.testmodal = this.dialog.open(TestGuideComponent, {
      height: '80%',
      width: '80%',
      disableClose: true,
      data: { name: 'ww', animal: 2 }
    });

    this.testmodal.afterClosed()
    .subscribe(result => {
      this.startTimer();     
    });
  }

  congrats() {
     let dialogRef = this.dialog.open(TestResultsComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed()
    .subscribe((result) => {
      this.dialogRef.close();
    });
  }
  ngOnInit() {
      this.openTest();
  }

}
