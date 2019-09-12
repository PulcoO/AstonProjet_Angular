import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Actor } from '../../../../models/actor.model';
import { Category } from '../../../../models/category.model';
import { ActorService } from '../../../../services/actor.service';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.scss']
})
export class AddactorComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private ActorService: ActorService) { }

  ngOnInit() {
    this.form = this.formBuilder.group(new Actor());
  }

  onSave() : void {
    this.ActorService.add(this.form.value).subscribe( console.log, console.error);
    console.log(this.form.value)
  }

}
