import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', redirectTo: 'paginas', pathMatch: 'full'
},{
  path: 'paginas', loadChildren: () => import('./views/pages/main-page/main-page.module').then(
    (m) => m.MainPageModule
  )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
