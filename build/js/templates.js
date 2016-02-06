angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("game.html","<div>\r\n    <div class=\"info-bar row\">\r\n        <div class=\"col-xs-2\">\r\n            <div class=\"disc {{infoBarIcon}}\"></div>\r\n        </div>\r\n        <div class=\"col-xs-10\">\r\n            <div class=\"message-bar\">\r\n                <span>{{message.text}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row game-container\">\r\n        <div class=\"col-xs-12\">\r\n            <table id=\"game-grid\">\r\n                <thead>\r\n                    <tr>\r\n                        <th ng-repeat=\"colNo in colIndices\">\r\n                            <button class=\"drop-button animated pulse\" \r\n                                ng-disabled=\"!getCurrentPlayer() || !getCurrentPlayer().isUser\" \r\n                                ng-click=\"getCurrentPlayer().makeMove(colNo)\">\r\n                                <i class=\"fa fa-arrow-circle-o-down\"></i>\r\n                            </button>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat=\"rowNo in rowIndices\">\r\n                        <td ng-repeat=\"colNo in colIndices\">\r\n                            <div class=\"disc {{playerCache[getGrid()[colNo][rowNo]].discStyle}} animated bounceInDown\" \r\n                                ng-if=\"getGrid()[colNo][rowNo] > 0\">\r\n                            </div>\r\n                            <div class=\"disc {{playerCache[getGrid()[colNo][rowNo] * -1].discStyle}} animated blink\" \r\n                                ng-if=\"getGrid()[colNo][rowNo] < 0\">\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("gameNav.html","<button class=\"reset-button btn navbar-btn pull-right\" ng-click=\"resetGame()\">New Game</button>");
$templateCache.put("layout.html","<div>\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">Four in a row</a>\r\n        <div class=\"page-navbar-content\" ui-view=\"nav\"></div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"page-content container-fluid\">\r\n    <div ui-view=\"main\"></div>\r\n  </div>\r\n</div>");}]);