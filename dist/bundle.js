"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}angular.module("app",["ui.router","templates"]).config(["$stateProvider","$urlRouterProvider",function(e,n){n.otherwise("/"),e.state("app",{url:"/","abstract":!0,templateUrl:"layout.html"}).state("app.game",{url:"",templateUrl:"game.html",controller:"GameController"})}]),angular.module("app").controller("GameController",["$scope","$timeout","Game","HumanPlayer","AutomatedPlayer","messageService",function(e,n,t,r,a,o){function i(){n(function(){var e,n,t=document.getElementById("game-grid").getElementsByTagName("tbody")[0],r=t.getElementsByTagName("td"),a=document.body.clientWidth-20,o=document.body.clientHeight-t.getBoundingClientRect().top-20;for(e=o>a?a/u.colCount:o/u.rowCount,n=0;n<r.length;n++)r[n].style.width=r[n].style.height=e+"px"})}var l,u=new t({moveDelay:1e3,rowCount:6,colCount:7,winningCount:4}),s=o.getMessages();for(e.colIndices=[],e.rowIndices=[],e.getCurrentPlayer=u.getCurrentPlayer,e.getGrid=u.getGrid,e.message={},l=u.colCount-1;l>=0;l--)e.colIndices.unshift(l);for(l=u.rowCount-1;l>=0;l--)e.rowIndices.push(l);e.resetGame=function(){u.reset()},u.registerPlayer(new r(1,"smiley",{isUser:!0})),u.registerPlayer(new a(2,"rage")),e.playerCache=u.getPlayerCache(),u.onGameEnd(function(n,t){n?n.isUser?(e.message=s.youWin,e.infoBarIcon="disc-style-thumbsup"):(e.message=s.youLose,e.infoBarIcon="disc-style-thumbsdown"):(e.message=s.tie,e.infoBarIcon="disc-style-open_hands")}),u.onIllegalMove(function(n){n.isUser&&(e.message=s.cannotMove)}),u.onPlayerChange(function(n){n&&(s.playerMove.setMessage(n),e.message=s.playerMove,e.infoBarIcon=n.discStyle)}),i(),u.start()}]),angular.module("app").factory("messageService",[function(){var e={tie:{text:"No more moves can be made. It's a tie",cssClass:""},youWin:{text:"You win!",cssClass:"message-win"},youLose:{text:"You lose",cssClass:"message-lose"},cannotMove:{text:"Cannot make move",cssClass:""},playerMove:{text:null,cssClass:null,setMessage:function(e){this.cssClass="player-"+e.id+"-turn",this.text=e.isUser?"It's your turn!":"I'm making a move..."}}};return{getMessages:function(){return e}}}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("app").factory("Game",["$timeout","Grid","GameValidator",function(e,n,t){function r(n,t){if(s.checkTie())y(null),o(null);else{var r=s.checkWinner(n);r?(a(r),y(f[n],r),o(null)):v=e(function(){i()},t)}}function a(e){for(var n=0;n<e.length;n++)for(var t=e[n].chain,r=0;r<t.length;r++){var a=d.grid[t[r][0]][t[r][1]];a>0&&(d.grid[t[r][0]][t[r][1]]=-1*a)}}function o(e){var n=f[e];e&&n.onTurnStarted(m.prototype.makeMove),u=e,p(n)}function i(){o(l(u))}function l(e){var n=c.indexOf(e);return n>=0&&n<c.length-1?c[n+1]:c[0]}var u=null,s=null,c=[],f={},d=null,v=null,h=null,g=function(e){},y=function(e){},p=function(e){},m=function(){function a(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.winningCount,o=void 0===r?4:r,i=e.moveDelay,l=void 0===i?500:i,u=e.rowCount,c=void 0===u?6:u,f=e.colCount,v=void 0===f?7:f;_classCallCheck(this,a),this.winningCount=o,this.moveDelay=l,this.rowCount=c,this.colCount=v,d=new n({rowcount:c,colCount:v}),this.grid=d.grid,s=new t(this.grid,this.colCount,this.rowCount,this.winningCount)}return _createClass(a,[{key:"onIllegalMove",value:function(e){g=e}},{key:"onGameEnd",value:function(e){y=e}},{key:"onPlayerChange",value:function(e){p=e}},{key:"getGrid",value:function(){return d.grid}},{key:"getCurrentPlayer",value:function(){return f[u]}},{key:"getPlayerCache",value:function(){return f}},{key:"start",value:function(){o(c[0])}},{key:"reset",value:function(){e.cancel(v),d.reset(),h=null,o(c[0])}},{key:"registerPlayer",value:function(e){e.setGame(this),f[e.id]=e,c.push(e.id)}},{key:"makeMove",value:function(e,n){return h!==e&&s.isValidMove(u,e,n)?(h=e,d.drop(n,e),r(e,this.moveDelay),!0):(g(f[e]),!1)}}]),a}();return m}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("app").factory("GameValidator",[function(){function e(e){for(var n=[],t=0;l>t;t++){n.length=0;for(var r=0;i>r&&!a(n,r,t,e);r++);if(n.length>=u)return n}return null}function n(e){for(var n=[],t=0;i>t;t++){n.length=0;for(var r=0;r<o[t].length&&!a(n,t,r,e);r++);if(n.length>=u)return n}return null}function t(e){for(var n,t,r=[],o=0;l>o;o++){for(n=0,t=o,r.length=0;i>n&&l>t&&!a(r,n,t,e);)t++,n++;if(r.length>=u)return r}if(r.length<u)for(var s=0;i>s;s++){for(n=s,t=0,r.length=0;i>n&&l>t&&!a(r,n,t,e);)t++,n++;if(r.length>=u)return r}return null}function r(e){for(var n,t,r=[],o=0;i>o;o++){for(n=o,t=0,r.length=0;n>=0&&l>t&&!a(r,n,t,e);)t++,n--;if(r.length>=u)return r}if(r.length<u)for(var s=0;l>s;s++){for(n=i-1,t=s,r.length=0;n>=0&&l>t&&!a(r,n,t,e);)t++,n--;if(r.length>=u)return r}return null}function a(e,n,t,r){if(o[n]&&o[n][t]===r)e.push([n,t]);else{if(!(e.length<u))return!0;e.length=0}return!1}var o,i,l,u,s=function(){function a(e,n,t,r){_classCallCheck(this,a),o=e,i=n,l=t,u=r}return _createClass(a,[{key:"checkWinner",value:function(a){var o,i=[];return o=e(a),o&&i.push({type:"horizontal",chain:o}),o=n(a),o&&i.push({type:"vertical",chain:o}),o=t(a),o&&i.push({type:"diagonalNE",chain:o}),o=r(a),o&&i.push({type:"diagonalNW",chain:o}),i.length?i:!1}},{key:"checkTie",value:function(){for(var e=!0,n=0;l>n;n++)e=e&&o[n].length>=l;return e}},{key:"isValidMove",value:function(e,n,t){var r=null!==n&&n==e,a=t>-1&&i>t,u=o[t].length<l;return r&&a&&u}}]),a}();return s}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("app").factory("Grid",[function(){var e=function(){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=n.rowCount,r=void 0===t?6:t,a=n.colCount,o=void 0===a?7:a;_classCallCheck(this,e),this.rowCount=r,this.colCount=o,this.grid=[];for(var i=0;i<this.colCount;i++)this.grid.push([])}return _createClass(e,[{key:"reset",value:function(){for(var e=0;e<this.colCount;e++)this.grid[e].length=0}},{key:"drop",value:function(e,n){this.grid[e].push(n)}}]),e}();return e}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("app").factory("AutomatedPlayer",["$timeout","Player",function(e,n){function t(e,n){var t;do t=r(e.colCount);while(!e.makeMove(n,t))}function r(e){var n=0,t=e-1;return Math.floor(Math.random()*(t-n+1))+n}var a=function(n){function r(e,n){var t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],a=t.isUser,o=void 0===a?!1:a,i=t.delayMax,l=void 0===i?800:i,u=t.delayMin,s=void 0===u?200:u;_classCallCheck(this,r);var c=_possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this,e,n,{isUser:o,isAutomated:!0}));return c.delayMax=l,c.delayMin=s,c}return _inherits(r,n),_createClass(r,[{key:"onTurnStarted",value:function(){var n=this,r=this.delayMin+Math.floor(Math.random()*this.delayMax);e(function(){t(n.game,n.id)},r)}}]),r}(n);return a}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("app").factory("HumanPlayer",["Player",function(e){var n=function(e){function n(e,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],a=r.isUser,o=void 0===a?!1:a;return _classCallCheck(this,n),_possibleConstructorReturn(this,Object.getPrototypeOf(n).call(this,e,t,{isUser:o,isAutomated:!1}))}return _inherits(n,e),_createClass(n,[{key:"makeMove",value:function(e){this.game.makeMove(this.id,e)}}]),n}(e);return n}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("app").factory("Player",[function(){var e=function(){function e(n,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],a=r.isUser,o=void 0===a?!1:a,i=r.isAutomated,l=void 0===i?!0:i;_classCallCheck(this,e),this.id=n,this.isUser=o,this.isAutomated=l,this.game=null,this.discStyle="disc-style-"+t}return _createClass(e,[{key:"setGame",value:function(e){this.game=e}},{key:"onTurnStarted",value:function(){}},{key:"makeMove",value:function(e){}}]),e}();return e}]),angular.module("templates",[]).run(["$templateCache",function(e){e.put("game.html",'<div>\r\n    <div class="info-bar row">\r\n        <div class="col-xs-3">\r\n            <div class="disc {{infoBarIcon}}"></div>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="message-bar">\r\n                <span>{{message.text}}</span>\r\n            </div>\r\n        </div>\r\n        <div class="button-container col-xs-3">\r\n            <input class="reset-button btn btn-lg" type="button" ng-click="resetGame()" value="New Game"/>\r\n        </div>\r\n    </div>\r\n    <div class="row game-container">\r\n        <div col="col-xs-12">\r\n            <table id="game-grid">\r\n                <thead>\r\n                    <tr>\r\n                        <th ng-repeat="colNo in colIndices">\r\n                            <input class="drop-button" \r\n                                ng-disabled="!getCurrentPlayer() || !getCurrentPlayer().isUser" \r\n                                type="button" \r\n                                ng-click="getCurrentPlayer().makeMove(colNo)" \r\n                                value="drop!" />\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat="rowNo in rowIndices">\r\n                        <td ng-repeat="colNo in colIndices">\r\n                            <div class="disc {{playerCache[getGrid()[colNo][rowNo]].discStyle}} animated bounceInDown" \r\n                                ng-if="getGrid()[colNo][rowNo] > 0">\r\n                            </div>\r\n                            <div class="disc {{playerCache[getGrid()[colNo][rowNo] * -1].discStyle}} animated blink" \r\n                                ng-if="getGrid()[colNo][rowNo] < 0">\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n'),e.put("layout.html",'<div>\r\n    <nav class="navbar navbar-static-top">\r\n        <div class="container">\r\n            <div class="navbar-header">\r\n                <a class="navbar-brand" href="#">Four in a row</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class="page-content container-fluid">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>\r\n')}]);