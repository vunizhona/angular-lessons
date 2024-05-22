import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../../header.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {smallLettersValidator} from "../../utils/smallLettersValidator";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent implements OnInit{
  public form: FormGroup

  user = {
    username2: '',
    email2: ''
  }

  constructor(private headerService: HeaderService, public fb: FormBuilder) {
    this.form =  this.fb.group({
      username: ['', [Validators.required, smallLettersValidator()]],
      email: ['', [Validators.required, Validators.email, smallLettersValidator()]],
    })
  }

  onFooterClick() {
    console.log(this.headerService.headerItems);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form)
  }

  onSubmitTemplateForm(form: any){
    console.log(form);
  }

  onCheckStatus() {
    console.log(this.user);
    this.user.username2 = ''
  }
}
