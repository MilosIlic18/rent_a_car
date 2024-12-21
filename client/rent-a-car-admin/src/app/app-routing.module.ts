import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./modules/auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'main',loadChildren:()=>import('./modules/main/main.module').then(mod=>mod.MainModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
