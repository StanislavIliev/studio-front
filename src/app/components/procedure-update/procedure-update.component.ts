import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Procedure} from '../../models/procedure';
import {User} from '../../models/user';
import {ProcedureService} from '../../services/procedureService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-procedure-update',
  templateUrl: './procedure-update.component.html',
  styleUrls: ['./procedure-update.component.scss']
})
export class ProcedureUpdateComponent implements OnInit {
  updateProcedureForm: FormGroup;
  procedure: Procedure = new Procedure();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private procedureService: ProcedureService ,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.updateProcedureForm = new FormGroup({
      id: new FormControl(this.procedure.id),
      description: new FormControl(''),
      price: new FormControl(null),
      name: new FormControl(null),
      date: new FormControl(null, [ Validators.required]),
      user: new FormControl(this.user)
    });
  }

  getProcedureById(id: string): void{
    this.procedureService.getProcedureById(id)
      .subscribe((response) => {
        this.procedure = response;
        console.log(this.procedure);
      });
  }

  parseProcedureInfo(): any{
    this.updateProcedureForm = new FormGroup({
      id: new FormControl(this.procedure.id),
      description: new FormControl(this.procedure.description),
      price: new FormControl(this.procedure.price),
      name: new FormControl(this.procedure.name),
      date: new FormControl(this.procedure.date)
    });

  }

  updateProcedure(): any {
    const updatedProcedure = {...this.updateProcedureForm.value};
    console.log(updatedProcedure);
    this.procedureService.updateProcedure(updatedProcedure)
      .subscribe((response) => {
        this.procedure = response;
        this.parseProcedureInfo();
        console.log(this.procedure);
      });
}
}
