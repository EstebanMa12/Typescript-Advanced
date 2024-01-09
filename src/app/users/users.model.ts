export enum ROLES{
  ADMIN =   "admin",
  CUSTOMER = "customer",
  SELLER = "seller",
}

export interface User{
  id: number|string;
  name: string;
  lastName: string;
  email: string;
  role: ROLES;

}
