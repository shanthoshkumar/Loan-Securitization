import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as Tx from 'ethereumjs-tx';
declare let require: any;
var Buffer = require('buffer/').Buffer 
import { NgxSpinnerService } from "ngx-spinner";
import { CookieService } from 'ngx-cookie-service';
import { log } from 'util';

let loanAbi = require('./loan.json');


@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {
  public  _web3: any;
  public account:string;
  public  address:string=null;
  public loan_contract: any;
  public loan_contractaddress: string = "0xE5a8F6011340bC953eF43c05aF3798d6ED020ca6";
  


  constructor(private spinner:NgxSpinnerService,private cookieService: CookieService) {
  
    this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));      
    this.loan_contract =new this._web3.eth.Contract(loanAbi,this.loan_contractaddress,{
    gaslimit:3000000,
    })

  }

public async privatekey_by_address():Promise<string>{
  
  
var instance=this;
return new Promise<string>((resolve, reject) => {
  instance.get_cookie().then(privatekey=>{
    var senderaddress=instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey,'hex');
      resolve(senderaddress)
  })
})as Promise<string>;
}


  public async set_cookie(private_key){
    var instance = this;
    instance.cookieService.set('privateKey',private_key)
    // console.log("cookie successfully set");
    this.get_cookie();
    
}

public async check_cookie(private_key):Promise<boolean>{
  return new Promise<boolean>((resolve, reject) => {
  var instance = this;
  const cookieExists: boolean = instance.cookieService.check(private_key);
  resolve(cookieExists)
  }) as Promise<boolean>;
}
public async get_cookie(): Promise<string>{
  let instance = this;
  return new Promise<string>((resolve, reject) => {
    resolve(instance.cookieService.get('privateKey'));
  }) as Promise<string>;
}

  
public async getAccount(): Promise<string> {                                       
  let instance = this;
  let account_adddress:string;
  return new Promise((resolve, reject) => {
    instance.get_cookie().then(private_key => {
      account_adddress = instance._web3.eth.accounts.privateKeyToAccount('0x'+private_key);
      resolve(account_adddress["address"]);
    })
  }) as Promise<string>;
}
  

  public async getUserBalance(account): Promise<number> {
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getBalance(account,function(err,result){
        if(err != null) {
          reject(err);
        }
        else{
          resolve(instance._web3.utils.fromWei(result,'ether'));
        }
      })
    }) as Promise<number>;
  }



  public async check_spv(): Promise<boolean> {
    let instance = this;
    await instance.privatekey_by_address().then(address => this.account = address["address"]);  
     return new Promise((resolve,reject) => {
      instance.loan_contract.methods.spv_id_get(this.account).call(function(err,result) {
        if(err != null){
          reject(err);
        }
        else
        {
          if(result==0)
          {
            // alert("Not registered")
            resolve(false)
          }
          else{
            // alert("Already Registered")
            resolve(true)
          }
        }
      })
    }) as Promise<boolean>;
  } 

  public async check_investor(): Promise<boolean> {
    let instance = this;
    await instance.privatekey_by_address().then(acc => this.address = acc["address"]);  
     return new Promise((resolve,reject) => {
      instance.loan_contract.methods.investor_id_get(this.address).call(function(err,result) {
        if(err != null){
          reject(err);
        }
        else
        {
          if(result==0)
          {
            // alert("Not registered")
            resolve(false)
          }
          else{
            // alert("Already Registered")
            resolve(true)
          }
        }
      })
    }) as Promise<boolean>;
  } 
  
  // public async hash(a): Promise<boolean> {
  //   let meta = this;
  //   return new Promise((resolve, reject) => {
 
  //     var accountInterval = setInterval(function()
  //     {
  //       meta._web3.eth.getTransactionReceipt(a,function(err,result){
  //         if(err != null) {
  //         reject(err);
  //         }
 
  //         if(result !== null)
  //         {
  //           clearInterval(accountInterval);
  //           if(result.status == 0x1)
  //           {
  //             resolve(true);
  //           }
  //           else
  //           {           
  //             resolve(false);
  //           }
  //         }
  //       })
  //     },100)
  //   }) as Promise<boolean>;
  // }
  
  public async hash(a): Promise<number> {//
    let meta = this;
    return new Promise((resolve, reject) => {
      var accountInterval = setInterval(function()
      {
        meta._web3.eth.getTransactionReceipt(a,function(err,result){
          if(err != null) {
            console.log("hash err");
            resolve(0);
          }
          if(result !== null)
          {
            clearInterval(accountInterval);
            if(result.status == 0x1)
            {
              console.log("hash result.status == 0x1");
              resolve(1);
            }
            else
            {           
              console.log("hash result.status == else");
              resolve(2);
            }
          }
        })
      },100)
    }) as Promise<number>;
  }

  public async contract_balance(): Promise<number> {
    let instance = this;
    return new Promise((resolve,reject) => {
      instance.loan_contract.methods.contract_balance().call(function(err,result) {
        if(err != null){
          reject(err);
        }
        else{
          resolve(result)
        }
      })
    }) as Promise<number>;
  } 

  public async current_time(): Promise<string> {
    let instance = this;
    return new Promise((resolve,reject) => {
      instance.loan_contract.methods.current_time().call(function(err,result) {
        if(err != null){
          reject(err);
        }
        else{
          resolve(result)
        }
      })
    }) as Promise<string>;
  } 

  public async pool_owned_by(pool_id): Promise<number> {
    let instance = this;
    return new Promise((resolve,reject) => {
      instance.loan_contract.methods.pool_owned_by(pool_id).call(function(err,result) {
        if(err != null){
          reject(err);
        }
        else{
          resolve(result)
        }
      })
    }) as Promise<number>;
  } 

  public async check_issuer(): Promise<boolean> {
    let instance = this;
    await instance.privatekey_by_address().then(address => this.address = address["address"]); 
    
    return new Promise((resolve,reject) => {
      instance.loan_contract.methods.issuer().call(function(err,result){
        if(err != null){
          reject(err);
        }
        else if(result == instance.address)
        {
          resolve(true)
        }
        else{
          resolve(false)
        }
      })
    }) as Promise<boolean>;
  } 

  public async bank_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.bank_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result;i++){
          arr.push(i);
        }
        resolve(arr)
      }
       
      });
    }) as Promise<number[]>;
  }

  public async bank_detail_map(bank_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.bank_detail_map(bank_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {          
          var tmp = instance._web3.utils.toAscii(result);
          var bank_name="";
          for(var i=0;i<32;i++){
            if((tmp[i]==" ")||(tmp[i]>="a" &&tmp[i]<="z")||(tmp[i]>="A" && tmp[i]<="Z"))
            bank_name = bank_name+tmp[i];
          }                   
          
          resolve(bank_name)
        }
      });
    }) as Promise<string>;
  }
  
 

  public async add_bank(byte_names,privatekey): Promise<number> {  
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey,'hex');
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex'); 
          let contract_function =instance.loan_contract.methods.add_bank(byte_names);                          
          var contract_function_abi = contract_function.encodeABI();   
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
          //  console.log(result);
           
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })
    }) as Promise<number>;
  }
  
  public async borrower_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.borrower_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result;i++){
          arr.push(i);
        }
        resolve(arr)
       
        }
      });
    }) as Promise<number[]>;
  }

  public async borrower_map(borrower_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.borrower_map(borrower_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          var tmp = instance._web3.utils.toAscii(result);
          var borrower_name="";
          for(var i=0;i<32;i++){
            if((tmp[i]==" ")||(tmp[i]>="a" &&tmp[i]<="z")||(tmp[i]>="A" && tmp[i]<="Z"))
            borrower_name = borrower_name+tmp[i];
          }
          resolve(borrower_name)
        }
      });
    }) as Promise<string>;
  }

  public async add_borrower(bank_id,borrower_name,privatekey): Promise<number> {                                               
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');                                                
          let contract_function =instance.loan_contract.methods.add_borrower(bank_id,borrower_name);            
          var contract_function_abi = contract_function.encodeABI();   
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()                       
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })   
    }) as Promise<number>;
  }

  public async show_borrower(bank_id): Promise<object> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.show_borrower(bank_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<object>;
  }

  public async loan_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.loan_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
        for(var i=1;i<=result;i++){
            arr.push(i);
        }
        // console.log(result.toNumber());
        
        resolve(arr);
          
        }
      });
    }) as Promise<number[]>;
  }

  public async borrower_details_map(loan_id): Promise<object> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.borrower_details_map(loan_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<object>;
  }

  public async asset_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.asset_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result;i++){
          arr.push(i);
        }
        resolve(arr)
       
        }
      });
    }) as Promise<number[]>;
  }
  
  public async add_loan(borrower_id,loan_amount,interest_rate,loan_duration,asset_details,asset_amount,borrower_paid,privatekey): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');                                                                          
          var contract_function =instance.loan_contract.methods.add_loan(borrower_id,loan_amount,interest_rate,loan_duration,asset_details,asset_amount,borrower_paid);          
          var contract_function_abi = contract_function.encodeABI();         
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })    
    }) as Promise<number>;
  }
  
  public async update_loan(loanid,amount,option,owned_spv_id,owned_inv_id,privatekey): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');                                                                          
          var contract_function =instance.loan_contract.methods.update_loan(loanid,amount,option,owned_spv_id,owned_inv_id);        
          var contract_function_abi = contract_function.encodeABI();          
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()             
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })     
    }) as Promise<number>;
  }
  
  public async pool_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.pool_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
        for(var i=1;i<=result;i++){
            arr.push(i);
        }
        resolve(arr);
          
        }
      });
    }) as Promise<number[]>;
  }

  public async pool_details(pool_id): Promise<object> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.pool_details(pool_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<object>;
  }
  
  public async show_loanids_of_pool(pool_id): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.show_loanids_of_pool(pool_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number[]>;
  }
  
  public async create_pool(loan_ids,value,privatekey): Promise<number> {                                        
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');
                                   
                                       
          var contract_function =instance.loan_contract.methods.create_pool(loan_ids,value);    
          var contract_function_abi = contract_function.encodeABI();      
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })
      
    }) as Promise<number>;
  }

  public async spv_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.spv_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        { 
          const arr:number[] = [];
          for(var i=1;i<=result;i++){
          arr.push(i);
        }
        resolve(arr)
      }
       
      });
    }) as Promise<number[]>;
  }

  public async spv_details(spv_id): Promise<object> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.spv_details(spv_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<object>;
  }
  
  public async spv_id_get(address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.spv_id_get(address).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }

  public async register_spv(privatekey): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');
                                   
                                       
          var contract_function =instance.loan_contract.methods.register_spv();         
          var contract_function_abi = contract_function.encodeABI();         
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })      
    }) as Promise<number>;
  }

  public async is_owned_spv(spv_id,pool_id): Promise<boolean> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.is_owned_spv(spv_id,pool_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<boolean>;
  }
  
  public async spv_id_by_pool_id(pool_id): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.spv_id_by_pool_id(pool_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }

  public async spv_buy_pool(pool_id,amount,privatekey): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');
          var amt = instance._web3.utils.toHex(amount);                                                                             
          var contract_function =instance.loan_contract.methods.spv_buy_pool(pool_id);          
          var contract_function_abi = contract_function.encodeABI();        
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: amt,
            data: contract_function_abi
          } 
          console.log("inside");
          
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })      
    }) as Promise<number>;
  }

  public async investor_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.investor_ids().call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result;i++){
          arr.push(i);
        }
        resolve(arr)
      }      
      });
    }) as Promise<number[]>;
  }

  public async investor_details(investor_id): Promise<object> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.investor_details(investor_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<object>;
  }
  
  public async investor_id_get(address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.investor_id_get(address).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }

  public async is_owned_investor(inv_id,pool_id): Promise<boolean> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.is_owned_investor(inv_id,pool_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<boolean>;
  }
  
  public async register_investor(privatekey): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');
                                   
                                       
          var contract_function =instance.loan_contract.methods.register_investor();
          var contract_function_abi = contract_function.encodeABI();                
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })     
    }) as Promise<number>;
  }

  public async investor_purchase(pool_id,privatekey,amount): Promise<number> {                                          
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');
          var amt = instance._web3.utils.toHex(amount)                                           
          var contract_function =instance.loan_contract.methods.investor_purchase(pool_id);        
          var contract_function_abi = contract_function.encodeABI();      
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: amt,
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })     
    }) as Promise<number>;
  }

  public async issuer_withdraw(how_much_amount,privatekey): Promise<number> {                                        
    let instance = this;
    return new Promise((resolve, reject) => {
      const privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
      var senderaddress = privatekeydetails["address"];            
      instance._web3.eth.getTransactionCount(senderaddress,function(err,result){
          var nonce=result.toString(16);
          const private_key = Buffer.from(privatekey,'hex');                   
          var contract_function =instance.loan_contract.methods.issuer_withdraw(how_much_amount);         
          var contract_function_abi = contract_function.encodeABI();
          var  txParams  = {
            nonce: '0x' +nonce,
            gasPrice:  '0x4A817C800',
            gasLimit: 4000000,
            from :senderaddress,
            to:instance.loan_contractaddress,
            value: '0x00',
            data: contract_function_abi
          } 
          var tx = new Tx(txParams);
          tx.sign(private_key);
          const serializedtx = tx.serialize()   
          instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
            if(err != null){
              console.log("err")
              resolve(0)
            }
            else{
              instance.hash(result).then(res =>{
                if(res == 0){
                  resolve(0)
                }
                else if(res == 1) {
                  resolve(1)
                }
                else if(res == 2) {
                  resolve(2)
                }
              })
            }
          })
      })     
    }) as Promise<number>;
  }
  
  public async inv_id_by_pool_id(pool_id): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.inv_id_by_pool_id(pool_id,pool_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }

  public async  loan_status(loan_id): Promise<object> { 
    // console.log(loan_id);                           
    let instance = this;
    // var  id = instance._web3.utils.fromAscii(loan_id)
    // console.log(id);
    
    return new Promise((resolve, reject) => {
      instance.loan_contract.methods.loan_status(loan_id).call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<object>;
  }
  
}
