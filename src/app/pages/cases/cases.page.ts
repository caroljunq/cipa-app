import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {

  cases: any = [
    {
      id: 'KSS 2343',
      date: '02/02/2019'
    },
    {
      id: 'LOK 2312',
      date: '23/12/2018'
    },
    {
      id: 'LSO 2011',
      date: '25/12/2018'
    },
    {
      id: 'MCS 2801',
      date: '31/11/2018'
    },
    {
      id: 'JAS 2307',
      date: '17/12/2018'
    },
    {
      id: 'MPT 2403',
      date: '20/01/2019'
    },
    {
      id: 'ACS 2811',
      date: '28/01/2019'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
