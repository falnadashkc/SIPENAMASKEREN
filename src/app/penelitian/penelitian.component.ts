import { Component, OnInit } from '@angular/core';
import { SipenamasDataService } from '../sipenamas-data.service';

export class Penelitian{
    '_id': string;
    'judul' : string;
    'deskripsi' : string;
    'tgl_publikasi' : any;
    'jurnal_publikasi' : string;
    'dosen_peneliti' : string[];
}

@Component({
  selector: 'app-penelitian',
  templateUrl: './penelitian.component.html',
  styleUrls: ['./penelitian.component.css']
})
export class PenelitianComponent implements OnInit {
[x: string]: any;

  constructor(private siPenamasDataService: SipenamasDataService) { }

  //buat peroperti untuk tampung data list pemebelian
  //dengan nilai arr kosong
  public penelitian: Penelitian[] = [];

  private getListPenelitian(): void{
    this.siPenamasDataService
    .getListPenelitian()
    .then(foundListPenelitian => {
      this.penelitian = foundListPenelitian
    });
    

  }

//   penelitian: Penelitian[] =[{
//     _id: '001',
//     judul: 'MEAN Stack Dev',
//     deskripsi: 'Yang tahu tahu aja',
//     tgl_publikasi: '2022-11-07',
//     jurnal_publikasi: 'MDP',
//     dosen_peneliti: ['Calvin', 'Amadeus']
//   },
// {
//     _id: '002',
//     judul: 'Cara tidur yang benar',
//     deskripsi: 'Entah',
//     tgl_publikasi: '2022-11-02',
//     jurnal_publikasi: 'MDP v2',
//     dosen_peneliti: ['YTTA', 'Farhan kebab']
// }]

  ngOnInit(): void {
    this.getListPenelitian();

    //method dipanggil ketika komponen di inisiasi
  }

}
