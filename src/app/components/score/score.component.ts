import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit {

    currentUser: any;

    constructor(
        private readonly userService: UserService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.userService.currentUser;
    }  
}
