import { BaseModel } from './../base.model';

export enum ROLES{
  ADMIN =   "admin",
  CUSTOMER = "customer",
  SELLER = "seller",
}

export interface User extends BaseModel{
  username: string
  role: ROLES;

}
