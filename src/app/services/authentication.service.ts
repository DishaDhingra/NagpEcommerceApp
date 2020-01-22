import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable()
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username1',username);
        document.cookie = 'username1'+ username;
        let tokenStr= 'Bearer '+userData['token'];
          sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }

  addUser(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/register',{username,password}).pipe(
      map(
        userData => {
         sessionStorage.setItem('username',username);
         return userData;
        }
      )
 
     );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username1')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username1')
    sessionStorage.removeItem('token')
  }
}