import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Procedure} from '../../models/procedure';
import {ProcedureService} from '../../services/procedureService';

@Component({
  selector: 'app-procedure-all',
  templateUrl: './procedure-all.component.html',
  styleUrls: ['./procedure-all.component.scss']
})
export class ProcedureAllComponent implements OnInit {

  procedures: Procedure[] =  [];

  constructor(
    private router: Router,
    private procedureService: ProcedureService) { }

  ngOnInit(): void {
    this.procedureService.getAllProcedures().subscribe((response) => {
      this.procedures = response;
    });
    this.router.navigate(['/procedure-all']);
  }

}
