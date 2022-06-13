import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Band } from 'src/app/shared/band.model';
import { BandService } from 'src/app/shared/band.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  currentBand!: Band;

  constructor(private route: ActivatedRoute,
              private bandService: BandService) { }

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getBand(id)
      .subscribe(res => this.currentBand = res);
  }

}
