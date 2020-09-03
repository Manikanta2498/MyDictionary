import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  constructor(private http: HttpClient) { }
  getMnemonics(word: any): Observable<any> {
    let url = 'http://localhost:8000/mnemonics/';
    const headers = { 'Content-Type': 'text/plain' };
      const body = 'inchoate';
    return this.http.post<any[]>(url, word ,{ headers }).pipe(
      tap(data => {
        console.log(data);
      }));
  }
  private handleError(err: HttpErrorResponse){
    console.log(err);
    return throwError('Error');
  }
}
