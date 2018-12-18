import { DriverlicenceService } from './driverlicence.service';
import { LanguageService } from './language.service';
import { SkillsetService } from './skillset.service';
import { ExperienceService } from './experience.service';
import { JobService } from './job.service';
import { EducationService} from './education.service';
import {UploadService} from './upload.service'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { UserTypeAuthGuardService } from './user-type-auth-guard.service';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { FileListComponent } from './file-list/file-list.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import { DashboardEmployerComponent} from './dashboard-employer/dashboard-employer.component'
import { ProfileCardComponent} from './profile-card/profile-card.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { SidebarEmployerComponent } from './sidebar-employer/sidebar-employer.component'
import { NavbarEmployerComponent } from './navbar-employer/navbar-employer.component'
import { BlankPageComponent} from './blank-page/blank-page.component'
import { EditProfileComponent} from './edit-profile/edit-profile.component';
import { MessengerComponent } from './messenger/messenger.component';
import { NotificationComponent } from './notification/notification.component';
import { PricingComponent } from './pricing/pricing.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyEditProfileComponent } from './company-edit-profile/company-edit-profile.component';
import { CompanyMessengerComponent } from './company-messenger/company-messenger.component';
import { CompanyNotificationComponent } from './company-notification/company-notification.component';
import { CompanyPricingComponent } from './company-pricing/company-pricing.component'
import { CompanyJobsComponent } from './company-jobs/company-jobs.component';
import { CompanyDocumentationComponent } from './company-documentation/company-documentation.component';
import { ClickstoppropagationDirective } from './clickstoppropagation.directive';
import { environment } from '../environments/environment';
import {UploadTest} from './upload-test/upload-test.component';





const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'inbox', component: MessengerComponent, canActivate:[AuthGuardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'edit' , component: EditProfileComponent, canActivate: [AuthGuardService]},
  { path: 'documentation' , component: FileListComponent , canActivate:[AuthGuardService]},
  { path: 'notifications' , component: NotificationComponent, canActivate:[AuthGuardService]},
  { path:'pricing' , component: PricingPlanComponent, canActivate:[AuthGuardService]},
  { path: 'messenger' , component: MessengerComponent , canActivate:[AuthGuardService]},
  { path: 'co/dashboard', component: DashboardEmployerComponent, canActivate:[UserTypeAuthGuardService]},
  { path: 'co/profile/edit', component: CompanyEditProfileComponent, canActivate:[UserTypeAuthGuardService]},
  { path: 'co/profile' , component:CompanyProfileComponent , canActivate: [UserTypeAuthGuardService]},
  { path: 'co/jobs' , component: CompanyJobsComponent , canActivate: [UserTypeAuthGuardService]},
  { path: 'co/messenger', component: CompanyMessengerComponent, canActivate:[UserTypeAuthGuardService]},
  { path: 'co/notifications', component: CompanyNotificationComponent, canActivate:[UserTypeAuthGuardService]},
  { path: 'co/pricing' , component: CompanyPricingComponent, canActivate: [UserTypeAuthGuardService]},
  { path: 'co/documentation' , component:  FileListComponent, canActivate:[UserTypeAuthGuardService]},
  { path: 'upload' , component: UploadTest},
  { path: '' , component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardEmployerComponent,
    ProfileCardComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarEmployerComponent,
    NavbarEmployerComponent,
    BlankPageComponent,
    EditProfileComponent,
    DashboardComponent,
    DocumentationComponent,
    FileListComponent,
    MessengerComponent,
    NotificationComponent,
    PricingComponent,
    PricingPlanComponent,
    CompanyProfileComponent,
    CompanyEditProfileComponent,
    CompanyMessengerComponent,
    CompanyNotificationComponent,
    CompanyPricingComponent,
    CompanyJobsComponent,
    CompanyDocumentationComponent,
    ClickstoppropagationDirective,
    UploadTest
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    AngularFirestoreModule ,
    AngularFireStorageModule ,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    UserTypeAuthGuardService,
    JobService,
    EducationService,
    ExperienceService,
    SkillsetService,
    LanguageService,
    DriverlicenceService,
    UploadService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}