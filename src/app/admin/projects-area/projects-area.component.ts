import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../core/services/admin.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';

@Component({
    selector: 'projects-area',
    templateUrl: './projects-area.component.html',
    styleUrls: ['./projects-area.component.scss'],
})
export class ProjectsAreaComponent implements OnInit {
    isEnabled = false; //for projects area
    errors = false;
    projects;
    userLoggedIn;
    addProjectMessage = '';
    typeMessage = '';

    projectsForm = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            nameCustomer: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(50),
                Validators.pattern('[a-zA-Z ]*')
            ]),
            description: new FormControl('', [
                Validators.required,
                Validators.maxLength(500),
            ]),
            startDate: new FormControl('', [
                Validators.required
            ]),
            endDate: new FormControl('', [
                Validators.required
            ]),
        });

    get name() { return this.projectsForm.get('name'); }
    get nameCustomer() { return this.projectsForm.get('nameCustomer');}
    get description() { return this.projectsForm.get('description');}
    get startDate() { return this.projectsForm.get('startDate');}
    get endDate() { return this.projectsForm.get('endDate');}

    constructor(
        private adminService: AdminService,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        this.userLoggedIn = this.authService.currentUser();
        this.getProjects();
    }

    getProjects() {
        this.adminService.getProjects(this.userLoggedIn.accessToken)
            .subscribe(
                (response) => {
                    this.projects = response.body;
                    response.headers.keys().map((key) => console.log(`${key}: ${response.headers.get(key)}`));
                },
                (error) => {
                    console.log(error);
                    this.projects = [];
                }
            );
    }

    enableAddProjectsArea() {
        this.isEnabled = !this.isEnabled;
    }

    closeMessage() {
        this.addProjectMessage ='';
    }

    handleSave() {
        if( this.projectsForm.valid){
            this.addProject();
            this.errors = false;
            this.projectsForm.reset();
            this.isEnabled = false;
        }
        else {
            this.errors = true;
        }
    }

    addProject() {
        this.adminService.addProject(this.projectsForm.value, this.userLoggedIn.accessToken)
            .subscribe(
                (response) => {
                    this.projects.push(response.body);
                    this.addProjectMessage = "Project added with success!";
                    this.typeMessage = "accepted";
                    response.headers.keys().map((key) => console.log(`${key}: ${response.headers.get(key)}`));
                },
                (error) => {
                    console.log(error)
                    this.addProjectMessage = "A problem occurred while trying to add the project. Please try again later!";
                    this.typeMessage = "warning";
                }
            );
    }
}
