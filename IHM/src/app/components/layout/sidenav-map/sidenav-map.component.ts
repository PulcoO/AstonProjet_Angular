import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-map',
  templateUrl: './sidenav-map.component.html',
  styleUrls: ['./sidenav-map.component.scss']
})
export class SidenavMapComponent implements OnInit {
  principal_categories = [
    {
      id: 532,
      name : "Alimentaire et agriculture",
      checked : false
    },
    {
      id: 557,
      name : "Habitat / Jardin",
      checked : false
    },
    {
      id: 802,
      name : "Collectifs citoyens",
      checked : false
    },
    {
      id: 794,
      name : "Lieux collaboratifs",
      checked : false
    },
    {
      id: 612,
      name : "Artisanat",
      checked : false
    }

  ]
  constructor() { }

  ngOnInit() {
    console.log(this.principal_categories[1].id)
  }

  editCategoriesSubmit(){
    // Access each item like this in PartyRoles
    //this.PartyRoles.forEach(role=>{
    //  console.log('Id: ' + role.Id + ', Name: ' + role.Name + ', Checked: ' + //role.Checked);
    //});

    // Or like this 
    let category = this.principal_categories.find(x=>x.id === 612);
    if(category !== undefined){
      console.log(category);
    }

    // Or a filetered list 
    let checkedRoles = this.principal_categories.filter(x=>x.checked === true);
    console.log(checkedRoles);

    // Or by array index
    //let roleTwo = this.PartyRoles[2];
    //console.log(roleTwo);
  }

}
