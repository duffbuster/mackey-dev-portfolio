import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public angularValue: number;
  public reactValue: number;
  public vueValue: number;

  public communication: number;
  public motivation: number;
  public collaboration: number;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.angularValue = 90;
      this.reactValue = 75;
      this.vueValue = 33;

      this.communication = 80;
      this.motivation = 100;
      this.collaboration = 90;
    }, 300);
  }
}
