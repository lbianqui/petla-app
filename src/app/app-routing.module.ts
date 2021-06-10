import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefugiosComponent } from './pages/refugios/refugios.component';

const routes: Routes = [
  {path: 'refugios', component:RefugiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
