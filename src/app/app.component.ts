import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit,
  ApplicationRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { TabContainerComponent } from './hello.component';
import { TapComponent } from './tap/tap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  @ViewChild('newTab')
  newTab: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private ap: ApplicationRef
  ) {}

  addTab(): void {
    this.vc.createEmbeddedView(this.newTab);
    console.log('addTab() triggered');
  }
}
