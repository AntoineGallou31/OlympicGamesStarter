import { Injectable } from '@angular/core';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})

export class CountryService {

  medalsByCountry!: number;
  numberOfEntries!: number;
  totalNumberAthletes!: number;
  chartsData!: Object[];

  getOlympicsByCountry(countryArray: Olympic[], countryName: string) {
    // filter countries on specified country in argument
    return countryArray.find(olympic => olympic.country === countryName);
  }

  // get all the stats for the country name
  getCountryStats(countryArray: Olympic[], countryName: string) {
    const country = countryArray.find(country => country.country === countryName);
    if (!country) return { medals: 0, entries: 0, athletes: 0 };
  
    return {
      medals: country.participations.reduce((total, p) => total + p.medalsCount, 0),
      entries: new Set(country.participations.map(p => p.city)).size,
      athletes: country.participations.reduce((total, p) => total + p.athleteCount, 0),
    };
  }

  // create a array for showing the data in line charts
  getDataForPieCharts(countryArray: Olympic[], countryName: string): any {

    const country = countryArray.find(country => country.country === countryName);

    if (country) {
        // Array of objects with the year and the number of medals
        this.chartsData = country.participations.map(participation => ({
            name: participation.year,  // Date of participation
            value: participation.medalsCount // Number of medals
        }))
        
      return this.chartsData;
    }  
    return [];
  }
}
