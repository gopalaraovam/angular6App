import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.scss']
})
export class DemoCOmpComponent implements OnInit {
  firstName: string = "Demo";
  empLIst: any = [
    { fistName: "Sample" },
    { fistName: "Sample2" },
    { fistName: "Sample3" },
    { fistName: "Sample4" }
  ]
  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

}
