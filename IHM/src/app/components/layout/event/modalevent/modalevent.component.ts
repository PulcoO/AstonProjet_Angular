import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { EventHome } from "../../../../models/event.model";
import { EventService } from "../../../../services/event.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-modalevent',
  templateUrl: './modalevent.component.html',
  styleUrls: ['./modalevent.component.scss']
})
export class ModaleventComponent implements OnInit {
  form: FormGroup
  event: EventHome = {} as EventHome;

  constructor(private formBuilder: FormBuilder, private EventService: EventService,private router: Router) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group(new EventHome());
  }

  onSave(): void {
    this.EventService.add(this.form.value).subscribe(
      console.log, console.error
    );
    console.log(this.form.value)
    this.router.navigate(['/'])
  }


}
