import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.html',
})
export class Footer {
    protected currentYear = new Date().getFullYear();

    protected footerLinks = {
        product: [
            { label: 'Fonctionnalités', href: '#features' },
            { label: 'Démo', href: '#demo' },
        ],
        company: [],
        resources: [],
        legal: [{ label: 'Mentions légales', href: '#' }],
    };

    protected socialLinks = [
        {
            icon: 'linkedin',
            href: 'https://www.linkedin.com/in/sebastien-daufresne/',
            label: 'LinkedIn',
        },
    ];

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
