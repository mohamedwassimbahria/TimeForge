import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { BoardService } from '../board.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../project/project.service';

@Component({
  selector: 'app-form-board',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-board.component.html',
  styleUrl: './form-board.component.css'
})
export class FormBoardComponent implements OnInit {
  board: Board = {
    title: '',
    description: '',
    columns: [] = [],
  };
  isEdit: boolean = false;
  projects: Project[] = [];

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private projectService: ProjectService,

    protected router: Router
  ) {}

  ngOnInit(): void {
 
      this.projectService.getProjectsNotInBoard().subscribe(data => {
        this.projects = data;
      });
    
    const id = this.route.snapshot.paramMap.get('id');
    console.log("qqqqqqqqqqqqq",id);
    
    if (id) {
      this.isEdit = true;
      this.boardService.getBoardById(id).subscribe(data => {
        console.log("dqtqqqqqqqqqq",data);
        
        this.board = data;
      });
    }
  }

  saveBoard() {
    console.log("this.kkkkkkkkk",this.board)

    if (this.isEdit) {

      this.boardService.updateBoard(this.board).subscribe({
        next: () => {
          this.router.navigate(['/boards']);
        },
        error: (err) => console.error('❌ Error updating board:', err)
      });
    } else {
      this.boardService.createBoard(this.board).subscribe({
        next: () => {
          console.log('✅ Board created successfully');
          this.router.navigate(['/boards']);
        },
        error: (err) => console.error('❌ Error creating board:', err)
      });
    }
  }
}
