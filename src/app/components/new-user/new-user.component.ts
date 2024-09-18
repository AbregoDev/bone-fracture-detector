import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrl: './new-user.component.scss'
})
export class NewUserComponent {

    isLoading: boolean = false;

    constructor(private readonly router: Router) { }

    createUser() {
        this.isLoading = true;
        fetch('https://run.mocky.io/v3/5645d37f-2eb6-47a1-9266-61358abb2951?mocky-delay=2000ms', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                this.router.navigate(['/users-list']);
            });
    }
}
