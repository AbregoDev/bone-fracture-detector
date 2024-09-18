import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent implements OnInit {

    loading: boolean = false;
    currentUser: any;

    constructor(
        private readonly router: Router,
        private readonly userService: UserService,
    ) { }

    ngOnInit(): void {
        this.currentUser = this.userService.currentUser;
    }

    sendImage() {
        this.loading = true;
        fetch('https://run.mocky.io/v3/5645d37f-2eb6-47a1-9266-61358abb2951?mocky-delay=2000ms', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log({ data });
                const { result, value } = data;
                const queryParams = { result, value };
                this.router.navigate(['/score'], { queryParams });
            });
    }
}
