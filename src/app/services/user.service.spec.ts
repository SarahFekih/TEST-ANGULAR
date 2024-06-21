import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService} from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Test pour vérifier que les utilisateurs sont récupérés depuis l'API via une requête GET
  it('should retrieve users from the API via GET', () => {
    const dummyUsers: User[] = [
      { id: 1, name: 'Sarra Fekih', email: 'fekihsarah15@gmail.com', gender: 'female', status: 'active' },
      { id: 2, name: 'Mojo Jojo', email: 'mojojojo@example.com', gender: 'male', status: 'inactive' }
    ];

    service.getUsers().subscribe(users => {
      // Vérifier que le service renvoie les données correctement
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    // Attendre une requête GET à l'URL de l'API
    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUsers);
  });

  // S'assurer que toutes les requêtes HTTP ont été traitées
  afterEach(() => {
    httpMock.verify();
  });
});
