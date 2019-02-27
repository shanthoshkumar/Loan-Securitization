import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import $ from 'jquery';
declare let window: any;
import * as Web3 from 'web3';
import swal from "sweetalert";

@Component({
  selector: 'app-spv',
  templateUrl: './spv.component.html',
  styleUrls: ['./spv.component.scss']
})
export class SpvComponent implements OnInit {
public address;
public available_pools=[];
public purchased_pools=[];
public spv_gain_amount;
public loans_of_pool =[];
public account;
public id1;
public _web3:any;
  constructor(private ls: LoanServiceService,private router: Router, private spinner:NgxSpinnerService) { 
    $("#spv").addClass("active");
    $("#issuer").removeClass("active");
    $("#investor").removeClass("active");
  }

  spv_gain(){
    this.ls.privatekey_by_address().then(address => {
      this.ls.spv_id_get(address["address"]).then(spv_id => {
        this.ls.spv_details(spv_id).then(s_d => {
          this.spv_gain_amount =s_d[1];
        })
      })
    })
  }


  purchasepool(poolid){ 
    if(poolid.trim() == ''){
      swal("Please enter a Pool Id ");
      return;
    }
console.log("1");

    this.ls.pool_ids().then(pool_ids =>{
      if(pool_ids.length>=poolid && poolid >=1)
      {
        console.log("2");
          this.ls.pool_details(poolid).then(data=>{
            this.spinner.show();
            if(data[1] == false)
            {
this.ls.get_cookie().then(key=>{
  console.log(key);
              this.ls.spv_buy_pool(poolid,data[0],key).then(result=>{
                this.spinner.hide();
                if(result == 0) {
                  (document.getElementById('id1')as HTMLInputElement).value = '';
                  this.spinner.hide();
                  swal("You Rejected this Transaction")
                }
                else if(result == 2) {
                  (document.getElementById('id1')as HTMLInputElement).value = '';
                  this.spinner.hide();
                  swal("Transaction Failed !")
                }
                else if(result == 1) {
                  (document.getElementById('id1')as HTMLInputElement).value = '';
                  this.purchased()
                  this.available()
                  this.spinner.hide();
                  swal("You Bought the Pool "+poolid)
                }
              })
            })
            }
            else{
              (document.getElementById('id1')as HTMLInputElement).value = '';
              swal("pool "+poolid+" already sold")
              this.spinner.hide();
            }
          })
      }
      else
      {
        (document.getElementById('id1')as HTMLInputElement).value = ''
        swal("You had Entered an Invalid Pool Id");
        this.spinner.hide();
      }
    })
  }

  purchased(){
    this.purchased_pools.length =0;
    this.ls.privatekey_by_address().then(address =>{
      this.ls.spv_id_get(address["address"]).then(spvid=>{
        if(spvid>0)
        {
          this.ls.pool_ids().then(p_ids =>{
            p_ids.forEach(index=>{
              this.ls.is_owned_spv(spvid,index).then(status=>{
                if(status == true)
                {
                  this.ls.pool_details(index).then(result=>{
                    let obj={};
                    obj['id']=index;
                    obj['value']=result[0]/1000000000000000000;
                    this.purchased_pools.push(obj)
                  }) 
                }
              })
            })
          })
        }
        else{
          swal("Still not purchased")
        }
      })
    })
  }



  available(){
    this.available_pools.length = 0;
    this.ls.pool_ids().then(ids =>{
      ids.forEach(element => {
        let pool_obj={};
        this.ls.pool_details(element).then(data=>{
          if(data[1]==false)
          {
            pool_obj['id']=element;
            pool_obj['value']=data[0]/1000000000000000000;
            this.available_pools.push(pool_obj)
          }
        });
      })
    })
  }


  loans_of_pools(){
    this.loans_of_pool.length = 0;
    this.ls.pool_ids().then(pool_ids => {
      pool_ids.forEach(pool_id =>{
        let obj = {};
        obj["poolid"] = pool_id;
        this.ls.show_loanids_of_pool(pool_id).then(loan_ids => {
          obj["loanids"] = loan_ids;
          this.loans_of_pool.push(obj)
        })
      })
    })
  }

  ngOnInit() 
  {
    this.purchased();
    this.available();
    this.spv_gain();
    this.loans_of_pools();
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
  