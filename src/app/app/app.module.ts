import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, CalendarUtils } from 'angular-calendar';
import {AppComponent} from '../app.component';
import {CalendarComponent} from './calendar/calendar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {DotLottiePlayer } from '@dotlottie/player-component';
import {NgxPaginationModule} from 'ngx-pagination';
import {PredictWorkflowComponent} from '../predict-workflow/predict-workflow.component';
import {CommonModule} from '@angular/common';


// Ajouter CalendarUtils dans les providers
@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot({
      provide: CalendarUtils,  // Ajout de CalendarUtils
      useClass: CalendarUtils, // Définir la classe pour le provider
    }),
    AppComponent,
    CalendarComponent,
    NgxPaginationModule,
    PredictWorkflowComponent,
    CommonModule
  ],
  providers: [CalendarUtils],
  bootstrap: [],
})
export class AppModule {}
