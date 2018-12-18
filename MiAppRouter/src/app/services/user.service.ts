import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private _usuarios: User[]=[
  new User(1,'pepe','p@p.es',23),
  new User(1,'juana','p@p.es',23),
  new User(1,'rita','p@p.es',23),
  new User(1,'emma','p@p.es',23),

  ];

  constructor(){}

  getUsuarios(): User[]{
    return this._usuarios;
  }
}
