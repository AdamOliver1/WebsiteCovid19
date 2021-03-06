import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import  {FlexLayoutModule} from '@angular/flex-layout'
import  {MatDividerModule} from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AreaComponent } from './widgets/area/area.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailsComponent } from './widgets/details/details.component';
import { FlightStatusComponent } from '../modules/flight-status/flight-status.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    AreaComponent,
    FlightStatusComponent,
    DetailsComponent,

    
  ],
  imports: [
    CommonModule,
    
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
    MatMenuModule,
    MatListModule,
    RouterModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    HighchartsChartModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    AreaComponent,
    MatCardModule,
    MatGridListModule,
    DetailsComponent,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    
  ]
})
export class SharedModule { }
