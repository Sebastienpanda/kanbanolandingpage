import { Component, signal } from '@angular/core';
import {
    ChartColumnDecreasing,
    LucideAngularModule,
    Users,
    Zap,
} from 'lucide-angular';
import { Feature } from '../types/feature.type';

type FeatureDemo = Partial<Feature> & {
    color: string;
};

@Component({
    selector: 'app-features-demo',
    templateUrl: './features.demo.html',
    imports: [LucideAngularModule],
})
export class FeaturesDemo {
    protected readonly features = signal<FeatureDemo[]>([
        {
            title: 'Drag & Drop intuitif',
            description: 'Déplacez vos tâches facilement entre les colonnes',
            icon: Zap,
            color: 'primary',
        },
        {
            title: 'Mises à jour instantanées',
            description: 'Voyez vos changements en temps réel',
            icon: Users,
            color: 'secondary',
        },
        {
            title: 'Analytics avancés',
            description: 'Suivez l’évolution de vos projets',
            icon: ChartColumnDecreasing,
            color: 'accent',
        },
    ]);
}
