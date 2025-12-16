import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

type NavItem = {
    url: string;
    title: string;
}

@Component({
    selector: "app-nav",
    imports: [
        RouterLink
    ],
    templateUrl: "./nav.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Nav {
    protected readonly navItems = signal<NavItem[]>([
        {
            url: "features",
            title: "Fonctionnalités"
        },
        {
            url: "demo",
            title: "Démo"
        },
        // {
        //     url: "pricing",
        //     title: "Tarifs"
        // },
        // {
        //     url: "faq",
        //     title: "FAQ"
        // },
    ])
}
