import { IAdress } from "./iadress";
import { ICompany } from "./icompany";

export interface IUser
{
    id: number;
    name: string ;
    username: string;
    email: string;
    address: IAdress;
    phone: string;
    website: string;
    company: ICompany
    photo:string ;

}