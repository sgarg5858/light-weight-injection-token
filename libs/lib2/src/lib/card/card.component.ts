import { Component, ContentChild, Inject, OnInit } from '@angular/core';
import { CardHeaderComponent, HeaderToken } from '../card-header/card-header.component';

@Component({
  selector: 'light-weight-injection-token-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(@Inject(HeaderToken) private cardHeaderComponent:CardHeaderComponent) { }

  //The reference to CardHeaderComponent exists but it is optional
  //but at this moment at build time compiler doesn't have information
  //if we indeed use this Header Component
  //we can only know at runtime so compiler decides to keep it as it might be needed at runtime.
  //if not kept and we use at runtime the app will break...
  //Then how to make this card header tree shakable if user doesnt use card header component
  // we should get rid of this direct cardHeaderComponent import refernce
  @ContentChild(HeaderToken) 
  cardHeader:CardHeaderComponent|null=null;

  ngOnInit(): void {
    this.cardHeader?.ngOnInit
  }

}
