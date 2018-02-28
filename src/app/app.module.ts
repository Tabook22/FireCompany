import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GLocationComponent } from './g-location/g-location.component';
import { GmapComponent } from './gmap/gmap.component';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    PostComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    GLocationComponent,
    GmapComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'post', component: PostComponent},
      {path: 'news', component: NewsComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
