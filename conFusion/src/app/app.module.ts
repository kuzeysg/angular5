import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
         MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
         MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
         MatCardModule, MatIconModule, MatProgressSpinnerModule,
         MatDialogModule }         from '@angular/material';
import { FlexLayoutModule }        from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent }            from './app.component';
import { MenuComponent }           from './menu/menu.component';
import { DishdetailComponent }     from './dishdetail/dishdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
