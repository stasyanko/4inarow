angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("game.html","<div>\r\n    <div class=\"info-bar well row\">\r\n        <div col=\"col-xs-12\">\r\n            <input class=\"reset-button btn btn-lg\" type=\"button\" ng-click=\"resetGame()\" value=\"New Game\"/>\r\n            <span class=\"message-bar\">\r\n                <span>{{message}}</span>\r\n                <span class=\"player-1-turn\" ng-show=\"activePlayer == 1\">It\'s your turn!</span>\r\n                <span class=\"player-2-turn\" ng-show=\"activePlayer == 2\">I\'m making a move...</span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div col=\"col-xs-12\">\r\n            <table id=\"game-grid\">\r\n                <thead>\r\n                    <tr>\r\n                        <th ng-repeat=\"colNo in colIndices\">\r\n                            <input class=\"drop-button\" ng-disabled=\"activePlayer == null || activePlayer != humanPlayer\" type=\"button\" ng-click=\"makeMove(activePlayer, colNo)\" value=\"drop!\" />\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat=\"rowNo in rowIndices\">\r\n                        <td ng-repeat=\"colNo in colIndices\">\r\n                            <div class=\"disc\" ng-class=\"{ \'player-1-disc\' : grid[colNo][rowNo] == 1, \'player-2-disc\': grid[colNo][rowNo] == 2 }\"></div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("layout.html","<div>\r\n    <nav class=\"navbar navbar-static-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"#\">Four in a row</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"page-content container-fluid\">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>\r\n");}]);