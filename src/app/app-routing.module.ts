import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './home/page2/page2.component';
import { Page1Component } from './home/page1/page1.component';


const routes: Routes = [
  {path: 'contact/:i', component: Page2Component},
  {path: 'home', component: Page1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
