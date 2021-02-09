import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Procedure} from '../models/procedure';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) { }



  public addProcedureForm(procedure: Procedure): Observable<Procedure> {
    return this.http.post<Procedure>(`http://localhost:8080/procedures/add`, procedure);
  }

  getProcedureById(id: string): Observable<Procedure>{
    return this.http.get(`http://localhost:8080/procedures/${id}`);
  }

  getAllProcedures(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>('http://localhost:8080/procedures/all');
  }
}
