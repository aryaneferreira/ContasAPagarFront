import { Route } from "@angular/router";
import { LoginComponent } from "../login/login.component";


export const PUBLIC_ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'transacao'}
];

export const PRIVATE_ROUTES: Route[] = [
    { path: 'transacao', loadChildren: () => import('../../features/transacao/routes').then(m => m.TRANSACAO_ROUTES) },
    { path: '', redirectTo: 'transacao', pathMatch: 'full'}
];

export const ROUTES: Route[] = [
    ...PRIVATE_ROUTES,
    ...PUBLIC_ROUTES
];