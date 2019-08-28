import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public angularValue = 90;
  public reactValue = 75;
  public vueValue = 33;

  constructor() {}

  ngOnInit() {}
}
