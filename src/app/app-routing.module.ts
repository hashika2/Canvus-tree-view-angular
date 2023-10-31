import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeView2Component } from './tree-view2/tree-view2.component';

const routes: Routes = [
  // {
  //   path: '/tree-view2',
  //   component: TreeView2Component
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
