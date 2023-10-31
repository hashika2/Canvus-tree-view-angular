import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view2',
  templateUrl: './tree-view2.component.html',
  styleUrls: ['./tree-view2.component.css']
})
export class TreeView2Component {
  @Input() data: any;

}
