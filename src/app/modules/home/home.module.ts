import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpFormComponent } from './components/cp-form/cp-form.component';
import { CpTableComponent } from './components/cp-table/cp-table.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CpFormComponent,
    CpTableComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
