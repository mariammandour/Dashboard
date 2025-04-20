import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./pages/items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./pages/transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./pages/messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.module').then((m) => m.SupportModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
