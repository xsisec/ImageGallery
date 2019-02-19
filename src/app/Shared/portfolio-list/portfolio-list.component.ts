import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModel } from './portfolio-models/portfolio.model';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  portfolios: PortfolioModel[];

  constructor(private modalService: NgbModal, private afs: AngularFirestore, private portfolioservice: PortfolioService) { }

  ngOnInit() {

    this.portfolioservice.getPortfolio().subscribe(portfolio => {
      this.portfolios = portfolio;
    })




  }

  sortedLessonCards(): PortfolioModel[] {
    //ascending sorted array by the object week: number. 
    //descending sorted array would be => a.week - b.week this instead of current code.
    return this.portfolios.sort();
  }
  open(portfolioModel:PortfolioModel){
    const modalRef=this.modalService.open(PortfolioModalComponent);
    modalRef.componentInstance.portfoliom = portfolioModel;
  }




}
