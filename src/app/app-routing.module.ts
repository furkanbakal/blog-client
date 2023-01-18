import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminLayoutComponent, loadChildren: () =>
        import('./admin/admin-routing.module').then(module => module.AdminRoutingModule)
    }
]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }