import { Component, OnInit } from '@angular/core';
import { Penelitian } from '../penelitian/penelitian.component';
import { SipenamasDataService } from '../sipenamas-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private siPenamasDataService: SipenamasDataService, 
    private route: ActivatedRoute) { }

  dataPenelitian: Penelitian | any;
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('penelitianId');
        return this.siPenamasDataService.getPenelitianById(id);
      })
    )
    .subscribe((newPenelitian: Penelitian) => {
      this.dataPenelitian = newPenelitian;
      this.pageContent.header.title = 'Detail Data Penelitian: ' +  newPenelitian.judul;
    })
  }

  public pageContent = {
    header:{
      title: 'Detail Data Penelitian',
      strapline: '' 
    },
    sidebar: 'Ini sidebar cuy'
  }

}
