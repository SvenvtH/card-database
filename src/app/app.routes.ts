import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardHomepageComponent } from './dashboard/homepage/homepage.component';
import { DashboardCardScannerComponent } from './dashboard/card-scanner/card-scanner.component';
import { DashboardCardVaultComponent } from './dashboard/card-vault/card-vault.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardHomepageComponent,
      },
      {
        path: 'card-scanner',
        component: DashboardCardScannerComponent,
      },
      {
        path: 'card-vault',
        component: DashboardCardVaultComponent,
      },
    ],
  },
  //   {
  //     path: '',
  //     component: AuthLayoutComponent,
  //     children: [
  //       {
  //         path: 'login',
  //         component: LoginComponent,
  //       },
  //     ],
  //   },
];
