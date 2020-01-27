import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApService {

  private meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

  private template = {
    '01':[false,false,false,false,false,false,false,false,false,false,false,false],
    '02':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '03':[false,false,false,false,false,false,false,false,false,false,false,false],
    '04':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '101':[false,false,false,false,false,false,false,false,false,false,false,false],
    '102':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '103':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '104':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '201':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '202':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '203':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '204':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '301':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '302':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '303':[false,false,false,false,false,false,false,false,false,false,false,false] ,
    '304':[false,false,false,false,false,false,false,false,false,false,false,false] 
  }

  private dbPath = '/solartropical3';

  dbRef: AngularFirestoreCollection = null;
  public anosList = []

  constructor(private db: AngularFirestore) { 
    this.dbRef = db.collection(this.dbPath);
  }

  getAnos(){
    this.dbRef.get().subscribe( snapShot =>{
      snapShot.forEach(doc =>{
        this.anosList.push(doc.id)
      })
    })
    return this.anosList
  }

  getMeses(){
    return this.meses
  }


  getAll(ano){
    return this.dbRef.doc(ano).valueChanges();
  }

  async initAno(ano) {
    var temp = this.template
    await this.dbRef.doc(ano).set({...temp});
    return
  }

  deleteAll() {
    this.dbRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

  updateOne(ano, apt){
    this.dbRef.doc(ano).update({...apt})
  }

}
