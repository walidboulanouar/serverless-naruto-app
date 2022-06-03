import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'inpt-cloud-mamgas';
  email: string;
  password: string;
  
  constructor(public authService: AuthService){
    this.email = '';
    this.password = '';
  }
  signup(){
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
  logout(){
    this.authService.logout();
  }
}
