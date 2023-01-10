import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';

const routes: Routes = [{path:"create",component:CreateTemplateComponent},
{path:"update",component:UpdateTemplateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
