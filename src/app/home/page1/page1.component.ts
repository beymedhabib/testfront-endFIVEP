import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }
table: any;
search = '';
  ngOnInit() {
    this.table = [{
      name: 'Habib',
      phone: '58866532 '
    },
    {name: 'ahmed',
      phone: '652363653'
    },
    {name: 'seif',
      phone: '652363653'
    },
    {name: 'oumaima',
    phone: '652363653'
  },
  {name: 'FIVEP',
  phone: '652363653'
}];
  }

}
