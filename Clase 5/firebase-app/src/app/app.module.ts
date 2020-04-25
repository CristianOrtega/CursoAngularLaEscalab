import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TableComponent } from './shared/components/table/table.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { ListPostComponent } from './components/posts/list-post/list-post.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { AdminModule } from './components/admin/admin.module';
import { ProfileModule } from './components/admin/profile/profile.module';
import { LoginModule } from './components/auth/login/login.module';
import { AboutModule } from './components/pages/about/about.module';
import { HomeModule } from './components/pages/home/home.module';
import { ListPostModule } from './components/posts/list-post/list-post.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProfileComponent,
    LoginComponent,
    ModalComponent,
    TableComponent,
    ToolbarComponent,
    AboutComponent,
    ContainerAppComponent,
    HomeComponent,
    DetailsPostComponent,
    EditPostComponent,
    ListPostComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    ProfileModule,
    LoginModule,
    AboutModule,
    HomeModule,
    ListPostModule,
    NewPostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
