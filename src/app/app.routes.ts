import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./modules/game/game.component').then((c) => c.GameComponent),
    }
];
