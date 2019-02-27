import { Component, OnInit ,OnDestroy } from '@angular/core';
import { LoanServiceService } from '../Service/loan-service.service';

import { Router } from '@angular/router';
import $ from 'jquery';
declare let window: any;
import * as Web3 from 'web3';
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert";
@Component({
  selector: 'app-addspv',
  templateUrl: './addspv.component.html',
  styleUrls: ['./addspv.component.scss']
})
export class AddspvComponent implements OnInit {
  public  _web3: any;
  public account:string;
  public balance:number;
  public id1;
  constructor(private ls:LoanServiceService,private route:Router,private spinner:NgxSpinnerService) { }

  spv_registeration()
  {
    this.spinner.show();
    this.ls.get_cookie().then(key=>{
      this.ls.register_spv(key).then(res=>{
        this.spinner.hide();
        if(res == 0){
          swal("You Rejected this Transaction")
        }
        else if(res == 2){
          swal("Transaction Failed")
        }
        else if(res == 1)
        {  
          this.ls.spv_ids().then(spv_ids => {          
          swal("You Successfully Registered As An SPV , Your SPV Id Is:  "+spv_ids.length);
          this.route.navigate(['spv'])
        })
      }
      })
    })
  }
  
  ngOnInit() {
      let meta = this;
     meta.id1 = setInterval(function() {
       meta.ls.check_cookie("privateKey").then(check=>{
         if(check==false){
           meta.route.navigate(["login"]);
           clearInterval(this.interval);
         }
       })
     }),200
     }
     
     ngOnDestroy() {
       if (this.id1) {
         clearInterval(this.id1);
       }
   
     }

}
