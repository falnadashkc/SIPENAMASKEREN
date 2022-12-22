import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formError: string = '';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  public pageContent = {
    header: (
      title: 'Buat Resep Nagor Baru',
      Strapline: ''
    ),
    sidebar: ''
  };,

  constructor() {
    private router: Router,
  private authenticationService: AuthenticationService,
    private historyService: HistoryService
} { }
  
ngOninit()void {
}

public onRegisterSubmit(): void {
  this.formError = '';
  if(
    !this.credentials.name ||
    !this.credentials.emial ||
    !this.credentials.password
  ) {
  this.formError = 'masakan harus segera dimasak';
}else {
  this.doRegister();
  }
}

private doRegister(): void {
  this.authenticationService.register(this.credentials)
    .then(() => this.router.navigationByurl(this.historyService.getLastNonLoginUrl()))
    .catch((message) => this.formError = message);
}
}
