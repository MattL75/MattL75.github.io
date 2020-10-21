import { projectsData } from './projects.data';
import { Component } from '@angular/core';

@Component({
    selector: 'ml-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projectsData = projectsData;
}
