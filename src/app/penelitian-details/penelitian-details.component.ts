import { Component, OnInit, Input } from '@angular/core';
import { Penelitian } from '../penelitian/penelitian.component';

@Component({
  selector: 'app-penelitian-details',
  templateUrl: './penelitian-details.component.html',
  styleUrls: ['./penelitian-details.component.css']
})
export class PenelitianDetailsComponent implements OnInit {
  @Input() penelitian: Penelitian | any;
  constructor() { }

  ngOnInit(): void {
  }

}
