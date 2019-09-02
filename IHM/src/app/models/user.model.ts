export class User {
    id: number;
    firstname: string;
    lastname: string;
    pseudo: string;
    email: string;
    birthdate: Date;
    password: string;
    adress: string;
    city: string;
    cp: string;
    country: string;
    image: string;
    createdAt = new Date;
    updateAt = new Date;
}