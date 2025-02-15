import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Olympic} from '../models/Olympic';
import { Participation } from '../models/Participation';

@Injectable({
  providedIn: 'root',
})

export class OlympicService {
  private olympics$ = new BehaviorSubject<any>(undefined);

  medalData!: Object[];
  countryArray!: Object[];

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Array<Olympic>>(environment.apiUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        console.error(error);
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  // Http Request to get the data from the mock
  getOlympics(): Observable<Array<Olympic>> {
    return this.olympics$.asObservable();
  }

  // Create a array for showing the data in pie charts
  getTotalMedalsForPieCharts(countryArray: Olympic[]): any[] {
    this.medalData = countryArray.map(country => ({
    name: country.country,
    value: country.participations.reduce((total: number, participation:Participation) => total + participation.medalsCount, 0) 
    }));
    return this.medalData;
  }

  // Method to get the number of JOs
  getTotalJO(countryArray: Olympic[]): number {
    const jo = new Set<string>();
    countryArray.forEach((country: Olympic) => {
        country.participations.forEach((participation) => {
            jo.add(participation.city);
        });
    });
    return jo.size;
  }
}
