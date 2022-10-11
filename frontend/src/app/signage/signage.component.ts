import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signage',
  templateUrl: './signage.component.html',
  styleUrls: ['./signage.component.scss']
})
export class SignageComponent implements OnInit {
  school!: string;
  actualDate!: string;


  ngOnInit() {
    this.school = "Lycée Georges Brassens";
    this.actualDate = new Date().toLocaleDateString("fr");
  }

}
