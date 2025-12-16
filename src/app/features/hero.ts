import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    imports: [RouterLink],
    templateUrl: './hero.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:scroll)': 'onScroll()',
    },
})
export class Hero implements OnInit, OnDestroy {
    protected readonly displayedText = signal('');
    protected readonly scrollY = signal(0);
    protected readonly fullText = 'Transformez votre productivité avec Kanbano';
    private typeIndex = 0;
    private typewriterFrame?: number;

    private readonly statsObserver?: IntersectionObserver;

    ngOnInit() {
        this.runTypewriter();
    }

    ngOnDestroy() {
        if (!this.typewriterFrame) return;
        cancelAnimationFrame(this.typewriterFrame);
        this.statsObserver?.disconnect();
    }

    onScroll() {
        this.scrollY.set(window.scrollY);
    }

    scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    private runTypewriter() {
        const DELAY = 50;
        let lastTime = 0;

        const type = (now: number) => {
            if (now - lastTime >= DELAY) {
                this.displayedText.set(
                    this.fullText.slice(0, this.typeIndex++)
                );
                lastTime = now;
            }

            if (this.typeIndex <= this.fullText.length) {
                this.typewriterFrame = requestAnimationFrame(type);
            }
        };

        this.typewriterFrame = requestAnimationFrame(type);
    }
}
