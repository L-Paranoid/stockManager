webpackJsonp([0],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(62);

var _commonLeftMenu = __webpack_require__(64);

var _commonLeftMenu2 = _interopRequireDefault(_commonLeftMenu);

var _commonContent = __webpack_require__(67);

var _commonContent2 = _interopRequireDefault(_commonContent);

var _header = __webpack_require__(66);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(68);

var _footer2 = _interopRequireDefault(_footer);

var _AJAX = __webpack_require__(59);

var AJAX = _interopRequireWildcard(_AJAX);

var _utils = __webpack_require__(60);

var utils = _interopRequireWildcard(_utils);

var _entry = __webpack_require__(71);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Warehousing = function (_Component) {
    _inherits(Warehousing, _Component);

    function Warehousing(props) {
        _classCallCheck(this, Warehousing);

        var _this2 = _possibleConstructorReturn(this, (Warehousing.__proto__ || Object.getPrototypeOf(Warehousing)).call(this, props));

        _this2.componentDidMount = function () {
            var _this = _this2;
            _this.getData();
        };

        _this2.getData = function () {
            var _this = _this2;
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX('http://106.12.194.98/api/goods/add/history', 'GET', false, head, _this2.isLogin.bind(_this), _this.error);
        };

        _this2.isLogin = function (res) {
            var _this = _this2;
            res = JSON.parse(res);
            if (res.msg == '身份失效') {
                window.location.href = '/';
            }
            _this.setState({
                data: res.data.data,
                allData: res.data
            });
        };

        _this2.showEntry = function () {
            var _this = _this2;
            _this.setState({
                isentry: true
            });
        };

        _this2.selectDelete = function () {
            var _this = _this2;
            _this.setState({
                deleteFlag: !_this.state.deleteFlag
            });
        };

        _this2.onRefFn = function (ref) {
            //接受子组件作用域 并赋值给当前指针的childFn属性;
            var _this = _this2;
            _this.childFn = ref;
        };

        _this2.state = {
            data: '',
            isentry: false,
            allData: '',
            deleteFlag: false
        };
        return _this2;
    }

    _createClass(Warehousing, [{
        key: 'error',
        value: function error(res) {
            alert(res.msg);
        }
    }, {
        key: 'isConfirm',
        value: function isConfirm() {
            var _this = this;
            var isStatus = confirm('确认删除?');
            if (isStatus) {
                _this.DELETE();
            }
        }
    }, {
        key: 'DELETE',
        value: function DELETE(e) {
            var deleteStaus = document.querySelector('tbody').querySelectorAll('.delete');
            if (deleteStaus.length < 1) {
                alert('请选择要删除数据');
                return;
            }
            var ids = [];
            for (var i = 0; i < deleteStaus.length; i++) {
                ids.push(deleteStaus[i].id);
            }
            this.childFn.delete(ids);
        }
    }, {
        key: 'searchBtn',
        value: function searchBtn(e) {
            debugger;
            var _this = this;
            var target = e.target;
            var select = target.ownerDocument.querySelector('.searchSelect');
            var id = select.options[select.selectedIndex].getAttribute('id');
            var searchValue = target.ownerDocument.querySelector('.searchValue').value;
            if (searchValue == '') {
                return;
            }
            var url = this.state.allData.path + '?' + id + '=' + searchValue;
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX(url, 'GET', false, head, this.isLogin, this.error);
        }
    }, {
        key: 'dateChange',
        value: function dateChange(e) {
            var month = e.target.value;
            if (month == '') {
                return;
            }
            var date_start = new Date(new Date(month).setDate(1)).toLocaleDateString();
            var date_end = new Date(new Date(new Date(month).getFullYear(), new Date(month).getMonth() + 1, 1) - 1000 * 60 * 60 * 24).toLocaleDateString();
            var url = this.state.allData.path + '?' + 'date_start=' + date_start + '&date_end=' + date_end;
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX(url, 'GET', false, head, this.isLogin, this.error);
        }
    }, {
        key: 'clear',
        value: function clear(e) {
            e.target.ownerDocument.querySelector('.searchValue').value = '';
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX(this.state.allData.path, 'GET', false, head, this.isLogin, this.error);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            return _react2.default.createElement(
                'div',
                { className: 'allStock' },
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_commonLeftMenu2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'rightContent' },
                    _react2.default.createElement(
                        'header',
                        { className: 'rightHeader' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5546\u54C1\u5E93\u5B58\u5165\u5E93'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dataContent' },
                        _react2.default.createElement(
                            'div',
                            { className: 'optContent' },
                            _react2.default.createElement(
                                'select',
                                { className: 'searchSelect' },
                                _react2.default.createElement(
                                    'option',
                                    { id: 'goods_name' },
                                    '\u5546\u54C1\u540D\u79F0'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { id: 'goods_number' },
                                    '\u5546\u54C1\u7F16\u53F7'
                                )
                            ),
                            _react2.default.createElement('input', { className: 'searchValue' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'enterBtn', onClick: _this.searchBtn.bind(_this) },
                                '\u641C\u7D22'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'enterBtn clear', onClick: _this.clear.bind(_this) },
                                '\u91CD\u7F6E'
                            ),
                            _react2.default.createElement('input', { className: 'dateValue lastBtn', onChange: _this.dateChange.bind(_this), type: 'month' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'optContent twoLine' },
                            _react2.default.createElement(
                                'div',
                                { className: 'enterBtn2', onClick: this.showEntry },
                                '\u5546\u54C1\u5F55\u5165'
                            ),
                            _this.state.deleteFlag && _react2.default.createElement(
                                'div',
                                { className: 'enterBtn2 isDelete', onClick: _this.isConfirm.bind(_this) },
                                '\u786E\u8BA4\u5220\u9664'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'enterBtn2', onClick: _this.selectDelete.bind(_this) },
                                this.state.deleteFlag ? '取消' : '批量删除'
                            )
                        ),
                        _react2.default.createElement(_commonContent2.default, {
                            HEAD: [{ title: '日期', name: 'create_time' }, { title: '供应商', name: 'supplier' }, { title: '商品名称', name: 'goods_name' }, { title: '商品编号', name: 'goods_number' }, { title: '进货价格(1g)', name: 'price' }, { title: '商品重量(件/g)', name: 'weight' }, { title: '总计件数', name: 'num' }, { title: '总计克重(g)', name: 'weight_all' }, { title: '总价($)', name: 'price_all' }, { title: '操作', name: '删除' }],
                            CONTENT: _this.state.data,
                            deleteFlag: _this.state.deleteFlag,
                            onRefFn: _this.onRefFn,
                            getData: _this.getData,
                            selectDelete: _this.selectDelete
                        }),
                        _this.state.isentry && _react2.default.createElement(_entry2.default, {
                            close: function close() {
                                _this.setState({ isentry: false });_this.getData();
                            },
                            isOutStock: false,
                            HEAD: [{ title: '状态', name: '未录入' }, { title: '供应商', name: 'supplier' }, { title: '商品名称', name: 'goods_name' }, { title: '商品编号', name: 'goods_number' }, { title: '进货价格(1g)', name: 'price' }, { title: '商品重量(件/g)', name: 'weight' }, { title: '总计件数', name: 'num' }, { title: '总计克重(g)', name: 'weight_all' }, { title: '总价($)', name: 'price_all' }]
                        }),
                        _react2.default.createElement(_footer2.default, { CONTENT: _this.state.allData, isLogin: this.isLogin })
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return Warehousing;
}(_react.Component);

var _default = Warehousing;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Warehousing, 'Warehousing', '/Users/yuhao/Documents/project_code/code/react-code/src/pages/warehousing/warehousing.js');
    reactHotLoader.register(_default, 'default', '/Users/yuhao/Documents/project_code/code/react-code/src/pages/warehousing/warehousing.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

var AJAX = exports.AJAX = function AJAX(url, method, params, isHead, callback, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            callback(xhr.response);
        } else if (xhr.status >= 400) {
            error(xhr.response);
        }
    };
    xhr.timeout = function () {
        alert('当前请求已超时,是否刷新重试');
    };
    xhr.open(method, url);
    isHead && isHead.length == undefined ? xhr.setRequestHeader(isHead.head, isHead.value) : '';
    if (isHead && isHead.length > 1) {
        for (var i = 0; i < isHead.length; i++) {
            xhr.setRequestHeader(isHead[i].head, isHead[i].value);
        }
    }
    params ? xhr.send(params) : xhr.send();
};
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AJAX, 'AJAX', '/Users/yuhao/Documents/project_code/code/react-code/src/component/AJAX.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var host = exports.host = 'http://106.12.194.98';
var token = exports.token = document.cookie.split('JSESSION=')[1];
var loginIn = exports.loginIn = host + '/api/login'; //登录接口
var repassword = exports.repassword = host + 'api/repassword'; // 修改密码

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(host, 'host', '/Users/yuhao/Documents/project_code/code/react-code/src/component/utils.js');
  reactHotLoader.register(token, 'token', '/Users/yuhao/Documents/project_code/code/react-code/src/component/utils.js');
  reactHotLoader.register(loginIn, 'loginIn', '/Users/yuhao/Documents/project_code/code/react-code/src/component/utils.js');
  reactHotLoader.register(repassword, 'repassword', '/Users/yuhao/Documents/project_code/code/react-code/src/component/utils.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(65);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(63);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\nblockquote,\ndl,\ndt,\ndd,\nul,\nol,\nli,\npre,\nform,\nfieldset,\nlegend,\nbutton,\ninput,\ntextarea,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font: 12px/1.5tahoma, arial, \\5b8b\\4f53;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: couriernew, courier, monospace;\n}\nsmall {\n  font-size: 12px;\n}\nul,\nol {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\nlegend {\n  color: #000;\n}\nfieldset,\nimg {\n  border: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.allStock {\n  display: flex;\n}\n.rightContent {\n  display: flex;\n  flex-direction: column;\n}\n.rightContent {\n  position: absolute;\n  top: 50px;\n  bottom: 0;\n  left: 200px;\n  right: 0;\n  background: #f0f0f0;\n  display: flex;\n  flex-direction: column;\n}\n.rightContent .rightHeader {\n  width: 100%;\n  height: 60px;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n}\n.rightContent .rightHeader span {\n  display: block;\n  width: 100px;\n  height: 20px;\n  line-height: 20px;\n  border-left: 4px solid #0077fb;\n  margin-left: 15px;\n  padding-left: 5px;\n}\n.rightContent .dataContent {\n  width: 98%;\n  margin: 0 auto;\n  margin-top: 20px;\n  background: #FFFFFF;\n  overflow-y: auto;\n}\n.rightContent .dataContent .optContent {\n  width: 95%;\n  margin: 0 auto;\n  height: 50px;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n}\n.rightContent .dataContent .optContent .searchSelect {\n  width: 120px;\n  height: 30px;\n  font-size: 12px;\n  border: 2px solid #F3F3F3;\n  border-radius: 5px;\n  color: #000000;\n  text-indent: 3px;\n  cursor: pointer;\n}\n.rightContent .dataContent .optContent .searchValue {\n  width: 150px;\n  height: 26px;\n  font-size: 12px;\n  border: 2px solid #F3F3F3;\n  border-radius: 5px;\n  color: #000000;\n  text-indent: 3px;\n  margin-left: 10px;\n}\n.rightContent .dataContent .optContent .enterBtn {\n  width: 60px;\n  height: 26px;\n  background: #2B79D9;\n  color: #FFFFFF;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 28px;\n  font-size: 12px;\n  margin-left: 15px;\n  border: 1px #2B79D9 solid;\n  cursor: pointer;\n}\n.rightContent .dataContent .optContent .clear {\n  background: #FEFEFE !important;\n  color: #000000 !important;\n  border: 1px #807575 solid;\n}\n.rightContent .dataContent .optContent .dateValue {\n  width: 120px;\n  height: 25px;\n  font-size: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  color: #000000;\n  text-indent: 3px;\n}\n.rightContent .dataContent .optContent .lastBtn {\n  margin-left: auto;\n}\n.rightContent .dataContent .optContent .isDelete {\n  background-color: red!important;\n  border: 1px solid red!important;\n}\n.rightContent .dataContent .twoLine {\n  margin-top: 10px;\n}\n.rightContent .dataContent .twoLine .enterBtn2 {\n  width: 60px;\n  height: 26px;\n  background: #2B79D9;\n  color: #FFFFFF;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 28px;\n  font-size: 12px;\n  margin-right: 15px;\n  border: 1px #2B79D9 solid;\n  cursor: pointer;\n}\n.rightContent .dataContent table {\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 10px;\n  margin-bottom: 50px;\n  font-size: 12px;\n}\n.rightContent .dataContent table tr th {\n  background: #FAFAFA;\n  border: 0.5px solid #F0F0F0;\n  height: 40px;\n  line-height: 40px;\n  text-align: left;\n  text-indent: 25px;\n}\n.rightContent .dataContent table tr td {\n  border: 0.5px solid #F0F0F0;\n  height: 35px;\n  line-height: 35px;\n  text-indent: 25px;\n}\n.rightContent .dataContent table tr .deleteFlag {\n  color: #e4393c;\n}\n.rightContent .dataContent table tr .showInput {\n  display: block;\n}\n.rightContent .dataContent table tr .hideInput {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLeftMenu = function (_Component) {
    _inherits(CommonLeftMenu, _Component);

    function CommonLeftMenu() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, CommonLeftMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = CommonLeftMenu.__proto__ || Object.getPrototypeOf(CommonLeftMenu)).call.apply(_ref, [this].concat(args))), _this2), _this2.toggleClass = function (e) {
            var _this = _this2;
            if (e.target.nodeName == 'UL' || e.target.nodeName == 'LI' || e.target.parentNode.classList.contains('active')) {
                return;
            }
            _this.addClass(e.target.parentNode.parentNode, 'active');
            e.target.classList.add('active');
        }, _this2.addClass = function (obj, className) {
            if (!obj || !className || obj.children.length < 1) {
                console.error('参数问题!');
                return;
            }
            var lis = obj.querySelectorAll('li');
            for (var i = 0; i < lis.length; i++) {
                if (lis[i].classList.contains(className)) {
                    lis[i].classList.remove(className);
                }
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(CommonLeftMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (document.querySelector('.Allmenu')) {
                var num = location.pathname == '/index' ? 0 : location.pathname == '/warehousing' ? 1 : location.pathname == '/outStock' ? 2 : location.pathname == '/stockHistory' ? 3 : '';
                if (!document.querySelector('.Allmenu').querySelectorAll('li')[num].classList.contains('active')) document.querySelector('.Allmenu').querySelectorAll('li')[num].classList.add('active');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'commonLeftMenu' },
                _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        '\u94F6\u5E97\u5E93\u5B58\u7BA1\u7406\u7CFB\u7EDF'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Allmenu' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'menu', onClick: this.toggleClass.bind(this) },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/index' },
                                '\u5168\u90E8\u5E93\u5B58'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/warehousing' },
                                '\u5546\u54C1\u5165\u5E93'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/outStock' },
                                '\u5546\u54C1\u51FA\u5E93'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/stockHistory' },
                                '\u5546\u54C1\u51FA\u5E93\u8BB0\u5F55'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return CommonLeftMenu;
}(_react.Component);

var _default = CommonLeftMenu;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(CommonLeftMenu, 'CommonLeftMenu', '/Users/yuhao/Documents/project_code/code/react-code/src/component/commonLeftMenu.js');
    reactHotLoader.register(_default, 'default', '/Users/yuhao/Documents/project_code/code/react-code/src/component/commonLeftMenu.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".commonLeftMenu {\n  position: absolute;\n  left: 0;\n  top: 50px;\n  bottom: 0;\n  width: 200px;\n  text-align: center;\n  background-color: #323340;\n}\n.commonLeftMenu .title {\n  padding: 20px 0;\n  color: #FFF;\n}\n.commonLeftMenu .Allmenu {\n  position: absolute;\n  top: 60px;\n  bottom: 0;\n  width: 100%;\n  background-color: #323340;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.commonLeftMenu .Allmenu ul {\n  margin-top: 20px;\n}\n.commonLeftMenu .Allmenu ul li {\n  height: 40px;\n  font-size: 18px;\n  line-height: 40px;\n  margin-bottom: 15px;\n  padding: 5px 0;\n}\n.commonLeftMenu .Allmenu ul li a {\n  color: #87888f;\n  text-decoration: none;\n  display: block;\n  width: 100%;\n}\n.commonLeftMenu .active {\n  background-color: #0077fb !important;\n}\n.commonLeftMenu .active a {\n  color: #FFF !important;\n}\n.navHeader {\n  height: 50px;\n  width: 100%;\n  background-color: #0077fb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n.navHeader .navLeft {\n  margin-left: 30px;\n  color: #FFFFFF;\n}\n.navHeader .navLeft span {\n  display: inline-block;\n}\n.navHeader .navLeft span:first-child {\n  width: 80px;\n  height: 30px;\n  line-height: 27px;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.navHeader .navLeft span:last-child {\n  width: 120px;\n  height: 20px;\n  line-height: 25px;\n  font-size: 14px;\n  margin-left: 5px;\n  padding-left: 5px;\n  border-left: 1px solid #FFFFFF;\n}\n.navHeader .navRight {\n  margin-right: 40px;\n  color: #FFFFFF;\n}\n.navHeader .navRight span {\n  display: inline-block;\n  width: 80px;\n  height: 20px;\n  font-size: 14px;\n}\n.navHeader .navRight i {\n  display: inline-block;\n  position: absolute;\n  right: 22px;\n  top: 15px;\n  width: 22px;\n  height: 22px;\n  background: url('/dist/images/arrow.png') center;\n  background-size: 22px 22px;\n}\n.navHeader .userMask {\n  position: absolute;\n  right: 22px;\n  top: 40px;\n  width: 80px;\n  height: 30px;\n  background: #FFFFFF;\n  z-index: 999;\n  border: 1px solid #F3F3F3;\n  border-radius: 3px;\n}\n.navHeader .userMask li {\n  list-style: none;\n  text-align: center;\n  line-height: 30px;\n  color: #A6A6A6;\n}\n.navHeader .userMask:after {\n  border: 7px solid transparent;\n  border-bottom-color: #fff;\n  top: -14px;\n  right: 25px;\n  left: auto;\n  position: absolute;\n  content: \"\";\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navHeader = function (_Component) {
    _inherits(navHeader, _Component);

    function navHeader(props) {
        _classCallCheck(this, navHeader);

        var _this2 = _possibleConstructorReturn(this, (navHeader.__proto__ || Object.getPrototypeOf(navHeader)).call(this, props));

        _this2.state = {
            userMask: false
        };
        return _this2;
    }

    _createClass(navHeader, [{
        key: 'setCookie',
        value: function setCookie(cname, cvalue, exdays, win) {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            win.cookie = cname + "=" + cvalue + "; " + expires;
        }
    }, {
        key: 'showHide',
        value: function showHide() {
            this.setState({
                userMask: !this.state.userMask
            });
        }
    }, {
        key: 'logout',
        value: function logout(e) {
            this.setCookie("JSESSION", "", -1, e.target.ownerDocument);
            window.location.href = '/';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            return _react2.default.createElement(
                'header',
                { className: 'navHeader' },
                _react2.default.createElement(
                    'div',
                    { className: 'navLeft' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u6709\u94B1\u91D1\u5E97'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u5728\u7EBF\u5E93\u5B58\u7BA1\u7406\u7CFB\u7EDF'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'navRight' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u5E93\u5B58\u7BA1\u7406\u5458'
                    ),
                    _react2.default.createElement('i', { onClick: _this.showHide.bind(_this) })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'userMask', style: { display: _this.state.userMask ? 'block' : 'none' } },
                    _react2.default.createElement(
                        'li',
                        { onClick: _this.logout.bind(_this) },
                        '\u767B\u51FA'
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return navHeader;
}(_react.Component);

var _default = navHeader;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(navHeader, 'navHeader', '/Users/yuhao/Documents/project_code/code/react-code/src/component/header.js');
    reactHotLoader.register(_default, 'default', '/Users/yuhao/Documents/project_code/code/react-code/src/component/header.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AJAX = __webpack_require__(59);

var AJAX = _interopRequireWildcard(_AJAX);

var _utils = __webpack_require__(60);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonContent = function (_Component) {
    _inherits(CommonContent, _Component);

    function CommonContent() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, CommonContent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = CommonContent.__proto__ || Object.getPrototypeOf(CommonContent)).call.apply(_ref, [this].concat(args))), _this2), _this2.success = function (res) {
            var _this = _this2;
            res = JSON.parse(res);
            if (res.msg == '身份失效') {
                window.location.href = '/';
            }
            if (res.msg == '删除成功') {
                if (_this.props.deleteFlag) {
                    _this.props.selectDelete();
                }
                _this.props.getData();
                alert('数据删除成功!');
            } else {
                alert(res.msg);
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(CommonContent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;
            _this.setState({
                deleteFlag: this.props.deleteFlag ? this.props.deleteFlag : false
            });
            if (location.pathname == '/warehousing') {
                _this.props.onRefFn(_this);
            }
        }
    }, {
        key: 'deleteClick',
        value: function deleteClick(e) {
            var _this = this;
            var deleteId = event.target.parentNode.id;
            _this.delete(deleteId);
        }
    }, {
        key: 'isConfirm',
        value: function isConfirm(e) {
            var _this = this;
            if (event.target.className != 'deleteFlag') {
                return;
            }
            var isStatus = confirm('确认删除?');
            if (isStatus) {
                _this.deleteClick();
            }
        }
    }, {
        key: 'delete',
        value: function _delete(param) {
            var deleteId = '';
            if (param instanceof Array) {
                for (var i = 0; i < param.length; i++) {
                    deleteId += i == 0 ? param[i] : ',' + param[i];
                }
            } else {
                deleteId = param;
            }
            var fromData = new FormData();
            fromData.append('ids', deleteId);
            var header = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX('http://106.12.194.98/api/goods/store/delete', 'POST', fromData, header, this.success, this.error);
        }
    }, {
        key: 'error',
        value: function error(res) {
            alert(res.msg);
        }
    }, {
        key: 'checked',
        value: function checked(e) {
            e.target.parentNode.parentNode.classList.add('delete');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _this = this;
            return _react2.default.createElement(
                'table',
                { className: 'data' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            { className: _this.props.deleteFlag ? 'showInput' : 'hideInput' },
                            '\u9009\u62E9'
                        ),
                        _this.props.HEAD.length > 0 && _this.props.HEAD.map(function (item, index) {
                            return _react2.default.createElement(
                                'th',
                                null,
                                item.title
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _this.props.CONTENT.length > 0 && _this.props.CONTENT.map(function (item, index) {
                        return _react2.default.createElement(
                            'tr',
                            { id: item.id },
                            _react2.default.createElement(
                                'td',
                                { className: _this.props.deleteFlag ? 'showInput' : 'hideInput' },
                                _react2.default.createElement('input', { type: 'checkbox', onChange: _this.checked.bind(_this) })
                            ),
                            _this.props.HEAD.map(function (v, i) {
                                if (v.name == 'create_time') {
                                    var date = new Date(item[v.name] * 1000);
                                    var time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                                }
                                if (v.title == '商品图片') {
                                    var imgURL = item[v.name] && item[v.name].length > 0 ? item[v.name][0] : false;
                                }
                                return _react2.default.createElement(
                                    'td',
                                    { className: v.title == '操作' ? 'deleteFlag' : '', onClick: _this.isConfirm.bind(_this) },
                                    v.name == 'create_time' ? time : v.title == '操作' && !_this3.props.deleteFlag ? v.name : v.title == '商品图片' ? _react2.default.createElement(
                                        'a',
                                        { target: '_blank', href: imgURL ? imgURL : '' },
                                        imgURL ? item.goods_name + '图片' : '无商品图片'
                                    ) : item[v.name]
                                );
                            })
                        );
                    })
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return CommonContent;
}(_react.Component);

var _default = CommonContent;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(CommonContent, 'CommonContent', '/Users/yuhao/Documents/project_code/code/react-code/src/component/commonContent.js');
    reactHotLoader.register(_default, 'default', '/Users/yuhao/Documents/project_code/code/react-code/src/component/commonContent.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

__webpack_require__(69);

var _AJAX = __webpack_require__(59);

var AJAX = _interopRequireWildcard(_AJAX);

var _utils = __webpack_require__(60);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageFooter = function (_Component) {
    _inherits(pageFooter, _Component);

    function pageFooter(props) {
        _classCallCheck(this, pageFooter);

        var _this2 = _possibleConstructorReturn(this, (pageFooter.__proto__ || Object.getPrototypeOf(pageFooter)).call(this, props));

        _this2.state = {
            currentPage: _this2.props.CONTENT.current_page,
            groupCount: 7,
            startPage: 1
        };
        return _this2;
    }

    _createClass(pageFooter, [{
        key: 'create',
        value: function create() {
            var last_page = this.props.CONTENT.last_page;
            var pages = [];
            if (last_page <= this.state.groupCount) {
                pages.push(_react2.default.createElement('li', { className: 'prev', onClick: this.goPrev.bind(this), key: 0 }));
                for (var i = 1; i <= last_page; i++) {
                    pages.push(_react2.default.createElement(
                        'li',
                        { onClick: this.goPage.bind(this, i), className: this.props.CONTENT.current_page == i ? "active" : "", key: i },
                        i
                    ));
                }
                pages.push(_react2.default.createElement('li', { className: 'next', onClick: this.goNext.bind(this), key: last_page + 1 }));
            } else {
                pages.push(_react2.default.createElement('li', { className: 'prev', onClick: this.goPrev.bind(this), key: 0 }));
                for (var i = this.state.startPage; i < this.state.startPage + this.state.groupCount; i++) {
                    pages.push(_react2.default.createElement(
                        'li',
                        { onClick: this.goPage.bind(this, i), className: this.props.CONTENT.current_page == i ? "active" : "", key: i },
                        i
                    ));
                }
                if (last_page - this.state.startPage > 7) {
                    pages.push(_react2.default.createElement(
                        'li',
                        { key: -1 },
                        '\xB7\xB7\xB7'
                    ));
                }
                pages.push(_react2.default.createElement(
                    'li',
                    { className: this.state.currentPage == i ? "active" : "", key: last_page, onClick: this.goPage.bind(this, last_page) },
                    last_page
                ));
                pages.push(_react2.default.createElement('li', { className: 'next', onClick: this.goNext.bind(this), key: last_page + 1 }));
            }

            return pages;
        }
    }, {
        key: 'goPage',
        value: function goPage(num) {
            debugger;
            var groupCount = this.state.groupCount;
            if (num % groupCount === 1 && this.props.CONTENT.last_page - num > this.state.groupCount) {
                this.setState({
                    startPage: num
                });
            }
            if (num % groupCount === 0) {
                this.setState({
                    startPage: num - groupCount + 1
                });
            }
            if (this.props.CONTENT.last_page - num < 1) {
                this.setState({
                    startPage: this.props.CONTENT.last_page - groupCount
                });
            }
            this.setState({
                currentPage: num
            });
            var url = this.props.CONTENT.last_page_url.match(/(\S*)page=/)[1];
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX(url + '?page=' + num, 'GET', false, head, this.props.isLogin, this.error);
        }
    }, {
        key: 'goPrev',
        value: function goPrev() {

            var groupCount = this.state.groupCount;
            if (this.props.CONTENT.current_page == 1) {
                return;
            }

            var num = this.state.currentPage - 1;
            if (!(num % groupCount)) {
                this.setState({
                    startPage: this.state.currentPage - groupCount
                });
            }
            if (this.props.CONTENT.last_page - this.state.currentPage == this.state.groupCount) {
                this.setState({
                    startPage: Math.floor(num / this.state.groupCount) * this.state.groupCount + 1
                });
            }
            this.setState({
                currentPage: num
            });
            var url = this.props.CONTENT.last_page_url.match(/(\S*)page=/)[1];
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX(url + '?page=' + num, 'GET', false, head, this.props.isLogin, this.error);
        }
    }, {
        key: 'goNext',
        value: function goNext() {
            debugger;
            var groupCount = this.state.groupCount;
            if (this.props.CONTENT.current_page == this.props.CONTENT.last_page) {
                return;
            }
            var num = this.props.CONTENT.current_page + 1;
            if (!(this.state.currentPage % groupCount) && this.props.CONTENT.last_page - this.state.currentPage > 1) {
                if (this.props.CONTENT.last_page - this.state.currentPage < this.state.groupCount) {
                    this.setState({
                        startPage: this.props.CONTENT.last_page - this.state.groupCount
                    });
                } else {
                    this.setState({
                        startPage: num
                    });
                }
            }
            this.setState({
                currentPage: num
            });
            var url = this.props.CONTENT.last_page_url.match(/(\S*)page=/)[1];
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            AJAX.AJAX(this.props.CONTENT.path + '?page=' + num, 'GET', false, head, this.props.isLogin, this.error);
        }
    }, {
        key: 'goText',
        value: function goText(e) {
            var target = e.target;
            if (target.value == '') {
                return;
            }
            var num = Number(target.value);
            if (num > this.props.CONTENT.last_page) {
                alert('当前页码数不能超过总页码数！');
                return;
            }
            if (this.props.CONTENT.last_page - num <= 7) {
                this.setState({
                    startPage: this.props.CONTENT.last_page - this.state.groupCount
                });
            } else {
                this.setState({
                    startPage: Math.floor(num / this.state.groupCount) * this.state.groupCount + 1
                });
            }

            this.goPage(num);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var Pages = this.create.bind(this)();
            return _react2.default.createElement(
                'footer',
                { className: 'pageFooter' },
                _react2.default.createElement(
                    'ul',
                    null,
                    Pages
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    '\u5171',
                    _this.props.CONTENT.last_page,
                    '\u9875'
                ),
                '\u7B2C\xA0',
                _react2.default.createElement('input', { onBlur: _this.goText.bind(_this) }),
                '\xA0\u9875'
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return pageFooter;
}(_react.Component);

var _default = pageFooter;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(pageFooter, 'pageFooter', '/Users/yuhao/Documents/project_code/code/react-code/src/component/footer.js');
    reactHotLoader.register(_default, 'default', '/Users/yuhao/Documents/project_code/code/react-code/src/component/footer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(70);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pageFooter {\n  -moz-user-select: none;\n  -o-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: #A6A6A6;\n}\n.pageFooter ul li {\n  float: left;\n  width: 25px;\n  height: 25px;\n  border: 2px solid #F3F3F3;\n  border-radius: 5px;\n  font-size: 12px;\n  text-align: center;\n  line-height: 25px;\n  margin-left: 5px;\n  color: #A6A6A6;\n  cursor: pointer;\n}\n.pageFooter ul .active {\n  background: #2A79D8 !important;\n  color: #FFFFFF !important;\n}\n.pageFooter ul .prev {\n  background: url('/dist/images/prev.png') center;\n  background-size: 20px 20px;\n}\n.pageFooter ul .next {\n  background: url('/dist/images/next.png') center;\n  background-size: 20px 20px;\n}\n.pageFooter span {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.pageFooter input {\n  width: 25px;\n  height: 25px;\n  border: 2px solid #F3F3F3;\n  border-radius: 5px;\n  color: #A6A6A6;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(72);

var _AJAX = __webpack_require__(59);

var AJAX = _interopRequireWildcard(_AJAX);

var _utils = __webpack_require__(60);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entry = function (_Component) {
    _inherits(Entry, _Component);

    function Entry() {
        _classCallCheck(this, Entry);

        var _this2 = _possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).call(this));

        _this2.successUpload = function (res) {
            var _this = _this2;
            res = JSON.parse(res);
            if (res.msg == '身份失效') {
                window.location.href = '/';
            }
            if (res.msg == '成功') {
                document.querySelector('#goods_images').value = res.data;
                _this.entryChange(document.querySelector('#goods_images'));
            } else {
                document.querySelector('#file_name').textContent = '上传图片';
            }
        };

        _this2.state = {
            currentDate: '',
            rownum: ''
        };
        return _this2;
    }

    _createClass(Entry, [{
        key: 'save',
        value: function save(elem) {
            //保存提交数据
            var _this = this;
            var tr = elem.parentNode;
            var fromData = new FormData();
            if (!_this.props.isOutStock) {
                fromData.append('supplier', tr.querySelector('#supplier').value);
                fromData.append('goods_name', tr.querySelector('#goods_name').value);
                fromData.append('goods_number', tr.querySelector('#goods_number').value);
                fromData.append('price', tr.querySelector('#price').value);
                fromData.append('weight', tr.querySelector('#weight').value);
                fromData.append('num', tr.querySelector('#num').value);
                fromData.append('weight_all', tr.querySelector('#weight_all').value);
                fromData.append('price_all', tr.querySelector('#price_all').value);
                //var params = 'supplier='+supplier+'&goods_name='+goods_name+'&goods_number='+goods_number+'&price='+price+'&weight='+weight+'&num='+num+'&weight_all='+weight_all+'&price_all='+price_all;
                var header = { head: 'Authorization', value: 'Bearer ' + utils.token };
                AJAX.AJAX('http://106.12.194.98/api/goods/add', 'POST', fromData, header, this.success, this.error);
                return;
            }
            if (_this.props.isOutStock) {
                fromData.append('customer', tr.querySelector('#customer').value);
                fromData.append('goods_number', tr.querySelector('#goods_number').value);
                fromData.append('current_price', tr.querySelector('#current_price').value);
                fromData.append('num', tr.querySelector('#num').value);
                fromData.append('price_all', tr.querySelector('#price_all').value);
                fromData.append('operator', tr.querySelector('#operator').value);
                fromData.append('goods_images', tr.querySelector('#goods_images').value);
                //var params = 'customer='+customer+'&num='+num+'&goods_number='+goods_number+'&current_price='+current_price+'&price_all='+price_all+'&operator='+operator+'&goods_images='+goods_images;
                var header = { head: 'Authorization', value: 'Bearer ' + utils.token };
                AJAX.AJAX('http://106.12.194.98/api/goods/reduce', 'POST', fromData, header, this.success, this.error);
            }
        }
    }, {
        key: 'success',
        value: function success(res) {
            //保存成功
            var _this = this;
            res = JSON.parse(res);
            if (res.msg == '身份失效') {
                window.location.href = '/';
            }
            if (res.msg == '入库成功') {
                var elem = document.querySelector('.save');
                var tds = elem.querySelectorAll('td');
                [].forEach.call(tds, function (item, index) {
                    if (item) {
                        if (index == 0) {
                            item.textContent = '已录入';
                            item.style.backgroundColor = '#005ae0';
                            item.style.color = '#fff';
                            item.parentNode.classList.remove('save');
                            item.parentNode.classList.add('fixed');
                        } else {
                            item.querySelector('input').disabled = true;
                        }
                    }
                });
                return;
            }
            if (res.msg == '出库成功') {
                var elem = document.querySelector('.save');
                var tds = elem.querySelectorAll('td');
                [].forEach.call(tds, function (item, index) {
                    if (item) {
                        if (index == 0) {
                            item.textContent = '已录入';
                            item.style.backgroundColor = '#005ae0';
                            item.style.color = '#fff';
                            item.parentNode.classList.remove('save');
                            item.parentNode.classList.add('fixed');
                        } else {
                            item.querySelector('input').disabled = true;
                        }
                    }
                });
                return;
            }
            if (res.msg.indexOf('成功') == -1) {
                if (res.msg.indexOf('查询不到') != -1) {
                    alert('第' + document.querySelector('.save').rowIndex + '条数据 [ 商品编号 ]' + res.msg);
                    return;
                }
                alert('第' + document.querySelector('.save').rowIndex + '条数据' + res.msg);
            }
        }
    }, {
        key: 'error',
        value: function error(res) {
            alert(res.msg);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            //页面初始化需要渲染的数据
            var _this = this;
            _this.getCurrentDate();
            if (document && document.querySelectorAll('.disabled')) {
                var elem = document.querySelectorAll('.disabled');
                for (var i = 0; i < elem.length; i++) {
                    elem[i].disabled = true;
                }
            }
        }
    }, {
        key: 'getCurrentDate',
        value: function getCurrentDate() {
            //获取当前时间
            var _this = this;
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            _this.setState({
                currentDate: year + '-' + month + '-' + day
            });
            return year + '-' + month + '-' + day;
        }
    }, {
        key: 'entryChange',
        value: function entryChange(e) {
            //表格录入数据逻辑
            var _this = this;
            if (e.target == undefined) {
                e.target = e;
            }
            if (e.target.nodeName != 'INPUT' || e.target.className == 'upload_file') {
                return;
            }
            _this.setState({
                rownum: e.target.parentNode.parentNode.rowIndex
            });
            _this.isShowSave(e.target); // 判断当前数据是否填满 满足提交条件
            if (!_this.props.isOutStock) {
                switch (e.target.id) {
                    case 'price':
                        _this.autoMerge(e.target, 'price');break;
                    case 'weight':
                        _this.autoMerge(e.target, 'weight');break;
                    case 'num':
                        _this.autoMerge(e.target, 'num');break;
                }
            }
        }
    }, {
        key: 'autoMerge',
        value: function autoMerge(elem, name) {
            //自动计算表格结果
            if (!elem || !name) {
                return;
            }
            var _this = this;
            var tr = elem.parentNode.parentNode;
            if (name == 'price') {
                if (tr.querySelector('#price').value == '') {
                    tr.querySelector('#price_all').value = '';
                    return;
                }
                if (tr.querySelector('#num').value == '') {
                    return;
                }
                var price = parseInt(tr.querySelector('#price').value);
                var weight_all = parseInt(tr.querySelector('#weight_all').value);
                var total = weight_all * price;
                tr.querySelector('#price_all').value = total;
                _this.isShowSave(tr.querySelector('#price_all'));
            }
            if (name == 'weight') {
                if (tr.querySelector('#weight').value == '') {
                    tr.querySelector('#weight_all').value = '';
                    tr.querySelector('#price_all').value = '';
                    return;
                }
                if (tr.querySelector('#num').value == '') {
                    return;
                }
                var weight = parseInt(tr.querySelector('#weight').value);
                var num = parseInt(tr.querySelector('#num').value);
                var total = weight * num;
                tr.querySelector('#weight_all').value = total;
                _this.isShowSave(tr.querySelector('#weight_all'));
                if (tr.querySelector('#price').value == '') {
                    return;
                }
                var price = parseInt(tr.querySelector('#price').value);
                var money = price * total;
                tr.querySelector('#price_all').value = money;
                _this.isShowSave(tr.querySelector('#weight_all'));
            }
            if (name == 'num') {
                if (tr.querySelector('#num').value == '') {
                    tr.querySelector('#weight_all').value = '';
                    tr.querySelector('#price_all').value = '';
                    return;
                }
                if (tr.querySelector('#weight').value == '') {
                    return;
                }
                var weight = parseInt(tr.querySelector('#weight').value);
                var num = parseInt(tr.querySelector('#num').value);
                var total = weight * num;
                tr.querySelector('#weight_all').value = total;
                if (tr.querySelector('#price').value == '') {
                    return;
                }
                var price = parseInt(tr.querySelector('#price').value);
                var money = price * total;
                tr.querySelector('#price_all').value = money;
                _this.isShowSave(tr.querySelector('#weight_all'));
            }
        }
    }, {
        key: 'isShowSave',
        value: function isShowSave(elem) {
            //效验当前行时候满足提交条件
            var _this = this;
            var tr = elem.parentNode.parentNode;
            var tds = tr.querySelectorAll('td');
            if (tr.classList.contains('save')) {
                return;
            }
            var isDone = false;
            for (var i = 1; i < tds.length; i++) {
                debugger;
                if (tds[i].querySelector('input').value == '' && tds[i].querySelector('input').id != 'goods_images' && tds[i].querySelector('input').className != 'upload_file') {
                    isDone = false;
                    tds[0].style.backgroundColor = '#fff';
                    return;
                } else {
                    isDone = true;
                }
            }
            if (isDone) {
                tds[0].parentNode.classList.add('save');
                setTimeout(function () {
                    if (document.querySelector('.save') && document.querySelector('.save').querySelector('#goods_images') && document.querySelector('.save').querySelector('#goods_images').value == '') {
                        var isImages = confirm('第' + document.querySelector('.save').rowIndex + '数据未上传商品图片,是否继续提交');
                        if (!isImages) {
                            return;
                        }
                    }
                    if (_this.state.rownum == document.querySelector('.save').rowIndex) {
                        var timer1 = setTimeout(function () {
                            _this.save(tds[0]);
                        }, 3000);
                    } else {
                        _this.save(tds[0]);
                    }
                }, 3000);
            }
        }
    }, {
        key: 'uploadClick',
        value: function uploadClick(e) {
            //代理触发上传图片input
            e.target.parentNode.querySelector('.upload_file').click();
        }
    }, {
        key: 'upload',
        value: function upload(e) {
            //图片上传 . 
            var _this = this;
            var fromData = new FormData();
            fromData.append('image', e.target.files[0]);
            var head = { head: 'Authorization', value: 'Bearer ' + utils.token };
            document.querySelector('#file_name').textContent = e.target.files[0].name;
            AJAX.AJAX('http://106.12.194.98/api/upload/image', "POST", fromData, head, this.successUpload, this.errorUpload);
        }
    }, {
        key: 'errorUpload',
        value: function errorUpload() {
            alert('上传失败!');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // 表示第一次渲染多少行空表格 (待录入数据)
            return _react2.default.createElement(
                'div',
                { className: 'entryContent' },
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement('div', { className: 'close', onClick: this.props.close }),
                    _react2.default.createElement(
                        'div',
                        { className: 'pageTitle' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            _this.props.isOutStock ? '商品库存 - 出库录入界面' : '商品库存 - 入库录入界面'
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        null,
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _this.props.HEAD.length > 0 && _this.props.HEAD.map(function (item, index) {
                                    return _react2.default.createElement(
                                        'th',
                                        null,
                                        item.title
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            arr.map(function (k, i) {
                                return _react2.default.createElement(
                                    'tr',
                                    { 'data-index': k, onChange: _this.entryChange.bind(_this) },
                                    _this.props.HEAD.length > 0 && _this.props.HEAD.map(function (item, index) {
                                        return item.title == '状态' ? _react2.default.createElement(
                                            'td',
                                            { style: { width: '60px', textAlign: 'centent' }, id: item.name },
                                            item.name
                                        ) : item.title == '日期' ? _react2.default.createElement(
                                            'td',
                                            null,
                                            _react2.default.createElement('input', { type: 'date', name: item.name, defaultValue: _this.state && _this.state.currentDate, id: item.name })
                                        ) : item.title == '总计克重(g)' || item.title == '总价($)' && !_this.props.isOutStock ? _react2.default.createElement(
                                            'td',
                                            null,
                                            _react2.default.createElement('input', { type: 'text', className: 'disabled', name: item.name, id: item.name })
                                        ) : item.title == '商品图片' ? _react2.default.createElement(
                                            'td',
                                            null,
                                            _react2.default.createElement('input', { type: 'file', onChange: _this.upload.bind(_this), style: { display: "none" }, className: 'upload_file' }),
                                            _react2.default.createElement('input', { type: 'text', name: item.name, id: item.name, style: { display: "none" } }),
                                            _react2.default.createElement(
                                                'span',
                                                { onClick: _this.uploadClick.bind(_this), id: 'file_name' },
                                                '\u4E0A\u4F20\u56FE\u7247'
                                            )
                                        ) : _react2.default.createElement(
                                            'td',
                                            null,
                                            _react2.default.createElement('input', { type: 'text', name: item.name, id: item.name })
                                        );
                                    })
                                );
                            })
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return Entry;
}(_react.Component);

var _default = Entry;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Entry, 'Entry', '/Users/yuhao/Documents/project_code/code/react-code/src/component/entry.js');
    reactHotLoader.register(_default, 'default', '/Users/yuhao/Documents/project_code/code/react-code/src/component/entry.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(73);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".entryContent {\n  position: fixed;\n  top: 10%;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 20px;\n  width: 83%;\n  height: 83%;\n}\n.entryContent .content {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n.entryContent .pageTitle {\n  text-align: center;\n  padding: 20px;\n  font-size: 18px;\n  color: #005ae0;\n}\n.entryContent .close {\n  background: url('/dist/images/close.png') no-repeat center center;\n  width: 25px;\n  height: 25px;\n  color: #e4393c;\n  padding: 8px;\n  padding-left: 2px;\n  text-align: center;\n  padding: 2px;\n  line-height: 20px;\n  position: fixed;\n  right: 35px;\n  background-size: 120%;\n}\n.entryContent input {\n  width: 100%;\n  border: none;\n  height: 30px;\n  font-size: 14px;\n}\n.entryContent span {\n  width: 100px;\n  overflow: hidden;\n  display: block;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  background-color: #eee;\n}\n.entryContent td {\n  font-size: 14px;\n  height: 30px!important;\n  line-height: initial!important;\n  text-indent: initial!important;\n  padding: 5px 10px;\n  text-align: center;\n  height: 60px;\n}\n.entryContent th {\n  text-align: center;\n  font-size: 14px;\n}\n.entryContent .footer_bth {\n  text-align: center;\n}\n.entryContent button {\n  margin: 5px 10px;\n  background-color: #005ae0;\n  color: #fff;\n  border: none;\n  padding: 5px 20px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })

});