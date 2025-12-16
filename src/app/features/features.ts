import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
    ChartNoAxesColumn,
    LucideAngularModule,
    Palette,
    Rocket,
    Shield,
    Zap,
} from 'lucide-angular';
import { Feature } from './types/feature.type';

@Component({
    selector: 'app-features',
    imports: [LucideAngularModule],
    templateUrl: './features.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features {
    protected readonly features = signal<Feature[]>([
        {
            icon: Rocket,
            title: 'Démarrage Ultra-Rapide',
            description:
                'Créez votre premier board en moins de 30 secondes. Interface intuitive, aucune courbe d’apprentissage',
        },
        {
            icon: Zap,
            title: 'Performance Éclair',
            description:
                'Synchronisation en temps réel, même avec des milliers de tâches. Infrastructure ultra-optimisée',
        },
        {
            icon: Palette,
            title: 'Personnalisation Infinie',
            description:
                'Templates, workflows : façonnez votre Kanban selon votre méthode',
        },
        {
            icon: Shield,
            title: 'Sécurité Entreprise',
            description:
                'Chiffrement complet, permissions avancées, conformité RGPD. Vos données restent protégées, toujours',
        },
        {
            icon: ChartNoAxesColumn,
            title: 'Analytics Avancés',
            description:
                'Tableaux de bord, tendances, prédictions. Prenez de meilleures décisions, plus rapidement',
        },
    ]);
}
