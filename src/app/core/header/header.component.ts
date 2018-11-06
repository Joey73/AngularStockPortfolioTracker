import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

// https://www.youtube.com/watch?v=FJkh95JltGw
// https://www.youtube.com/watch?v=oMRcSuDQIbY
// https://www.youtube.com/watch?v=fPfprPQJD9s
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  authenticated = false;

  constructor(public angularFireAuth: AngularFireAuth) {
      this.angularFireAuth.authState.subscribe(auth => {
        if (auth != null) {
          this.user = this.angularFireAuth.authState;
          this.authenticated = true;
        }
      });
  }

  ngOnInit() {
  }

  login() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.authenticated = false;
  }

}
