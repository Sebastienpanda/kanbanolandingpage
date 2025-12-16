import {
    ChangeDetectionStrategy,
    Component,
    input,
    signal,
} from '@angular/core';
import { Card, Column } from './demo';
import { CardKanban } from './card';

@Component({
    selector: 'app-columns',
    imports: [CardKanban],
    templateUrl: './columns.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Columns {
    readonly columns = input.required<Column[]>();
    readonly cards = input.required<Card[]>();
    protected readonly classColumn = signal([
        'primary',
        'secondary',
        'success',
    ]);

    protected readonly cardsByColumn = (columnId: number) =>
        this.cards().filter((card) => card.column === columnId);
}
