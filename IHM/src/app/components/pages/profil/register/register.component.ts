import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { User } from "../../../../models/user.model";
import { UserService } from "../../../../services/user.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private UserService: UserService) { }

  ngOnInit() {
    this.form = this.formBuilder.group(new User());
  }

  onSave(): void {
    this.UserService.add(this.form.value).subscribe(
      console.log, console.error
    );
    console.log(this.form.value)
  }

}
