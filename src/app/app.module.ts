import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostComponent } from './all-post/all-post.component';
import { FollowingComponent } from './following/following.component';
import { FsvoritesComponent } from './fsvorites/fsvorites.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouteGuard } from './auth/route-guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostComponent,
    FollowingComponent,
    FsvoritesComponent,
    MyPostsComponent,
    SignUpComponent,
    LoginComponent,
    FavoritesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
