import { skillsData } from './skills.data';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ml-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
    skills = skillsData
}
