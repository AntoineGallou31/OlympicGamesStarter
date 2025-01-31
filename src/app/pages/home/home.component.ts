import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  olympics$!: Observable<Array<Olympic>>;
  medalData!: Object[];
  id!: string;
  totalCities!: number;
  private subscription!: Subscription;
  

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {

    this.olympics$ = this.olympicService.getOlympics();

    this.subscription = this.olympics$.subscribe((r: Olympic[])=> 
      {
        this.medalData = this.olympicService.getTotalMedalsForPieCharts(r);
        this.totalCities = this.olympicService.getTotalJO(r);
      }
    )
  }
  
  // routing to detail page with the countryName of the clicked pie chart
  onPieChartClick(event: any): void {
    const clickedName = event.name;
    
    if (clickedName) {
      this.router.navigate(['/detail', clickedName]);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // options for the pie chart
  view = [800, 600];

  // optional
  showLegend = false;
  showLabels = true;

}
