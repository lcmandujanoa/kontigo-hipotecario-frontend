import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  USUARIO: Auth = { USERNAME: '', PASSWORD: '' };

  constructor(private ROUTER_SERVICE: Router, private AUTH_SERVICE: AuthService) { }

  ngOnInit(): void {
  }

  INGRESAR() {
    this.ROUTER_SERVICE.navigate(['/operations']); 
    // console.log(this.USUARIO);
    // this.AUTH_SERVICE.LOGUEAR_USUARIO(this.USUARIO).subscribe({
    //   next: (res) => {
    //     console.log(res),
    //     this.ROUTER_SERVICE.navigate(['/operations']); 
    //   },
    //   error: (err) => console.error(err.error.message)
    // })
  }

}
