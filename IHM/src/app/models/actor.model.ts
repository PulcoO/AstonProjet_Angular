import {Category} from './category.model'
export class Actor {
    id?: string;
    name: '';
    geoLatitude: '';
    geoLongitude : '';
    adress: '';
    city: '';
    cp: '';
    country:'';
    website: '';
    description:'';
    telephonenumber:'';
    openhours: '';
    image: '';
    categories: Category[];
    
    created_at: Date;
    updated_at: Date;
}