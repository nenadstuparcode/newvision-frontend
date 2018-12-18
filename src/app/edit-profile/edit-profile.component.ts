
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails, DriverLicenceDetails,  EditData, TokenPayload, EducationDetails, ExperienceDetails , SkillsetDetails, LanguageDetails } from './../authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobService } from './../job.service';
import { SkillsetService } from './../skillset.service';
import { NgForm } from '@angular/forms';
import { EducationService} from './../education.service';
import { ExperienceService } from './../experience.service';
import { LanguageService } from './../language.service';
import { DriverlicenceService } from './../driverlicence.service';
import { UploadService} from './../upload.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';



const uri = 'http://localhost:2000/add';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css','../../assets/styles/apps/file-manager.min.css','../../assets/styles/themes/primary.min.css','../../assets/libs/izi-modal/css/iziModal.min.css'],
})
export class EditProfileComponent implements OnInit {
  details:UserDetails
  detailsEducation:EducationDetails
  detailsExperience: ExperienceDetails
  detailsSkillset: SkillsetDetails
  detailsLanguage: LanguageDetails
  detailsDriverLicence: DriverLicenceDetails
  @ViewChild('f') form: NgForm;
  fileToUpload: File = null;
    

  uploader: FileUploader = new FileUploader({url:uri});
  attachmentList:any = [];


  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  

   
  


  constructor(private uploadService: UploadFileService,private auth:AuthenticationService,private router: Router, private jobservice:JobService, private educationservice: EducationService , 
    private experienceservice: ExperienceService, private uploadservice: UploadService , private  driverlicenceservice: DriverlicenceService, private languageservice: LanguageService ,private skillsetservice: SkillsetService) {
     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
       this.attachmentList.push(response);
     }
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
    position: ""
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

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
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

///////////////   EDUCATION  /////////////////
  editData = {
  }
  editID;
  addEducation() {
    console.log(this.educationDetails)
      this.educationservice.addEducation(this.educationDetails).subscribe(
        ()=> {
          window.location.reload();
        }, err => {
          console.error(err)
        }
      )
  }
  deleteEducation(e){
    const index = e.target.id;
    console.log(this.detailsEducation[index].id)
    this.educationservice.deleteEducation(this.detailsEducation[index].id).subscribe(
      ()=>{
        window.location.reload();
        
       },
       err=> {
         console.error(err)
       }
    )
  }
  editEducation(e){
    const index = e.target.id;
    console.log(index)
    this.editData = this.detailsEducation[index];
    console.log(this.detailsEducation[index])
    console.log(this.detailsEducation[index].id)
    const id = this.detailsEducation[index].id;
    this.editID = id; 
    console.log(this.editID)
    console.log(this.editData);
  } 
  saveEdited(){
     this.educationservice.editEducation(this.editData,this.editID).subscribe(
       () => {
         window.location.reload();
       }, err => {
          console.error(err)
       }
     )
  }

  /////////////   EXPERIENCE   ///////////////
  editDataExp = {
  }
  editIDExp;
  addExperience() {
    console.log(this.experienceDetails)
      this.experienceservice.addExperience(this.experienceDetails).subscribe(
        ()=> {
          window.location.reload();
        }, err => {
          console.error(err)
        }
      )
  }
  deleteExperience(e){
    const index = e.target.id;
    console.log(this.detailsExperience[index].id)
    this.experienceservice.deleteExperience(this.detailsExperience[index].id).subscribe(
      ()=>{
        window.location.reload();
        
       },
       err=> {
         console.error(err)
       }
    )
  }
  editExperience(e){
    const index = e.target.id;
    console.log(index)
    this.editDataExp = this.detailsExperience[index];
    console.log(this.detailsExperience[index])
    console.log(this.detailsExperience[index].id)
    const id = this.detailsExperience[index].id;
    this.editIDExp = id; 
    console.log(this.editIDExp)
    console.log(this.editDataExp);
  } 
  saveEditedExperience(){
     this.experienceservice.editExperience(this.editDataExp,this.editIDExp).subscribe(
       () => {
         window.location.reload();
       }, err => {
          console.error(err)
       }
     )
  }


  ////////////   SKILL   /////////////
  addSkillset() {
    console.log(this.skillsetDetails)
      this.skillsetservice.addSkillset(this.skillsetDetails).subscribe(
        ()=> {
          window.location.reload();
        }, err => {
          console.error(err)
        }
      )
  }
  deleteSkillset(e){
    const index = e.target.id;
    console.log(this.detailsSkillset[index].id)
    this.skillsetservice.deleteSkillset(this.detailsSkillset[index].id).subscribe(
      ()=>{
        window.location.reload();
        
       },
       err=> {
         console.error(err)
       }
    )
  }

  ///////////  LANGUAGE  ////////////
  addLanguage() {
    console.log(this.languageDetails)
      this.languageservice.addLanguage(this.languageDetails).subscribe(
        ()=> {
          window.location.reload();
        }, err => {
          console.error(err)
        }
      )
  }
  deleteLanguage(e){
    const index = e.target.id;
    console.log(this.detailsLanguage[index].id)
    this.languageservice.deleteLanguage(this.detailsLanguage[index].id).subscribe(
      ()=>{
        window.location.reload();
        
       },
       err=> {
         console.error(err)
       }
    )
  }

  //////////  DRIVER LICENCE ///////////
  addDriverLicence() {
    console.log(this.driverLicenceDetails)
      this.driverlicenceservice.addDriverLicence(this.driverLicenceDetails).subscribe(
        ()=> {
          window.location.reload();
        }, err => {
          console.error(err)
        }
      )
  }
  deleteDriverLicence(e){
    const index = e.target.id;
    console.log(this.detailsDriverLicence[index].id)
    this.driverlicenceservice.deleteDriverLicence(this.detailsDriverLicence[index].id).subscribe(
      ()=>{
        window.location.reload();
        
       },
       err=> {
         console.error(err)
       }
    )
  }

  
    


}


