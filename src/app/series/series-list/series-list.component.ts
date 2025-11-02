// src/app/series/series-list/series-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
  standalone: false
})
export class SeriesListComponent implements OnInit {

  series: Serie[] = [];
  selectedSeries: Serie | null = null;
  averageSeasons = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.averageSeasons = this.series.reduce((acc, s) => acc + s.seasons, 0) / this.series.length;
    });
  }

  onSelect(series: Serie) {
    this.selectedSeries = series;
  }

}
