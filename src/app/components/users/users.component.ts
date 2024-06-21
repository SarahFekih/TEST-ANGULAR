import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  // Définir les colonnes pour l'affichage des utilisateurs dans ngx-datatable
  columns = [
    { prop: 'id', name: 'ID' },
    { prop: 'name', name: 'Name' },
    { prop: 'email', name: 'Email' },
    { prop: 'gender', name: 'Gender' },
    { prop: 'status', name: 'Status' }
  ];
  error = '';

  // Injecter le service UserService pour obtenir les données des utilisateurs
  constructor(private userService: UserService) {}

  // Utiliser le service pour obtenir les utilisateurs et les stocker dans le tableau 'users'
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      // En cas d'erreur lors de l'appel HTTP
      error: (err) => {
        console.error('Failed to fetch users', err);
        this.error = 'Unable to load users at the moment. Please try again later.';
      }
    });
  }
}
