import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {toast} from 'ngx-sonner';
import {FormError} from '../shared/ui/form-error';

type EmailForm = {
    email: FormControl<string>;
};

type SubscribeResponse = { created: true } | { alreadyInList: true };

@Component({
    selector: 'app-cta',
    imports: [ReactiveFormsModule, FormError],
    templateUrl: './cta.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cta {
    protected readonly form = new FormGroup<EmailForm>({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
        }),
    });
    private readonly _http = inject(HttpClient);

    onSubmit() {
        if (this.form.valid) {
            const { email } = this.form.getRawValue();
            this._http
                .post<SubscribeResponse>('', {
                    email,
                })
                .subscribe((res) => {
                    if ('alreadyInList' in res) {
                        toast.warning(
                            'Vous êtes déja présent dans la waitliste'
                        );
                    }
                    if ('created' in res) {
                        toast.success('Bienvenue dans la waitliste !', {
                            description:
                                'Vous allez recevoir un mail vous confirmant votre inscription',
                        });
                    }
                });

            this.form.reset();
        }
    }
}
