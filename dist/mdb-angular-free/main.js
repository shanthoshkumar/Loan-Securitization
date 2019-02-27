(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Service/loan-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Service/loan-service.service.ts ***!
  \*************************************************/
/*! exports provided: LoanServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServiceService", function() { return LoanServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethereumjs-tx */ "./node_modules/ethereumjs-tx/es5/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js").Buffer;


var loanAbi = __webpack_require__(/*! ./loan.json */ "./src/app/Service/loan.json");
var LoanServiceService = /** @class */ (function () {
    function LoanServiceService(spinner, cookieService) {
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.address = null;
        this.loan_contractaddress = "0xE5a8F6011340bC953eF43c05aF3798d6ED020ca6";
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        this.loan_contract = new this._web3.eth.Contract(loanAbi, this.loan_contractaddress, {
            gaslimit: 3000000,
        });
    }
    LoanServiceService.prototype.privatekey_by_address = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.get_cookie().then(function (privatekey) {
                            var senderaddress = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey, 'hex');
                            resolve(senderaddress);
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.set_cookie = function (private_key) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                instance.cookieService.set('privateKey', private_key);
                // console.log("cookie successfully set");
                this.get_cookie();
                return [2 /*return*/];
            });
        });
    };
    LoanServiceService.prototype.check_cookie = function (private_key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var instance = _this;
                        var cookieExists = instance.cookieService.check(private_key);
                        resolve(cookieExists);
                    })];
            });
        });
    };
    LoanServiceService.prototype.get_cookie = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(instance.cookieService.get('privateKey'));
                    })];
            });
        });
    };
    LoanServiceService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance, account_adddress;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.get_cookie().then(function (private_key) {
                            account_adddress = instance._web3.eth.accounts.privateKeyToAccount('0x' + private_key);
                            resolve(account_adddress["address"]);
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.getUserBalance = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getBalance(account, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(instance._web3.utils.fromWei(result, 'ether'));
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.check_spv = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = this;
                        return [4 /*yield*/, instance.privatekey_by_address().then(function (address) { return _this.account = address["address"]; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                instance.loan_contract.methods.spv_id_get(_this.account).call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    else {
                                        if (result == 0) {
                                            // alert("Not registered")
                                            resolve(false);
                                        }
                                        else {
                                            // alert("Already Registered")
                                            resolve(true);
                                        }
                                    }
                                });
                            })];
                }
            });
        });
    };
    LoanServiceService.prototype.check_investor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = this;
                        return [4 /*yield*/, instance.privatekey_by_address().then(function (acc) { return _this.address = acc["address"]; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                instance.loan_contract.methods.investor_id_get(_this.address).call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    else {
                                        if (result == 0) {
                                            // alert("Not registered")
                                            resolve(false);
                                        }
                                        else {
                                            // alert("Already Registered")
                                            resolve(true);
                                        }
                                    }
                                });
                            })];
                }
            });
        });
    };
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
    LoanServiceService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    console.log("hash err");
                                    resolve(0);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        console.log("hash result.status == 0x1");
                                        resolve(1);
                                    }
                                    else {
                                        console.log("hash result.status == else");
                                        resolve(2);
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    LoanServiceService.prototype.contract_balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.contract_balance().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.current_time = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.current_time().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.pool_owned_by = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.pool_owned_by(pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.check_issuer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = this;
                        return [4 /*yield*/, instance.privatekey_by_address().then(function (address) { return _this.address = address["address"]; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                instance.loan_contract.methods.issuer().call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    else if (result == instance.address) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                });
                            })];
                }
            });
        });
    };
    LoanServiceService.prototype.bank_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.bank_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.bank_detail_map = function (bank_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.bank_detail_map(bank_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var tmp = instance._web3.utils.toAscii(result);
                                var bank_name = "";
                                for (var i = 0; i < 32; i++) {
                                    if ((tmp[i] == " ") || (tmp[i] >= "a" && tmp[i] <= "z") || (tmp[i] >= "A" && tmp[i] <= "Z"))
                                        bank_name = bank_name + tmp[i];
                                }
                                resolve(bank_name);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.add_bank = function (byte_names, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey, 'hex');
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.add_bank(byte_names);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                //  console.log(result);
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.borrower_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.borrower_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.borrower_map = function (borrower_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.borrower_map(borrower_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var tmp = instance._web3.utils.toAscii(result);
                                var borrower_name = "";
                                for (var i = 0; i < 32; i++) {
                                    if ((tmp[i] == " ") || (tmp[i] >= "a" && tmp[i] <= "z") || (tmp[i] >= "A" && tmp[i] <= "Z"))
                                        borrower_name = borrower_name + tmp[i];
                                }
                                resolve(borrower_name);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.add_borrower = function (bank_id, borrower_name, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.add_borrower(bank_id, borrower_name);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.show_borrower = function (bank_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.show_borrower(bank_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.loan_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.loan_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                // console.log(result.toNumber());
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.borrower_details_map = function (loan_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.borrower_details_map(loan_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.asset_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.asset_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.add_loan = function (borrower_id, loan_amount, interest_rate, loan_duration, asset_details, asset_amount, borrower_paid, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.add_loan(borrower_id, loan_amount, interest_rate, loan_duration, asset_details, asset_amount, borrower_paid);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.update_loan = function (loanid, amount, option, owned_spv_id, owned_inv_id, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.update_loan(loanid, amount, option, owned_spv_id, owned_inv_id);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.pool_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.pool_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.pool_details = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.pool_details(pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.show_loanids_of_pool = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.show_loanids_of_pool(pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.create_pool = function (loan_ids, value, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.create_pool(loan_ids, value);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.spv_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.spv_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.spv_details = function (spv_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.spv_details(spv_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.spv_id_get = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.spv_id_get(address).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.register_spv = function (privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.register_spv();
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.is_owned_spv = function (spv_id, pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.is_owned_spv(spv_id, pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.spv_id_by_pool_id = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.spv_id_by_pool_id(pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.spv_buy_pool = function (pool_id, amount, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var amt = instance._web3.utils.toHex(amount);
                            var contract_function = instance.loan_contract.methods.spv_buy_pool(pool_id);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: amt,
                                data: contract_function_abi
                            };
                            console.log("inside");
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.investor_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.investor_ids().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result; i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.investor_details = function (investor_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.investor_details(investor_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.investor_id_get = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.investor_id_get(address).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.is_owned_investor = function (inv_id, pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.is_owned_investor(inv_id, pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.register_investor = function (privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.register_investor();
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.investor_purchase = function (pool_id, privatekey, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var amt = instance._web3.utils.toHex(amount);
                            var contract_function = instance.loan_contract.methods.investor_purchase(pool_id);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: amt,
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.issuer_withdraw = function (how_much_amount, privatekey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var privatekeydetails = instance._web3.eth.accounts.privateKeyToAccount("0x" + privatekey);
                        var senderaddress = privatekeydetails["address"];
                        instance._web3.eth.getTransactionCount(senderaddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = Buffer.from(privatekey, 'hex');
                            var contract_function = instance.loan_contract.methods.issuer_withdraw(how_much_amount);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: senderaddress,
                                to: instance.loan_contractaddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.inv_id_by_pool_id = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.inv_id_by_pool_id(pool_id, pool_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.loan_status = function (loan_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                // var  id = instance._web3.utils.fromAscii(loan_id)
                // console.log(id);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.methods.loan_status(loan_id).call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoanServiceService);
    return LoanServiceService;
}());



/***/ }),

/***/ "./src/app/Service/loan.json":
/*!***********************************!*\
  !*** ./src/app/Service/loan.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, default */
/***/ (function(module) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"transfer","type":"event"},{"constant":false,"inputs":[{"name":"_bank_name","type":"bytes32[]"}],"name":"add_bank","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"bank_id","type":"uint256"},{"name":"_borrower_name","type":"bytes32[]"}],"name":"add_borrower","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_borrower_id","type":"uint256"},{"name":"_loan_amount","type":"uint256"},{"name":"_interest_rate","type":"uint256"},{"name":"_loan_duration","type":"uint256"},{"name":"_asset_details","type":"string"},{"name":"_asset_amount","type":"uint256"},{"name":"_borrower_paid","type":"uint256"}],"name":"add_loan","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_loan_ids","type":"uint256[]"},{"name":"_value","type":"uint256"}],"name":"create_pool","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pool_id","type":"uint256"}],"name":"investor_purchase","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"issuer_withdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"register_investor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"register_spv","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pool_id","type":"uint256"}],"name":"spv_buy_pool","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":false,"inputs":[{"name":"_loan_id","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_options","type":"uint256"},{"name":"spv_id","type":"uint256"},{"name":"inv_id","type":"uint256"}],"name":"update_loan","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"asset_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bank_detail_map","outputs":[{"name":"bank_name","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bank_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"borrower_details_map","outputs":[{"name":"borrower_id","type":"uint256"},{"name":"loan_amount","type":"uint256"},{"name":"interest_rate","type":"uint256"},{"name":"loan_duration","type":"uint256"},{"name":"asset_id","type":"uint256"},{"name":"asset_details","type":"string"},{"name":"asset_amount","type":"uint256"},{"name":"borrower_paid","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrower_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"borrower_map","outputs":[{"name":"borrower_name","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_loan_ids","type":"uint256[]"}],"name":"can_pack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contract_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"inv_id_by_pool_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"investor_details","outputs":[{"name":"investor_address","type":"address"},{"name":"gain_amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"investor_id_get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"investor_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"is_owned_investor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"is_owned_spv","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"issuer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"loan_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_loan_id","type":"uint256"}],"name":"loan_status","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pool_details","outputs":[{"name":"pool_value","type":"uint256"},{"name":"is_sold","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bank_id","type":"uint256"}],"name":"show_borrower","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pool_id","type":"uint256"}],"name":"show_loanids_of_pool","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spv_details","outputs":[{"name":"spv_address","type":"address"},{"name":"gain_amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spv_id_by_pool_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"spv_id_get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"spv_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/addbank/addbank.component.html":
/*!************************************************!*\
  !*** ./src/app/addbank/addbank.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <br>\r\n<br>\r\n<div class=\"container-fluid \" >\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n      <blockquote class=\"blockquote bq-primary\">\r\n          <p class=\"bq-title\">Note:</p>\r\n          <p>You can also enter multiple Bank Names &nbsp;<strong>(ex:- HDFC,AXIS,SBI)</strong>&nbsp;&nbsp;<br>(or)&nbsp;&nbsp;You can Upload a csv file&nbsp;<strong>(ex:- File.csv)</strong></p>\r\n        </blockquote><br> \r\n  </div>\r\n</div>\r\n  <div class=\"row\">\r\n\r\n\r\n\r\n<div class=\"col-sm-4\"> \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-10\">\r\n        <h4><b>Bank Details</b></h4><br>\r\n        <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:180px;\">\r\n            <thead class=\"tablecolor\">\r\n              <tr>\r\n                <th>Bank ID</th>\r\n                <th>Bank Name</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let bank of banklist\" >\r\n                <td>{{ bank.bankid }}</td>\r\n                <td>{{ bank.bankname }}</td>\r\n              </tr>\r\n            </tbody>\r\n        </table>  \r\n    </div><br>\r\n  </div>     \r\n</div>\r\n\r\n\r\n\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n          <h3><strong>Bank Registration</strong></h3>\r\n          <br>\r\n              <div class=\"col-sm-12\">\r\n            \r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"md-form\">\r\n                        \r\n                          <div class=\"group\">      \r\n                              <input class=\"input\" type=\"text\" id=\"id1\"  #bankname required>\r\n                              <span class=\"highlight\"></span>\r\n                              <span class=\"bar\"></span>\r\n                              <label >Enter Bank Name</label>\r\n                            </div>\r\n\r\n                            \r\n                       \r\n                        </div>\r\n            \r\n              </div>\r\n              </div>\r\n              <div class=\"col-sm-12\" >\r\n                  <button class=\"btn btn-primary\" (click)=\"get_bank_Id(bankname.value)\">Register</button>\r\n                </div>\r\n                <br>\r\n                <br>            \r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n             <h3><strong>Upload a File(.csv)</strong></h3><br><br>\r\n             <div class=\"col-sm-10\">             \r\n             <input type=\"file\" class=\"btn btn-primary\" id=\"fileUpload\"  class=\"form-control\" (change)=\"onChange($event)\" accept=\".csv\" required />      \r\n          </div>          \r\n      </div>\r\n    \r\n\r\n \r\n</div>\r\n</div>\r\n\r\n\r\n  <!-- <div class=\"col-sm-3\">\r\n      <div class=\"row\">\r\n          \r\n      </div>  \r\n  </div> -->\r\n<!-- row2 -->\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Transaction in process...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/addbank/addbank.component.scss":
/*!************************************************!*\
  !*** ./src/app/addbank/addbank.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\n.input {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\n.input:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\n.input:focus ~ label, .input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\n.input:focus ~ .bar:before, .input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\n.input:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/addbank/addbank.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addbank/addbank.component.ts ***!
  \**********************************************/
/*! exports provided: AddbankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbankComponent", function() { return AddbankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js").Buffer;
var AddbankComponent = /** @class */ (function () {
    function AddbankComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.banklist = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#issuer").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#investor").removeClass("active");
        this.bankid = '';
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_6___default.a(new web3__WEBPACK_IMPORTED_MODULE_6___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        this.bank_table();
    }
    AddbankComponent.prototype.onChange = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        var lss = this.ls;
        var meta = this;
        var table = this.bank_table();
        var spin = this.spinner;
        this.ls.get_cookie().then(function (privatekey) {
            reader.onload = function (event) {
                meta.get_file_data(reader.result);
            };
        });
        reader.readAsText(file);
    };
    AddbankComponent.prototype.get_file_data = function (names) {
        var _this = this;
        // console.log(names);
        if (names.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Enter Bank Name In Input textbox");
            return;
        }
        var bank_names = [];
        var tmp;
        tmp = names.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            var byte_name = this._web3.utils.fromAscii(tmp[i]);
            bank_names.push(byte_name);
        }
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.add_bank(bank_names, key).then(function (result) {
                document.getElementById('id1').value = '';
                document.getElementById('fileUpload').value = '';
                _this.spinner.hide();
                if (result == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction");
                }
                else if (result == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction Failed !");
                }
                else if (result == 1) {
                    _this.bank_table();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Bank(s) Registered Successfully!");
                }
            });
        });
    };
    AddbankComponent.prototype.get_bank_Id = function (bname) {
        var _this = this;
        // console.log("bname");
        // console.log(bname);
        if (bname.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Enter Bank Name In Input textbox");
            return;
        }
        var bank_names = [];
        var tmp;
        tmp = bname.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            var byte_name = this._web3.utils.fromAscii(tmp[i]);
            bank_names.push(byte_name);
        }
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.add_bank(bank_names, key).then(function (result) {
                document.getElementById('id1').value = '';
                _this.spinner.hide();
                if (result == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction");
                }
                else if (result == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction Failed !");
                }
                else if (result == 1) {
                    _this.bank_table();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Bank(s) Registered Successfully!");
                }
            });
        });
    };
    AddbankComponent.prototype.bank_table = function () {
        var _this = this;
        this.banklist.length = 0;
        this.ls.bank_ids().then(function (bank_ids) {
            bank_ids.forEach(function (bank_id) {
                // console.log(bank_id);
                var obj = {};
                _this.ls.bank_detail_map(bank_id).then(function (b_d) {
                    obj['bankid'] = bank_id;
                    obj['bankname'] = b_d;
                    _this.banklist.push(obj);
                });
            });
        });
    };
    AddbankComponent.prototype.ngOnInit = function () {
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    AddbankComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddbankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addbank',
            template: __webpack_require__(/*! ./addbank.component.html */ "./src/app/addbank/addbank.component.html"),
            styles: [__webpack_require__(/*! ./addbank.component.scss */ "./src/app/addbank/addbank.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AddbankComponent);
    return AddbankComponent;
}());



/***/ }),

/***/ "./src/app/addborrower/addborrower.component.html":
/*!********************************************************!*\
  !*** ./src/app/addborrower/addborrower.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <br><br>\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n          <blockquote class=\"blockquote bq-primary\">\r\n              <p class=\"bq-title\">Note:</p>\r\n              <p>You can also enter multiple Borrower Names &nbsp;<strong>(ex:- Kumar,Kannan,Kishore)</strong>&nbsp;&nbsp;<br>(or)&nbsp;&nbsp;You can Upload a csv file&nbsp;<strong>(ex:- File.csv)</strong></p>            \r\n              <br>\r\n            </blockquote>\r\n      </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-2\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <h4><b>Borrower Details</b></h4><br>\r\n                <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;width:195px;\">\r\n                    <thead class=\"tablecolor\">\r\n                      <tr>\r\n                        <th>Borrower ID</th>\r\n                        <th>Borrower Name</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let borrower of borrowerlist\" >\r\n                        <td>{{ borrower.borrowerid }}</td>\r\n                        <td>{{ borrower.borrowername }}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n                \r\n        </div>\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <h4><b>Bank Details</b></h4><br>\r\n                <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;width:180px;\">\r\n                    <thead class=\"tablecolor\">\r\n                      <tr>\r\n                        <th>Bank ID</th>\r\n                        <th>Bank Name</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let bank of banklist\" >\r\n                        <td>{{ bank.bankid }}</td>\r\n                        <td>{{ bank.bankname }}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-sm-4\"></div>\r\n            \r\n        </div>\r\n            \r\n    </div>\r\n    <div class=\"col-sm-6\">      \r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n      <h3><strong>Borrower Registration</strong></h3><br><br>\r\n     \r\n      <div class=\"col-sm-12\">\r\n        <div class=\"group\">      \r\n          <input class=\"input\" type=\"text\" id=\"id1\"   #brwrname required>\r\n          <span class=\"highlight\"></span>\r\n          <span class=\"bar\"></span>\r\n          <label >Enter Borrower Name</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12\"> \r\n        <div class=\"group\">      \r\n            <input class=\"input\" type=\"text\" id=\"id2\"   #bankid required>\r\n            <span class=\"highlight\"></span>\r\n            <span class=\"bar\"></span>\r\n            <label>Enter Bank ID</label>\r\n        </div>\r\n      </div> \r\n      <div class=\"col-sm-12\"> \r\n        <button class=\"btn btn-primary\" (click)=\"get_borrower_id(brwrname.value,bankid.value)\">Register</button>\r\n        <br><br>\r\n        </div>\r\n        \r\n        <br>  \r\n  </div>\r\n  <div class=\"col-sm-6\">                                           \r\n             <h3><strong>Upload a File(.csv)</strong></h3><br><br>  \r\n             <div class=\"group\">      \r\n                <input class=\"input\" type=\"text\" id=\"id3\"  #bankiid required>\r\n                <span class=\"highlight\"></span>\r\n                <span class=\"bar\"></span>\r\n                <label>Enter Bank ID</label>\r\n            </div>\r\n            <br>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"file\" class=\"btn btn-primary\" id=\"fileUpload\"  class=\"form-control\" (change)=\"onChange($event,bankiid.value)\" accept=\".csv\" required />      \r\n            </div>\r\n            \r\n          \r\n  </div>\r\n</div>            \r\n    </div>  \r\n  </div>\r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/addborrower/addborrower.component.scss":
/*!********************************************************!*\
  !*** ./src/app/addborrower/addborrower.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\n.input {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\n.input:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\n.input:focus ~ label, .input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\n.input:focus ~ .bar:before, .input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\n.input:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/addborrower/addborrower.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addborrower/addborrower.component.ts ***!
  \******************************************************/
/*! exports provided: AddborrowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddborrowerComponent", function() { return AddborrowerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js").Buffer;
var AddborrowerComponent = /** @class */ (function () {
    function AddborrowerComponent(ls, router, spinner) {
        var _this = this;
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        this.borrowerlist = [];
        this.banklist = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#issuer").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#investor").removeClass("active");
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(new web3__WEBPACK_IMPORTED_MODULE_4___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        this.borrower_id = '';
        this.ls.contract_balance().then(function (result) { return _this.balance = result; });
    }
    AddborrowerComponent.prototype.onChange = function (event, bank__id) {
        if (bank__id.trim() != "") {
            var lss = this.ls;
            var meta = this;
            var file = event.target.files[0];
            var reader = new FileReader();
            this.ls.get_cookie().then(function (privatekey) {
                reader.onload = function (event) {
                    meta.get_file_data(reader.result.trim(), bank__id);
                };
            });
            reader.readAsText(file);
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Enter Bank ID");
        }
    };
    AddborrowerComponent.prototype.get_file_data = function (brwr_name, bank__id) {
        var _this = this;
        if (brwr_name.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Enter Borrower Name");
            return;
        }
        if (bank__id.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Enter Bank Id");
            return;
        }
        var borrower__names = [];
        var tmp;
        tmp = brwr_name.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            borrower__names.push(this._web3.utils.fromAscii(tmp[i]));
        }
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.add_borrower(bank__id, borrower__names, key).then(function (res) {
                document.getElementById('id1').value = '';
                document.getElementById('id2').value = '';
                document.getElementById('id3').value = '';
                document.getElementById('fileUpload').value = '';
                _this.spinner.hide();
                if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Transaction Failed !");
                }
                else if (res == 1) {
                    _this.borrower_table();
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Borrower(s) Successfully Registered");
                }
            });
        });
    };
    AddborrowerComponent.prototype.get_borrower_id = function (brwrname, bankid) {
        var _this = this;
        if (brwrname.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Enter Borrower Name");
            return;
        }
        if (bankid.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Enter Bank Id");
            return;
        }
        var borrower_names = [];
        var tmp;
        tmp = brwrname.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            borrower_names.push(this._web3.utils.fromAscii(tmp[i]));
        }
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.add_borrower(bankid, borrower_names, key).then(function (res) {
                document.getElementById('id1').value = '';
                document.getElementById('id2').value = '';
                _this.spinner.hide();
                if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Transaction Failed !");
                }
                else if (res == 1) {
                    _this.borrower_table();
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Borrower(s) Successfully Registered");
                }
            });
        });
    };
    AddborrowerComponent.prototype.table = function () {
        var _this = this;
        this.loan_details.length = 0;
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[2];
                    obj['borrowerintrest'] = result[1];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    _this.loan_details.push(obj);
                });
            });
        });
    };
    AddborrowerComponent.prototype.bank_table = function () {
        var _this = this;
        this.banklist.length = 0;
        this.ls.bank_ids().then(function (bank_ids) {
            bank_ids.forEach(function (bank_id) {
                var obj = {};
                _this.ls.bank_detail_map(bank_id).then(function (b_d) {
                    obj['bankid'] = bank_id;
                    obj['bankname'] = b_d;
                    _this.banklist.push(obj);
                });
            });
        });
    };
    AddborrowerComponent.prototype.borrower_table = function () {
        var _this = this;
        this.borrowerlist.length = 0;
        this.ls.borrower_ids().then(function (ids) {
            ids.forEach(function (element) {
                var temp_obj = {};
                _this.ls.borrower_map(element).then(function (details) {
                    temp_obj['borrowerid'] = element;
                    temp_obj['borrowername'] = details;
                    _this.borrowerlist.push(temp_obj);
                });
            });
        });
    };
    AddborrowerComponent.prototype.ngOnInit = function () {
        this.table();
        this.bank_table();
        this.borrower_table();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    AddborrowerComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddborrowerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addborrower',
            template: __webpack_require__(/*! ./addborrower.component.html */ "./src/app/addborrower/addborrower.component.html"),
            styles: [__webpack_require__(/*! ./addborrower.component.scss */ "./src/app/addborrower/addborrower.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], AddborrowerComponent);
    return AddborrowerComponent;
}());



/***/ }),

/***/ "./src/app/addinvestor/addinvestor.component.html":
/*!********************************************************!*\
  !*** ./src/app/addinvestor/addinvestor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        <div class=\"col-sm-6\"><br><br>\r\n                <h3 >Investor Registeration</h3><br>\r\n                <div class=\"alert alert-info\">\r\n                                   \r\n                        <p class=\"big\"><font size=\"4\">\r\n                                An investor is a person that allocates capital with the expectation of a future financial return. \r\n                           </font> </p>\r\n                       <div class=\"form-group form-check\">\r\n                            </div>\r\n             </div><br>\r\n           \r\n            \r\n        <button class=\"btn btn-info\" (click)=\"investor_register()\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        </div>\r\n</div>\r\n</body>\r\n</html>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/addinvestor/addinvestor.component.scss":
/*!********************************************************!*\
  !*** ./src/app/addinvestor/addinvestor.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addinvestor/addinvestor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addinvestor/addinvestor.component.ts ***!
  \******************************************************/
/*! exports provided: AddinvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinvestorComponent", function() { return AddinvestorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddinvestorComponent = /** @class */ (function () {
    function AddinvestorComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
    }
    AddinvestorComponent.prototype.investor_register = function () {
        var _this = this;
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.register_investor(key).then(function (res) {
                _this.spinner.hide();
                if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed !");
                }
                else if (res == 1) {
                    _this.ls.investor_ids().then(function (inv_ids) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Successfully Registered As An Investor, Your Investor Id Is:  " + inv_ids.length);
                    });
                }
            });
        });
    };
    AddinvestorComponent.prototype.ngOnInit = function () {
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    AddinvestorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddinvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addinvestor',
            template: __webpack_require__(/*! ./addinvestor.component.html */ "./src/app/addinvestor/addinvestor.component.html"),
            styles: [__webpack_require__(/*! ./addinvestor.component.scss */ "./src/app/addinvestor/addinvestor.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AddinvestorComponent);
    return AddinvestorComponent;
}());



/***/ }),

/***/ "./src/app/addloan/addloan.component.html":
/*!************************************************!*\
  !*** ./src/app/addloan/addloan.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"row\">\r\n                     \r\n                        <div class=\"col-sm-12\">\r\n                                <h3><strong>Add Loan Details:</strong></h3><br>\r\n        \r\n                                <div class=\"row\">\r\n                                                \r\n                                <div class=\"col-sm-6\">\r\n                                   \r\n                                    <div class=\"group\">      \r\n                                        <input type=\"text\" id=\"id1\"  #borrowerid required>\r\n                                        <span class=\"highlight\"></span>\r\n                                        <span class=\"bar\"></span>\r\n                                        <label >Enter Borrower Id</label>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-6\">\r\n                                    \r\n                                       \r\n                                        <div class=\"group\">      \r\n                                            <input type=\"text\" id=\"id2\"  #borrowerloanAmount required>\r\n                                            <span class=\"highlight\"></span>\r\n                                            <span class=\"bar\"></span>\r\n                                            <label >Enter Borrower Loan Amount(Rs)</label>\r\n                                          </div>\r\n                                        \r\n                                      </div>\r\n                              \r\n                                  </div>\r\n                              \r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-sm-6\">\r\n                                                    <!-- <br> -->\r\n                                     \r\n                                                    <div class=\"group\">      \r\n                                                        <input type=\"text\" id=\"id3\"  #interestrate required>\r\n                                                        <span class=\"highlight\"></span>\r\n                                                        <span class=\"bar\"></span>\r\n                                                        <label>Enter Interest rate</label>\r\n                                                      </div>\r\n                    \r\n                                                  </div>\r\n                                    \r\n                                        <div class=\"col-sm-6\">\r\n                                            <!-- <br> -->\r\n                                         \r\n                                            <div class=\"group\">      \r\n                                                <input type=\"text\" id=\"id4\"  #loanduration required>\r\n                                                <span class=\"highlight\"></span>\r\n                                                <span class=\"bar\"></span>\r\n                                                <label >Enter Loan Duration(in months)</label>\r\n                                              </div>\r\n                    \r\n                                          </div>\r\n                    \r\n                                      </div>\r\n                              \r\n                                      <div class=\"row\">\r\n                                       \r\n                                            <div class=\"col-sm-6\">\r\n                                                <!-- <br> -->\r\n                                             \r\n                                                <div class=\"group\">      \r\n                                                    <input type=\"text\" id=\"id5\"  #assetdetails required>\r\n                                                    <span class=\"highlight\"></span>\r\n                                                    <span class=\"bar\"></span>\r\n                                                    <label >Enter Asset Details</label>\r\n                                                  </div>\r\n                              \r\n                                              </div>\r\n                    \r\n                                              <div class=\"col-sm-6\">\r\n                                                  <br>\r\n                                      \r\n                              \r\n                                                  <div class=\"group\">      \r\n                                                      <input type=\"text\" id=\"id6\"  #assetamt required>\r\n                                                      <span class=\"highlight\"></span>\r\n                                                      <span class=\"bar\"></span>\r\n                                                      <label >Enter Asset Amount(in rupees)</label>\r\n                                                    </div>\r\n                    \r\n                                                </div>\r\n                    \r\n                                            </div>\r\n                              \r\n                                            <div class=\"row\">\r\n                                             \r\n                                                   \r\n                                                <div class=\"col-sm-6\">\r\n                                                    <br>\r\n                                     \r\n                                                    <div class=\"group\">      \r\n                                                        <input type=\"text\" id=\"id7\"  #borrowerpaid required>\r\n                                                        <span class=\"highlight\"></span>\r\n                                                        <span class=\"bar\"></span>\r\n                                                        <label >Enter Borrower Paid(in rupees) *Optional</label>\r\n                                                      </div>\r\n                    \r\n                                                  </div>\r\n                                                  <div class=\"col-sm-6\">\r\n                                                        <br>\r\n                                                    <button class=\"btn btn-primary\" (click)=\"upload(borrowerid.value,borrowerloanAmount.value,interestrate.value,loanduration.value,assetdetails.value,assetamt.value,borrowerpaid.value)\">Upload Details</button>     \r\n                                                    </div>    \r\n                                                </div>\r\n                                                           \r\n                        </div>\r\n                      \r\n                        \r\n                    </div>\r\n                        \r\n                    </div>\r\n\r\n       <div class=\"col-sm-3\">\r\n        <h4><b>Borrower Details</b></h4><br>\r\n        <table class=\"table\" style=\"overflow-y:auto;display:block;height:400px;width:195px;\">\r\n            <thead class=\"tablecolor\">\r\n              <tr>\r\n                <th>Borrower Name</th>\r\n                <th>Borrower ID</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let borrower of borrowerlist\" >\r\n                <td>{{ borrower.borrowername }}</td>\r\n                <td>{{ borrower.borrowerid }}</td>\r\n              </tr>\r\n            </tbody>\r\n        </table>\r\n       </div>                                                              \r\n                               \r\n\r\n    \r\n    <!-- <div class=\"col-sm-6\">\r\n        <h4><b>Loan Details</b></h4><br>\r\n<div style=\"overflow-y:auto;display:block;height:300px;\">\r\n        <table class=\"table\" >\r\n                <thead class=\"tablecolor\">\r\n                  <tr>\r\n                    <th>Loan ID</th>\r\n                    <th> Borrower ID</th>\r\n                    <th>Borrower Loan Amount(Rs)</th>\r\n                    <th> Borrower Interest Rate</th>\r\n                    <th>Loan Duration</th>\r\n                    <th>Asset ID</th>\r\n                    <th>Asset Details</th>\r\n                    <th>Asset Amount (Rs)</th>\r\n                    <th>Borrower Paid</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"loantable\">\r\n                    <tr *ngFor=\"let issuer of loan_details\">\r\n                        <td>{{ issuer.loanid }}</td>\r\n                        <td>{{ issuer.borrowerid }}</td>\r\n                        <td >{{ issuer. borrowerloanamt}}</td>\r\n                        <td>{{ issuer.borrowerintrest }}</td>\r\n                        <td>{{ issuer.loanduration }}</td>\r\n                        <td>{{ issuer.assetid }}</td>\r\n                        <td>{{ issuer.assetdetails }}</td>\r\n                        <td >{{ issuer.assetamt }}</td>\r\n                        <td >{{ issuer.borrowerpaid }}</td>\r\n                     </tr>\r\n                 </tbody>\r\n              </table>\r\n</div>\r\n\r\n    </div> -->\r\n</div>\r\n<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n                <h4><b>Loan Details</b></h4><br>\r\n        <div style=\"overflow-y:auto;display:block;height:300px;\">\r\n                <table class=\"table\" >\r\n                        <thead class=\"tablecolor\">\r\n                          <tr>\r\n                            <th>Loan ID</th>\r\n                            <th> Borrower ID</th>\r\n                            <th>Borrower Loan Amount(Rs)</th>\r\n                            <th> Borrower Interest Rate</th>\r\n                            <th>Loan Duration</th>\r\n                            <th>Asset ID</th>\r\n                            <th>Asset Details</th>\r\n                            <th>Asset Amount (Rs)</th>\r\n                            <th>Borrower Paid</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody id=\"loantable\">\r\n                            <tr *ngFor=\"let issuer of loan_details\">\r\n                                <td>{{ issuer.loanid }}</td>\r\n                                <td>{{ issuer.borrowerid }}</td>\r\n                                <td >{{ issuer. borrowerloanamt}}</td>\r\n                                <td>{{ issuer.borrowerintrest }}</td>\r\n                                <td>{{ issuer.loanduration }}</td>\r\n                                <td>{{ issuer.assetid }}</td>\r\n                                <td>{{ issuer.assetdetails }}</td>\r\n                                <td >{{ issuer.assetamt }}</td>\r\n                                <td >{{ issuer.borrowerpaid }}</td>\r\n                             </tr>\r\n                         </tbody>\r\n                      </table>\r\n        </div>\r\n        \r\n            </div>\r\n</div>\r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/addloan/addloan.component.scss":
/*!************************************************!*\
  !*** ./src/app/addloan/addloan.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\nbody {\n  background: url(https://scotch.io/wp-content/uploads/2014/07/61.jpg); }\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/addloan/addloan.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addloan/addloan.component.ts ***!
  \**********************************************/
/*! exports provided: AddloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddloanComponent", function() { return AddloanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddloanComponent = /** @class */ (function () {
    function AddloanComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        this.borrowerlist = [];
    }
    AddloanComponent.prototype.upload = function (borrowerid, borrowerloanAmount, interestrate, loanduration, assetdetails, assetamt, borrowerpaid) {
        var _this = this;
        if (borrowerid.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Borrower Id");
            return;
        }
        if (borrowerloanAmount.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Borrower Loan Amount");
            return;
        }
        if (interestrate.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Interest rate");
            return;
        }
        if (loanduration.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Loan Duration");
            return;
        }
        if (assetdetails.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Asset Details");
            return;
        }
        if (assetamt.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Asset Amount(in rupees)");
            return;
        }
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.add_loan(borrowerid, borrowerloanAmount, interestrate, loanduration, assetdetails, assetamt, borrowerpaid, key).then(function (result) {
                document.getElementById('id1').value = '';
                document.getElementById('id2').value = '';
                document.getElementById('id3').value = '';
                document.getElementById('id4').value = '';
                document.getElementById('id5').value = '';
                document.getElementById('id6').value = '';
                document.getElementById('id7').value = '';
                _this.spinner.hide();
                if (result == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (result == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed !");
                }
                else if (result == 1) {
                    _this.table();
                    _this.ls.loan_ids().then(function (loan_ids) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Loan Added Successfully and Generated Loan Id Is:  " + loan_ids.length);
                    });
                }
            });
        });
    };
    AddloanComponent.prototype.table = function () {
        var _this = this;
        this.loan_details = [];
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[1];
                    obj['borrowerintrest'] = result[2];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    _this.loan_details.push(obj);
                });
            });
        });
    };
    AddloanComponent.prototype.borrower_table = function () {
        var _this = this;
        this.borrowerlist.length = 0;
        this.ls.borrower_ids().then(function (ids) {
            ids.forEach(function (element) {
                var temp_obj = {};
                _this.ls.borrower_map(element).then(function (details) {
                    temp_obj['borrowername'] = details;
                    temp_obj['borrowerid'] = element;
                    _this.borrowerlist.push(temp_obj);
                });
            });
        });
    };
    AddloanComponent.prototype.ngOnInit = function () {
        this.table();
        this.borrower_table();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    AddloanComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddloanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addloan',
            template: __webpack_require__(/*! ./addloan.component.html */ "./src/app/addloan/addloan.component.html"),
            styles: [__webpack_require__(/*! ./addloan.component.scss */ "./src/app/addloan/addloan.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AddloanComponent);
    return AddloanComponent;
}());



/***/ }),

/***/ "./src/app/addspv/addspv.component.html":
/*!**********************************************!*\
  !*** ./src/app/addspv/addspv.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        <div class=\"col-sm-6\"><br><br>\r\n                <h3>SPV Registeration</h3><br>\r\n                <div class=\"alert alert-info\">\r\n                       \r\n                                 <p class=\"big\"><font size=\"4\">\r\n                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a title=\"service purchase vechicle\" data-toggle=\"popover\" data-trigger=\"hover\" data-content=\"Some content\">SPVs</a>\r\n                                       are mostly formed to raise funds from the market. Technically, an SPV is a  company.\r\n                                        It has to follow the rules of formation of a company laid down in the  Companies Act. \r\n                                       Like a company, the SPV is an artificial person. It has all the  attributes of a legal person. \r\n                                       It is independent of members subscribing to the  shares of the SPV. \r\n                                       The SPV has an existence of its own in the eyes of law. It can  sue and be sued in its name.\r\n                                        The SPV has to adhere to all the regulations laid  down in the Companies Act. Members of an\r\n                                        SPV are mostly the companies and  individuals sponsoring the entity. An SPV can also be a partnership firm.\r\n                                    </font> </p>\r\n                                </div>                      \r\n                    \r\n           <button class=\"btn btn-info\" (click)=\"spv_registeration()\">Register</button>\r\n   \r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        </div>\r\n      \r\n\r\n\r\n</div>\r\n</body>\r\n</html> \r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/addspv/addspv.component.scss":
/*!**********************************************!*\
  !*** ./src/app/addspv/addspv.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 94vh !important; }\n"

/***/ }),

/***/ "./src/app/addspv/addspv.component.ts":
/*!********************************************!*\
  !*** ./src/app/addspv/addspv.component.ts ***!
  \********************************************/
/*! exports provided: AddspvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddspvComponent", function() { return AddspvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddspvComponent = /** @class */ (function () {
    function AddspvComponent(ls, route, spinner) {
        this.ls = ls;
        this.route = route;
        this.spinner = spinner;
    }
    AddspvComponent.prototype.spv_registeration = function () {
        var _this = this;
        this.spinner.show();
        this.ls.get_cookie().then(function (key) {
            _this.ls.register_spv(key).then(function (res) {
                _this.spinner.hide();
                if (res == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                }
                else if (res == 2) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed");
                }
                else if (res == 1) {
                    _this.ls.spv_ids().then(function (spv_ids) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Successfully Registered As An SPV , Your SPV Id Is:  " + spv_ids.length);
                        _this.route.navigate(['spv']);
                    });
                }
            });
        });
    };
    AddspvComponent.prototype.ngOnInit = function () {
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.route.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    AddspvComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddspvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addspv',
            template: __webpack_require__(/*! ./addspv.component.html */ "./src/app/addspv/addspv.component.html"),
            styles: [__webpack_require__(/*! ./addspv.component.scss */ "./src/app/addspv/addspv.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AddspvComponent);
    return AddspvComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-routing/app-routing.component.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
// import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Component({
//   selector: 'app-app-routing',
//   templateUrl: './app-routing.component.html',
//   styleUrls: ['./app-routing.component.scss']
// })
// export class AppRoutingComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"], useValue: '/' }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _addbank_addbank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addbank/addbank.component */ "./src/app/addbank/addbank.component.ts");
/* harmony import */ var _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addborrower/addborrower.component */ "./src/app/addborrower/addborrower.component.ts");
/* harmony import */ var _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addloan/addloan.component */ "./src/app/addloan/addloan.component.ts");
/* harmony import */ var _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createpack/createpack.component */ "./src/app/createpack/createpack.component.ts");
/* harmony import */ var _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../updateloan/updateloan.component */ "./src/app/updateloan/updateloan.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _spv_spv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../spv/spv.component */ "./src/app/spv/spv.component.ts");
/* harmony import */ var _investor_investor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../investor/investor.component */ "./src/app/investor/investor.component.ts");
/* harmony import */ var _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../addinvestor/addinvestor.component */ "./src/app/addinvestor/addinvestor.component.ts");
/* harmony import */ var _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../addspv/addspv.component */ "./src/app/addspv/addspv.component.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var _guard_spv_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guard/spv.guard */ "./src/app/guard/spv.guard.ts");
/* harmony import */ var _guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../guard/issuer.guard */ "./src/app/guard/issuer.guard.ts");
/* harmony import */ var _guard_investor_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../guard/investor.guard */ "./src/app/guard/investor.guard.ts");
















var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'addbank',
        component: _addbank_addbank_component__WEBPACK_IMPORTED_MODULE_2__["AddbankComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__["IssuerGuard"]]
    },
    {
        path: 'addloan',
        component: _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_4__["AddloanComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__["IssuerGuard"]]
    },
    {
        path: 'addborrower',
        component: _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_3__["AddborrowerComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__["IssuerGuard"]]
    },
    {
        path: 'createpack',
        component: _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_5__["CreatepackComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__["IssuerGuard"]]
    },
    {
        path: 'updateloan',
        component: _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_6__["UpdateloanComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__["IssuerGuard"]]
    },
    {
        path: 'withdraw',
        component: _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_14__["IssuerGuard"]]
    },
    {
        path: 'spv',
        component: _spv_spv_component__WEBPACK_IMPORTED_MODULE_8__["SpvComponent"],
        canActivate: [_guard_spv_guard__WEBPACK_IMPORTED_MODULE_13__["SpvGuard"]]
    },
    {
        path: 'investor',
        component: _investor_investor_component__WEBPACK_IMPORTED_MODULE_9__["InvestorComponent"],
        canActivate: [_guard_investor_guard__WEBPACK_IMPORTED_MODULE_15__["InvestorGuard"]]
    },
    {
        path: 'addspv',
        component: _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_11__["AddspvComponent"]
    },
    {
        path: 'addinvestor',
        component: _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_10__["AddinvestorComponent"]
    },
    {
        path: 'metamask',
        component: _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_12__["MetamaskErrorComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.component */ "./src/app/app-routing/app-routing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _addbank_addbank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addbank/addbank.component */ "./src/app/addbank/addbank.component.ts");
/* harmony import */ var _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addborrower/addborrower.component */ "./src/app/addborrower/addborrower.component.ts");
/* harmony import */ var _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addloan/addloan.component */ "./src/app/addloan/addloan.component.ts");
/* harmony import */ var _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createpack/createpack.component */ "./src/app/createpack/createpack.component.ts");
/* harmony import */ var _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./updateloan/updateloan.component */ "./src/app/updateloan/updateloan.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _spv_spv_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spv/spv.component */ "./src/app/spv/spv.component.ts");
/* harmony import */ var _investor_investor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./investor/investor.component */ "./src/app/investor/investor.component.ts");
/* harmony import */ var _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./addinvestor/addinvestor.component */ "./src/app/addinvestor/addinvestor.component.ts");
/* harmony import */ var _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./addspv/addspv.component */ "./src/app/addspv/addspv.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _addbank_addbank_component__WEBPACK_IMPORTED_MODULE_9__["AddbankComponent"],
                _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_10__["AddborrowerComponent"],
                _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_11__["AddloanComponent"],
                _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_12__["CreatepackComponent"],
                _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_13__["UpdateloanComponent"],
                _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"],
                _spv_spv_component__WEBPACK_IMPORTED_MODULE_15__["SpvComponent"],
                _investor_investor_component__WEBPACK_IMPORTED_MODULE_16__["InvestorComponent"],
                _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_17__["AddinvestorComponent"],
                _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_18__["AddspvComponent"],
                _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_20__["MetamaskErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_component__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/createpack/createpack.component.html":
/*!******************************************************!*\
  !*** ./src/app/createpack/createpack.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n                <blockquote class=\"blockquote bq-primary\">\r\n                        <p class=\"bq-title\">Note:</p>\r\n                        <p>You can enter multiple loan Id's &nbsp;<strong>(ex:- 1,2,3)</strong></p>\r\n                    </blockquote><br>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-3\">\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-1\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-11\">\r\n            <h3><strong>Create Pool:</strong></h3><br>           \r\n            <!-- <div class=\"alert alert-info\">\r\n                <strong>Info!</strong> </strong>.\r\n            </div><br>     -->\r\n                    <div class=\"col-sm-12\">\r\n                <div class=\"group\">      \r\n                        <input type=\"text\" id=\"id1\" #loanid required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter Loan id</label>\r\n                    </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"group\">      \r\n                        <input type=\"text\" id=\"id2\"  #totvalue required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter pool Amount(in ether)</label>\r\n                    </div>\r\n                </div>\r\n            <div class=\"col-sm-12\">\r\n                <br>\r\n                <button class=\"btn btn-primary\" (click)=\"createpool(loanid.value,totvalue.value)\">Create</button>\r\n                </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n           \r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"row\">\r\n               \r\n                <div class=\"col-sm-12\">\r\n                        <h4><b>Loan Details</b></h4><br>\r\n                        <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;\">\r\n                            <thead class=\"tablecolor\">\r\n                                <tr>\r\n                                <th>Loan ID</th>\r\n                                <th> Borrower ID</th>\r\n                                <th>Borrower Loan Amount(Rs)</th>\r\n                                <th> Borrower Interest Rate</th>\r\n                                <th>Loan Duration</th>\r\n                                <th>Asset ID</th>\r\n                                <th>Asset Details</th>\r\n                                <th>Asset Amount (Rs)</th>\r\n                                <th>Borrower Paid</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody id=\"loantable\">\r\n                                <tr *ngFor=\"let issuer of loan_details\">\r\n                                    <td>{{ issuer.loanid }}</td>\r\n                                    <td>{{ issuer.borrowerid }}</td>\r\n                                    <td >{{ issuer. borrowerloanamt}}</td>\r\n                                    <td>{{ issuer.borrowerintrest }}</td>\r\n                                    <td>{{ issuer.loanduration }}</td>\r\n                                    <td>{{ issuer.assetid }}</td>\r\n                                    <td>{{ issuer.assetdetails }}</td>\r\n                                    <td >{{ issuer.assetamt }}</td>\r\n                                    <td >{{ issuer.borrowerpaid }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                </div>\r\n            </div>\r\n           \r\n            \r\n        </div>\r\n\r\n  \r\n      \r\n    <div class=\"col-sm-3\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-3\"></div>\r\n                <div class=\"col-sm-9\">\r\n                        <h4><b>Pool Details</b></h4><br>\r\n                        <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;\">\r\n                            <thead class=\"tablecolor\">\r\n                              <tr>\r\n                                <th>Pool ID</th>\r\n                                <th>Total Value</th>\r\n                                <th>Status</th>\r\n                                <th>Loan Ids</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody id=\"pooltable\">\r\n                                <tr *ngFor=\"let pool of pool_details\" [ngSwitch]=\"pool.status\">\r\n                                    <td>{{ pool.id }}</td>\r\n                                    <td>{{ pool.value }}</td>\r\n                                    <td *ngSwitchCase='true'>sold</td>\r\n                                    <td *ngSwitchCase='false'>Available</td>\r\n                                    <td>{{pool.loanids}}</td>\r\n                                 </tr>\r\n                             </tbody>\r\n                          </table>\r\n                        \r\n                </div>\r\n               \r\n                </div>  \r\n        </div>\r\n      \r\n     \r\n     \r\n    </div>\r\n       \r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/createpack/createpack.component.scss":
/*!******************************************************!*\
  !*** ./src/app/createpack/createpack.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/createpack/createpack.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createpack/createpack.component.ts ***!
  \****************************************************/
/*! exports provided: CreatepackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepackComponent", function() { return CreatepackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatepackComponent = /** @class */ (function () {
    function CreatepackComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        this.pool_details = [];
        this.array = [];
        this.all_packed_loans = [];
        this.duplicate = [];
        this.error_input = [];
        this.multiple_times = [];
    }
    CreatepackComponent.prototype.createpool = function (loanid, totvalue) {
        var _this = this;
        if (loanid.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter Loan Id");
            return;
        }
        if (totvalue.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Enter pool amount");
            return;
        }
        this.spinner.show();
        this.duplicate.length = 0;
        this.error_input.length = 0;
        var amount = totvalue * 1000000000000000000;
        var ids = [];
        var tmp;
        tmp = loanid.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            ids.push(parseInt(tmp[i]));
        }
        this.ls.loan_ids().then(function (loan_ids) {
            // this.ls.getAccount().then(address=>{
            ids.forEach(function (id) {
                if (id < 1 || id > loan_ids.length) {
                    _this.error_input.push(id);
                }
                _this.all_packed_loans.forEach(function (loan_id) {
                    if (loan_id == id) {
                        _this.duplicate.push(id);
                    }
                });
            });
            if (_this.error_input.length >= 1) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERROR INPUT: " + _this.error_input + "  These Ids are not exist");
            }
            else if (_this.duplicate.length >= 1) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Loan Ids " + _this.duplicate + " were Already Packed !");
            }
            else {
                // var key="a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4";
                _this.ls.get_cookie().then(function (key) {
                    _this.ls.create_pool(ids, amount, key).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.pools();
                            _this.packed_loans();
                            _this.table();
                            _this.ls.pool_ids().then(function (pool_ids) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Pool Successfully Created and Generated Pool Id Is  :" + pool_ids.length);
                            });
                        }
                    });
                });
            }
        });
    };
    CreatepackComponent.prototype.packed_loans = function () {
        var _this = this;
        this.all_packed_loans.length = 0;
        this.ls.pool_ids().then(function (pool_ids) {
            pool_ids.forEach(function (pool_id) {
                _this.ls.show_loanids_of_pool(pool_id).then(function (loan_ids) {
                    loan_ids.forEach(function (loan_id) {
                        _this.all_packed_loans.push(loan_id);
                    });
                });
            });
        });
    };
    CreatepackComponent.prototype.pools = function () {
        var _this = this;
        this.pool_details.length = 0;
        this.ls.pool_ids().then(function (ids) {
            ids.forEach(function (element) {
                var pool_obj = {};
                _this.ls.pool_details(element).then(function (data) {
                    _this.ls.show_loanids_of_pool(element).then(function (loan_ids) {
                        pool_obj['id'] = element;
                        pool_obj['value'] = data[0] / 1000000000000000000;
                        pool_obj['status'] = data[1];
                        pool_obj["loanids"] = loan_ids;
                        _this.pool_details.push(pool_obj);
                    });
                });
            });
        });
    };
    CreatepackComponent.prototype.table = function () {
        var _this = this;
        this.loan_details.length = 0;
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[1];
                    obj['borrowerintrest'] = result[2];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    _this.loan_details.push(obj);
                });
            });
        });
    };
    CreatepackComponent.prototype.ngOnInit = function () {
        this.table();
        this.pools();
        this.packed_loans();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    CreatepackComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    CreatepackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createpack',
            template: __webpack_require__(/*! ./createpack.component.html */ "./src/app/createpack/createpack.component.html"),
            styles: [__webpack_require__(/*! ./createpack.component.scss */ "./src/app/createpack/createpack.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], CreatepackComponent);
    return CreatepackComponent;
}());



/***/ }),

/***/ "./src/app/guard/investor.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/investor.guard.ts ***!
  \*****************************************/
/*! exports provided: InvestorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorGuard", function() { return InvestorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvestorGuard = /** @class */ (function () {
    function InvestorGuard(ls, route) {
        var _this = this;
        this.ls = ls;
        this.route = route;
        ls.getAccount().then(function (acc) { return _this.address = acc; });
    }
    InvestorGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.ls.check_investor().then(function (issuer) {
            if (issuer == true) {
                return true;
            }
            else {
                _this.route.navigate(["addinvestor"]);
                return false;
            }
        });
    };
    InvestorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InvestorGuard);
    return InvestorGuard;
}());



/***/ }),

/***/ "./src/app/guard/issuer.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guard/issuer.guard.ts ***!
  \***************************************/
/*! exports provided: IssuerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuerGuard", function() { return IssuerGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuerGuard = /** @class */ (function () {
    function IssuerGuard(ls, route) {
        var _this = this;
        this.ls = ls;
        this.route = route;
        ls.getAccount().then(function (acc) { return _this.address = acc; });
    }
    IssuerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.ls.check_issuer().then(function (issuer) {
            if (issuer == true) {
                return true;
            }
            else {
                _this.route.navigate(["home"]);
                return false;
            }
        });
    };
    IssuerGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IssuerGuard);
    return IssuerGuard;
}());



/***/ }),

/***/ "./src/app/guard/spv.guard.ts":
/*!************************************!*\
  !*** ./src/app/guard/spv.guard.ts ***!
  \************************************/
/*! exports provided: SpvGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvGuard", function() { return SpvGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpvGuard = /** @class */ (function () {
    function SpvGuard(ls, route) {
        this.ls = ls;
        this.route = route;
    }
    SpvGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.ls.check_spv().then(function (spv) {
            if (spv == true) {
                return true;
            }
            else {
                _this.route.navigate(["addspv"]);
                return false;
            }
        });
    };
    SpvGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpvGuard);
    return SpvGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark indigo\">\r\n       \r\n\r\n    <links>\r\n \r\n        <ul class=\" nav nav-tabs navbar-nav mr-auto \">\r\n              \r\n                <li class=\"nav-item \" *ngIf=\"!check_key\">\r\n                        <a class=\"nav-link waves-light\"  routerLink=\"/login\" mdbWavesEffect>LOGIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"caret\"></span></a>\r\n                    </li>\r\n\r\n                   \r\n                 \r\n\r\n            <li class=\"nav-item \" *ngIf=\"check_key\">\r\n                    \r\n                <a class=\"nav-link waves-light \" id=\"homeid\" routerLink=\"/home\" mdbWavesEffect>HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"caret\"></span></a>\r\n            </li>\r\n            \r\n              <!-- Dropdown -->\r\n              <li  *ngIf=\"check_key\" id=\"dropid\" class=\"nav-item dropdown\" dropdown >\r\n                <a  dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light \" role=\"tab\" mdbWavesEffect>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISSUER<span class=\"caret\"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\r\n                <div *dropdownMenu  class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">              \r\n                    <a class=\"dropdown-item waves-light  \" mdbWavesEffect href=\"#\" routerLink=\"/addbank\">Add Bank</a>\r\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" routerLink=\"/addborrower\">Add Borrower</a>\r\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" routerLink=\"/addloan\">Add Loan</a>\r\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" routerLink=\"/updateloan\">Update Loan</a>\r\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" routerLink=\"/createpack\">Create Pool</a>\r\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" routerLink=\"/withdraw\">Withdraw</a>                    \r\n                </div>\r\n            </li>\r\n\r\n            <li  *ngIf=\"check_key\" id=\"spvid\" class=\"nav-item \" role=\"tab\">\r\n                    <a class=\"nav-link waves-light \" data-toggle=\"tab\"   routerLink=\"/spv\" mdbWavesEffect>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"caret\"></span></a>\r\n                </li>\r\n                <li *ngIf=\"check_key\" id=\"investorid\" class=\"nav-item \" role=\"tab\">\r\n                        <a class=\"nav-link waves-light\"  data-toggle=\"tab\" routerLink=\"/investor\" mdbWavesEffect>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INVESTOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"caret\"></span></a>\r\n                    </li>\r\n\r\n                    <li  id=\"liid\" >\r\n                        <!-- <font color=\"white\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" class=\"form-control\" value=ETH:{{balance}} placeholder=\"Balance\"readonly/></font> -->\r\n                </li>\r\n\r\n        </ul>\r\n        <ul  class=\"nav navbar-nav navbar-right\">\r\n             \r\n               \r\n              \r\n\r\n            <li  *ngIf=\"check_key\" id=\"signout\" class=\"nav-item \">\r\n                <a class=\"nav-link waves-light\"  (click)=\"sign_out()\"  mdbWavesEffect>\r\n                    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                    SignOut<span class=\"caret\"></span></a>\r\n            </li>\r\n          </ul>\r\n\r\n    </links>\r\n\r\n\r\n</mdb-navbar>\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#liid {\n  color: white;\n  margin-top: 8px; }\n\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  /* background-color: #fff; */\n  border-color: #dee2e6 #dee2e6 #fff; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ls, cookie) {
        this.ls = ls;
        this.cookie = cookie;
        this.check_admin();
    }
    HeaderComponent.prototype.sign_out = function () {
        this.cookie.delete("privateKey");
    };
    HeaderComponent.prototype.acc_balance = function () {
        var _this = this;
        this.ls.getAccount().then(function (add) {
            _this.address = add;
            _this.ls.getUserBalance(add).then(function (balance) {
                _this.balance = balance;
                document.getElementById("liid").innerText = "Balance in Eth: " + balance.toString();
            });
        });
    };
    HeaderComponent.prototype.check_admin = function () {
        this.ls.check_issuer().then(function (issuer) {
            if (issuer == true) {
                document.getElementById("dropid").hidden = false;
            }
            else {
                document.getElementById("dropid").hidden = true;
            }
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var instance = this;
        instance.id1 = setInterval(function () {
            var _this = this;
            instance.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    document.getElementById("liid").innerText = "";
                    instance.check_key = check;
                    clearInterval(_this.interval);
                }
                else if (check == true) {
                    instance.check_key = check;
                    instance.acc_balance();
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <section class=\"view intro-2\">\r\n        <div class=\"full-bg-img mask rgba-stylish-strong\">\r\n            \r\n            <div style=\"height: 100vh\">\r\n                    <div class=\"flex-center flex-column\">\r\n                            <div class=\"white-text\">\r\n                      <h4 class=\"animated fadeIn mb-4 h1 display-4 wow\">Welcome to Loan Securitization</h4>\r\n                      <hr class=\"hr-light wow fadeInLeft\" data-wow-delay=\"0.3s\">\r\n                      <h4 class=\"animated fadeIn mb-4 h1 display-4 wow\">Your Account Address:</h4>\r\n                      <h3 class=\"animated fadeIn mb-4 h1 display-4 wow\" id=\"ptag\"></h3>\r\n                  \r\n                     \r\n                   \r\n                  </div>\r\n        </div>\r\n        </div>\r\n        </div>\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img%20(46).jpg\") no-repeat center center;\n  background-size: cover; }\n\n.view {\n  height: 94vh !important; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HeaderComponent } from '../header/header.component';

var HomeComponent = /** @class */ (function () {
    function HomeComponent(ls, router) {
        this.ls = ls;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == true) {
                    meta.ls.privatekey_by_address().then(function (senderaddress) {
                        document.getElementById("ptag").hidden = false;
                        document.getElementById("ptag").innerHTML = senderaddress["address"];
                        clearInterval(_this.interval);
                    });
                }
                else {
                    meta.router.navigate(["login"]);
                }
            });
        }), 200;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/investor/investor.component.html":
/*!**************************************************!*\
  !*** ./src/app/investor/investor.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n <div class=\"col-sm-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n            <h3><b>Purchase Pool</b></h3><br>\r\n            <div class=\"col-sm-12\">\r\n              \r\n           \r\n                    <div class=\"group\">      \r\n                        <input type=\"text\" id=\"id1\"  #poolid required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter pool Id</label>\r\n                      </div>\r\n                \r\n            </div>\r\n    \r\n            \r\n            <div class=\"col-sm-12\">\r\n               <br> \r\n                <button class=\"btn btn-primary\" (click)=\"investor_purchase_pool(poolid.value)\">Purchase</button>\r\n            </div>\r\n        </div>\r\n        </div>\r\n   \r\n </div>\r\n <div class=\"col-sm-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n\r\n            <h4><b>Purchased Pools</b></h4><br>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:165px\">\r\n              <thead class=\"tablecolor\">\r\n                <tr>\r\n                  <th>Pool ID</th>\r\n                  <th>Pool Value</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"purchasedpools\">\r\n                <tr *ngFor=\"let pool of purchased_pools\">\r\n                  <td>{{ pool.poolid }}</td>\r\n                  <td>{{ pool.poolvalue }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n        </div>\r\n        </div>\r\n \r\n\r\n </div>\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n            <h4><b>Available Pools</b></h4><br>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:165px\">\r\n              <thead class=\"tablecolor\">\r\n                <tr>\r\n                  <th >Pool ID</th>\r\n                  <th>Pool Value</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let pool of available_pools\" >\r\n                  <td >{{ pool.poolid }}</td>\r\n                  <td>{{ pool.poolvalue }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        </div>\r\n   \r\n </div>\r\n\r\n <div class=\"col-sm-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n            <h4><b>Loans of Pool</b></h4><br>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:160px\">\r\n        <thead class=\"tablecolor\">\r\n          <tr><th>Pool Id</th><th>Loan Ids</th></tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor = \"let obj of loans_of_pool\">\r\n            <td>{{obj.poolid}}</td>\r\n            <td>{{obj.loanids}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n        </div>\r\n        </div>\r\n   \r\n\r\n </div>\r\n\r\n <div class=\"col-sm-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n            <h4 style=\"text-align:center\"><b>Amount Gained</b></h4><br>\r\n            <h1 style=\"text-align:center;color:green\">Rs.{{investor_gain_amount}}</h1>\r\n        </div>\r\n        </div>\r\n  \r\n\r\n\r\n </div>\r\n</div>\r\n \r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/investor/investor.component.scss":
/*!**************************************************!*\
  !*** ./src/app/investor/investor.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/investor/investor.component.ts":
/*!************************************************!*\
  !*** ./src/app/investor/investor.component.ts ***!
  \************************************************/
/*! exports provided: InvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorComponent", function() { return InvestorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvestorComponent = /** @class */ (function () {
    function InvestorComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.available_pools = [];
        this.purchased_pools = [];
        this.loans_of_pool = [];
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#investor").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#issuer").removeClass("active");
        this.investor_gain();
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    }
    InvestorComponent.prototype.investor_purchase_pool = function (poolid) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Please enter a Pool Id ");
            return;
        }
        // this.spinner.show()
        this.ls.pool_ids().then(function (pool_ids) {
            if (pool_ids.length >= poolid && poolid >= 1) {
                _this.ls.show_loanids_of_pool(poolid).then(function (loan_ids) {
                    loan_ids.forEach(function (id) {
                        _this.ls.loan_status(id).then(function (state) {
                            if (state[0] == 0 && state[1] == 0) {
                                //pool not sold to spv
                                document.getElementById('id1').value = '';
                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Pool " + poolid + " Currently not Available");
                            }
                            else if (state[0] != 0 && state[1] != 0) {
                                //pool aready sold to investor
                                // swal(state)
                                document.getElementById('id1').value = '';
                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Pool " + poolid + " Already Sold !");
                            }
                            else if (state[0] != 0 && state[1] == 0) {
                                //pool available
                                _this.ls.pool_details(poolid).then(function (amo_obj) {
                                    _this.spinner.show();
                                    _this.ls.get_cookie().then(function (key) {
                                        _this.ls.investor_purchase(poolid, key, amo_obj[0]).then(function (result) {
                                            _this.spinner.hide();
                                            if (result == 0) {
                                                document.getElementById('id1').value = '';
                                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("You Rejected this Transaction");
                                            }
                                            else if (result == 2) {
                                                document.getElementById('id1').value = '';
                                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Transaction Failed !");
                                            }
                                            else if (result == 1) {
                                                document.getElementById('id1').value = '';
                                                _this.available_pools_table();
                                                _this.purchased_pools_table();
                                                _this.spinner.hide();
                                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("You Purchased Pool " + poolid);
                                            }
                                        });
                                    });
                                });
                            }
                        }); //
                    });
                });
            }
            else {
                document.getElementById('id1').value = '';
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("You Entered an Invalid Pool Id");
                _this.spinner.hide();
            }
        });
    };
    InvestorComponent.prototype.investor_gain = function () {
        var _this = this;
        this.ls.privatekey_by_address().then(function (address) {
            _this.ls.investor_id_get(address["address"]).then(function (inv_id) {
                _this.ls.investor_details(inv_id).then(function (i_d) {
                    _this.investor_gain_amount = i_d[1];
                });
            });
        });
    };
    InvestorComponent.prototype.available_pools_table = function () {
        var _this = this;
        this.available_pools.length = 0;
        this.ls.privatekey_by_address().then(function (address) {
            _this.ls.investor_id_get(address["address"]).then(function (inv_id) {
                _this.ls.spv_ids().then(function (spv_ids) {
                    spv_ids.forEach(function (spv_id) {
                        _this.ls.pool_ids().then(function (pool_ids) {
                            pool_ids.forEach(function (pool_id) {
                                _this.ls.is_owned_spv(spv_id, pool_id).then(function (result) {
                                    _this.ls.pool_details(pool_id).then(function (result2) {
                                        if (result == true) {
                                            var obj = {};
                                            obj['poolid'] = pool_id;
                                            obj['poolvalue'] = result2[0] / 1000000000000000000;
                                            _this.available_pools.push(obj);
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    InvestorComponent.prototype.purchased_pools_table = function () {
        var _this = this;
        this.purchased_pools.length = 0;
        this.ls.privatekey_by_address().then(function (address) {
            _this.ls.investor_id_get(address["address"]).then(function (inv_id) {
                _this.ls.pool_ids().then(function (pool_ids) {
                    pool_ids.forEach(function (pool_id) {
                        _this.ls.is_owned_investor(inv_id, pool_id).then(function (result) {
                            if (result == true) {
                                _this.ls.pool_details(pool_id).then(function (p_d) {
                                    var obj2 = {};
                                    obj2['poolid'] = pool_id;
                                    obj2['poolvalue'] = p_d[0] / 1000000000000000000;
                                    _this.purchased_pools.push(obj2);
                                });
                            }
                        });
                    });
                });
            });
        });
    };
    InvestorComponent.prototype.loans_of_pools = function () {
        var _this = this;
        this.loans_of_pool.length = 0;
        this.ls.pool_ids().then(function (pool_ids) {
            pool_ids.forEach(function (pool_id) {
                var obj = {};
                obj["poolid"] = pool_id;
                _this.ls.show_loanids_of_pool(pool_id).then(function (loan_ids) {
                    obj["loanids"] = loan_ids;
                    _this.loans_of_pool.push(obj);
                });
            });
        });
    };
    InvestorComponent.prototype.ngOnInit = function () {
        this.available_pools_table();
        this.investor_gain();
        this.loans_of_pools();
        this.purchased_pools_table();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    InvestorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    InvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investor',
            template: __webpack_require__(/*! ./investor.component.html */ "./src/app/investor/investor.component.html"),
            styles: [__webpack_require__(/*! ./investor.component.scss */ "./src/app/investor/investor.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_3__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], InvestorComponent);
    return InvestorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html>\n  <head>\n   <script src=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"></script>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n  \n  </head>\n  <body>  \n\n  <!-- <div class=\"container\">     \n    <div class=\"row\">\n      <div class=\"col-sm-3\"></div>\n  \n      <div class=\"col-sm-6\" id=\"div\">\n        \n       \n        </div>\n      <div class=\"col-sm-3\">\n          \n      </div>\n    </div>  \n  </div> -->\n  <section class=\"view intro-2\">\n    <div class=\"full-bg-img mask rgba-stylish-strong\">\n        <div class=\"container flex-center\">\n            <div class=\"d-flex align-items-center w-100\">\n                <div class=\"row flex-center pt-5 mt-3 w-100\">\n                    \n\n                    <div class=\"col-md-6 col-xl-5 offset-xl-1\">\n                        <!--Form-->\n                        <div class=\"jumbotron\"  style=\"background-image:linear-gradient(45deg, rgb(7, 3, 218) 10%, rgba(59, 56, 246, 0.712) 90%);\">\n                            <h5 style=\"color: wheat\"><strong>LOGIN</strong></h5>\n                              <hr style=\"border-color: wheat\"><br>\n                          <div  >\n                              <h5 style=\"color: wheat\"><strong>Enter Private Key</strong></h5>\n                              <br>\n                              <input type=\"text\" placeholder=\"Enter your private key\" class=\"form-control\" #privatekey >\n                              <br><br> \n                              <div style=\"text-align:center\">\n                                  <input type=\"button\" style=\"color:black\" class=\"btn\"  value=\"Sign in\" (click)=\"prikey(privatekey.value)\">\n                              </div> \n                          \n                        \n                            </div>\n                          </div>\n                        <!--/.Form-->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n  </body>\n  </html>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img%20(46).jpg\") no-repeat center center;\n  background-size: cover; }\n\n.view {\n  height: 94.1vh !important; }\n\n.top-nav-collapse {\n  background-color: #ff8a65 !important; }\n\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important; }\n\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #ff8a65 !important; } }\n\n.md-form .prefix {\n  font-size: 1.5rem;\n  margin-top: 1rem; }\n\nh6 {\n  line-height: 1.7; }\n\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 1150px; } }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(ls, router) {
        this.ls = ls;
        this.router = router;
    }
    LoginComponent.prototype.prikey = function (privatekey) {
        var meta = this;
        this.ls.set_cookie(privatekey);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
                else {
                    meta.router.navigate(["home"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\t<head>\r\n\t\t<title>Ethereum Account Connectivity Error Page</title>\r\n\t</head>\r\n\t<body style=\"margin:75px  700px\"> \r\n\t\t <img src=\"../assets/metamask.png\"/> \r\n\r\n\t\t\t<p>\r\n\t\t\t\t<br>There was an error while fetching your account.\r\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\r\n\r\n\t\t\t\t<br>Tips:\r\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\r\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \r\n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\r\n\t\t\t</p>\t\t\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.ts ***!
  \************************************************************/
/*! exports provided: MetamaskErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskErrorComponent", function() { return MetamaskErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetamaskErrorComponent = /** @class */ (function () {
    function MetamaskErrorComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    MetamaskErrorComponent.prototype.ngOnInit = function () {
        var meta = this;
        // this.id1 = setInterval(function() {
        //   if (typeof window.web3 !== 'undefined') {
        //     meta._web3 = new Web3(window.web3.currentProvider);
        //     if (meta._web3.eth.accounts[0] !== undefined) {
        //       meta.router.navigate(['home']);
        //     }
        //   }
        // }, 200);
    };
    MetamaskErrorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask-error',
            template: __webpack_require__(/*! ./metamask-error.component.html */ "./src/app/metamask-error/metamask-error.component.html"),
            styles: [__webpack_require__(/*! ./metamask-error.component.scss */ "./src/app/metamask-error/metamask-error.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MetamaskErrorComponent);
    return MetamaskErrorComponent;
}());



/***/ }),

/***/ "./src/app/spv/spv.component.html":
/*!****************************************!*\
  !*** ./src/app/spv/spv.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"tab-content\">\r\n\r\n<div class=\"tab-pane fade in show active\" role=\"tabpanel\">\r\n<!-- <div class=\"container-fluid tab-content\"> -->\r\n  <div class=\"row \">\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-10\">\r\n          <h3><b>Purchase Pools</b></h3><br>\r\n          <div class=\"text-input\">\r\n                <div class=\"group\">      \r\n                    <input type=\"text\" id=\"id1\"  #poolid required>\r\n                    <span class=\"highlight\"></span>\r\n                    <span class=\"bar\"></span>\r\n                    <label > Enter Pool ID</label>\r\n                  </div>\r\n              </div>\r\n         \r\n            \r\n            <div class=\"col-sm-6\">\r\n              <br>\r\n                <button class=\"btn btn-primary\" (click)=\"purchasepool(poolid.value)\">Purchase</button>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n \r\n\r\n<div class=\"col-sm-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n            <h4><b>Purchased Pools</b></h4><br>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:165px\">\r\n                <thead class=\"tablecolor\">\r\n                  <tr>\r\n                    <th>Pool ID</th>\r\n                    <th>Pool Value</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"purchasedpools\">\r\n                    <tr *ngFor=\"let pool of purchased_pools\">\r\n                        <td>{{ pool.id }}</td>\r\n                        <td>{{ pool.value }}</td>\r\n                     </tr>\r\n                 </tbody>\r\n              </table>  \r\n        </div>\r\n      </div>\r\n    \r\n</div>\r\n\r\n\r\n  <div class=\"col-sm-2\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-2\"></div>\r\n          <div class=\"col-sm-10\">\r\n              <h4><b>Available Pools</b></h4><br>\r\n              <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:165px\">\r\n                 <thead class=\"tablecolor\">\r\n                   <tr>\r\n                     <th>Pool ID</th>\r\n                     <th>Pool Value</th>                \r\n                   </tr>\r\n                 </thead>\r\n                 <tbody id=\"availablepools\">\r\n                     <tr *ngFor=\"let pool of available_pools\" [ngSwitch]=\"pool.status\">\r\n                         <td>{{ pool.id }}</td>\r\n                         <td>{{ pool.value }}</td>\r\n                         <td *ngSwitchCase='false'>Unsold</td>  \r\n                      </tr>\r\n                  </tbody>\r\n               </table>\r\n          </div>\r\n        </div>\r\n          \r\n  </div>\r\n\r\n  \r\n  <div class=\"col-sm-2\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-2\"></div>\r\n          <div class=\"col-sm-10\">\r\n              <h4><b>Loans of Pool</b></h4><br>\r\n              <table class=\"table\" style=\"overflow-y:auto;display:block;height:250px;width:165px\">\r\n          <thead class=\"tablecolor\">\r\n            <tr><th>Pool Id</th><th>Loan Ids</th></tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor = \"let obj of loans_of_pool\">\r\n              <td>{{obj.poolid}}</td>\r\n              <td>{{obj.loanids}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n          </div>\r\n        </div>\r\n      \r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-10\">\r\n            <h4 style=\"text-align:center\"><b>Amount Gained</b></h4><br>\r\n        <h1 style=\"text-align:center;color:green\">Rs. {{spv_gain_amount}}</h1>\r\n        </div>\r\n      </div>\r\n      \r\n      </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/spv/spv.component.scss":
/*!****************************************!*\
  !*** ./src/app/spv/spv.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/spv/spv.component.ts":
/*!**************************************!*\
  !*** ./src/app/spv/spv.component.ts ***!
  \**************************************/
/*! exports provided: SpvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvComponent", function() { return SpvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpvComponent = /** @class */ (function () {
    function SpvComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.available_pools = [];
        this.purchased_pools = [];
        this.loans_of_pool = [];
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#spv").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#issuer").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#investor").removeClass("active");
    }
    SpvComponent.prototype.spv_gain = function () {
        var _this = this;
        this.ls.privatekey_by_address().then(function (address) {
            _this.ls.spv_id_get(address["address"]).then(function (spv_id) {
                _this.ls.spv_details(spv_id).then(function (s_d) {
                    _this.spv_gain_amount = s_d[1];
                });
            });
        });
    };
    SpvComponent.prototype.purchasepool = function (poolid) {
        var _this = this;
        if (poolid.trim() == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please enter a Pool Id ");
            return;
        }
        console.log("1");
        this.ls.pool_ids().then(function (pool_ids) {
            if (pool_ids.length >= poolid && poolid >= 1) {
                console.log("2");
                _this.ls.pool_details(poolid).then(function (data) {
                    _this.spinner.show();
                    if (data[1] == false) {
                        _this.ls.get_cookie().then(function (key) {
                            console.log(key);
                            _this.ls.spv_buy_pool(poolid, data[0], key).then(function (result) {
                                _this.spinner.hide();
                                if (result == 0) {
                                    document.getElementById('id1').value = '';
                                    _this.spinner.hide();
                                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction");
                                }
                                else if (result == 2) {
                                    document.getElementById('id1').value = '';
                                    _this.spinner.hide();
                                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction Failed !");
                                }
                                else if (result == 1) {
                                    document.getElementById('id1').value = '';
                                    _this.purchased();
                                    _this.available();
                                    _this.spinner.hide();
                                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Bought the Pool " + poolid);
                                }
                            });
                        });
                    }
                    else {
                        document.getElementById('id1').value = '';
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("pool " + poolid + " already sold");
                        _this.spinner.hide();
                    }
                });
            }
            else {
                document.getElementById('id1').value = '';
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You had Entered an Invalid Pool Id");
                _this.spinner.hide();
            }
        });
    };
    SpvComponent.prototype.purchased = function () {
        var _this = this;
        this.purchased_pools.length = 0;
        this.ls.privatekey_by_address().then(function (address) {
            _this.ls.spv_id_get(address["address"]).then(function (spvid) {
                if (spvid > 0) {
                    _this.ls.pool_ids().then(function (p_ids) {
                        p_ids.forEach(function (index) {
                            _this.ls.is_owned_spv(spvid, index).then(function (status) {
                                if (status == true) {
                                    _this.ls.pool_details(index).then(function (result) {
                                        var obj = {};
                                        obj['id'] = index;
                                        obj['value'] = result[0] / 1000000000000000000;
                                        _this.purchased_pools.push(obj);
                                    });
                                }
                            });
                        });
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Still not purchased");
                }
            });
        });
    };
    SpvComponent.prototype.available = function () {
        var _this = this;
        this.available_pools.length = 0;
        this.ls.pool_ids().then(function (ids) {
            ids.forEach(function (element) {
                var pool_obj = {};
                _this.ls.pool_details(element).then(function (data) {
                    if (data[1] == false) {
                        pool_obj['id'] = element;
                        pool_obj['value'] = data[0] / 1000000000000000000;
                        _this.available_pools.push(pool_obj);
                    }
                });
            });
        });
    };
    SpvComponent.prototype.loans_of_pools = function () {
        var _this = this;
        this.loans_of_pool.length = 0;
        this.ls.pool_ids().then(function (pool_ids) {
            pool_ids.forEach(function (pool_id) {
                var obj = {};
                obj["poolid"] = pool_id;
                _this.ls.show_loanids_of_pool(pool_id).then(function (loan_ids) {
                    obj["loanids"] = loan_ids;
                    _this.loans_of_pool.push(obj);
                });
            });
        });
    };
    SpvComponent.prototype.ngOnInit = function () {
        this.purchased();
        this.available();
        this.spv_gain();
        this.loans_of_pools();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    SpvComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    SpvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spv',
            template: __webpack_require__(/*! ./spv.component.html */ "./src/app/spv/spv.component.html"),
            styles: [__webpack_require__(/*! ./spv.component.scss */ "./src/app/spv/spv.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], SpvComponent);
    return SpvComponent;
}());



/***/ }),

/***/ "./src/app/updateloan/updateloan.component.html":
/*!******************************************************!*\
  !*** ./src/app/updateloan/updateloan.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-11\">\r\n                <h3><strong>Update Loan Details</strong></h3><br>\r\n                <div class=\"col-sm-12\"> \r\n                  <div class=\"group\">      \r\n                      <input type=\"text\" id=\"id1\"  #loanid required>\r\n                      <span class=\"highlight\"></span>\r\n                      <span class=\"bar\"></span>\r\n                      <label >Enter Loan Id</label>\r\n                    </div>\r\n                </div>  \r\n                <div class=\"col-sm-12\">\r\n      \r\n                    <div class=\"group\">      \r\n                        <input type=\"text\" id=\"id2\"  #loanvalue required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter amount</label>\r\n                      </div>\r\n                  </div>\r\n                <div class=\"col-sm-12\">\r\n                  <br>\r\n                    <button class=\"btn btn-primary\" (click)=\"updateloan(loanid.value,loanvalue.value)\">Update</button>\r\n                  </div>  \r\n            </div>\r\n        </div>\r\n       \r\n      \r\n    </div>\r\n\r\n    <div class=\"col-sm-9\">\r\n      <div class=\"row\">\r\n          <!-- <div class=\"col-sm-1\"></div> -->\r\n          <div class=\"col-sm-12\">\r\n              <h4><b>Loan Details</b></h4><br>\r\n              <table class=\"table\" style=\"overflow-y:auto;display:block;height:280px;width:1000px\">\r\n                <thead class=\"tablecolor\">\r\n                    <tr>\r\n                      <th>Loan ID</th>\r\n                      <th> Borrower ID</th>\r\n                      <th>Borrower Loan Amount(Rs)</th>\r\n                      <th> Borrower Interest Rate</th>\r\n                      <th>Loan Duration</th>\r\n                      <th>Asset ID</th>\r\n                      <th>Asset Details</th>\r\n                      <th>Asset Amount (Rs)</th>\r\n                      <th>Borrower Paid</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody id=\"loantable\">\r\n                      <tr *ngFor=\"let issuer of updated_loan_details\">\r\n                          <td>{{ issuer.loanid }}</td>\r\n                          <td>{{ issuer.borrowerid }}</td>\r\n                          <td>{{ issuer. borrowerloanamt}}</td>\r\n                          <td>{{ issuer.borrowerintrest }}</td>\r\n                          <td>{{ issuer.loanduration }}</td>\r\n                          <td>{{ issuer.assetid }}</td>\r\n                          <td>{{ issuer.assetdetails }}</td>\r\n                          <td>{{ issuer.assetamt }}</td>\r\n                          <td>{{ issuer.borrowerpaid }}</td>\r\n                       </tr>\r\n                   </tbody>\r\n              </table>\r\n          </div>\r\n      </div>\r\n     \r\n       \r\n        \r\n      </div>\r\n     \r\n    </div>\r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Transaction in process...\"\r\ntype=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/updateloan/updateloan.component.scss":
/*!******************************************************!*\
  !*** ./src/app/updateloan/updateloan.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n.tablecolor {\n  background-color: #3f51b5;\n  color: white; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 0px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: darkgrey; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/updateloan/updateloan.component.ts":
/*!****************************************************!*\
  !*** ./src/app/updateloan/updateloan.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateloanComponent", function() { return UpdateloanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateloanComponent = /** @class */ (function () {
    function UpdateloanComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.updated_loan_details = [];
    }
    UpdateloanComponent.prototype.updateloan = function (text_loan_id, amount) {
        var _this = this;
        this.ls.get_cookie().then(function (key) {
            // console.log();
            if (text_loan_id.trim() == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter Loan Id");
                return;
            }
            if (amount.trim() == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Please Enter amount");
                return;
            }
            _this.spinner.show();
            // this.ls.getAccount().then(address =>{
            _this.ls.loan_status(text_loan_id).then(function (result) {
                if (result[0] == 0 && result[1] == 0) {
                    _this.ls.update_loan(text_loan_id, amount, 0, 0, 0, key).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.table();
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Loan Amount Updated");
                        }
                    });
                }
                else if (result[0] != 0 && result[1] == 0) {
                    _this.ls.update_loan(text_loan_id, amount, 1, result[0], 0, key).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.table();
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Loan Amount Updated");
                        }
                    });
                }
                else if (result[0] != 0 && result[1] != 0) {
                    _this.ls.update_loan(text_loan_id, amount, 2, result[0], result[1], key).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.table();
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Loan Amount Updated");
                        }
                    });
                }
            });
        });
    };
    UpdateloanComponent.prototype.table = function () {
        var _this = this;
        this.updated_loan_details = [];
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[1];
                    obj['borrowerintrest'] = result[2];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    _this.updated_loan_details.push(obj);
                });
            });
        });
    };
    UpdateloanComponent.prototype.ngOnInit = function () {
        this.table();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    UpdateloanComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    UpdateloanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updateloan',
            template: __webpack_require__(/*! ./updateloan.component.html */ "./src/app/updateloan/updateloan.component.html"),
            styles: [__webpack_require__(/*! ./updateloan.component.scss */ "./src/app/updateloan/updateloan.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], UpdateloanComponent);
    return UpdateloanComponent;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.component.html":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><div class=\"container\">\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n      \r\n      </div>\r\n    \r\n            <div class=\"col-sm-6\">\r\n              \r\n          <div class=\"row\">\r\n              <h3 style=\"text-align:center\"><b><strong>Contract Balance Details</strong></b></h3>\r\n             <div class=\"col-sm-12\">\r\n              \r\n                <br>&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;<h4 style=\"text-align:center\"><b>Balance in Ether</b></h4>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <h2 style=\"text-align:center;color:green\">{{balance}}</h2>\r\n            </div>\r\n            <br> <br>\r\n            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h4 style=\"text-align: center\"><b>Withdraw</b></h4><br>\r\n            <br>                      \r\n            <br> \r\n            <div class=\"group\">      \r\n                <input type=\"text\" id=\"id1\" #withdrawamount required>\r\n                <span class=\"highlight\"></span>\r\n                <span class=\"bar\"></span>\r\n                <label >Enter Amount to Withdraw</label>\r\n              </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                      <button  type=\"button\" class=\"btn btn-primary\" (click)=\"withdraw(withdrawamount.value)\">Withdraw</button>                          \r\n          \r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n\r\n                      </div>\r\n\r\n            </div>\r\n\r\n             \r\n           \r\n  </div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n      \r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n  <ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Transaction in process...\"\r\n  type=\"ball-scale-multiple\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.scss":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n"

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.ts":
/*!************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.ts ***!
  \************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(ls, router, spinner) {
        var _this = this;
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#issuer").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#investor").removeClass("active");
        this.borrower_id = '';
        this.bank_id = '';
        this.ls.contract_balance().then(function (result) { return _this.balance = result / 1000000000000000000; });
    }
    WithdrawComponent.prototype.withdraw = function (amount) {
        //  console.log("withdraw");
        var _this = this;
        if (amount.trim() == '' || amount <= 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Enter a valid amount");
            return;
        }
        this.ls.contract_balance().then(function (result) {
            if (result < amount * 1000000000000000000) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Can withdraw upto " + result / 1000000000000000000);
                document.getElementById('id1').value = '';
                // // /1000000000000000000
                return;
            }
            _this.spinner.show();
            _this.ls.get_cookie().then(function (key) {
                _this.ls.issuer_withdraw(amount * 1000000000000000000, key).then(function (res) {
                    document.getElementById('id1').value = '';
                    _this.spinner.hide();
                    if (res == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected the Transaction");
                    }
                    else if (res == 2) {
                        document.getElementById('id1').value = '';
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction Failed !");
                    }
                    else if (res == 1) {
                        document.getElementById('id1').value = '';
                        _this.fetch();
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Amount Credited to Your Wallet");
                    }
                });
            });
        });
    };
    WithdrawComponent.prototype.fetch = function () {
        var _this = this;
        this.ls.contract_balance().then(function (result) {
            _this.balance = result / 1000000000000000000;
        });
    };
    WithdrawComponent.prototype.ngOnInit = function () {
        this.fetch();
        var meta = this;
        meta.id1 = setInterval(function () {
            var _this = this;
            meta.ls.check_cookie("privateKey").then(function (check) {
                if (check == false) {
                    meta.router.navigate(["login"]);
                    clearInterval(_this.interval);
                }
            });
        }), 200;
    };
    WithdrawComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    WithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.scss */ "./src/app/withdraw/withdraw.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\loan2\Loan-Securitization-V2\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map