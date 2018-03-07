import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// RECOMMENDED (doesn't work with system.js)
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
import { CarouselComponent } from './carousel/carousel.component';


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
    AsideComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    // Specify your library as an import
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
