import {NgModule} from '@angular/core';
import {BrowerModule} from '@angular/platform-browser'
import { AppComponent } from './app.component'

@NgModule({
    imports: [BrowerModule], 
    declerations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}