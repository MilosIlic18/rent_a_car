import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./modules/main/main.module').then(mod=>mod.MainModule)},
  {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
