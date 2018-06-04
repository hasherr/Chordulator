import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChordsInKeyComponent } from './chords-in-key/chords-in-key.component';
import { GenerateProgressionsComponent } from './generate-progressions/generate-progressions.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'chords-in-key', pathMatch: 'full'},
  { path: 'chords-in-key', component: ChordsInKeyComponent },
  { path: 'generate-progressions', component: GenerateProgressionsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChordsInKeyComponent,
    GenerateProgressionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
