import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
declare let require: any;
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert'
import Web3 from 'web3';
import * as Tx from 'ethereumjs-tx';
var Buffer = require('buffer/').Buffer 



@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.scss']
})
export class AddbankComponent implements OnInit, OnDestroy { 
  public bankid;
  public account;
  public id1;
  public _web3:any;
  public banklist=[];

  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { 

    $("#issuer").addClass("active");
    $("#spv").removeClass("active");
    $("#investor").removeClass("active");
    this.bankid='';
    this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));     
    this.bank_table(); 
  }

   onChange(event) {         
    var file = event.target.files[0];
    var reader = new FileReader();
    var lss=this.ls;
    let meta = this;
    var table=this.bank_table();
    var spin=this.spinner;
    this.ls.get_cookie().then(privatekey=>{ 

     reader.onload = function(event) {
     meta.get_file_data(reader.result);
    };
  })
  
    reader.readAsText(file);
  }
  
  get_file_data(names)
  {
  // console.log(names);
  if(names.trim() ==''){
    swal("Enter Bank Name In Input textbox")
    return;
  }
  let bank_names = [];
  var tmp;

  tmp = names.trim().split(",");
  for(var i=0;i < tmp.length;i++){
    var byte_name = this._web3.utils.fromAscii(tmp[i]);
    bank_names.push(byte_name)
  }
  this.spinner.show();
  this.ls.get_cookie().then(key=>{      
    this.ls.add_bank(bank_names,key).then(result=>{       
      (document.getElementById('id1') as HTMLInputElement).value ='';
      (document.getElementById('fileUpload')as HTMLInputElement).value = '';
     this.spinner.hide();
     if(result == 0) {
       swal("You Rejected this Transaction")
     }
     else if(result == 2) {
       swal("Transaction Failed !")
     }
     else if(result == 1) {
       this.bank_table();
       swal("Bank(s) Registered Successfully!")
     }   
 })
})
}   

  get_bank_Id(bname) {
    // console.log("bname");
    // console.log(bname);
    if(bname.trim() ==''){
      swal("Enter Bank Name In Input textbox")
      return;
    }
    let bank_names = [];
    var tmp;

    tmp = bname.trim().split(",");
    for(var i=0;i < tmp.length;i++){
      var byte_name = this._web3.utils.fromAscii(tmp[i]);
      bank_names.push(byte_name)
    }   
    this.spinner.show();
    this.ls.get_cookie().then(key=>{      
       this.ls.add_bank(bank_names,key).then(result=>{       
         (document.getElementById('id1') as HTMLInputElement).value ='';
        this.spinner.hide();
        if(result == 0) {
          swal("You Rejected this Transaction")
        }
        else if(result == 2) {
          swal("Transaction Failed !")
        }
        else if(result == 1) {
          this.bank_table();
          swal("Bank(s) Registered Successfully!")
        }   
    })
  })
  }

  bank_table(){    
    this.banklist.length = 0;
    this.ls.bank_ids().then(bank_ids =>{
      bank_ids.forEach(bank_id => {
        // console.log(bank_id);
        
        let obj = {};                
        this.ls.bank_detail_map(bank_id).then(b_d =>{
          obj['bankid']= bank_id;
          obj['bankname'] = b_d;
          this.banklist.push(obj);
          
        })
      })
      
    })
  }

  ngOnInit() {
   
       let meta = this;    
          
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
