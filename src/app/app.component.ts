import { Component } from '@angular/core';
import employeejson from 'src/assets/employee.json';

interface employee{
  id:number;
  firstname:string;
  lastname:string;
  email:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee: employee[]=employeejson;
  constructor() {
    console.log(this.employee);
  }
  title = 'Phase4Final';
}

