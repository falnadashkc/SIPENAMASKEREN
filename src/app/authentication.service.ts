import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';
import { Authresponse } from './authresponse';
import { SipenamasDataService } from './sipenamas-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) { }

  public getToken(): string|null {
    return this.storage.getItem('sipenamas-token')
}

  public saveToken(token: String): void {
    return this.storage.setItem('sipenamas-token', token);
    
  }

  public login(user: User): Promise<any> {
    return this.sipenamasDataService.login(user)
    .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  } 

    public register(user: User): Promise<any> {
      return this.sipenamasDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

}