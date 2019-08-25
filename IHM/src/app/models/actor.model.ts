export interface Actor {
    id: string;
    name: string;
    geoLatitude: string;
    geoLongitude : string;
    adress: string;
    city: string;
    cp: string;
    country:string;
    website: string;
    description:string;
    telephonenumber:number;
    openhours: string;
    image: string;
    categories: object;
    created_at: Date;
    updated_at: Date;
}