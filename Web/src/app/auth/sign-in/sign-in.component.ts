import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService, ARLET } from '../../@web-core/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loaiDangKi = [
    {
      value : 'NguoiNau',
      name : 'Người nấu'
    },
    {
      value : 'NguoiAn',
      name : 'Người ăn'
    },
  ];

  public statusdangKy = false;
  public formDangKy: FormGroup;
  public formDangNhap: FormGroup;
  public checkValidPassword = true;
  public checkComparePassword = true;
  public checkValidUsername = true;
  public checkValidEmail = true ;
  public arletPassword = ARLET.USER.PASSWORD_ENOUGH_LENGTH;
  public arletRePassword = ARLET.USER.PASSWORD_NOT_VALID;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  )
  { }

  ngOnInit() {
    this.addForm();
  }

  private addForm() {
    this.formDangNhap = this.fb.group({
      TenDangNhap: ['', Validators.required],
      Password: ['', Validators.required]
    });

    this.formDangKy = this.fb.group({
      TenDangNhap: ['', Validators.required],
      Email: ['', Validators.required],
      rePassword: ['', Validators.required],
      Password: ['', Validators.required],
      HoVaTen: [null, Validators.required]
    });
  }

  public dangNhap() {
    this.authService.login(this.formDangNhap.value).subscribe((res: any) => {
      this.router.navigateByUrl('/layout');
    });
  }

  public dangKy() {
      this.authService.dangKy(this.formDangKy.value).subscribe((res: any) => {
        this.router.navigateByUrl('/layout');
      });
  }


  public checkPassword() {
    const temp = (this.formDangKy.value.Password).toString();
    this.checkValidPassword = (temp.length < 6) ? false : true;
    this.checkComparePassword = (this.formDangKy.value.Password.localeCompare(this.formDangKy.value.rePassword) !== 0) ? false : true;
  }

  public checkEmail() {
    this.checkValidEmail = this.authService.checkEmail(this.formDangKy.value.Email);
  }

  public checkUser() {
    this.checkValidUsername = this.authService.checkUsername(this.formDangKy.value.TenDangNhap);
  }

  public checkDangKy() {
    this.statusdangKy = !this.statusdangKy;
  }
}