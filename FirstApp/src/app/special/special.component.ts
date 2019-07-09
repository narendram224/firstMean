import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
specialevents = []
  constructor(private eventService : EventService,private router:Router) { }

  ngOnInit() {
    this.eventService.getSpecialEvents()
    .subscribe(
      res =>this.specialevents = res,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
              this.router.navigate(['register'])
          }
        }
      }
    )
  }

}
