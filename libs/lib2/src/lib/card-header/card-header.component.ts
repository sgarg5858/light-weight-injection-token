import { Component, InjectionToken, OnInit } from '@angular/core';


export const HeaderToken = new InjectionToken<CardHeaderComponent>('card-header');

@Component({
  selector: 'light-weight-injection-token-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  providers:[
    {provide:HeaderToken,useExisting:CardHeaderComponent}
  ]
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
