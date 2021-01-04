import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacePipe } from './convert.to.space';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacePipe
  ]
})
export class SharedModule { }
