import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public angularValue: number;
  public reactValue: number;
  public vueValue: number;

  public stopping: number;
  public collaborating: number;
  public listening: number;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.angularValue = 90;
      this.reactValue = 75;
      this.vueValue = 33;

      this.stopping = 50;
      this.collaborating = 75;
      this.listening = 100;
    }, 400);
  }
}
