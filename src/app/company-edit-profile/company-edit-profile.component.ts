import { Router } from '@angular/router';
import { AuthenticationService, UserDetails, DriverLicenceDetails, JobDetails,  EditData, TokenPayload, EducationDetails, ExperienceDetails , SkillsetDetails, LanguageDetails } from './../authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobService } from './../job.service';
import { SkillsetService } from './../skillset.service';
import { NgForm } from '@angular/forms';
import { EducationService} from './../education.service';
import { ExperienceService } from './../experience.service';
import { LanguageService } from './../language.service';
import { DriverlicenceService } from './../driverlicence.service';
import { UploadService} from './../upload.service';

@Component({
  selector: 'app-company-edit-profile',
  templateUrl: './company-edit-profile.component.html',
  styleUrls: ['./company-edit-profile.component.css']
})
export class CompanyEditProfileComponent implements OnInit {
  details:UserDetails
  detailsEducation:EducationDetails
  detailsExperience: ExperienceDetails
  detailsSkillset: SkillsetDetails
  detailsLanguage: LanguageDetails
  detailsDriverLicence: DriverLicenceDetails
  detailsJob: JobDetails
  @ViewChild('f') form: NgForm;
  fileToUpload;
  constructor(private auth:AuthenticationService,private router: Router, private jobservice:JobService, private educationservice: EducationService , 
    private experienceservice: ExperienceService, private uploadservice: UploadService , private  driverlicenceservice: DriverlicenceService, private languageservice: LanguageService ,private skillsetservice: SkillsetService) {

  }
  id = this.auth.getUserID()
  credentials = {
    id: this.id,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    contact_number:"", 
    date_of_birth: "",
    user_type_id: 0 , 
    city: "",
    address: "",
    country: "",
    gender: "",
    company_name: "",
    short_desc: "",
    position: "",
    profession_type_name: ""
  };
 
   educationDetails = { 
     user_account_id: this.id,
     certificate_degree_name: "",
     Institute_university_name: "",
     starting_date:"",
     completion_date:"",
     education_desc:""
   }

   experienceDetails = {
    user_account_id: this.id,
    company_name: "",
    job_position: "",
    start_date: "",
    end_date: "", 
    job_description: ""
   }

   skillsetDetails = {
     user_account_id: this.id, 
     skill_set_name: ""
   }
   languageDetails = {
     user_account_id: this.id,
     language_name: "",
     language_level:0
   }
   driverLicenceDetails = {
    user_account_id: this.id,
    dr_licence_name: "", 
    dr_licence_type: ""
   }
   jobDetails = {
    user_account_id:this.id,
    created_date: "",
    job_title: "",
    job_description: "",
    job_deadline: "",
    job_profession: "",
    job_position: "",
    job_city: "",
    job_country: "",
    job_description_full: ""
   }



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

  editUser() {
    this.credentials = this.form.value;
    console.log(this.form.value)
    this.auth.edit(this.details.id, this.form.value).subscribe(
      ()=>{
       window.location.reload();
      },
      err=> {
        console.error(err)
      }
    
    )
}
editDataJob = {
}
editIDJob;

editJob(e){
  const index = e.target.id;
  console.log(index)
  this.editDataJob = this.detailsJob[index];
  console.log(this.detailsJob[index])
  console.log(this.detailsJob[index].id)
  const id = this.detailsJob[index].id;
  this.editIDJob = id; 
  console.log(this.editIDJob)
  console.log(this.editDataJob);
} 
saveEditedJob(){
   this.jobservice.editJob(this.editDataJob,this.editIDJob).subscribe(
     () => {
       window.location.reload();
     }, err => {
        console.error(err)
     }
   )
}
addJob() {
  console.log(this.jobDetails)
  console.log(this.id)
    this.jobservice.addJob(this.jobDetails).subscribe(
      ()=> {
        window.location.reload();
      }, err => {
        console.error(err)
      }
    )
}
deleteJob(e){
  const index = e.target.id;
  console.log(this.detailsJob[index].id)
  this.jobservice.deleteJob(this.detailsJob[index].id).subscribe(
    ()=>{
      window.location.reload();
      
     },
     err=> {
       console.error(err)
     }
  )
}

}
