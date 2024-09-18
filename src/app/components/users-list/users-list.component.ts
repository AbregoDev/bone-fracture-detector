import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

export interface UserData {
    id: string
    name: string;
    date: string;
}

const ELEMENT_DATA: UserData[] = [
    { id: '0123', name: 'Diego', date: '10-sep-2024' },
    { id: '0123', name: 'Francisco', date: '10-sep-2024' },
    { id: '0123', name: 'Jorge', date: '10-sep-2024' },
    { id: '0123', name: 'Luz', date: '10-sep-2024' },
    { id: '0123', name: 'María', date: '10-sep-2024' },
    { id: '0123', name: 'Ramón', date: '10-sep-2024' },
    { id: '0123', name: 'Bryan', date: '10-sep-2024' },
    { id: '0123', name: 'Daniel', date: '10-sep-2024' },
    { id: '0123', name: 'León', date: '10-sep-2024' },
    { id: '0123', name: 'Graciela', date: '10-sep-2024' },
];

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'date', 'action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    constructor(
        private readonly userService: UserService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.userService.cleanCurrentUser();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    selectUser(user: UserData) {
        this.userService.currentUser = user;
        this.router.navigateByUrl('/upload-image');
    }
}
