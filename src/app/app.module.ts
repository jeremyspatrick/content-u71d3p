import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabContainerComponent } from './hello.component';
import { TapComponent } from './tap/tap.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TabContainerComponent, TapComponent],
  bootstrap: [AppComponent],
  entryComponents: [TabContainerComponent],
})
export class AppModule {}
