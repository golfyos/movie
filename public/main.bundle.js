webpackJsonp([1,4],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
    }
    DataService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined ||
            user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    DataService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    DataService.prototype.validatePassword = function (password, repassword) {
        if (password !== repassword) {
            return false;
        }
        else
            return true;
    };
    DataService.prototype.validateAdmin = function (user) {
        if (user.status === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    DataService.prototype.validateMovie = function (movie) {
        if (movie.mid == undefined || movie.name == undefined
            || movie.poster == undefined || movie.trailer == undefined
            || movie.description == undefined || movie.cast == undefined
            || movie.rd == undefined || movie.category == undefined
            || movie.rating == undefined) {
            return false;
        }
        else
            return true;
    };
    DataService.prototype.setCat = function (category) {
        this.category = category;
    };
    DataService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post("http://localhost:3000/user/register", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getAllMovie = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/data', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getCategoryMovie = function (category) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/data/category/' + category, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getMovieById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/data/movie/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    DataService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    DataService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])("id_token");
    };
    DataService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        // this.router.navigate(['/login']);
    };
    DataService.prototype.addReview = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/data/addreview', comment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.addMovie = function (movie) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/addmovie', movie, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteMovieById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/deletemovie', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.searchKeyWord = function (key) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/data/search', key, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.sortMovie = function (cate) {
        if (cate == "latest") {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return this.http.get('http://localhost:3000/data/sort/date', { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return this.http.get('http://localhost:3000/data/sort/rate', { headers: headers })
                .map(function (res) { return res.json(); });
        }
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DataService);
    return DataService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/data.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(506);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(690),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_navbar_navbar_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_home_home_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_register_register_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_category_category_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_movie_movie_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_addmovie_addmovie_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_deletemovie_deletemovie_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_userprofile_userprofile_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_movielist_movielist_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_search_search_component__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__component_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__component_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__["a" /* LoginComponent */] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_11__component_category_category_component__["a" /* CategoryComponent */] },
    { path: 'movie', component: __WEBPACK_IMPORTED_MODULE_12__component_movie_movie_component__["a" /* MovieComponent */] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_15__component_userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_12__component_movie_movie_component__["a" /* MovieComponent */] },
    { path: 'addmovie', component: __WEBPACK_IMPORTED_MODULE_13__component_addmovie_addmovie_component__["a" /* AddmovieComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'deletemovie', component: __WEBPACK_IMPORTED_MODULE_14__component_deletemovie_deletemovie_component__["a" /* DeletemovieComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'movielist/:category', component: __WEBPACK_IMPORTED_MODULE_16__component_movielist_movielist_component__["a" /* MovielistComponent */] },
    { path: 'search/:key', component: __WEBPACK_IMPORTED_MODULE_19__component_search_search_component__["a" /* SearchComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_movie_movie_component__["a" /* MovieComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_addmovie_addmovie_component__["a" /* AddmovieComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_deletemovie_deletemovie_component__["a" /* DeletemovieComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_userprofile_userprofile_component__["a" /* UserprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_movielist_movielist_component__["a" /* MovielistComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddmovieComponent = (function () {
    function AddmovieComponent(dataService, router, flashMessage) {
        this.dataService = dataService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AddmovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = _this.user;
            console.log(_this.user);
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.router.navigate(['/']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AddmovieComponent.prototype.onSubmitMovie = function () {
        var _this = this;
        var movie = {
            mid: this.id,
            name: this.name,
            poster: this.poster,
            trailer: this.trailer,
            description: this.description,
            cast: this.cast,
            rd: this.rd,
            category: this.category,
            rating: this.rating
        };
        if (!this.dataService.validateMovie(movie)) {
            this.flashMessage.show("Please fill in all required field", { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        this.dataService.addMovie(movie).subscribe(function (data) {
            _this.flashMessage.show(movie.name + " is added", { cssClass: 'alert-success', timeout: 2000 });
            _this.router.navigate(['/movie/' + movie.mid]);
        });
    };
    AddmovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addmovie',
            template: __webpack_require__(691),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AddmovieComponent);
    return AddmovieComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/addmovie.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryComponent = (function () {
    function CategoryComponent(dataService) {
        this.dataService = dataService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = _this.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(692),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/category.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletemovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeletemovieComponent = (function () {
    function DeletemovieComponent(dataService, router, flashMessage) {
        this.dataService = dataService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    DeletemovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = _this.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.router.navigate(['/']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DeletemovieComponent.prototype.setName = function () {
        var _this = this;
        this.dataService.getMovieById(this.mid).subscribe(function (data) {
            // console.log(data.success);
            if (data.success) {
                // console.log(data.data);
                _this.name = data.data.name;
            }
        });
    };
    DeletemovieComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        var id = {
            id: this.mid
        };
        this.dataService.deleteMovieById(id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    DeletemovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deletemovie',
            template: __webpack_require__(693),
            styles: [__webpack_require__(681)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], DeletemovieComponent);
    return DeletemovieComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/deletemovie.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = profile.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(694),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/home.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(dataService, router, flashMessage, location) {
        this.dataService = dataService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.location = location;
    }
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.dataService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.dataService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now Logged In', { cssClass: 'alert-success', timeout: 3000 });
                _this.location.back();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(695),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/login.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieComponent = (function () {
    function MovieComponent(route, dataService, router, sanitizer) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.fname = profile.user.firstname;
            _this.lname = profile.user.lastname;
            _this.dataService.user = _this.user;
            console.log(_this.user);
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.route.params.subscribe(function (params) {
            _this.mid = params["id"];
            // console.log(params["id"]);
        });
        this.dataService.getMovieById(this.mid).subscribe(function (dataJson) {
            if (dataJson.success) {
                _this.movieData = dataJson.data;
                var url = "https://www.youtube.com/embed/" + dataJson.data.trailer;
                _this.videoUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(url);
                console.log(_this.videoUrl);
            }
        });
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = profile.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    MovieComponent.prototype.onCommentSubmit = function () {
        var _this = this;
        var u = this.user;
        var d = {
            mid: this.mid,
            name: this.fname + "  " + this.lname,
            comment: this.comment
        };
        this.dataService.addReview(d).subscribe(function (resJson) {
            console.log(resJson.success);
            _this.dataService.getMovieById(_this.mid).subscribe(function (dataJson) {
                if (dataJson.success) {
                    _this.movieData = dataJson.data;
                    _this.comment = "";
                }
            });
        });
    };
    MovieComponent.prototype.changeUrl = function (trailer) {
        console.log(trailer);
        var url = "https://www.youtube.com/embed/" + trailer;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(this.videoUrl);
    };
    MovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(696),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _d) || Object])
    ], MovieComponent);
    return MovieComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/movie.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovielistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovielistComponent = (function () {
    function MovielistComponent(dataService, router, route, elementRef) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.elementRef = elementRef;
        this.list = "";
    }
    MovielistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = profile.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.route.params.subscribe(function (params) {
            _this.cate = params["category"];
        });
        if (this.cate == "all") {
            this.dataService.getAllMovie().subscribe(function (data) {
                if (data) {
                    _this.movie = data;
                    _this.count = Object.keys(_this.movie).length;
                }
            });
        }
        else if (this.cate == "latest" || this.cate == "trend") {
            this.dataService.sortMovie(this.cate).subscribe(function (data) {
                if (data) {
                    _this.movie = data.data;
                    _this.cate = _this.cate == "latest" ? "Latest" : "Trend";
                }
            });
        }
        else {
            this.dataService.category = this.cate;
            this.dataService.getCategoryMovie(this.cate).subscribe(function (data) {
                if (data) {
                    _this.movie = data.data;
                }
            });
        }
    };
    MovielistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-movielist',
            template: __webpack_require__(697),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object])
    ], MovielistComponent);
    return MovielistComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/movielist.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(dataService, router, flashMessage, location) {
        this.dataService = dataService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = profile.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.dataService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        // this.location.back();
        // this.router.navigate(['login']);
        window.location.reload();
        return false;
    };
    NavbarComponent.prototype.onSubmitSearch = function () {
        var temp = this.search.split(" ");
        var strJoin = temp.join("+");
        this.router.navigate(['search/' + encodeURI(strJoin)]);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(698),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === 'function' && _d) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(dataService, flashMessage, router) {
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
            repassword: this.repassword,
            status: 0
        };
        //Required Fields
        if (!this.dataService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        //Validate Email
        if (!this.dataService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid Email", { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        //Check password match
        if (!this.dataService.validatePassword(user.password, user.repassword)) {
            this.flashMessage.show("Your password does not match with the re-type password", { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        //Register User
        this.dataService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered!", { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong.", { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(699),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/register.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = profile.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.route.params.subscribe(function (params) {
            var temp = params["key"].split("+");
            var strJoin = temp.join(" ");
            _this.key = strJoin;
            var word = {
                key: _this.key
            };
            _this.dataService.searchKeyWord(word).subscribe(function (data) {
                if (data.success) {
                    _this.movie = data.data;
                    _this.result = data.data.length;
                }
            });
        });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(700),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/search.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = (function () {
    function UserprofileComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataService.user = _this.user;
            if (!_this.dataService.validateAdmin(_this.user)) {
                _this.dataService.grant = false;
            }
            else
                _this.dataService.grant = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UserprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(701),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserprofileComponent);
    return UserprofileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/userprofile.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/GOLF-PC/Desktop/movie/angular-src/src/environment.js.map

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "#add-mov{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 70px;\r\n}\r\n#intro-mov{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 25px;\r\n}\r\ninput[type=text],input[type=password],textarea{\r\n     font-family: 'Droid Sans',sans-serif;\r\n    font-size: 20px;\r\n    width : 100%;\r\n    padding : 12px 20px;\r\n    margin : 8px, 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n    color: black;\r\n}\r\n.add-form{\r\n    margin : 10%;\r\n     margin-top :1%;\r\n     margin-bottom: 0;\r\n}\r\n.row{\r\n    color: aliceblue;\r\n    font-family: 'Oswald', sans-serif;\r\n    width: 50%;\r\n    padding-bottom: 10px;\r\n}\r\n.btn-default{\r\n     margin : 5%;\r\n    padding: 10px 20px;\r\n    font-size: 25px;\r\n    border-radius: 10px;\r\n    width:10%;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bold;\r\n    background-color: gainsboro;\r\n    box-shadow: 0px 4px 4px 2px grey;\r\n}\r\n#cancel{\r\n    margin : 5%;\r\n    background-color: red;\r\n    border : none;\r\n    box-shadow: 0px 4px 4px 2px gray;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n}\r\n.foot{\r\n    padding-top : 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n    size: 100%;\r\n}\r\nlabel{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n}\r\n.header-txt{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 50px;\r\n    text-shadow: 1px 1px white;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "#image{\r\n  width : 300px;\r\n  height : 500px;\r\n  overflow: hidden;\r\n  margin : auto;\r\n  position: relative;\r\n}\r\n\r\n#image:hover{\r\n    opacity : 0.3;\r\n}\r\n\r\n.image {\r\n  opacity: 1;\r\n  display: block;\r\n  height: auto;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n#text-label{\r\n    background-color: gainsboro;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    margin-bottom: 10%;\r\n    /*height: 70px;*/\r\n}\r\n\r\n.c-row{\r\n     padding-bottom: 15px;\r\n    font-family: 'Oswald',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 50px;\r\n    margin-bottom: 5%;\r\n    text-shadow: 1px 1px white;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "input[type=text]{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 20px;\r\n    width : 75%;\r\n    padding : 12px 20px;\r\n    margin : 8px, 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border;\r\n    border-radius: 10px;\r\n    color: black;\r\n    margin-bottom: 1%;\r\n}\r\n.btn-default{\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    width:12%;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bold;\r\n    background-color: gainsboro;\r\n    box-shadow: 0px 4px 4px 2px grey;\r\n}\r\n#head{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 70px;\r\n    text-shadow: 1px 1px white;\r\n}\r\n.modal-title{\r\n    font-family :'Droid Sans',sans-serif;\r\n    font-size: 20px;\r\n    width : 75%;\r\n}\r\n#confirmBtn{\r\n    margin-top : 5%;\r\n    margin-right : 5%;\r\n    background-color:lawngreen;\r\n}\r\n#cancelBtn{\r\n    margin-top : 5%;\r\n    margin-right : 5%;\r\n    background-color:red;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "#greetingTop{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 70px;\r\n    margin-top : 1px;\r\n    margin-bottom : 3px;\r\n}\r\n#greetingTxt{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 25px;\r\n    margin-top : 3px;\r\n    margin-bottom : 3px;\r\n}\r\n#tour-heading{\r\n    font-family: 'Oswald',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 50px;\r\n    text-shadow : 1px 1px black;\r\n    margin-top : 3px;\r\n    margin-bottom : 3px;\r\n    color: floralwhite;\r\n}\r\n#image{\r\n  width : 200px;\r\n  height : 400px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n.image {\r\n  opacity: 1;\r\n  display: block;\r\n  height: auto;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n.middle {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%)\r\n}\r\n\r\n#category:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n#category:hover .middle {\r\n  opacity: 1;\r\n}\r\n#latest-movie:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n#latest-movie:hover .middle {\r\n  opacity: 1;\r\n}\r\n#trending:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n#trending:hover .middle {\r\n  opacity: 1;\r\n}\r\n\r\n.text {\r\n  font-family: 'Oswald', sans-serif;\r\n  font-weight: 800; \r\n  color: white;\r\n  font-size: 33px;\r\n  text-align: center;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n\r\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "input[type=text],input[type=password]{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 30px;\r\n    width : 100%;\r\n    padding : 12px 20px;\r\n    margin : 8px, 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n}\r\n\r\n.loginForm{\r\n     margin : 10%;\r\n     margin-top :0%;\r\n     margin-bottom: 0;\r\n}\r\n\r\n.roww{\r\n    font-family: 'Oswald', sans-serif;\r\n    width: 50%;\r\n    padding-bottom: 10px;\r\n}\r\n.foott{\r\n    padding-top : 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n    size: 100%;\r\n}\r\n.btn-default{\r\n    margin : 5%;\r\n    padding: 10px 20px;\r\n    font-size: 30px;\r\n    border-radius: 10px;\r\n    width:10%;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bold;\r\n    background-color: gainsboro;\r\n    box-shadow: 0px 4px 4px 2px grey;\r\n}\r\n#cancel{\r\n    margin : 5%;\r\n    background-color: red;\r\n    border : none;\r\n    box-shadow: 0px 4px 4px 2px gray;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n\r\n.login-header{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 60px;\r\n    text-shadow: 1px 1px white;\r\n}\r\n\r\nlabel{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n\r\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "#mov-head{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 70px;\r\n    margin-top : 1px;\r\n    margin-bottom : 3px;\r\n    text-shadow: 1px 1px black;\r\n    color:floralwhite;\r\n}\r\nimage{\r\n    width : 200px;\r\n    height : 400px;\r\n    margin : auto;\r\n    position: relative;\r\n}\r\n#rating-label{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 30px;\r\n    margin-top : 5%;\r\n    margin-bottom: 3%;\r\n    color: floralwhite;\r\n    text-shadow: 1px 1px black;\r\n}\r\n#vid{\r\n    margin-top: 5%;\r\n    margin-left: 3%;\r\n}\r\n#cat{\r\n    color: floralwhite;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    margin-bottom: 3%;\r\n    text-shadow: 1px 1px black;\r\n}\r\n#rel-date{\r\n    color: floralwhite;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    margin-bottom: 3%;\r\n    text-shadow: 1px 1px black;\r\n} \r\n#hdline,#scdline{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 40px;\r\n    color: floralwhite;\r\n    text-shadow: 1px 1px black;\r\n    display: inline;\r\n}\r\n#linetxt{\r\n    padding-left: 3em;\r\n    padding-right: 4em;\r\n    color: floralwhite;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    padding-right: 4em;\r\n} \r\ninput[type=text]{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 20px;\r\n    width : 75%;\r\n    padding : 12px 20px;\r\n    margin : 8px, 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border;\r\n    border-radius: 10px;\r\n    color: black;\r\n    margin-bottom: 1%;\r\n}\r\n.btn-default{\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    width:10%;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bold;\r\n    background-color: gainsboro;\r\n    box-shadow: 0px 4px 4px 2px grey;\r\n}\r\n.row{\r\n    margin-bottom: 3%;\r\n    margin-top: 2%;\r\n}\r\n#rev-name,#rev{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    width: 100%;\r\n}\r\n#revi{\r\n    width: 75%;\r\n    padding : 12px 20px;\r\n    margin : 8px, 0;\r\n    padding-left : 3em;\r\n    padding-right : 4em;\r\n    -webkit-animation: fadein 2s;\r\n    -moz-animation: fadein 2s; /* Firefox < 16 */\r\n    -ms-animation: fadein 2s; /* Internet Explorer */\r\n}\r\n.item{\r\n    margin: auto;\r\n    width: 100%;\r\n    height : 100%;\r\n    padding : 12px 20px;\r\n    margin : 8px, 0;\r\n}\r\n\r\n#reviewDiv{\r\n    padding-left : 3em;\r\n    padding-right : 4em;\r\n}\r\n\r\n.forReview{\r\n    padding-left : 3em;\r\n    padding-right : 4em; \r\n}\r\n\r\niframe {\r\n     display: initial !important;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n\r\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "#image{\r\n  width : 300px;\r\n  height : 500px;\r\n  overflow: hidden;\r\n  margin : auto;\r\n  position: relative;\r\n}\r\n\r\n#image:hover{\r\n    opacity : 0.3;\r\n}\r\n\r\n.image {\r\n  opacity: 1;\r\n  display: block;\r\n  height: auto;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n#text-label{\r\n    background-color: gainsboro;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    height: 70px;\r\n    /*margin-bottom: 10%;*/\r\n}\r\n\r\n#c-row{\r\n     padding-bottom: 15px;\r\n    font-family: 'Oswald',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 30px;\r\n    margin-bottom: 5%;\r\n    text-shadow: 1px 1px white;\r\n\r\n}\r\n\r\n#head{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 70px;\r\n    text-shadow: 1px 1px white;\r\n}\r\n#headtwo{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 45px;\r\n    text-shadow: 1px 1px white;\r\n    margin-bottom: 1%;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "\r\n.container-fluid{\r\n    font-family: 'Quicksand',sans-serif;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    height : 5%;\r\n}\r\n\r\n.navbar-brand{\r\n    color : yellow;\r\n    font-family: 'Yellowtail', cursive;\r\n    font-size : 40px;\r\n}\r\n\r\n.navbar-brand:hover{\r\n    color : yellow;\r\n}\r\n\r\n.navbar-form{\r\n    margin-top: 0;\r\n}\r\n.navbar-form input[type=text]{\r\n    font-family: 'Quicksand',sans-serif;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    width : 100%;\r\n     margin-top : 3%;\r\n}\r\n\r\n.navbar-form button[type=submit]{\r\n    margin-top : 3%;\r\n}\r\nspan{\r\n    margin-right:4px; \r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "input[type=text],input[type=password]{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 20px;\r\n    width : 100%;\r\n    padding : 12px 20px;\r\n    margin : 1%;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n}\r\n.form-body{\r\n     margin : 10%;\r\n     margin-top :3%;\r\n     margin-bottom: 0;\r\n}\r\n.row{\r\n    font-family: 'Oswald', sans-serif;\r\n    width: 50%;\r\n    padding-bottom: 10px;\r\n}\r\n.foot{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n    size: 100%;\r\n}\r\n.btn-default{\r\n    margin : 2%;\r\n    padding: 10px 20px;\r\n    font-size: 30px;\r\n    border-radius: 10px;\r\n    width:20%;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bold;\r\n    background-color: gainsboro;\r\n    box-shadow: 0px 4px 4px 2px grey;\r\n}\r\n\r\n.regis-form{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 60px;\r\n    text-shadow: 1px 1px white;\r\n}\r\n\r\nlabel{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    margin-bottom: 1%;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ".btn-default{\r\n    margin : 2%;\r\n    padding: 10px 20px;\r\n    font-size: 30px;\r\n    border-radius: 10px;\r\n    width:20%;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bold;\r\n    background-color: gainsboro;\r\n    box-shadow: 0px 4px 4px 2px grey;\r\n}\r\n.btn-kept{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n    size: 100%;\r\n}\r\n#image{\r\n  width : 300px;\r\n  height : 500px;\r\n  overflow: hidden;\r\n  margin : auto;\r\n  position: relative;\r\n}\r\n\r\n#image:hover{\r\n    opacity : 0.3;\r\n}\r\n\r\n.image {\r\n  opacity: 1;\r\n  display: block;\r\n  height: auto;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n#text-label{\r\n    background-color: gainsboro;\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n    height: 80px;\r\n      /*margin-bottom: 10%;*/\r\n}\r\n\r\n#searchKey{\r\n    font-family: 'Droid Sans',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 25px;\r\n}\r\n\r\n#c-row{\r\n     padding-bottom: 15px;\r\n    font-family: 'Oswald',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 30px;\r\n    margin-bottom: 5%;\r\n    text-shadow: 1px 1px white;\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n    font-family: 'Oswald',sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 50px;\r\n    text-shadow : 1px 1px black;\r\n    margin-top : 3px;\r\n    margin-bottom : 3px;\r\n    color: floralwhite;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n.list-group{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 800; \r\n    color: black;\r\n    font-size: 33px;\r\n    text-align: center;\r\n    border: 0px solid black;\r\n}\r\n\r\n.profile{\r\n    text-align: center;\r\n    border: 0px solid black;\r\n    background-color: rgba(0,0,0,0.1);\r\n    margin-right : 25%;\r\n    margin-left : 25%;\r\n    margin-top : 5%;\r\n    box-shadow: 0 0 5px #555;\r\n}\r\n\r\ndiv .list-group-item{\r\n    background-color: rgba(255,255,255,0.3);\r\n}\r\n.all {\r\n    -webkit-animation: fadein 0.75s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"keep\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <div class=\"header-txt\">\r\n  <div class=\"text-center\" id=\"add-mov\">ADD MOVIE</div>\r\n  <h1 class=\"text-center\" id=\"intro-mov\">Make sure to fill in all the information of the movie correctly</h1>\r\n</div>\r\n<form (submit)=\"onSubmitMovie()\">\r\n  <div class=\"add-form\" align=\"center\">\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Movie ID (imdb ID)</label>\r\n      <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" placeholder=\"Please enter the movie id here - Ex. tt123456\">\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Movie Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Please enter the movie name here\">\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Released Date</label>\r\n      <input type=\"text\" [(ngModel)]=\"rd\" name=\"rd\" placeholder=\"Ex. 10 May 1999\">\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Movie Poster URL</label>\r\n      <input type=\"text\" [(ngModel)]=\"poster\" name=\"poster\" placeholder=\"Please enter the URL of the movie poster here\">\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Movie Trailer URL</label>\r\n      <input type=\"text\" [(ngModel)]=\"trailer\" name=\"trailer\" placeholder=\"Please enter Trailer Youtube's URL of the movie\">\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Description</label>\r\n      <textarea [(ngModel)]=\"description\" name=\"description\" placeholder=\"Please enter the movie description here\"></textarea>\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Casts and Crews</label>\r\n      <textarea [(ngModel)]=\"cast\" name=\"cast\" placeholder=\"(use ',' if more than one) Ex. John Doe,Doe Doe\"></textarea>\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Category</label>\r\n      <input type=\"text\" [(ngModel)]=\"category\" name=\"category\" placeholder=\"(use ',' if more than one) Ex. Drama,Action\">\r\n    </div>\r\n    <div class=\"row\" align=\"left\">\r\n      <label>Global Ratings</label>\r\n      <input type=\"text\" [(ngModel)]=\"rating\" name=\"rating\" placeholder=\"Please enter the URL of the movie trailer here\">\r\n    </div>\r\n    <div class=\"foot\">\r\n      <button type=\"submit\" class=\"btn btn-default\" id=\"add\">Add</button>\r\n      <button type=\"reset\" class=\"btn btn-default\" id=\"cancel\">Reset</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <div class=\"cate\">\r\n  <div class=\"c-row\">\r\n    <div class=\"col-lg-12 text-center\">\r\n      <div class=\"header\">Choose your movie category</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"c-row\">\r\n    <div class=\"col-md-3 col-sm-6\" id=\"action\">\r\n      <a routerLink=\"/movielist/Action\" (click)=\"dataService.setCat('Action')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SY1000_CR0,0,648,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">ACTION</div>\r\n    </div>\r\n     <div class=\"col-md-3 col-sm-6\" id=\"adventure\">\r\n      <a [routerLink]=\"['/movielist/Adventure']\" (click)=\"dataService.setCat('Adventure')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxNDUxNzcyMl5BMl5BanBnXkFtZTcwNTgwOTI3MQ@@._V1_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">ADVENTURE</div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6\" id=\"animation\">\r\n      <a [routerLink]=\"['/movielist/Animation']\" (click)=\"dataService.setCat('Animation')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">ANIMATION</div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6\" id=\"biography\">\r\n      <a [routerLink]=\"['/movielist/Biography']\" (click)=\"dataService.setCat('Biography')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0NTA2MTEwOV5BMl5BanBnXkFtZTgwNzg4NzU2NjE@._V1_SY1000_CR0,0,631,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">BIOGRAPHY</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"c-row\">\r\n     <div class=\"col-md-3 col-sm-6\" id=\"comedy\">\r\n      <a [routerLink]=\"['/movielist/Comedy']\" (click)=\"dataService.setCat('Comedy')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">COMEDY</div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6\" id=\"crime\">\r\n      <a [routerLink]=\"['/movielist/Crime']\" (click)=\"dataService.setCat('Crime')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">CRIME</div>\r\n    </div>\r\n     <!--<div class=\"col-md-3 col-sm-6\" id=\"documentary\">\r\n      <a [routerLink]=\"['/movielist']\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BODZiOGMzOTgtN2ExZC00MmQ5LTg4MDctN2FkZTRjYWVkZWI1XkEyXkFqcGdeQXVyMjU1Njc3NTk@._V1_SY1000_CR0,0,675,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">DOCUMENTARY</div>\r\n    </div>-->\r\n     <div class=\"col-md-3 col-sm-6\" id=\"drama\">\r\n      <a [routerLink]=\"['/movielist/Drama']\" (click)=\"dataService.setCat('Drama')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">DRAMA</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"c-row\">\r\n    <div class=\"col-md-3 col-sm-6\" id=\"family\">\r\n      <a [routerLink]=\"['/movielist/Family']\" (click)=\"dataService.setCat('Family')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">FAMILY</div>\r\n    </div>\r\n     <div class=\"col-md-3 col-sm-6\" id=\"fantasy\">\r\n      <a [routerLink]=\"['/movielist/Fantasy']\" (click)=\"dataService.setCat('Fantasy')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">FANTASY</div>\r\n    </div>\r\n     <div class=\"col-md-3 col-sm-6\" id=\"history\">\r\n      <a [routerLink]=\"['/movielist/History']\" (click)=\"dataService.setCat('History')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,673,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">HISTORY</div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6\" id=\"horror\">\r\n      <a [routerLink]=\"['/movielist/Horror']\" (click)=\"dataService.setCat('Horror')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMzk1NzI1ODg3M15BMl5BanBnXkFtZTgwNzM0Mzc4MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">HORROR</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"c-row\">\r\n    <div class=\"col-md-3 col-sm-6\" id=\"music\">\r\n      <a [routerLink]=\"['/movielist/Music']\" (click)=\"dataService.setCat('Music')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">MUSIC</div>\r\n    </div>\r\n     <div class=\"col-md-3 col-sm-6\" id=\"mystery\">\r\n      <a [routerLink]=\"['/movielist/Mystery']\" (click)=\"dataService.setCat('Mystery')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNTE2Nzg1NjkzNV5BMl5BanBnXkFtZTgwOTgyODMyMTI@._V1_SY1000_CR0,0,631,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">MYSTERY</div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6\" id=\"romance\">\r\n      <a [routerLink]=\"['/movielist/Romance']\" (click)=\"dataService.setCat('Romance')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzODU1OTkwN15BMl5BanBnXkFtZTgwMDA3MTMwMDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">ROMANCE</div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-6\" id=\"sci-fi\">\r\n      <a [routerLink]=\"['/movielist/Sci-Fi']\" (click)=\"dataService.setCat('Sci-Fi')\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">SCI-FI</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"c-row\">\r\n     <!--<div class=\"col-md-3 col-sm-6\" id=\"sport\">\r\n      <a [routerLink]=\"['/movielist']\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SY1000_CR0,0,675,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">SPORT</div>\r\n    </div>-->\r\n     <div class=\"col-md-3 col-sm-6\" id=\"thriller\" (click)=\"dataService.setCat('Thriller')\">\r\n      <a [routerLink]=\"['/movielist/Thriller']\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNzI5MzM3MzkxNF5BMl5BanBnXkFtZTgwOTkyMjI4MTI@._V1_SY1000_CR0,0,673,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">THRILLER</div>\r\n    </div>\r\n    <!--<div class=\"col-md-3 col-sm-6\" id=\"war\">\r\n      <a [routerLink]=\"['/movielist']\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">WAR</div>\r\n    </div>-->\r\n    <div class=\"col-md-3 col-sm-6\" id=\"western\" (click)=\"dataService.setCat('Western')\">\r\n      <a [routerLink]=\"['/movielist/Western']\">\r\n        <img id =\"image\" src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n       </a>\r\n      <div class=\"text-center\" id=\"text-label\">WESTERN</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <h1 class=\"text-center\" id=\"head\">DELETE MOVIE</h1>\r\n<div align=\"center\">\r\n  <form>\r\n    <input type=\"text\" [(ngModel)]=\"mid\" name=\"mid\" placeholder=\"Enter the ID of movie you want to delete\"><br>\r\n    <button type=\"button\" name=\"Delete\" class=\"btn btn-default\" (click)=\"setName()\" data-toggle=\"modal\" data-target=\"#deleteModal\" [disabled]=\"mid === undefined || mid === ''\">Delete</button>\r\n    <div class=\"modal fade\" id=\"deleteModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Are you sure you want to delete \"{{name}}\" movie?</h4>\r\n         <form (submit)=\"onDeleteSubmit()\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"confirmBtn\" (click)=\"onDeleteSubmit()\">Confirm</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"id=\"cancelBtn\">Cancel</button>\r\n         </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <div class=\"jumbotron\">\r\n  <p class=\"text-center\" id=\"greetingTop\">WELCOME TO MOVIE REVIEW WEBSITE</p>\r\n  <p class=\"text-center\" id=\"greetingTxt\">The home of fast and reliable movie reviews</p>\r\n</div>\r\n<section id=\"movie-grid\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <h1 class=\"text-center\" id=\"tour-heading\">LET'S GET STARTED!</h1>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6\" id=\"category\">\r\n       <a [routerLink]=\"['/category']\">\r\n        <img id =\"image\" src=\"http://ghauri.one/ghauri/media/catalog/category/grid.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n        <div class=\"middle\">\r\n          <div class=\"text\">CATEGORY</div>\r\n        </div>\r\n       </a>\r\n      </div>\r\n       <div class=\"col-md-4 col-sm-6\" id=\"latest-movie\">\r\n       <a [routerLink]=\"['/movielist/latest']\">\r\n        <img id =\"image\" src=\"http://cdn1-www.comingsoon.net/assets/uploads/gallery/pirates-of-the-caribbean-dead-men-tell-no-tales/18192998_661250467417506_7754737169370615427_o.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n        <div class=\"middle\">\r\n          <div class=\"text\">LATEST MOVIE</div>\r\n        </div>\r\n       </a>\r\n      </div>\r\n       <div class=\"col-md-4 col-sm-6\" id=\"trending\">\r\n       <a [routerLink]=\"['/movielist/trend']\">\r\n        <img id =\"image\" src=\"https://secure.netflix.com/us/boxshots/ghd/80058070.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n        <div class=\"middle\">\r\n          <div class=\"text\">TRENDING</div>\r\n        </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <div class=\"login-header\">\r\n  <h1 class=\"text-center\">LOG IN</h1>\r\n  <!--<h2 class=\"text-center\">Please enter your username and password below</h2>-->\r\n</div>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"loginForm\" align=\"center\">\r\n    <div class=\"roww\" align=\"left\">\r\n      <label>Username</label>\r\n      <input type=\"text\" placeholder=\"Enter Your Username\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n    <div class=\"roww\" align=\"left\">\r\n      <label>Password</label>\r\n      <input type=\"password\" placeholder=\"Enter Your Password\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <div class=\"foott\">\r\n      <button type=\"submit\" class=\"btn btn-default\" id=\"log\" value=\"Login\">Login</button>\r\n      <button type=\"button\" class=\"btn btn-default\" id=\"cancel\" value=\"Button\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:gray;margin:5%;border-radius:30px;padding:20px;\" class=\"all\">\r\n  <h1 class=\"text-center\" id=\"mov-head\">{{movieData?.name}}</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"text-center\" id=\"rating-label\">\r\n      <img width=\"50\" height=\"50\" src=\"https://cdn0.iconfinder.com/data/icons/IS_Christmas/512/christmas_star.png\"/>\r\n      RATINGS : {{movieData?.rating}}\r\n      <img width=\"50\" height=\"50\" src=\"https://cdn0.iconfinder.com/data/icons/IS_Christmas/512/christmas_star.png\"/>\r\n      </div>\r\n    <img id=\"image\" src=\"{{movieData?.poster}}\"\r\n      alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n    <div class=\"text-center\">\r\n      <p id=\"rel-date\">{{movieData?.release_date | date:'dd/MM/yy'}}</p>\r\n      <p id=\"cat\">{{movieData?.category}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-7\" id=\"vid\">\r\n    <div>\r\n      <!--<iframe width=\"1020\" height=\"580\" src=\"https://www.youtube.com/embed/zB4I68XVPzQ\" frameborder=\"0\" allowfullscreen></iframe>-->\r\n      <iframe id=\"iFrame1\" width=\"900\" height=\"540\" [src]=\"videoUrl\" frameborder=\"0\" allowfullscreen></iframe>\r\n      <!--<iframe width=\"1020\" height=\"580\" src=\"https://www.youtube.com/embed/{{movieData?.trailer}}\" frameborder=\"0\" allowfullscreen></iframe>-->\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-1\"></div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-10\"></div>\r\n  <div class=\"col-md-1\"></div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-11\">\r\n    <img style=\"float:left\" width=\"50\" height=\"50\" src=\"http://www.freeiconspng.com/uploads/book-icon--awesome-book-icon--softiconsm-15.png\"/>\r\n    <h2 id=\"hdline\">STORYLINE</h2>\r\n    <p id=\"linetxt\">{{movieData?.description}}</p>\r\n  </div>\r\n</div><hr>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-11\">\r\n    <img style=\"float:left\" width=\"50\" height=\"50\" src=\"https://cdn1.iconfinder.com/data/icons/pretty-office-part-13-reflection-style/512/users.png\"/>\r\n    <h2 id=\"hdline\">CASTS</h2>\r\n    <p *ngFor=\"let ca of movieData?.cast\" id=\"linetxt\">{{ca}} </p>\r\n  </div>\r\n</div><hr>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-11\">\r\n    <img style=\"float:left\" width=\"50\" height=\"50\" src=\"http://saniflo-engineers-london.co.uk/wp-content/uploads/2014/01/Reviews.png\"/>\r\n    <h2 id=\"hdline\">REVIEW</h2>\r\n    <div class=\"forReview\">\r\n    <form (submit)=\"onCommentSubmit()\">\r\n      <input *ngIf=\"user\" type=\"text\" placeholder=\"Write down your review here\" [(ngModel)]=\"comment\" name=\"comment\"><br>\r\n      <input disabled *ngIf=\"!user\" type=\"text\" placeholder=\"Please Login\" name=\"comment\"><br>\r\n      <input [disabled]=\"!user||!comment\" type=\"submit\" class=\"btn btn-default\" value =\"Send\">\r\n      \r\n    </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngFor=\"let re of movieData?.review.slice().reverse()\" class=\"row\" id=\"reviewDiv\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-11\">\r\n    <div class=\"panel panel-default\" id=\"revi\">\r\n      <div class=\"panel-heading\" id=\"rev-name\">{{re.name}} &nbsp; {{re.dated | date:'dd/MM/yy HH:mm:ss'}}</div>\r\n      <div class=\"panel-body\" id=\"rev\">{{re.comment}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<!--<h1 class=\"text-center\" id=\"head\">MOVIE LIST PAGE</h1>-->\r\n<div class=\"all\">\r\n  <h1 class=\"text-center\" id=\"headtwo\">{{cate}} Movies</h1>\r\n<div *ngFor=\"let m of movie\" class=\"hi\">\r\n  <div class=\"col-md-3 col-sm-6\" id=\"c-row\">\r\n    <a routerLink=\"/movie/{{m.mid}}\"> \r\n        <img id=\"image\" src=\"{{m.poster}}\" alt=\"poster\" class=\"image\" style=\"width:100%\">\r\n        </a>\r\n    <div class=\"text-center\" id=\"text-label\">{{m.name}}</div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Yellowtail\" rel=\"stylesheet\">\r\n<div class=\"all\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Movie's Review</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\" action=\"onNavLoad()\">\r\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\"><span class=\"glyphicon glyphicon-home\"></span>Home</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/category']\"><span class=\"glyphicon glyphicon-list\"></span>Category</a></li>\r\n    </ul>\r\n     <form class=\"navbar-form navbar-left\" (submit)=\"onSubmitSearch()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"search\" name=\"search\" class=\"form-control\" placeholder=\"...by Movie's name\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-default\"><a><span class=\"glyphicon glyphicon-search\"></span></a></button>\r\n    </form>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li *ngIf =\"dataService.loggedIn() && dataService.grant\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/addmovie']\"><span class=\"glyphicon glyphicon-plus-sign\"></span>Add Movie</a></li>\r\n      <li *ngIf =\"dataService.loggedIn() && dataService.grant\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/deletemovie']\"><span class=\"glyphicon glyphicon-minus-sign\"></span>Delete Movie</a></li>\r\n      <li *ngIf =\"dataService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/userprofile']\"><span class=\"glyphicon glyphicon-user\"></span>{{dataService?.user?.username}}</a></li>\r\n      <li *ngIf =\"!dataService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n      <li *ngIf =\"!dataService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\"><span class=\"glyphicon glyphicon-user\"></span> Register</a></li>\r\n      <li *ngIf =\"dataService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <div class=\"regis-form\">\r\n  <div class=\"text-center\">REGISTRATION FORM</div>\r\n  <h1 class=\"text-center\">please fill in all fields correctly</h1>\r\n</div>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-body\" align=\"center\">\r\n   <div class=\"row\" align=\"left\">\r\n    <label>First Name</label>\r\n    <input type=\"text\" placeholder=\"Enter Your First Name\" [(ngModel)]=\"firstname\" name=\"firstname\">\r\n  </div>\r\n   <div class=\"row\" align=\"left\">\r\n    <label>Last Name</label>\r\n    <input type=\"text\" placeholder=\"Enter Your Last Name\" [(ngModel)]=\"lastname\" name=\"lastname\">\r\n  </div>\r\n  <div class=\"row\" align=\"left\">\r\n    <label>Username</label>\r\n    <input type=\"text\" placeholder=\"Enter Your Username\" [(ngModel)]=\"username\" name=\"username\">\r\n  </div>\r\n  <div class=\"row\" align=\"left\">\r\n    <label>Email</label>\r\n    <input type=\"text\" placeholder=\"Enter Your E-mail\" [(ngModel)]=\"email\" name=\"email\">\r\n  </div>\r\n  <div class=\"row\" align=\"left\">\r\n    <label>Password</label>\r\n    <input type=\"password\" placeholder=\"Enter your Password\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n  <div class=\"row\" align=\"left\">\r\n    <label>Comfirm your Password</label>\r\n    <input type=\"password\" placeholder=\"Re-Enter your Password\" [(ngModel)]=\"repassword\" name=\"password\">\r\n  </div>\r\n  <div class=\"foot \">\r\n    <button type=\"submit\" class=\"btn btn-default\" value=\"submit\">Register</button>\r\n  </div>\r\n</div>\r\n</form>\r\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <h1 class=\"text-center\" id=\"searchKey\">Your Searched for ' {{key}} '</h1>\r\n  <h3 id=\"result\" class=\"text-center\" *ngIf=\"result > 1\">{{result}} results</h3>\r\n  <h3 id=\"result\" class=\"text-center\" *ngIf=\"result <= 1\">{{result}} result</h3>\r\n  <br>\r\n  <br>\r\n \r\n  <div *ngFor=\"let m of movie\" class=\"hi\">\r\n    <div class=\"col-md-3 col-sm-6\" id=\"c-row\">\r\n      <a routerLink=\"/movie/{{m.mid}}\"> \r\n        <img id=\"image\" src=\"{{m.poster}}\" alt=\"poster\" class=\"image\" style=\"width:100%\">\r\n        </a>\r\n      <div class=\"text-center\" id=\"text-label\">{{m.name}}</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\r\n  <div *ngIf=\"user\" class=\"profile\">\r\n  <h1 class=\"page-header\"> Username : \r\n    {{user.username}}\r\n  </h1>\r\n  <div class=\"list-group\">\r\n    <div class=\"list-group-item\">First Name : {{user.firstname}}</div>\r\n    <div class=\"list-group-item\">Last Name : {{user.lastname}}</div>\r\n    <div class=\"list-group-item\">Email : {{user.email}}</div>\r\n    <div *ngIf=\"user.status == 1\"class=\"list-group-item\">Status : Admin</div>\r\n    <div *ngIf=\"user.status == 0\"class=\"list-group-item\">Status : User</div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[725]);
//# sourceMappingURL=main.bundle.map