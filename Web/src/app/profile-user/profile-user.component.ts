import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../@web-core/http';
import { Router } from '@angular/router';
import { PATTERN } from '../@web-core/http/@http-config/pattern';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  public formUser: FormGroup;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _userService: UserService,
  ) { }

  ngOnInit() {
    this.FormAdd();
  }

  private FormAdd() {
    this.formUser = this.fb.group({
      TenDangNhap: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      HoVaTen: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern(PATTERN.EMAIL)]],
      SDT: ['', [Validators.required, Validators.pattern(PATTERN.PHONE)]],
      birthday: [new Date(Date.now())]
    });
}
}
