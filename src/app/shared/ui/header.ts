import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ThemeService} from '../services/theme.service';
import {RouterLink} from '@angular/router';
import {Nav} from './nav';
import {LucideAngularModule, Moon, Sun} from 'lucide-angular';

@Component({
    selector: "app-header",
    templateUrl: "./header.html",
    imports: [
        RouterLink,
        Nav,
        LucideAngularModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
    protected readonly theme = inject(ThemeService);
    protected readonly Moon = Moon;
    protected readonly Sun = Sun;
}
