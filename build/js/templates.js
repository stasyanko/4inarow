angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("game.html","<div>\r\n    <div class=\"info-bar well row\">\r\n        <div col=\"col-xs-12\">\r\n            <input class=\"reset-button btn btn-lg\" type=\"button\" ng-click=\"resetGame()\" value=\"New Game\"/>\r\n            <span class=\"message-bar {{message.cssClass}}\">\r\n                <span>{{message.text}}</span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div col=\"col-xs-12\">\r\n            <table id=\"game-grid\">\r\n                <thead>\r\n                    <tr>\r\n                        <th ng-repeat=\"colNo in colIndices\">\r\n                            <input class=\"drop-button\" \r\n                                ng-disabled=\"!currentPlayer() || !currentPlayer().isUser\" \r\n                                type=\"button\" \r\n                                ng-click=\"currentPlayer().makeMove(colNo)\" \r\n                                value=\"drop!\" />\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat=\"rowNo in rowIndices\">\r\n                        <td ng-repeat=\"colNo in colIndices\">\r\n                            <div class=\"disc animated bounceInDown\" \r\n                                ng-if=\"grid()[colNo][rowNo] > 0\"\r\n                                ng-class=\"{ \'player-1-disc\' : grid()[colNo][rowNo] === 1, \'player-2-disc\': grid()[colNo][rowNo] === 2 }\">\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("layout.html","<div>\r\n    <nav class=\"navbar navbar-static-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"#\">Four in a row</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"page-content container-fluid\">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>\r\n");}]);