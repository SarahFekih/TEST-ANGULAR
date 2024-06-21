import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsersComponent } from './users.component';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [ HttpClientTestingModule, NgxDatatableModule ],
      providers: [ UserService ]
    })
    .compileComponents();

    // Créer le composant et injecter le UserService
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
  });

  // Test pour s'assurer que le composant est créé avec succès
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test pour vérifier que les utilisateurs sont récupérés à l'initialisation du composant
  it('should fetch users on init', () => {
    const dummyUsers = [
      { id: 1, name: 'Sarra Fekih', email: 'fekihsarah15@gmail.com', gender: 'female', status: 'active' },
      { id: 2, name: 'Mojo Jojo', email: 'mojojojo@example.com', gender: 'male', status: 'inactive' }
    ];

    spyOn(userService, 'getUsers').and.returnValue(of(dummyUsers));

    component.ngOnInit();

    // Vérifier que le tableau users du composant contient les données correctes
    expect(component.users.length).toBe(2);
    expect(component.users).toEqual(dummyUsers);
  });
});
