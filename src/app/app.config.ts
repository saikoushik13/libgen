import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionComponent } from './collection/collection.component';
import { CategoryComponent } from './category/category.component';
import { EDatabaseComponent } from './e-database/e-database.component';
import { HistoryComponent } from './history/history.component';
import { OverdueChargesComponent } from './overdue-charges/overdue-charges.component';
import { HelpDeskComponent } from './helpdesk/helpdesk.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'e-database', component: EDatabaseComponent },
  { path: 'e-database', component: EDatabaseComponent },
  { path: 'collection/:category', component: CategoryComponent },
  { path: 'e-database/:category', component: CategoryComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'overdue', component: OverdueChargesComponent },
  { path: 'helpdesk', component: HelpDeskComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
