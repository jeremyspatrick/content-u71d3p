import {Component, Input,ViewChild,ViewContainerRef,ComponentFactoryResolver,AfterViewInit} from "@angular/core";

@Component({
    selector: 'tab-container',
    template: '<ng-content #vcc></ng-content>'
})
export class TabContainerComponent implements AfterViewInit {
  //  @ViewChild('vc',{read:ViewContainerRef}) vc:ViewContainerRef;


    @Input()
    title: string;

    @Input()
    template;

    constructor(private resolver: ComponentFactoryResolver) {
    }

  ngAfterViewInit(){
    // this.vc.createEmbeddedView(this.newTab);

  }
}