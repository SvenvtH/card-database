import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppshellComponent } from '../appshell/appshell.component';

@Component({
  selector: 'dashboard-layout',
  standalone: true,
  imports: [RouterModule, AppshellComponent],
  template: `
    <div>
      <app-shell> </app-shell>
    </div>
  `,
  // template: `
  //   <div>
  //     <toolbar />
  //     <!-- Content -->
  //     <div>
  //       <sidebar />
  //       <router-outlet></router-outlet>
  //     </div>
  //   </div>
  // `,
})
export class DashboardLayoutComponent {}
