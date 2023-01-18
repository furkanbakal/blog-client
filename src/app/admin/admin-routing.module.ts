import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogManagementComponent } from "./components/blog-management/blog-management.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [ 
            { path: '', component: DashboardComponent },
            { path: 'blogs', component: BlogManagementComponent }
              
        ] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}