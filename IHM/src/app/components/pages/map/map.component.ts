import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // // Icons 
  // public myIcon = L.icon({
  //   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  // });
  // // Variables Map
  // public myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
  // Variables 

  private editedActeur = [];
  public url = 'http://localhost:9090/actor';

  private categoryFilter = [];
  private categoryBtn = [];

  private finalEditedActeur = [] ;

  // Constantes
  private principal_categories = [
    {
      id: 532,
      name : "Alimentaire et agriculture",
      checked : true
    },
    {
      id: 557,
      name : "Habitat / Jardin",
      checked : true
    },
    {
      id: 802,
      name : "Collectifs citoyens",
      checked : true
    },
    {
      id: 794,
      name : "Lieux collaboratifs",
      checked : true
    },
    {
      id: 612,
      name : "Artisanat",
      checked : true
    }
  ]
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
    this.initialisationMap(this.url)
    this.initialisationData(this.url)
  }

  initialisationMap(url){

    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);
  
  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    
  });
  this.http.get(url).subscribe((data: any) => {
    console.log(data)
    data.forEach(actors => {
      L.marker([actors.geoLatitude, actors.geoLongitude], {icon: myIcon}).addTo(myfrugalmap).bindPopup(actors.name);
    });
  });
  //exemple de marqueur solitaire avec idication de popup
  //L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(myfrugalmap).openPopup();
  }
  initialisationData(url) {
    
  }

  addCategoryChecked(str,id,check) {

    if (!id){
      console.log(str)
      console.log(id)
      console.log(check)
    }

    let found=false;
    for (let j=0;j<this.editedActeur.length;j++) {
      if (str==this.editedActeur[j]) {
        this.editedActeur.splice(j,1);
        found=true;
        this.categoryBtn[id-1] = "type";
        break;
      }
    }
    if (!found) {
      this.categoryFilter.push(str);
      this.categoryBtn[id-1] = "type-activated";
    }
    //console.log(this.editedActeur);
    console.log(this.categoryFilter)
    let url = "";
    this.categoryFilter.forEach(function(actorId){
      url += actorId + "-";
      console.log('http://localhost:9090/category/'+ url)
    })

    this.initialisationMap('http://localhost:9090/category/'+ url)
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
