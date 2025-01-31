import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountryService } from "src/app/core/services/country.service";
import { Observable, Subscription } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})

export class DetailPageComponent implements OnInit, OnDestroy {

  olympics$!: Observable<Array<Olympic>>;
  countryName!: string;
  totalMedals! : number;
  totalEntries! : number;
  totalAthletes! : number;
  data! : Object[];
  dataCharts! : Object[];
  private subscription!: Subscription;


  constructor( private route: ActivatedRoute,  private router: Router, private countryService : CountryService, private olympicService: OlympicService) {}

  ngOnInit() {

    this.countryName = this.route.snapshot.params['id'];

    this.olympics$ = this.olympicService.getOlympics();
    
    this.subscription= this.olympics$.subscribe((r: Olympic[])=> 
      {
        this.totalEntries = this.countryService.getTotalOfEntries(r, this.countryName);
        this.totalMedals = this.countryService.getTotalMedalByCountry(r, this.countryName);
        this.totalAthletes = this.countryService.getTotalAthletesbyCountry(r, this.countryName);
        this.data = this.countryService.getDataForPieCharts(r, this.countryName);
      }
    );


    this.dataCharts = [
      {
        "name": this.countryName,
        "series": this.data
      }]
  }

  returnButton() {
    this.router.navigateByUrl('/dashboard');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
