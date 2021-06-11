import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptaComponent } from './pages/adopta/adopta.component';
import { RefugiosComponent } from './pages/refugios/refugios.component';

const routes: Routes = [
  {path: 'refugios', component:RefugiosComponent},
  {path: 'adopta', component:AdoptaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
