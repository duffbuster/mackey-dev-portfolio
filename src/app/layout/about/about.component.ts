import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdev-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age: number;

  private birthday = new Date('04/08/1992');
  private today = new Date();

  constructor() {}

  ngOnInit() {
    this.age = this.today.getFullYear() - this.birthday.getFullYear();
  }
}
