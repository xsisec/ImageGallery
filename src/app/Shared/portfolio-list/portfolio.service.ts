import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio-list-modules/portfolio-model.ts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class PortfolioService {

  portfolioCollection: AngularFirestoreCollection<Portfolio>;
  portfolioDoc: AngularFirestoreDocument<Portfolio>
  portfolios: Observable<Portfolio[]>;
  portfolio: Observable<Portfolio>;




  constructor(private afstore: AngularFirestore) {

    console.log('service is working!');
    this.portfolioCollection = afstore.collection<Portfolio>('Portfolio');

  }


  getPortfolio() {
    return this.portfolioCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Portfolio;
        const id = a.payload.doc.id;
        // return { id, ...data };
        return data;
        
      });
    });
    return this.portfolios;
  }

  getPortfolioDetails(id:string):Observable<Portfolio>{
    this.portfolioDoc=this.afstore.doc<Portfolio>(`portfolio/${id}`);
    this.portfolio=this.portfolioDoc.valueChanges();
    return this.portfolio;
  }

  
}
