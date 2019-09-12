import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
'../../../../assets/home/'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // // Icons 

  private defaultIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    popupAnchor: [1, -40],
    iconAnchor: [12, 36],
    //shadowUrl: '../../../assets/leaflet/images/marker-shadow.png',
  });
  // private redIcon = L.icon({
  //   iconUrl: '../../../assets/leaflet/images/marker-icon-red.png',
  //   popupAnchor: [1, -40],
  //   iconAnchor: [12, 36],
  //   shadowUrl: '../../../assets/leaflet/images/marker-shadow.png',
  // });
  // private greenIcon = L.icon({
  //   iconUrl: '../../../assets/leaflet/images/marker-icon-green.png',
  //   popupAnchor: [1, -40],
  //   iconAnchor: [12, 36],
  //   shadowUrl: '../../../assets/leaflet/images/marker-shadow.png',
  // });

  // // Variables Map
  public map;
  public icon;
  private layerArray = []
  private layer;
  // // Variables 

  private categoryNameChecked = [];
  private checkedList = [];
  private categoryChecked;

  private categoryFilter = []
  private categoryCheckedList = [] // permet d'enregistrer l'entrée dans le tableau d'un id connu ou inconnu en comparaison.

  private sousCategoryCheckedList = []
  private sousCategoryFilter = []

  public url = 'http://localhost:9090/actor';

  // Constantes
  
private sous_categories = 
  [
    {
      id : 538,
      name: 'Producteur & Artisan',
    },
    {
      id : 795,
      name: 'Création/Réparation',
    },
    {
      id : 799,
      name: 'Hacker Space',
    },
    {
      id: 575,
      name : "Jardin partagé"
    },
    {
      id: 574,
      name: "Jardin"
    },
    {
      id: 537,
      name : 'Circuits courts'
    },
    {
      id: 539,
      name : 'Amap/Paniers'
    },
    {
      id: 540,
      name : 'Légumes'
    },
    {
      id : 534,
      name: 'Epicerie & Supérette',
    },
    {
      id : 556,
      name: 'Autre produit',
    },
    {
      id : 824,
      name: 'Association',
    },
    {
      id : 600,
      name: "Sortie & Culture",
    },
    {
      id : 604,
      name: 'Sortie Nature',
    },
    {
      id : 601,
      name: 'Lieu pour sortir',
    }
  ]

  private principal_categories = [
    {
      id: 532,
      name : "Alimentaire et agriculture",
      checked : true,
      icon_class: 'fas fa-carrot',
      icon: '../../../../assets/home/alimentation.png',
      categories: 
      [
        {
          id : 538,
          name: 'Producteur & Artisan',
        },
        {
          id: 537,
          name : 'Circuits courts'
        },
        {
          id: 539,
          name : 'Amap/Paniers'
        },
        {
          id: 540,
          name : 'Légumes'
        },
        {
          id : 534,
          name: 'Epicerie & Supérette',
        },
        {
          id : 556,
          name: 'Autre produit',
        },
        {
          id : 824,
          name: 'Association',
        },
        {
          id : 600,
          name: "Sortie & Culture",
        },
        {
          id : 604,
          name: 'Sortie Nature',
        },
        {
          id : 601,
          name: 'Lieu pour sortir',
        }
      ]
    },
    {
      id: 557,
      name : "Habitat / Jardin",
      checked : true,
      icon_class: 'fas fa-home',
      icon: '../../../../assets/home/habitatJardin.png',
      categories:
      [
        {
          id: 575,
          name : "Jardin partagé"
        },
        {
          id: 574,
          name: "Jardin"
        },
      ]
    },
    {
      id: 802,
      name : "Collectifs citoyens",
      checked : true,
      icon_class: 'fas fa-user-friends',
      icon: '../../../../assets/home/iconcollectivité.png',
      categories: this.sous_categories
    },
    {
      id: 794,
      name : "Lieux collaboratifs",
      checked : true,
      icon_class: 'fas fa-hands-helping',
      icon: '../../../../assets/home/iconcollaboratif.png',
      categories: 
      [
        {
          id : 795,
          name: 'création/Réparation',
        },
        {
          id : 799,
          name: 'Hacker Space',
        },
      ]
    },
    {
      id: 612,
      name : "Artisanat",
      checked : true,
      icon_class: 'fas fa-tshirt',
      icon: '../../../../assets/home/Artisanat.png',
      categories: this.sous_categories
    }
  ]

  constructor(private http: HttpClient) {
    
   }
    // // INIT
  ngOnInit() {
    console.log(this.principal_categories)
    // // INIT MAP
    this.map = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.map);

    this.icon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    // LANCEMENT DES FONCTION CALL BACK
    
    this.initialisationData(this.url);
  }

  // initialisationMap(url){}
  initialisationData(url) {
    this.layerArray = [];
    this.layer ? this.layer.clearLayers(): '';
    this.http.get(url).subscribe((data: any) => {
      console.log(data)
      data.forEach(actor => {
        this.layerArray.push(L.marker([actor.geoLatitude, actor.geoLongitude], {icon: this.defaultIcon}).addTo(this.map).bindPopup(
          '<div class="card container_popUp" style="height:400px;width:300px;display: flex;border-radius: 2rem;margin-top: 0;margin-bottom: 0;margin-right: 0;margin-left: 0;">'+
          '<div class="view overlay image-container"style="overflow: hidden;min-height: 150px;height: 100px;padding: 0 0 0 0;margin: 0 0 0 0;">'+
          '<img class="card-img-top" style="height: 100%;" src="'+actor.image+'" alt="Card image cap">'+
          '<div class="title-img"">'+
          '<h3 class="card-title h5" style="height:100%;width: 100%;border-radius: 1rem;padding: 10px;background-color: rgba(154,205,50,0.2);text-align: center;color: black;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">'+actor.name+'</h3>'+
          '</div>'+
          '<a href="#"[routerLink]="["/actor", actor.id]">'+
          '<div class="mask rgba-white-slight"></div>'+
          '</a>'+
          '</div>'+
          '<div class="card-body">'+
          '<div class="card-header bg-transparent" style="border:none;">'+
          '<div class="header-top" style="width: 100%;height: 20%;display: flex;flex-direction: row;justify-content: space-between;">'+
          '</div>'+
          '<div class="header-bottom">'+
          '</div>'+
          '</div>'+
          '<div class="content" style="margin:0;padding:0;height: 70%;overflow: scroll;scrollbar-width: none;">'+
          '<p class="card-text description" style="font-size: 0.8rem;">'+actor.description+'</p>'+
          '</div>'+
          '<div class="card-footer text-muted text-center bg-transparent" style="height: 20%;margin:0;padding:0;width: 100%;">'+
          '<div class="button-read-more">'+
          '</a>'+
          '</div>'+
          '</div>'+
          '<div class="buttons_google text-center"style="bottom:15px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;">'+
          '<a type="button" class="btn-floating"><i class="fab fa-facebook-f"></i></a>'+
          '<a type="button" class="btn-floating"><i class="fab fa-twitter"></i></a>'+
          '<a type="button" class="btn-floating"><i class="fab fa-google-plus-g"></i></a>'+
          '</div>'+
          '</div>'+
          '</div>'
        ))
      });
      this.layer = L.layerGroup(this.layerArray)
      this.map.addLayer(this.layer)
    });
  }

  addCategoryChecked(id) {
    this.checkedList = [];
    let found=false;
    for (let j=0;j<this.categoryCheckedList.length;j++) {
      if (id == this.categoryCheckedList[j]) {
        this.categoryCheckedList.splice(j,1);
        found=true;
        break;
      }
    }
    if (!found) {
      this.categoryCheckedList.push(id);
      this.categoryFilter = this.categoryCheckedList; // Permet de checker booleen actived or not
      
    }
    let url = "";
    this.categoryFilter.forEach(function (actorId) {
      url += actorId + "-";
    })
    if (this.categoryFilter.length == 0) {
      this.initialisationData('http://localhost:9090/actor')
    } else {
      this.initialisationData('http://localhost:9090/actor/category/' + url)
    }

    this.categoryCheckedList.forEach(categoryId => {
      this.categoryChecked = this.getCategoryById(this.principal_categories, categoryId)
      if (this.categoryChecked) {
        let pos = this.checkedList.findIndex(category => {
        return this.categoryChecked.id == category.id
      });
        console.log(pos)
        if (pos == -1) {
          this.checkedList.push.apply(this.checkedList,[this.categoryChecked]) //doit etre une array pas un object ! 
          console.log(this.checkedList);
          console.log(this.categoryChecked);
        } else {
          this.checkedList.splice(pos, 1)
          console.log(this.checkedList)
        }
      }
    })
  }

  addSousCategoryChecked(id){
    let found=false;
    for (let j=0;j<this.sousCategoryCheckedList.length;j++) {
      if (id == this.sousCategoryCheckedList[j]) {
        this.sousCategoryCheckedList.splice(j,1);
        found=true;
        break;
      }
    }
    if (!found) {
      this.sousCategoryCheckedList.push(id);
      this.sousCategoryFilter = this.sousCategoryCheckedList; // Permet de checker booleen actived or not
      
    }
    let url = "";
    this.sousCategoryFilter.forEach(function (actorId) {
      url += actorId + "-";
    })
    if (this.sousCategoryFilter.length == 0) {
      this.initialisationData('http://localhost:9090/actor')
    } else {
      this.initialisationData('http://localhost:9090/actor/category/' + url)
    }
  }

  getCategoryById(data, id) {
    return data.find(categoryObj => {
     if (categoryObj.id === id) {
       return categoryObj;
     }
     return null;
   })
 }
}