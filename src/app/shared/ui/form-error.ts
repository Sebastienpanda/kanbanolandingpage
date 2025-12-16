import {Component, input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
    selector: "app-form-error",
    templateUrl: "./form-error.html"
})
export class FormError {
    control = input.required<AbstractControl>();

    getErrorMessages(): string[] {
        const control = this.control();

        if (!control?.errors) return [];

        const errors = control.errors;
        const messages: string[] = [];

        if (errors['required']) {
            messages.push('Ce champ est obligatoire');
        }

        if (errors['email']) {
            messages.push(`L'adresse email n'est pas valide`);
        }

        return messages;
    }
}
