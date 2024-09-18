import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit, AfterContentChecked {

    currentUser: any;
    result: boolean = false;
    value: string = '';

    constructor(
        private readonly userService: UserService,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.currentUser = this.userService.currentUser;
    }

    ngAfterContentChecked(): void {
        const { result, value } = this.route.snapshot.queryParams;
        this.result = result === 'true';
        this.value = value;
    }
}
