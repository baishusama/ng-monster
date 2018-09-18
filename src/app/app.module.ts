import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToasterModule } from './components/toaster/toaster.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToasterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
