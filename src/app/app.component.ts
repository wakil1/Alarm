import { Component, getNgModuleById, inject, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AlarmFormComponent } from './alarm-form/alarm-form.component';
import { WhiteNoiseFormComponent } from './white-noise-form/white-noise-form.component';
import {MatButtonModule} from '@angular/material/button';
import { AlarmComponent } from './alarm/alarm.component';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso-config';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    
    
    HeaderComponent, CurrentTimeComponent,NavbarComponent, AlarmFormComponent, WhiteNoiseFormComponent, AlarmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  name: string = "";

  constructor(private oauthService: OAuthService){

  }
  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaims: any = this.oauthService.getIdentityClaims();
    this.name = userClaims.name ? userClaims.name: "";

  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initCodeFlow();
  }
  logout() {
    this.oauthService.logOut();
  }

  get token() {
    let claims: any = this.oauthService.getIdentityClaims();

    console.log("NAME IS FSADSADSA\n\n\n")
    console.log(claims.name)
    return claims ? claims: null;
  }


  title = 'AlarmApp';
  isClickedAlarm: boolean = false;
  isClickedWhiteNoise: boolean = false;
  
  clickedAlarm() {
    this.isClickedAlarm= true;
  }
  leaveComponent(getOut: boolean) { 
    this.isClickedAlarm = getOut;
    this.isClickedWhiteNoise = getOut;
  }
  clickedWhiteNoise() {
    this.isClickedWhiteNoise = true;
    }

}
