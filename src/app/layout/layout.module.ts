import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SocialIconsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
