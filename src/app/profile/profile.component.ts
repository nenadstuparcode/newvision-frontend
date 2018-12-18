import { Component } from '@angular/core'
import { JobService } from './../job.service';
import { SkillsetService } from './../skillset.service';
import { NgForm } from '@angular/forms';
import { AuthenticationService, UserDetails, DriverLicenceDetails,  EditData, TokenPayload, EducationDetails, ExperienceDetails , SkillsetDetails, LanguageDetails } from './../authentication.service';
import { EducationService} from './../education.service';
import { ExperienceService } from './../experience.service';
import { LanguageService } from './../language.service';
import { DriverlicenceService } from './../driverlicence.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','../../assets/styles/apps/file-manager.min.css','../../assets/styles/themes/primary.min.css']
})
export class ProfileComponent {

  details:UserDetails
  detailsEducation:EducationDetails
  detailsExperience: ExperienceDetails
  detailsSkillset: SkillsetDetails
  detailsLanguage: LanguageDetails
  detailsDriverLicence: DriverLicenceDetails

  constructor(private auth:AuthenticationService,private router: Router, private jobservice:JobService, private educationservice: EducationService , 
  private experienceservice: ExperienceService, private  driverlicenceservice: DriverlicenceService, private languageservice: LanguageService ,private skillsetservice: SkillsetService) {}

  id = this.auth.getUserID()
  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user  
      },
      err => {
        console.error(err)
      }
    )
    this.educationservice.getEducation(this.id).subscribe(
      education => {
        this.detailsEducation = education
        console.log(education)
      },
      err=>{
        console.log(err)
      }
    )
    this.experienceservice.getExperience(this.id).subscribe(
      experience => {
        this.detailsExperience = experience
        console.log(experience)
      },
      err=>{
        console.log(err)
      }
    )
    this.skillsetservice.getSkillset(this.id).subscribe(
      skillset => {
        this.detailsSkillset = skillset
        console.log(skillset)
      },
      err=>{
        console.log(err)
      }
    )
    this.languageservice.getLanguage(this.id).subscribe(
      language => {
        this.detailsLanguage = language
        console.log(language)
      },
      err=>{
        console.log(err)
      }
    )
    this.driverlicenceservice.getDriverLicence(this.id).subscribe(
      driverlicence => {
        this.detailsDriverLicence = driverlicence
        console.log(driverlicence)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
