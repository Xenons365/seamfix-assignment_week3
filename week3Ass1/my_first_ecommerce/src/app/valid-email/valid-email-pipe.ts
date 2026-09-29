import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validEmail',
})
export class ValidEmailPipe implements PipeTransform {
  // A standard, reasonably strict email pattern
  private readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  transform(value: string | null | undefined): boolean {
    if (!value) {
      return false;
    }
    return this.emailPattern.test(value);
  }
}