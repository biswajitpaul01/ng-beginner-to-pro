import { animate, state, style, transition, trigger } from "@angular/animations";

export const fade = (microSeconds = 2000) => trigger('fade', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [
    animate(microSeconds)
  ])
]);
