var styling = (function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
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
    }

    var NodeType;
    (function (NodeType) {
        NodeType[NodeType["Paragraph"] = 1] = "Paragraph";
        NodeType[NodeType["Command"] = 2] = "Command";
        NodeType[NodeType["Text"] = 3] = "Text";
        NodeType[NodeType["Block"] = 4] = "Block";
        NodeType[NodeType["Html"] = 5] = "Html";
        NodeType[NodeType["Node"] = 6] = "Node";
        NodeType[NodeType["Boolean"] = 10] = "Boolean";
        NodeType[NodeType["Dictionary"] = 11] = "Dictionary";
        NodeType[NodeType["Array"] = 12] = "Array";
        NodeType[NodeType["Number"] = 13] = "Number";
        NodeType[NodeType["String"] = 14] = "String";
    })(NodeType || (NodeType = {}));

    var _this = undefined;
    var style = document.createElement("style");
    style.id = 'styling-style-block';
    document.head.appendChild(style);
    var sheet = style.sheet;
    var pkg = {
        name: 'styling',
        commands: {
            'add-css-rule': function (rule, index) {
                if (index === void 0) { index = { type: NodeType.Number, value: 1 }; }
                return sheet.insertRule(rule.value, index.value) && undefined;
            },
            'set-root-style': function (prop) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                }
                return document.querySelector('.nxtx-root').style.setProperty(prop.value, values.map(function (e) { return e.value; }).join(', '));
            },
            'set-font-family': function () {
                var fontFamilies = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    fontFamilies[_i] = arguments[_i];
                }
                return ({
                    type: NodeType.Command,
                    name: 'set-root-style',
                    args: [{ type: NodeType.String, value: 'font-family' }].concat(fontFamilies)
                });
            },
            'set-local-font-family': function (fontName, fontUrl) {
                var css = "@font-face { font-family: '" + fontName.value + "'; src: local('" + fontName.value + "'), url('" + fontUrl.value + "'); }";
                return ([
                    {
                        type: NodeType.Command,
                        name: 'add-css-rule',
                        args: [{ type: NodeType.Text, value: css }, { type: NodeType.Number, value: 88 }]
                    },
                    {
                        type: NodeType.Command,
                        name: 'set-root-style',
                        args: [{ type: NodeType.String, value: 'font-family' }, fontName]
                    }
                ]);
            },
            'set-google-font-family': function () {
                var fontFamilies = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    fontFamilies[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var attr, link;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                attr = {
                                    rel: 'stylesheet',
                                    href: "https://fonts.googleapis.com/css?family=" + fontFamilies[0].value + "&display=swap",
                                    id: 'link-gfont-' + fontFamilies[0].value
                                };
                                if (!!document.getElementById(attr.id)) return [3, 2];
                                return [4, nxtx.html('link', attr)];
                            case 1:
                                link = _a.sent();
                                document.head.appendChild(link);
                                _a.label = 2;
                            case 2: return [2, { type: NodeType.Command, name: 'set-font-family', args: fontFamilies }];
                        }
                    });
                });
            }
        }
    };
    if (nxtx)
        nxtx.registerPackage(pkg);

    return pkg;

}());
//# sourceMappingURL=styling.js.map
