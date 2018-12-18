import { Router } from '@angular/router';
import { AuthenticationService, UserDetails, DriverLicenceDetails, JobDetails,  EditData, TokenPayload, EducationDetails, ExperienceDetails , SkillsetDetails, LanguageDetails } from './../authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobService } from './../job.service';
import { SkillsetService } from './../skillset.service';

import { EducationService} from './../education.service';
import { ExperienceService } from './../experience.service';
import { LanguageService } from './../language.service';
import { DriverlicenceService } from './../driverlicence.service';
import { UploadService} from './../upload.service';
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  details:UserDetails
  detailsEducation:EducationDetails
  detailsExperience: ExperienceDetails
  detailsSkillset: SkillsetDetails
  detailsLanguage: LanguageDetails
  detailsDriverLicence: DriverLicenceDetails
  detailsJob: JobDetails
  constructor(private auth:AuthenticationService,private router: Router, private jobservice:JobService, private educationservice: EducationService , 
    private experienceservice: ExperienceService, private uploadservice: UploadService , private  driverlicenceservice: DriverlicenceService, private languageservice: LanguageService ,private skillsetservice: SkillsetService) {

  }
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
    this.jobservice.getJob(this.id).subscribe(
      job => {
        this.detailsJob = job
        console.log(job)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
