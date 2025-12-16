import {Component} from '@angular/core';
import {NgxSonnerToaster} from 'ngx-sonner';
import {Home} from './shared/ui/header';
import {Hero} from './features/hero';
import {Demo} from './features/demo/demo';
import {Features} from './features/features';
import {Cta} from './features/cta';
import {Footer} from './shared/ui/footer';

@Component({
    selector: 'app-root',
    imports: [NgxSonnerToaster, Home, Hero, Demo, Features, Cta, Footer],
    templateUrl: './app.html',
})
export class App {
}
