import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private localstorageService:LocalstorageService
  ) {}
  registerForm: FormGroup;

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  register() {
    let registerModel: RegisterModel = Object.assign(
      {},
      this.registerForm.value
    );
    if(this.registerForm.valid){
      this.authService.register(registerModel).subscribe(
        (response) => {
          this.toastrService.info('Registered Successfully');
          this.localstorageService.create('token',response.data.token)
          this.router.navigate([""])
        },
        (errorResponse) => {
          this.toastrService.error(errorResponse.error.message);
        }
      );
    }else{
      this.toastrService.error("Please fill all the inputs correctly")
    }
  }
}
