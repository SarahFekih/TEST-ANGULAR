import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://gorest.co.in/public/v2/users'; // URL de l'API utilisée

  constructor(private http: HttpClient) { }

  // Effectuer une requête HTTP GET vers l'API pour récupérer les utilisateurs,
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
