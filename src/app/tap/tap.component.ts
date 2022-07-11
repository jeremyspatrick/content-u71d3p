import { Component, OnInit,ContentChildren } from '@angular/core';
import{TabContainerComponent} from '../hello.component';
@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

    @ContentChildren(TabContainerComponent)
    tabs: TabContainerComponent[];
  constructor() { }

  ngOnInit() {
  }

}

