import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private apiUrl = 'http://localhost:8400/timeforge/boards';
   
    constructor(private http: HttpClient) { }
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getAllBoards(): Observable<Board[]> {
      return this.http.get<Board[]>(this.apiUrl); 
    }
  
    getBoardById(id: string): Observable<Board> {
      return this.http.get<Board>(`${this.apiUrl}/${id}`); // Utilisation de l'ID dans l'URL
    }
 
    createBoard(board: Board): Observable<Board> {
      return this.http.post<Board>(`${this.apiUrl}/create`, board,this.httpOptions); // Ajout de /create pour correspondre à la route Spring
    }
  
    updateBoard(board: Board): Observable<Board> {
      return this.http.put<Board>(`${this.apiUrl}/modify-board`, board,this.httpOptions);
    }
  
    deleteBoard(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    getBoardsByProject(projectId: string): Observable<Board> {
      return this.http.get<Board>(`${this.apiUrl}/project/${projectId}`);
    }
  }
  
