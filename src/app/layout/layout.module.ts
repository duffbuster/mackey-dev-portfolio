import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

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
