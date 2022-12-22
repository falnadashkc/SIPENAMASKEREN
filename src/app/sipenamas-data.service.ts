import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { response } from 'express';
import { Penelitian } from './penelitian/penelitian.component';
import { Pengabdian } from './pengabdian/pengabdian.component';

@Injectable({
  providedIn: 'root'
})
export class SipenamasDataService {

  constructor(private http: HttpClient) { }
    private apiBaseUrl = 'http://localhost:3000/api';

    //fungsi untuk memanggil list data penelitian dari API
    public getListPenelitian(): Promise<Penelitian[]>{
      const url: string = `${this.apiBaseUrl}/penelitian`; //apiUrl.penelitian
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as Penelitian[])
      .catch(this.handleError);
    }

    public getPenelitianById(penelitianId:any): Promise<Penelitian> {
      const url: string = `${this.apiBaseUrl}/penelitian/${penelitianId}`; 
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as Penelitian)
      .catch(this.handleError)
    }

     public getListPengabdian(): Promise<Pengabdian[]>{
      const url: string = `${this.apiBaseUrl}/pengabdian`; //apiUrl.pengabdian
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as Pengabdian[])
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
      console.error('Salah hey salah', error);
      return Promise.reject(error.message || error);
    }
    
    //memanggil api login atau register
    private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
      const url: string = `${this.apiBaseUrl}/${urlPath}`; //http://localhost:3000/api/login
      return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
 }
    //untuk proses login
    public login(user: User): Promise<AuthResponse> {
      return this.makeAuthApiCall('login', user);
    }

    //untuk proses register
    public register(user: User): Promise<AuthResponse> {
      return this.makeAuthApiCall('register', user);
      }
   }
  

 