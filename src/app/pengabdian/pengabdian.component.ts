import { Component, OnInit } from '@angular/core';
import { SipenamasDataService } from '../sipenamas-data.service';

export class Pengabdian{ //Buat class menggunakan huruf besar
    '_id': string;
    'judul' : string;
    'tempat' : string;
    'deskripsi' : string;
    'tgl_pengabdian' : any;
    'dosen' : string[];
    'mahasiswa' : string[];
}

@Component({
  selector: 'app-pengabdian',
  templateUrl: './pengabdian.component.html',
  styleUrls: ['./pengabdian.component.css']
})
export class PengabdianComponent implements OnInit {
[x: string]: any;

  constructor(private siPenamasDataService: SipenamasDataService) { }

  public pengabdian: Pengabdian[] = [];

  private getListPengabdian(): void{
    this.siPenamasDataService
    .getListPengabdian()
    .then(foundListPengabdian => {
      this.pengabdian = foundListPengabdian
    });
    

  }

//   pengabdian: Pengabdian[] =[{
//      _id: '001',
//     judul: 'Cara tidur',
//     tempat: 'Zoom',
//     deskripsi: 'Cara tidur yang baik dan benar',
//     tgl_pengabdian: '2022-01-07',
//     dosen: ['Calvin', 'Amadeus'],
//     mahasiswa: ['Abc', 'Defg']
//   },
// {
//     _id: '001',
//     judul: 'Cara main game',
//     tempat: 'Google Meet',
//     deskripsi: 'Cara main game yang baik serta gg',
//     tgl_pengabdian: '2022-01-09',
//     dosen: ['Bambang', 'Annot'],
//     mahasiswa: ['Augh', 'Auls']
// }]

  ngOnInit(): void {
    this.getListPengabdian();
  }

}
