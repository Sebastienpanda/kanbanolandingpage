import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from './demo';
import { EllipsisVertical, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-card',
    imports: [LucideAngularModule],
    templateUrl: './card.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardKanban {
    readonly card = input.required<Card>();
    protected readonly EllipsisVertical = EllipsisVertical;
}
