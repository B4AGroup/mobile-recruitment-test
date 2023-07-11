import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PurposeComponent } from './components/purpose/purpose.component';
import { ValuesComponent } from './components/values/values.component';
import { IconsComponent } from './components/values/icons/icons.component';



@NgModule({
  declarations: [
    HomeComponent,
    PurposeComponent,
    ValuesComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
