import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PenelitianComponent } from './penelitian/penelitian.component';
import { PengabdianComponent } from './pengabdian/pengabdian.component';
import { FrameworkComponent } from './framework/framework.component';
import { HttpClientModule } from '@angular/common/http';
import { PengabidanDetailsComponent } from './pengabidan-details/pengabidan-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PenelitianDetailsComponent } from './penelitian-details/penelitian-details.component';
import { PengabdianDetailsComponent } from './pengabdian-details/pengabdian-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PenelitianComponent,
    PengabdianComponent,
    FrameworkComponent,
    PengabidanDetailsComponent,
    DetailsPageComponent,
    PageHeaderComponent,
    SidebarComponent,
    PenelitianDetailsComponent,
    PengabdianDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component : AppComponent,
      },
      {
        path: 'about',
        component : AboutComponent,
      },
      {
        path: 'pengabdian',
        component : PengabdianComponent,
      },
      {
        path: 'penelitian',
        component : PenelitianComponent,
      },
      {
        path: 'penelitian/:penelitianId',
        component : DetailsPageComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
