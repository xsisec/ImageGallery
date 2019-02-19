import { Component,Input  } from '@angular/core';
import {PortfolioModel} from '../portfolio-models/portfolio.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent   {

  @Input() portfolioModel: PortfolioModel;
  constructor(public activeModal:NgbActiveModal) { }

}
