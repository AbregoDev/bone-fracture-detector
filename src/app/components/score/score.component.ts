import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit {
  apiResponse: any;

  constructor(private router: Router) {}

   ngOnInit(): void {
      // Retrieve the data from the router state
      const navigation = this.router.getCurrentNavigation();
      console.log("printing result since score" + navigation)
      if (navigation?.extras?.state) {
        this.apiResponse = navigation.extras.state['data'];
        console.log("printing result since score" + this.apiResponse)
      }
    }
}
