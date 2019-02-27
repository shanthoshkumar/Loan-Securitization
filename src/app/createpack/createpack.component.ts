import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
declare let window: any;
import * as Web3 from 'web3';
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert";
@Component({
  selector: 'app-createpack',
  templateUrl: './createpack.component.html',
  styleUrls: ['./createpack.component.scss']
})
export class CreatepackComponent implements OnInit, OnDestroy{
public address;
public loan_details=[];
public pool_details=[];
public array=[];
public account;
public id1;
public _web3:any;
public all_packed_loans = [];
public duplicate = [];
public error_input = [];
public multiple_times = [];
  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { }

  createpool(loanid,totvalue){
    if(loanid.trim()==''){
      swal("Enter Loan Id");
      return;
    }
    if(totvalue.trim()==''){
      swal("Enter pool amount");
      return;
    }
    this.spinner.show();
    this.duplicate.length = 0;
    this.error_input.length = 0;
    var amount=totvalue*1000000000000000000;
    let ids = [];
    var tmp;      

    tmp = loanid.trim().split(",");
    for(var i=0;i < tmp.length;i++){
      ids.push(parseInt(tmp[i]))
    }      
    this.ls.loan_ids().then(loan_ids => {
      // this.ls.getAccount().then(address=>{
        ids.forEach(id => {
          if(id < 1 || id > loan_ids.length){
            this.error_input.push(id);
          }
          this.all_packed_loans.forEach(loan_id => {
            if(loan_id == id)
            {
              this.duplicate.push(id);
            }  
          })
        })
        if(this.error_input.length >= 1){
          this.spinner.hide();
          swal("ERROR INPUT: "+this.error_input+"  These Ids are not exist")
        }
        else if(this.duplicate.length >= 1){
          this.spinner.hide();
          swal("Loan Ids "+this.duplicate+" were Already Packed !")
        }
        else{
          
          
          // var key="a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4";
          this.ls.get_cookie().then(key=>{
          this.ls.create_pool(ids,amount,key).then(res=>{
            (document.getElementById('id1') as HTMLInputElement).value = '';
            (document.getElementById('id2') as HTMLInputElement).value = '';
            this.spinner.hide();
            if(res == 0) {
              swal("You Rejected this Transaction")
            }
            else if(res == 2) {
              swal("Transaction Failed !")
            }
            else if(res == 1){
              this.pools();
              this.packed_loans();
              this.table();
              this.ls.pool_ids().then(pool_ids => {
                swal("Pool Successfully Created and Generated Pool Id Is  :"+pool_ids.length)
              })            
            }
          })
        })
        }
    })
  }

  packed_loans(){
    this.all_packed_loans.length = 0;
    this.ls.pool_ids().then(pool_ids => {
      pool_ids.forEach(pool_id => {
        this.ls.show_loanids_of_pool(pool_id).then(loan_ids => {
          loan_ids.forEach(loan_id => {
            this.all_packed_loans.push(loan_id)
          })
        })
      })
    });
  }

  

pools(){
  this.pool_details.length = 0;
  this.ls.pool_ids().then(ids =>{
    ids.forEach(element => {
      let pool_obj={};
      this.ls.pool_details(element).then(data=>{
        this.ls.show_loanids_of_pool(element).then(loan_ids => {
          pool_obj['id']=element;
          pool_obj['value']=data[0]/1000000000000000000;
          pool_obj['status']=data[1]
          pool_obj["loanids"] = loan_ids;
          this.pool_details.push(pool_obj)
        });
      });
    });
  });
}


  table() {
    this.loan_details.length = 0;
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

  ngOnInit() {
    this.table()
    this.pools()
    this.packed_loans()   
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
