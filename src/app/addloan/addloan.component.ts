import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
import * as Web3 from 'web3';
import { checkAndUpdatePureExpressionInline } from '@angular/core/src/view/pure_expression';
declare let window: any;
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert";
@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.scss']
})
export class AddloanComponent implements OnInit {

  public  _web3: any;
  public bank_id;
  public borrower_id;
  public account;
  public id1;
  public loan_details=[];
  public borrowerlist = [];

  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { }
  
  upload(borrowerid,borrowerloanAmount,interestrate,loanduration,assetdetails,assetamt,borrowerpaid)
  {
    if(borrowerid.trim() ==''){
      swal("Enter Borrower Id")
      return;
    }
    if(borrowerloanAmount.trim() ==''){
      swal("Enter Borrower Loan Amount")
      return;
    }
    if(interestrate.trim() ==''){
      swal("Enter Interest rate")
      return;
    }
    if(loanduration.trim() ==''){
      swal("Enter Loan Duration")
      return;
    }
    if(assetdetails.trim() ==''){
      swal("Enter Asset Details")
      return;
    }
    if(assetamt.trim() ==''){
      swal("Enter Asset Amount(in rupees)")
      return;
    }

    this.spinner.show();
    this.ls.get_cookie().then(key=>{
      this.ls.add_loan(borrowerid,borrowerloanAmount,interestrate,loanduration,assetdetails,assetamt,borrowerpaid,key).then(result =>{
        (document.getElementById('id1') as HTMLInputElement).value ='';
        (document.getElementById('id2') as HTMLInputElement).value ='';
        (document.getElementById('id3') as HTMLInputElement).value ='';
        (document.getElementById('id4') as HTMLInputElement).value ='';
        (document.getElementById('id5') as HTMLInputElement).value ='';
        (document.getElementById('id6') as HTMLInputElement).value ='';
        (document.getElementById('id7') as HTMLInputElement).value ='';
      
        this.spinner.hide();
        if(result == 0) {
          swal("You Rejected this Transaction");
         
        }
        else if(result == 2) {
          swal("Transaction Failed !")
        }
        else if(result == 1) {
          this.table();
          this.ls.loan_ids().then(loan_ids => {
            swal("Loan Added Successfully and Generated Loan Id Is:  "+loan_ids.length)
          });
        }
      })
    })
  }

  table()
  {
    this.loan_details=[];
    this.ls.loan_ids().then(ids=>{
      ids.forEach(element => {
        let obj={};
        this.ls.borrower_details_map(element).then(result =>{
          obj['loanid']=element;
          obj['borrowerid']=result[0]
          obj['borrowerloanamt']=result[1]
          obj['borrowerintrest']=result[2]
          obj['loanduration']=result[3]
          obj['assetid']=result[4]
          obj['assetdetails']=result[5]
          obj['assetamt']=result[6]
          obj['borrowerpaid']=result[7]          
          this.loan_details.push(obj)           
        })
      });
    })
  }

  borrower_table(){
    this.borrowerlist.length = 0;
    this.ls.borrower_ids().then(ids =>{
      ids.forEach(element => {
        let temp_obj={};
        this.ls.borrower_map(element).then(details=>{
          temp_obj['borrowername']=details;
          temp_obj['borrowerid']=element;
          this.borrowerlist.push(temp_obj)
        })
      });
    })
  }
  
  ngOnInit() 
  {
    this.table();
    this.borrower_table();
    var meta=this;
    meta.id1 = setInterval(function() {
      meta.ls.check_cookie("privateKey").then(check=>{
        if(check==false){
          meta.router.navigate(["login"]);
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