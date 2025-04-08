import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverallServiceService } from '../overall-service.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
constructor(private service:OverallServiceService){}

  name:string='';
  email:string='';
  phoneNumber:number=0;
  date:string='';
  caption:string='Show Text';
  toDate: Date = new Date();
  cur=12334345;
  submit(){
    this.service.postMethod(this.name ,this.email).subscribe( Response=>{

      alert("Saved Sucessfully")
    })
  }
  showColor: boolean = false; 
  showInfo: boolean = false; 
  public changeData(): void { 
   this.showInfo = !this.showInfo; 
   if (this.showInfo) { 
   this.caption = 'Hide Text'; 
   } 
   else { 
   this.caption = 'Show Text'; 
   } 
}

}
