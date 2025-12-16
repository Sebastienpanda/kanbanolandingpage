import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    signal,
} from '@angular/core';
import { filter, interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LucideAngularModule, Pause, Play } from 'lucide-angular';
import { FeaturesDemo } from './features.demo';
import { Columns } from './columns';

export type Card = {
    id: number;
    title: string;
    column: number;
    color: string;
};

export type Column = {
    id: number;
    name: string;
    color: string;
};

@Component({
    selector: 'app-demo',
    imports: [LucideAngularModule, FeaturesDemo, Columns],
    templateUrl: './demo.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo {
    protected readonly isPlaying = signal(true);
    protected readonly columns = signal<Column[]>([
        { id: 0, name: 'À faire', color: 'from-primary/20 to-secondary/20' },
        { id: 1, name: 'En cours', color: 'from-secondary/20 to-success/20' },
        { id: 2, name: 'Terminé', color: 'from-warning/20 to-primary/20' },
    ]);
    protected readonly cards = signal<Card[]>([
        { id: 1, title: 'Design système', column: 0, color: 'primary' },
        { id: 2, title: 'API REST', column: 0, color: 'secondary' },
        { id: 3, title: 'Tests unitaires', column: 1, color: 'success' },
    ]);
    protected readonly Play = Play;
    protected readonly Pause = Pause;
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        this.setupAnimation();
    }

    togglePlayPause() {
        this.isPlaying.update((v) => !v);
    }

    private setupAnimation() {
        interval(2000)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                filter(() => this.isPlaying())
            )
            .subscribe(() => this.advance());
    }

    private advance() {
        const list = this.cards();

        const movable = list.filter((c) => c.column < 2);

        if (movable.length === 0) {
            this.cards.update((cards) =>
                cards.map((c) => ({ ...c, column: 0 }))
            );
            return;
        }

        const nextCard = movable[0];

        this.cards.update((cards) =>
            cards.map((c) =>
                c.id === nextCard.id ? { ...c, column: c.column + 1 } : c
            )
        );
    }
}
