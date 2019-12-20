import { Component, OnInit } from '@angular/core';

import { Test } from '@app/models';

@Component({
  selector: 'mdev-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public test: Test = {
    id: '1'
  };
  ngOnInit() {
    console.log(this.test);
  }
}
