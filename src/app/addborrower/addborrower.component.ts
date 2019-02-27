import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
import Web3 from 'web3';
import { NgxSpinnerService } from "ngx-spinner";
import  swal  from "sweetalert";
import * as Tx from 'ethereumjs-tx';
var Buffer = require('buffer/').Buffer 
declare let require: any;
@Component({
  selector: 'app-addborrower',
  templateUrl: './addborrower.component.html',
  styleUrls: ['./addborrower.component.scss']
})
export class AddborrowerComponent implements OnInit {

  public bank_id;
  public borrower_id;
  public loan_details=[];
  public borrowerlist=[];
  public banklist = [];
  public balance:number;
  public account;
  public id1;
  public _web3:any;

  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { 

    $("#issuer").addClass("active");
    $("#spv").removeClass("active");
    $("#investor").removeClass("active");

    this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));      
    
    this.borrower_id='';
    
    this.ls.contract_balance().then(result=>this.balance=result)
     }


     onChange(event,bank__id) {
       if(bank__id.trim()!=""){
        var lss=this.ls;
        var meta=this;
        var file = event.target.files[0];
        var reader = new FileReader();
        this.ls.get_cookie().then(privatekey=>{ 
    
         reader.onload = function(event) {
          meta.get_file_data(reader.result.trim(),bank__id)       
        };
      })
      
        reader.readAsText(file);
       }
       else{
         swal("Enter Bank ID")
       }       
    
    }
    get_file_data(brwr_name,bank__id)
    {
      if(brwr_name.trim() == ''){
        swal("Enter Borrower Name")
        return;
      }
      if(bank__id.trim() == ''){
        swal("Enter Bank Id")
        return;
      }
      let borrower__names = [];
      var tmp;
  
      tmp = brwr_name.trim().split(",");
      for(var i=0;i < tmp.length;i++){
        borrower__names.push(this._web3.utils.fromAscii(tmp[i]));
      }
      this.spinner.show();
      this.ls.get_cookie().then(key=>{
        this.ls.add_borrower(bank__id,borrower__names,key).then(res=>{
          (document.getElementById('id1') as HTMLInputElement).value = '';
          (document.getElementById('id2') as HTMLInputElement).value = '';
          (document.getElementById('id3') as HTMLInputElement).value = '';
          (document.getElementById('fileUpload')as HTMLInputElement).value = '';
          this.spinner.hide();
          if(res == 0) {
            swal("You Rejected this Transaction")
          }
          else if(res == 2) {
            swal("Transaction Failed !")
          }
          else if(res == 1) {    
              this.borrower_table()
              swal("Borrower(s) Successfully Registered")
          }
        })
      })
  
  }   
  get_borrower_id(brwrname,bankid)
  {
    if(brwrname.trim() == ''){
      swal("Enter Borrower Name")
      return;
    }
    if(bankid.trim() == ''){
      swal("Enter Bank Id")
      return;
    }
    let borrower_names = [];
    var tmp;

    tmp = brwrname.trim().split(",");
    for(var i=0;i < tmp.length;i++){
      borrower_names.push(this._web3.utils.fromAscii(tmp[i]));
    }
    this.spinner.show();
    this.ls.get_cookie().then(key=>{
      this.ls.add_borrower(bankid,borrower_names,key).then(res=>{
        (document.getElementById('id1') as HTMLInputElement).value = '';
        (document.getElementById('id2') as HTMLInputElement).value = '';
        this.spinner.hide();
        if(res == 0) {
          swal("You Rejected this Transaction")
        }
        else if(res == 2) {
          swal("Transaction Failed !")
        }
        else if(res == 1) {    
            this.borrower_table()
            swal("Borrower(s) Successfully Registered")
        }
      })
    })
  }

  table()
  {
    this.loan_details.length = 0;
    this.ls.loan_ids().then(ids=>{
      ids.forEach(element => {
        let obj={};
        this.ls.borrower_details_map(element).then(result =>{
          obj['loanid']=element;
          obj['borrowerid']=result[0]
          obj['borrowerloanamt']=result[2]
          obj['borrowerintrest']=result[1]
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

  bank_table(){
    this.banklist.length = 0;
    this.ls.bank_ids().then(bank_ids =>{
      bank_ids.forEach(bank_id => {
        let obj = {};
        this.ls.bank_detail_map(bank_id).then(b_d =>{
          obj['bankid']= bank_id;
          obj['bankname'] = b_d;
          this.banklist.push(obj);
        })
      })
      
    })
  }

  borrower_table(){
    this.borrowerlist.length = 0;
    this.ls.borrower_ids().then(ids =>{
      ids.forEach(element => {
        let temp_obj={};
        this.ls.borrower_map(element).then(details=>{
          temp_obj['borrowerid']=element;
          temp_obj['borrowername']=details;
          this.borrowerlist.push(temp_obj)
        })
      });
    })
  }

  ngOnInit() {
   this.table()
   this.bank_table()
   this.borrower_table()

   var meta=this;
   meta.id1 = setInterval(function() {
     meta.ls.check_cookie("privateKey").then(check=>{
       if(check==false){
         meta.router.navigate(["login"]);
         clearInterval(this.interval);
       }
     })
   }),200;
   
     }
     ngOnDestroy() {
       if (this.id1) {
         clearInterval(this.id1);
       }
   
     }


}
