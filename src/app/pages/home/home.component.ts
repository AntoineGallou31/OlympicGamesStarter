import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { DataService} from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  olympics$!: Observable<Array<Olympic>>;

  // Array for putting the Json Object for the countries
  countryArray: any[] = [];

  medalData: any[] = [];

  id: string | null = null;

  totalCities!: number;

  constructor(private olympicService: OlympicService, private router: Router, private dataService : DataService) {}

  ngOnInit(): void {

    //
    this.olympics$ = this.olympicService.getOlympics();

    // putting the observable into a array for getting the numbers of medals by country and the number total of cities
    this.olympics$.subscribe((r: any)=> 
      {this.countryArray = r
        this.medalData = this.olympicService.getTotalMedalsForPieCharts(this.countryArray);
        console.log(this.countryArray);
        this.totalCities = this.olympicService.getTotalJO(this.countryArray);
        this.dataService.saveCountryData(r); // Stocke les données utilisateur
      }
    )
  }
  
  onPieChartClick(event: any): void {
    const clickedId = event.name;
    console.log('Clicked item ID:', clickedId);
    
    if (clickedId) {
      this.router.navigate(['/detail', clickedId]);
    }
  }

  // options for the pie chart
  view: any[] = [800, 600];

  // optional
  showLegend = false;
  showLabels = true;

}
