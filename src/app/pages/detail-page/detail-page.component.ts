import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountryService } from "src/app/core/services/country.service";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})

export class DetailPageComponent implements OnInit {

  public countryName!: string;
  public countryData!: [] ;
  totalMedals! : number;
  totalEntries! : number;
  totalAthletes! : number;
  data! :any[];
  dataCharts! :any[];

  constructor( private route: ActivatedRoute,  private router: Router, private dataService: DataService, private countryService : CountryService) {}

  ngOnInit() {
        
    this.countryName = this.route.snapshot.params['id'];
    console.log('ID récupéré :', this.countryName);

    this.countryData = this.dataService.getCountryData();
    console.log(this.countryData);

    this.totalEntries = this.countryService.getTotalOfEntries(this.countryData, this.countryName);
    this.totalMedals = this.countryService.getTotalMedalByCountry(this.countryData, this.countryName);
    this.totalAthletes = this.countryService.getTotalAthletesbyCountry(this.countryData, this.countryName);
    this.data = this.countryService.getDataForPieCharts(this.countryData, this.countryName);

    this.dataCharts = [
      {
        "name": this.countryName,
        "series": this.data
      }]
  }

  returnButton() {
    this.router.navigateByUrl('/dashboard');
  }

}
