(function (C6, C7) {
  'use strict';

  if (typeof module == "object" && typeof module.exports == "object") {
    module.exports = C6.document ? C7(C6, true) : function (C8) {
      if (C8.document) {
        return C7(C8);
      }
      throw new Error("jQuery requires a window with a document");
    };
  } else {
    C7(C6);
  }
})(typeof window != "undefined" ? window : this, function (C6, C7) {
  'use strict';

  function C8(Nx) {
    return typeof Nx == "function" && typeof Nx.nodeType != "number";
  }
  function C9(Nx) {
    return Nx != null && Nx === Nx.window;
  }
  var CC = [];
  var CX = C6.document;
  var CN = Object.getPrototypeOf;
  var Cl = CC.slice;
  var CO = CC.concat;
  var CB = CC.push;
  var CG = CC.indexOf;
  var Cb = {};
  var CT = Cb.toString;
  var Ci = Cb.hasOwnProperty;
  var Cu = Ci.toString;
  var CU = Cu.call(Object);
  var Cv = {};
  var CK = {
    type: true,
    src: true,
    noModule: true
  };
  function CE(Nx, Na, NS) {
    var Nd;
    var NL = (Na = Na || CX).createElement("script");
    NL.text = Nx;
    if (NS) {
      for (Nd in CK) {
        if (NS[Nd]) {
          NL[Nd] = NS[Nd];
        }
      }
    }
    Na.head.appendChild(NL).parentNode.removeChild(NL);
  }
  function Cq(Nx) {
    if (Nx == null) {
      return Nx + "";
    } else if (typeof Nx == "object" || typeof Nx == "function") {
      return Cb[CT.call(Nx)] || "object";
    } else {
      return typeof Nx;
    }
  }
  function CM(Nx, Na) {
    return new CM.fn.init(Nx, Na);
  }
  var CJ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function CR(Nx) {
    var Na = !!Nx && "length" in Nx && Nx.length;
    var NS = Cq(Nx);
    return !C8(Nx) && !C9(Nx) && (NS === "array" || Na === 0 || typeof Na == "number" && Na > 0 && Na - 1 in Nx);
  }
  CM.fn = CM.prototype = {
    jquery: "3.3.1",
    constructor: CM,
    length: 0,
    toArray: function () {
      return Cl.call(this);
    },
    get: function (Nx) {
      if (Nx == null) {
        return Cl.call(this);
      } else if (Nx < 0) {
        return this[Nx + this.length];
      } else {
        return this[Nx];
      }
    },
    pushStack: function (Nx) {
      Nx = CM.merge(this.constructor(), Nx);
      Nx.prevObject = this;
      return Nx;
    },
    each: function (Nx) {
      return CM.each(this, Nx);
    },
    map: function (Nx) {
      return this.pushStack(CM.map(this, function (Na, NS) {
        return Nx.call(Na, NS, Na);
      }));
    },
    slice: function () {
      return this.pushStack(Cl.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (Nx) {
      var Na = this.length;
      var Nx = +Nx + (Nx < 0 ? Na : 0);
      return this.pushStack(Nx >= 0 && Nx < Na ? [this[Nx]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: CB,
    sort: CC.sort,
    splice: CC.splice
  };
  CM.extend = CM.fn.extend = function () {
    var Nx;
    var Na;
    var NS;
    var Nd;
    var NL;
    var Nm = arguments[0] || {};
    var No = 1;
    var Nc = arguments.length;
    var NZ = false;
    if (typeof Nm == "boolean") {
      NZ = Nm;
      Nm = arguments[No] || {};
      No++;
    }
    if (typeof Nm != "object" && !C8(Nm)) {
      Nm = {};
    }
    if (No === Nc) {
      Nm = this;
      No--;
    }
    for (; No < Nc; No++) {
      if ((Nx = arguments[No]) != null) {
        for (Na in Nx) {
          NL = Nm[Na];
          if (Nm !== (NS = Nx[Na])) {
            if (NZ && NS && (CM.isPlainObject(NS) || (Nd = Array.isArray(NS)))) {
              NL = Nd ? (Nd = false, NL && Array.isArray(NL) ? NL : []) : NL && CM.isPlainObject(NL) ? NL : {};
              Nm[Na] = CM.extend(NZ, NL, NS);
            } else if (NS !== undefined) {
              Nm[Na] = NS;
            }
          }
        }
      }
    }
    return Nm;
  };
  CM.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function (Nx) {
      throw new Error(Nx);
    },
    noop: function () {},
    isPlainObject: function (Nx) {
      return !!Nx && CT.call(Nx) === "[object Object]" && (!(Nx = CN(Nx)) || typeof (Nx = Ci.call(Nx, "constructor") && Nx.constructor) == "function" && Cu.call(Nx) === CU);
    },
    isEmptyObject: function (Nx) {
      for (var Na in Nx) {
        return false;
      }
      return true;
    },
    globalEval: function (Nx) {
      CE(Nx);
    },
    each: function (Nx, Na) {
      var NS;
      var Nd = 0;
      if (CR(Nx)) {
        for (NS = Nx.length; Nd < NS && Na.call(Nx[Nd], Nd, Nx[Nd]) !== false; Nd++);
      } else {
        for (Nd in Nx) {
          if (Na.call(Nx[Nd], Nd, Nx[Nd]) === false) {
            break;
          }
        }
      }
      return Nx;
    },
    trim: function (Nx) {
      if (Nx == null) {
        return "";
      } else {
        return (Nx + "").replace(CJ, "");
      }
    },
    makeArray: function (Nx, Na) {
      Na = Na || [];
      if (Nx != null) {
        if (CR(Object(Nx))) {
          CM.merge(Na, typeof Nx == "string" ? [Nx] : Nx);
        } else {
          CB.call(Na, Nx);
        }
      }
      return Na;
    },
    inArray: function (Nx, Na, NS) {
      if (Na == null) {
        return -1;
      } else {
        return CG.call(Na, Nx, NS);
      }
    },
    merge: function (Nx, Na) {
      for (var NS = +Na.length, Nd = 0, NL = Nx.length; Nd < NS; Nd++) {
        Nx[NL++] = Na[Nd];
      }
      Nx.length = NL;
      return Nx;
    },
    grep: function (Nx, Na, NS) {
      var Nd = [];
      for (var NL = 0, Nm = Nx.length, No = !NS; NL < Nm; NL++) {
        if (!Na(Nx[NL], NL) != No) {
          Nd.push(Nx[NL]);
        }
      }
      return Nd;
    },
    map: function (Nx, Na, NS) {
      var Nd;
      var NL;
      var Nm = 0;
      var No = [];
      if (CR(Nx)) {
        for (Nd = Nx.length; Nm < Nd; Nm++) {
          if ((NL = Na(Nx[Nm], Nm, NS)) != null) {
            No.push(NL);
          }
        }
      } else {
        for (Nm in Nx) {
          if ((NL = Na(Nx[Nm], Nm, NS)) != null) {
            No.push(NL);
          }
        }
      }
      return CO.apply([], No);
    },
    guid: 1,
    support: Cv
  });
  if (typeof Symbol == "function") {
    CM.fn[Symbol.iterator] = CC[Symbol.iterator];
  }
  CM.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (Nx, Na) {
    Cb["[object " + Na + "]"] = Na.toLowerCase();
  });
  function Cs(Nx, Na, NS) {
    var Nd = [];
    var NL = NS !== undefined;
    while ((Nx = Nx[Na]) && Nx.nodeType !== 9) {
      if (Nx.nodeType === 1) {
        if (NL && CM(Nx).is(NS)) {
          break;
        }
        Nd.push(Nx);
      }
    }
    return Nd;
  }
  function Cw(Nx, Na) {
    var NS = [];
    for (; Nx; Nx = Nx.nextSibling) {
      if (Nx.nodeType === 1 && Nx !== Na) {
        NS.push(Nx);
      }
    }
    return NS;
  }
  var CC = function (Nx) {
    function Na(lk, O0, O1) {
      var O2 = "0x" + O0 - 65536;
      if (O2 != O2 || O1) {
        return O0;
      } else if (O2 < 0) {
        return String.fromCharCode(65536 + O2);
      } else {
        return String.fromCharCode(O2 >> 10 | 55296, O2 & 1023 | 56320);
      }
    }
    function NS(lk, O0) {
      if (O0) {
        if (lk === "\0") {
          return "�";
        } else {
          return lk.slice(0, -1) + "\\" + lk.charCodeAt(lk.length - 1).toString(16) + " ";
        }
      } else {
        return "\\" + lk;
      }
    }
    function Nd() {
      Nk();
    }
    var NL;
    var Nm;
    var No;
    var Nc;
    var NZ;
    var NF;
    var NV;
    var Nh;
    var NA;
    var NI;
    var Nr;
    var Nk;
    var l0;
    var l1;
    var l2;
    var l3;
    var l4;
    var l5;
    var l6;
    var l7 = "sizzle" + +new Date();
    var l8 = Nx.document;
    var l9 = 0;
    var lC = 0;
    var lX = lx();
    var lN = lx();
    var ll = lx();
    function lO(lk, O0) {
      if (lk === O0) {
        Nr = true;
      }
      return 0;
    }
    var lB = {}.hasOwnProperty;
    var lG = [];
    var lb = lG.pop;
    var lT = lG.push;
    var li = lG.push;
    var lu = lG.slice;
    function lU(lk, O0) {
      for (var O1 = 0, O2 = lk.length; O1 < O2; O1++) {
        if (lk[O1] === O0) {
          return O1;
        }
      }
      return -1;
    }
    var lv = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var lK = "[\\x20\\t\\r\\n\\f]";
    var lE = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
    var lq = "\\[" + lK + "*(" + lE + ")(?:" + lK + "*([*^$|!~]?=)" + lK + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + lE + "))|)" + lK + "*\\]";
    var lM = ":(" + lE + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + lq + ")*)|.*)\\)|)";
    var lJ = new RegExp(lK + "+", "g");
    var lR = new RegExp("^" + lK + "+|((?:^|[^\\\\])(?:\\\\.)*)" + lK + "+$", "g");
    var ls = new RegExp("^" + lK + "*," + lK + "*");
    var lw = new RegExp("^" + lK + "*([>+~]|" + lK + ")" + lK + "*");
    var lf = new RegExp("=" + lK + "*([^\\]'\"]*?)" + lK + "*\\]", "g");
    var lW = new RegExp(lM);
    var lP = new RegExp("^" + lE + "$");
    var ln = {
      ID: new RegExp("^#(" + lE + ")"),
      CLASS: new RegExp("^\\.(" + lE + ")"),
      TAG: new RegExp("^(" + lE + "|[*])"),
      ATTR: new RegExp("^" + lq),
      PSEUDO: new RegExp("^" + lM),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + lK + "*(even|odd|(([+-]|)(\\d*)n|)" + lK + "*(?:([+-]|)" + lK + "*(\\d+)|))" + lK + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + lv + ")$", "i"),
      needsContext: new RegExp("^" + lK + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + lK + "*((?:-\\d)?\\d*)" + lK + "*\\)|)(?=[^-]|$)", "i")
    };
    var ly = /^(?:input|select|textarea|button)$/i;
    var lD = /^h\d$/i;
    var lp = /^[^{]+\{\s*\[native \w/;
    var lQ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var lj = /[+~]/;
    var lY = new RegExp("\\\\([\\da-f]{1,6}" + lK + "?|(" + lK + ")|.)", "ig");
    var lz = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    var lg = lV(function (lk) {
      return lk.disabled === true && ("form" in lk || "label" in lk);
    }, {
      dir: "parentNode",
      next: "legend"
    });
    try {
      li.apply(lG = lu.call(l8.childNodes), l8.childNodes);
      lG[l8.childNodes.length].nodeType;
    } catch (lk) {
      li = {
        apply: lG.length ? function (O0, O1) {
          lT.apply(O0, lu.call(O1));
        } : function (O0, O1) {
          for (var O2 = O0.length, O3 = 0; O0[O2++] = O1[O3++];);
          O0.length = O2 - 1;
        }
      };
    }
    function lH(O0, O1, O2, O3) {
      var O4;
      var O5;
      var O6;
      var O7;
      var O8;
      var O9;
      var OC;
      var OX = O1 && O1.ownerDocument;
      var ON = O1 ? O1.nodeType : 9;
      O2 = O2 || [];
      if (typeof O0 != "string" || !O0 || ON !== 1 && ON !== 9 && ON !== 11) {
        return O2;
      }
      if (!O3 && ((O1 ? O1.ownerDocument || O1 : l8) !== l0 && Nk(O1), O1 = O1 || l0, l2)) {
        if (ON !== 11 && (O8 = lQ.exec(O0))) {
          if (O4 = O8[1]) {
            if (ON === 9) {
              if (!(O6 = O1.getElementById(O4))) {
                return O2;
              }
              if (O6.id === O4) {
                O2.push(O6);
                return O2;
              }
            } else if (OX && (O6 = OX.getElementById(O4)) && l6(O1, O6) && O6.id === O4) {
              O2.push(O6);
              return O2;
            }
          } else {
            if (O8[2]) {
              li.apply(O2, O1.getElementsByTagName(O0));
              return O2;
            }
            if ((O4 = O8[3]) && Nm.getElementsByClassName && O1.getElementsByClassName) {
              li.apply(O2, O1.getElementsByClassName(O4));
              return O2;
            }
          }
        }
        if (Nm.qsa && !ll[O0 + " "] && (!l3 || !l3.test(O0))) {
          if (ON !== 1) {
            OX = O1;
            OC = O0;
          } else if (O1.nodeName.toLowerCase() !== "object") {
            if (O7 = O1.getAttribute("id")) {
              O7 = O7.replace(lz, NS);
            } else {
              O1.setAttribute("id", O7 = l7);
            }
            O5 = (O9 = NF(O0)).length;
            while (O5--) {
              O9[O5] = "#" + O7 + " " + lF(O9[O5]);
            }
            OC = O9.join(",");
            OX = lj.test(O0) && lc(O1.parentNode) || O1;
          }
          if (OC) {
            try {
              li.apply(O2, OX.querySelectorAll(OC));
              return O2;
            } catch (Ol) {} finally {
              if (O7 === l7) {
                O1.removeAttribute("id");
              }
            }
          }
        }
      }
      return Nh(O0.replace(lR, "$1"), O1, O2, O3);
    }
    function lx() {
      var O0 = [];
      function O1(O2, O3) {
        if (O0.push(O2 + " ") > No.cacheLength) {
          delete O1[O0.shift()];
        }
        return O1[O2 + " "] = O3;
      }
      return O1;
    }
    function la(O0) {
      O0[l7] = true;
      return O0;
    }
    function lS(O0) {
      var O1 = l0.createElement("fieldset");
      try {
        return !!O0(O1);
      } catch (O2) {
        return false;
      } finally {
        if (O1.parentNode) {
          O1.parentNode.removeChild(O1);
        }
      }
    }
    function ld(O0, O1) {
      var O2 = O0.split("|");
      for (var O3 = O2.length; O3--;) {
        No.attrHandle[O2[O3]] = O1;
      }
    }
    function lL(O0, O1) {
      var O2 = O1 && O0;
      var O3 = O2 && O0.nodeType === 1 && O1.nodeType === 1 && O0.sourceIndex - O1.sourceIndex;
      if (O3) {
        return O3;
      }
      if (O2) {
        while (O2 = O2.nextSibling) {
          if (O2 === O1) {
            return -1;
          }
        }
      }
      if (O0) {
        return 1;
      } else {
        return -1;
      }
    }
    function lm(O0) {
      return function (O1) {
        if ("form" in O1) {
          if (O1.parentNode && O1.disabled === false) {
            if ("label" in O1) {
              if ("label" in O1.parentNode) {
                return O1.parentNode.disabled === O0;
              } else {
                return O1.disabled === O0;
              }
            } else {
              return O1.isDisabled === O0 || O1.isDisabled !== !O0 && lg(O1) === O0;
            }
          } else {
            return O1.disabled === O0;
          }
        } else {
          return "label" in O1 && O1.disabled === O0;
        }
      };
    }
    function lo(O0) {
      return la(function (O1) {
        O1 = +O1;
        return la(function (O2, O3) {
          var O4;
          var O5 = O0([], O2.length, O1);
          for (var O6 = O5.length; O6--;) {
            if (O2[O4 = O5[O6]]) {
              O2[O4] = !(O3[O4] = O2[O4]);
            }
          }
        });
      });
    }
    function lc(O0) {
      return O0 && O0.getElementsByTagName !== undefined && O0;
    }
    Nm = lH.support = {};
    NZ = lH.isXML = function (O0) {
      O0 = O0 && (O0.ownerDocument || O0).documentElement;
      return !!O0 && O0.nodeName !== "HTML";
    };
    Nk = lH.setDocument = function (O0) {
      var O0 = O0 ? O0.ownerDocument || O0 : l8;
      if (O0 !== l0 && O0.nodeType === 9 && O0.documentElement) {
        l1 = (l0 = O0).documentElement;
        l2 = !NZ(l0);
        if (l8 !== l0 && (O0 = l0.defaultView) && O0.top !== O0) {
          if (O0.addEventListener) {
            O0.addEventListener("unload", Nd, false);
          } else if (O0.attachEvent) {
            O0.attachEvent("onunload", Nd);
          }
        }
        Nm.attributes = lS(function (O1) {
          O1.className = "i";
          return !O1.getAttribute("className");
        });
        Nm.getElementsByTagName = lS(function (O1) {
          O1.appendChild(l0.createComment(""));
          return !O1.getElementsByTagName("*").length;
        });
        Nm.getElementsByClassName = lp.test(l0.getElementsByClassName);
        Nm.getById = lS(function (O1) {
          l1.appendChild(O1).id = l7;
          return !l0.getElementsByName || !l0.getElementsByName(l7).length;
        });
        if (Nm.getById) {
          No.filter.ID = function (O1) {
            var O2 = O1.replace(lY, Na);
            return function (O3) {
              return O3.getAttribute("id") === O2;
            };
          };
          No.find.ID = function (O1, O2) {
            if (O2.getElementById !== undefined && l2) {
              if (O2 = O2.getElementById(O1)) {
                return [O2];
              } else {
                return [];
              }
            }
          };
        } else {
          No.filter.ID = function (O1) {
            var O2 = O1.replace(lY, Na);
            return function (O3) {
              O3 = O3.getAttributeNode !== undefined && O3.getAttributeNode("id");
              return O3 && O3.value === O2;
            };
          };
          No.find.ID = function (O1, O2) {
            if (O2.getElementById !== undefined && l2) {
              var O3;
              var O4;
              var O5;
              var O6 = O2.getElementById(O1);
              if (O6) {
                if ((O3 = O6.getAttributeNode("id")) && O3.value === O1) {
                  return [O6];
                }
                O5 = O2.getElementsByName(O1);
                O4 = 0;
                while (O6 = O5[O4++]) {
                  if ((O3 = O6.getAttributeNode("id")) && O3.value === O1) {
                    return [O6];
                  }
                }
              }
              return [];
            }
          };
        }
        No.find.TAG = Nm.getElementsByTagName ? function (O1, O2) {
          if (O2.getElementsByTagName !== undefined) {
            return O2.getElementsByTagName(O1);
          } else if (Nm.qsa) {
            return O2.querySelectorAll(O1);
          } else {
            return undefined;
          }
        } : function (O1, O2) {
          var O3;
          var O4 = [];
          var O5 = 0;
          var O6 = O2.getElementsByTagName(O1);
          if (O1 !== "*") {
            return O6;
          }
          while (O3 = O6[O5++]) {
            if (O3.nodeType === 1) {
              O4.push(O3);
            }
          }
          return O4;
        };
        No.find.CLASS = Nm.getElementsByClassName && function (O1, O2) {
          if (O2.getElementsByClassName !== undefined && l2) {
            return O2.getElementsByClassName(O1);
          }
        };
        l4 = [];
        l3 = [];
        if (Nm.qsa = lp.test(l0.querySelectorAll)) {
          lS(function (O1) {
            l1.appendChild(O1).innerHTML = "<a id='" + l7 + "'></a><select id='" + l7 + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (O1.querySelectorAll("[msallowcapture^='']").length) {
              l3.push("[*^$]=" + lK + "*(?:''|\"\")");
            }
            if (!O1.querySelectorAll("[selected]").length) {
              l3.push("\\[" + lK + "*(?:value|" + lv + ")");
            }
            if (!O1.querySelectorAll("[id~=" + l7 + "-]").length) {
              l3.push("~=");
            }
            if (!O1.querySelectorAll(":checked").length) {
              l3.push(":checked");
            }
            if (!O1.querySelectorAll("a#" + l7 + "+*").length) {
              l3.push(".#.+[+~]");
            }
          });
          lS(function (O1) {
            O1.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var O2 = l0.createElement("input");
            O2.setAttribute("type", "hidden");
            O1.appendChild(O2).setAttribute("name", "D");
            if (O1.querySelectorAll("[name=d]").length) {
              l3.push("name" + lK + "*[*^$|!~]?=");
            }
            if (O1.querySelectorAll(":enabled").length !== 2) {
              l3.push(":enabled", ":disabled");
            }
            l1.appendChild(O1).disabled = true;
            if (O1.querySelectorAll(":disabled").length !== 2) {
              l3.push(":enabled", ":disabled");
            }
            O1.querySelectorAll("*,:x");
            l3.push(",.*:");
          });
        }
        if (Nm.matchesSelector = lp.test(l5 = l1.matches || l1.webkitMatchesSelector || l1.mozMatchesSelector || l1.oMatchesSelector || l1.msMatchesSelector)) {
          lS(function (O1) {
            Nm.disconnectedMatch = l5.call(O1, "*");
            l5.call(O1, "[s!='']:x");
            l4.push("!=", lM);
          });
        }
        l3 = l3.length && new RegExp(l3.join("|"));
        l4 = l4.length && new RegExp(l4.join("|"));
        O0 = lp.test(l1.compareDocumentPosition);
        l6 = O0 || lp.test(l1.contains) ? function (O1, O2) {
          var O3 = O1.nodeType === 9 ? O1.documentElement : O1;
          var O2 = O2 && O2.parentNode;
          return O1 === O2 || !!O2 && O2.nodeType === 1 && !!(O3.contains ? O3.contains(O2) : O1.compareDocumentPosition && O1.compareDocumentPosition(O2) & 16);
        } : function (O1, O2) {
          if (O2) {
            while (O2 = O2.parentNode) {
              if (O2 === O1) {
                return true;
              }
            }
          }
          return false;
        };
        lO = O0 ? function (O1, O2) {
          var O3;
          if (O1 === O2) {
            Nr = true;
            return 0;
          } else {
            return !O1.compareDocumentPosition - !O2.compareDocumentPosition || ((O3 = (O1.ownerDocument || O1) === (O2.ownerDocument || O2) ? O1.compareDocumentPosition(O2) : 1) & 1 || !Nm.sortDetached && O2.compareDocumentPosition(O1) === O3 ? O1 === l0 || O1.ownerDocument === l8 && l6(l8, O1) ? -1 : O2 === l0 || O2.ownerDocument === l8 && l6(l8, O2) ? 1 : NI ? lU(NI, O1) - lU(NI, O2) : 0 : O3 & 4 ? -1 : 1);
          }
        } : function (O1, O2) {
          if (O1 === O2) {
            Nr = true;
            return 0;
          }
          var O3;
          var O4 = 0;
          var O5 = O1.parentNode;
          var O6 = O2.parentNode;
          var O7 = [O1];
          var O8 = [O2];
          if (!O5 || !O6) {
            if (O1 === l0) {
              return -1;
            } else if (O2 === l0) {
              return 1;
            } else if (O5) {
              return -1;
            } else if (O6) {
              return 1;
            } else if (NI) {
              return lU(NI, O1) - lU(NI, O2);
            } else {
              return 0;
            }
          }
          if (O5 === O6) {
            return lL(O1, O2);
          }
          for (O3 = O1; O3 = O3.parentNode;) {
            O7.unshift(O3);
          }
          for (O3 = O2; O3 = O3.parentNode;) {
            O8.unshift(O3);
          }
          while (O7[O4] === O8[O4]) {
            O4++;
          }
          if (O4) {
            return lL(O7[O4], O8[O4]);
          } else if (O7[O4] === l8) {
            return -1;
          } else if (O8[O4] === l8) {
            return 1;
          } else {
            return 0;
          }
        };
      }
      return l0;
    };
    lH.matches = function (O0, O1) {
      return lH(O0, null, null, O1);
    };
    lH.matchesSelector = function (O0, O1) {
      if ((O0.ownerDocument || O0) !== l0) {
        Nk(O0);
      }
      O1 = O1.replace(lf, "='$1']");
      if (Nm.matchesSelector && l2 && !ll[O1 + " "] && (!l4 || !l4.test(O1)) && (!l3 || !l3.test(O1))) {
        try {
          var O2 = l5.call(O0, O1);
          if (O2 || Nm.disconnectedMatch || O0.document && O0.document.nodeType !== 11) {
            return O2;
          }
        } catch (O3) {}
      }
      return lH(O1, l0, null, [O0]).length > 0;
    };
    lH.contains = function (O0, O1) {
      if ((O0.ownerDocument || O0) !== l0) {
        Nk(O0);
      }
      return l6(O0, O1);
    };
    lH.attr = function (O0, O1) {
      if ((O0.ownerDocument || O0) !== l0) {
        Nk(O0);
      }
      var O2 = No.attrHandle[O1.toLowerCase()];
      var O2 = O2 && lB.call(No.attrHandle, O1.toLowerCase()) ? O2(O0, O1, !l2) : undefined;
      if (O2 !== undefined) {
        return O2;
      } else if (Nm.attributes || !l2) {
        return O0.getAttribute(O1);
      } else if ((O2 = O0.getAttributeNode(O1)) && O2.specified) {
        return O2.value;
      } else {
        return null;
      }
    };
    lH.escape = function (O0) {
      return (O0 + "").replace(lz, NS);
    };
    lH.error = function (O0) {
      throw new Error("Syntax error, unrecognized expression: " + O0);
    };
    lH.uniqueSort = function (O0) {
      var O1;
      var O2 = [];
      var O3 = 0;
      var O4 = 0;
      Nr = !Nm.detectDuplicates;
      NI = !Nm.sortStable && O0.slice(0);
      O0.sort(lO);
      if (Nr) {
        while (O1 = O0[O4++]) {
          if (O1 === O0[O4]) {
            O3 = O2.push(O4);
          }
        }
        while (O3--) {
          O0.splice(O2[O3], 1);
        }
      }
      NI = null;
      return O0;
    };
    Nc = lH.getText = function (O0) {
      var O1;
      var O2 = "";
      var O3 = 0;
      var O4 = O0.nodeType;
      if (O4) {
        if (O4 === 1 || O4 === 9 || O4 === 11) {
          if (typeof O0.textContent == "string") {
            return O0.textContent;
          }
          for (O0 = O0.firstChild; O0; O0 = O0.nextSibling) {
            O2 += Nc(O0);
          }
        } else if (O4 === 3 || O4 === 4) {
          return O0.nodeValue;
        }
      } else {
        while (O1 = O0[O3++]) {
          O2 += Nc(O1);
        }
      }
      return O2;
    };
    (No = lH.selectors = {
      cacheLength: 50,
      createPseudo: la,
      match: ln,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (O0) {
          O0[1] = O0[1].replace(lY, Na);
          O0[3] = (O0[3] || O0[4] || O0[5] || "").replace(lY, Na);
          if (O0[2] === "~=") {
            O0[3] = " " + O0[3] + " ";
          }
          return O0.slice(0, 4);
        },
        CHILD: function (O0) {
          O0[1] = O0[1].toLowerCase();
          if (O0[1].slice(0, 3) === "nth") {
            if (!O0[3]) {
              lH.error(O0[0]);
            }
            O0[4] = +(O0[4] ? O0[5] + (O0[6] || 1) : (O0[3] === "even" || O0[3] === "odd") * 2);
            O0[5] = +(O0[7] + O0[8] || O0[3] === "odd");
          } else if (O0[3]) {
            lH.error(O0[0]);
          }
          return O0;
        },
        PSEUDO: function (O0) {
          var O1;
          var O2 = !O0[6] && O0[2];
          if (ln.CHILD.test(O0[0])) {
            return null;
          } else {
            if (O0[3]) {
              O0[2] = O0[4] || O0[5] || "";
            } else if (O2 && lW.test(O2) && (O1 = (O1 = NF(O2, true)) && O2.indexOf(")", O2.length - O1) - O2.length)) {
              O0[0] = O0[0].slice(0, O1);
              O0[2] = O2.slice(0, O1);
            }
            return O0.slice(0, 3);
          }
        }
      },
      filter: {
        TAG: function (O0) {
          var O1 = O0.replace(lY, Na).toLowerCase();
          if (O0 === "*") {
            return function () {
              return true;
            };
          } else {
            return function (O2) {
              return O2.nodeName && O2.nodeName.toLowerCase() === O1;
            };
          }
        },
        CLASS: function (O0) {
          var O1 = lX[O0 + " "];
          return O1 || (O1 = new RegExp("(^|" + lK + ")" + O0 + "(" + lK + "|$)")) && lX(O0, function (O2) {
            return O1.test(typeof O2.className == "string" && O2.className || O2.getAttribute !== undefined && O2.getAttribute("class") || "");
          });
        },
        ATTR: function (O0, O1, O2) {
          return function (O3) {
            O3 = lH.attr(O3, O0);
            if (O3 == null) {
              return O1 === "!=";
            } else {
              return !O1 || (O3 += "", O1 === "=" ? O3 === O2 : O1 === "!=" ? O3 !== O2 : O1 === "^=" ? O2 && O3.indexOf(O2) === 0 : O1 === "*=" ? O2 && O3.indexOf(O2) > -1 : O1 === "$=" ? O2 && O3.slice(-O2.length) === O2 : O1 === "~=" ? (" " + O3.replace(lJ, " ") + " ").indexOf(O2) > -1 : O1 === "|=" && (O3 === O2 || O3.slice(0, O2.length + 1) === O2 + "-"));
            }
          };
        },
        CHILD: function (O0, O1, O2, O3, O4) {
          var O5 = O0.slice(0, 3) !== "nth";
          var O6 = O0.slice(-4) !== "last";
          var O7 = O1 === "of-type";
          if (O3 === 1 && O4 === 0) {
            return function (O8) {
              return !!O8.parentNode;
            };
          } else {
            return function (O8, O9, OC) {
              var OX;
              var ON;
              var Ol;
              var OO;
              var OB;
              var OG;
              var Ob = O5 != O6 ? "nextSibling" : "previousSibling";
              var OT = O8.parentNode;
              var Oi = O7 && O8.nodeName.toLowerCase();
              var Ou = !OC && !O7;
              var OU = false;
              if (OT) {
                if (O5) {
                  while (Ob) {
                    for (OO = O8; OO = OO[Ob];) {
                      if (O7 ? OO.nodeName.toLowerCase() === Oi : OO.nodeType === 1) {
                        return false;
                      }
                    }
                    OG = Ob = O0 === "only" && !OG && "nextSibling";
                  }
                  return true;
                }
                OG = [O6 ? OT.firstChild : OT.lastChild];
                if (O6 && Ou) {
                  OU = (OB = (OX = (ON = (Ol = (OO = OT)[l7] || (OO[l7] = {}))[OO.uniqueID] || (Ol[OO.uniqueID] = {}))[O0] || [])[0] === l9 && OX[1]) && OX[2];
                  OO = OB && OT.childNodes[OB];
                  while (OO = ++OB && OO && OO[Ob] || (OU = OB = 0, OG.pop())) {
                    if (OO.nodeType === 1 && ++OU && OO === O8) {
                      ON[O0] = [l9, OB, OU];
                      break;
                    }
                  }
                } else if ((OU = Ou ? OB = (OX = (ON = (Ol = (OO = O8)[l7] || (OO[l7] = {}))[OO.uniqueID] || (Ol[OO.uniqueID] = {}))[O0] || [])[0] === l9 && OX[1] : OU) === false) {
                  while ((OO = ++OB && OO && OO[Ob] || (OU = OB = 0, OG.pop())) && ((O7 ? OO.nodeName.toLowerCase() !== Oi : OO.nodeType !== 1) || !++OU || (Ou && ((ON = (Ol = OO[l7] ||= {})[OO.uniqueID] || (Ol[OO.uniqueID] = {}))[O0] = [l9, OU]), OO !== O8)));
                }
                return (OU -= O4) === O3 || OU % O3 == 0 && OU / O3 >= 0;
              }
            };
          }
        },
        PSEUDO: function (O0, O1) {
          var O2;
          var O3 = No.pseudos[O0] || No.setFilters[O0.toLowerCase()] || lH.error("unsupported pseudo: " + O0);
          if (O3[l7]) {
            return O3(O1);
          } else if (O3.length > 1) {
            O2 = [O0, O0, "", O1];
            if (No.setFilters.hasOwnProperty(O0.toLowerCase())) {
              return la(function (O4, O5) {
                var O6;
                var O7 = O3(O4, O1);
                for (var O8 = O7.length; O8--;) {
                  O4[O6 = lU(O4, O7[O8])] = !(O5[O6] = O7[O8]);
                }
              });
            } else {
              return function (O4) {
                return O3(O4, 0, O2);
              };
            }
          } else {
            return O3;
          }
        }
      },
      pseudos: {
        not: la(function (O0) {
          var O1 = [];
          var O2 = [];
          var O3 = NV(O0.replace(lR, "$1"));
          if (O3[l7]) {
            return la(function (O4, O5, O6, O7) {
              var O8;
              var O9 = O3(O4, null, O7, []);
              for (var OC = O4.length; OC--;) {
                if (O8 = O9[OC]) {
                  O4[OC] = !(O5[OC] = O8);
                }
              }
            });
          } else {
            return function (O4, O5, O6) {
              O1[0] = O4;
              O3(O1, null, O6, O2);
              O1[0] = null;
              return !O2.pop();
            };
          }
        }),
        has: la(function (O0) {
          return function (O1) {
            return lH(O0, O1).length > 0;
          };
        }),
        contains: la(function (O0) {
          O0 = O0.replace(lY, Na);
          return function (O1) {
            return (O1.textContent || O1.innerText || Nc(O1)).indexOf(O0) > -1;
          };
        }),
        lang: la(function (O0) {
          if (!lP.test(O0 || "")) {
            lH.error("unsupported lang: " + O0);
          }
          O0 = O0.replace(lY, Na).toLowerCase();
          return function (O1) {
            var O2;
            do {
              if (O2 = l2 ? O1.lang : O1.getAttribute("xml:lang") || O1.getAttribute("lang")) {
                return (O2 = O2.toLowerCase()) === O0 || O2.indexOf(O0 + "-") === 0;
              }
            } while ((O1 = O1.parentNode) && O1.nodeType === 1);
            return false;
          };
        }),
        target: function (O0) {
          var O1 = Nx.location && Nx.location.hash;
          return O1 && O1.slice(1) === O0.id;
        },
        root: function (O0) {
          return O0 === l1;
        },
        focus: function (O0) {
          return O0 === l0.activeElement && (!l0.hasFocus || l0.hasFocus()) && (!!O0.type || !!O0.href || !!~O0.tabIndex);
        },
        enabled: lm(false),
        disabled: lm(true),
        checked: function (O0) {
          var O1 = O0.nodeName.toLowerCase();
          return O1 === "input" && !!O0.checked || O1 === "option" && !!O0.selected;
        },
        selected: function (O0) {
          if (O0.parentNode) {
            O0.parentNode.selectedIndex;
          }
          return O0.selected === true;
        },
        empty: function (O0) {
          for (O0 = O0.firstChild; O0; O0 = O0.nextSibling) {
            if (O0.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function (O0) {
          return !No.pseudos.empty(O0);
        },
        header: function (O0) {
          return lD.test(O0.nodeName);
        },
        input: function (O0) {
          return ly.test(O0.nodeName);
        },
        button: function (O0) {
          var O1 = O0.nodeName.toLowerCase();
          return O1 === "input" && O0.type === "button" || O1 === "button";
        },
        text: function (O0) {
          return O0.nodeName.toLowerCase() === "input" && O0.type === "text" && ((O0 = O0.getAttribute("type")) == null || O0.toLowerCase() === "text");
        },
        first: lo(function () {
          return [0];
        }),
        last: lo(function (O0, O1) {
          return [O1 - 1];
        }),
        eq: lo(function (O0, O1, O2) {
          return [O2 < 0 ? O2 + O1 : O2];
        }),
        even: lo(function (O0, O1) {
          for (var O2 = 0; O2 < O1; O2 += 2) {
            O0.push(O2);
          }
          return O0;
        }),
        odd: lo(function (O0, O1) {
          for (var O2 = 1; O2 < O1; O2 += 2) {
            O0.push(O2);
          }
          return O0;
        }),
        lt: lo(function (O0, O1, O2) {
          for (var O3 = O2 < 0 ? O2 + O1 : O2; --O3 >= 0;) {
            O0.push(O3);
          }
          return O0;
        }),
        gt: lo(function (O0, O1, O2) {
          for (var O3 = O2 < 0 ? O2 + O1 : O2; ++O3 < O1;) {
            O0.push(O3);
          }
          return O0;
        })
      }
    }).pseudos.nth = No.pseudos.eq;
    for (NL in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      No.pseudos[NL] = function (O0) {
        return function (O1) {
          return O1.nodeName.toLowerCase() === "input" && O1.type === O0;
        };
      }(NL);
    }
    for (NL in {
      submit: true,
      reset: true
    }) {
      No.pseudos[NL] = function (O0) {
        return function (O1) {
          var O2 = O1.nodeName.toLowerCase();
          return (O2 === "input" || O2 === "button") && O1.type === O0;
        };
      }(NL);
    }
    function lZ() {}
    function lF(O0) {
      for (var O1 = 0, O2 = O0.length, O3 = ""; O1 < O2; O1++) {
        O3 += O0[O1].value;
      }
      return O3;
    }
    function lV(O0, O1, O2) {
      var O3 = O1.dir;
      var O4 = O1.next;
      var O5 = O4 || O3;
      var O6 = O2 && O5 === "parentNode";
      var O7 = lC++;
      if (O1.first) {
        return function (O8, O9, OC) {
          while (O8 = O8[O3]) {
            if (O8.nodeType === 1 || O6) {
              return O0(O8, O9, OC);
            }
          }
          return false;
        };
      } else {
        return function (O8, O9, OC) {
          var OX;
          var ON;
          var Ol = [l9, O7];
          if (OC) {
            while (O8 = O8[O3]) {
              if ((O8.nodeType === 1 || O6) && O0(O8, O9, OC)) {
                return true;
              }
            }
          } else {
            while (O8 = O8[O3]) {
              if (O8.nodeType === 1 || O6) {
                ON = (ON = O8[l7] ||= {})[O8.uniqueID] || (ON[O8.uniqueID] = {});
                if (O4 && O4 === O8.nodeName.toLowerCase()) {
                  O8 = O8[O3] || O8;
                } else {
                  if ((OX = ON[O5]) && OX[0] === l9 && OX[1] === O7) {
                    return Ol[2] = OX[2];
                  }
                  if ((ON[O5] = Ol)[2] = O0(O8, O9, OC)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
    }
    function lh(O0) {
      if (O0.length > 1) {
        return function (O1, O2, O3) {
          for (var O4 = O0.length; O4--;) {
            if (!O0[O4](O1, O2, O3)) {
              return false;
            }
          }
          return true;
        };
      } else {
        return O0[0];
      }
    }
    function lA(O0, O1, O2, O3, O4) {
      var O5;
      var O6 = [];
      for (var O7 = 0, O8 = O0.length, O9 = O1 != null; O7 < O8; O7++) {
        if (!!(O5 = O0[O7]) && (!O2 || !!O2(O5, O3, O4))) {
          O6.push(O5);
          if (O9) {
            O1.push(O7);
          }
        }
      }
      return O6;
    }
    function lI(O0, O1, O2, O3, O4, O5) {
      if (O3 && !O3[l7]) {
        O3 = lI(O3);
      }
      if (O4 && !O4[l7]) {
        O4 = lI(O4, O5);
      }
      return la(function (O6, O7, O8, O9) {
        var OC;
        var OX;
        var ON;
        var Ol = [];
        var OO = [];
        var OB = O7.length;
        var OG = O6 || function (Oi, Ou, OU) {
          for (var Ov = 0, OK = Ou.length; Ov < OK; Ov++) {
            lH(Oi, Ou[Ov], OU);
          }
          return OU;
        }(O1 || "*", O8.nodeType ? [O8] : O8, []);
        var Ob = !O0 || !O6 && O1 ? OG : lA(OG, Ol, O0, O8, O9);
        var OT = O2 ? O4 || (O6 ? O0 : OB || O3) ? [] : O7 : Ob;
        if (O2) {
          O2(Ob, OT, O8, O9);
        }
        if (O3) {
          OC = lA(OT, OO);
          O3(OC, [], O8, O9);
          OX = OC.length;
          while (OX--) {
            if (ON = OC[OX]) {
              OT[OO[OX]] = !(Ob[OO[OX]] = ON);
            }
          }
        }
        if (O6) {
          if (O4 || O0) {
            if (O4) {
              OC = [];
              OX = OT.length;
              while (OX--) {
                if (ON = OT[OX]) {
                  OC.push(Ob[OX] = ON);
                }
              }
              O4(null, OT = [], OC, O9);
            }
            for (OX = OT.length; OX--;) {
              if ((ON = OT[OX]) && (OC = O4 ? lU(O6, ON) : Ol[OX]) > -1) {
                O6[OC] = !(O7[OC] = ON);
              }
            }
          }
        } else {
          OT = lA(OT === O7 ? OT.splice(OB, OT.length) : OT);
          if (O4) {
            O4(null, O7, OT, O9);
          } else {
            li.apply(O7, OT);
          }
        }
      });
    }
    function lr(O0, O1) {
      function O2(O5, O6, O7, O8, O9) {
        var OC;
        var OX;
        var ON;
        var Ol = 0;
        var OO = "0";
        var OB = O5 && [];
        var OG = [];
        var Ob = NA;
        var OT = O5 || O4 && No.find.TAG("*", O9);
        var Oi = l9 += Ob == null ? 1 : Math.random() || 0.1;
        var Ou = OT.length;
        for (O9 && (NA = O6 === l0 || O6 || O9); OO !== Ou && (OC = OT[OO]) != null; OO++) {
          if (O4 && OC) {
            OX = 0;
            if (!O6 && OC.ownerDocument !== l0) {
              Nk(OC);
              O7 = !l2;
            }
            while (ON = O0[OX++]) {
              if (ON(OC, O6 || l0, O7)) {
                O8.push(OC);
                break;
              }
            }
            if (O9) {
              l9 = Oi;
            }
          }
          if (O3 && ((OC = !ON && OC) && Ol--, O5)) {
            OB.push(OC);
          }
        }
        Ol += OO;
        if (O3 && OO !== Ol) {
          for (OX = 0; ON = O1[OX++];) {
            ON(OB, OG, O6, O7);
          }
          if (O5) {
            if (Ol > 0) {
              while (OO--) {
                if (!OB[OO] && !OG[OO]) {
                  OG[OO] = lb.call(O8);
                }
              }
            }
            OG = lA(OG);
          }
          li.apply(O8, OG);
          if (O9 && !O5 && OG.length > 0 && Ol + O1.length > 1) {
            lH.uniqueSort(O8);
          }
        }
        if (O9) {
          l9 = Oi;
          NA = Ob;
        }
        return OB;
      }
      var O3 = O1.length > 0;
      var O4 = O0.length > 0;
      if (O3) {
        return la(O2);
      } else {
        return O2;
      }
    }
    lZ.prototype = No.filters = No.pseudos;
    No.setFilters = new lZ();
    NF = lH.tokenize = function (O0, O1) {
      var O2;
      var O3;
      var O4;
      var O5;
      var O6;
      var O7;
      var O8;
      var O9 = lN[O0 + " "];
      if (O9) {
        if (O1) {
          return 0;
        } else {
          return O9.slice(0);
        }
      }
      O6 = O0;
      O7 = [];
      O8 = No.preFilter;
      while (O6) {
        if (!O2 || !!(O3 = ls.exec(O6))) {
          if (O3) {
            O6 = O6.slice(O3[0].length) || O6;
          }
          O7.push(O4 = []);
        }
        O2 = false;
        if (O3 = lw.exec(O6)) {
          O2 = O3.shift();
          O4.push({
            value: O2,
            type: O3[0].replace(lR, " ")
          });
          O6 = O6.slice(O2.length);
        }
        for (O5 in No.filter) {
          if (!!(O3 = ln[O5].exec(O6)) && (!O8[O5] || !!(O3 = O8[O5](O3)))) {
            O2 = O3.shift();
            O4.push({
              value: O2,
              type: O5,
              matches: O3
            });
            O6 = O6.slice(O2.length);
          }
        }
        if (!O2) {
          break;
        }
      }
      if (O1) {
        return O6.length;
      } else if (O6) {
        return lH.error(O0);
      } else {
        return lN(O0, O7).slice(0);
      }
    };
    NV = lH.compile = function (O0, O1) {
      var O2;
      var O3 = [];
      var O4 = [];
      var O5 = ll[O0 + " "];
      if (!O5) {
        for (O2 = (O1 = O1 || NF(O0)).length; O2--;) {
          ((O5 = function O6(O7) {
            var O8;
            var O9;
            var OC;
            for (var OX = O7.length, ON = No.relative[O7[0].type], Ol = ON || No.relative[" "], OO = ON ? 1 : 0, OB = lV(function (OT) {
                return OT === O8;
              }, Ol, true), OG = lV(function (OT) {
                return lU(O8, OT) > -1;
              }, Ol, true), Ob = [function (OT, Oi, Ou) {
                OT = !ON && (Ou || Oi !== NA) || ((O8 = Oi).nodeType ? OB : OG)(OT, Oi, Ou);
                O8 = null;
                return OT;
              }]; OO < OX; OO++) {
              if (O9 = No.relative[O7[OO].type]) {
                Ob = [lV(lh(Ob), O9)];
              } else {
                if ((O9 = No.filter[O7[OO].type].apply(null, O7[OO].matches))[l7]) {
                  for (OC = ++OO; OC < OX && !No.relative[O7[OC].type]; OC++);
                  return lI(OO > 1 && lh(Ob), OO > 1 && lF(O7.slice(0, OO - 1).concat({
                    value: O7[OO - 2].type === " " ? "*" : ""
                  })).replace(lR, "$1"), O9, OO < OC && O6(O7.slice(OO, OC)), OC < OX && O6(O7 = O7.slice(OC)), OC < OX && lF(O7));
                }
                Ob.push(O9);
              }
            }
            return lh(Ob);
          }(O1[O2]))[l7] ? O3 : O4).push(O5);
        }
        (O5 = ll(O0, lr(O4, O3))).selector = O0;
      }
      return O5;
    };
    Nh = lH.select = function (O0, O1, O2, O3) {
      var O4;
      var O5;
      var O6;
      var O7;
      var O8;
      var O9 = typeof O0 == "function" && O0;
      var OC = !O3 && NF(O0 = O9.selector || O0);
      O2 = O2 || [];
      if (OC.length === 1) {
        if ((O5 = OC[0] = OC[0].slice(0)).length > 2 && (O6 = O5[0]).type === "ID" && O1.nodeType === 9 && l2 && No.relative[O5[1].type]) {
          if (!(O1 = (No.find.ID(O6.matches[0].replace(lY, Na), O1) || [])[0])) {
            return O2;
          }
          if (O9) {
            O1 = O1.parentNode;
          }
          O0 = O0.slice(O5.shift().value.length);
        }
        for (O4 = ln.needsContext.test(O0) ? 0 : O5.length; O4-- && (O6 = O5[O4], !No.relative[O7 = O6.type]);) {
          if ((O8 = No.find[O7]) && (O3 = O8(O6.matches[0].replace(lY, Na), lj.test(O5[0].type) && lc(O1.parentNode) || O1))) {
            O5.splice(O4, 1);
            if (O0 = O3.length && lF(O5)) {
              break;
            }
            li.apply(O2, O3);
            return O2;
          }
        }
      }
      (O9 || NV(O0, OC))(O3, O1, !l2, O2, !O1 || lj.test(O0) && lc(O1.parentNode) || O1);
      return O2;
    };
    Nm.sortStable = l7.split("").sort(lO).join("") === l7;
    Nm.detectDuplicates = !!Nr;
    Nk();
    Nm.sortDetached = lS(function (O0) {
      return O0.compareDocumentPosition(l0.createElement("fieldset")) & 1;
    });
    if (!lS(function (O0) {
      O0.innerHTML = "<a href='#'></a>";
      return O0.firstChild.getAttribute("href") === "#";
    })) {
      ld("type|href|height|width", function (O0, O1, O2) {
        if (!O2) {
          return O0.getAttribute(O1, O1.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!Nm.attributes || !lS(function (O0) {
      O0.innerHTML = "<input/>";
      O0.firstChild.setAttribute("value", "");
      return O0.firstChild.getAttribute("value") === "";
    })) {
      ld("value", function (O0, O1, O2) {
        if (!O2 && O0.nodeName.toLowerCase() === "input") {
          return O0.defaultValue;
        }
      });
    }
    if (!lS(function (O0) {
      return O0.getAttribute("disabled") == null;
    })) {
      ld(lv, function (O0, O1, O2) {
        if (!O2) {
          if (O0[O1] === true) {
            return O1.toLowerCase();
          } else if ((O2 = O0.getAttributeNode(O1)) && O2.specified) {
            return O2.value;
          } else {
            return null;
          }
        }
      });
    }
    return lH;
  }(C6);
  CM.find = CC;
  CM.expr = CC.selectors;
  CM.expr[":"] = CM.expr.pseudos;
  CM.uniqueSort = CM.unique = CC.uniqueSort;
  CM.text = CC.getText;
  CM.isXMLDoc = CC.isXML;
  CM.contains = CC.contains;
  CM.escapeSelector = CC.escape;
  var Cf = CM.expr.match.needsContext;
  function CW(Nx, Na) {
    return Nx.nodeName && Nx.nodeName.toLowerCase() === Na.toLowerCase();
  }
  var CP = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Cn(Nx, Na, NS) {
    if (C8(Na)) {
      return CM.grep(Nx, function (Nd, NL) {
        return !!Na.call(Nd, NL, Nd) !== NS;
      });
    } else if (Na.nodeType) {
      return CM.grep(Nx, function (Nd) {
        return Nd === Na !== NS;
      });
    } else if (typeof Na != "string") {
      return CM.grep(Nx, function (Nd) {
        return CG.call(Na, Nd) > -1 !== NS;
      });
    } else {
      return CM.filter(Na, Nx, NS);
    }
  }
  CM.filter = function (Nx, Na, NS) {
    var Nd = Na[0];
    if (NS) {
      Nx = ":not(" + Nx + ")";
    }
    if (Na.length === 1 && Nd.nodeType === 1) {
      if (CM.find.matchesSelector(Nd, Nx)) {
        return [Nd];
      } else {
        return [];
      }
    } else {
      return CM.find.matches(Nx, CM.grep(Na, function (NL) {
        return NL.nodeType === 1;
      }));
    }
  };
  CM.fn.extend({
    find: function (Nx) {
      var Na;
      var NS;
      var Nd = this.length;
      var NL = this;
      if (typeof Nx != "string") {
        return this.pushStack(CM(Nx).filter(function () {
          for (Na = 0; Na < Nd; Na++) {
            if (CM.contains(NL[Na], this)) {
              return true;
            }
          }
        }));
      }
      NS = this.pushStack([]);
      Na = 0;
      for (; Na < Nd; Na++) {
        CM.find(Nx, NL[Na], NS);
      }
      if (Nd > 1) {
        return CM.uniqueSort(NS);
      } else {
        return NS;
      }
    },
    filter: function (Nx) {
      return this.pushStack(Cn(this, Nx || [], false));
    },
    not: function (Nx) {
      return this.pushStack(Cn(this, Nx || [], true));
    },
    is: function (Nx) {
      return !!Cn(this, typeof Nx == "string" && Cf.test(Nx) ? CM(Nx) : Nx || [], false).length;
    }
  });
  var Cy;
  var CD = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (CM.fn.init = function (Nx, Na, NS) {
    if (Nx) {
      NS = NS || Cy;
      if (typeof Nx != "string") {
        if (Nx.nodeType) {
          this[0] = Nx;
          this.length = 1;
          return this;
        } else if (C8(Nx)) {
          if (NS.ready !== undefined) {
            return NS.ready(Nx);
          } else {
            return Nx(CM);
          }
        } else {
          return CM.makeArray(Nx, this);
        }
      }
      if (!(Nd = Nx[0] === "<" && Nx[Nx.length - 1] === ">" && Nx.length >= 3 ? [null, Nx, null] : CD.exec(Nx)) || !Nd[1] && Na) {
        return (!Na || Na.jquery ? Na || NS : this.constructor(Na)).find(Nx);
      }
      if (Nd[1]) {
        Na = Na instanceof CM ? Na[0] : Na;
        CM.merge(this, CM.parseHTML(Nd[1], Na && Na.nodeType ? Na.ownerDocument || Na : CX, true));
        if (CP.test(Nd[1]) && CM.isPlainObject(Na)) {
          for (var Nd in Na) {
            if (C8(this[Nd])) {
              this[Nd](Na[Nd]);
            } else {
              this.attr(Nd, Na[Nd]);
            }
          }
        }
      } else if (NS = CX.getElementById(Nd[2])) {
        this[0] = NS;
        this.length = 1;
      }
    }
    return this;
  }).prototype = CM.fn;
  Cy = CM(CX);
  var Cp = /^(?:parents|prev(?:Until|All))/;
  var CQ = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  function Cj(Nx, Na) {
    while ((Nx = Nx[Na]) && Nx.nodeType !== 1);
    return Nx;
  }
  CM.fn.extend({
    has: function (Nx) {
      var Na = CM(Nx, this);
      var NS = Na.length;
      return this.filter(function () {
        for (var Nd = 0; Nd < NS; Nd++) {
          if (CM.contains(this, Na[Nd])) {
            return true;
          }
        }
      });
    },
    closest: function (Nx, Na) {
      var NS;
      var Nd = 0;
      var NL = this.length;
      var Nm = [];
      var No = typeof Nx != "string" && CM(Nx);
      if (!Cf.test(Nx)) {
        for (; Nd < NL; Nd++) {
          for (NS = this[Nd]; NS && NS !== Na; NS = NS.parentNode) {
            if (NS.nodeType < 11 && (No ? No.index(NS) > -1 : NS.nodeType === 1 && CM.find.matchesSelector(NS, Nx))) {
              Nm.push(NS);
              break;
            }
          }
        }
      }
      return this.pushStack(Nm.length > 1 ? CM.uniqueSort(Nm) : Nm);
    },
    index: function (Nx) {
      if (Nx) {
        if (typeof Nx == "string") {
          return CG.call(CM(Nx), this[0]);
        } else {
          return CG.call(this, Nx.jquery ? Nx[0] : Nx);
        }
      } else if (this[0] && this[0].parentNode) {
        return this.first().prevAll().length;
      } else {
        return -1;
      }
    },
    add: function (Nx, Na) {
      return this.pushStack(CM.uniqueSort(CM.merge(this.get(), CM(Nx, Na))));
    },
    addBack: function (Nx) {
      return this.add(Nx == null ? this.prevObject : this.prevObject.filter(Nx));
    }
  });
  CM.each({
    parent: function (Nx) {
      Nx = Nx.parentNode;
      if (Nx && Nx.nodeType !== 11) {
        return Nx;
      } else {
        return null;
      }
    },
    parents: function (Nx) {
      return Cs(Nx, "parentNode");
    },
    parentsUntil: function (Nx, Na, NS) {
      return Cs(Nx, "parentNode", NS);
    },
    next: function (Nx) {
      return Cj(Nx, "nextSibling");
    },
    prev: function (Nx) {
      return Cj(Nx, "previousSibling");
    },
    nextAll: function (Nx) {
      return Cs(Nx, "nextSibling");
    },
    prevAll: function (Nx) {
      return Cs(Nx, "previousSibling");
    },
    nextUntil: function (Nx, Na, NS) {
      return Cs(Nx, "nextSibling", NS);
    },
    prevUntil: function (Nx, Na, NS) {
      return Cs(Nx, "previousSibling", NS);
    },
    siblings: function (Nx) {
      return Cw((Nx.parentNode || {}).firstChild, Nx);
    },
    children: function (Nx) {
      return Cw(Nx.firstChild);
    },
    contents: function (Nx) {
      if (CW(Nx, "iframe")) {
        return Nx.contentDocument;
      } else {
        if (CW(Nx, "template")) {
          Nx = Nx.content || Nx;
        }
        return CM.merge([], Nx.childNodes);
      }
    }
  }, function (Nx, Na) {
    CM.fn[Nx] = function (NS, Nd) {
      var NL = CM.map(this, Na, NS);
      if ((Nd = Nx.slice(-5) !== "Until" ? NS : Nd) && typeof Nd == "string") {
        NL = CM.filter(Nd, NL);
      }
      if (this.length > 1 && (CQ[Nx] || CM.uniqueSort(NL), Cp.test(Nx))) {
        NL.reverse();
      }
      return this.pushStack(NL);
    };
  });
  var CY = /[^\x20\t\r\n\f]+/g;
  function Cz(Nx) {
    return Nx;
  }
  function Cg(Nx) {
    throw Nx;
  }
  function CH(Nx, Na, NS, Nd) {
    var NL;
    try {
      if (Nx && C8(NL = Nx.promise)) {
        NL.call(Nx).done(Na).fail(NS);
      } else if (Nx && C8(NL = Nx.then)) {
        NL.call(Nx, Na, NS);
      } else {
        Na.apply(undefined, [Nx].slice(Nd));
      }
    } catch (Nm) {
      NS.apply(undefined, [Nm]);
    }
  }
  CM.Callbacks = function (Nx) {
    var Na;
    var NS;
    Nx = typeof Nx == "string" ? (Na = Nx, NS = {}, CM.each(Na.match(CY) || [], function (NA, NI) {
      NS[NI] = true;
    }), NS) : CM.extend({}, Nx);
    function Nd() {
      Nc = Nc || Nx.once;
      No = NL = true;
      for (; NF.length; NV = -1) {
        for (Nm = NF.shift(); ++NV < NZ.length;) {
          if (NZ[NV].apply(Nm[0], Nm[1]) === false && Nx.stopOnFalse) {
            NV = NZ.length;
            Nm = false;
          }
        }
      }
      if (!Nx.memory) {
        Nm = false;
      }
      NL = false;
      if (Nc) {
        NZ = Nm ? [] : "";
      }
    }
    var NL;
    var Nm;
    var No;
    var Nc;
    var NZ = [];
    var NF = [];
    var NV = -1;
    var Nh = {
      add: function () {
        if (NZ && (Nm && !NL && (NV = NZ.length - 1, NF.push(Nm)), function NA(NI) {
          CM.each(NI, function (Nr, Nk) {
            if (C8(Nk)) {
              if (!Nx.unique || !Nh.has(Nk)) {
                NZ.push(Nk);
              }
            } else if (Nk && Nk.length && Cq(Nk) !== "string") {
              NA(Nk);
            }
          });
        }(arguments), Nm) && !NL) {
          Nd();
        }
        return this;
      },
      remove: function () {
        CM.each(arguments, function (NA, NI) {
          for (var Nr; (Nr = CM.inArray(NI, NZ, Nr)) > -1;) {
            NZ.splice(Nr, 1);
            if (Nr <= NV) {
              NV--;
            }
          }
        });
        return this;
      },
      has: function (NA) {
        if (NA) {
          return CM.inArray(NA, NZ) > -1;
        } else {
          return NZ.length > 0;
        }
      },
      empty: function () {
        NZ = NZ && [];
        return this;
      },
      disable: function () {
        Nc = NF = [];
        NZ = Nm = "";
        return this;
      },
      disabled: function () {
        return !NZ;
      },
      lock: function () {
        Nc = NF = [];
        if (!Nm && !NL) {
          NZ = Nm = "";
        }
        return this;
      },
      locked: function () {
        return !!Nc;
      },
      fireWith: function (NA, NI) {
        if (!Nc && !(NI = [NA, (NI = NI || []).slice ? NI.slice() : NI], NF.push(NI), NL)) {
          Nd();
        }
        return this;
      },
      fire: function () {
        Nh.fireWith(this, arguments);
        return this;
      },
      fired: function () {
        return !!No;
      }
    };
    return Nh;
  };
  CM.extend({
    Deferred: function (Nx) {
      var Na = [["notify", "progress", CM.Callbacks("memory"), CM.Callbacks("memory"), 2], ["resolve", "done", CM.Callbacks("once memory"), CM.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", CM.Callbacks("once memory"), CM.Callbacks("once memory"), 1, "rejected"]];
      var NS = "pending";
      var Nd = {
        state: function () {
          return NS;
        },
        always: function () {
          NL.done(arguments).fail(arguments);
          return this;
        },
        catch: function (Nm) {
          return Nd.then(null, Nm);
        },
        pipe: function () {
          var Nm = arguments;
          return CM.Deferred(function (No) {
            CM.each(Na, function (Nc, NZ) {
              var NF = C8(Nm[NZ[4]]) && Nm[NZ[4]];
              NL[NZ[1]](function () {
                var NV = NF && NF.apply(this, arguments);
                if (NV && C8(NV.promise)) {
                  NV.promise().progress(No.notify).done(No.resolve).fail(No.reject);
                } else {
                  No[NZ[0] + "With"](this, NF ? [NV] : arguments);
                }
              });
            });
            Nm = null;
          }).promise();
        },
        then: function (Nm, No, Nc) {
          var NZ = 0;
          function NF(NV, Nh, NA, NI) {
            return function () {
              function Nr() {
                var l2;
                var l3;
                if (!(NV < NZ)) {
                  if ((l2 = NA.apply(Nk, l0)) === Nh.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  l3 = l2 && (typeof l2 == "object" || typeof l2 == "function") && l2.then;
                  if (C8(l3)) {
                    if (NI) {
                      l3.call(l2, NF(NZ, Nh, Cz, NI), NF(NZ, Nh, Cg, NI));
                    } else {
                      NZ++;
                      l3.call(l2, NF(NZ, Nh, Cz, NI), NF(NZ, Nh, Cg, NI), NF(NZ, Nh, Cz, Nh.notifyWith));
                    }
                  } else {
                    if (NA !== Cz) {
                      Nk = undefined;
                      l0 = [l2];
                    }
                    (NI || Nh.resolveWith)(Nk, l0);
                  }
                }
              }
              var Nk = this;
              var l0 = arguments;
              var l1 = NI ? Nr : function () {
                try {
                  Nr();
                } catch (l2) {
                  if (CM.Deferred.exceptionHook) {
                    CM.Deferred.exceptionHook(l2, l1.stackTrace);
                  }
                  if (NZ <= NV + 1) {
                    if (NA !== Cg) {
                      Nk = undefined;
                      l0 = [l2];
                    }
                    Nh.rejectWith(Nk, l0);
                  }
                }
              };
              if (NV) {
                l1();
              } else {
                if (CM.Deferred.getStackHook) {
                  l1.stackTrace = CM.Deferred.getStackHook();
                }
                C6.setTimeout(l1);
              }
            };
          }
          return CM.Deferred(function (NV) {
            Na[0][3].add(NF(0, NV, C8(Nc) ? Nc : Cz, NV.notifyWith));
            Na[1][3].add(NF(0, NV, C8(Nm) ? Nm : Cz));
            Na[2][3].add(NF(0, NV, C8(No) ? No : Cg));
          }).promise();
        },
        promise: function (Nm) {
          if (Nm != null) {
            return CM.extend(Nm, Nd);
          } else {
            return Nd;
          }
        }
      };
      var NL = {};
      CM.each(Na, function (Nm, No) {
        var Nc = No[2];
        var NZ = No[5];
        Nd[No[1]] = Nc.add;
        if (NZ) {
          Nc.add(function () {
            NS = NZ;
          }, Na[3 - Nm][2].disable, Na[3 - Nm][3].disable, Na[0][2].lock, Na[0][3].lock);
        }
        Nc.add(No[3].fire);
        NL[No[0]] = function () {
          NL[No[0] + "With"](this === NL ? undefined : this, arguments);
          return this;
        };
        NL[No[0] + "With"] = Nc.fireWith;
      });
      Nd.promise(NL);
      if (Nx) {
        Nx.call(NL, NL);
      }
      return NL;
    },
    when: function (Nx) {
      function Na(Nc) {
        return function (NZ) {
          NL[Nc] = this;
          Nm[Nc] = arguments.length > 1 ? Cl.call(arguments) : NZ;
          if (! --NS) {
            No.resolveWith(NL, Nm);
          }
        };
      }
      var NS = arguments.length;
      var Nd = NS;
      var NL = Array(Nd);
      var Nm = Cl.call(arguments);
      var No = CM.Deferred();
      if (NS <= 1 && (CH(Nx, No.done(Na(Nd)).resolve, No.reject, !NS), No.state() === "pending" || C8(Nm[Nd] && Nm[Nd].then))) {
        return No.then();
      }
      while (Nd--) {
        CH(Nm[Nd], Na(Nd), No.reject);
      }
      return No.promise();
    }
  });
  var Cx = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  CM.Deferred.exceptionHook = function (Nx, Na) {
    if (C6.console && C6.console.warn && Nx && Cx.test(Nx.name)) {
      C6.console.warn("jQuery.Deferred exception: " + Nx.message, Nx.stack, Na);
    }
  };
  CM.readyException = function (Nx) {
    C6.setTimeout(function () {
      throw Nx;
    });
  };
  var Ca = CM.Deferred();
  function CS() {
    CX.removeEventListener("DOMContentLoaded", CS);
    C6.removeEventListener("load", CS);
    CM.ready();
  }
  CM.fn.ready = function (Nx) {
    Ca.then(Nx).catch(function (Na) {
      CM.readyException(Na);
    });
    return this;
  };
  CM.extend({
    isReady: false,
    readyWait: 1,
    ready: function (Nx) {
      if (!(Nx === true ? --CM.readyWait : CM.isReady) && ((CM.isReady = true) === Nx || !(--CM.readyWait > 0))) {
        Ca.resolveWith(CX, [CM]);
      }
    }
  });
  CM.ready.then = Ca.then;
  if (CX.readyState === "complete" || CX.readyState !== "loading" && !CX.documentElement.doScroll) {
    C6.setTimeout(CM.ready);
  } else {
    CX.addEventListener("DOMContentLoaded", CS);
    C6.addEventListener("load", CS);
  }
  function Cd(Nx, Na, NS, Nd, NL, Nm, No) {
    var Nc = 0;
    var NZ = Nx.length;
    var NF = NS == null;
    if (Cq(NS) === "object") {
      NL = true;
      for (Nc in NS) {
        Cd(Nx, Na, Nc, NS[Nc], true, Nm, No);
      }
    } else if (Nd !== undefined && (NL = true, C8(Nd) || (No = true), Na = NF ? No ? (Na.call(Nx, Nd), null) : (NF = Na, function (NV, Nh, NA) {
      return NF.call(CM(NV), NA);
    }) : Na)) {
      for (; Nc < NZ; Nc++) {
        Na(Nx[Nc], NS, No ? Nd : Nd.call(Nx[Nc], Nc, Na(Nx[Nc], NS)));
      }
    }
    if (NL) {
      return Nx;
    } else if (NF) {
      return Na.call(Nx);
    } else if (NZ) {
      return Na(Nx[0], NS);
    } else {
      return Nm;
    }
  }
  var CL = /^-ms-/;
  var Cm = /-([a-z])/g;
  function Co(Nx, Na) {
    return Na.toUpperCase();
  }
  function Cc(Nx) {
    return Nx.replace(CL, "ms-").replace(Cm, Co);
  }
  function CZ(Nx) {
    return Nx.nodeType === 1 || Nx.nodeType === 9 || !+Nx.nodeType;
  }
  function CF() {
    this.expando = CM.expando + CF.uid++;
  }
  CF.uid = 1;
  CF.prototype = {
    cache: function (Nx) {
      var Na = Nx[this.expando];
      if (!Na) {
        Na = {};
        if (CZ(Nx)) {
          if (Nx.nodeType) {
            Nx[this.expando] = Na;
          } else {
            Object.defineProperty(Nx, this.expando, {
              value: Na,
              configurable: true
            });
          }
        }
      }
      return Na;
    },
    set: function (Nx, Na, NS) {
      var Nd;
      var NL = this.cache(Nx);
      if (typeof Na == "string") {
        NL[Cc(Na)] = NS;
      } else {
        for (Nd in Na) {
          NL[Cc(Nd)] = Na[Nd];
        }
      }
      return NL;
    },
    get: function (Nx, Na) {
      if (Na === undefined) {
        return this.cache(Nx);
      } else {
        return Nx[this.expando] && Nx[this.expando][Cc(Na)];
      }
    },
    access: function (Nx, Na, NS) {
      if (Na === undefined || Na && typeof Na == "string" && NS === undefined) {
        return this.get(Nx, Na);
      } else {
        this.set(Nx, Na, NS);
        if (NS !== undefined) {
          return NS;
        } else {
          return Na;
        }
      }
    },
    remove: function (Nx, Na) {
      var NS;
      var Nd = Nx[this.expando];
      if (Nd !== undefined) {
        if (Na !== undefined) {
          NS = (Na = Array.isArray(Na) ? Na.map(Cc) : (Na = Cc(Na)) in Nd ? [Na] : Na.match(CY) || []).length;
          while (NS--) {
            delete Nd[Na[NS]];
          }
        }
        if (Na === undefined || !!CM.isEmptyObject(Nd)) {
          if (Nx.nodeType) {
            Nx[this.expando] = undefined;
          } else {
            delete Nx[this.expando];
          }
        }
      }
    },
    hasData: function (Nx) {
      Nx = Nx[this.expando];
      return Nx !== undefined && !CM.isEmptyObject(Nx);
    }
  };
  var CV = new CF();
  var Ch = new CF();
  var CA = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var CI = /[A-Z]/g;
  function Cr(Nx, Na, NS) {
    var Nd;
    var NL;
    if (NS === undefined && Nx.nodeType === 1) {
      Nd = "data-" + Na.replace(CI, "-$&").toLowerCase();
      if (typeof (NS = Nx.getAttribute(Nd)) == "string") {
        try {
          NS = (NL = NS) === "true" || NL !== "false" && (NL === "null" ? null : NL === +NL + "" ? +NL : CA.test(NL) ? JSON.parse(NL) : NL);
        } catch (Nm) {}
        Ch.set(Nx, Na, NS);
      } else {
        NS = undefined;
      }
    }
    return NS;
  }
  CM.extend({
    hasData: function (Nx) {
      return Ch.hasData(Nx) || CV.hasData(Nx);
    },
    data: function (Nx, Na, NS) {
      return Ch.access(Nx, Na, NS);
    },
    removeData: function (Nx, Na) {
      Ch.remove(Nx, Na);
    },
    _data: function (Nx, Na, NS) {
      return CV.access(Nx, Na, NS);
    },
    _removeData: function (Nx, Na) {
      CV.remove(Nx, Na);
    }
  });
  CM.fn.extend({
    data: function (Nx, Na) {
      var NS;
      var Nd;
      var NL;
      var Nm = this[0];
      var No = Nm && Nm.attributes;
      if (Nx !== undefined) {
        if (typeof Nx == "object") {
          return this.each(function () {
            Ch.set(this, Nx);
          });
        } else {
          return Cd(this, function (Nc) {
            var NZ;
            if (Nm && Nc === undefined) {
              if ((NZ = Ch.get(Nm, Nx)) !== undefined || (NZ = Cr(Nm, Nx)) !== undefined) {
                return NZ;
              } else {
                return undefined;
              }
            }
            this.each(function () {
              Ch.set(this, Nx, Nc);
            });
          }, null, Na, arguments.length > 1, null, true);
        }
      }
      if (this.length && (NL = Ch.get(Nm), Nm.nodeType === 1) && !CV.get(Nm, "hasDataAttrs")) {
        for (NS = No.length; NS--;) {
          if (No[NS] && (Nd = No[NS].name).indexOf("data-") === 0) {
            Nd = Cc(Nd.slice(5));
            Cr(Nm, Nd, NL[Nd]);
          }
        }
        CV.set(Nm, "hasDataAttrs", true);
      }
      return NL;
    },
    removeData: function (Nx) {
      return this.each(function () {
        Ch.remove(this, Nx);
      });
    }
  });
  CM.extend({
    queue: function (Nx, Na, NS) {
      var Nd;
      if (Nx) {
        Nd = CV.get(Nx, Na = (Na || "fx") + "queue");
        if (NS) {
          if (!Nd || Array.isArray(NS)) {
            Nd = CV.access(Nx, Na, CM.makeArray(NS));
          } else {
            Nd.push(NS);
          }
        }
        return Nd || [];
      }
    },
    dequeue: function (Nx, Na) {
      Na = Na || "fx";
      var NS = CM.queue(Nx, Na);
      var Nd = NS.length;
      var NL = NS.shift();
      var Nm = CM._queueHooks(Nx, Na);
      if (NL === "inprogress") {
        NL = NS.shift();
        Nd--;
      }
      if (NL) {
        if (Na === "fx") {
          NS.unshift("inprogress");
        }
        delete Nm.stop;
        NL.call(Nx, function () {
          CM.dequeue(Nx, Na);
        }, Nm);
      }
      if (!Nd && Nm) {
        Nm.empty.fire();
      }
    },
    _queueHooks: function (Nx, Na) {
      var NS = Na + "queueHooks";
      return CV.get(Nx, NS) || CV.access(Nx, NS, {
        empty: CM.Callbacks("once memory").add(function () {
          CV.remove(Nx, [Na + "queue", NS]);
        })
      });
    }
  });
  CM.fn.extend({
    queue: function (Nx, Na) {
      var NS = 2;
      if (typeof Nx != "string") {
        Na = Nx;
        Nx = "fx";
        NS--;
      }
      if (arguments.length < NS) {
        return CM.queue(this[0], Nx);
      } else if (Na === undefined) {
        return this;
      } else {
        return this.each(function () {
          var Nd = CM.queue(this, Nx, Na);
          CM._queueHooks(this, Nx);
          if (Nx === "fx" && Nd[0] !== "inprogress") {
            CM.dequeue(this, Nx);
          }
        });
      }
    },
    dequeue: function (Nx) {
      return this.each(function () {
        CM.dequeue(this, Nx);
      });
    },
    clearQueue: function (Nx) {
      return this.queue(Nx || "fx", []);
    },
    promise: function (Nx, Na) {
      function NS() {
        if (! --NL) {
          Nm.resolveWith(No, [No]);
        }
      }
      var Nd;
      var NL = 1;
      var Nm = CM.Deferred();
      var No = this;
      var Nc = this.length;
      if (typeof Nx != "string") {
        Na = Nx;
        Nx = undefined;
      }
      Nx = Nx || "fx";
      while (Nc--) {
        if ((Nd = CV.get(No[Nc], Nx + "queueHooks")) && Nd.empty) {
          NL++;
          Nd.empty.add(NS);
        }
      }
      NS();
      return Nm.promise(Na);
    }
  });
  function Ck(Nx, Na) {
    return (Nx = Na || Nx).style.display === "none" || Nx.style.display === "" && CM.contains(Nx.ownerDocument, Nx) && CM.css(Nx, "display") === "none";
  }
  function X0(Nx, Na, NS, Nd) {
    var NL;
    var Nm = {};
    for (NL in Na) {
      Nm[NL] = Nx.style[NL];
      Nx.style[NL] = Na[NL];
    }
    NS = NS.apply(Nx, Nd || []);
    for (NL in Na) {
      Nx.style[NL] = Nm[NL];
    }
    return NS;
  }
  var CC = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var X1 = new RegExp("^(?:([+-])=|)(" + CC + ")([a-z%]*)$", "i");
  var X2 = ["Top", "Right", "Bottom", "Left"];
  function X3(Nx, Na, NS, Nd) {
    var NL;
    var Nm;
    var No = 20;
    var Nc = Nd ? function () {
      return Nd.cur();
    } : function () {
      return CM.css(Nx, Na, "");
    };
    var NZ = Nc();
    var NF = NS && NS[3] || (CM.cssNumber[Na] ? "" : "px");
    var NV = (CM.cssNumber[Na] || NF !== "px" && +NZ) && X1.exec(CM.css(Nx, Na));
    if (NV && NV[3] !== NF) {
      NF = NF || NV[3];
      NV = +(NZ /= 2) || 1;
      while (No--) {
        CM.style(Nx, Na, NV + NF);
        if ((1 - Nm) * (1 - (Nm = Nc() / NZ || 0.5)) <= 0) {
          No = 0;
        }
        NV /= Nm;
      }
      CM.style(Nx, Na, (NV *= 2) + NF);
      NS = NS || [];
    }
    if (NS && (NV = +NV || +NZ || 0, NL = NS[1] ? NV + (NS[1] + 1) * NS[2] : +NS[2], Nd)) {
      Nd.unit = NF;
      Nd.start = NV;
      Nd.end = NL;
    }
    return NL;
  }
  var X4 = {};
  function X5(Nx, Na) {
    var NS;
    var Nd;
    var NL;
    var Nm;
    var No;
    var Nc = [];
    for (var NZ = 0, NF = Nx.length; NZ < NF; NZ++) {
      if ((Nd = Nx[NZ]).style) {
        NS = Nd.style.display;
        if (Na) {
          if (NS === "none") {
            Nc[NZ] = CV.get(Nd, "display") || null;
            if (!Nc[NZ]) {
              Nd.style.display = "";
            }
          }
          if (Nd.style.display === "" && Ck(Nd)) {
            No = Nm = undefined;
            Nm = (NL = Nd).ownerDocument;
            NL = NL.nodeName;
            Nc[NZ] = (No = X4[NL]) || (Nm = Nm.body.appendChild(Nm.createElement(NL)), No = CM.css(Nm, "display"), Nm.parentNode.removeChild(Nm), X4[NL] = No = No === "none" ? "block" : No);
          }
        } else if (NS !== "none") {
          Nc[NZ] = "none";
          CV.set(Nd, "display", NS);
        }
      }
    }
    for (NZ = 0; NZ < NF; NZ++) {
      if (Nc[NZ] != null) {
        Nx[NZ].style.display = Nc[NZ];
      }
    }
    return Nx;
  }
  CM.fn.extend({
    show: function () {
      return X5(this, true);
    },
    hide: function () {
      return X5(this);
    },
    toggle: function (Nx) {
      if (typeof Nx == "boolean") {
        if (Nx) {
          return this.show();
        } else {
          return this.hide();
        }
      } else {
        return this.each(function () {
          if (Ck(this)) {
            CM(this).show();
          } else {
            CM(this).hide();
          }
        });
      }
    }
  });
  var X6 = /^(?:checkbox|radio)$/i;
  var X7 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  var X8 = /^$|^module$|\/(?:java|ecma)script/i;
  var X9 = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function XC(Nx, Na) {
    var NS = Nx.getElementsByTagName !== undefined ? Nx.getElementsByTagName(Na || "*") : Nx.querySelectorAll !== undefined ? Nx.querySelectorAll(Na || "*") : [];
    if (Na === undefined || Na && CW(Nx, Na)) {
      return CM.merge([Nx], NS);
    } else {
      return NS;
    }
  }
  function XX(Nx, Na) {
    for (var NS = 0, Nd = Nx.length; NS < Nd; NS++) {
      CV.set(Nx[NS], "globalEval", !Na || CV.get(Na[NS], "globalEval"));
    }
  }
  X9.optgroup = X9.option;
  X9.tbody = X9.tfoot = X9.colgroup = X9.caption = X9.thead;
  X9.th = X9.td;
  var XN = /<|&#?\w+;/;
  function Xl(Nx, Na, NS, Nd, NL) {
    var Nm;
    var No;
    var Nc;
    var NZ;
    var NF;
    var NV = Na.createDocumentFragment();
    var Nh = [];
    for (var NA = 0, NI = Nx.length; NA < NI; NA++) {
      if ((Nm = Nx[NA]) || Nm === 0) {
        if (Cq(Nm) === "object") {
          CM.merge(Nh, Nm.nodeType ? [Nm] : Nm);
        } else if (XN.test(Nm)) {
          No = No || NV.appendChild(Na.createElement("div"));
          Nc = (X7.exec(Nm) || ["", ""])[1].toLowerCase();
          Nc = X9[Nc] || X9._default;
          No.innerHTML = Nc[1] + CM.htmlPrefilter(Nm) + Nc[2];
          NF = Nc[0];
          while (NF--) {
            No = No.lastChild;
          }
          CM.merge(Nh, No.childNodes);
          (No = NV.firstChild).textContent = "";
        } else {
          Nh.push(Na.createTextNode(Nm));
        }
      }
    }
    NV.textContent = "";
    NA = 0;
    while (Nm = Nh[NA++]) {
      if (Nd && CM.inArray(Nm, Nd) > -1) {
        if (NL) {
          NL.push(Nm);
        }
      } else {
        NZ = CM.contains(Nm.ownerDocument, Nm);
        No = XC(NV.appendChild(Nm), "script");
        if (NZ) {
          XX(No);
        }
        if (NS) {
          for (NF = 0; Nm = No[NF++];) {
            if (X8.test(Nm.type || "")) {
              NS.push(Nm);
            }
          }
        }
      }
    }
    return NV;
  }
  N0 = CX.createDocumentFragment().appendChild(CX.createElement("div"));
  (Xk = CX.createElement("input")).setAttribute("type", "radio");
  Xk.setAttribute("checked", "checked");
  Xk.setAttribute("name", "t");
  N0.appendChild(Xk);
  Cv.checkClone = N0.cloneNode(true).cloneNode(true).lastChild.checked;
  N0.innerHTML = "<textarea>x</textarea>";
  Cv.noCloneChecked = !!N0.cloneNode(true).lastChild.defaultValue;
  var XO = CX.documentElement;
  var XB = /^key/;
  var XG = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  var Xb = /^([^.]*)(?:\.(.+)|)/;
  function XT() {
    return true;
  }
  function Xi() {
    return false;
  }
  function Xu() {
    try {
      return CX.activeElement;
    } catch (Nx) {}
  }
  function XU(Nx, Na, NS, Nd, NL, Nm) {
    var No;
    var Nc;
    if (typeof Na == "object") {
      if (typeof NS != "string") {
        Nd = Nd || NS;
        NS = undefined;
      }
      for (Nc in Na) {
        XU(Nx, Nc, NS, Nd, Na[Nc], Nm);
      }
      return Nx;
    }
    if (Nd == null && NL == null) {
      NL = NS;
      Nd = NS = undefined;
    } else if (NL == null) {
      if (typeof NS == "string") {
        NL = Nd;
        Nd = undefined;
      } else {
        NL = Nd;
        Nd = NS;
        NS = undefined;
      }
    }
    if (NL === false) {
      NL = Xi;
    } else if (!NL) {
      return Nx;
    }
    if (Nm === 1) {
      No = NL;
      (NL = function (NZ) {
        CM().off(NZ);
        return No.apply(this, arguments);
      }).guid = No.guid ||= CM.guid++;
    }
    return Nx.each(function () {
      CM.event.add(this, Na, NL, Nd, NS);
    });
  }
  CM.event = {
    global: {},
    add: function (Nx, Na, NS, Nd, NL) {
      var Nm;
      var No;
      var Nc;
      var NZ;
      var NF;
      var NV;
      var Nh;
      var NA;
      var NI;
      var Nr = CV.get(Nx);
      if (Nr) {
        if (NS.handler) {
          NS = (Nm = NS).handler;
          NL = Nm.selector;
        }
        if (NL) {
          CM.find.matchesSelector(XO, NL);
        }
        NS.guid ||= CM.guid++;
        Nc = (Nc = Nr.events) || (Nr.events = {});
        No = (No = Nr.handle) || (Nr.handle = function (Nk) {
          if (CM !== undefined && CM.event.triggered !== Nk.type) {
            return CM.event.dispatch.apply(Nx, arguments);
          } else {
            return undefined;
          }
        });
        NZ = (Na = (Na || "").match(CY) || [""]).length;
        while (NZ--) {
          Nh = NI = (NA = Xb.exec(Na[NZ]) || [])[1];
          NA = (NA[2] || "").split(".").sort();
          if (Nh) {
            NF = CM.event.special[Nh] || {};
            Nh = (NL ? NF.delegateType : NF.bindType) || Nh;
            NF = CM.event.special[Nh] || {};
            NI = CM.extend({
              type: Nh,
              origType: NI,
              data: Nd,
              handler: NS,
              guid: NS.guid,
              selector: NL,
              needsContext: NL && CM.expr.match.needsContext.test(NL),
              namespace: NA.join(".")
            }, Nm);
            if (!(NV = Nc[Nh]) && !((NV = Nc[Nh] = []).delegateCount = 0, NF.setup && NF.setup.call(Nx, Nd, NA, No) !== false)) {
              if (Nx.addEventListener) {
                Nx.addEventListener(Nh, No);
              }
            }
            if (NF.add) {
              NF.add.call(Nx, NI);
              NI.handler.guid ||= NS.guid;
            }
            if (NL) {
              NV.splice(NV.delegateCount++, 0, NI);
            } else {
              NV.push(NI);
            }
            CM.event.global[Nh] = true;
          }
        }
      }
    },
    remove: function (Nx, Na, NS, Nd, NL) {
      var Nm;
      var No;
      var Nc;
      var NZ;
      var NF;
      var NV;
      var Nh;
      var NA;
      var NI;
      var Nr;
      var Nk;
      var l0 = CV.hasData(Nx) && CV.get(Nx);
      if (l0 && (NZ = l0.events)) {
        for (NF = (Na = (Na || "").match(CY) || [""]).length; NF--;) {
          NI = Nk = (Nc = Xb.exec(Na[NF]) || [])[1];
          Nr = (Nc[2] || "").split(".").sort();
          if (NI) {
            Nh = CM.event.special[NI] || {};
            NA = NZ[NI = (Nd ? Nh.delegateType : Nh.bindType) || NI] || [];
            Nc = Nc[2] && new RegExp("(^|\\.)" + Nr.join("\\.(?:.*\\.|)") + "(\\.|$)");
            No = Nm = NA.length;
            while (Nm--) {
              NV = NA[Nm];
              if ((!!NL || Nk === NV.origType) && (!NS || NS.guid === NV.guid) && (!Nc || !!Nc.test(NV.namespace)) && (!Nd || Nd === NV.selector || Nd === "**" && !!NV.selector)) {
                NA.splice(Nm, 1);
                if (NV.selector) {
                  NA.delegateCount--;
                }
                if (Nh.remove) {
                  Nh.remove.call(Nx, NV);
                }
              }
            }
            if (No && !NA.length) {
              if (!Nh.teardown || Nh.teardown.call(Nx, Nr, l0.handle) === false) {
                CM.removeEvent(Nx, NI, l0.handle);
              }
              delete NZ[NI];
            }
          } else {
            for (NI in NZ) {
              CM.event.remove(Nx, NI + Na[NF], NS, Nd, true);
            }
          }
        }
        if (CM.isEmptyObject(NZ)) {
          CV.remove(Nx, "handle events");
        }
      }
    },
    dispatch: function (Nx) {
      var Na;
      var NS;
      var Nd;
      var NL;
      var Nm;
      var No = CM.event.fix(Nx);
      var Nc = new Array(arguments.length);
      var Nx = (CV.get(this, "events") || {})[No.type] || [];
      var NZ = CM.event.special[No.type] || {};
      Nc[0] = No;
      Na = 1;
      for (; Na < arguments.length; Na++) {
        Nc[Na] = arguments[Na];
      }
      No.delegateTarget = this;
      if (!NZ.preDispatch || NZ.preDispatch.call(this, No) !== false) {
        Nm = CM.event.handlers.call(this, No, Nx);
        Na = 0;
        while ((Nd = Nm[Na++]) && !No.isPropagationStopped()) {
          No.currentTarget = Nd.elem;
          NS = 0;
          while ((NL = Nd.handlers[NS++]) && !No.isImmediatePropagationStopped()) {
            if (!No.rnamespace || !!No.rnamespace.test(NL.namespace)) {
              No.handleObj = NL;
              No.data = NL.data;
              if ((NL = ((CM.event.special[NL.origType] || {}).handle || NL.handler).apply(Nd.elem, Nc)) !== undefined && (No.result = NL) === false) {
                No.preventDefault();
                No.stopPropagation();
              }
            }
          }
        }
        if (NZ.postDispatch) {
          NZ.postDispatch.call(this, No);
        }
        return No.result;
      }
    },
    handlers: function (Nx, Na) {
      var NS;
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc = [];
      var NZ = Na.delegateCount;
      var NF = Nx.target;
      if (NZ && NF.nodeType && (Nx.type !== "click" || !(Nx.button >= 1))) {
        for (; NF !== this; NF = NF.parentNode || this) {
          if (NF.nodeType === 1 && (Nx.type !== "click" || NF.disabled !== true)) {
            Nm = [];
            No = {};
            NS = 0;
            for (; NS < NZ; NS++) {
              if (No[NL = (Nd = Na[NS]).selector + " "] === undefined) {
                No[NL] = Nd.needsContext ? CM(NL, this).index(NF) > -1 : CM.find(NL, this, null, [NF]).length;
              }
              if (No[NL]) {
                Nm.push(Nd);
              }
            }
            if (Nm.length) {
              Nc.push({
                elem: NF,
                handlers: Nm
              });
            }
          }
        }
      }
      NF = this;
      if (NZ < Na.length) {
        Nc.push({
          elem: NF,
          handlers: Na.slice(NZ)
        });
      }
      return Nc;
    },
    addProp: function (Nx, Na) {
      Object.defineProperty(CM.Event.prototype, Nx, {
        enumerable: true,
        configurable: true,
        get: C8(Na) ? function () {
          if (this.originalEvent) {
            return Na(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[Nx];
          }
        },
        set: function (NS) {
          Object.defineProperty(this, Nx, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: NS
          });
        }
      });
    },
    fix: function (Nx) {
      if (Nx[CM.expando]) {
        return Nx;
      } else {
        return new CM.Event(Nx);
      }
    },
    special: {
      load: {
        noBubble: true
      },
      focus: {
        trigger: function () {
          if (this !== Xu() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === Xu() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if (this.type === "checkbox" && this.click && CW(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function (Nx) {
          return CW(Nx.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (Nx) {
          if (Nx.result !== undefined && Nx.originalEvent) {
            Nx.originalEvent.returnValue = Nx.result;
          }
        }
      }
    }
  };
  CM.removeEvent = function (Nx, Na, NS) {
    if (Nx.removeEventListener) {
      Nx.removeEventListener(Na, NS);
    }
  };
  CM.Event = function (Nx, Na) {
    if (!(this instanceof CM.Event)) {
      return new CM.Event(Nx, Na);
    }
    if (Nx && Nx.type) {
      this.originalEvent = Nx;
      this.type = Nx.type;
      this.isDefaultPrevented = Nx.defaultPrevented || Nx.defaultPrevented === undefined && Nx.returnValue === false ? XT : Xi;
      this.target = Nx.target && Nx.target.nodeType === 3 ? Nx.target.parentNode : Nx.target;
      this.currentTarget = Nx.currentTarget;
      this.relatedTarget = Nx.relatedTarget;
    } else {
      this.type = Nx;
    }
    if (Na) {
      CM.extend(this, Na);
    }
    this.timeStamp = Nx && Nx.timeStamp || Date.now();
    this[CM.expando] = true;
  };
  CM.Event.prototype = {
    constructor: CM.Event,
    isDefaultPrevented: Xi,
    isPropagationStopped: Xi,
    isImmediatePropagationStopped: Xi,
    isSimulated: false,
    preventDefault: function () {
      var Nx = this.originalEvent;
      this.isDefaultPrevented = XT;
      if (Nx && !this.isSimulated) {
        Nx.preventDefault();
      }
    },
    stopPropagation: function () {
      var Nx = this.originalEvent;
      this.isPropagationStopped = XT;
      if (Nx && !this.isSimulated) {
        Nx.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var Nx = this.originalEvent;
      this.isImmediatePropagationStopped = XT;
      if (Nx && !this.isSimulated) {
        Nx.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  CM.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function (Nx) {
      var Na = Nx.button;
      if (Nx.which == null && XB.test(Nx.type)) {
        return Nx.charCode ?? Nx.keyCode;
      } else if (!Nx.which && Na !== undefined && XG.test(Nx.type)) {
        if (Na & 1) {
          return 1;
        } else if (Na & 2) {
          return 3;
        } else if (Na & 4) {
          return 2;
        } else {
          return 0;
        }
      } else {
        return Nx.which;
      }
    }
  }, CM.event.addProp);
  CM.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (Nx, Na) {
    CM.event.special[Nx] = {
      delegateType: Na,
      bindType: Na,
      handle: function (NS) {
        var Nd;
        var NL = NS.relatedTarget;
        var Nm = NS.handleObj;
        if (!NL || NL !== this && !CM.contains(this, NL)) {
          NS.type = Nm.origType;
          Nd = Nm.handler.apply(this, arguments);
          NS.type = Na;
        }
        return Nd;
      }
    };
  });
  CM.fn.extend({
    on: function (Nx, Na, NS, Nd) {
      return XU(this, Nx, Na, NS, Nd);
    },
    one: function (Nx, Na, NS, Nd) {
      return XU(this, Nx, Na, NS, Nd, 1);
    },
    off: function (Nx, Na, NS) {
      var Nd;
      var NL;
      if (Nx && Nx.preventDefault && Nx.handleObj) {
        Nd = Nx.handleObj;
        CM(Nx.delegateTarget).off(Nd.namespace ? Nd.origType + "." + Nd.namespace : Nd.origType, Nd.selector, Nd.handler);
      } else {
        if (typeof Nx != "object") {
          if (Na === false || typeof Na == "function") {
            NS = Na;
            Na = undefined;
          }
          if (NS === false) {
            NS = Xi;
          }
          return this.each(function () {
            CM.event.remove(this, Nx, NS, Na);
          });
        }
        for (NL in Nx) {
          this.off(NL, Na, Nx[NL]);
        }
      }
      return this;
    }
  });
  var Xv = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  var XK = /<script|<style|<link/i;
  var XE = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var Xq = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function XM(Nx, Na) {
    return CW(Nx, "table") && CW(Na.nodeType !== 11 ? Na : Na.firstChild, "tr") && CM(Nx).children("tbody")[0] || Nx;
  }
  function XJ(Nx) {
    Nx.type = (Nx.getAttribute("type") !== null) + "/" + Nx.type;
    return Nx;
  }
  function XR(Nx) {
    if ((Nx.type || "").slice(0, 5) === "true/") {
      Nx.type = Nx.type.slice(5);
    } else {
      Nx.removeAttribute("type");
    }
    return Nx;
  }
  function Xs(Nx, Na) {
    var NS;
    var Nd;
    var NL;
    var Nm;
    var No;
    var Nc;
    if (Na.nodeType === 1) {
      if (CV.hasData(Nx) && (Nm = CV.access(Nx), No = CV.set(Na, Nm), Nc = Nm.events)) {
        delete No.handle;
        No.events = {};
        for (NL in Nc) {
          NS = 0;
          Nd = Nc[NL].length;
          for (; NS < Nd; NS++) {
            CM.event.add(Na, NL, Nc[NL][NS]);
          }
        }
      }
      if (Ch.hasData(Nx)) {
        Nm = Ch.access(Nx);
        No = CM.extend({}, Nm);
        Ch.set(Na, No);
      }
    }
  }
  function Xw(Nx, Na, NS, Nd) {
    Na = CO.apply([], Na);
    var NL;
    var Nm;
    var No;
    var Nc;
    var NZ;
    var NF;
    var NV = 0;
    var Nh = Nx.length;
    var NA = Nh - 1;
    var NI = Na[0];
    var Nr = C8(NI);
    if (Nr || Nh > 1 && typeof NI == "string" && !Cv.checkClone && XE.test(NI)) {
      return Nx.each(function (Nk) {
        var l0 = Nx.eq(Nk);
        if (Nr) {
          Na[0] = NI.call(this, Nk, l0.html());
        }
        Xw(l0, Na, NS, Nd);
      });
    }
    if (Nh && (Nm = (NL = Xl(Na, Nx[0].ownerDocument, false, Nx, Nd)).firstChild, NL.childNodes.length === 1 && (NL = Nm), Nm || Nd)) {
      for (Nc = (No = CM.map(XC(NL, "script"), XJ)).length; NV < Nh; NV++) {
        NZ = NL;
        if (NV !== NA && (NZ = CM.clone(NZ, true, true), Nc)) {
          CM.merge(No, XC(NZ, "script"));
        }
        NS.call(Nx[NV], NZ, NV);
      }
      if (Nc) {
        NF = No[No.length - 1].ownerDocument;
        CM.map(No, XR);
        NV = 0;
        for (; NV < Nc; NV++) {
          NZ = No[NV];
          if (X8.test(NZ.type || "") && !CV.access(NZ, "globalEval") && CM.contains(NF, NZ)) {
            if (NZ.src && (NZ.type || "").toLowerCase() !== "module") {
              if (CM._evalUrl) {
                CM._evalUrl(NZ.src);
              }
            } else {
              CE(NZ.textContent.replace(Xq, ""), NF, NZ);
            }
          }
        }
      }
    }
    return Nx;
  }
  function Xf(Nx, Na, NS) {
    for (var Nd, NL = Na ? CM.filter(Na, Nx) : Nx, Nm = 0; (Nd = NL[Nm]) != null; Nm++) {
      if (!NS && Nd.nodeType === 1) {
        CM.cleanData(XC(Nd));
      }
      if (Nd.parentNode) {
        if (NS && CM.contains(Nd.ownerDocument, Nd)) {
          XX(XC(Nd, "script"));
        }
        Nd.parentNode.removeChild(Nd);
      }
    }
    return Nx;
  }
  CM.extend({
    htmlPrefilter: function (Nx) {
      return Nx.replace(Xv, "<$1></$2>");
    },
    clone: function (Nx, Na, NS) {
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc;
      var NZ;
      var NF;
      var NV = Nx.cloneNode(true);
      var Nh = CM.contains(Nx.ownerDocument, Nx);
      if (!Cv.noCloneChecked && (Nx.nodeType === 1 || Nx.nodeType === 11) && !CM.isXMLDoc(Nx)) {
        No = XC(NV);
        Nd = 0;
        NL = (Nm = XC(Nx)).length;
        for (; Nd < NL; Nd++) {
          Nc = Nm[Nd];
          NZ = No[Nd];
          NF = undefined;
          if ((NF = NZ.nodeName.toLowerCase()) === "input" && X6.test(Nc.type)) {
            NZ.checked = Nc.checked;
          } else if (NF === "input" || NF === "textarea") {
            NZ.defaultValue = Nc.defaultValue;
          }
        }
      }
      if (Na) {
        if (NS) {
          Nm = Nm || XC(Nx);
          No = No || XC(NV);
          Nd = 0;
          NL = Nm.length;
          for (; Nd < NL; Nd++) {
            Xs(Nm[Nd], No[Nd]);
          }
        } else {
          Xs(Nx, NV);
        }
      }
      if ((No = XC(NV, "script")).length > 0) {
        XX(No, !Nh && XC(Nx, "script"));
      }
      return NV;
    },
    cleanData: function (Nx) {
      var Na;
      for (var NS, Nd, NL = CM.event.special, Nm = 0; (NS = Nx[Nm]) !== undefined; Nm++) {
        if (CZ(NS)) {
          if (Na = NS[CV.expando]) {
            if (Na.events) {
              for (Nd in Na.events) {
                if (NL[Nd]) {
                  CM.event.remove(NS, Nd);
                } else {
                  CM.removeEvent(NS, Nd, Na.handle);
                }
              }
            }
            NS[CV.expando] = undefined;
          }
          NS[Ch.expando] &&= undefined;
        }
      }
    }
  });
  CM.fn.extend({
    detach: function (Nx) {
      return Xf(this, Nx, true);
    },
    remove: function (Nx) {
      return Xf(this, Nx);
    },
    text: function (Nx) {
      return Cd(this, function (Na) {
        if (Na === undefined) {
          return CM.text(this);
        } else {
          return this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = Na;
            }
          });
        }
      }, null, Nx, arguments.length);
    },
    append: function () {
      return Xw(this, arguments, function (Nx) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          XM(this, Nx).appendChild(Nx);
        }
      });
    },
    prepend: function () {
      return Xw(this, arguments, function (Nx) {
        var Na;
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          (Na = XM(this, Nx)).insertBefore(Nx, Na.firstChild);
        }
      });
    },
    before: function () {
      return Xw(this, arguments, function (Nx) {
        if (this.parentNode) {
          this.parentNode.insertBefore(Nx, this);
        }
      });
    },
    after: function () {
      return Xw(this, arguments, function (Nx) {
        if (this.parentNode) {
          this.parentNode.insertBefore(Nx, this.nextSibling);
        }
      });
    },
    empty: function () {
      for (var Nx, Na = 0; (Nx = this[Na]) != null; Na++) {
        if (Nx.nodeType === 1) {
          CM.cleanData(XC(Nx, false));
          Nx.textContent = "";
        }
      }
      return this;
    },
    clone: function (Nx, Na) {
      Nx = Nx != null && Nx;
      Na = Na == null ? Nx : Na;
      return this.map(function () {
        return CM.clone(this, Nx, Na);
      });
    },
    html: function (Nx) {
      return Cd(this, function (Na) {
        var NS = this[0] || {};
        var Nd = 0;
        var NL = this.length;
        if (Na === undefined && NS.nodeType === 1) {
          return NS.innerHTML;
        }
        if (typeof Na == "string" && !XK.test(Na) && !X9[(X7.exec(Na) || ["", ""])[1].toLowerCase()]) {
          Na = CM.htmlPrefilter(Na);
          try {
            for (; Nd < NL; Nd++) {
              if ((NS = this[Nd] || {}).nodeType === 1) {
                CM.cleanData(XC(NS, false));
                NS.innerHTML = Na;
              }
            }
            NS = 0;
          } catch (Nm) {}
        }
        if (NS) {
          this.empty().append(Na);
        }
      }, null, Nx, arguments.length);
    },
    replaceWith: function () {
      var Nx = [];
      return Xw(this, arguments, function (Na) {
        var NS = this.parentNode;
        if (CM.inArray(this, Nx) < 0 && (CM.cleanData(XC(this)), NS)) {
          NS.replaceChild(Na, this);
        }
      }, Nx);
    }
  });
  CM.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (Nx, Na) {
    CM.fn[Nx] = function (NS) {
      var Nd;
      var NL = [];
      var Nm = CM(NS);
      for (var No = Nm.length - 1, Nc = 0; Nc <= No; Nc++) {
        Nd = Nc === No ? this : this.clone(true);
        CM(Nm[Nc])[Na](Nd);
        CB.apply(NL, Nd.get());
      }
      return this.pushStack(NL);
    };
  });
  function XW(Nx) {
    var Na = Nx.ownerDocument.defaultView;
    return (Na = Na && Na.opener ? Na : C6).getComputedStyle(Nx);
  }
  var XP;
  var Xn;
  var Xy;
  var XD;
  var Xp;
  var XQ;
  var Xj;
  var XY = new RegExp("^(" + CC + ")(?!px)[a-z%]+$", "i");
  var Xz = new RegExp(X2.join("|"), "i");
  function Xg() {
    var Nx;
    if (Xj) {
      XQ.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
      Xj.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
      XO.appendChild(XQ).appendChild(Xj);
      Nx = C6.getComputedStyle(Xj);
      XP = Nx.top !== "1%";
      Xp = XH(Nx.marginLeft) === 12;
      Xj.style.right = "60%";
      XD = XH(Nx.right) === 36;
      Xn = XH(Nx.width) === 36;
      Xj.style.position = "absolute";
      Xy = Xj.offsetWidth === 36 || "absolute";
      XO.removeChild(XQ);
      Xj = null;
    }
  }
  function XH(Nx) {
    return Math.round(parseFloat(Nx));
  }
  function Xx(Nx, Na, NS) {
    var Nd;
    var NL;
    var Nm = Nx.style;
    if ((NS = NS || XW(Nx)) && ((NL = NS.getPropertyValue(Na) || NS[Na]) !== "" || CM.contains(Nx.ownerDocument, Nx) || (NL = CM.style(Nx, Na)), !Cv.pixelBoxStyles()) && XY.test(NL) && Xz.test(Na)) {
      Nx = Nm.width;
      Na = Nm.minWidth;
      Nd = Nm.maxWidth;
      Nm.minWidth = Nm.maxWidth = Nm.width = NL;
      NL = NS.width;
      Nm.width = Nx;
      Nm.minWidth = Na;
      Nm.maxWidth = Nd;
    }
    if (NL !== undefined) {
      return NL + "";
    } else {
      return NL;
    }
  }
  function Xa(Nx, Na) {
    return {
      get: function () {
        if (!Nx()) {
          return (this.get = Na).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  XQ = CX.createElement("div");
  if ((Xj = CX.createElement("div")).style) {
    Xj.style.backgroundClip = "content-box";
    Xj.cloneNode(true).style.backgroundClip = "";
    Cv.clearCloneStyle = Xj.style.backgroundClip === "content-box";
    CM.extend(Cv, {
      boxSizingReliable: function () {
        Xg();
        return Xn;
      },
      pixelBoxStyles: function () {
        Xg();
        return XD;
      },
      pixelPosition: function () {
        Xg();
        return XP;
      },
      reliableMarginLeft: function () {
        Xg();
        return Xp;
      },
      scrollboxSize: function () {
        Xg();
        return Xy;
      }
    });
  }
  var XS = /^(none|table(?!-c[ea]).+)/;
  var Xd = /^--/;
  var XL = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  var Xm = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  var Xo = ["Webkit", "Moz", "ms"];
  var Xc = CX.createElement("div").style;
  function XZ(Nx) {
    return CM.cssProps[Nx] ||= function (Na) {
      if (Na in Xc) {
        return Na;
      }
      var NS = Na[0].toUpperCase() + Na.slice(1);
      for (var Nd = Xo.length; Nd--;) {
        if ((Na = Xo[Nd] + NS) in Xc) {
          return Na;
        }
      }
    }(Nx) || Nx;
  }
  function XF(Nx, Na, NS) {
    var Nd = X1.exec(Na);
    if (Nd) {
      return Math.max(0, Nd[2] - (NS || 0)) + (Nd[3] || "px");
    } else {
      return Na;
    }
  }
  function XV(Nx, Na, NS, Nd, NL, Nm) {
    var No = Na === "width" ? 1 : 0;
    var Nc = 0;
    var NZ = 0;
    if (NS === (Nd ? "border" : "content")) {
      return 0;
    }
    for (; No < 4; No += 2) {
      if (NS === "margin") {
        NZ += CM.css(Nx, NS + X2[No], true, NL);
      }
      if (Nd) {
        if (NS === "content") {
          NZ -= CM.css(Nx, "padding" + X2[No], true, NL);
        }
        if (NS !== "margin") {
          NZ -= CM.css(Nx, "border" + X2[No] + "Width", true, NL);
        }
      } else {
        NZ += CM.css(Nx, "padding" + X2[No], true, NL);
        if (NS !== "padding") {
          NZ += CM.css(Nx, "border" + X2[No] + "Width", true, NL);
        } else {
          Nc += CM.css(Nx, "border" + X2[No] + "Width", true, NL);
        }
      }
    }
    if (!Nd && Nm >= 0) {
      NZ += Math.max(0, Math.ceil(Nx["offset" + Na[0].toUpperCase() + Na.slice(1)] - Nm - NZ - Nc - 0.5));
    }
    return NZ;
  }
  function Xh(Nx, Na, NS) {
    var Nd = XW(Nx);
    var NL = Xx(Nx, Na, Nd);
    var Nm = CM.css(Nx, "boxSizing", false, Nd) === "border-box";
    var No = Nm;
    if (XY.test(NL)) {
      if (!NS) {
        return NL;
      }
      NL = "auto";
    }
    No = No && (Cv.boxSizingReliable() || NL === Nx.style[Na]);
    if (NL === "auto" || !parseFloat(NL) && CM.css(Nx, "display", false, Nd) === "inline") {
      NL = Nx["offset" + Na[0].toUpperCase() + Na.slice(1)];
      No = true;
    }
    return (NL = parseFloat(NL) || 0) + XV(Nx, Na, NS || (Nm ? "border" : "content"), No, Nd, NL) + "px";
  }
  function XA(Nx, Na, NS, Nd, NL) {
    return new XA.prototype.init(Nx, Na, NS, Nd, NL);
  }
  CM.extend({
    cssHooks: {
      opacity: {
        get: function (Nx, Na) {
          if (Na) {
            if ((Na = Xx(Nx, "opacity")) === "") {
              return "1";
            } else {
              return Na;
            }
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {},
    style: function (Nx, Na, NS, Nd) {
      if (Nx && Nx.nodeType !== 3 && Nx.nodeType !== 8 && Nx.style) {
        var NL;
        var Nm;
        var No;
        var Nc = Cc(Na);
        var NZ = Xd.test(Na);
        var NF = Nx.style;
        if (!NZ) {
          Na = XZ(Nc);
        }
        No = CM.cssHooks[Na] || CM.cssHooks[Nc];
        if (NS === undefined) {
          if (No && "get" in No && (NL = No.get(Nx, false, Nd)) !== undefined) {
            return NL;
          } else {
            return NF[Na];
          }
        }
        if ((Nm = typeof NS) == "string" && (NL = X1.exec(NS)) && NL[1]) {
          NS = X3(Nx, Na, NL);
          Nm = "number";
        }
        if (NS != null && NS == NS) {
          if (Nm === "number") {
            NS += NL && NL[3] || (CM.cssNumber[Nc] ? "" : "px");
          }
          if (!Cv.clearCloneStyle && NS === "" && Na.indexOf("background") === 0) {
            NF[Na] = "inherit";
          }
          if (!No || !("set" in No) || (NS = No.set(Nx, NS, Nd)) !== undefined) {
            if (NZ) {
              NF.setProperty(Na, NS);
            } else {
              NF[Na] = NS;
            }
          }
        }
      }
    },
    css: function (Nx, Na, NS, Nd) {
      var NL;
      var Nm = Cc(Na);
      if (!Xd.test(Na)) {
        Na = XZ(Nm);
      }
      if ((NL = (NL = (Nm = CM.cssHooks[Na] || CM.cssHooks[Nm]) && "get" in Nm ? Nm.get(Nx, true, NS) : NL) === undefined ? Xx(Nx, Na, Nd) : NL) === "normal" && Na in Xm) {
        NL = Xm[Na];
      }
      if ((NS === "" || NS) && (Nm = parseFloat(NL), NS === true || isFinite(Nm))) {
        return Nm || 0;
      } else {
        return NL;
      }
    }
  });
  CM.each(["height", "width"], function (Nx, Na) {
    CM.cssHooks[Na] = {
      get: function (NS, Nd, NL) {
        if (Nd) {
          if (!XS.test(CM.css(NS, "display")) || NS.getClientRects().length && NS.getBoundingClientRect().width) {
            return Xh(NS, Na, NL);
          } else {
            return X0(NS, XL, function () {
              return Xh(NS, Na, NL);
            });
          }
        }
      },
      set: function (NS, Nd, NL) {
        var Nm = XW(NS);
        var No = CM.css(NS, "boxSizing", false, Nm) === "border-box";
        var NL = NL && XV(NS, Na, NL, No, Nm);
        if (No && Cv.scrollboxSize() === Nm.position) {
          NL -= Math.ceil(NS["offset" + Na[0].toUpperCase() + Na.slice(1)] - parseFloat(Nm[Na]) - XV(NS, Na, "border", false, Nm) - 0.5);
        }
        if (NL && (No = X1.exec(Nd)) && (No[3] || "px") !== "px") {
          NS.style[Na] = Nd;
          Nd = CM.css(NS, Na);
        }
        return XF(0, Nd, NL);
      }
    };
  });
  CM.cssHooks.marginLeft = Xa(Cv.reliableMarginLeft, function (Nx, Na) {
    if (Na) {
      return (parseFloat(Xx(Nx, "marginLeft")) || Nx.getBoundingClientRect().left - X0(Nx, {
        marginLeft: 0
      }, function () {
        return Nx.getBoundingClientRect().left;
      })) + "px";
    }
  });
  CM.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (Nx, Na) {
    CM.cssHooks[Nx + Na] = {
      expand: function (NS) {
        for (var Nd = 0, NL = {}, Nm = typeof NS == "string" ? NS.split(" ") : [NS]; Nd < 4; Nd++) {
          NL[Nx + X2[Nd] + Na] = Nm[Nd] || Nm[Nd - 2] || Nm[0];
        }
        return NL;
      }
    };
    if (Nx !== "margin") {
      CM.cssHooks[Nx + Na].set = XF;
    }
  });
  CM.fn.extend({
    css: function (Nx, Na) {
      return Cd(this, function (NS, Nd, NL) {
        var Nm;
        var No;
        var Nc = {};
        var NZ = 0;
        if (Array.isArray(Nd)) {
          Nm = XW(NS);
          No = Nd.length;
          for (; NZ < No; NZ++) {
            Nc[Nd[NZ]] = CM.css(NS, Nd[NZ], false, Nm);
          }
          return Nc;
        }
        if (NL !== undefined) {
          return CM.style(NS, Nd, NL);
        } else {
          return CM.css(NS, Nd);
        }
      }, Nx, Na, arguments.length > 1);
    }
  });
  ((CM.Tween = XA).prototype = {
    constructor: XA,
    init: function (Nx, Na, NS, Nd, NL, Nm) {
      this.elem = Nx;
      this.prop = NS;
      this.easing = NL || CM.easing._default;
      this.options = Na;
      this.start = this.now = this.cur();
      this.end = Nd;
      this.unit = Nm || (CM.cssNumber[NS] ? "" : "px");
    },
    cur: function () {
      var Nx = XA.propHooks[this.prop];
      return (Nx && Nx.get ? Nx : XA.propHooks._default).get(this);
    },
    run: function (Nx) {
      var Na;
      var NS = XA.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = Na = CM.easing[this.easing](Nx, this.options.duration * Nx, 0, 1, this.options.duration);
      } else {
        this.pos = Na = Nx;
      }
      this.now = (this.end - this.start) * Na + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      (NS && NS.set ? NS : XA.propHooks._default).set(this);
      return this;
    }
  }).init.prototype = XA.prototype;
  (XA.propHooks = {
    _default: {
      get: function (Nx) {
        if (Nx.elem.nodeType !== 1 || Nx.elem[Nx.prop] != null && Nx.elem.style[Nx.prop] == null) {
          return Nx.elem[Nx.prop];
        } else if ((Nx = CM.css(Nx.elem, Nx.prop, "")) && Nx !== "auto") {
          return Nx;
        } else {
          return 0;
        }
      },
      set: function (Nx) {
        if (CM.fx.step[Nx.prop]) {
          CM.fx.step[Nx.prop](Nx);
        } else if (Nx.elem.nodeType !== 1 || Nx.elem.style[CM.cssProps[Nx.prop]] == null && !CM.cssHooks[Nx.prop]) {
          Nx.elem[Nx.prop] = Nx.now;
        } else {
          CM.style(Nx.elem, Nx.prop, Nx.now + Nx.unit);
        }
      }
    }
  }).scrollTop = XA.propHooks.scrollLeft = {
    set: function (Nx) {
      if (Nx.elem.nodeType && Nx.elem.parentNode) {
        Nx.elem[Nx.prop] = Nx.now;
      }
    }
  };
  CM.easing = {
    linear: function (Nx) {
      return Nx;
    },
    swing: function (Nx) {
      return 0.5 - Math.cos(Nx * Math.PI) / 2;
    },
    _default: "swing"
  };
  CM.fx = XA.prototype.init;
  CM.fx.step = {};
  var XI;
  var Xr;
  var Xk;
  var N0;
  var N1 = /^(?:toggle|show|hide)$/;
  var N2 = /queueHooks$/;
  function N3() {
    if (Xr) {
      if (CX.hidden === false && C6.requestAnimationFrame) {
        C6.requestAnimationFrame(N3);
      } else {
        C6.setTimeout(N3, CM.fx.interval);
      }
      CM.fx.tick();
    }
  }
  function N4() {
    C6.setTimeout(function () {
      XI = undefined;
    });
    return XI = Date.now();
  }
  function N5(Nx, Na) {
    var NS;
    var Nd = 0;
    var NL = {
      height: Nx
    };
    for (Na = Na ? 1 : 0; Nd < 4; Nd += 2 - Na) {
      NL["margin" + (NS = X2[Nd])] = NL["padding" + NS] = Nx;
    }
    if (Na) {
      NL.opacity = NL.width = Nx;
    }
    return NL;
  }
  function N6(Nx, Na, NS) {
    var Nd;
    var NL = (N7.tweeners[Na] || []).concat(N7.tweeners["*"]);
    for (var Nm = 0, No = NL.length; Nm < No; Nm++) {
      if (Nd = NL[Nm].call(NS, Na, Nx)) {
        return Nd;
      }
    }
  }
  function N7(Nx, Na, NS) {
    var Nd;
    var NL;
    var Nm;
    var No;
    var Nc;
    var NZ;
    var NF;
    var NV = 0;
    var Nh = N7.prefilters.length;
    var NA = CM.Deferred().always(function () {
      delete NI.elem;
    });
    function NI() {
      if (NL) {
        return false;
      }
      var l2 = XI || N4();
      var l2 = Math.max(0, Nr.startTime + Nr.duration - l2);
      var l3 = 1 - (l2 / Nr.duration || 0);
      for (var l4 = 0, l5 = Nr.tweens.length; l4 < l5; l4++) {
        Nr.tweens[l4].run(l3);
      }
      NA.notifyWith(Nx, [Nr, l3, l2]);
      if (l3 < 1 && l5) {
        return l2;
      } else {
        if (!l5) {
          NA.notifyWith(Nx, [Nr, 1, 0]);
        }
        NA.resolveWith(Nx, [Nr]);
        return false;
      }
    }
    var Nr = NA.promise({
      elem: Nx,
      props: CM.extend({}, Na),
      opts: CM.extend(true, {
        specialEasing: {},
        easing: CM.easing._default
      }, NS),
      originalProperties: Na,
      originalOptions: NS,
      startTime: XI || N4(),
      duration: NS.duration,
      tweens: [],
      createTween: function (l2, l3) {
        l3 = CM.Tween(Nx, Nr.opts, l2, l3, Nr.opts.specialEasing[l2] || Nr.opts.easing);
        Nr.tweens.push(l3);
        return l3;
      },
      stop: function (l2) {
        var l3 = 0;
        var l4 = l2 ? Nr.tweens.length : 0;
        if (!NL) {
          for (NL = true; l3 < l4; l3++) {
            Nr.tweens[l3].run(1);
          }
          if (l2) {
            NA.notifyWith(Nx, [Nr, 1, 0]);
            NA.resolveWith(Nx, [Nr, l2]);
          } else {
            NA.rejectWith(Nx, [Nr, l2]);
          }
        }
        return this;
      }
    });
    var Nk = Nr.props;
    var l0 = Nk;
    var l1 = Nr.opts.specialEasing;
    for (Nm in l0) {
      No = Cc(Nm);
      Nc = l1[No];
      NZ = l0[Nm];
      if (Array.isArray(NZ)) {
        Nc = NZ[1];
        NZ = l0[Nm] = NZ[0];
      }
      if (Nm !== No) {
        l0[No] = NZ;
        delete l0[Nm];
      }
      if ((NF = CM.cssHooks[No]) && "expand" in NF) {
        NZ = NF.expand(NZ);
        delete l0[No];
        for (Nm in NZ) {
          if (!(Nm in l0)) {
            l0[Nm] = NZ[Nm];
            l1[Nm] = Nc;
          }
        }
      } else {
        l1[No] = Nc;
      }
    }
    for (; NV < Nh; NV++) {
      if (Nd = N7.prefilters[NV].call(Nr, Nx, Nk, Nr.opts)) {
        if (C8(Nd.stop)) {
          CM._queueHooks(Nr.elem, Nr.opts.queue).stop = Nd.stop.bind(Nd);
        }
        return Nd;
      }
    }
    CM.map(Nk, N6, Nr);
    if (C8(Nr.opts.start)) {
      Nr.opts.start.call(Nx, Nr);
    }
    Nr.progress(Nr.opts.progress).done(Nr.opts.done, Nr.opts.complete).fail(Nr.opts.fail).always(Nr.opts.always);
    CM.fx.timer(CM.extend(NI, {
      elem: Nx,
      anim: Nr,
      queue: Nr.opts.queue
    }));
    return Nr;
  }
  CM.Animation = CM.extend(N7, {
    tweeners: {
      "*": [function (Nx, Na) {
        var NS = this.createTween(Nx, Na);
        X3(NS.elem, Nx, X1.exec(Na), NS);
        return NS;
      }]
    },
    tweener: function (Nx, Na) {
      var NS;
      for (var Nd = 0, NL = (Nx = C8(Nx) ? (Na = Nx, ["*"]) : Nx.match(CY)).length; Nd < NL; Nd++) {
        NS = Nx[Nd];
        N7.tweeners[NS] = N7.tweeners[NS] || [];
        N7.tweeners[NS].unshift(Na);
      }
    },
    prefilters: [function (Nx, Na, NS) {
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc;
      var NZ;
      var NF;
      var NV = "width" in Na || "height" in Na;
      var Nh = this;
      var NA = {};
      var NI = Nx.style;
      var Nr = Nx.nodeType && Ck(Nx);
      var Nk = CV.get(Nx, "fxshow");
      if (!NS.queue) {
        if ((No = CM._queueHooks(Nx, "fx")).unqueued == null) {
          No.unqueued = 0;
          Nc = No.empty.fire;
          No.empty.fire = function () {
            if (!No.unqueued) {
              Nc();
            }
          };
        }
        No.unqueued++;
        Nh.always(function () {
          Nh.always(function () {
            No.unqueued--;
            if (!CM.queue(Nx, "fx").length) {
              No.empty.fire();
            }
          });
        });
      }
      for (Nd in Na) {
        NL = Na[Nd];
        if (N1.test(NL)) {
          delete Na[Nd];
          Nm = Nm || NL === "toggle";
          if (NL === (Nr ? "hide" : "show")) {
            if (NL !== "show" || !Nk || Nk[Nd] === undefined) {
              continue;
            }
            Nr = true;
          }
          NA[Nd] = Nk && Nk[Nd] || CM.style(Nx, Nd);
        }
      }
      if ((NZ = !CM.isEmptyObject(Na)) || !CM.isEmptyObject(NA)) {
        if (NV && Nx.nodeType === 1 && (NS.overflow = [NI.overflow, NI.overflowX, NI.overflowY], (NF = Nk && Nk.display) == null && (NF = CV.get(Nx, "display")), (NV = CM.css(Nx, "display")) === "none" && (NF ? NV = NF : (X5([Nx], true), NF = Nx.style.display || NF, NV = CM.css(Nx, "display"), X5([Nx]))), NV === "inline" || NV === "inline-block" && NF != null) && CM.css(Nx, "float") === "none") {
          if (!NZ) {
            Nh.done(function () {
              NI.display = NF;
            });
            if (NF == null) {
              NV = NI.display;
              NF = NV === "none" ? "" : NV;
            }
          }
          NI.display = "inline-block";
        }
        if (NS.overflow) {
          NI.overflow = "hidden";
          Nh.always(function () {
            NI.overflow = NS.overflow[0];
            NI.overflowX = NS.overflow[1];
            NI.overflowY = NS.overflow[2];
          });
        }
        NZ = false;
        for (Nd in NA) {
          if (!NZ) {
            if (Nk) {
              if ("hidden" in Nk) {
                Nr = Nk.hidden;
              }
            } else {
              Nk = CV.access(Nx, "fxshow", {
                display: NF
              });
            }
            if (Nm) {
              Nk.hidden = !Nr;
            }
            if (Nr) {
              X5([Nx], true);
            }
            Nh.done(function () {
              if (!Nr) {
                X5([Nx]);
              }
              CV.remove(Nx, "fxshow");
              for (Nd in NA) {
                CM.style(Nx, Nd, NA[Nd]);
              }
            });
          }
          NZ = N6(Nr ? Nk[Nd] : 0, Nd, Nh);
          if (!(Nd in Nk)) {
            Nk[Nd] = NZ.start;
            if (Nr) {
              NZ.end = NZ.start;
              NZ.start = 0;
            }
          }
        }
      }
    }],
    prefilter: function (Nx, Na) {
      if (Na) {
        N7.prefilters.unshift(Nx);
      } else {
        N7.prefilters.push(Nx);
      }
    }
  });
  CM.speed = function (Nx, Na, NS) {
    var Nd = Nx && typeof Nx == "object" ? CM.extend({}, Nx) : {
      complete: NS || !NS && Na || C8(Nx) && Nx,
      duration: Nx,
      easing: NS && Na || Na && !C8(Na) && Na
    };
    if (CM.fx.off) {
      Nd.duration = 0;
    } else if (typeof Nd.duration != "number") {
      if (Nd.duration in CM.fx.speeds) {
        Nd.duration = CM.fx.speeds[Nd.duration];
      } else {
        Nd.duration = CM.fx.speeds._default;
      }
    }
    if (Nd.queue == null || Nd.queue === true) {
      Nd.queue = "fx";
    }
    Nd.old = Nd.complete;
    Nd.complete = function () {
      if (C8(Nd.old)) {
        Nd.old.call(this);
      }
      if (Nd.queue) {
        CM.dequeue(this, Nd.queue);
      }
    };
    return Nd;
  };
  CM.fn.extend({
    fadeTo: function (Nx, Na, NS, Nd) {
      return this.filter(Ck).css("opacity", 0).show().end().animate({
        opacity: Na
      }, Nx, NS, Nd);
    },
    animate: function (Nx, Na, NS, Nd) {
      function NL() {
        var Nc = N7(this, CM.extend({}, Nx), No);
        if (Nm || CV.get(this, "finish")) {
          Nc.stop(true);
        }
      }
      var Nm = CM.isEmptyObject(Nx);
      var No = CM.speed(Na, NS, Nd);
      NL.finish = NL;
      if (Nm || No.queue === false) {
        return this.each(NL);
      } else {
        return this.queue(No.queue, NL);
      }
    },
    stop: function (Nx, Na, NS) {
      function Nd(NL) {
        var Nm = NL.stop;
        delete NL.stop;
        Nm(NS);
      }
      if (typeof Nx != "string") {
        NS = Na;
        Na = Nx;
        Nx = undefined;
      }
      if (Na && Nx !== false) {
        this.queue(Nx || "fx", []);
      }
      return this.each(function () {
        var NL = true;
        var Nm = Nx != null && Nx + "queueHooks";
        var No = CM.timers;
        var Nc = CV.get(this);
        if (Nm) {
          if (Nc[Nm] && Nc[Nm].stop) {
            Nd(Nc[Nm]);
          }
        } else {
          for (Nm in Nc) {
            if (Nc[Nm] && Nc[Nm].stop && N2.test(Nm)) {
              Nd(Nc[Nm]);
            }
          }
        }
        for (Nm = No.length; Nm--;) {
          if (No[Nm].elem === this && (Nx == null || No[Nm].queue === Nx)) {
            No[Nm].anim.stop(NS);
            NL = false;
            No.splice(Nm, 1);
          }
        }
        if (!!NL || !NS) {
          CM.dequeue(this, Nx);
        }
      });
    },
    finish: function (Nx) {
      if (Nx !== false) {
        Nx = Nx || "fx";
      }
      return this.each(function () {
        var Na;
        var NS = CV.get(this);
        var Nd = NS[Nx + "queue"];
        var NL = NS[Nx + "queueHooks"];
        var Nm = CM.timers;
        var No = Nd ? Nd.length : 0;
        NS.finish = true;
        CM.queue(this, Nx, []);
        if (NL && NL.stop) {
          NL.stop.call(this, true);
        }
        Na = Nm.length;
        while (Na--) {
          if (Nm[Na].elem === this && Nm[Na].queue === Nx) {
            Nm[Na].anim.stop(true);
            Nm.splice(Na, 1);
          }
        }
        for (Na = 0; Na < No; Na++) {
          if (Nd[Na] && Nd[Na].finish) {
            Nd[Na].finish.call(this);
          }
        }
        delete NS.finish;
      });
    }
  });
  CM.each(["toggle", "show", "hide"], function (Nx, Na) {
    var NS = CM.fn[Na];
    CM.fn[Na] = function (Nd, NL, Nm) {
      if (Nd == null || typeof Nd == "boolean") {
        return NS.apply(this, arguments);
      } else {
        return this.animate(N5(Na, true), Nd, NL, Nm);
      }
    };
  });
  CM.each({
    slideDown: N5("show"),
    slideUp: N5("hide"),
    slideToggle: N5("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (Nx, Na) {
    CM.fn[Nx] = function (NS, Nd, NL) {
      return this.animate(Na, NS, Nd, NL);
    };
  });
  CM.timers = [];
  CM.fx.tick = function () {
    var Nx;
    var Na = 0;
    var NS = CM.timers;
    for (XI = Date.now(); Na < NS.length; Na++) {
      if (!(Nx = NS[Na])() && NS[Na] === Nx) {
        NS.splice(Na--, 1);
      }
    }
    if (!NS.length) {
      CM.fx.stop();
    }
    XI = undefined;
  };
  CM.fx.timer = function (Nx) {
    CM.timers.push(Nx);
    CM.fx.start();
  };
  CM.fx.interval = 13;
  CM.fx.start = function () {
    if (!Xr) {
      Xr = true;
      N3();
    }
  };
  CM.fx.stop = function () {
    Xr = null;
  };
  CM.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  CM.fn.delay = function (Nx, Na) {
    Nx = CM.fx && CM.fx.speeds[Nx] || Nx;
    return this.queue(Na = Na || "fx", function (NS, Nd) {
      var NL = C6.setTimeout(NS, Nx);
      Nd.stop = function () {
        C6.clearTimeout(NL);
      };
    });
  };
  Xk = CX.createElement("input");
  N0 = CX.createElement("select").appendChild(CX.createElement("option"));
  Xk.type = "checkbox";
  Cv.checkOn = Xk.value !== "";
  Cv.optSelected = N0.selected;
  (Xk = CX.createElement("input")).value = "t";
  Xk.type = "radio";
  Cv.radioValue = Xk.value === "t";
  var N8;
  var N9 = CM.expr.attrHandle;
  CM.fn.extend({
    attr: function (Nx, Na) {
      return Cd(this, CM.attr, Nx, Na, arguments.length > 1);
    },
    removeAttr: function (Nx) {
      return this.each(function () {
        CM.removeAttr(this, Nx);
      });
    }
  });
  CM.extend({
    attr: function (Nx, Na, NS) {
      var Nd;
      var NL;
      var Nm = Nx.nodeType;
      if (Nm !== 3 && Nm !== 8 && Nm !== 2) {
        if (Nx.getAttribute === undefined) {
          return CM.prop(Nx, Na, NS);
        } else {
          if (Nm !== 1 || !CM.isXMLDoc(Nx)) {
            NL = CM.attrHooks[Na.toLowerCase()] || (CM.expr.match.bool.test(Na) ? N8 : undefined);
          }
          if (NS !== undefined) {
            if (NS === null) {
              CM.removeAttr(Nx, Na);
              return;
            } else if (NL && "set" in NL && (Nd = NL.set(Nx, NS, Na)) !== undefined) {
              return Nd;
            } else {
              Nx.setAttribute(Na, NS + "");
              return NS;
            }
          } else if ((!NL || !("get" in NL) || (Nd = NL.get(Nx, Na)) === null) && (Nd = CM.find.attr(Nx, Na)) == null) {
            return undefined;
          } else {
            return Nd;
          }
        }
      }
    },
    attrHooks: {
      type: {
        set: function (Nx, Na) {
          var NS;
          if (!Cv.radioValue && Na === "radio" && CW(Nx, "input")) {
            NS = Nx.value;
            Nx.setAttribute("type", Na);
            if (NS) {
              Nx.value = NS;
            }
            return Na;
          }
        }
      }
    },
    removeAttr: function (Nx, Na) {
      var NS;
      var Nd = 0;
      var NL = Na && Na.match(CY);
      if (NL && Nx.nodeType === 1) {
        while (NS = NL[Nd++]) {
          Nx.removeAttribute(NS);
        }
      }
    }
  });
  N8 = {
    set: function (Nx, Na, NS) {
      if (Na === false) {
        CM.removeAttr(Nx, NS);
      } else {
        Nx.setAttribute(NS, NS);
      }
      return NS;
    }
  };
  CM.each(CM.expr.match.bool.source.match(/\w+/g), function (Nx, Na) {
    var NS = N9[Na] || CM.find.attr;
    N9[Na] = function (Nd, NL, Nm) {
      var No;
      var Nc;
      var NZ = NL.toLowerCase();
      if (!Nm) {
        Nc = N9[NZ];
        N9[NZ] = No;
        No = NS(Nd, NL, Nm) != null ? NZ : null;
        N9[NZ] = Nc;
      }
      return No;
    };
  });
  var NC = /^(?:input|select|textarea|button)$/i;
  var NX = /^(?:a|area)$/i;
  function NN(Nx) {
    return (Nx.match(CY) || []).join(" ");
  }
  function Nl(Nx) {
    return Nx.getAttribute && Nx.getAttribute("class") || "";
  }
  function NO(Nx) {
    if (Array.isArray(Nx)) {
      return Nx;
    } else {
      return typeof Nx == "string" && Nx.match(CY) || [];
    }
  }
  CM.fn.extend({
    prop: function (Nx, Na) {
      return Cd(this, CM.prop, Nx, Na, arguments.length > 1);
    },
    removeProp: function (Nx) {
      return this.each(function () {
        delete this[CM.propFix[Nx] || Nx];
      });
    }
  });
  CM.extend({
    prop: function (Nx, Na, NS) {
      var Nd;
      var NL;
      var Nm = Nx.nodeType;
      if (Nm !== 3 && Nm !== 8 && Nm !== 2) {
        if (Nm !== 1 || !CM.isXMLDoc(Nx)) {
          Na = CM.propFix[Na] || Na;
          NL = CM.propHooks[Na];
        }
        if (NS !== undefined) {
          if (NL && "set" in NL && (Nd = NL.set(Nx, NS, Na)) !== undefined) {
            return Nd;
          } else {
            return Nx[Na] = NS;
          }
        } else if (NL && "get" in NL && (Nd = NL.get(Nx, Na)) !== null) {
          return Nd;
        } else {
          return Nx[Na];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (Nx) {
          var Na = CM.find.attr(Nx, "tabindex");
          if (Na) {
            return parseInt(Na, 10);
          } else if (NC.test(Nx.nodeName) || NX.test(Nx.nodeName) && Nx.href) {
            return 0;
          } else {
            return -1;
          }
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  });
  if (!Cv.optSelected) {
    CM.propHooks.selected = {
      get: function (Nx) {
        Nx = Nx.parentNode;
        if (Nx && Nx.parentNode) {
          Nx.parentNode.selectedIndex;
        }
        return null;
      },
      set: function (Nx) {
        Nx = Nx.parentNode;
        if (Nx && (Nx.selectedIndex, Nx.parentNode)) {
          Nx.parentNode.selectedIndex;
        }
      }
    };
  }
  CM.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    CM.propFix[this.toLowerCase()] = this;
  });
  CM.fn.extend({
    addClass: function (Nx) {
      var Na;
      var NS;
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc = 0;
      if (C8(Nx)) {
        return this.each(function (NZ) {
          CM(this).addClass(Nx.call(this, NZ, Nl(this)));
        });
      }
      if ((Na = NO(Nx)).length) {
        while (NS = this[Nc++]) {
          No = Nl(NS);
          if (Nd = NS.nodeType === 1 && " " + NN(No) + " ") {
            for (Nm = 0; NL = Na[Nm++];) {
              if (Nd.indexOf(" " + NL + " ") < 0) {
                Nd += NL + " ";
              }
            }
            if (No !== (No = NN(Nd))) {
              NS.setAttribute("class", No);
            }
          }
        }
      }
      return this;
    },
    removeClass: function (Nx) {
      var Na;
      var NS;
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc = 0;
      if (C8(Nx)) {
        return this.each(function (NZ) {
          CM(this).removeClass(Nx.call(this, NZ, Nl(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((Na = NO(Nx)).length) {
        while (NS = this[Nc++]) {
          No = Nl(NS);
          if (Nd = NS.nodeType === 1 && " " + NN(No) + " ") {
            for (Nm = 0; NL = Na[Nm++];) {
              while (Nd.indexOf(" " + NL + " ") > -1) {
                Nd = Nd.replace(" " + NL + " ", " ");
              }
            }
            if (No !== (No = NN(Nd))) {
              NS.setAttribute("class", No);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (Nx, Na) {
      var NS = typeof Nx;
      var Nd = NS == "string" || Array.isArray(Nx);
      if (typeof Na == "boolean" && Nd) {
        if (Na) {
          return this.addClass(Nx);
        } else {
          return this.removeClass(Nx);
        }
      } else if (C8(Nx)) {
        return this.each(function (NL) {
          CM(this).toggleClass(Nx.call(this, NL, Nl(this), Na), Na);
        });
      } else {
        return this.each(function () {
          var NL;
          var Nm;
          var No;
          var Nc;
          if (Nd) {
            Nm = 0;
            No = CM(this);
            Nc = NO(Nx);
            while (NL = Nc[Nm++]) {
              if (No.hasClass(NL)) {
                No.removeClass(NL);
              } else {
                No.addClass(NL);
              }
            }
          } else if (Nx === undefined || NS == "boolean") {
            if (NL = Nl(this)) {
              CV.set(this, "__className__", NL);
            }
            if (this.setAttribute) {
              this.setAttribute("class", !NL && Nx !== false && CV.get(this, "__className__") || "");
            }
          }
        });
      }
    },
    hasClass: function (Nx) {
      for (var Na, NS = 0, Nd = " " + Nx + " "; Na = this[NS++];) {
        if (Na.nodeType === 1 && (" " + NN(Nl(Na)) + " ").indexOf(Nd) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  function NB(Nx) {
    Nx.stopPropagation();
  }
  var NG = /\r/g;
  CM.fn.extend({
    val: function (Nx) {
      var Na;
      var NS;
      var Nd;
      var NL = this[0];
      if (arguments.length) {
        Nd = C8(Nx);
        return this.each(function (Nm) {
          if (this.nodeType === 1) {
            if ((Nm = Nd ? Nx.call(this, Nm, CM(this).val()) : Nx) == null) {
              Nm = "";
            } else if (typeof Nm == "number") {
              Nm += "";
            } else if (Array.isArray(Nm)) {
              Nm = CM.map(Nm, function (No) {
                if (No == null) {
                  return "";
                } else {
                  return No + "";
                }
              });
            }
            if (!(Na = CM.valHooks[this.type] || CM.valHooks[this.nodeName.toLowerCase()]) || !("set" in Na) || Na.set(this, Nm, "value") === undefined) {
              this.value = Nm;
            }
          }
        });
      } else if (NL) {
        if ((Na = CM.valHooks[NL.type] || CM.valHooks[NL.nodeName.toLowerCase()]) && "get" in Na && (NS = Na.get(NL, "value")) !== undefined) {
          return NS;
        } else if (typeof (NS = NL.value) == "string") {
          return NS.replace(NG, "");
        } else if (NS == null) {
          return "";
        } else {
          return NS;
        }
      } else {
        return undefined;
      }
    }
  });
  CM.extend({
    valHooks: {
      option: {
        get: function (Nx) {
          var Na = CM.find.attr(Nx, "value");
          return Na ?? NN(CM.text(Nx));
        }
      },
      select: {
        get: function (Nx) {
          var Na;
          var NS = Nx.options;
          var Nd = Nx.selectedIndex;
          var NL = Nx.type === "select-one";
          var Nm = NL ? null : [];
          for (var No = NL ? Nd + 1 : NS.length, Nc = Nd < 0 ? No : NL ? Nd : 0; Nc < No; Nc++) {
            if (((Na = NS[Nc]).selected || Nc === Nd) && !Na.disabled && (!Na.parentNode.disabled || !CW(Na.parentNode, "optgroup"))) {
              Na = CM(Na).val();
              if (NL) {
                return Na;
              }
              Nm.push(Na);
            }
          }
          return Nm;
        },
        set: function (Nx, Na) {
          var NS;
          var Nd;
          var NL = Nx.options;
          var Nm = CM.makeArray(Na);
          for (var No = NL.length; No--;) {
            if ((Nd = NL[No]).selected = CM.inArray(CM.valHooks.option.get(Nd), Nm) > -1) {
              NS = true;
            }
          }
          if (!NS) {
            Nx.selectedIndex = -1;
          }
          return Nm;
        }
      }
    }
  });
  CM.each(["radio", "checkbox"], function () {
    CM.valHooks[this] = {
      set: function (Nx, Na) {
        if (Array.isArray(Na)) {
          return Nx.checked = CM.inArray(CM(Nx).val(), Na) > -1;
        }
      }
    };
    if (!Cv.checkOn) {
      CM.valHooks[this].get = function (Nx) {
        if (Nx.getAttribute("value") === null) {
          return "on";
        } else {
          return Nx.value;
        }
      };
    }
  });
  Cv.focusin = "onfocusin" in C6;
  var Nb = /^(?:focusinfocus|focusoutblur)$/;
  CM.extend(CM.event, {
    trigger: function (Nx, Na, NS, Nd) {
      var NL;
      var Nm;
      var No;
      var Nc;
      var NZ;
      var NF;
      var NV;
      var Nh = [NS || CX];
      var NA = Ci.call(Nx, "type") ? Nx.type : Nx;
      var NI = Ci.call(Nx, "namespace") ? Nx.namespace.split(".") : [];
      var Nr = NV = Nm = NS = NS || CX;
      if (NS.nodeType !== 3 && NS.nodeType !== 8 && !Nb.test(NA + CM.event.triggered) && (NA.indexOf(".") > -1 && (NA = (NI = NA.split(".")).shift(), NI.sort()), Nc = NA.indexOf(":") < 0 && "on" + NA, (Nx = Nx[CM.expando] ? Nx : new CM.Event(NA, typeof Nx == "object" && Nx)).isTrigger = Nd ? 2 : 3, Nx.namespace = NI.join("."), Nx.rnamespace = Nx.namespace ? new RegExp("(^|\\.)" + NI.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, Nx.result = undefined, Nx.target ||= NS, Na = Na == null ? [Nx] : CM.makeArray(Na, [Nx]), NF = CM.event.special[NA] || {}, Nd || !NF.trigger || NF.trigger.apply(NS, Na) !== false)) {
        if (!Nd && !NF.noBubble && !C9(NS)) {
          No = NF.delegateType || NA;
          if (!Nb.test(No + NA)) {
            Nr = Nr.parentNode;
          }
          for (; Nr; Nr = Nr.parentNode) {
            Nh.push(Nr);
            Nm = Nr;
          }
          if (Nm === (NS.ownerDocument || CX)) {
            Nh.push(Nm.defaultView || Nm.parentWindow || C6);
          }
        }
        for (NL = 0; (Nr = Nh[NL++]) && !Nx.isPropagationStopped();) {
          NV = Nr;
          Nx.type = NL > 1 ? No : NF.bindType || NA;
          if (NZ = (CV.get(Nr, "events") || {})[Nx.type] && CV.get(Nr, "handle")) {
            NZ.apply(Nr, Na);
          }
          if ((NZ = Nc && Nr[Nc]) && NZ.apply && CZ(Nr) && (Nx.result = NZ.apply(Nr, Na), Nx.result === false)) {
            Nx.preventDefault();
          }
        }
        Nx.type = NA;
        if (!Nd && !Nx.isDefaultPrevented() && (!NF._default || NF._default.apply(Nh.pop(), Na) === false) && !!CZ(NS)) {
          if (Nc && C8(NS[NA]) && !C9(NS) && ((Nm = NS[Nc]) && (NS[Nc] = null), CM.event.triggered = NA, Nx.isPropagationStopped() && NV.addEventListener(NA, NB), NS[NA](), Nx.isPropagationStopped() && NV.removeEventListener(NA, NB), CM.event.triggered = undefined, Nm)) {
            NS[Nc] = Nm;
          }
        }
        return Nx.result;
      }
    },
    simulate: function (Nx, Na, NS) {
      NS = CM.extend(new CM.Event(), NS, {
        type: Nx,
        isSimulated: true
      });
      CM.event.trigger(NS, null, Na);
    }
  });
  CM.fn.extend({
    trigger: function (Nx, Na) {
      return this.each(function () {
        CM.event.trigger(Nx, Na, this);
      });
    },
    triggerHandler: function (Nx, Na) {
      var NS = this[0];
      if (NS) {
        return CM.event.trigger(Nx, Na, NS, true);
      }
    }
  });
  if (!Cv.focusin) {
    CM.each({
      focus: "focusin",
      blur: "focusout"
    }, function (Nx, Na) {
      function NS(Nd) {
        CM.event.simulate(Na, Nd.target, CM.event.fix(Nd));
      }
      CM.event.special[Na] = {
        setup: function () {
          var Nd = this.ownerDocument || this;
          var NL = CV.access(Nd, Na);
          if (!NL) {
            Nd.addEventListener(Nx, NS, true);
          }
          CV.access(Nd, Na, (NL || 0) + 1);
        },
        teardown: function () {
          var Nd = this.ownerDocument || this;
          var NL = CV.access(Nd, Na) - 1;
          if (NL) {
            CV.access(Nd, Na, NL);
          } else {
            Nd.removeEventListener(Nx, NS, true);
            CV.remove(Nd, Na);
          }
        }
      };
    });
  }
  var NT = C6.location;
  var Ni = Date.now();
  var Nu = /\?/;
  CM.parseXML = function (Nx) {
    var Na;
    if (!Nx || typeof Nx != "string") {
      return null;
    }
    try {
      Na = new C6.DOMParser().parseFromString(Nx, "text/xml");
    } catch (NS) {
      Na = undefined;
    }
    if (!Na || !!Na.getElementsByTagName("parsererror").length) {
      CM.error("Invalid XML: " + Nx);
    }
    return Na;
  };
  var NU = /\[\]$/;
  var Nv = /\r?\n/g;
  var NK = /^(?:submit|button|image|reset|file)$/i;
  var NE = /^(?:input|select|textarea|keygen)/i;
  CM.param = function (Nx, Na) {
    function NS(Nm, No) {
      No = C8(No) ? No() : No;
      NL[NL.length] = encodeURIComponent(Nm) + "=" + encodeURIComponent(No == null ? "" : No);
    }
    var Nd;
    var NL = [];
    if (Array.isArray(Nx) || Nx.jquery && !CM.isPlainObject(Nx)) {
      CM.each(Nx, function () {
        NS(this.name, this.value);
      });
    } else {
      for (Nd in Nx) {
        (function Nm(No, Nc, NZ, NF) {
          if (Array.isArray(Nc)) {
            CM.each(Nc, function (Nh, NA) {
              if (NZ || NU.test(No)) {
                NF(No, NA);
              } else {
                Nm(No + "[" + (typeof NA == "object" && NA != null ? Nh : "") + "]", NA, NZ, NF);
              }
            });
          } else if (NZ || Cq(Nc) !== "object") {
            NF(No, Nc);
          } else {
            for (var NV in Nc) {
              Nm(No + "[" + NV + "]", Nc[NV], NZ, NF);
            }
          }
        })(Nd, Nx[Nd], Na, NS);
      }
    }
    return NL.join("&");
  };
  CM.fn.extend({
    serialize: function () {
      return CM.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var Nx = CM.prop(this, "elements");
        if (Nx) {
          return CM.makeArray(Nx);
        } else {
          return this;
        }
      }).filter(function () {
        var Nx = this.type;
        return this.name && !CM(this).is(":disabled") && NE.test(this.nodeName) && !NK.test(Nx) && (this.checked || !X6.test(Nx));
      }).map(function (Nx, Na) {
        var NS = CM(this).val();
        if (NS == null) {
          return null;
        } else if (Array.isArray(NS)) {
          return CM.map(NS, function (Nd) {
            return {
              name: Na.name,
              value: Nd.replace(Nv, "\r\n")
            };
          });
        } else {
          return {
            name: Na.name,
            value: NS.replace(Nv, "\r\n")
          };
        }
      }).get();
    }
  });
  var Nq = /%20/g;
  var NM = /#.*$/;
  var NJ = /([?&])_=[^&]*/;
  var NR = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  var Ns = /^(?:GET|HEAD)$/;
  var Nw = /^\/\//;
  var Nf = {};
  var NW = {};
  var NP = `*/*`;
  var Nn = CX.createElement("a");
  function Ny(Nx) {
    return function (Na, NS) {
      if (typeof Na != "string") {
        NS = Na;
        Na = "*";
      }
      var Nd;
      var NL = 0;
      var Nm = Na.toLowerCase().match(CY) || [];
      if (C8(NS)) {
        while (Nd = Nm[NL++]) {
          if (Nd[0] === "+") {
            Nd = Nd.slice(1) || "*";
            (Nx[Nd] = Nx[Nd] || []).unshift(NS);
          } else {
            (Nx[Nd] = Nx[Nd] || []).push(NS);
          }
        }
      }
    };
  }
  function ND(Nx, Na, NS, Nd) {
    var NL = {};
    var Nm = Nx === NW;
    function No(Nc) {
      var NZ;
      NL[Nc] = true;
      CM.each(Nx[Nc] || [], function (NF, NV) {
        NV = NV(Na, NS, Nd);
        if (typeof NV != "string" || Nm || NL[NV]) {
          if (Nm) {
            return !(NZ = NV);
          } else {
            return undefined;
          }
        } else {
          Na.dataTypes.unshift(NV);
          No(NV);
          return false;
        }
      });
      return NZ;
    }
    return No(Na.dataTypes[0]) || !NL["*"] && No("*");
  }
  function Np(Nx, Na) {
    var NS;
    var Nd;
    var NL = CM.ajaxSettings.flatOptions || {};
    for (NS in Na) {
      if (Na[NS] !== undefined) {
        (NL[NS] ? Nx : Nd = Nd || {})[NS] = Na[NS];
      }
    }
    if (Nd) {
      CM.extend(true, Nx, Nd);
    }
    return Nx;
  }
  Nn.href = NT.href;
  CM.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: NT.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(NT.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": NP,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": CM.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (Nx, Na) {
      if (Na) {
        return Np(Np(Nx, CM.ajaxSettings), Na);
      } else {
        return Np(CM.ajaxSettings, Nx);
      }
    },
    ajaxPrefilter: Ny(Nf),
    ajaxTransport: Ny(NW),
    ajax: function (Nx, Na) {
      if (typeof Nx == "object") {
        Na = Nx;
        Nx = undefined;
      }
      var NS;
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc;
      var NZ;
      var NF;
      var NV = CM.ajaxSetup({}, Na = Na || {});
      var Nh = NV.context || NV;
      var NA = NV.context && (Nh.nodeType || Nh.jquery) ? CM(Nh) : CM.event;
      var NI = CM.Deferred();
      var Nr = CM.Callbacks("once memory");
      var Nk = NV.statusCode || {};
      var l0 = {};
      var l1 = {};
      var l2 = "canceled";
      var l3 = {
        readyState: 0,
        getResponseHeader: function (l5) {
          var l6;
          if (Nc) {
            if (!Nm) {
              for (Nm = {}; l6 = NR.exec(NL);) {
                Nm[l6[1].toLowerCase()] = l6[2];
              }
            }
            l6 = Nm[l5.toLowerCase()];
          }
          if (l6 == null) {
            return null;
          } else {
            return l6;
          }
        },
        getAllResponseHeaders: function () {
          if (Nc) {
            return NL;
          } else {
            return null;
          }
        },
        setRequestHeader: function (l5, l6) {
          if (Nc == null) {
            l5 = l1[l5.toLowerCase()] = l1[l5.toLowerCase()] || l5;
            l0[l5] = l6;
          }
          return this;
        },
        overrideMimeType: function (l5) {
          if (Nc == null) {
            NV.mimeType = l5;
          }
          return this;
        },
        statusCode: function (l5) {
          if (l5) {
            if (Nc) {
              l3.always(l5[l3.status]);
            } else {
              for (var l6 in l5) {
                Nk[l6] = [Nk[l6], l5[l6]];
              }
            }
          }
          return this;
        },
        abort: function (l5) {
          l5 = l5 || l2;
          if (NS) {
            NS.abort(l5);
          }
          l4(0, l5);
          return this;
        }
      };
      NI.promise(l3);
      NV.url = ((Nx || NV.url || NT.href) + "").replace(Nw, NT.protocol + "//");
      NV.type = Na.method || Na.type || NV.method || NV.type;
      NV.dataTypes = (NV.dataType || "*").toLowerCase().match(CY) || [""];
      if (NV.crossDomain == null) {
        Nx = CX.createElement("a");
        try {
          Nx.href = NV.url;
          Nx.href = Nx.href;
          NV.crossDomain = Nn.protocol + "//" + Nn.host != Nx.protocol + "//" + Nx.host;
        } catch (l5) {
          NV.crossDomain = true;
        }
      }
      if (NV.data && NV.processData && typeof NV.data != "string") {
        NV.data = CM.param(NV.data, NV.traditional);
      }
      ND(Nf, NV, Na, l3);
      if (!Nc) {
        if ((NZ = CM.event && NV.global) && CM.active++ == 0) {
          CM.event.trigger("ajaxStart");
        }
        NV.type = NV.type.toUpperCase();
        NV.hasContent = !Ns.test(NV.type);
        Nd = NV.url.replace(NM, "");
        if (NV.hasContent) {
          if (NV.data && NV.processData && (NV.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            NV.data = NV.data.replace(Nq, "+");
          }
        } else {
          Nx = NV.url.slice(Nd.length);
          if (NV.data && (NV.processData || typeof NV.data == "string")) {
            Nd += (Nu.test(Nd) ? "&" : "?") + NV.data;
            delete NV.data;
          }
          if (NV.cache === false) {
            Nd = Nd.replace(NJ, "$1");
            Nx = (Nu.test(Nd) ? "&" : "?") + "_=" + Ni++ + Nx;
          }
          NV.url = Nd + Nx;
        }
        if (NV.ifModified && (CM.lastModified[Nd] && l3.setRequestHeader("If-Modified-Since", CM.lastModified[Nd]), CM.etag[Nd])) {
          l3.setRequestHeader("If-None-Match", CM.etag[Nd]);
        }
        if (NV.data && NV.hasContent && NV.contentType !== false || Na.contentType) {
          l3.setRequestHeader("Content-Type", NV.contentType);
        }
        l3.setRequestHeader("Accept", NV.dataTypes[0] && NV.accepts[NV.dataTypes[0]] ? NV.accepts[NV.dataTypes[0]] + (NV.dataTypes[0] !== "*" ? ", " + NP + "; q=0.01" : "") : NV.accepts["*"]);
        for (NF in NV.headers) {
          l3.setRequestHeader(NF, NV.headers[NF]);
        }
        if (NV.beforeSend && (NV.beforeSend.call(Nh, l3, NV) === false || Nc)) {
          return l3.abort();
        }
        l2 = "abort";
        Nr.add(NV.complete);
        l3.done(NV.success);
        l3.fail(NV.error);
        if (NS = ND(NW, NV, Na, l3)) {
          l3.readyState = 1;
          if (NZ) {
            NA.trigger("ajaxSend", [l3, NV]);
          }
          if (Nc) {
            return l3;
          }
          if (NV.async && NV.timeout > 0) {
            No = C6.setTimeout(function () {
              l3.abort("timeout");
            }, NV.timeout);
          }
          try {
            Nc = false;
            NS.send(l0, l4);
          } catch (l6) {
            if (Nc) {
              throw l6;
            }
            l4(-1, l6);
          }
        } else {
          l4(-1, "No Transport");
        }
      }
      return l3;
      function l4(l7, l8, l9, lC) {
        var lX;
        var lN;
        var ll;
        var lO = l8;
        if (!Nc) {
          Nc = true;
          if (No) {
            C6.clearTimeout(No);
          }
          NS = undefined;
          NL = lC || "";
          l3.readyState = l7 > 0 ? 4 : 0;
          lC = l7 >= 200 && l7 < 300 || l7 === 304;
          if (l9) {
            ll = function (lB, lG, lb) {
              var lT;
              var li;
              var lu;
              var lU;
              var lv = lB.contents;
              for (var lK = lB.dataTypes; lK[0] === "*";) {
                lK.shift();
                if (lT === undefined) {
                  lT = lB.mimeType || lG.getResponseHeader("Content-Type");
                }
              }
              if (lT) {
                for (li in lv) {
                  if (lv[li] && lv[li].test(lT)) {
                    lK.unshift(li);
                    break;
                  }
                }
              }
              if (lK[0] in lb) {
                lu = lK[0];
              } else {
                for (li in lb) {
                  if (!lK[0] || lB.converters[li + " " + lK[0]]) {
                    lu = li;
                    break;
                  }
                  lU = lU || li;
                }
                lu = lu || lU;
              }
              if (lu) {
                if (lu !== lK[0]) {
                  lK.unshift(lu);
                }
                return lb[lu];
              }
            }(NV, l3, l9);
          }
          ll = function (lB, lG, lb, lT) {
            var li;
            var lu;
            var lU;
            var lv;
            var lK;
            var lE = {};
            var lq = lB.dataTypes.slice();
            if (lq[1]) {
              for (lU in lB.converters) {
                lE[lU.toLowerCase()] = lB.converters[lU];
              }
            }
            for (lu = lq.shift(); lu;) {
              if (lB.responseFields[lu]) {
                lb[lB.responseFields[lu]] = lG;
              }
              if (!lK && lT && lB.dataFilter) {
                lG = lB.dataFilter(lG, lB.dataType);
              }
              lK = lu;
              if (lu = lq.shift()) {
                if (lu === "*") {
                  lu = lK;
                } else if (lK !== "*" && lK !== lu) {
                  if (!(lU = lE[lK + " " + lu] || lE["* " + lu])) {
                    for (li in lE) {
                      if ((lv = li.split(" "))[1] === lu && (lU = lE[lK + " " + lv[0]] || lE["* " + lv[0]])) {
                        if (lU === true) {
                          lU = lE[li];
                        } else if (lE[li] !== true) {
                          lu = lv[0];
                          lq.unshift(lv[1]);
                        }
                        break;
                      }
                    }
                  }
                  if (lU !== true) {
                    if (lU && lB.throws) {
                      lG = lU(lG);
                    } else {
                      try {
                        lG = lU(lG);
                      } catch (lM) {
                        return {
                          state: "parsererror",
                          error: lU ? lM : "No conversion from " + lK + " to " + lu
                        };
                      }
                    }
                  }
                }
              }
            }
            return {
              state: "success",
              data: lG
            };
          }(NV, ll, l3, lC);
          if (lC) {
            if (NV.ifModified && ((l9 = l3.getResponseHeader("Last-Modified")) && (CM.lastModified[Nd] = l9), l9 = l3.getResponseHeader("etag"))) {
              CM.etag[Nd] = l9;
            }
            if (l7 === 204 || NV.type === "HEAD") {
              lO = "nocontent";
            } else if (l7 === 304) {
              lO = "notmodified";
            } else {
              lO = ll.state;
              lX = ll.data;
              lC = !(lN = ll.error);
            }
          } else {
            lN = lO;
            if (!!l7 || !lO) {
              lO = "error";
              if (l7 < 0) {
                l7 = 0;
              }
            }
          }
          l3.status = l7;
          l3.statusText = (l8 || lO) + "";
          if (lC) {
            NI.resolveWith(Nh, [lX, lO, l3]);
          } else {
            NI.rejectWith(Nh, [l3, lO, lN]);
          }
          l3.statusCode(Nk);
          Nk = undefined;
          if (NZ) {
            NA.trigger(lC ? "ajaxSuccess" : "ajaxError", [l3, NV, lC ? lX : lN]);
          }
          Nr.fireWith(Nh, [l3, lO]);
          if (NZ) {
            NA.trigger("ajaxComplete", [l3, NV]);
            if (! --CM.active) {
              CM.event.trigger("ajaxStop");
            }
          }
        }
      }
    },
    getJSON: function (Nx, Na, NS) {
      return CM.get(Nx, Na, NS, "json");
    },
    getScript: function (Nx, Na) {
      return CM.get(Nx, undefined, Na, "script");
    }
  });
  CM.each(["get", "post"], function (Nx, Na) {
    CM[Na] = function (NS, Nd, NL, Nm) {
      if (C8(Nd)) {
        Nm = Nm || NL;
        NL = Nd;
        Nd = undefined;
      }
      return CM.ajax(CM.extend({
        url: NS,
        type: Na,
        dataType: Nm,
        data: Nd,
        success: NL
      }, CM.isPlainObject(NS) && NS));
    };
  });
  CM._evalUrl = function (Nx) {
    return CM.ajax({
      url: Nx,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      throws: true
    });
  };
  CM.fn.extend({
    wrapAll: function (Nx) {
      if (this[0]) {
        if (C8(Nx)) {
          Nx = Nx.call(this[0]);
        }
        Nx = CM(Nx, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          Nx.insertBefore(this[0]);
        }
        Nx.map(function () {
          for (var Na = this; Na.firstElementChild;) {
            Na = Na.firstElementChild;
          }
          return Na;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (Nx) {
      if (C8(Nx)) {
        return this.each(function (Na) {
          CM(this).wrapInner(Nx.call(this, Na));
        });
      } else {
        return this.each(function () {
          var Na = CM(this);
          var NS = Na.contents();
          if (NS.length) {
            NS.wrapAll(Nx);
          } else {
            Na.append(Nx);
          }
        });
      }
    },
    wrap: function (Nx) {
      var Na = C8(Nx);
      return this.each(function (NS) {
        CM(this).wrapAll(Na ? Nx.call(this, NS) : Nx);
      });
    },
    unwrap: function (Nx) {
      this.parent(Nx).not("body").each(function () {
        CM(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  CM.expr.pseudos.hidden = function (Nx) {
    return !CM.expr.pseudos.visible(Nx);
  };
  CM.expr.pseudos.visible = function (Nx) {
    return !!Nx.offsetWidth || !!Nx.offsetHeight || !!Nx.getClientRects().length;
  };
  CM.ajaxSettings.xhr = function () {
    try {
      return new C6.XMLHttpRequest();
    } catch (Nx) {}
  };
  var NQ = {
    0: 200,
    1223: 204
  };
  var Nj = CM.ajaxSettings.xhr();
  Cv.cors = !!Nj && "withCredentials" in Nj;
  Cv.ajax = Nj = !!Nj;
  CM.ajaxTransport(function (Nx) {
    var Na;
    var NS;
    if (Cv.cors || Nj && !Nx.crossDomain) {
      return {
        send: function (Nd, NL) {
          var Nm;
          var No = Nx.xhr();
          No.open(Nx.type, Nx.url, Nx.async, Nx.username, Nx.password);
          if (Nx.xhrFields) {
            for (Nm in Nx.xhrFields) {
              No[Nm] = Nx.xhrFields[Nm];
            }
          }
          if (Nx.mimeType && No.overrideMimeType) {
            No.overrideMimeType(Nx.mimeType);
          }
          if (!Nx.crossDomain && !Nd["X-Requested-With"]) {
            Nd["X-Requested-With"] = "XMLHttpRequest";
          }
          for (Nm in Nd) {
            No.setRequestHeader(Nm, Nd[Nm]);
          }
          Na = function (Nc) {
            return function () {
              if (Na) {
                Na = NS = No.onload = No.onerror = No.onabort = No.ontimeout = No.onreadystatechange = null;
                if (Nc === "abort") {
                  No.abort();
                } else if (Nc === "error") {
                  if (typeof No.status != "number") {
                    NL(0, "error");
                  } else {
                    NL(No.status, No.statusText);
                  }
                } else {
                  NL(NQ[No.status] || No.status, No.statusText, (No.responseType || "text") !== "text" || typeof No.responseText != "string" ? {
                    binary: No.response
                  } : {
                    text: No.responseText
                  }, No.getAllResponseHeaders());
                }
              }
            };
          };
          No.onload = Na();
          NS = No.onerror = No.ontimeout = Na("error");
          if (No.onabort !== undefined) {
            No.onabort = NS;
          } else {
            No.onreadystatechange = function () {
              if (No.readyState === 4) {
                C6.setTimeout(function () {
                  if (Na) {
                    NS();
                  }
                });
              }
            };
          }
          Na = Na("abort");
          try {
            No.send(Nx.hasContent && Nx.data || null);
          } catch (Nc) {
            if (Na) {
              throw Nc;
            }
          }
        },
        abort: function () {
          if (Na) {
            Na();
          }
        }
      };
    }
  });
  CM.ajaxPrefilter(function (Nx) {
    if (Nx.crossDomain) {
      Nx.contents.script = false;
    }
  });
  CM.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (Nx) {
        CM.globalEval(Nx);
        return Nx;
      }
    }
  });
  CM.ajaxPrefilter("script", function (Nx) {
    if (Nx.cache === undefined) {
      Nx.cache = false;
    }
    if (Nx.crossDomain) {
      Nx.type = "GET";
    }
  });
  CM.ajaxTransport("script", function (Nx) {
    var Na;
    var NS;
    if (Nx.crossDomain) {
      return {
        send: function (Nd, NL) {
          Na = CM("<script>").prop({
            charset: Nx.scriptCharset,
            src: Nx.url
          }).on("load error", NS = function (Nm) {
            Na.remove();
            NS = null;
            if (Nm) {
              NL(Nm.type === "error" ? 404 : 200, Nm.type);
            }
          });
          CX.head.appendChild(Na[0]);
        },
        abort: function () {
          if (NS) {
            NS();
          }
        }
      };
    }
  });
  var NY = [];
  var Nz = /(=)\?(?=&|$)|\?\?/;
  CM.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var Nx = NY.pop() || CM.expando + "_" + Ni++;
      this[Nx] = true;
      return Nx;
    }
  });
  CM.ajaxPrefilter("json jsonp", function (Nx, Na, NS) {
    var Nd;
    var NL;
    var Nm;
    var No = Nx.jsonp !== false && (Nz.test(Nx.url) ? "url" : typeof Nx.data == "string" && (Nx.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Nz.test(Nx.data) && "data");
    if (No || Nx.dataTypes[0] === "jsonp") {
      Nd = Nx.jsonpCallback = C8(Nx.jsonpCallback) ? Nx.jsonpCallback() : Nx.jsonpCallback;
      if (No) {
        Nx[No] = Nx[No].replace(Nz, "$1" + Nd);
      } else if (Nx.jsonp !== false) {
        Nx.url += (Nu.test(Nx.url) ? "&" : "?") + Nx.jsonp + "=" + Nd;
      }
      Nx.converters["script json"] = function () {
        if (!Nm) {
          CM.error(Nd + " was not called");
        }
        return Nm[0];
      };
      Nx.dataTypes[0] = "json";
      NL = C6[Nd];
      C6[Nd] = function () {
        Nm = arguments;
      };
      NS.always(function () {
        if (NL === undefined) {
          CM(C6).removeProp(Nd);
        } else {
          C6[Nd] = NL;
        }
        if (Nx[Nd]) {
          Nx.jsonpCallback = Na.jsonpCallback;
          NY.push(Nd);
        }
        if (Nm && C8(NL)) {
          NL(Nm[0]);
        }
        Nm = NL = undefined;
      });
      return "script";
    }
  });
  (CC = CX.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>";
  Cv.createHTMLDocument = CC.childNodes.length === 2;
  CM.parseHTML = function (Nx, Na, NS) {
    var Nd;
    if (typeof Nx != "string") {
      return [];
    } else {
      if (typeof Na == "boolean") {
        NS = Na;
        Na = false;
      }
      if (!Na) {
        if (Cv.createHTMLDocument) {
          (Nd = (Na = CX.implementation.createHTMLDocument("")).createElement("base")).href = CX.location.href;
          Na.head.appendChild(Nd);
        } else {
          Na = CX;
        }
      }
      Nd = !NS && [];
      if (NS = CP.exec(Nx)) {
        return [Na.createElement(NS[1])];
      } else {
        NS = Xl([Nx], Na, Nd);
        if (Nd && Nd.length) {
          CM(Nd).remove();
        }
        return CM.merge([], NS.childNodes);
      }
    }
  };
  CM.fn.load = function (Nx, Na, NS) {
    var Nd;
    var NL;
    var Nm;
    var No = this;
    var Nc = Nx.indexOf(" ");
    if (Nc > -1) {
      Nd = NN(Nx.slice(Nc));
      Nx = Nx.slice(0, Nc);
    }
    if (C8(Na)) {
      NS = Na;
      Na = undefined;
    } else if (Na && typeof Na == "object") {
      NL = "POST";
    }
    if (No.length > 0) {
      CM.ajax({
        url: Nx,
        type: NL || "GET",
        dataType: "html",
        data: Na
      }).done(function (NZ) {
        Nm = arguments;
        No.html(Nd ? CM("<div>").append(CM.parseHTML(NZ)).find(Nd) : NZ);
      }).always(NS && function (NZ, NF) {
        No.each(function () {
          NS.apply(this, Nm || [NZ.responseText, NF, NZ]);
        });
      });
    }
    return this;
  };
  CM.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (Nx, Na) {
    CM.fn[Na] = function (NS) {
      return this.on(Na, NS);
    };
  });
  CM.expr.pseudos.animated = function (Nx) {
    return CM.grep(CM.timers, function (Na) {
      return Nx === Na.elem;
    }).length;
  };
  CM.offset = {
    setOffset: function (Nx, Na, NS) {
      var Nd;
      var NL;
      var Nm;
      var No;
      var Nc = CM.css(Nx, "position");
      var NZ = CM(Nx);
      var NF = {};
      if (Nc === "static") {
        Nx.style.position = "relative";
      }
      Nm = NZ.offset();
      Nd = CM.css(Nx, "top");
      No = CM.css(Nx, "left");
      Nc = (Nc === "absolute" || Nc === "fixed") && (Nd + No).indexOf("auto") > -1 ? (NL = (Nc = NZ.position()).top, Nc.left) : (NL = parseFloat(Nd) || 0, parseFloat(No) || 0);
      if ((Na = C8(Na) ? Na.call(Nx, NS, CM.extend({}, Nm)) : Na).top != null) {
        NF.top = Na.top - Nm.top + NL;
      }
      if (Na.left != null) {
        NF.left = Na.left - Nm.left + Nc;
      }
      if ("using" in Na) {
        Na.using.call(Nx, NF);
      } else {
        NZ.css(NF);
      }
    }
  };
  CM.fn.extend({
    offset: function (Nx) {
      var Na;
      var NS;
      if (arguments.length) {
        if (Nx === undefined) {
          return this;
        } else {
          return this.each(function (Nd) {
            CM.offset.setOffset(this, Nx, Nd);
          });
        }
      } else if (NS = this[0]) {
        if (NS.getClientRects().length) {
          Na = NS.getBoundingClientRect();
          NS = NS.ownerDocument.defaultView;
          return {
            top: Na.top + NS.pageYOffset,
            left: Na.left + NS.pageXOffset
          };
        } else {
          return {
            top: 0,
            left: 0
          };
        }
      } else {
        return undefined;
      }
    },
    position: function () {
      if (this[0]) {
        var Nx;
        var Na;
        var NS;
        var Nd = this[0];
        var NL = {
          top: 0,
          left: 0
        };
        if (CM.css(Nd, "position") === "fixed") {
          Na = Nd.getBoundingClientRect();
        } else {
          Na = this.offset();
          NS = Nd.ownerDocument;
          Nx = Nd.offsetParent || NS.documentElement;
          while (Nx && (Nx === NS.body || Nx === NS.documentElement) && CM.css(Nx, "position") === "static") {
            Nx = Nx.parentNode;
          }
          if (Nx && Nx !== Nd && Nx.nodeType === 1) {
            (NL = CM(Nx).offset()).top += CM.css(Nx, "borderTopWidth", true);
            NL.left += CM.css(Nx, "borderLeftWidth", true);
          }
        }
        return {
          top: Na.top - NL.top - CM.css(Nd, "marginTop", true),
          left: Na.left - NL.left - CM.css(Nd, "marginLeft", true)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var Nx = this.offsetParent; Nx && CM.css(Nx, "position") === "static";) {
          Nx = Nx.offsetParent;
        }
        return Nx || XO;
      });
    }
  });
  CM.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (Nx, Na) {
    var NS = Na === "pageYOffset";
    CM.fn[Nx] = function (Nd) {
      return Cd(this, function (NL, Nm, No) {
        var Nc;
        if (C9(NL)) {
          Nc = NL;
        } else if (NL.nodeType === 9) {
          Nc = NL.defaultView;
        }
        if (No === undefined) {
          if (Nc) {
            return Nc[Na];
          } else {
            return NL[Nm];
          }
        }
        if (Nc) {
          Nc.scrollTo(NS ? Nc.pageXOffset : No, NS ? No : Nc.pageYOffset);
        } else {
          NL[Nm] = No;
        }
      }, Nx, Nd, arguments.length);
    };
  });
  CM.each(["top", "left"], function (Nx, Na) {
    CM.cssHooks[Na] = Xa(Cv.pixelPosition, function (NS, Nd) {
      if (Nd) {
        Nd = Xx(NS, Na);
        if (XY.test(Nd)) {
          return CM(NS).position()[Na] + "px";
        } else {
          return Nd;
        }
      }
    });
  });
  CM.each({
    Height: "height",
    Width: "width"
  }, function (Nx, Na) {
    CM.each({
      padding: "inner" + Nx,
      content: Na,
      "": "outer" + Nx
    }, function (NS, Nd) {
      CM.fn[Nd] = function (NL, Nm) {
        var No = arguments.length && (NS || typeof NL != "boolean");
        var Nc = NS || (NL === true || Nm === true ? "margin" : "border");
        return Cd(this, function (NZ, NF, NV) {
          var Nh;
          if (C9(NZ)) {
            if (Nd.indexOf("outer") === 0) {
              return NZ["inner" + Nx];
            } else {
              return NZ.document.documentElement["client" + Nx];
            }
          } else if (NZ.nodeType === 9) {
            Nh = NZ.documentElement;
            return Math.max(NZ.body["scroll" + Nx], Nh["scroll" + Nx], NZ.body["offset" + Nx], Nh["offset" + Nx], Nh["client" + Nx]);
          } else if (NV === undefined) {
            return CM.css(NZ, NF, Nc);
          } else {
            return CM.style(NZ, NF, NV, Nc);
          }
        }, Na, No ? NL : undefined, No);
      };
    });
  });
  CM.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (Nx, Na) {
    CM.fn[Na] = function (NS, Nd) {
      if (arguments.length > 0) {
        return this.on(Na, null, NS, Nd);
      } else {
        return this.trigger(Na);
      }
    };
  });
  CM.fn.extend({
    hover: function (Nx, Na) {
      return this.mouseenter(Nx).mouseleave(Na || Nx);
    }
  });
  CM.fn.extend({
    bind: function (Nx, Na, NS) {
      return this.on(Nx, null, Na, NS);
    },
    unbind: function (Nx, Na) {
      return this.off(Nx, null, Na);
    },
    delegate: function (Nx, Na, NS, Nd) {
      return this.on(Na, Nx, NS, Nd);
    },
    undelegate: function (Nx, Na, NS) {
      if (arguments.length === 1) {
        return this.off(Nx, "**");
      } else {
        return this.off(Na, Nx || "**", NS);
      }
    }
  });
  CM.proxy = function (Nx, Na) {
    var NS;
    var Nd;
    if (typeof Na == "string") {
      Nd = Nx[Na];
      Na = Nx;
      Nx = Nd;
    }
    if (C8(Nx)) {
      NS = Cl.call(arguments, 2);
      (Nd = function () {
        return Nx.apply(Na || this, NS.concat(Cl.call(arguments)));
      }).guid = Nx.guid = Nx.guid || CM.guid++;
      return Nd;
    }
  };
  CM.holdReady = function (Nx) {
    if (Nx) {
      CM.readyWait++;
    } else {
      CM.ready(true);
    }
  };
  CM.isArray = Array.isArray;
  CM.parseJSON = JSON.parse;
  CM.nodeName = CW;
  CM.isFunction = C8;
  CM.isWindow = C9;
  CM.camelCase = Cc;
  CM.type = Cq;
  CM.now = Date.now;
  CM.isNumeric = function (Nx) {
    var Na = CM.type(Nx);
    return (Na === "number" || Na === "string") && !isNaN(Nx - parseFloat(Nx));
  };
  if (typeof define == "function" && define.amd) {
    define("jquery", [], function () {
      return CM;
    });
  }
  var Ng = C6.jQuery;
  var NH = C6.$;
  CM.noConflict = function (Nx) {
    if (C6.$ === CM) {
      C6.$ = NH;
    }
    if (Nx && C6.jQuery === CM) {
      C6.jQuery = Ng;
    }
    return CM;
  };
  if (!C7) {
    C6.jQuery = C6.$ = CM;
  }
  return CM;
});
(() => {
  var C6;
  var C7;
  var C8;
  var C9;
  var CC = {
    696: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cb
      });
      const Cb = {
        advertising: {
          admessage: "This ad will end in xx",
          cuetext: "Advertisement",
          displayHeading: "Advertisement",
          loadingAd: "Loading ad",
          podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
          skipmessage: "Skip ad in xx",
          skiptext: "Skip"
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
          badConnection: "This video cannot be played because of a problem with your internet connection.",
          cantLoadPlayer: "Sorry, the video player failed to load.",
          cantPlayInBrowser: "The video cannot be played in this browser.",
          cantPlayVideo: "This video file cannot be played.",
          errorCode: "Error Code",
          liveStreamDown: "The live stream is either down or has ended.",
          protectedContent: "There was a problem providing access to protected content.",
          technicalError: "This video cannot be played because of a technical error."
        },
        exitFullscreen: "Exit Fullscreen",
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        mute: "Mute",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        pipIcon: "Picture in Picture (PiP)",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {
          autoplaymessage: "Next up in xx",
          heading: "More Videos"
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
          copied: "Copied",
          email: "Email",
          embed: "Embed",
          heading: "Share",
          link: "Link"
        },
        slider: "Seek",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume",
        shortcuts: {
          playPause: "Play/Pause",
          volumeToggle: "Mute/Unmute",
          fullscreenToggle: "Fullscreen/Exit Fullscreen",
          seekPercent: "Seek %",
          keyboardShortcuts: "Keyboard Shortcuts",
          increaseVolume: "Increase Volume",
          decreaseVolume: "Decrease Volume",
          seekForward: "Seek Forward",
          seekBackward: "Seek Backward",
          spacebar: "SPACE",
          captionsToggle: "Captions On/Off",
          shortcutsToggle: "Shortcuts Open/Close"
        },
        captionsStyles: {
          subtitleSettings: "Subtitle Settings",
          color: "Font Color",
          fontOpacity: "Font Opacity",
          userFontScale: "Font Size",
          fontFamily: "Font Family",
          edgeStyle: "Character Edge",
          backgroundColor: "Background Color",
          backgroundOpacity: "Background Opacity",
          windowColor: "Window Color",
          windowOpacity: "Window Opacity",
          white: "White",
          black: "Black",
          red: "Red",
          green: "Green",
          blue: "Blue",
          yellow: "Yellow",
          magenta: "Magenta",
          cyan: "Cyan",
          none: "None",
          raised: "Raised",
          depressed: "Depressed",
          uniform: "Uniform",
          dropShadow: "Drop Shadow"
        },
        disabled: "Disabled",
        enabled: "Enabled",
        reset: "Reset"
      };
    },
    9128: (CO, CB, CG) => {
      'use strict';

      function Cb(CT, Ci, Cu) {
        function CU() {
          while (Cv.length > 0) {
            var {
              command: CE,
              args: Cq
            } = Cv.shift();
            (CK[CE] || CT[CE]).apply(CT, Cq);
          }
        }
        const Cv = [];
        const CK = {};
        Ci.forEach(CE => {
          const Cq = CT[CE];
          CK[CE] = Cq;
          CT[CE] = function (...CM) {
            if (Cu()) {
              Cv.push({
                command: CE,
                args: CM
              });
            } else {
              CU();
              if (Cq) {
                Cq.apply(this, CM);
              }
            }
          };
        });
        Object.defineProperty(this, "queue", {
          enumerable: true,
          get: () => Cv
        });
        this.flush = CU;
        this.empty = function () {
          Cv.length = 0;
        };
        this.off = function () {
          Ci.forEach(CE => {
            var Cq = CK[CE];
            if (Cq) {
              CT[CE] = Cq;
              delete CK[CE];
            }
          });
        };
        this.destroy = function () {
          this.off();
          this.empty();
        };
      }
      CG.d(CB, {
        Z: () => Cb
      });
    },
    4742: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cb
      });
      const Cb = {
        debug: false
      };
    },
    5191: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        R: () => CT,
        a: () => Cb
      });
      const Cb = function (Ci) {
        return Ci = Ci.slice && Ci.slice(-2) === "px" ? Ci.slice(0, -2) : Ci;
      };
      const CT = function (Ci, Cu) {
        var CU;
        if (Cu.toString().indexOf("%") !== -1 && typeof Ci == "string" && Ci) {
          if (/^\d*\.?\d+%$/.test(Ci)) {
            return Ci;
          } else if ((Cu = Ci.indexOf(":")) === -1 || (CU = parseFloat(Ci.substr(0, Cu)), Ci = parseFloat(Ci.substr(Cu + 1)), CU <= 0) || Ci <= 0) {
            return 0;
          } else {
            return Ci / CU * 100 + "%";
          }
        } else {
          return 0;
        }
      };
    },
    5083: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        G0: () => Cq,
        ZP: () => CM,
        ke: () => CE
      });
      var Cb = CG(5191);
      var CT = CG(1569);
      var Ci = CG(9888);
      var Cu = CG(6042);
      var CU = CG(8348);
      var Cv = CG(696);
      var CK = CG(8518);
      const CE = {
        autoPause: {
          viewability: false,
          pauseAds: false
        },
        autostart: false,
        allowFullscreen: true,
        bandwidthEstimate: null,
        bitrateSelection: null,
        castAvailable: false,
        controls: true,
        cues: [],
        defaultPlaybackRate: 1,
        displaydescription: true,
        displaytitle: true,
        displayPlaybackLabel: false,
        enableAdLoadingUI: true,
        enableShortcuts: true,
        floating: {
          mode: "never"
        },
        height: 360,
        intl: {},
        item: 0,
        language: "en",
        liveTimeout: null,
        localization: Cv.Z,
        mute: false,
        nextUpDisplay: true,
        playbackRateControls: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: false,
        repeat: false,
        showUIWhen: "onReady",
        stretching: "uniform",
        volume: 90,
        width: 640
      };
      const Cq = function (CJ) {
        if (CJ < 5) {
          return 5;
        } else {
          return CJ;
        }
      };
      const CM = function (CJ, CR) {
        var Cs;
        var Cw = {};
        if (CR && function (CP) {
          if (CP == null) {
            throw new TypeError("Cannot convert undefined or null to object");
          }
          return Object.prototype.hasOwnProperty.call(Object(CP), "mute");
        }(CR)) {
          if (typeof CR.mute == "boolean") {
            Cw.mute = CR.mute;
          }
          delete CR.mute;
        }
        var Cw = Object.assign({}, Cw, (Cw = window) == null || (Cw = Cw.jwplayer) == null ? undefined : Cw.defaults, CR, CJ);
        Cs = Cw;
        Object.keys(Cs).forEach(CP => {
          if (CP !== "id") {
            Cs[CP] = (0, Ci.serialize)(Cs[CP]);
          }
        });
        var CR = Cw.forceLocalizationDefaults ? CE.language : (0, CK.G3)();
        var CJ = (0, CK.tK)(Cw.intl);
        Cw.localization = (0, CK.Mh)(Cv.Z, (0, CK.Pm)(Cw, CJ, CR));
        var Cf = Object.assign({}, CE, Cw);
        if (Cf.base === ".") {
          Cf.base = (0, CT.getScriptPath)("jwplayer.js");
        }
        Cf.base = (Cf.base || (0, CT.loadFrom)()).replace(/\/?$/, "/");
        CG.p = Cf.base;
        Cf.width = (0, Cb.a)(Cf.width);
        Cf.height = (0, Cb.a)(Cf.height);
        Cf.aspectratio = (0, Cb.R)(Cf.aspectratio, Cf.width);
        if (typeof Cf.volume == "string") {
          Cf.volume = parseFloat(Cf.volume);
        }
        Cf.volume = (0, Cu.qh)(Cf.volume) ? Math.min(Math.max(0, Cf.volume), 100) : CE.volume;
        Cf.mute = Boolean(Cf.mute);
        Cf.language = CR;
        Cf.intl = CJ;
        var CR = Cf.playlistIndex;
        if (CR) {
          Cf.item = CR;
        }
        if (!(0, Cu.hj)(Cf.item)) {
          Cf.item = 0;
        }
        var CJ = Cw.autoPause;
        if (CJ) {
          Cf.autoPause.viewability = !("viewability" in CJ) || Boolean(CJ.viewability);
        }
        var CR = Cf.playbackRateControls;
        if (CR) {
          let CP = Cf.playbackRates;
          if ((CP = (CP = Array.isArray(CR) ? CR : CP).filter(Cn => (0, Cu.hj)(Cn) && Cn >= 0.25 && Cn <= 4).map(Cn => Math.round(Cn * 100) / 100)).indexOf(1) < 0) {
            CP.push(1);
          }
          CP.sort();
          Cf.playbackRateControls = true;
          Cf.playbackRates = CP;
        }
        if (!Cf.playbackRateControls || Cf.playbackRates.indexOf(Cf.defaultPlaybackRate) < 0) {
          Cf.defaultPlaybackRate = 1;
        }
        Cf.playbackRate = Cf.defaultPlaybackRate;
        if (!Cf.aspectratio) {
          delete Cf.aspectratio;
        }
        Cw = Cf.playlist;
        if (Cw) {
          if (Array.isArray(Cw.playlist)) {
            Cf.feedData = Cw;
            Cf.playlist = Cw.playlist;
          }
        } else {
          const Cn = (0, Cu.ei)(Cf, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration", "chapters"]);
          Cf.playlist = [Cn];
        }
        Cf.qualityLabels = Cf.qualityLabels || Cf.hlslabels;
        delete Cf.duration;
        let CW = Cf.liveTimeout;
        if (CW !== null) {
          if ((0, Cu.qh)(CW)) {
            if (CW !== 0) {
              CW = Math.max(30, CW);
            }
          } else {
            CW = null;
          }
          Cf.liveTimeout = CW;
        }
        CJ = parseFloat(Cf.bandwidthEstimate);
        CR = parseFloat(Cf.bitrateSelection);
        Cf.bandwidthEstimate = (0, Cu.qh)(CJ) ? CJ : function (Cy) {
          Cy = parseFloat(Cy);
          if ((0, Cu.qh)(Cy)) {
            return Math.max(Cy, 1);
          } else {
            return CE.bandwidthEstimate;
          }
        }(Cf.defaultBandwidthEstimate);
        Cf.bitrateSelection = (0, Cu.qh)(CR) ? CR : CE.bitrateSelection;
        Cf.liveSyncDuration = Cq(Cf.liveSyncDuration);
        Cf.backgroundLoading = ((0, Cu.jn)(Cf.backgroundLoading) ? Cf : CU.Features).backgroundLoading;
        Cf.enableAdLoadingUI = !CU.Features.enableAdLoadingUI || Boolean(Cf.enableAdLoadingUI);
        return Cf;
      };
    },
    2894: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Ep: () => Ci,
        Jt: () => Cu,
        Tr: () => CT,
        Zq: () => CU
      });
      var Cb = CG(4446);
      const CT = {};
      const Ci = function (Cv, CK) {
        return () => {
          throw new Cb.rG(Cb.pJ, Cv, CK);
        };
      };
      const Cu = function (Cv, CK) {
        return () => {
          throw new Cb.rG(null, Cv, CK);
        };
      };
      const CU = function () {
        return CG.e(681).then(function (Cv) {
          return CG(7047).default;
        }.bind(null, CG)).catch(Ci(Cb.fU + 101));
      };
    },
    623: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        ZP: () => X5,
        c2: () => X4
      });
      var Cb = CG(9128);
      var CT = CG(2445);
      var Ci = CG(2894);
      var Cu = CG(393);
      var CU = CG(8320);
      var Cv = CG(2963);
      var CK = CG(670);
      var CE = CG(4601);
      var Cq = CG(4446);
      var CM = CG(8348);
      let CJ = null;
      function CR() {
        var X6 = window.IntersectionObserverEntry;
        return !X6 || !("IntersectionObserver" in window) || !("intersectionRatio" in X6.prototype);
      }
      function Cs() {
        return (CR() ? CG.e(943).then(function (X6) {
          return CG(6337);
        }.bind(null, CG)).catch((0, Ci.Ep)(Cq.fU + 120)) : Promise.resolve()).then(Ci.Zq);
      }
      const Cw = function (X6) {
        var X7;
        var X8 = X6.get("controls");
        var X9 = CR();
        var X6 = function (XC) {
          const XX = XC.get("playlist");
          if (Array.isArray(XX) && XX.length) {
            var XN = (0, CU.bx)(XC.get("item"), XX.length);
            var Xl = (0, CU.T5)((0, Cu.Z)(XX[XN]), XC);
            for (let XG = 0; XG < Xl.length; XG++) {
              var XO = Xl[XG];
              var XB = XC.getProviders();
              for (let Xb = 0; Xb < Cv.B.length; Xb++) {
                const XT = Cv.B[Xb];
                if (XB.providerSupports(XT, XO)) {
                  return XT.name === "html5";
                }
              }
            }
          }
          return false;
        }(X6);
        if (CM.OS.tizen) {
          return Cs();
        } else if (X8 && X9 && X6) {
          X7 = CG.e(605).then(function (XC) {
            CG(6337);
            var XX = CG(7047).default;
            CE.v.controls = CG(5827).default;
            (0, CK.Z)(CG(9181).default);
            return XX;
          }.bind(null, CG)).catch((0, Ci.Ep)(Cq.fU + 105));
          return Ci.Tr.html5 = X7;
        } else if (X8 && X6) {
          X7 = CG.e(207).then(function (XC) {
            var XX = CG(7047).default;
            CE.v.controls = CG(5827).default;
            (0, CK.Z)(CG(9181).default);
            return XX;
          }.bind(null, CG)).catch((0, Ci.Ep)(Cq.fU + 104));
          return Ci.Tr.html5 = X7;
        } else if (X8 && X9) {
          return CG.e(493).then(function (XC) {
            CG(6337);
            var XX = CG(7047).default;
            CE.v.controls = CG(5827).default;
            return XX;
          }.bind(null, CG)).catch((0, Ci.Ep)(Cq.fU + 103));
        } else if (X8) {
          return CG.e(581).then(function (XC) {
            var XX = CG(7047).default;
            CE.v.controls = CG(5827).default;
            return XX;
          }.bind(null, CG)).catch((0, Ci.Ep)(Cq.fU + 102));
        } else {
          return Cs();
        }
      };
      var Cf = CG(1643);
      var CW = CG(7263);
      var CP = CG(676);
      var Cn = CG(8518);
      var Cy = CG(8675);
      var CD = CG(8381);
      function Cp(X6, X7, X8) {
        (X6 = X6.attributes).playlist = (0, CU.ZP)(X7);
        X6.feedData = X8;
      }
      function Ct(X6) {
        const X7 = X6.get("playlist");
        return new Promise((X8, X9) => {
          if (typeof X7 != "string") {
            const XX = X6.get("feedData") || {};
            Cp(X6, X7, XX);
            return X8();
          }
          var XC = new CW.Z();
          XC.on(Cf.Ow, function (XN) {
            var Xl = XN.playlist;
            delete XN.playlist;
            Cp(X6, Xl, XN);
            X8();
          });
          XC.on(Cf.pn, XN => {
            Cp(X6, [], {});
            X9((0, Cq.l9)(XN, Cq.xk));
          });
          XC.load(X7);
        });
      }
      function CQ(X6) {
        return X6.attributes._destroyed;
      }
      var Cj = CG(1918);
      var CY = CG(6599);
      var Cz = CG(7010);
      function Cg(X6) {
        let X7;
        this.start = function (X8) {
          const X9 = CS(X6, X8);
          const XC = Promise.all([(X8 = X6, CJ = CJ || Cw(X8)), CL(X6), X9, Ca(X6), Ce(X6), CH(X6), Cd(X6)]);
          X8 = new Promise((XX, XN) => {
            X7 = setTimeout(() => {
              XN(new Cq.rG(Cq.pJ, Cq.T6));
            }, 60000);
            var Xl = () => {
              clearTimeout(X7);
              setTimeout(XX, 60000);
            };
            XC.then(Xl).catch(Xl);
          });
          return Promise.race([XC, X8]).catch(XX => {
            var XN = () => {
              throw XX;
            };
            return X9.then(XN).catch(XN);
          }).then(XX => {
            if ((XX = XX) && XX.length) {
              XN = XX.reduce((Xl, XO) => Xl.concat(XO), []).filter(Xl => Xl == null ? undefined : Xl.code);
              return {
                core: XX[0],
                warnings: XN
              };
            } else {
              return {
                core: null,
                warnings: []
              };
            }
            var XN;
          });
        };
        this.destroy = function () {
          clearTimeout(X7);
          X6.set("_destroyed", true);
          X6 = null;
        };
      }
      const CH = function (X6) {
        var X7 = X6.get("skin") ? X6.get("skin").url : undefined;
        if (typeof X7 != "string" || function (X8) {
          var X9 = document.styleSheets;
          for (let XC = 0, XX = X9.length; XC < XX; XC++) {
            if (X9[XC].href === X8) {
              return 1;
            }
          }
        }(X7)) {
          return Promise.resolve();
        }
        {
          const X8 = true;
          return new CP.ZP(X7, true).load().catch(X9 => X9);
        }
      };
      const Cx = X6 => {
        X6 = X6.get("advertising");
        return Boolean(X6 == null ? undefined : X6.outstream);
      };
      const Ca = X6 => Cx(X6) ? Promise.resolve() : Ct(X6).then(() => {
        if (X6.get("drm") || (0, Cj.w0)(X6.get("playlist"))) {
          return (0, Cj.lD)(X6.get("edition"));
        }
      }).then(() => {
        return Ct(X7 = X6).then(() => {
          if (!CQ(X7)) {
            var X8 = (0, CU.s7)(X7.get("playlist"), X7);
            X7.attributes.playlist = X8;
            try {
              (0, CU._)(X8);
            } catch (XN) {
              XN.code += Cq.xk;
              throw XN;
            }
            var X9 = X7.getProviders();
            var XC = (0, CU.bx)(X7.get("item"), X8.length);
            var {
              provider: XC,
              name: XX
            } = X9.choose(X8[XC].sources[0]);
            if (typeof XC == "function") {
              return XC;
            } else if (Ci.Tr.html5 && XX === "html5") {
              return Ci.Tr.html5;
            } else {
              return X9.load(XX).catch(Xl => {
                throw (0, Cq.l9)(Xl, Cq.y4);
              });
            }
          }
        });
        var X7;
      });
      const Ce = (X6, X7) => {
        var X8 = [(X9 => {
          const XC = X9.attributes;
          const XX = XC.error;
          if (XX && XX.code === CY.u5) {
            const XN = XC.pid;
            const Xl = XC.ph;
            const XO = new CY.ZP(XC.key);
            if (Xl > 0 && Xl < 4 && XN && XO.duration() > -7776000000) {
              return new CP.ZP("//content.jwplatform.com/libraries/" + XN + ".js").load().then(() => {
                var XB = window.jwplayer.defaults.key;
                var XG = new CY.ZP(XB);
                if (!XG.error() && XG.token() === XO.token()) {
                  XC.key = XB;
                  XC.edition = XG.edition();
                  XC.error = XG.error();
                }
              }).catch(() => {});
            }
          }
          return Promise.resolve();
        })(X6)];
        if (!Cx(X6)) {
          X8.push(Promise.resolve());
        }
        return Promise.all(X8);
      };
      const CS = (X6, X7) => {
        var X8;
        var X9;
        var XC;
        var XX = () => (0, Cy.ZP)(X6, X7);
        if ((0, Cz.Z)()) {
          X9 = X8 = X6;
          XC = X7;
          return CG.e(168).then((XN => new (CG(5545).default)(XC).setup(X9)).bind(null, CG)).catch((0, Ci.Ep)(Cq.fU + 130)).then(() => CH(X8)).then(XX).catch(XX);
        } else {
          return XX();
        }
      };
      const Cd = function (X6) {
        const X7 = X6.attributes;
        const {
          language: X8,
          base: X9,
          setupConfig: XC,
          intl: XX
        } = X7;
        const XN = (0, Cn.Pm)(XC, XX, X8);
        if (!(0, Cn.q2)(X8) || (0, Cn.dl)(XN)) {
          return Promise.resolve();
        } else {
          return new Promise(Xl => (0, Cn.Dq)(X9, X8).then(({
            response: XO
          }) => {
            if (!CQ(X6)) {
              if (!XO) {
                throw new Cq.rG(null, Cq.wH);
              }
              X7.localization = (0, Cn.Mh)(XO, XN);
              Xl();
            }
          }).catch(XO => {
            Xl(XO.code === Cq.wH ? XO : (0, Cq.l9)(XO, Cq.A6));
          }));
        }
      };
      const CL = X6 => new Promise(X7 => {
        var X8;
        if (X6.attributes.liveSyncDuration > 45) {
          return X7((0, Cq.l9)(new Error(), Cq.wM));
        } else if ((X8 = Array.isArray(X6.attributes.playlist) && X6.attributes.playlist.map(X9 => X9.chapters)) != null && X8.length) {
          return (0, CD.T2)(X8, X7);
        } else {
          return X7();
        }
      });
      var Cm = CG(2303);
      var Co = CG(7411);
      var Cc = CG(9888);
      var CZ = CG(4742);
      let CF = {
        removeItem(X6) {}
      };
      try {
        CF = window.localStorage || CF;
      } catch (X6) {}
      const CV = class {
        constructor(X7, X8) {
          this.namespace = X7;
          this.items = X8;
        }
        getAllItems() {
          return this.items.reduce((X7, X8) => {
            var X9 = CF[this.namespace + "." + X8];
            if (X9) {
              X7[X8] = X8 !== "captions" ? (0, Cc.serialize)(X9) : JSON.parse(X9);
            }
            return X7;
          }, {});
        }
        track(X7) {
          this.items.forEach(X8 => {
            X7.on("change:" + X8, (X9, XC) => {
              try {
                if (X8 === "captions") {
                  XC = JSON.stringify(XC);
                }
                CF[this.namespace + "." + X8] = XC;
              } catch (XX) {
                if (CZ.Z.debug) {
                  console.error(XX);
                }
              }
            });
          });
        }
        clear() {
          this.items.forEach(X7 => {
            CF.removeItem(this.namespace + "." + X7);
          });
        }
      };
      var Ch = CG(7753);
      var CA = CG(9918);
      var CB = CG(328);
      var CI = CG(4225);
      var Cr = CG(7683);
      var Ck = CG(4609);
      var X0 = CG(5882);
      CG(4671);
      CG(9926);
      function X1(X7, X8) {
        if (X8 && X8.code) {
          if (X8.sourceError) {
            console.error(X8.sourceError);
          }
          console.error(Cq.rG.logMessage(X8.code));
        }
      }
      function X2(X7) {
        if (X7 && X7.code) {
          console.warn(Cq.rG.logMessage(X7.code));
        }
      }
      function X3(X7) {
        this._events = {};
        this.modelShim = new Ch.Z();
        this.modelShim._qoeItem = new Co.Z();
        this.mediaShim = {};
        this.setup = new Cg(this.modelShim);
        this.currentContainer = this.originalContainer = X7;
        this.apiQueue = new Cb.Z(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle", "requestCast", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "getCues", "setPlaylistItem", "stopCasting", "getChapters", "getCurrentChapter", "setChapter", "resize", "setCaptions", "setControls"], () => true);
      }
      const X4 = function (X7, X8) {
        if (!document.body.contains(X7.currentContainer)) {
          const X9 = document.getElementById(X7.get("id"));
          if (X9) {
            X7.currentContainer = X9;
          }
        }
        if (X7.currentContainer.parentElement) {
          X7.currentContainer.parentElement.replaceChild(X8, X7.currentContainer);
        }
        X7.currentContainer = X8;
      };
      Object.assign(X3.prototype, {
        on: CB.ZP.on,
        once: CB.ZP.once,
        off: CB.ZP.off,
        trigger: CB.ZP.trigger,
        init(X7, X8) {
          const X9 = this.modelShim;
          const XC = new CV("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]);
          const XX = XC == null ? undefined : XC.getAllItems();
          X9.attributes = X9.attributes || {};
          Object.assign(this.mediaShim, CA.L4);
          const XN = X7;
          const Xl = (0, CT.ZP)(Object.assign({}, X7), XX);
          Xl.id = X8.id;
          Xl.setupConfig = XN;
          Object.assign(X9.attributes, Xl, CA.bv);
          X9.getProviders = function () {
            return new Cm.Z(Xl);
          };
          X9.setProvider = function () {};
          let XO = (0, Cr.Z)();
          {
            if (!X9.get("backgroundLoading")) {
              XO = (0, Ck.Z)(XO.getPrimedElement(), XO);
            }
            const XB = this.primeUi = new X0.ZP((0, X0.GU)(this.originalContainer)).once("gesture", () => {
              XO.prime();
              this.preload();
              XB.destroy();
            });
          }
          X9.on("change:errorEvent", X1);
          return this.setup.start(X8).then(XG => {
            var Xb = XG.core;
            if (!Xb) {
              throw (0, Cq.l9)(null, Cq.y7);
            }
            if (this.setup) {
              this.on(Cf.cM, X2);
              XG.warnings.forEach(Xi => {
                this.trigger(Cf.cM, Xi);
              });
              XG = this.modelShim.clone();
              if (XG.error) {
                throw XG.error;
              }
              var XT = this.apiQueue.queue.slice(0);
              this.apiQueue.destroy();
              Object.assign(this, Xb.prototype);
              this.playerSetup(XG, X8, this.originalContainer, this._events, XT, XO);
              var Xb = this._model;
              X9.off("change:errorEvent", X1);
              Xb.on("change:errorEvent", X1);
              XC.track(Xb);
              return this.updatePlaylist(Xb.get("playlist"), Xb.get("feedData")).catch(Xi => {
                var Xu = Xi.code === Cq._M ? Cq.IB : Cq.xk;
                throw (0, Cq.l9)(Xi, Xu);
              });
            }
          }).then(() => {
            if (this.setup) {
              this.playerReady();
            }
          }).catch(XG => {
            var Xb;
            var XT;
            var Xi;
            if (this.setup) {
              Xb = this;
              XT = X8;
              Xi = XG;
              Promise.resolve().then(() => {
                var Xu = (0, Cq.Mm)(Cq.ud, Cq.nk, Xi);
                var XU = Xb._model || Xb.modelShim;
                Xu.message = Xu.message || XU.get("localization").errors[Xu.key];
                delete Xu.key;
                var Xv = XU.get("contextual");
                if (!Xv) {
                  const XK = (0, CI.Z)(Xb, Xu);
                  if (CI.Z.cloneIcon) {
                    XK.querySelector(".jw-icon").appendChild(CI.Z.cloneIcon("error"));
                  }
                  X4(Xb, XK);
                }
                XU.set("errorEvent", Xu);
                XU.set("state", Cf.Vy);
                Xb.trigger(Cf.HH, Xu);
                if (Xv) {
                  XT.remove();
                }
              });
            }
          });
        },
        playerDestroy() {
          if (this.destroy) {
            this.destroy();
          }
          if (this.apiQueue) {
            this.apiQueue.destroy();
          }
          if (this.setup) {
            this.setup.destroy();
          }
          if (this.primeUi) {
            this.primeUi.destroy();
          }
          if (this.currentContainer !== this.originalContainer) {
            X4(this, this.originalContainer);
          }
          this.off();
          this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null;
        },
        getContainer() {
          return this.currentContainer;
        },
        get(X7) {
          if (this.modelShim) {
            if (X7 in this.mediaShim) {
              return this.mediaShim[X7];
            } else {
              return this.modelShim.get(X7);
            }
          }
        },
        getItemQoe() {
          return this.modelShim._qoeItem;
        },
        getItemPromise: () => null,
        setItemCallback(X7) {
          if (this.modelShim) {
            this.modelShim.attributes.playlistItemCallback = X7;
          }
        },
        getConfig() {
          return Object.assign({}, this.modelShim.attributes, this.mediaShim);
        },
        getCurrentCaptions() {
          return this.get("captionsIndex");
        },
        getWidth() {
          return this.get("containerWidth");
        },
        getHeight() {
          return this.get("containerHeight");
        },
        getMute() {
          return this.get("mute");
        },
        getProvider() {
          return this.get("provider");
        },
        getState() {
          return this.get("state");
        },
        getAbsolutePosition: () => null,
        getAudioTracks: () => null,
        getCaptionsList: () => null,
        getQualityLevels: () => null,
        getVisualQuality: () => null,
        getCurrentQuality: () => -1,
        getCurrentAudioTrack: () => -1,
        getSafeRegion: () => ({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }),
        isBeforeComplete: () => false,
        isBeforePlay: () => false,
        createInstream: () => null,
        skipAd() {},
        getMediaElement() {},
        attachMedia() {},
        detachMedia() {},
        isReady() {
          var X7;
          return ((X7 = this._model) == null ? undefined : X7.get("isReady")) || false;
        }
      });
      const X5 = X3;
    },
    4446: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        A6: () => Cn,
        DD: () => Cq,
        EY: () => Cw,
        H4: () => CY,
        IB: () => CK,
        MD: () => Cp,
        Mm: () => CH,
        Sp: () => Cj,
        T6: () => Ci,
        Y7: () => CP,
        YQ: () => CE,
        _M: () => Cs,
        aD: () => CW,
        fU: () => CU,
        l9: () => Cx,
        nk: () => CT,
        nm: () => Ca,
        o2: () => CR,
        pJ: () => Ct,
        rG: () => Cg,
        tJ: () => CJ,
        ud: () => Cz,
        ul: () => CD,
        wH: () => Cy,
        wM: () => Cf,
        xk: () => Cv,
        y4: () => CM,
        y7: () => Cu,
        zO: () => CQ
      });
      var Cb = CG(6042);
      const CT = 100000;
      const Ci = 100001;
      const Cu = 100002;
      const CU = 101000;
      const Cv = 102000;
      const CK = 102700;
      const CE = 200001;
      const Cq = 202000;
      const CM = 104000;
      const CJ = 203000;
      const CR = 203640;
      const Cs = 203700;
      const Cw = 204000;
      const Cf = 300100;
      const CW = 300200;
      const CP = 306000;
      const Cn = 308000;
      const Cy = 308640;
      const CD = "cantPlayVideo";
      const Cp = "badConnection";
      const Ct = "cantLoadPlayer";
      const CQ = "cantPlayInBrowser";
      const Cj = "liveStreamDown";
      const CY = "protectedContent";
      const Cz = "technicalError";
      class Cg {
        constructor(Ce, CS, Cd) {
          this.code = (0, Cb.qh)(CS) ? CS : 0;
          this.sourceError = Cd || null;
          if (Ce) {
            this.key = Ce;
          } else {
            delete this.key;
          }
        }
        static logMessage(Ce) {
          var CS = Ce % 1000;
          var Cd = Math.floor((Ce - CS) / 1000);
          let CL = Ce.toString();
          return "JW Player " + (Ce > 299999 && Ce < 400000 ? "Warning" : "Error") + " " + Ce + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + (CL = CS >= 400 && CS < 600 ? Cd + ("400-" + Cd + "599") : CL);
        }
      }
      const CH = function (Ce, CS, Cd) {
        if (Cd instanceof Cg && Cd.code) {
          return Cd;
        } else {
          return new Cg(Ce, CS, Cd);
        }
      };
      const Cx = function (Ce, CS) {
        var Cd = CH(Cz, CS, Ce);
        Cd.code = (Ce && Ce instanceof Cg && Ce.code || 0) + CS;
        return Cd;
      };
      const Ca = function (Ce) {
        var {
          name: Ce,
          message: CS
        } = Ce;
        switch (Ce) {
          case "AbortError":
            if (/pause/.test(CS)) {
              return 303213;
            } else if (/load/.test(CS)) {
              return 303212;
            } else {
              return 303210;
            }
          case "NotAllowedError":
            return 303220;
          case "NotSupportedError":
            return 303230;
          default:
            return 303200;
        }
      };
    },
    6391: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cb
      });
      const Cb = [];
    },
    7411: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CU
      });
      var Cb = CG(5004);
      const CT = window.performance || {
        timing: {}
      };
      const Ci = CT.timing.navigationStart || (0, Cb.z)();
      if (!("now" in CT)) {
        CT.now = () => (0, Cb.z)() - Ci;
      }
      const Cu = () => Ci + CT.now();
      const CU = class {
        constructor() {
          this.startTimes = {};
          this.sum = {};
          this.counts = {};
          this.ticks = {};
        }
        start(Cv) {
          this.startTimes[Cv] = Cu();
          this.counts[Cv] = this.counts[Cv] + 1 || 1;
        }
        end(Cv) {
          var CK;
          if (this.startTimes[Cv]) {
            CK = Cu() - this.startTimes[Cv];
            delete this.startTimes[Cv];
            this.sum[Cv] = this.sum[Cv] + CK || CK;
          }
        }
        dump() {
          var Cv;
          var CK = Object.assign({}, this.sum);
          for (const CE in this.startTimes) {
            if (function (Cq, CM) {
              if (Cq == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              return Object.prototype.hasOwnProperty.call(Object(Cq), CM);
            }(this.startTimes, CE)) {
              Cv = Cu() - this.startTimes[CE];
              CK[CE] = CK[CE] + Cv || Cv;
            }
          }
          return {
            counts: Object.assign({}, this.counts),
            sums: CK,
            events: Object.assign({}, this.ticks)
          };
        }
        tick(Cv) {
          this.ticks[Cv] = Cu();
        }
        clear(Cv) {
          delete this.ticks[Cv];
        }
        between(Cv, CK) {
          if (this.ticks[CK] && this.ticks[Cv]) {
            return this.ticks[CK] - this.ticks[Cv];
          } else {
            return null;
          }
        }
      };
    },
    4601: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        v: () => Cu,
        z: () => CU
      });
      var Cb = CG(2894);
      var CT = CG(8348);
      let Ci = null;
      const Cu = {};
      const CU = function () {
        return Ci = Ci || (CT.OS.tizenApp ? CG.e(74).then(function (Cv) {
          var CK = CG(3112).default;
          return Cu.controls = CK;
        }.bind(null, CG)).catch(function () {
          (Ci = null, Cb.Jt)(301133)();
        }) : CG.e(716).then(function (Cv) {
          var CK = CG(5827).default;
          return Cu.controls = CK;
        }.bind(null, CG)).catch(function () {
          (Ci = null, Cb.Jt)(301130)();
        }));
      };
    },
    8348: (CO, CB, CG) => {
      'use strict';

      CG.r(CB);
      CG.d(CB, {
        Browser: () => CU,
        Features: () => CK,
        OS: () => Cv
      });
      var Cb = CG(2268);
      const CT = (CE, Cq) => {
        CE = CE.exec(Cq);
        if (CE && CE.length > 1) {
          return CE[1];
        }
      };
      const Ci = navigator.userAgent;
      const Cu = () => {};
      const CU = {
        get androidNative() {
          return (0, Cb.O7)();
        },
        get chrome() {
          return (0, Cb.i7)();
        },
        get edge() {
          return (0, Cb.un)();
        },
        get facebook() {
          return (0, Cb.DF)();
        },
        get firefox() {
          return (0, Cb.pZ)();
        },
        get ie() {
          return (0, Cb.w1)();
        },
        get msie() {
          return (0, Cb.A)();
        },
        get safari() {
          return (0, Cb.G6)();
        },
        get version() {
          {
            var CE = this;
            var Cq = Ci;
            let CM;
            let CJ;
            let CR;
            let Cs;
            if (CE.chrome) {
              CM = Cq.indexOf("Chrome") !== -1 ? Cq.substring(Cq.indexOf("Chrome") + 7) : Cq.substring(Cq.indexOf("CriOS") + 6);
            } else if (CE.safari) {
              CM = Cq.substring(Cq.indexOf("Version") + 8);
            } else if (CE.firefox) {
              CM = Cq.substring(Cq.indexOf("Firefox") + 8);
            } else if (CE.edge) {
              let Cw = Cq.indexOf("Edge");
              if (Cw === -1) {
                Cw = Cq.indexOf("Edg") + 4;
              } else {
                Cw += 5;
              }
              CM = Cq.substring(Cw);
            } else if (CE.ie) {
              if (Cq.indexOf("rv:") !== -1) {
                CM = Cq.substring(Cq.indexOf("rv:") + 3);
              } else if (Cq.indexOf("MSIE") !== -1) {
                CM = Cq.substring(Cq.indexOf("MSIE") + 5);
              }
            }
            if (CM) {
              if ((Cs = (CM = (Cs = (CM = (Cs = CM.indexOf(";")) !== -1 ? CM.substring(0, Cs) : CM).indexOf(" ")) !== -1 ? CM.substring(0, Cs) : CM).indexOf(")")) !== -1) {
                CM = CM.substring(0, Cs);
              }
              CJ = parseInt(CM, 10);
              CR = parseInt(CM.split(".")[1], 10);
            }
            return {
              version: CM,
              major: CJ,
              minor: CR
            };
          }
        }
      };
      const Cv = {
        get android() {
          return (0, Cb.Dt)();
        },
        get iOS() {
          return (0, Cb.gn)();
        },
        get mobile() {
          return (0, Cb.tq)();
        },
        get mac() {
          return (0, Cb.id)();
        },
        get iPad() {
          return (0, Cb.zc)();
        },
        get iPhone() {
          return (0, Cb.xb)();
        },
        get windows() {
          return Ci.indexOf("Windows") > -1;
        },
        get tizen() {
          return (0, Cb.yS)();
        },
        get tizenApp() {
          return (0, Cb.Q6)();
        },
        get version() {
          {
            var CE = this;
            var Cq = Ci;
            let CM;
            let CJ;
            let CR;
            if (CE.windows) {
              CM = CT(/Windows(?: NT|)? ([._\d]+)/, Cq);
              switch (CM) {
                case "6.1":
                  CM = "7.0";
                  break;
                case "6.2":
                  CM = "8.0";
                  break;
                case "6.3":
                  CM = "8.1";
              }
            } else if (CE.android) {
              CM = CT(/Android ([._\d]+)/, Cq);
            } else if (CE.iOS) {
              CM = CT(/OS ([._\d]+)/, Cq);
            } else if (CE.mac) {
              CM = CT(/Mac OS X ([._\d]+)/, Cq);
            } else if (CE.tizen) {
              CM = CT(/Tizen ([._\d]+)/, Cq);
            }
            if (CM) {
              CJ = parseInt(CM, 10);
              const Cs = CM.split(/[._]/);
              if (Cs) {
                CR = parseInt(Cs[1], 10);
              }
            }
            return {
              version: CM,
              major: CJ,
              minor: CR
            };
          }
        }
      };
      const CK = {
        get flash() {
          return (0, Cb.NO)();
        },
        get flashVersion() {
          return (0, Cb.dI)();
        },
        get iframe() {
          return (0, Cb.cL)();
        },
        get passiveEvents() {
          {
            let Cq = false;
            try {
              var CE = Object.defineProperty({}, "passive", {
                get: () => Cq = true
              });
              window.addEventListener("testPassive", Cu, CE);
              window.removeEventListener("testPassive", Cu, CE);
            } catch (CM) {}
            return Cq;
          }
        },
        get backgroundLoading() {
          return !Cv.iOS && !CU.safari && !Cv.tizen;
        },
        get enableAdLoadingUI() {
          return !Cv.iOS && !Cv.tizen;
        }
      };
    },
    1643: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        $_: () => Cp,
        $j: () => Ca,
        AQ: () => Cd,
        Ax: () => Ct,
        B1: () => Cw,
        Bs: () => Xq,
        Ew: () => Cc,
        FU: () => CZ,
        Gj: () => Xv,
        HH: () => CA,
        Hy: () => X9,
        Ib: () => Xi,
        Je: () => CV,
        Jl: () => CS,
        K5: () => CW,
        Kb: () => Cb,
        Ms: () => Cg,
        NZ: () => Cx,
        O1: () => X4,
        Ow: () => Xl,
        P: () => Cs,
        QF: () => XT,
        R2: () => Ck,
        RF: () => XR,
        Rc: () => CH,
        Rt: () => CD,
        SL: () => Xu,
        Sv: () => CJ,
        TJ: () => X0,
        U3: () => CP,
        UF: () => Xb,
        UW: () => XC,
        UZ: () => X6,
        V$: () => Cm,
        Vy: () => Cv,
        WE: () => CQ,
        Wp: () => Cq,
        Z_: () => XU,
        _5: () => Cu,
        _B: () => XB,
        aM: () => X7,
        aQ: () => Ch,
        bc: () => CT,
        cM: () => Cy,
        cq: () => CF,
        cy: () => CL,
        gO: () => XN,
        gy: () => X3,
        h7: () => XM,
        ik: () => CK,
        j0: () => XO,
        jt: () => XG,
        k3: () => Cj,
        l5: () => XE,
        nQ: () => CE,
        nv: () => CM,
        oZ: () => X1,
        ot: () => CR,
        pi: () => Co,
        pn: () => Cn,
        qG: () => XJ,
        r0: () => CU,
        rx: () => X5,
        s$: () => Ce,
        sF: () => XX,
        t6: () => Xs,
        tP: () => Cf,
        uL: () => CY,
        uT: () => Cr,
        uc: () => CI,
        ug: () => X8,
        wh: () => Cz,
        xQ: () => Ci,
        xf: () => XK,
        yH: () => X2
      });
      const Cb = "buffering";
      const CT = "idle";
      const Ci = "complete";
      const Cu = "paused";
      const CU = "playing";
      const Cv = "error";
      const CK = "loading";
      const CE = "stalled";
      const Cq = "drag";
      const CM = "dragStart";
      const CJ = "dragEnd";
      const CR = "click";
      const Cs = "doubleClick";
      const Cw = "over";
      const Cf = "move";
      const CW = "enter";
      const CP = "out";
      const Cn = Cv;
      const Cy = "warning";
      const CD = "adClick";
      const Cp = "mediaLoaded";
      const Ct = "adPause";
      const CQ = "adPlay";
      const Cj = "adSkipped";
      const CY = "adTime";
      const Cz = "autostartNotAllowed";
      const Cg = Ci;
      const CH = "ready";
      const Cx = "seek";
      const Ca = "beforePlay";
      const Ce = "beforeComplete";
      const CS = "bufferFull";
      const Cd = "absolutePositionReady";
      const CL = "displayClick";
      const Cm = "playlistComplete";
      const Co = "cast";
      const Cc = "mediaError";
      const CZ = "firstFrame";
      const CF = "playAttempt";
      const CV = "playAttemptFailed";
      const Ch = "seeked";
      const CA = "setupError";
      const CI = "state";
      const Cr = "bufferChange";
      const Ck = "time";
      const X0 = "ratechange";
      const X1 = "mediaType";
      const X2 = "volume";
      const X3 = "mute";
      const X4 = "metadataCueParsed";
      const X5 = "meta";
      const X6 = "levels";
      const X7 = "levelsChanged";
      const X8 = "visualQuality";
      const X9 = "controls";
      const XC = "fullscreen";
      const XX = "resize";
      const XN = "playlistItem";
      const Xl = "playlist";
      const XO = "audioTracks";
      const XB = "audioTrackChanged";
      const XG = "subtitlesTracks";
      const Xb = "subtitlesTrackChanged";
      const XT = "playbackRateChanged";
      const Xi = "logoClick";
      const Xu = "captionsList";
      const XU = "captionsChanged";
      const Xv = "providerFirstFrame";
      const XK = "userAction";
      const XE = "instreamClick";
      const Xq = "breakpoint";
      const XM = "fullscreenchange";
      const XJ = "bandwidthEstimate";
      const XR = "float";
      const Xs = "chapter";
    },
    9918: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        L4: () => CT,
        OG: () => Cu,
        bv: () => Cb,
        ni: () => Ci
      });
      const Cb = {
        audioMode: false,
        itemMeta: {},
        playbackRate: 1,
        playRejected: false,
        state: CG(1643).bc,
        itemReady: false,
        controlsEnabled: false
      };
      const CT = {
        position: 0,
        duration: 0,
        buffer: 0,
        currentTime: 0
      };
      const Ci = 120;
      const Cu = 25;
    },
    7753: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cb
      });
      class Cb extends CG(328).ZP {
        constructor() {
          super();
          this.attributes = Object.create(null);
        }
        addAttributes(CT) {
          Object.keys(CT).forEach(Ci => {
            this.add(Ci, CT[Ci]);
          });
        }
        add(CT, Ci) {
          Object.defineProperty(this, CT, {
            get: () => this.attributes[CT],
            set: Cu => {
              this.set(CT, Cu);
            },
            enumerable: false
          });
          this.attributes[CT] = Ci;
        }
        get(CT) {
          return this.attributes[CT];
        }
        set(CT, Ci) {
          var Cu;
          if (this.attributes[CT] !== Ci) {
            Cu = this.attributes[CT];
            this.attributes[CT] = Ci;
            this.trigger("change:" + CT, this, Ci, Cu);
          }
        }
        clone() {
          var CT = {};
          var Ci = this.attributes;
          if (Ci) {
            for (const Cu in Ci) {
              CT[Cu] = Ci[Cu];
            }
          }
          return CT;
        }
        change(CT, Ci, Cu) {
          this.on("change:" + CT, Ci, Cu);
          CT = this.get(CT);
          Ci.call(Cu, this, CT, CT);
          return this;
        }
      }
    },
    7941: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        dZ: () => Ci,
        my: () => CU,
        qk: () => Cu,
        r1: () => CT
      });
      var Cb = CG(2957);
      const CT = Cv => {
        let CK = "";
        if (Cv) {
          if (Cv.localName) {
            CK = Cv.localName;
          } else if (Cv.baseName) {
            CK = Cv.baseName;
          }
        }
        return CK;
      };
      const Ci = Cv => {
        let CK = "";
        if (Cv) {
          if (Cv.textContent) {
            CK = (0, Cb.fy)(Cv.textContent);
          } else if (Cv.text) {
            CK = (0, Cb.fy)(Cv.text);
          }
        }
        return CK;
      };
      const Cu = (Cv, CK) => Cv.childNodes[CK];
      const CU = Cv => Cv.childNodes ? Cv.childNodes.length : 0;
    },
    6769: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => function (CE) {
          var Cq = [];
          Cq.feedData = {};
          for (let Cs = 0; Cs < (0, Cb.my)(CE); Cs++) {
            var CM = (0, Cb.qk)(CE, Cs);
            if ((0, Cb.r1)(CM).toLowerCase() === "channel") {
              for (let Cw = 0; Cw < (0, Cb.my)(CM); Cw++) {
                var CJ = (0, Cb.qk)(CM, Cw);
                var CR = (0, Cb.r1)(CJ).toLowerCase();
                if (CR === "item") {
                  Cq.push(CK(CJ));
                } else if (CR) {
                  Cq.feedData[CR] = (0, Cb.dZ)(CJ);
                }
              }
            }
          }
          return Cq;
        }
      });
      var Cb = CG(7941);
      var CT = CG(2957);
      function Ci(CE, Cq) {
        const CM = [];
        for (let Cs = 0; Cs < (0, Cb.my)(CE); Cs++) {
          var CJ = CE.childNodes[Cs];
          if (CJ.prefix === "media" && (0, Cb.r1)(CJ)) {
            switch ((0, Cb.r1)(CJ).toLowerCase()) {
              case "content":
                if ((0, CT.Dc)(CJ, "duration")) {
                  Cq.duration = (0, CT.m9)((0, CT.Dc)(CJ, "duration"));
                }
                if ((0, CT.Dc)(CJ, "url")) {
                  Cq.sources ||= [];
                  const Cw = {
                    file: (0, CT.Dc)(CJ, "url"),
                    type: (0, CT.Dc)(CJ, "type"),
                    width: (0, CT.Dc)(CJ, "width"),
                    label: (0, CT.Dc)(CJ, "label")
                  };
                  const Cf = (CW => {
                    var CP = [];
                    for (let Cy = 0; Cy < (0, Cb.my)(CW); Cy++) {
                      var Cn = CW.childNodes[Cy];
                      if (Cn.prefix === "jwplayer" && (0, Cb.r1)(Cn).toLowerCase() === "mediatypes") {
                        CP.push((0, Cb.dZ)(Cn));
                      }
                    }
                    return CP;
                  })(CJ);
                  if (Cf.length) {
                    Cw.mediaTypes = Cf;
                  }
                  Cq.sources.push(Cw);
                }
                if ((0, Cb.my)(CJ) > 0) {
                  Cq = Ci(CJ, Cq);
                }
                break;
              case "title":
                Cq.title = (0, Cb.dZ)(CJ);
                break;
              case "description":
                Cq.description = (0, Cb.dZ)(CJ);
                break;
              case "guid":
                Cq.mediaid = (0, Cb.dZ)(CJ);
                break;
              case "thumbnail":
                Cq.image ||= (0, CT.Dc)(CJ, "url");
                break;
              case "group":
                Ci(CJ, Cq);
                break;
              case "subtitle":
                {
                  const CW = {
                    file: (0, CT.Dc)(CJ, "url"),
                    kind: "captions"
                  };
                  if ((0, CT.Dc)(CJ, "lang").length > 0) {
                    CR = (0, CT.Dc)(CJ, "lang");
                    undefined;
                    CW.label = {
                      zh: "Chinese",
                      nl: "Dutch",
                      en: "English",
                      fr: "French",
                      de: "German",
                      it: "Italian",
                      ja: "Japanese",
                      pt: "Portuguese",
                      ru: "Russian",
                      es: "Spanish"
                    }[CR] || CR;
                  }
                  CM.push(CW);
                  break;
                }
            }
          }
        }
        var CR;
        Cq.tracks ||= [];
        for (let CP = 0; CP < CM.length; CP++) {
          Cq.tracks.push(CM[CP]);
        }
        return Cq;
      }
      const Cu = Ci;
      var CU = CG(9888);
      var Cv = CG(393);
      const CK = CE => {
        var Cq = {};
        for (let CR = 0; CR < CE.childNodes.length; CR++) {
          var CM = CE.childNodes[CR];
          var CJ = (0, Cb.r1)(CM);
          if (CJ) {
            switch (CJ.toLowerCase()) {
              case "enclosure":
                Cq.file = (0, CT.Dc)(CM, "url");
                break;
              case "title":
                Cq.title = (0, Cb.dZ)(CM);
                break;
              case "guid":
                Cq.mediaid = (0, Cb.dZ)(CM);
                break;
              case "pubdate":
                Cq.date = (0, Cb.dZ)(CM);
                break;
              case "description":
                Cq.description = (0, Cb.dZ)(CM);
                break;
              case "link":
                Cq.link = (0, Cb.dZ)(CM);
                break;
              case "category":
                if (Cq.tags) {
                  Cq.tags += (0, Cb.dZ)(CM);
                } else {
                  Cq.tags = (0, Cb.dZ)(CM);
                }
            }
          }
        }
        return new Cv.Z(function (Cs, Cw) {
          var Cf = "default";
          var CW = "file";
          var CP = [];
          var Cn = [];
          var Cy = Cw;
          for (let Cp = 0; Cp < Cs.childNodes.length; Cp++) {
            var CD = Cs.childNodes[Cp];
            if (CD.prefix === "jwplayer") {
              const Ct = (0, Cb.r1)(CD);
              if (Ct === "source") {
                delete Cw.sources;
                CP.push({
                  file: (0, CT.Dc)(CD, CW),
                  default: (0, CT.Dc)(CD, Cf),
                  label: (0, CT.Dc)(CD, "label"),
                  type: (0, CT.Dc)(CD, "type")
                });
              } else if (Ct === "track") {
                delete Cw.tracks;
                Cn.push({
                  file: (0, CT.Dc)(CD, CW),
                  default: (0, CT.Dc)(CD, Cf),
                  kind: (0, CT.Dc)(CD, "kind"),
                  label: (0, CT.Dc)(CD, "label")
                });
              } else {
                Cw[Ct] = (0, CU.serialize)((0, Cb.dZ)(CD));
                if (Ct === "file" && Cw.sources) {
                  delete Cw.sources;
                }
              }
            }
            Cw[CW] ||= Cw.link;
          }
          if (CP.length) {
            Cw.sources = [];
            for (let CQ = 0; CQ < CP.length; CQ++) {
              const Cj = CP[CQ];
              if (Cj.file.length > 0) {
                Cj[Cf] = CP[CQ][Cf] === "true";
                if (!Cj.label) {
                  delete Cj.label;
                }
                Cy.sources.push(Cj);
              }
            }
          }
          if (Cn.length) {
            Cw.tracks = [];
            for (let CY = 0; CY < Cn.length; CY++) {
              const Cz = Cn[CY];
              if (Cz.file && Cz.file.length > 0) {
                Cz[Cf] = Cn[CY][Cf] === "true";
                Cz.kind = Cn[CY].kind.length ? Cn[CY].kind : "captions";
                if (!Cz.label) {
                  delete Cz.label;
                }
                Cy.tracks.push(Cz);
              }
            }
          }
          return Cy;
        }(CE, Cu(CE, Cq)));
      };
    },
    2557: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        t: () => Cb,
        u: () => CT
      });
      class Cb {
        constructor(Ci, Cu) {
          this.defaultLanguage = Ci;
          this.timestamps = Cu;
        }
      }
      class CT {
        constructor({
          title: Ci = {},
          group: Cu,
          time: CU,
          image: Cv
        }) {
          this.title = {};
          this.time = CU;
          this.group = Cu;
          this.image = Cv;
          Object.keys(Ci).forEach(CK => {
            var CE = Ci[CK];
            this.addTitle(CK, CE);
          });
        }
        addTitle(Ci, Cu) {
          this.title[Ci] = Cu;
        }
      }
    },
    393: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cv
      });
      var Cb = CG(6053);
      function CT(CK) {
        var CE;
        if (CK && CK.file) {
          (CK = Object.assign({}, {
            kind: "captions",
            default: false
          }, CK)).kind = (CE = CK.kind, Ci.indexOf(CE) !== -1 ? CK.kind : "captions");
          CK.default = Boolean(CK.default);
          return CK;
        }
      }
      const Ci = ["captions", "metadata", "thumbnails", "chapters"];
      var Cu = CG(9918);
      const CU = Array.isArray;
      const Cv = function (CK) {
        if (!CU((CK = CK || {}).tracks)) {
          delete CK.tracks;
        }
        var CE = Object.assign({}, {
          sources: [],
          tracks: [],
          minDvrWindow: Cu.ni
        }, CK);
        if (CE.sources === Object(CE.sources) && !CU(CE.sources)) {
          CE.sources = [(0, Cb.Z)(CE.sources)];
        }
        if (!CU(CE.sources) || CE.sources.length === 0) {
          if (CK.levels) {
            CE.sources = CK.levels;
          } else {
            CE.sources = [(0, Cb.Z)(CK)];
          }
        }
        for (let CJ = 0; CJ < CE.sources.length; CJ++) {
          var Cq;
          var CM = CE.sources[CJ];
          if (CM) {
            Cq = CM.default;
            CM.default = !!Cq && Cq.toString() === "true";
            CE.sources[CJ].label ||= CJ.toString();
            CE.sources[CJ] = (0, Cb.Z)(CE.sources[CJ]);
          }
        }
        CE.sources = CE.sources.filter(Boolean);
        if (!CU(CE.tracks)) {
          CE.tracks = [];
        }
        if (CU(CE.captions)) {
          CE.tracks = CE.tracks.concat(CE.captions);
          delete CE.captions;
        }
        CE.tracks = CE.tracks.map(CT).filter(Boolean);
        return CE;
      };
    },
    7263: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CK
      });
      var Cb = CG(1643);
      var CT = CG(7941);
      var Ci = CG(6769);
      var Cu = CG(6886);
      var CU = CG(328);
      var Cv = CG(4446);
      const CK = function () {
        function CE(CJ) {
          try {
            const CR = CJ.responseXML ? CJ.responseXML.childNodes : null;
            let Cs;
            let Cw = null;
            if (CR) {
              for (let Cf = 0; Cf < CR.length && (Cw = CR[Cf]).nodeType === 8; Cf++);
              if ((Cw = Cw && (0, CT.r1)(Cw) === "xml" ? Cw.nextSibling : Cw) && (0, CT.r1)(Cw) === "rss") {
                const CW = (0, Ci.Z)(Cw);
                Cs = Object.assign({
                  playlist: CW
                }, CW.feedData);
              }
            }
            if (!Cs) {
              try {
                const CP = JSON.parse(CJ.responseText);
                if (Array.isArray(CP)) {
                  Cs = {
                    playlist: CP
                  };
                } else {
                  if (!Array.isArray(CP.playlist)) {
                    throw Error("Playlist is not an array");
                  }
                  Cs = CP;
                }
              } catch (Cn) {
                throw new Cv.rG(Cv.ul, 621, Cn);
              }
            }
            Cq.trigger(Cb.Ow, Cs);
          } catch (Cy) {
            CM(Cy);
          }
        }
        const Cq = Object.assign(this, CU.ZP);
        const CM = function (CJ) {
          if (CJ instanceof Cv.rG && !CJ.code) {
            CJ = new Cv.rG(Cv.ul, 0);
          }
          Cq.trigger(Cb.pn, CJ);
        };
        this.load = function (CJ) {
          (0, Cu.h)(CJ, CE, (CR, Cs, Cw, Cf) => {
            CM(Cf);
          });
        };
        this.destroy = function () {
          this.off();
        };
      };
    },
    8320: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        ZP: () => CW,
        s7: () => CR,
        T5: () => Cf,
        YF: () => CJ,
        _: () => Cs,
        bx: () => Cw
      });
      const Cb = {
        none: true,
        metadata: true,
        auto: true
      };
      const CT = (CP, Cn) => Cb[CP] ? CP : Cb[Cn] ? Cn : "metadata";
      var Ci = CG(393);
      var Cu = CG(6053);
      var CU = CG(2303);
      var Cv = CG(4446);
      const CK = (CP, Cn) => CP === undefined ? Cn : CP;
      const CE = (CP, Cn, Cy) => {
        if (Cy in Cn) {
          CP[Cy] = Cn[Cy];
        }
      };
      const Cq = (CP, Cn) => {
        const Cy = Cn.attributes;
        const {
          sources: CD,
          allSources: Cp,
          preload: Ct,
          drm: CQ
        } = CP;
        const Cj = CK(CP.withCredentials, Cy.withCredentials);
        return (Cp || CD).map(function (CY) {
          var Cz;
          var Cg;
          var CH;
          if (CY !== Object(CY)) {
            return null;
          } else {
            CE(CY, Cy, "androidhls");
            CE(CY, Cy, "hlsjsdefault");
            CE(CY, Cy, "safarihlsjs");
            CH = CY;
            Cz = CP;
            Cg = Cy;
            if (!CH.liveSyncDuration) {
              Cz = Cz.liveSyncDuration ? Cz : Cg;
              CE(CH, Cz, "liveSyncDuration");
            }
            CE(CY, Cy, "_hlsjsProgressive");
            CY.preload = CT(CY.preload, Ct);
            if (Cg = CY.drm || CQ || Cy.drm) {
              CY.drm = Cg;
            }
            if ((CH = CK(CY.withCredentials, Cj)) !== undefined) {
              CY.withCredentials = CH;
            }
            return (0, Cu.Z)(CY);
          }
        }).filter(Boolean);
      };
      const CM = (CP, Cn) => {
        var Cy = ((Ct, CQ) => {
          for (let Cz = 0; Cz < Ct.length; Cz++) {
            var Cj = Ct[Cz];
            var CY = CQ.choose(Cj).providerToCheck;
            if (CY) {
              return {
                type: Cj.type,
                provider: CY
              };
            }
          }
          return null;
        })(CP, Cn = Cn && Cn.choose ? Cn : new CU.Z());
        if (!Cy) {
          return [];
        }
        const CD = Cy.provider;
        const Cp = Cy.type;
        return CP.filter(function (Ct) {
          return Ct.type === Cp && Cn.providerSupports(CD, Ct);
        });
      };
      const CJ = (CP, Cn, Cy) => {
        var CD = CP.getProviders();
        var Cp = CP.get("preload");
        var Ct = CP.get("jwStart");
        var CQ = Object.assign({}, Cn);
        CQ.preload = CT(Cn.preload, Cp);
        CQ.allSources = Cq(CQ, CP);
        CQ.sources = CM(CQ.allSources, CD);
        if (CQ.sources.length) {
          CQ.file = CQ.sources[0].file;
          CQ.feedData = Cy;
          if (Ct && Ct !== -1 && CP.get("generateSEOMetadata")) {
            CQ.starttime = Ct;
          }
          if (Cp = (Cn = CQ).sources[0].liveSyncDuration) {
            Cn.liveSyncDuration = Cn.dvrSeekLimit = Cp;
          }
          return Cn;
        }
      };
      const CR = (CP, Cn, Cy) => {
        const CD = Object.assign({}, Cy);
        delete CD.playlist;
        return CP.map(Cp => CJ(Cn, Cp, CD)).filter(Boolean);
      };
      const Cs = CP => {
        if (!Array.isArray(CP) || CP.length === 0) {
          throw new Cv.rG(Cv.ul, 630);
        }
      };
      const Cw = (CP, Cn) => {
        let Cy = (parseInt(CP, 10) || 0) % Cn;
        if (Cy < 0) {
          Cy += Cn;
        }
        return Cy;
      };
      const Cf = (CP, Cn) => CM(Cq(CP, Cn), Cn.getProviders());
      const CW = function (CP) {
        return (Array.isArray(CP) ? CP : [CP]).map(Ci.Z);
      };
    },
    6053: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Ci
      });
      var Cb = CG(7034);
      var CT = CG(2957);
      const Ci = function (Cu) {
        if (Cu && Cu.file) {
          const Cv = Object.assign({}, {
            default: false,
            type: ""
          }, Cu);
          Cv.file = (0, CT.fy)("" + Cv.file);
          var Cu = /^[^/]+\/(?:x-)?([^/]+)$/;
          var CU = Cv.type;
          if (Cu.test(CU)) {
            Cv.mimeType = CU;
            Cv.type = CU.replace(Cu, "$1");
          }
          if ((0, Cb.isYouTube)(Cv.file)) {
            Cv.type = "youtube";
          } else if ((0, Cb.isRtmp)(Cv.file)) {
            Cv.type = "rtmp";
          } else {
            Cv.type ||= (0, CT.AO)(Cv.file);
          }
          if (Cv.type) {
            switch (Cv.type) {
              case "m3u8":
              case "vnd.apple.mpegurl":
                Cv.type = "hls";
                break;
              case "dash+xml":
                Cv.type = "dash";
                break;
              case "m4a":
                Cv.type = "aac";
                break;
              case "smil":
                Cv.type = "rtmp";
            }
            Object.keys(Cv).forEach(function (CK) {
              if (Cv[CK] === "") {
                delete Cv[CK];
              }
            });
            return Cv;
          }
        }
      };
    },
    4101: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CE
      });
      var Cb = CG(676);
      var CT = CG(9888);
      var Ci = CG(2957);
      var Cu = CG(4446);
      var CU = CG(3487);
      function Cv(Cq) {
        var CM;
        var CJ;
        if (typeof Cq == "string") {
          if ((CM = (Cq = Cq.split("?")[0]).indexOf("://")) > 0) {
            return 0;
          } else {
            CJ = Cq.indexOf("/");
            Cq = (0, Ci.AO)(Cq);
            if (!(CM < 0) || !(CJ < 0) || Cq && isNaN(Cq)) {
              return 1;
            } else {
              return 2;
            }
          }
        }
      }
      function CK(Cq) {
        this.url = Cq;
        this.promise_ = null;
      }
      Object.defineProperties(CK.prototype, {
        promise: {
          get() {
            return this.load();
          },
          set() {}
        }
      });
      Object.assign(CK.prototype, {
        load() {
          let Cq = this.promise_;
          if (!Cq) {
            if (Cv(this.url) === 2) {
              return Promise.resolve(this);
            }
            var CM = new Cb.ZP((CJ => {
              switch (Cv(CJ)) {
                case 0:
                  return CJ;
                case 1:
                  return (0, CT.getAbsolutePath)(CJ, window.location.href);
              }
            })(this.url));
            this.loader = CM;
            Cq = CM.load().then(() => this);
            this.promise_ = Cq;
          }
          return Cq;
        },
        registerPlugin(Cq, CM, CJ) {
          this.name = Cq;
          this.target = CM;
          this.js = CJ;
        },
        getNewInstance(Cq, CM, CJ) {
          var CR = this.js;
          if (typeof CR != "function") {
            throw new Cu.rG(null, (0, CU.bX)(this.url) + 100);
          }
          const Cs = new CR(Cq, CM, CJ);
          const Cw = {
            type: "pluginInitialized",
            name: this.name,
            config: CM
          };
          Cs.addToPlayer = function (Cf = false) {
            var CW = this.getContainer().querySelector(".jw-overlays");
            if (CW) {
              CJ.left = CW.style.left;
              CJ.top = CW.style.top;
              CW.appendChild(CJ);
              if (Cf) {
                this.trigger("pluginInitialized", Cw);
              } else {
                setTimeout(() => this.trigger("pluginInitialized", Cw), 0);
              }
              return Cs;
            }
          };
          Cs.resizeHandler = function () {
            var Cf = this.getContainer().querySelector(".jw-overlays");
            if (Cf) {
              Cs.resize(Cf.clientWidth, Cf.clientHeight);
            }
          };
          return Cs;
        }
      });
      const CE = CK;
    },
    1241: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        ZP: () => function (CM, CJ) {
          var CR = CM.get("plugins");
          window.jwplayerPluginJsonp = CE;
          return (CM.pluginLoader = CM.pluginLoader || new Ci()).load(CJ, CK, CR, CM).then(Cs => {
            if (!CM.attributes._destroyed) {
              delete window.jwplayerPluginJsonp;
              return Cs;
            }
          });
        },
        fo: () => CE,
        Ve: () => Cq
      });
      var Cb = CG(4446);
      var CT = CG(3487);
      const Ci = function () {
        this.load = function (CM, CJ, CR, Cs) {
          if (CR && typeof CR == "object") {
            return Promise.all(Object.keys(CR).filter(Cw => Cw).map(Cw => {
              const Cf = CR[Cw];
              return CJ.setupPlugin(Cw).then(CW => {
                if (!Cs.attributes._destroyed) {
                  return (0, CT.MK)(CW, Cf, CM);
                }
              }).catch(CW => {
                CJ.removePlugin(Cw);
                if (CW.code) {
                  return CW;
                } else {
                  return new Cb.rG(null, (0, CT.bX)(Cw), CW);
                }
              });
            }));
          } else {
            return Promise.resolve();
          }
        };
      };
      var Cu = CG(4101);
      var CU = CG(5499);
      const Cv = {};
      const CK = new class {
        setupPlugin(CM) {
          var CJ = this.getPlugin(CM);
          if (CJ) {
            if (CJ.url !== CM) {
              (0, CU.c)("JW Plugin \"" + (0, CT.Nq)(CM) + "\" already loaded from \"" + CJ.url + "\". Ignoring \"" + CM + ".\"");
            }
            return CJ.promise;
          } else {
            return this.addPlugin(CM).load();
          }
        }
        addPlugin(CM) {
          var CJ = (0, CT.Nq)(CM);
          let CR = Cv[CJ];
          if (!CR) {
            CR = new Cu.Z(CM);
            Cv[CJ] = CR;
          }
          return CR;
        }
        getPlugin(CM) {
          return Cv[(0, CT.Nq)(CM)];
        }
        removePlugin(CM) {
          delete Cv[(0, CT.Nq)(CM)];
        }
        getPlugins() {
          return Cv;
        }
      }();
      const CE = function (CM, CJ, CR) {
        var Cs = CK.addPlugin(CM);
        if (!Cs.js) {
          Cs.registerPlugin(CM, CJ, CR);
        }
      };
      const Cq = async (CM, CJ, CR) => {
        var Cs = (0, CT.Nq)(CM);
        var Cw = CK.getPlugin(Cs);
        if (Cw) {
          return (0, CT.MK)(Cw, CJ, CR);
        }
        let Cf = Cs === CM ? CM : CM;
        return CK.setupPlugin(Cf).then(CW => (0, CT.MK)(CW, CJ, CR));
      };
    },
    7164: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        MK: () => Cu,
        Nq: () => CT,
        bX: () => Ci
      });
      var Cb = CG(5950);
      const CT = function (CU) {
        var Cv = /\/((.(?!\/))+?)\.js/i.exec(CU);
        var Cv = (Cv == null ? undefined : Cv[1]) || CU;
        if (Cv && Cv === "jwpsrv-dnt") {
          return "jwpsrv";
        } else {
          return Cv;
        }
      };
      const Ci = CU => 305000;
      const Cu = (CU, Cv, CK) => {
        var CE = CU.name;
        var Cv = Object.assign({}, Cv, (0, Cb.vl)(CU.url));
        var Cq = document.createElement("div");
        Cq.id = CK.id + "_" + CE;
        Cq.className = "jw-plugin jw-reset";
        var CU = CU.getNewInstance(CK, Cv, Cq);
        CK.addPlugin(CE, CU);
        return CU;
      };
    },
    7683: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        V: () => Ci,
        Z: () => function () {
          const Cu = Cb.Jx;
          const CU = [];
          const Cv = [];
          for (let CM = 0; CM < Cu; CM++) {
            const CJ = Ci();
            CU.push(CJ);
            Cv.push(CJ);
            CT(CJ);
          }
          const CK = Cv.shift();
          const CE = Cv.shift();
          let Cq = false;
          return {
            primed: () => Cq,
            prime() {
              CU.forEach(CT);
              Cq = true;
            },
            played() {
              Cq = true;
            },
            getPrimedElement: () => Cv.shift() || null,
            getAdElement: () => CK,
            getTestElement: () => CE,
            clean(CR) {
              if (CR.src) {
                CR.removeAttribute("src");
                try {
                  CR.load();
                } catch (Cs) {}
              }
            },
            recycle(CR) {
              if (CR && !Cv.some(Cs => Cs === CR)) {
                this.clean(CR);
                Cv.push(CR);
              }
            },
            syncVolume(CR) {
              const Cs = Math.min(Math.max(0, CR / 100), 1);
              CU.forEach(Cw => {
                Cw.volume = Cs;
              });
            },
            syncMute(CR) {
              CU.forEach(Cs => {
                Cs.muted = CR;
              });
            }
          };
        }
      });
      var Cb = CG(658);
      const CT = Cu => {
        if (!Cu.src) {
          Cu.load();
        }
      };
      const Ci = Cu => {
        const CU = document.createElement("video");
        CU.className = "jw-video jw-reset";
        CU.setAttribute("tabindex", "-1");
        CU.setAttribute("disableRemotePlayback", "");
        CU.setAttribute("webkit-playsinline", "");
        CU.setAttribute("playsinline", "");
        if (Cu) {
          Object.keys(Cu).forEach(Cv => {
            CU.setAttribute(Cv, Cu[Cv]);
          });
        }
        return CU;
      };
    },
    658: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        HB: () => Ci,
        Jx: () => Cb,
        l_: () => CT
      });
      const Cb = 4;
      const CT = 5;
      const Ci = 1;
    },
    4609: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => function (Cb, CT) {
          return Object.assign({}, CT, {
            prime() {
              if (!Cb.src) {
                Cb.load();
              }
            },
            getPrimedElement: () => Cb,
            clean() {
              CT.clean(Cb);
            },
            recycle() {
              CT.clean(Cb);
            }
          });
        }
      });
    },
    6528: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cv
      });
      var Cb = CG(1643);
      var CT = CG(1384);
      function Ci() {}
      const Cu = () => false;
      const CU = {
        name: "default"
      };
      const Cv = {
        supports: Cu,
        play: Ci,
        pause: Ci,
        preload: Ci,
        load: Ci,
        stop: Ci,
        volume: Ci,
        mute: Ci,
        seek: Ci,
        resize: Ci,
        remove: Ci,
        destroy: Ci,
        setVisibility: Ci,
        setFullscreen(CK) {
          return (0, CT.CX)(this, CK);
        },
        getFullscreen: Cu,
        supportsFullscreen: Cu,
        getContainer: Ci,
        setContainer: Ci,
        getName: () => CU,
        getQualityLevels: Ci,
        getCurrentQuality: Ci,
        setCurrentQuality: Ci,
        getAudioTracks: Ci,
        getCurrentAudioTrack: Ci,
        setCurrentAudioTrack: Ci,
        getSeekRange() {
          return {
            start: 0,
            end: this.getDuration()
          };
        },
        setPlaybackRate: Ci,
        getPlaybackRate: () => 1,
        getBandwidthEstimate: () => null,
        getLiveLatency: () => null,
        attachMedia: Ci,
        detachMedia: Ci,
        init: Ci,
        setState(CK) {
          this.state = CK;
          this.trigger(Cb.uc, {
            newstate: CK
          });
        },
        sendMediaType(CK) {
          var {
            type: CK,
            mimeType: CE
          } = CK[0];
          var CK = CK === "aac" || CK === "mp3" || CK === "mpeg" || CE && CE.indexOf("audio/") === 0;
          this.trigger(Cb.oZ, {
            mediaType: CK ? "audio" : "video"
          });
        },
        getDuration: () => 0,
        trigger: Ci
      };
    },
    1628: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        V: () => CT
      });
      var Cb = CG(8348);
      const CT = Ci => Ci.type === "hls" && Cb.OS.android ? Ci.androidhls !== false && !Cb.Browser.firefox && parseFloat(Cb.OS.version.version || "0") >= 4.4 : null;
    },
    12: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        U: () => Cb
      });
      const Cb = {};
    },
    670: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => function (CU) {
          var Cv = CU.getName().name;
          if (!Cb.U[Cv]) {
            if (!(0, Cu.sE)(CT.B, (0, Cu.wB)({
              name: Cv
            }))) {
              if (!(0, Cu.mf)(CU.supports)) {
                throw new Error("Tried to register a provider with an invalid object");
              }
              CT.B.unshift({
                name: Cv,
                supports: CU.supports
              });
            }
            (0, Cu.ce)(CU.prototype, Ci.Z);
            Cb.U[Cv] = CU;
          }
        }
      });
      var Cb = CG(12);
      var CT = CG(2963);
      var Ci = CG(6528);
      var Cu = CG(6042);
      CG(328);
    },
    6593: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        B: () => Cv,
        H: () => CU
      });
      var Cb = CG(1628);
      var CT = CG(7034);
      var Ci = CG(9025);
      const Cu = {
        aac: "audio/mp4",
        mp4: "video/mp4",
        f4v: "video/mp4",
        m4v: "video/mp4",
        mov: "video/mp4",
        mp3: "audio/mpeg",
        mpeg: "audio/mpeg",
        ogv: "video/ogg",
        ogg: "video/ogg",
        oga: "video/ogg",
        vorbis: "video/ogg",
        webm: "video/webm",
        f4a: "video/aac",
        m3u8: "application/vnd.apple.mpegurl",
        m3u: "application/vnd.apple.mpegurl",
        hls: "application/vnd.apple.mpegurl"
      };
      const CU = CK => {
        if (!Ci.Z || !Ci.Z.canPlayType) {
          return false;
        }
        if ((0, Cb.V)(CK) === false) {
          return false;
        }
        var CE = CK.file;
        var Cq = CK.type;
        if ((0, CT.isRtmp)(CE, Cq)) {
          return false;
        }
        let CM = CK.mimeType || Cu[Cq];
        return !!CM && ((CE = CK.mediaTypes) != null && CE.length && (CM = [CM].concat(CE.slice()).join("; ")), Boolean(Ci.Z.canPlayType(CM)));
      };
      const Cv = [{
        name: "html5",
        supports: CU
      }];
    },
    1384: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        CX: () => CK,
        IP: () => Cq,
        If: () => Cv,
        Nm: () => CE
      });
      var Cb = CG(1643);
      let CT;
      let Ci;
      let Cu = false;
      function CU(CM, CJ, CR) {
        Cu = CR;
        CM.trigger(Cb.h7, {
          target: CJ.target,
          jwstate: CR
        });
      }
      const Cv = () => Cu;
      const CK = function (CM, CJ) {
        if (CJ = Boolean(CJ)) {
          try {
            const Cs = CM.video.webkitEnterFullscreen || CM.video.webkitEnterFullScreen;
            if (Cs) {
              Cs.apply(CM.video);
            }
          } catch (Cw) {
            return false;
          }
          return CM.getFullscreen();
        }
        var CR = CM.video.webkitExitFullscreen || CM.video.webkitExitFullScreen;
        if (CR) {
          CR.apply(CM.video);
        }
        return CJ;
      };
      const CE = function (CM, CJ) {
        CT = CR => CU(CM, CR, true);
        Ci = CR => CU(CM, CR, false);
        CJ.addEventListener("webkitbeginfullscreen", CT);
        CJ.addEventListener("webkitendfullscreen", Ci);
      };
      const Cq = CM => {
        CM.removeEventListener("webkitbeginfullscreen", CT);
        CM.removeEventListener("webkitendfullscreen", Ci);
      };
    },
    6875: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cb
      });
      const Cb = "hidden" in document ? function () {
        return !document.hidden;
      } : "webkitHidden" in document ? function () {
        return !document.webkitHidden;
      } : function () {
        return true;
      };
    },
    6886: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        E: () => CU,
        h: () => CM
      });
      var Cb = CG(9888);
      var CT = CG(7034);
      var Ci = CG(4446);
      function Cu() {}
      const CU = CJ => {
        CJ.onload = null;
        CJ.onprogress = null;
        CJ.onreadystatechange = null;
        CJ.onerror = null;
        if ("abort" in CJ) {
          CJ.abort();
        }
      };
      const Cv = (CJ, CR, Cs, Cw) => {
        CJ.onerror(CR, CJ.url, CJ.xhr, new Ci.rG(CR, Cs, Cw));
      };
      const CK = (CJ, CR, Cs) => {
        var Cw = CR.documentElement;
        if (!Cs.requireValidXML || Cw.nodeName !== "parsererror" && !Cw.getElementsByTagName("parsererror").length) {
          if (!CJ.responseXML) {
            CJ = Object.assign({}, CJ, {
              responseXML: CR
            });
          }
          return Cs.oncomplete(CJ);
        }
        Cv(Cs, Ci.ul, 601);
      };
      const CE = CJ => function (CR) {
        CR = CR.currentTarget || CJ.xhr;
        clearTimeout(CJ.timeoutId);
        if (CJ.responseType) {
          if (CJ.responseType === "json") {
            var Cs = CR;
            var Cw = CJ;
            if (!Cs.response || typeof Cs.response == "string" && Cs.responseText.substr(1) !== "\"") {
              try {
                Cs = Object.assign({}, Cs, {
                  response: JSON.parse(Cs.responseText)
                });
              } catch (Cf) {
                Cv(Cw, Ci.ul, 611, Cf);
                return;
              }
            }
            return Cw.oncomplete(Cs);
            return;
          }
        } else {
          let CW;
          let CP = CR.responseXML;
          if (CP) {
            try {
              CW = CP.firstChild;
            } catch (Cn) {}
          }
          if (CP && CW) {
            return CK(CR, CP, CJ);
          }
          if (CJ.useDomParser && CR.responseText && !CP && (CP = (0, Cb.parseXML)(CR.responseText)) != null && CP.firstChild) {
            return CK(CR, CP, CJ);
          }
          if (CJ.requireValidXML) {
            Cv(CJ, Ci.ul, 602);
            return;
          }
        }
        CJ.oncomplete(CR);
      };
      let Cq;
      const CM = (CJ, CR, Cs, Cw) => {
        var Cf;
        let CW;
        if (CJ === Object(CJ)) {
          CJ = (Cw = CJ).url;
        }
        const CP = Object.assign({
          xhr: null,
          url: CJ,
          withCredentials: false,
          retryWithoutCredentials: false,
          timeout: 60000,
          timeoutId: -1,
          oncomplete: CR || Cu,
          onerror: Cs || Cu,
          mimeType: Cw && !Cw.responseType ? "text/xml" : "",
          requireValidXML: false,
          responseType: Cw != null && Cw.plainText ? "text" : "",
          useDomParser: false,
          requestFilter: null
        }, Cw);
        const Cn = Cq("Error loading file", CP);
        if ("XMLHttpRequest" in window) {
          CW = CP.xhr = CP.xhr || new window.XMLHttpRequest();
          if (typeof CP.requestFilter == "function") {
            let Cy;
            try {
              Cy = CP.requestFilter({
                url: CJ,
                xhr: CW
              });
            } catch (CD) {
              Cn(CD, 5);
              return CW;
            }
            if (Cy && "open" in Cy && "send" in Cy) {
              CW = CP.xhr = Cy;
            }
          }
          Cf = CP;
          CW.onreadystatechange = function (Cp) {
            var Ct = Cp.currentTarget || Cf.xhr;
            if (Ct.readyState === 4) {
              clearTimeout(Cf.timeoutId);
              Ct = Ct.status;
              if (!(Ct >= 400)) {
                if (Ct === 200) {
                  return CE(Cf)(Cp);
                } else {
                  if (Ct === 0 && (0, CT.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(Cf.url)) {
                    Cv(Cf, Ci.ul, 7);
                  }
                  return;
                }
              }
              Cv(Cf, Ci.ul, Ct < 600 ? Ct : 6);
            }
          };
          CW.onerror = Cn;
          if ("overrideMimeType" in CW) {
            if (CP.mimeType) {
              CW.overrideMimeType(CP.mimeType);
            }
          } else {
            CP.useDomParser = true;
          }
          try {
            CJ = CJ.replace(/#.*$/, "");
            CW.open("GET", CJ, true);
          } catch (Cp) {
            Cn(Cp, 3);
            return CW;
          }
          if (CP.responseType) {
            try {
              CW.responseType = CP.responseType;
            } catch (Ct) {}
          }
          if (CP.timeout) {
            CP.timeoutId = setTimeout(function () {
              CU(CW);
              Cv(CP, Ci.ud, 1);
            }, CP.timeout);
            CW.onabort = function () {
              clearTimeout(CP.timeoutId);
            };
          }
          try {
            if (CP.withCredentials && "withCredentials" in CW) {
              CW.withCredentials = true;
            }
            CW.send();
          } catch (CQ) {
            Cn(CQ, 4);
          }
          return CW;
        }
        Cv(CP, Ci.ud, 2);
      };
      Cq = (CJ, CR) => function (Cs, Cw) {
        var Cf = Cs.currentTarget || CR.xhr;
        clearTimeout(CR.timeoutId);
        if (CR.retryWithoutCredentials && CR.xhr.withCredentials) {
          CU(Cf);
          const CW = Object.assign({}, CR, {
            xhr: null,
            withCredentials: false,
            retryWithoutCredentials: false
          });
          CM(CW);
        } else {
          if (!Cw && Cf.status >= 400 && Cf.status < 600) {
            Cw = Cf.status;
          }
          Cv(CR, Cw ? Ci.ul : Ci.ud, Cw || 6, Cs);
        }
      };
    },
    328: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        IH: () => CK,
        S1: () => CE,
        X$: () => Cq,
        ZP: () => CU,
        on: () => Cv,
        wj: () => CM
      });
      function Cb(CJ, CR) {
        if (CJ == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(CJ), CR);
      }
      const CT = (CJ, CR, Cs, Cw) => {
        let Cf = -1;
        const CW = CJ.length;
        while (++Cf < CW) {
          const CP = CJ[Cf];
          if (Cw) {
            try {
              CP.callback.apply(CP.context || Cs, CR);
            } catch (Cn) {
              console.log("Error in \"" + Cw + "\" event handler:", Cn);
            }
          } else {
            CP.callback.apply(CP.context || Cs, CR);
          }
        }
      };
      const Ci = /\s+/;
      const Cu = (CJ, CR, Cs, Cw) => {
        if (Cs) {
          if (typeof Cs == "object") {
            for (const Cf in Cs) {
              if (Cb(Cs, Cf)) {
                CJ[CR].apply(CJ, [Cf, Cs[Cf]].concat(Cw));
              }
            }
            return false;
          }
          if (Ci.test(Cs)) {
            const CW = Cs.split(Ci);
            for (let CP = 0, Cn = CW.length; CP < Cn; CP++) {
              CJ[CR].apply(CJ, [CW[CP]].concat(Cw));
            }
            return false;
          }
        }
        return true;
      };
      class CU {
        on(CJ, CR, Cs) {
          if (Cu(this, "on", CJ, [CR, Cs]) && CR) {
            ((this._events ||= {})[CJ] ||= []).push({
              callback: CR,
              context: Cs
            });
          }
          return this;
        }
        once(CJ, CR, Cs) {
          if (!Cu(this, "once", CJ, [CR, Cs]) || !CR) {
            return this;
          }
          let Cw = 0;
          function Cf() {
            if (!Cw++) {
              CW.off(CJ, Cf);
              CR.apply(this, arguments);
            }
          }
          const CW = this;
          Cf._callback = CR;
          return this.on(CJ, Cf, Cs);
        }
        off(CJ, CR, Cs) {
          if (this._events && Cu(this, "off", CJ, [CR, Cs])) {
            if (CJ || CR || Cs) {
              const CW = CJ ? [CJ] : Object.keys(this._events);
              for (let CP = 0, Cn = CW.length; CP < Cn; CP++) {
                CJ = CW[CP];
                var Cw = this._events[CJ];
                if (Cw) {
                  const Cy = this._events[CJ] = [];
                  if (CR || Cs) {
                    for (let CD = 0, Cp = Cw.length; CD < Cp; CD++) {
                      var Cf = Cw[CD];
                      if (CR && CR !== Cf.callback && CR !== Cf.callback._callback || Cs && Cs !== Cf.context) {
                        Cy.push(Cf);
                      }
                    }
                  }
                  if (!Cy.length) {
                    delete this._events[CJ];
                  }
                }
              }
            } else {
              delete this._events;
            }
          }
          return this;
        }
        trigger(CJ, ...CR) {
          var Cs;
          if (this._events && Cu(this, "trigger", CJ, CR) && (CJ = this._events[CJ], Cs = this._events.all, CJ && CT(CJ, CR, this), Cs)) {
            CT(Cs, arguments, this);
          }
          return this;
        }
        triggerSafe(CJ, ...CR) {
          var Cs;
          var Cw;
          if (this._events && Cu(this, "trigger", CJ, CR) && (Cs = this._events[CJ], Cw = this._events.all, Cs && CT(Cs, CR, this, CJ), Cw)) {
            CT(Cw, arguments, this, CJ);
          }
          return this;
        }
      }
      const Cv = CU.prototype.on;
      const CK = CU.prototype.once;
      const CE = CU.prototype.off;
      const Cq = CU.prototype.trigger;
      const CM = CU.prototype.triggerSafe;
      CU.on = Cv;
      CU.once = CK;
      CU.off = CE;
      CU.trigger = Cq;
    },
    2268: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        A: () => Cq,
        DF: () => CK,
        Dt: () => CW,
        G6: () => Cw,
        NO: () => CD,
        O7: () => CP,
        Q6: () => CJ,
        cL: () => Cy,
        dI: () => Cp,
        gn: () => Cf,
        i7: () => CR,
        id: () => Cv,
        pZ: () => Ci,
        tq: () => Cn,
        un: () => CE,
        w1: () => Cs,
        xb: () => Cu,
        yS: () => CM,
        zc: () => CU
      });
      const Cb = Ct => navigator.userAgent.match(Ct) !== null;
      const CT = () => navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const Ci = () => Cb(/firefox\//i);
      const Cu = () => Cb(/iP(hone|od)/i);
      const CU = () => Cb(/iPad/i) || CT();
      const Cv = () => Cb(/Macintosh/i) && !CT();
      const CK = () => Cb(/FBAV/i);
      const CE = () => Cb(/\sEdge?\/\d+/i);
      const Cq = () => Cb(/msie/i);
      const CM = () => Cb(/SMART-TV/);
      const CJ = () => CM() && !Cb(/SamsungBrowser/);
      const CR = () => Cb(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !CE() && !Cb(/UCBrowser/i);
      const Cs = () => !Cb(/\sEdg\/\d+/i) && (CE() || Cb(/trident\/.+rv:\s*11/i) || Cq());
      const Cw = () => Cb(/safari/i) && !Cb(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !CM();
      const Cf = () => Cb(/iP(hone|ad|od)/i) || CT();
      const CW = function () {
        if (typeof CW.mock_ == "boolean") {
          return CW.mock_;
        } else {
          return Cb(/Android/i) && !Cb(/Windows Phone/i);
        }
      };
      const CP = () => (!Cb(/chrome\/[123456789]/i) || !!Cb(/chrome\/18/i) || !!Ci()) && CW();
      CW.mock_ = null;
      const Cn = () => Cf() || CW() || Cb(/Windows Phone/i);
      const Cy = function () {
        if (typeof Cy.mock_ == "boolean") {
          return Cy.mock_;
        }
        try {
          return window.self !== window.top;
        } catch (Ct) {
          return true;
        }
      };
      Cy.mock_ = null;
      const CD = () => false;
      const Cp = () => 0;
    },
    8381: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        $W: () => Cu,
        Mf: () => Cv,
        T2: () => CK,
        _b: () => CU
      });
      var Cb = CG(8518);
      var CT = CG(2557);
      var Ci = CG(4446);
      const Cu = function (CE, Cq) {
        const CM = [];
        if (CE && CE.timestamps && CE.timestamps.length) {
          const CJ = CE.timestamps.sort((CR, Cs) => CR.begin - Cs.begin);
          CJ.forEach((CR, Cs) => {
            var Cw = ((CP, Cn = "en") => {
              let Cy = (0, Cb.G3)();
              var CD = Object.keys(CP.title);
              var Cp = CD[0];
              for (; !CP.title[Cy];) {
                const Ct = CD.find((Cj => CY => CY.indexOf(Cj) === 0)(Cy));
                if (Ct) {
                  Cy = Ct;
                  break;
                }
                const CQ = Cy.lastIndexOf("-");
                if (CQ <= 0) {
                  Cy = null;
                  break;
                }
                Cy = Cy.slice(0, CQ);
              }
              return Cy || (CD.indexOf(Cn) >= 0 ? Cn : Cp);
            })(CR, CE.defaultLanguage);
            var Cw = CR.title[Cw];
            var Cf = CR.time;
            var CR = CR.image;
            let CW = Cq;
            Cf = {
              begin: Cf,
              end: CW = Cs + 1 < CJ.length ? CJ[Cs + 1].time : CW,
              text: Cw,
              cueType: "chapters"
            };
            if (CR) {
              Cf.image = CR;
            }
            CM.push(Cf);
          });
        }
        return CM;
      };
      const CU = function (CE, Cq) {
        const CM = (0, Cb.G3)();
        const CJ = CE.reduce(function (CR, Cs) {
          var Cw;
          if (!Cs || !Cs.cueType || Cs.cueType === "chapters") {
            (Cw = new CT.u({
              time: Cs.begin,
              image: Cs.image
            })).addTitle(CM, Cs.text);
            CR.push(Cw);
          }
          return CR;
        }, []);
        if (Cq) {
          Cq.timestamps = CJ;
          return Cq;
        } else {
          return new CT.t(CM, CJ);
        }
      };
      const Cv = function (CE, Cq) {
        if (typeof CE != "number" || CE < 0 || !Cq || !Cq.length) {
          return null;
        }
        let CM = null;
        for (let CR = 0; CR < Cq.length; CR++) {
          var CJ = Cq[CR];
          if (!(CJ.time > CE)) {
            if (!CM || CJ.time > CM.time) {
              CM = CJ;
            }
          }
        }
        return CM;
      };
      const CK = function (CE, Cq) {
        let CM = true;
        CE.forEach(CJ => {
          if (!!CJ && (!CJ.defaultLanguage || !CJ.timestamps || !!CJ.timestamps.some(CR => !CR.title || CR.time === null || CR.time === undefined))) {
            CM = false;
          }
        });
        return Cq(CM ? null : (0, Ci.l9)(new Error(), Ci.aD));
      };
    },
    974: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        HY: () => Cq,
        iv: () => Cv,
        oB: () => CU,
        oI: () => Cu,
        vs: () => CK
      });
      function Cb(CM, CJ) {
        if (CM == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(CM), CJ);
      }
      var CT = CG(2957);
      var CB = CG(9563);
      var Ci = CG.n(CB);
      const Cu = Ci().clear;
      const CU = (CM, CJ) => {
        if (CM != null) {
          let CP;
          if (CM.length === undefined) {
            CM = [CM];
          }
          var CR;
          var Cs;
          var Cw = {};
          for (CP in CJ) {
            if (Cb(CJ, CP)) {
              CR = CP;
              Cs = CJ[CP];
              Cw[CP] = Cs === "" || Cs == null ? "" : typeof Cs == "string" && isNaN(Cs) ? /png|gif|jpe?g/i.test(Cs) && Cs.indexOf("url") < 0 ? "url(" + Cs + ")" : Cs : Cs === 0 || CR === "z-index" || CR === "opacity" ? "" + Cs : /color/i.test(CR) ? "#" + (0, CT.vk)(Cs.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(Cs) + "px";
            }
          }
          for (let Cn = 0; Cn < CM.length; Cn++) {
            var Cf;
            var CW = CM[Cn];
            if (CW != null) {
              for (CP in Cw) {
                if (Cb(Cw, CP) && (Cf = (Cy => {
                  Cy = Cy.split("-");
                  for (let CD = 1; CD < Cy.length; CD++) {
                    Cy[CD] = Cy[CD].charAt(0).toUpperCase() + Cy[CD].slice(1);
                  }
                  return Cy.join("");
                })(CP), CW.style[Cf] !== Cw[CP])) {
                  CW.style[Cf] = Cw[CP];
                }
              }
            }
          }
        }
      };
      const Cv = (CM, CJ, CR, Cs) => {
        CR = CR || "all-players";
        let Cw = "";
        if (typeof CJ == "object") {
          const Cf = document.createElement("div");
          CU(Cf, CJ);
          let CW = Cf.style.cssText;
          if (Cb(CJ, "content")) {
            CW = CW && CW + " content: \"" + CJ.content + "\";";
          }
          if (Cs) {
            CW = CW && CW.replace(/;/g, " !important;");
          }
          Cw = "{" + CW + "}";
        } else if (typeof CJ == "string") {
          Cw = CJ;
        }
        if (Cw !== "" && Cw !== "{}") {
          Ci().style([[CM, CM + Cw]], CR);
        } else {
          Ci().clear(CR, CM);
        }
      };
      const CK = (CM, CJ) => {
        CU(CM, {
          transform: CJ
        });
      };
      let CE;
      const Cq = (CM, CJ) => {
        let CR = "rgb";
        var Cs = CJ !== undefined && CJ !== 100;
        if (Cs) {
          CR += "a";
        }
        if (!CE) {
          const Cw = document.createElement("canvas");
          Cw.height = 1;
          Cw.width = 1;
          CE = Cw.getContext("2d", {
            willReadFrequently: true
          });
        }
        if (CM) {
          if (!isNaN(parseInt(CM, 16))) {
            CM = "#" + CM;
          }
        } else {
          CM = "#000000";
        }
        CE.clearRect(0, 0, 1, 1);
        CE.fillStyle = CM;
        CE.fillRect(0, 0, 1, 1);
        CM = CE.getImageData(0, 0, 1, 1).data;
        CR += "(" + CM[0] + ", " + CM[1] + ", " + CM[2];
        if (Cs) {
          CR += ", " + CJ / 100;
        }
        return CR + ")";
      };
    },
    5004: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        z: () => Cb
      });
      const Cb = Date.now || function () {
        return new Date().getTime();
      };
    },
    2799: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        A8: () => Cz,
        AH: () => CH,
        EU: () => Cs,
        FK: () => Cf,
        IV: () => CD,
        L_: () => Cp,
        P$: () => CQ,
        SH: () => Cg,
        UM: () => Ce,
        Ww: () => CS,
        az: () => CR,
        bJ: () => CJ,
        cS: () => CY,
        cn: () => Cy,
        gB: () => CM,
        i3: () => Cx,
        kq: () => Cj,
        nG: () => Ca,
        nh: () => Cw,
        oH: () => CE,
        og: () => Ct,
        pv: () => CK,
        s1: () => Cn
      });
      var Cb = CG(2957);
      var CT = CG(6042);
      var Ci = CG(8348);
      const Cu = window.DOMParser;
      let CU;
      let Cv = true;
      const CK = (Cd, CL) => Cd.classList.contains(CL);
      const CE = Cd => {
        var CL = Cd.querySelectorAll("script,object,iframe,meta");
        for (let Co = CL.length; Co--;) {
          var Cm = CL[Co];
          Cm.parentNode.removeChild(Cm);
        }
        return Cd;
      };
      const Cq = /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
      const CM = Cd => {
        var CL = Cd.attributes;
        for (let Cc = CL.length; Cc--;) {
          var Cm;
          var Co = CL[Cc].name;
          if (/^on/.test(Co)) {
            Cd.removeAttribute(Co);
          }
          if (/href/.test(Co)) {
            Cm = CL[Cc].value;
            if (!!/javascript:|javascript&colon;/.test(Cm) || !Cq.test(Cm)) {
              Cd.removeAttribute(Co);
              console.warn("Invalid or unsafe URL");
            }
          }
        }
        return Cd;
      };
      const CJ = Cd => {
        Cd = Cd;
        if (!CU) {
          CU = new Cu();
          Cv = (() => {
            try {
              if (CU.parseFromString("", "text/html")) {
                return true;
              }
            } catch (Cc) {}
            return false;
          })();
        }
        const CL = (Cv ? CU.parseFromString(Cd, "text/html") : (Cm = document.implementation.createHTMLDocument(""), Cd.toLowerCase().indexOf("<!doctype") > -1 ? Cm.documentElement.innerHTML = Cd : Cm.body.innerHTML = Cd, Cm)).body;
        CE(CL);
        var Cm;
        var Co = CL.querySelectorAll("*");
        for (let Cc = Co.length; Cc--;) {
          const CZ = Co[Cc];
          CM(CZ);
        }
        return CL;
      };
      const CR = Cd => CJ(Cd).firstChild;
      const Cs = Cd => {
        while (Cd.firstChild) {
          Cd.removeChild(Cd.firstChild);
        }
      };
      const Cw = (Cd, CL) => {
        Cs(Cd);
        if (CL) {
          var Cm = document.createDocumentFragment();
          var Co = CJ(CL).childNodes;
          for (let Cc = 0; Cc < Co.length; Cc++) {
            Cm.appendChild(Co[Cc].cloneNode(true));
          }
          Cd.appendChild(Cm);
        }
      };
      const Cf = Cd => Cd + (Cd.toString().indexOf("%") > 0 ? "" : "px");
      const CW = Cd => (0, CT.HD)(Cd.className) ? Cd.className.split(" ") : [];
      const CP = (Cd, CL) => {
        CL = (0, Cb.fy)(CL);
        if (Cd.className !== CL) {
          Cd.className = CL;
        }
      };
      const Cn = Cd => Cd.classList || CW(Cd);
      const Cy = (Cd, CL) => {
        const Cm = CW(Cd);
        (Array.isArray(CL) ? CL : CL.split(" ")).forEach(function (Co) {
          if (!(0, CT.r3)(Cm, Co)) {
            Cm.push(Co);
          }
        });
        CP(Cd, Cm.join(" "));
      };
      const CD = (Cd, CL) => {
        var Cm = CW(Cd);
        var CL = Array.isArray(CL) ? CL : CL.split(" ");
        CP(Cd, (0, CT.e5)(Cm, CL).join(" "));
      };
      const Cp = (Cd, CL, Cm) => {
        let Co = Cd.className || "";
        if (CL.test(Co)) {
          Co = Co.replace(CL, Cm);
        } else if (Cm) {
          Co += " " + Cm;
        }
        CP(Cd, Co);
      };
      const Ct = (Cd, CL, Cm) => {
        var Co = CK(Cd, CL);
        if ((Cm = (0, CT.jn)(Cm) ? Cm : !Co) !== Co) {
          (Cm ? Cy : CD)(Cd, CL);
        }
      };
      const CQ = (Cd, CL, Cm) => {
        Cd.setAttribute(CL, Cm);
      };
      const Cj = Cd => {
        var CL = document.createElement("link");
        CL.rel = "stylesheet";
        CL.href = Cd;
        document.getElementsByTagName("head")[0].appendChild(CL);
      };
      const CY = Cd => {
        if (Cd) {
          Cs(Cd);
        }
      };
      const Cz = Cd => {
        var CL;
        var Cm;
        var Co = {
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          top: 0,
          bottom: 0
        };
        if (Cd && document.body.contains(Cd) && (Cd = Cd.getBoundingClientRect(), CL = window.pageYOffset, Cm = window.pageXOffset, Cd.width || Cd.height || Cd.left || Cd.top)) {
          Co.left = Cd.left + Cm;
          Co.right = Cd.right + Cm;
          Co.top = Cd.top + CL;
          Co.bottom = Cd.bottom + CL;
          Co.width = Cd.right - Cd.left;
          Co.height = Cd.bottom - Cd.top;
        }
        return Co;
      };
      const Cg = (Cd, CL) => {
        Cd.insertBefore(CL, Cd.firstChild);
      };
      const CH = Cd => Cd.nextElementSibling;
      const Cx = Cd => Cd.previousElementSibling;
      const Ca = (Cd, CL, Cm = {}, Co = document) => {
        if (Cq.test(Cd)) {
          let Cc = Co.createElement("a");
          Cc.href = Cd;
          Cc.target = CL;
          Cc = CM(Object.assign(Cc, Cm));
          if (Ci.Browser.firefox) {
            Cc.dispatchEvent(new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window
            }));
          } else {
            Cc.click();
          }
        }
      };
      const Ce = () => {
        var Cd = window.screen.orientation;
        return !!Cd && (Cd.type === "landscape-primary" || Cd.type === "landscape-secondary") || window.orientation === 90 || window.orientation === -90;
      };
      const CS = Cd => {
        Cd = Cd;
        (CL = document.createElement("textarea")).innerHTML = Cd;
        return CL.value.replace(/&|<|>|"|''/gm, function (Cm) {
          return "&#" + Cm.charCodeAt(0) + ";";
        }).replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>");
        var CL;
      };
    },
    4429: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cw
      });
      var CB = CG(1569);
      var Cb = CG(7034);
      var CT = CG(9888);
      var Ci = CG(2957);
      var Cu = CG(7411);
      var CU = CG(4742);
      function Cv(Cf, CW) {
        this.name = Cf;
        this.message = CW.message || CW.toString();
        this.error = CW;
      }
      var CK = CG(6042);
      var CE = CG(2268);
      var Cq = CG(2799);
      var CM = CG(974);
      var CJ = CG(6886);
      var CR = CG(1261);
      var Cs = CG(5499);
      var CG = CG(6234);
      const Cw = Object.assign({}, CT, Cb, CB, {
        addClass: Cq.cn,
        hasClass: Cq.pv,
        removeClass: Cq.IV,
        replaceClass: Cq.L_,
        toggleClass: Cq.og,
        classList: Cq.s1,
        styleDimension: Cq.FK,
        createElement: Cq.az,
        emptyElement: Cq.EU,
        addStyleSheet: Cq.kq,
        bounds: Cq.A8,
        openLink: Cq.nG,
        replaceInnerHtml: Cq.nh,
        css: CM.iv,
        clearCss: CM.oI,
        style: CM.oB,
        transform: CM.vs,
        getRgba: CM.HY,
        ajax: CJ.h,
        crossdomain: Cf => {
          var CW = window.URL;
          try {
            var CP = new CW(Cf, location.origin);
            return location.protocol + "//" + location.host != CP.protocol + "//" + CP.host;
          } catch (Cn) {}
          return true;
        },
        tryCatch: function (Cf, CW, CP = []) {
          if (CU.Z.debug) {
            return Cf.apply(CW || this, CP);
          }
          try {
            return Cf.apply(CW || this, CP);
          } catch (Cn) {
            return new Cv(Cf.name, Cn);
          }
        },
        Error: Cv,
        Timer: Cu.Z,
        log: Cs.c,
        genId: CG.B,
        between: CR.v,
        foreach: function (Cf, CW) {
          for (const CP in Cf) {
            if (function (Cn, Cy) {
              if (Cn == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              return Object.prototype.hasOwnProperty.call(Object(Cn), Cy);
            }(Cf, CP)) {
              CW(CP, Cf[CP]);
            }
          }
        },
        flashVersion: CE.dI,
        isIframe: CE.cL,
        indexOf: CK.cq,
        trim: Ci.fy,
        pad: Ci.vk,
        extension: Ci.AO,
        hms: Ci.WZ,
        seconds: Ci.m9,
        prefix: Ci.O4,
        suffix: Ci.uA,
        noop: () => {}
      });
    },
    7543: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        C: () => Cb
      });
      const Cb = CT => !!(CT = CT || window.event) && Boolean(CT) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(CT.type);
    },
    8518: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Cq: () => CR,
        Dq: () => Cp,
        G3: () => Cw,
        Mh: () => CQ,
        Pm: () => Cy,
        dl: () => CD,
        id: () => CJ,
        q2: () => CP,
        t6: () => CW,
        tK: () => CM
      });
      var CB = CG(6042);
      var Cb = CG(2268);
      var CT = CG(6886);
      var Ci = CG(7034);
      var Cu = CG(696);
      const CU = {};
      const Cv = {
        aa: "Afar",
        ab: "Abkhazian",
        ae: "Avestan",
        af: "Afrikaans",
        ak: "Akan",
        am: "Amharic",
        ar: "Arabic",
        an: "Aragonese",
        as: "Assamese",
        av: "Avaric",
        ay: "Aymara",
        az: "Azerbaijani",
        ba: "Bashkir",
        be: "Belarusian",
        bg: "Bulgarian",
        bh: "Bihari languages",
        bi: "Bislama",
        bm: "Bambara",
        bn: "Bengali",
        bo: "Tibetan",
        br: "Breton",
        bs: "Bosnian",
        ca: "Catalan",
        ce: "Chechen",
        ch: "Chamorro",
        co: "Corsican",
        cr: "Cree",
        cs: "Czech",
        cu: "Church Slavic",
        cv: "Chuvash",
        cy: "Welsh",
        da: "Danish",
        de: "German",
        dv: "Divehi",
        dz: "Dzongkha",
        ee: "Ewe",
        el: "Greek",
        en: "English",
        eo: "Esperanto",
        es: "Spanish",
        et: "Estonian",
        eu: "Basque",
        fa: "Persian",
        ff: "Fulah",
        fi: "Finnish",
        fj: "Fijian",
        fo: "Faroese",
        fr: "French",
        fy: "Western Frisian",
        ga: "Irish",
        gd: "Gaelic",
        gl: "Galician",
        gn: "Guarani",
        gu: "Gujarati",
        gv: "Manx",
        ha: "Hausa",
        he: "Hebrew",
        hi: "Hindi",
        ho: "Hiri Motu",
        hr: "Croatian",
        ht: "Haitian",
        hu: "Hungarian",
        hy: "Armenian",
        hz: "Herero",
        ia: "Interlingua",
        id: "Indonesian",
        ie: "Interlingue",
        ig: "Igbo",
        ii: "Sichuan Yi",
        ik: "Inupiaq",
        io: "Ido",
        is: "Icelandic",
        it: "Italian",
        iu: "Inuktitut",
        ja: "Japanese",
        jv: "Javanese",
        ka: "Georgian",
        kg: "Kongo",
        ki: "Kikuyu",
        kj: "Kuanyama",
        kk: "Kazakh",
        kl: "Kalaallisut",
        km: "Central Khmer",
        kn: "Kannada",
        ko: "Korean",
        kr: "Kanuri",
        ks: "Kashmiri",
        ku: "Kurdish",
        kv: "Komi",
        kw: "Cornish",
        ky: "Kirghiz",
        la: "Latin",
        lb: "Luxembourgish",
        lg: "Ganda",
        li: "Limburgan",
        lo: "Lao",
        ln: "Lingala",
        lt: "Lithuanian",
        lu: "Luba-Katanga",
        lv: "Latvian",
        mg: "Malagasy",
        mh: "Marshallese",
        mi: "Maori",
        mk: "Macedonian",
        ml: "Malayalam",
        mn: "Mongolian",
        mr: "Marathi",
        ms: "Malay",
        mt: "Maltese",
        my: "Burmese",
        na: "Nauru",
        nb: "Bokmål",
        nd: "Ndebele",
        ne: "Nepali",
        ng: "Ndonga",
        nl: "Dutch",
        nn: "Norwegian Nynorsk",
        no: "Norwegian",
        nr: "Ndebele",
        nv: "Navajo",
        ny: "Chichewa",
        oc: "Occitan",
        oj: "Ojibwa",
        om: "Oromo",
        or: "Oriya",
        os: "Ossetian",
        pa: "Panjabi",
        pi: "Pali",
        pl: "Polish",
        pt: "Portuguese",
        ps: "Pushto",
        qu: "Quechua",
        rm: "Romansh",
        rn: "Rundi",
        ro: "Romanian",
        ru: "Russian",
        rw: "Kinyarwanda",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        se: "Northern Sami",
        sg: "Sango",
        si: "Sinhala",
        sk: "Slovak",
        sl: "Slovenian",
        sm: "Samoan",
        sn: "Shona",
        so: "Somali",
        sq: "Albanian",
        sr: "Serbian",
        ss: "Swati",
        st: "Sotho",
        su: "Sundanese",
        sw: "Swahili",
        sv: "Swedish",
        ta: "Tamil",
        te: "Telugu",
        tg: "Tajik",
        th: "Thai",
        ti: "Tigrinya",
        tk: "Turkmen",
        tl: "Tagalog",
        tn: "Tswana",
        to: "Tonga",
        tr: "Turkish",
        ts: "Tsonga",
        tt: "Tatar",
        tw: "Twi",
        ty: "Tahitian",
        ug: "Uighur",
        uk: "Ukrainian",
        ur: "Urdu",
        uz: "Uzbek",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapük",
        wa: "Walloon",
        wo: "Wolof",
        xh: "Xhosa",
        yi: "Yiddish",
        yo: "Yoruba",
        za: "Zhuang",
        zh: "Chinese",
        zu: "Zulu"
      };
      const CK = (0, CB.U_)(Cv);
      const CE = Cj => Cj.toLowerCase().replace("-", "_");
      const Cq = Cj => {
        var Cj = CE(Cj);
        var CY = Cj.indexOf("_");
        if (CY === -1) {
          return Cj;
        } else {
          return Cj.substring(0, CY);
        }
      };
      const CM = Cj => Cj ? Object.keys(Cj).reduce((CY, Cz) => {
        CY[CE(Cz)] = Cj[Cz];
        return CY;
      }, {}) : {};
      const CJ = Cj => {
        if (Cj) {
          return Cj.length !== 3 && Cv[Cq(Cj)] || Cj;
        }
      };
      const CR = Cj => CK[Cj] || "";
      const Cs = Cj => {
        Cj = Cj.querySelector("html");
        if (Cj) {
          return Cj.getAttribute("lang");
        } else {
          return null;
        }
      };
      const Cw = function () {
        if (typeof Cw.mock_ == "string") {
          return Cw.mock_;
        }
        let Cj = Cs(document);
        if (!Cj && (0, Cb.cL)()) {
          try {
            Cj = Cs(window.top.document);
          } catch (CY) {}
        }
        return Cj || navigator.language || "en";
      };
      Cw.mock_ = null;
      const Cf = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];
      const CW = Cj => Cj.charCodeAt(0) === 8207 || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(Cj);
      const CP = function (Cj) {
        if (typeof CP.mock_ == "boolean") {
          return CP.mock_;
        } else {
          return Cf.indexOf(Cq(Cj)) >= 0;
        }
      };
      CP.mock_ = null;
      const Cn = (Cj, CY, Cz) => {
        CY = Cj[Cz] || CY[Cz];
        if (CY) {
          Cj[Cz] = CY;
        }
      };
      const Cy = (Cj, CY, Cz) => Object.assign({}, (Cg => {
        var {
          advertising: CH,
          related: Cx,
          sharing: Ca,
          abouttext: Ce
        } = Cg;
        var CS = Object.assign({}, Cg.localization);
        if (CH) {
          CS.advertising = CS.advertising || {};
          Cn(CS.advertising, CH, "admessage");
          Cn(CS.advertising, CH, "cuetext");
          Cn(CS.advertising, CH, "loadingAd");
          Cn(CS.advertising, CH, "podmessage");
          Cn(CS.advertising, CH, "skipmessage");
          Cn(CS.advertising, CH, "skiptext");
        }
        if (typeof CS.related == "string") {
          CS.related = {
            heading: CS.related
          };
        } else {
          CS.related = CS.related || {};
        }
        if (Cx) {
          Cn(CS.related, Cx, "autoplaymessage");
        }
        if (Ca) {
          CS.sharing = CS.sharing || {};
          Cn(CS.sharing, Ca, "heading");
          Cn(CS.sharing, Ca, "copied");
        }
        if (Ce) {
          Cn(CS, Cg, "abouttext");
        }
        var CH = CS.close || CS.nextUpClose;
        if (CH) {
          CS.close = CH;
        }
        return CS;
      })(Cj), CY[Cq(Cz)], CY[CE(Cz)]);
      const CD = function (Cj) {
        if (typeof CD.mock_ == "boolean") {
          return CD.mock_;
        } else {
          return (0, Ci.isDeepKeyCompliant)(Cu.Z, Cj, (CY, Cz) => typeof Cz[CY] == "string");
        }
      };
      CD.mock_ = null;
      const Cp = function (Cj, CY) {
        if (typeof Cp.mock_ == "function") {
          return Cp.mock_;
        }
        let Cz = CU[CY];
        if (!Cz) {
          const Cg = Cj + "translations/" + (Cj = Cq(CY), /^n[bn]$/.test(Cj) ? "no" : Cj) + ".json";
          CU[CY] = Cz = new Promise((CH, Cx) => {
            (0, CT.h)({
              url: Cg,
              oncomplete: CH,
              onerror: (Ca, Ce, CS, Cd) => {
                CU[CY] = null;
                Cx(Cd);
              },
              responseType: "json"
            });
          });
        }
        return Cz;
      };
      Cp.mock_ = null;
      const Ct = (Cj, CY, Cz, Cg) => {
        Cj[CY] = Object.assign({}, Cz[CY], Cg[CY]);
      };
      const CQ = (Cj, CY) => {
        var Cz = Object.assign({}, Cj, CY);
        Ct(Cz, "errors", Cj, CY);
        Ct(Cz, "related", Cj, CY);
        Ct(Cz, "sharing", Cj, CY);
        Ct(Cz, "advertising", Cj, CY);
        Ct(Cz, "shortcuts", Cj, CY);
        Ct(Cz, "captionsStyles", Cj, CY);
        return Cz;
      };
    },
    5499: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        c: () => Cb
      });
      const Cb = typeof console.log == "function" ? console.log.bind(console) : () => {};
    },
    1261: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        v: () => Cb
      });
      const Cb = function (CT, Ci, Cu) {
        return Math.max(Math.min(CT, Cu), Ci);
      };
    },
    9888: (CO, CB, CG) => {
      'use strict';

      CG.r(CB);
      CG.d(CB, {
        getAbsolutePath: () => Cu,
        isAbsolutePath: () => Ci,
        parseDimension: () => CK,
        parseXML: () => CU,
        serialize: () => Cv,
        timeFormat: () => CE,
        timeFormatAria: () => Cq
      });
      var Cb = CG(6042);
      var CT = CG(5950);
      const Ci = CM => /^(?:(?:https?|file):)?\/\//.test(CM);
      const Cu = (CM, CJ) => (0, CT.kd)(CM, CJ);
      const CU = CM => {
        let CJ = null;
        try {
          if ((CJ = new window.DOMParser().parseFromString(CM, "text/xml")).querySelector("parsererror")) {
            CJ = null;
          }
        } catch (CR) {}
        return CJ;
      };
      const Cv = CM => {
        if (CM === undefined) {
          return null;
        }
        if (typeof CM == "string" && CM.length < 6) {
          var CJ = CM.toLowerCase();
          if (CJ === "true") {
            return true;
          }
          if (CJ === "false") {
            return false;
          }
          if (!(0, Cb.i2)(Number(CM)) && !(0, Cb.i2)(parseFloat(CM))) {
            return Number(CM);
          }
        }
        return CM;
      };
      const CK = CM => (0, Cb.qh)(CM) ? CM : CM === "" ? 0 : CM.lastIndexOf("%") > -1 ? CM : parseInt(CM.replace("px", ""), 10);
      const CE = (CM, CJ) => {
        if ((0, Cb.i2)(CM)) {
          CM = parseInt(CM.toString(), 10);
        }
        if ((0, Cb.i2)(CM) || !isFinite(CM) || CM <= 0 && !CJ) {
          return "00:00";
        } else {
          CJ = CM < 0 ? "-" : "";
          CM = Math.abs(CM);
          return CJ + ((CJ = Math.floor(CM / 3600)) ? CJ + ":" : "") + ((CJ = Math.floor((CM - CJ * 3600) / 60)) < 10 ? "0" : "") + CJ + ":" + ((CJ = Math.floor(CM % 60)) < 10 ? "0" : "") + CJ;
        }
      };
      const Cq = CM => {
        var CJ;
        if ((0, Cb.i2)(CM)) {
          CM = parseInt(CM.toString(), 10);
        }
        if ((0, Cb.i2)(CM) || !isFinite(CM) || CM <= 0) {
          return "0 seconds";
        } else {
          return ((CJ = Math.floor(CM / 3600)) ? CJ + (CJ >= 1 ? " hour" + (CJ > 1 ? "s" : "") + ", " : "") : "") + ((CJ = Math.floor((CM - CJ * 3600) / 60)) ? CJ + (CJ >= 1 ? " minute" + (CJ > 1 ? "s" : "") + ", " : "") : "") + (CJ = Math.floor(CM % 60)) + (CJ >= 1 ? " second" + (CJ > 1 ? "s" : "") : "");
        }
      };
    },
    1569: (CO, CB, CG) => {
      'use strict';

      CG.r(CB);
      CG.d(CB, {
        getScriptPath: () => Ci,
        loadFrom: () => Cv,
        repo: () => Cu,
        versionCheck: () => CU
      });
      var Cb = CG(6601);
      var CT = CG(7034);
      const Ci = function (CK) {
        var CE = document.getElementsByTagName("script");
        for (let CJ = 0; CJ < CE.length; CJ++) {
          var Cq = CE[CJ].src;
          if (Cq) {
            var CM = Cq.lastIndexOf("/" + CK);
            if (CM >= 0) {
              return Cq.substr(0, CM + 1);
            }
          }
        }
        return "";
      };
      const Cu = function () {
        var CK = "//ssl.p.jwpcdn.com/player/v/8.33.2";
        return ((0, CT.isFileProtocol)() ? "https:" : "") + CK;
      };
      const CU = function (CK) {
        var CK = ("0" + CK).split(/\W/);
        var CE = Cb.i.split(/\W/);
        var Cq = parseFloat(CK[0]);
        var CM = parseFloat(CE[0]);
        return !(CM < Cq) && (Cq !== CM || !(parseFloat("0" + CK[1]) > parseFloat(CE[1])));
      };
      const Cv = function () {
        return Cu();
      };
    },
    6234: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        B: () => CT,
        F: () => Cb
      });
      const Cb = 12;
      const CT = Ci => {
        let Cu = "";
        while (Cu.length < Ci) {
          Cu += (() => {
            try {
              var CU = window.crypto || window.msCrypto;
              if (CU != null && CU.getRandomValues) {
                return CU.getRandomValues(new Uint32Array(1))[0].toString(36);
              }
            } catch (Cv) {}
            return Math.random().toString(36).slice(2, 9);
          })();
        }
        return Cu.slice(0, Ci);
      };
    },
    1776: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        U: () => Cb,
        W: () => CT
      });
      const Cb = window.requestAnimationFrame || (Ci => setTimeout(Ci, 17));
      const CT = window.cancelAnimationFrame || clearTimeout;
    },
    676: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        ZP: () => Cu
      });
      var CB = CG(328);
      var Cb = CG(1643);
      function CT(CU, Cv, CK) {
        const CE = this;
        let Cq = 0;
        const CM = CR => {
          Cq = 2;
          CE.trigger(Cb.pn, CR).off();
        };
        const CJ = CR => {
          Cq = 3;
          CE.trigger(Cb.xQ, CR).off();
        };
        this.getStatus = function () {
          return Cq;
        };
        this.load = function () {
          let CR = Ci[CU];
          if (Cq === 0) {
            if (CR) {
              CR.then(CJ).catch(CM);
            }
            Cq = 1;
            CR = new Promise((Cs, Cw) => {
              const Cf = (Cv ? CD => {
                var Cp = document.createElement("link");
                Cp.type = "text/css";
                Cp.rel = "stylesheet";
                Cp.href = CD;
                return Cp;
              } : (CD, Cp) => {
                var Ct = document.createElement("script");
                Ct.type = "text/javascript";
                Ct.charset = "utf-8";
                Ct.async = true;
                Ct.timeout = Cp || 45000;
                Ct.src = CD;
                return Ct;
              })(CU, CK);
              let CW;
              function CP(CD) {
                Cn();
                CM(CD);
                Cw(CD);
              }
              const Cn = function () {
                Cf.onerror = Cf.onload = null;
                clearTimeout(CW);
              };
              CW = setTimeout(() => {
                CP(new Error("Network timeout " + CU));
              }, 45000);
              Cf.onerror = function () {
                CP(new Error("Failed to load " + CU));
              };
              Cf.onload = function (CD) {
                Cn();
                CJ(CD);
                Cs(CD);
              };
              var Cy = document.getElementsByTagName("head")[0] || document.documentElement;
              Cy.insertBefore(Cf, Cy.firstChild);
            });
            Ci[CU] = CR;
          }
          return CR;
        };
      }
      const Ci = {};
      Object.assign(CT.prototype, CB.ZP);
      const Cu = CT;
    },
    2957: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        AO: () => Cv,
        Dc: () => CU,
        O4: () => CM,
        U5: () => Cq,
        WZ: () => CK,
        fy: () => Ci,
        m9: () => CE,
        uA: () => CJ,
        vk: () => Cu,
        zz: () => CR
      });
      var Cb = CG(6042);
      const CT = window.parseFloat;
      const Ci = Cs => Cs.replace(/^\s+|\s+$/g, "");
      const Cu = (Cs, Cw, Cf) => {
        Cs = "" + Cs;
        Cf = Cf || "0";
        while (Cs.length < Cw) {
          Cs = Cf + Cs;
        }
        return Cs;
      };
      const CU = (Cs, Cw) => {
        var Cf = Cs.attributes;
        for (let CW = 0; CW < Cf.length; CW++) {
          if (Cf[CW].name && Cf[CW].name.toLowerCase() === Cw.toLowerCase()) {
            return Cf[CW].value.toString();
          }
        }
        return "";
      };
      const Cv = Cs => {
        var Cw;
        if (Cs && Cs.substr(0, 4) !== "rtmp") {
          if (Cw = /[(,]format=(m3u8|mpd)-/i.exec(Cs)) {
            return Cw[1];
          } else if ((Cw = Cs.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1")) !== Cs) {
            return Cw.toLowerCase();
          } else if ((Cs = Cs.split("?")[0].split("#")[0]).lastIndexOf(".") > -1) {
            return Cs.substr(Cs.lastIndexOf(".") + 1, Cs.length).toLowerCase();
          } else {
            return "";
          }
        } else {
          return "";
        }
      };
      const CK = Cs => {
        var Cw = (Cs / 60 | 0) % 60;
        var Cf = Cs % 60;
        return Cu((Cs / 3600 | 0).toString(), 2) + ":" + Cu(Cw.toString(), 2) + ":" + Cu(Cf.toFixed(3), 6);
      };
      const CE = (Cs, Cw) => {
        if (!Cs) {
          return 0;
        }
        if ((0, Cb.qh)(Cs)) {
          return Cs;
        }
        var Cs = Cs.replace(",", ".");
        var Cf = Cs.slice(-1);
        var CW = Cs.split(":");
        var CP = CW.length;
        let Cn = 0;
        if (Cf === "s") {
          Cn = CT(Cs);
        } else if (Cf === "m") {
          Cn = CT(Cs) * 60;
        } else if (Cf === "h") {
          Cn = CT(Cs) * 3600;
        } else if (CP > 1) {
          let Cy = CP - 1;
          if (CP === 4) {
            if (Cw) {
              Cn = CT(CW[Cy]) / Cw;
            }
            --Cy;
          }
          Cn = (Cn += CT(CW[Cy])) + CT(CW[Cy - 1]) * 60;
          if (CP >= 3) {
            Cn += CT(CW[Cy - 2]) * 3600;
          }
        } else {
          Cn = CT(Cs);
        }
        if ((0, Cb.qh)(Cn)) {
          return Cn;
        } else {
          return 0;
        }
      };
      const Cq = (Cs, Cw, Cf) => {
        if ((0, Cb.HD)(Cs) && Cs.slice(-1) === "%") {
          const CW = CT(Cs);
          if (Cw && (0, Cb.qh)(Cw) && (0, Cb.qh)(CW)) {
            return Cw * CW / 100;
          } else {
            return null;
          }
        }
        return CE(Cs, Cf);
      };
      const CM = (Cs, Cw) => Cs.map(Cf => Cw + Cf);
      const CJ = (Cs, Cw) => Cs.map(Cf => Cf + Cw);
      const CR = Cs => Boolean(Cs) && (0, Cb.HD)(Cs) && Cs.slice(-1) === "%";
    },
    5882: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        GU: () => Cn,
        ZP: () => Ce,
        dO: () => Ct
      });
      var Cb = CG(8348);
      var CT = CG(1643);
      var CB = CG(328);
      var Ci = CG(5004);
      var Cu = CG(2799);
      const CU = "ontouchstart" in window;
      const Cv = "PointerEvent" in window && !Cb.OS.android;
      const CK = !Cv && (!CU || !Cb.OS.mobile);
      const CE = "window";
      const Cq = "init";
      const CM = "select";
      const CJ = "keydown";
      const CR = Cb.Features.passiveEvents;
      const Cs = !!CR && {
        passive: true
      };
      let Cw;
      let Cf;
      const CW = (CS, Cd, CL) => {
        const Cm = CS.el;
        const Co = (() => {
          var {
            target: Cc,
            touches: CZ,
            changedTouches: CF
          } = CL;
          let CV;
          let Ch = CL.pointerType;
          Ch = CZ || CF ? (CV = (CZ != null && CZ.length ? CZ : CF)[0], Ch || "touch") : (CV = CL, Ch || "mouse");
          var {
            pageX: CZ,
            pageY: CF
          } = CV;
          return {
            type: Cd,
            pointerType: Ch,
            pageX: CZ,
            pageY: CF,
            sourceEvent: CL,
            currentTarget: Cm,
            target: Cc
          };
        })();
        CS.trigger(Cd, Co);
      };
      const CP = (CS, Cd, CL) => {
        var Cm = CS.el;
        var Co = CL.target;
        CS.trigger(Cd, {
          type: Cd,
          sourceEvent: CL,
          currentTarget: Cm,
          target: Co
        });
      };
      const Cn = CS => {
        CS = CS.ownerDocument || CS;
        return CS.defaultView || CS.parentWindow || window;
      };
      const Cy = (CS, Cd, CL, Cm, Co = Cs) => {
        let Cc = CS.handlers[Cd];
        let CZ = CS.options[Cd];
        if (!Cc) {
          Cc = CS.handlers[Cd] = {};
          CZ = CS.options[Cd] = {};
        }
        if (Cc[CL]) {
          throw new Error(Cd + (" " + CL + " already registered"));
        }
        Cc[CL] = Cm;
        CZ[CL] = Co;
        CS = CS.el;
        Cd = Cd === CE ? Cn(CS) : CS;
        if (Cd) {
          Cd.addEventListener(CL, Cm, Co);
        }
      };
      const CD = CS => {
        var Cd = CS.el;
        if (CS.pointerId !== null) {
          Cd.releasePointerCapture(CS.pointerId);
          CS.pointerId = null;
        }
      };
      const Cp = (CS, Cd) => {
        const {
          el: CL,
          handlers: Cm,
          options: Co
        } = CS;
        const Cc = Cd === CE ? Cn(CL) : CL;
        const CZ = Cm[Cd];
        const CF = Co[Cd];
        if (CZ) {
          Object.keys(CZ).forEach(CV => {
            var Ch = CF[CV];
            if (typeof Ch == "boolean") {
              Cc.removeEventListener(CV, CZ[CV], Ch);
            } else {
              Cc.removeEventListener(CV, CZ[CV]);
            }
          });
          Cm[Cd] = null;
          Co[Cd] = null;
        }
      };
      const Ct = CS => !!Boolean(CS.ctrlKey) && CS.type === "click" || ("which" in CS ? CS.which === 3 : "button" in CS && CS.button === 2);
      const CQ = (CS, Cd) => {
        Cf = Cf || new Ce(document).on("interaction");
        if (!CS.handlers[Cq] && !CS.handlers[CM]) {
          const CL = CS.el;
          Cy(CS, Cd, "blur", () => {
            (0, Cu.IV)(CL, "jw-tab-focus");
            CS.clicking = false;
          });
          Cy(CS, Cd, "focus", () => {
            if (Cf.event && Cf.event.type === CJ) {
              (0, Cu.cn)(CL, "jw-tab-focus");
            }
          });
        }
      };
      const Cj = (CS, Cd, CL, Cm) => {
        if (Cv) {
          Cy(CS, Cd, "pointerdown", CL, Cm);
        } else {
          if (CK) {
            Cy(CS, Cd, "mousedown", CL, Cm);
          }
          Cy(CS, Cd, "touchstart", CL, Cm);
        }
      };
      const CY = CS => {
        if (!CS.handlers[CM]) {
          const Cd = CS.el;
          CQ(CS, CM);
          Cj(CS, CM, CL => {
            var Cm = CL.target;
            if (!Ct(CL) && (!Boolean(CS.directSelect) || Cm === Cd)) {
              if (CL.isPrimary && Cm.tagName === "BUTTON") {
                Cm.focus();
              }
              CS.lastStart = (0, Ci.z)();
              CS.clicking = true;
            }
          });
          Cy(CS, CM, "click", CL => {
            var Cm;
            var Co;
            if (!Ct(CL) && (!Boolean(CS.directSelect) || CL.target === Cd)) {
              if (!((0, Ci.z)() - CS.lastStart > 500) || CS.clicking !== true) {
                Co = CL;
                if ((Cm = CS).enableDoubleClick) {
                  if ((0, Ci.z)() - Cm.lastClick < 300) {
                    CW(Cm, CT.P, Co);
                    Cm.lastClick = 0;
                  } else {
                    Cm.lastClick = (0, Ci.z)();
                  }
                }
                CW(CS, CT.ot, CL);
              }
              CS.clicking = false;
            }
          });
        }
      };
      const Cz = CS => CS.type.indexOf("touch") === 0 ? (CS.originalEvent || CS).changedTouches[0] : CS;
      const Cg = CS => {
        if (!CS.handlers[Cq]) {
          const {
            el: Cd,
            passive: CL
          } = CS;
          const Cm = !!CR && {
            passive: CL
          };
          const Co = CZ => {
            if (CS.dragged) {
              CW(CS, CT.Wp, CZ);
            } else {
              const {
                pageX: CV,
                pageY: Ch
              } = Cz(CZ);
              const CA = CV - CS.startX;
              const CI = Ch - CS.startY;
              if (CA * CA + CI * CI > 36) {
                CW(CS, CT.nv, CZ);
                CS.dragged = true;
                CW(CS, CT.Wp, CZ);
              }
            }
            var CF;
            if (!CL && CZ.type === "touchmove") {
              if (CZ.preventDefault) {
                CZ.preventDefault();
              }
            }
          };
          const Cc = CZ => {
            clearTimeout(Cw);
            if (CS.el && (CD(CS), Cp(CS, CE), CS.dragged)) {
              CS.dragged = false;
              CW(CS, CT.Sv, CZ);
            }
          };
          CQ(CS, Cq);
          Cj(CS, Cq, CZ => {
            (0, Cu.IV)(Cd, "jw-tab-focus");
            if (!Ct(CZ)) {
              var {
                target: CF,
                type: CV
              } = CZ;
              if (!CS.directSelect || CF === Cd) {
                var {
                  pageX: CF,
                  pageY: Ch
                } = Cz(CZ);
                CS.dragged = false;
                CS.startX = CF;
                CS.startY = Ch;
                Cp(CS, CE);
                if (CV === "pointerdown" && CZ.isPrimary) {
                  if (!CL) {
                    const CA = CZ.pointerId;
                    CS.pointerId = CA;
                    Cd.setPointerCapture(CA);
                  }
                  Cy(CS, CE, "pointermove", Co, Cm);
                  Cy(CS, CE, "pointercancel", Cc);
                  Cy(CS, CE, "pointerup", Cc);
                } else if (CV === "mousedown") {
                  Cy(CS, CE, "mousemove", Co, Cm);
                  Cy(CS, CE, "mouseup", Cc);
                } else if (CV === "touchstart") {
                  Cy(CS, CE, "touchmove", Co, Cm);
                  Cy(CS, CE, "touchcancel", Cc);
                  Cy(CS, CE, "touchend", Cc);
                }
              }
            }
          }, Cm);
        }
      };
      const CH = {
        drag(CS) {
          Cg(CS);
        },
        dragStart(CS) {
          Cg(CS);
        },
        dragEnd(CS) {
          Cg(CS);
        },
        click(CS) {
          CY(CS);
        },
        doubleClick(CS) {
          CS.enableDoubleClick = true;
          CY(CS);
        },
        longPress(CS) {
          const Cd = "longPress";
          if (Cb.OS.iOS) {
            const CL = () => {
              clearTimeout(Cw);
            };
            Cy(CS, Cd, "touchstart", Cm => {
              CL();
              Cw = setTimeout(() => {
                CW(CS, Cd, Cm);
              }, 500);
            });
            Cy(CS, Cd, "touchmove", CL);
            Cy(CS, Cd, "touchcancel", CL);
            Cy(CS, Cd, "touchend", CL);
          } else {
            CS.el.oncontextmenu = Cm => {
              CW(CS, Cd, Cm);
              return false;
            };
          }
        },
        focus(CS) {
          const Cd = "focus";
          Cy(CS, Cd, Cd, CL => {
            CP(CS, Cd, CL);
          });
        },
        blur(CS) {
          const Cd = "blur";
          Cy(CS, Cd, Cd, CL => {
            CP(CS, Cd, CL);
          });
        },
        over(CS) {
          if (Cv || CK) {
            Cy(CS, CT.B1, Cv ? "pointerover" : "mouseover", Cd => {
              if (Cd.pointerType !== "touch") {
                CW(CS, CT.B1, Cd);
              }
            });
          }
        },
        out(CS) {
          if (Cv) {
            const Cd = CS.el;
            Cy(CS, CT.U3, "pointerout", CL => {
              var Cm;
              if (CL.pointerType !== "touch" && "clientX" in CL) {
                Cm = document.elementFromPoint(CL.clientX, CL.clientY);
                if (!Cd.contains(Cm)) {
                  CW(CS, CT.U3, CL);
                }
              }
            });
          } else if (CK) {
            Cy(CS, CT.U3, "mouseout", CL => {
              CW(CS, CT.U3, CL);
            });
          }
        },
        move(CS) {
          if (Cv || CK) {
            Cy(CS, CT.tP, Cv ? "pointermove" : "mousemove", Cd => {
              if (Cd.pointerType !== "touch") {
                CW(CS, CT.tP, Cd);
              }
            });
          }
        },
        enter(CS) {
          Cy(CS, CT.K5, CJ, Cd => {
            if (Cd.key === "Enter" || Cd.keyCode === 13) {
              Cd.stopPropagation();
              CP(CS, CT.K5, Cd);
            }
          });
        },
        keydown(CS) {
          Cy(CS, CJ, CJ, Cd => {
            CP(CS, CJ, Cd);
          }, false);
        },
        gesture(CS) {
          const Cd = "gesture";
          const CL = Cm => CW(CS, Cd, Cm);
          Cy(CS, Cd, "click", CL);
          Cy(CS, Cd, CJ, CL);
        },
        interaction(CS) {
          var Cd = "interaction";
          var CL = Cm => {
            CS.event = Cm;
          };
          Cy(CS, Cd, "mousedown", CL, true);
          Cy(CS, Cd, CJ, CL, true);
        },
        tap() {},
        doubleTap() {}
      };
      const Cx = /\s+/;
      const Ca = CS => CS && !Cx.test(CS) && typeof CS != "object";
      class Ce extends CB.ZP {
        constructor(CS, Cd) {
          super();
          var CL = !(Cd = Cd || {}).preventScrolling;
          this.directSelect = Boolean(Cd.directSelect);
          this.dragged = false;
          this.enableDoubleClick = false;
          this.el = CS;
          this.handlers = {};
          this.options = {};
          this.lastClick = 0;
          this.lastStart = 0;
          this.passive = CL;
          this.pointerId = null;
          this.startX = 0;
          this.startY = 0;
          this.event = null;
          this.clicking = false;
        }
        on(CS, Cd, CL) {
          if (!!Ca(CS) && !this.handlers[CS]) {
            CH[CS](this);
          }
          return super.on(CS, Cd, CL);
        }
        off(CS, Cd, CL) {
          if (Ca(CS)) {
            Cp(this, CS);
          } else if (!CS) {
            const Cm = this.handlers;
            Object.keys(Cm).forEach(Co => {
              Cp(this, Co);
            });
          }
          return super.off(CS, Cd, CL);
        }
        destroy() {
          if (this.el) {
            this.off();
            if (Cv) {
              CD(this);
            }
            this.el = null;
          }
        }
      }
    },
    6042: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Cb: () => Xl,
        HD: () => CZ,
        Kn: () => Cx,
        P2: () => XJ,
        S6: () => Ca,
        UI: () => Ch,
        U_: () => XR,
        Yj: () => X2,
        ZP: () => Xn,
        _e: () => Xv,
        a9: () => XW,
        ar: () => XU,
        ce: () => Xs,
        cq: () => Xb,
        dp: () => X9,
        e1: () => XG,
        e5: () => XK,
        ei: () => Xf,
        hX: () => X6,
        hj: () => Cc,
        i2: () => CV,
        jn: () => XX,
        l7: () => Xw,
        mf: () => Co,
        o8: () => XN,
        qh: () => XP,
        r3: () => XT,
        sE: () => X4,
        u4: () => Cr,
        vM: () => XO,
        wB: () => Xu,
        xV: () => XC,
        yR: () => X1
      });
      CB = CG(5004);
      function Cb(Xy) {
        if (!Cx(Xy)) {
          return [];
        }
        if (CY) {
          return CY(Xy);
        }
        var XD = [];
        for (const Xp in Xy) {
          if (CH(Xy, Xp)) {
            XD.push(Xp);
          }
        }
        return XD;
      }
      function CT(Xy, XD, ...Xp) {
        if (Cz && Xy.bind === Cz) {
          return Cz.apply(Xy, [XD].concat(Xp));
        }
        if (Co(Xy)) {
          return Xt;
        }
        throw new TypeError();
        function Xt(...XQ) {
          if (!(this instanceof Xt)) {
            return Xy.apply(XD, Xp.concat(XQ));
          }
          CI.prototype = Xy.prototype;
          var Xj = new CI();
          CI.prototype = null;
          var XQ = Xy.apply(Xj, Xp.concat(XQ));
          if (Object(XQ) === XQ) {
            return XQ;
          } else {
            return Xj;
          }
        }
      }
      function Ci(Xy, XD, Xp) {
        XD = XD || X1;
        let Xt = true;
        if (Xy == null) {
          return Xt;
        } else if (Cp && Xy.every === Cp) {
          return Xy.every(XD, Xp);
        } else {
          Ca(Xy, function (XQ, Xj, XY) {
            if (!(Xt = Xt && XD.call(Xp, XQ, Xj, XY))) {
              return Cq;
            }
          });
          return Boolean(Xt);
        }
      }
      function Cu(Xy, XD) {
        let Xp;
        return function (...Xt) {
          if (--Xy > 0) {
            Xp = XD.apply(this, Xt);
          }
          if (Xy <= 1) {
            XD = null;
          }
          return Xp;
        };
      }
      function CU(Xy) {
        if (Xy == null) {
          return X1;
        } else if (Co(Xy)) {
          return Xy;
        } else {
          return Xl(Xy);
        }
      }
      function Cv(Xy) {
        return function (XD, Xp, Xt) {
          const XQ = {};
          Xp = CU(Xp);
          Ca(XD, function (Xj, XY) {
            XY = Xp.call(Xt, Xj, XY, XD);
            Xy(XQ, XY, Xj);
          });
          return XQ;
        };
      }
      function CK(Xy, ...XD) {
        return function (...Xp) {
          let Xt = 0;
          var XQ = XD.slice();
          for (let Xj = 0, XY = XQ.length; Xj < XY; Xj++) {
            if (CH(XQ[Xj], "partial")) {
              XQ[Xj] = Xp[Xt++];
            }
          }
          while (Xt < arguments.length) {
            XQ.push(Xp[Xt++]);
          }
          return Xy.apply(this, XQ);
        };
      }
      function CE(Xy, XD, ...Xp) {
        return setTimeout(function () {
          return Xy.apply(null, Xp);
        }, XD);
      }
      const Cq = {};
      const CM = Array.prototype;
      const CJ = Object.prototype;
      const CR = Function.prototype;
      const Cs = CM.slice;
      const Cw = CM.concat;
      const Cf = CJ.toString;
      const CW = CJ.hasOwnProperty;
      const CP = CM.map;
      const Cn = CM.reduce;
      const Cy = CM.forEach;
      const CD = CM.filter;
      const Cp = CM.every;
      const Ct = CM.some;
      const CQ = CM.indexOf;
      const Cj = Array.isArray;
      const CY = Object.keys;
      const Cz = CR.bind;
      const Cg = window.isFinite;
      const CH = function (Xy, XD) {
        return CW.call(Xy, XD);
      };
      const Cx = function (Xy) {
        return Xy === Object(Xy);
      };
      const Ca = function (Xy, XD, Xp) {
        let Xt;
        let XQ;
        if (Xy != null) {
          if (Cy && Xy.forEach === Cy) {
            Xy.forEach(XD, Xp);
          } else if (Xy.length === Number(Xy.length)) {
            Xt = 0;
            XQ = Xy.length;
            for (; Xt < XQ; Xt++) {
              if (XD.call(Xp, Xy[Xt], Xt, Xy) === Cq) {
                return;
              }
            }
          } else {
            var Xj = Cb(Xy);
            Xt = 0;
            XQ = Xj.length;
            for (; Xt < XQ; Xt++) {
              if (XD.call(Xp, Xy[Xj[Xt]], Xj[Xt], Xy) === Cq) {
                return;
              }
            }
          }
        }
        return Xy;
      };
      const CS = Ca;
      const Cd = [];
      Ca(["Function", "String", "Number", "Date", "RegExp"], function (Xy) {
        Cd[Xy] = function (XD) {
          return Cf.call(XD) == "[object " + Xy + "]";
        };
      });
      const CL = Cd.Date;
      const Cm = Cd.RegExp;
      const Co = Cd.Function;
      const Cc = Cd.Number;
      const CZ = Cd.String;
      const CF = Cj || function (Xy) {
        return Cf.call(Xy) == "[object Array]";
      };
      const CV = function (Xy) {
        return Cc(Xy) && Xy != Number(Xy);
      };
      const Ch = function (Xy, XD, Xp) {
        const Xt = [];
        if (Xy == null) {
          return Xt;
        } else if (CP && Xy.map === CP) {
          return Xy.map(XD, Xp);
        } else {
          Ca(Xy, function (XQ, Xj, XY) {
            Xt.push(XD.call(Xp, XQ, Xj, XY));
          });
          return Xt;
        }
      };
      const CA = Ch;
      const CI = function () {};
      const Cr = function (Xy, XD, Xp, Xt) {
        let XQ = arguments.length > 2;
        if (Xy == null) {
          Xy = [];
        }
        if (Cn && Xy.reduce === Cn) {
          if (Xt) {
            XD = CT(XD, Xt);
          }
          if (XQ) {
            return Xy.reduce(XD, Xp);
          } else {
            return Xy.reduce(XD);
          }
        }
        Ca(Xy, function (Xj, XY, Xz) {
          if (XQ) {
            Xp = XD.call(Xt, Xp, Xj, XY, Xz);
          } else {
            Xp = Xj;
            XQ = true;
          }
        });
        if (XQ) {
          return Xp;
        }
        throw new TypeError("Reduce of empty array with no initial value");
      };
      const Ck = Cr;
      const X0 = Cr;
      const X1 = function (Xy) {
        return Xy;
      };
      const X2 = function (Xy, XD, Xp) {
        XD = XD || X1;
        let Xt = false;
        if (Xy == null) {
          return Xt;
        } else if (Ct && Xy.some === Ct) {
          return Xy.some(XD, Xp);
        } else {
          Ca(Xy, function (XQ, Xj, XY) {
            if (Xt = Xt || XD.call(Xp, XQ, Xj, XY)) {
              return Cq;
            }
          });
          return Boolean(Xt);
        }
      };
      const X3 = X2;
      const X4 = function (Xy, XD, Xp) {
        let Xt;
        X2(Xy, function (XQ, Xj, XY) {
          if (XD.call(Xp, XQ, Xj, XY)) {
            Xt = XQ;
            return true;
          }
        });
        return Xt;
      };
      const X5 = X4;
      const X6 = function (Xy, XD, Xp) {
        const Xt = [];
        if (Xy == null) {
          return Xt;
        } else if (CD && Xy.filter === CD) {
          return Xy.filter(XD, Xp);
        } else {
          Ca(Xy, function (XQ, Xj, XY) {
            if (XD.call(Xp, XQ, Xj, XY)) {
              Xt.push(XQ);
            }
          });
          return Xt;
        }
      };
      const X7 = X6;
      const X8 = Ci;
      const X9 = function (Xy) {
        if (Xy == null) {
          return 0;
        } else {
          return (Xy.length === Number(Xy.length) ? Xy : Cb(Xy)).length;
        }
      };
      Cd.Function = function (Xy) {
        return typeof Xy == "function";
      };
      const XC = function (Xy) {
        return Cg(Xy) && !CV(parseFloat(Xy));
      };
      const XX = function (Xy) {
        return Xy === true || Xy === false || Cf.call(Xy) == "[object Boolean]";
      };
      const XN = function (Xy) {
        return Xy === undefined;
      };
      const Xl = function (Xy) {
        return function (XD) {
          return XD[Xy];
        };
      };
      const XO = Cv(function (Xy, XD, Xp) {
        if (CH(Xy, XD)) {
          Xy[XD].push(Xp);
        } else {
          Xy[XD] = [Xp];
        }
      });
      const XB = Cv(function (Xy, XD, Xp) {
        Xy[XD] = Xp;
      });
      const XG = function (Xy, XD, Xp, Xt) {
        var XQ = (Xp = CU(Xp)).call(Xt, XD);
        let Xj = 0;
        let XY = Xy.length;
        while (Xj < XY) {
          const Xz = Xj + XY >>> 1;
          if (Xp.call(Xt, Xy[Xz]) < XQ) {
            Xj = 1 + Xz;
          } else {
            XY = Xz;
          }
        }
        return Xj;
      };
      const Xb = function (Xy, XD, Xp) {
        if (Xy != null) {
          let XQ = 0;
          var Xt = Xy.length;
          if (Xp) {
            if (typeof Xp != "number") {
              if (Xy[XQ = XG(Xy, XD)] === XD) {
                return XQ;
              } else {
                return -1;
              }
            }
            XQ = Xp < 0 ? Math.max(0, Xt + Xp) : Xp;
          }
          if (CQ && Xy.indexOf === CQ) {
            return Xy.indexOf(XD, Xp);
          }
          for (; XQ < Xt; XQ++) {
            if (Xy[XQ] === XD) {
              return XQ;
            }
          }
        }
        return -1;
      };
      const XT = function (Xy, XD) {
        return Xy != null && (Xy.length !== Number(Xy.length) && (Xy = function (Xp) {
          var Xt = Cb(Xp);
          var XQ = Cb.length;
          var Xj = Array(XQ);
          for (let XY = 0; XY < XQ; XY++) {
            Xj[XY] = Xp[Xt[XY]];
          }
          return Xj;
        }(Xy)), Xb(Xy, XD) >= 0);
      };
      const Xi = XT;
      const Xu = function (Xy) {
        return function (XD) {
          if (XD !== Xy) {
            for (const Xp in Xy) {
              if (Xy[Xp] !== XD[Xp]) {
                return false;
              }
            }
          }
          return true;
        };
      };
      const XU = function (Xy, XD) {
        return X6(Xy, Xu(XD));
      };
      const Xv = function (Xy, XD) {
        return X4(Xy, Xu(XD));
      };
      const XK = function (Xy, ...XD) {
        const Xp = Cw.apply(CM, XD);
        return X6(Xy, function (Xt) {
          return !XT(Xp, Xt);
        });
      };
      const XE = CK(Cu, 2);
      const Xq = CK(CE, {
        partial: CK
      }, 1);
      const XM = CB.z;
      const XJ = function (Xy, XD, Xp) {
        let Xt;
        let XQ;
        let Xj;
        let XY = null;
        let Xz = 0;
        Xp = Xp || {};
        function Xg() {
          Xz = Xp.leading === false ? 0 : XM();
          XY = null;
          Xj = Xy.apply(Xt, XQ);
          Xt = XQ = null;
        }
        return function (...XH) {
          var Xx = XM();
          if (!Xz && Xp.leading === false) {
            Xz = Xx;
          }
          var Xa = XD - (Xx - Xz);
          Xt = this;
          XQ = XH;
          if (Xa <= 0) {
            clearTimeout(XY);
            XY = null;
            Xz = Xx;
            Xj = Xy.apply(Xt, XQ);
            Xt = XQ = null;
          } else if (!XY && Xp.trailing !== false) {
            XY = setTimeout(Xg, Xa);
          }
          return Xj;
        };
      };
      const XR = function (Xy) {
        var XD = {};
        var Xp = Cb(Xy);
        for (let Xt = 0, XQ = Xp.length; Xt < XQ; Xt++) {
          XD[Xy[Xp[Xt]]] = Xp[Xt];
        }
        return XD;
      };
      const Xs = function (Xy, ...XD) {
        Ca(XD, function (Xp) {
          if (Xp) {
            for (const Xt in Xp) {
              if (Xy[Xt] === undefined) {
                Xy[Xt] = Xp[Xt];
              }
            }
          }
        });
        return Xy;
      };
      const Xw = Object.assign || function (Xy, ...XD) {
        Ca(XD, function (Xp) {
          if (Xp) {
            for (const Xt in Xp) {
              if (function (XQ, Xj) {
                if (XQ == null) {
                  throw new TypeError("Cannot convert undefined or null to object");
                }
                return Object.prototype.hasOwnProperty.call(Object(XQ), Xj);
              }(Xp, Xt)) {
                Xy[Xt] = Xp[Xt];
              }
            }
          }
        });
        return Xy;
      };
      const Xf = function (Xy, ...XD) {
        const Xp = {};
        XD = [].concat(...XD);
        Ca(XD, function (Xt) {
          if (Xt in Xy) {
            Xp[Xt] = Xy[Xt];
          }
        });
        return Xp;
      };
      const XW = function (Xy) {
        return function () {
          return Xy;
        };
      };
      const XP = Xy => Cc(Xy) && !CV(Xy);
      const Xn = {
        after: function (Xy, XD) {
          return function (...Xp) {
            if (--Xy < 1) {
              return XD.apply(this, Xp);
            }
          };
        },
        all: Ci,
        any: X2,
        before: Cu,
        bind: CT,
        clone: function (Xy) {
          if (Cx(Xy)) {
            if (CF(Xy)) {
              return Xy.slice();
            } else {
              return Xw({}, Xy);
            }
          } else {
            return Xy;
          }
        },
        collect: CA,
        compact: function (Xy) {
          return X6(Xy, X1);
        },
        constant: XW,
        contains: XT,
        debounce: (Xy, XD = 100) => {
          let Xp;
          return function (...Xt) {
            clearTimeout(Xp);
            Xp = setTimeout(() => {
              Xy.apply(this, Xt);
            }, XD);
          };
        },
        defaults: Xs,
        defer: Xq,
        delay: CE,
        detect: X5,
        difference: XK,
        each: Ca,
        every: X8,
        extend: Xw,
        filter: X6,
        find: X4,
        findWhere: Xv,
        foldl: Ck,
        forEach: CS,
        groupBy: XO,
        has: CH,
        identity: X1,
        include: Xi,
        indexBy: XB,
        indexOf: Xb,
        inject: X0,
        invert: XR,
        isArray: CF,
        isBoolean: XX,
        isDate: CL,
        isFinite: XC,
        isFunction: Co,
        isNaN: CV,
        isNull: function (Xy) {
          return Xy === null;
        },
        isNumber: Cc,
        isObject: Cx,
        isRegExp: Cm,
        isString: CZ,
        isUndefined: XN,
        isValidNumber: XP,
        keys: Cb,
        last: function (Xy, XD, Xp) {
          if (Xy != null) {
            if (XD == null || Xp) {
              return Xy[Xy.length - 1];
            } else {
              return Cs.call(Xy, Math.max(Xy.length - XD, 0));
            }
          }
        },
        map: Ch,
        matches: Xu,
        max: function (Xy, XD, Xp) {
          if (!XD && CF(Xy) && Xy[0] === Number(Xy[0]) && Xy.length < 65535) {
            return Math.max(...Xy);
          }
          let Xt = -Infinity;
          let XQ = -Infinity;
          Ca(Xy, function (Xj, XY, Xz) {
            XY = XD ? XD.call(Xp, Xj, XY, Xz) : Xj;
            if (XY > XQ) {
              Xt = Xj;
              XQ = XY;
            }
          });
          return Xt;
        },
        memoize: function (Xy, XD) {
          const Xp = {};
          XD = XD || X1;
          return function (...Xt) {
            var XQ = XD.apply(this, Xt);
            if (CH(Xp, XQ)) {
              return Xp[XQ];
            } else {
              return Xp[XQ] = Xy.apply(this, Xt);
            }
          };
        },
        now: XM,
        omit: function (Xy, ...XD) {
          var Xp = {};
          for (const Xt in Xy) {
            if (!XT(XD, Xt)) {
              Xp[Xt] = Xy[Xt];
            }
          }
          return Xp;
        },
        once: XE,
        partial: CK,
        pick: Xf,
        pluck: function (Xy, XD) {
          return Ch(Xy, Xl(XD));
        },
        property: Xl,
        propertyOf: function (Xy) {
          if (Xy == null) {
            return function () {};
          } else {
            return function (XD) {
              return Xy[XD];
            };
          }
        },
        reduce: Cr,
        reject: function (Xy, XD, Xp) {
          return X6(Xy, function (Xt, XQ, Xj) {
            return !XD.call(Xp, Xt, XQ, Xj);
          }, Xp);
        },
        result: function (Xy, XD) {
          if (Xy != null) {
            XD = Xy[XD];
            if (Co(XD)) {
              return XD.call(Xy);
            } else {
              return XD;
            }
          }
        },
        select: X7,
        size: X9,
        some: X3,
        sortedIndex: XG,
        throttle: XJ,
        where: XU,
        without: function (Xy, ...XD) {
          return XK(Xy, XD);
        }
      };
    },
    5950: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        O9: () => Cu,
        _N: () => Ci,
        kd: () => CK,
        ke: () => CU,
        vl: () => CT
      });
      const Cb = /^[^:/?#]+:?\/\/[^/?#]+/;
      const CT = function (CE) {
        if (!CE) {
          return {};
        }
        var Cq;
        var CM = (CR => {
          if (CR) {
            return new URL(CR, window.location);
          }
        })(CE);
        var CJ = {};
        for (const CR of CM.searchParams.keys()) {
          if (!CJ[CR]) {
            Cq = CM.searchParams.getAll(CR);
            CJ[CR] = Cq.length === 1 ? Cq[0] : Cq;
          }
        }
        return CJ;
      };
      const Ci = function (CE) {
        if (!CE || (CE = new URLSearchParams(CE).get("jw_start") || -1, isNaN(CE)) || CE < -1) {
          return -1;
        } else {
          return Number(CE);
        }
      };
      const Cu = function (CE, Cq = "{seek_to_second_number}") {
        if (CE) {
          CE = new URL(CE);
          CE.searchParams.set("jw_start", "");
          let CM = CE.toString();
          return CM = CM.replace(/jw_start=?/i, "jw_start=" + Cq);
        }
      };
      const CU = (CE, Cq) => {
        if (CE) {
          return new URLSearchParams(CE).has(Cq);
        }
      };
      const Cv = CE => !!CE && CE.match(Cb) !== null;
      const CK = (CE, Cq) => {
        Cq = Cq || document.location.href;
        if (CE && Cv(Cq)) {
          if (Cv(CE)) {
            return CE;
          } else {
            return new URL(CE, Cq).toString();
          }
        } else {
          return "";
        }
      };
    },
    7034: (CO, CB, CG) => {
      'use strict';

      CG.r(CB);
      CG.d(CB, {
        exists: () => CT,
        isDeepKeyCompliant: () => CE,
        isFileProtocol: () => Cu,
        isHTTPS: () => Ci,
        isRtmp: () => CU,
        isYouTube: () => Cv,
        typeOf: () => CK
      });
      const Cb = window.location.protocol;
      const CT = Cq => {
        switch (typeof Cq) {
          case "string":
            return Cq.length > 0;
          case "object":
            return Cq !== null;
          case "undefined":
            return false;
          default:
            return true;
        }
      };
      const Ci = () => Cb === "https:";
      const Cu = () => Cb === "file:";
      const CU = (Cq, CM) => Cq.indexOf("rtmp:") === 0 || CM === "rtmp";
      const Cv = (Cq, CM) => CM === "youtube" || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(Cq);
      const CK = Cq => {
        var CM;
        if (Cq === null) {
          return "null";
        } else if ((CM = typeof Cq) == "object" && Array.isArray(Cq)) {
          return "array";
        } else {
          return CM;
        }
      };
      const CE = (Cq, CM, CJ) => {
        var CR = Object.keys(Cq);
        return Object.keys(CM).length >= CR.length && CR.every(Cs => {
          var Cw = Cq[Cs];
          var Cf = CM[Cs];
          if (Cw && typeof Cw == "object") {
            return !!Cf && typeof Cf == "object" && CE(Cw, Cf, CJ);
          } else {
            return CJ(Cs, Cq);
          }
        });
      };
    },
    9025: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => Cb
      });
      const Cb = document.createElement("video");
    },
    6601: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        i: () => Cb
      });
      const Cb = "8.33.2+commercial_master.561.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.7.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.3.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
    },
    4225: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => function (Cu, CU) {
          var {
            message: CU,
            code: Cv
          } = CU;
          var CU = Cb(Cu.get("id"), CU, Cu.get("localization").errors.errorCode, Cv.toString());
          var Cv = Cu.get("width");
          var Cu = Cu.get("height");
          var CU = (0, CT.az)(CU);
          (0, Ci.oB)(CU, {
            width: Cv.toString().indexOf("%") > 0 ? Cv : Cv + "px",
            height: Cu.toString().indexOf("%") > 0 ? Cu : Cu + "px"
          });
          return CU;
        }
      });
      const Cb = (Cu, CU, Cv, CK) => "<div id=\"" + Cu + "\" class=\"jw-error jw-reset\"><div class=\"jw-error-msg jw-info-overlay jw-reset\"><style>[id=\"" + Cu + "\"].jw-error{background:#000;overflow:hidden;position:relative}[id=\"" + Cu + "\"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id=\"" + Cu + "\"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class=\"jw-icon jw-reset\"></div><div class=\"jw-info-container jw-reset\"><div class=\"jw-error-text jw-reset-text\" dir=\"auto\" data-nosnippet>" + (CU || "") + "<span class=\"jw-break jw-reset\"></span>" + (CK ? ("(" + Cv + ": " + CK + ")").replace(/\s+/g, "&nbsp;") : "") + "</div></div></div></div>";
      var CT = CG(2799);
      var Ci = CG(974);
    },
    9926: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CK
      });
      var Cb = CG(1776);
      var CT = CG(2799);
      var Ci = CG(974);
      const Cu = [];
      let CU = -1;
      const Cv = () => {
        (0, Cb.W)(CU);
        CU = (0, Cb.U)(() => {
          Cu.forEach(CE => {
            CE.view.updateBounds();
            var Cq = CE.view.model.get("containerWidth");
            CE.resized = CE.width !== Cq;
            CE.width = Cq;
          });
          Cu.forEach(CE => {
            CE.contractElement.scrollLeft = CE.width * 2;
          });
          Cu.forEach(CE => {
            (0, Ci.oB)(CE.expandChild, {
              width: CE.width + 1
            });
            if (CE.resized && CE.view.model.get("visibility")) {
              CE.view.updateStyles();
            }
          });
          Cu.forEach(CE => {
            CE.expandElement.scrollLeft = CE.width + 1;
          });
          Cu.forEach(CE => {
            if (CE.resized) {
              CE.view.checkResized();
            }
          });
        });
      };
      class CK {
        constructor(CE, Cq, CM) {
          var CJ = {
            display: "block",
            position: "absolute",
            top: 0,
            left: 0
          };
          var CR = {
            width: "100%",
            height: "100%"
          };
          var Cs = (0, CT.az)("<div style=\"opacity:0;visibility:hidden;overflow:hidden;\"><div><div style=\"height:1px;\"></div></div><div class=\"jw-contract-trigger\"></div></div>");
          var Cw = Cs.firstChild;
          var Cf = Cw.firstChild;
          var CW = Cw.nextSibling;
          (0, Ci.oB)([Cw, CW], Object.assign({
            overflow: "auto"
          }, CJ, CR));
          (0, Ci.oB)(Cs, Object.assign({}, CJ, CR));
          this.expandElement = Cw;
          this.expandChild = Cf;
          this.contractElement = CW;
          this.hiddenElement = Cs;
          this.element = CE;
          this.view = Cq;
          this.model = CM;
          this.width = 0;
          this.resized = false;
          if (CE.firstChild) {
            CE.insertBefore(Cs, CE.firstChild);
          } else {
            CE.appendChild(Cs);
          }
          CE.addEventListener("scroll", Cv, true);
          Cu.push(this);
          Cv();
        }
        destroy() {
          var CE;
          if (this.view) {
            if ((CE = Cu.indexOf(this)) !== -1) {
              Cu.splice(CE, 1);
            }
            this.element.removeEventListener("scroll", Cv, true);
            this.element.removeChild(this.hiddenElement);
            this.view = this.model = null;
          }
        }
      }
    },
    4671: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CR
      });
      var Cb = CG(6875);
      const CT = [];
      const Ci = [];
      const Cu = [];
      const CU = {};
      let Cv;
      let CK = false;
      const CE = (Cs, Cw) => {
        for (let CW = Cw.length; CW--;) {
          var Cf = Cw[CW];
          if (Cs.target === Cf.getContainer()) {
            Cf.setIntersection(Cs);
            break;
          }
        }
      };
      const Cq = () => {
        CT.forEach(Cs => {
          Cs.model.set("activeTab", (0, Cb.Z)());
        });
      };
      const CM = (Cs, Cw) => {
        Cs = Cw.indexOf(Cs);
        if (Cs !== -1) {
          Cw.splice(Cs, 1);
        }
      };
      const CJ = Cs => {
        Cu.forEach(Cw => {
          Cw(Cs);
        });
      };
      document.addEventListener("visibilitychange", Cq);
      document.addEventListener("webkitvisibilitychange", Cq);
      const CR = {
        add(Cs) {
          CT.push(Cs);
        },
        remove(Cs) {
          CM(Cs, CT);
          document.removeEventListener("visibilitychange", Cq);
          document.removeEventListener("webkitvisibilitychange", Cq);
          window.removeEventListener("scroll", CJ);
        },
        addScrollHandler(Cs) {
          if (!CK) {
            CK = true;
            window.addEventListener("scroll", CJ);
          }
          Cu.push(Cs);
        },
        removeScrollHandler(Cs) {
          Cs = Cu.indexOf(Cs);
          if (Cs !== -1) {
            Cu.splice(Cs, 1);
          }
        },
        addWidget(Cs) {
          Ci.push(Cs);
        },
        removeWidget(Cs) {
          CM(Cs, Ci);
        },
        size: () => CT.length,
        observe(Cs) {
          var Cw;
          Cw = window.IntersectionObserver;
          Cv = Cv || new Cw(Cf => {
            if (Cf != null && Cf.length) {
              for (let CP = Cf.length; CP--;) {
                var CW = Cf[CP];
                CE(CW, CT);
                CE(CW, Ci);
              }
            }
          }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
          });
          if (!CU[Cs.id]) {
            CU[Cs.id] = true;
            Cv.observe(Cs);
          }
        },
        unobserve(Cs) {
          if (Cv && CU[Cs.id]) {
            delete CU[Cs.id];
            Cv.unobserve(Cs);
          }
        }
      };
    },
    2445: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        ZP: () => CP,
        qG: () => CW
      });
      var Cb = CG(5083);
      var CT = CG(1569);
      var Ci = CG(6042);
      var Cu = CG(7034);
      var CU = CG(6577);
      var Cv = CG(6599);
      var CK = CG(386);
      const CE = "__CONTEXTUAL__";
      const Cq = (Cn, Cy) => {
        Cn = Cn.querySelector(Cy);
        if (Cn) {
          return Cn.getAttribute("content");
        }
      };
      var CB = CG(4737);
      var CM = CG.n(CB);
      var CJ = CG(67);
      var CR = CG(3487);
      const Cs = Cn => typeof Cn == "string" && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(Cn);
      const Cw = Cn => "https:" + Cn;
      const Cf = (Cn, Cy, CD) => {
        if (Cy) {
          delete (Cn[Cy.client || (0, CR.sb)(CD)] = Cy).client;
        }
      };
      const CW = Cn => {
        const Cy = Object.assign({}, Cn.plugins);
        const CD = (0, CK.Z)(Cn.edition);
        if (CD("ads")) {
          const Cp = Object.assign({}, Cn.advertising);
          const Ct = Cp.client;
          if (Ct) {
            delete (Cy[(0, CR.sb)(Ct) || Ct] = Cp).client;
          }
          if (Cp.bids) {
            Cf(Cy, Cp.bids, "bidding");
          }
        }
        if (CD("jwpsrv")) {
          let CQ = Cn.analytics;
          if (CQ !== Object(CQ)) {
            CQ = {};
          }
          Cf(Cy, CQ, "jwpsrv");
        }
        Cf(Cy, Cn.ga, "gapro");
        Cf(Cy, Cn.interactive, "interactive");
        Cf(Cy, Cn.keepWatching, "keepWatching");
        return Cy;
      };
      const CP = function (Cn, Cy) {
        let CD = (0, Cb.ZP)(Cn, Cy);
        var Cn = CD.key || CU.default.key;
        var Cy = new Cv.ZP(Cn);
        var Cp = Cy.edition();
        (CD = Cy.edition() === "free" ? Object.assign({
          skin: {
            active: "#ff0046",
            timeslider: {
              progress: "none"
            }
          },
          logo: {
            position: "control-bar",
            file: CM()
          }
        }, Cb.ke, (0, Ci.ei)(CD, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "timeSlider", "width"])) : CD).key = Cn;
        CD.edition = Cp;
        CD.error = Cy.error();
        CD.generateSEOMetadata = CD.generateSEOMetadata || false;
        if (Cp === "unlimited") {
          const Ct = (0, CT.getScriptPath)("jwplayer.js");
          if (!Ct) {
            throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
          }
          CG.p = Ct;
        }
        CD.related = (CQ => {
          var Cj = (0, CK.Z)(CQ.edition);
          var CY = CQ.related;
          var Cj = !Cj("discovery") || CY !== Object(CY);
          var Cz = !CY || CY.displayMode !== "none";
          var Cg = CY || {};
          let CH = Cg.oncomplete === undefined ? "none" : Cg.oncomplete;
          let Cx = Cg.autoplaytimer;
          if (CH === false || CQ.repeat) {
            CH = "hide";
          } else if (CH === "none") {
            Cx = 0;
          }
          Cg = CH === "autoplay" && Cx <= 0 || CH === "none";
          return Object.assign({}, CY, {
            disableRelated: Cj,
            showButton: Cz,
            oncomplete: CH,
            autoplaytimer: Cx,
            shouldAutoAdvance: Cg
          });
        })(CD);
        CD.ab &&= (CQ => {
          let Cj = CQ.ab;
          if (Cj.clone) {
            Cj = Cj.clone();
          }
          Object.keys(Cj.tests).forEach(CY => {
            Cj.tests[CY].forEach(Cz => {
              if (Cz.addConfig) {
                Cz.addConfig(CQ, Cz.selection);
              }
            });
          });
          return Cj;
        })(CD);
        CD.plugins = CW(CD);
        Cn = CD.playlist;
        if ((0, Ci.HD)(Cn) && Cn.indexOf(CE) > -1) {
          CD.playlist = ((CQ, Cj) => {
            var CY = CQ == null || CQ.querySelector == null || (CY = CQ.querySelector("title")) == null ? undefined : CY.textContent;
            var Cz = Cq(CQ, "meta[property=\"og:title\"]");
            let Cg = encodeURIComponent(Cz || CY || "");
            Cz = Cq(CQ, "meta[property=\"og:description\"]") || Cq(CQ, "meta[name=\"description\"]");
            if (Cz) {
              Cg += "&page_description=" + encodeURIComponent(Cz);
            }
            return Cj.replace(CE, Cg);
          })(document, CD.playlist);
          CD.contextual = true;
        }
        if ((0, Cu.isFileProtocol)()) {
          const {
            playlist: CQ,
            related: Cj
          } = CD;
          if (Cs(CQ)) {
            CD.playlist = Cw(CQ);
          }
          if (Cj && Cs(Cj.file)) {
            Cj.file = Cw(Cj.file);
          }
        }
        if (CD.__abSendDomainToFeeds && (Cy = CD.playlist, /\.jwplatform.com|\.jwplayer.com/.test(Cy))) {
          CD.playlist = (Cp = CD.playlist) + ((Cp.indexOf("?") !== -1 ? "&" : "?") + "page_domain=" + encodeURIComponent((0, CJ.X)()));
        }
        return CD;
      };
    },
    6577: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        default: () => Ck
      });
      var CB = CG(1096);
      var CB = CG.n(CB);
      window.Promise ||= CB();
      var CB = CG(1569);
      var Cb = CG(6391);
      var CT = CG(2963);
      var Ci = CG(670);
      var CT = {
        availableProviders: CT.B,
        registerProvider: Ci.Z
      };
      var Cu = CG(1241);
      CT.registerPlugin = function (X0, X1, X2) {
        if (X0 !== "jwpsrv") {
          (0, Cu.fo)(X0, X1, X2);
        }
      };
      const CU = CT;
      var Cv = CG(8675);
      var CK = CG(6601);
      var CE = CG(4742);
      var Cq = CG(8348);
      var CM = CG(623);
      var CJ = CG(1643);
      var CR = CG(7411);
      var Cs = CG(328);
      var Cw = CG(3487);
      const Cf = [["vastxml", "adtag", "schedules"]];
      const CW = {
        googima: Cf,
        vast: Cf
      };
      const CP = (X0, X1) => {
        var X2 = X0.getPlugin(X1);
        var X3 = Object.keys(CW);
        if (X3.indexOf(X1) === -1) {
          throw new Error("destroyDynamicPlugin must be called with plugins with one of the following plugins: " + X3.toString());
        }
        if (X2) {
          if (X2.resize) {
            X0.off("resize", X2.resizeHandler);
          }
          delete X0.plugins[X1];
          if (X2.destroy) {
            try {
              X2.destroy();
            } catch (X4) {}
          }
          X3 = X2.div;
          if (X3 != null && X3.parentElement) {
            X3.parentElement.removeChild(X3);
          }
          X0.trigger("pluginDestroyed", {
            type: "pluginDestroyed",
            name: X1
          });
        }
      };
      const Cn = (X0, X1, X2, X3) => {
        var X4 = (0, Cw.Nq)(X1);
        var X5 = Object.keys(CW);
        var X3 = (X3 = X3)[X6 = X1] || X3[(0, Cw.sb)(X6)] || X3[(0, Cw.Nq)(X6)] || {};
        if (X5.indexOf(X4) === -1) {
          throw new Error("setupDynamicPlugin must be called with plugins with one of the following plugins: " + X5.toString());
        }
        CP(X0, X4);
        var X6 = ((X7, X8, X9) => {
          const XC = Object.assign({}, X7);
          const XX = Object.assign({}, X8);
          const XN = Object.keys(XX).filter(Xl => Xl === null);
          XN.forEach(Xl => delete XC[Xl]);
          XN.forEach(Xl => delete XX[Xl]);
          X9.forEach(Xl => {
            if (Xl.some(XO => XX[XO])) {
              Xl.forEach(XO => delete XC[XO]);
            }
          });
          return Object.assign({}, XC, XX);
        })(X3, X2, CW[X4]);
        return (0, Cv.Ve)(X1, X6, X0);
      };
      var Cy = CG(4429);
      var CD = CG(6042);
      let Cp = 0;
      function Ct(X0, X1) {
        (X1 = new CM.ZP(X1)).on(CJ.Rc, X2 => {
          X0._qoe.tick("ready");
          X2.setupTime = X0._qoe.between("setup", "ready");
        });
        X1.on("all", (X2, X3) => {
          X0.trigger(X2, X3);
        });
        return X1;
      }
      function CQ(X0, X1) {
        const X2 = X0.plugins;
        const X3 = Object.keys(X2).map(X4 => {
          var X5 = X2[X4];
          delete X2[X4];
          return X5;
        });
        if (X1.get("setupConfig")) {
          X0.trigger("remove");
        }
        X0.off();
        X1.playerDestroy();
        X3.forEach(X4 => {
          if (X4.reset) {
            try {
              X4.reset();
            } catch (X5) {}
          } else if (X4.destroy) {
            try {
              X4.destroy();
            } catch (X6) {}
          }
        });
        X1.getContainer().removeAttribute("data-jwplayer-id");
      }
      function Cj(X0) {
        const X1 = ++Cp;
        const X2 = X0.id || "player-" + X1;
        const X3 = new CR.Z();
        const X4 = {};
        let X5 = Ct(this, X0);
        X3.tick("init");
        X0.setAttribute("data-jwplayer-id", X2);
        Object.defineProperties(this, {
          id: {
            enumerable: true,
            get: () => X2
          },
          uniqueId: {
            enumerable: true,
            get: () => X1
          },
          plugins: {
            enumerable: true,
            get: () => X4
          },
          _qoe: {
            enumerable: true,
            get: () => X3
          },
          version: {
            enumerable: true,
            get: () => CK.i
          },
          Events: {
            enumerable: true,
            get: () => Cs.ZP
          },
          utils: {
            enumerable: true,
            get: () => Cy.Z
          },
          _: {
            enumerable: true,
            get: () => CD.ZP
          }
        });
        Object.assign(this, {
          _events: {},
          setup(X6) {
            X3.clear("ready");
            X3.tick("setup");
            if (X5) {
              CQ(this, X5);
            }
            (X5 = Ct(this, X0)).init(X6, this);
            return this.on(X6.events, null, this);
          },
          remove() {
            if (this.getPip()) {
              this.setPip(false);
            }
            var X6 = this;
            for (let X7 = Cb.Z.length; X7--;) {
              if (Cb.Z[X7].uniqueId === X6.uniqueId) {
                Cb.Z.splice(X7, 1);
                break;
              }
            }
            if (X5) {
              CQ(this, X5);
            }
            Object.keys(X4).forEach(X8 => {
              delete X4[X8];
            });
            return this;
          },
          qoe() {
            var X6 = X5.getItemQoe();
            return {
              setupTime: this._qoe.between("setup", "ready"),
              firstFrame: X6.getFirstFrame ? X6.getFirstFrame() : null,
              player: this._qoe.dump(),
              item: X6.dump()
            };
          },
          addCues(X6) {
            if (Array.isArray(X6)) {
              X5.addCues(X6);
            }
            return this;
          },
          getAudioTracks: () => X5.getAudioTracks(),
          getBuffer: () => X5.get("buffer"),
          getCaptions: () => X5.get("captions"),
          getCaptionsList: () => X5.getCaptionsList(),
          getConfig: () => X5.getConfig(),
          getContainer: () => X5.getContainer(),
          getControls: () => X5.get("controls"),
          getCues: () => X5.getCues(),
          getCurrentAudioTrack: () => X5.getCurrentAudioTrack(),
          getCurrentCaptions: () => X5.getCurrentCaptions(),
          getCurrentQuality: () => X5.getCurrentQuality(),
          getCurrentTime: () => X5.get("currentTime"),
          getAbsolutePosition: () => X5.getAbsolutePosition(),
          getDuration: () => X5.get("duration"),
          getEnvironment: () => Cq,
          getFullscreen: () => X5.get("fullscreen"),
          getHeight: () => X5.getHeight(),
          getItemMeta: () => X5.get("itemMeta") || {},
          getMute: () => X5.getMute(),
          getContainerPercentViewable: () => X5.get("intersectionRatio"),
          getPercentViewable: () => X5.get("visibility"),
          getPip: () => X5.get("pip"),
          getPlaybackRate: () => X5.get("playbackRate"),
          getPlaylist: () => X5.get("playlist"),
          getPlaylistIndex: () => X5.get("item"),
          getPlaylistItem(X6) {
            var X7;
            if (Cy.Z.exists(X6)) {
              if (X7 = this.getPlaylist()) {
                return X7[X6];
              } else {
                return null;
              }
            } else {
              return X5.get("playlistItem");
            }
          },
          getPosition: () => X5.get("position"),
          getProvider: () => X5.getProvider(),
          getQualityLevels: () => X5.getQualityLevels(),
          getSafeRegion: (X6 = true) => X5.getSafeRegion(X6),
          getState: () => X5.getState(),
          getStretching: () => X5.get("stretching"),
          getContainerViewable: () => X5.get("containerViewable"),
          getViewable: () => X5.get("viewable"),
          getVisualQuality: () => X5.getVisualQuality(),
          getVolume: () => X5.get("volume"),
          getWidth: () => X5.getWidth(),
          isReady: () => X5.isReady(),
          setCaptions(X6) {
            X5.setCaptions(X6);
            return this;
          },
          setConfig(X6) {
            X5.setConfig(X6);
            return this;
          },
          setControls(X6) {
            X5.setControls(X6);
            return this;
          },
          setCurrentAudioTrack(X6) {
            X5.setCurrentAudioTrack(X6);
          },
          setCurrentCaptions(X6) {
            X5.setCurrentCaptions(X6);
          },
          setCurrentQuality(X6) {
            X5.setCurrentQuality(X6);
          },
          setFullscreen(X6) {
            X5.setFullscreen(X6);
            return this;
          },
          setAllowFullscreen(X6) {
            X5.setAllowFullscreen(X6);
            return this;
          },
          setMute(X6) {
            X5.setMute(X6);
            return this;
          },
          setPip(X6) {
            X5.setPip(X6);
            return this;
          },
          setPlaybackRate(X6) {
            X5.setPlaybackRate(X6);
            return this;
          },
          setPlaylistItem(X6, X7) {
            X5.setPlaylistItem(X6, X7);
            return this;
          },
          setCues(X6) {
            if (Array.isArray(X6)) {
              X5.setCues(X6);
            }
            return this;
          },
          setVolume(X6) {
            X5.setVolume(X6);
            return this;
          },
          load(X6, X7) {
            X5.load(X6, X7);
            return this;
          },
          play(X6) {
            X5.play(X6);
            return this;
          },
          pause(X6) {
            X5.pause(X6);
            return this;
          },
          playToggle(X6) {
            switch (this.getState()) {
              case CJ.r0:
              case CJ.Kb:
                return this.pause(X6);
              default:
                return this.play(X6);
            }
          },
          seek(X6, X7) {
            X5.seek(X6, X7);
            return this;
          },
          playlistItem(X6, X7) {
            X5.playlistItem(X6, X7);
            return this;
          },
          playlistNext(X6) {
            X5.playlistNext(X6);
            return this;
          },
          playlistPrev(X6) {
            X5.playlistPrev(X6);
            return this;
          },
          next(X6) {
            X5.next(X6);
            return this;
          },
          requestPip(X6) {
            X5.requestPip(X6);
            return this;
          },
          castToggle() {
            X5.castToggle();
            return this;
          },
          stopCasting() {
            X5.stopCasting();
            return this;
          },
          requestCast(X6) {
            X5.requestCast(X6);
            return this;
          },
          createInstream: () => X5.createInstream(),
          stop() {
            X5.stop();
            return this;
          },
          resize(X6, X7) {
            X5.resize(X6, X7);
            return this;
          },
          addButton(X6, X7, X8, X9, XC) {
            X5.addButton(X6, X7, X8, X9, XC);
            return this;
          },
          removeButton(X6) {
            X5.removeButton(X6);
            return this;
          },
          getMediaElement: () => X5.getMediaElement(),
          attachMedia() {
            X5.attachMedia();
            return this;
          },
          detachMedia() {
            X5.detachMedia();
            return this;
          },
          isBeforeComplete: () => X5.isBeforeComplete(),
          isBeforePlay: () => X5.isBeforePlay(),
          setPlaylistItemCallback(X6, X7) {
            X5.setItemCallback(X6, X7);
          },
          removePlaylistItemCallback() {
            X5.setItemCallback(null);
          },
          getPlaylistItemPromise: X6 => X5.getItemPromise(X6),
          getFloating: () => Boolean(X5.get("isFloating")),
          setFloating(X6) {
            X5.setConfig({
              floating: {
                mode: X6 ? "always" : "never"
              }
            });
          },
          getChapters: () => X5.getChapters(),
          getCurrentChapter: () => X5.getCurrentChapter(),
          setChapter: X6 => X5.setChapter(X6),
          setupDynamicPlugin(X6, X7) {
            if (X6) {
              return Cn(this, X6, X7, X5.get("plugins"));
            } else {
              return Promise.resolve();
            }
          },
          destroyDynamicPlugin(X6) {
            if (X6) {
              return CP(this, X6);
            }
          }
        });
      }
      Object.assign(Cj.prototype, {
        on(X0, X1, X2) {
          return Cs.on.call(this, X0, X1, X2);
        },
        once(X0, X1, X2) {
          return Cs.IH.call(this, X0, X1, X2);
        },
        off(X0, X1, X2) {
          return Cs.S1.call(this, X0, X1, X2);
        },
        trigger(X0, X1) {
          (X1 = CD.ZP.isObject(X1) ? Object.assign({}, X1) : {}).type = X0;
          return (CE.Z.debug ? Cs.X$ : Cs.wj).call(this, X0, X1);
        },
        getPlugin(X0) {
          return this.plugins[X0];
        },
        addPlugin(X0, X1) {
          if (typeof (this.plugins[X0] = X1).addToPlayer == "function") {
            if (this.isReady()) {
              X1.addToPlayer.call(this, true);
            } else {
              this.on("ready", function () {
                X1.addToPlayer.call(this, false);
              });
            }
          }
          if (X1.resize) {
            this.on("resize", X1.resizeHandler);
          }
        },
        registerPlugin(X0, X1, X2) {
          (0, Cv.fo)(X0, X1, X2);
        },
        getAdBlock: () => false,
        playAd(X0) {},
        pauseAd(X0) {},
        skipAd() {}
      });
      CG.p = (0, CB.loadFrom)();
      function CY(X0) {
        let X1;
        let X2;
        if (X0) {
          if (typeof X0 == "string") {
            if (!(X1 = Cz(X0))) {
              X2 = document.getElementById(X0);
            }
          } else if (typeof X0 == "number") {
            X1 = Cb.Z[X0];
          } else if (X0.nodeType) {
            X2 = X0;
            X1 = Cz(X2.id || X2.getAttribute("data-jwplayer-id"));
          }
        } else {
          X1 = Cb.Z[0];
        }
        if (X1) {
          return X1;
        }
        if (X2) {
          const X3 = new Cj(X2);
          Cb.Z.push(X3);
          return X3;
        }
        return {
          registerPlugin: Cv.fo
        };
      }
      const Cz = X0 => {
        for (let X1 = 0; X1 < Cb.Z.length; X1++) {
          if (Cb.Z[X1].id === X0) {
            return Cb.Z[X1];
          }
        }
        return null;
      };
      const Cg = X0 => {
        Object.defineProperties(X0, {
          api: {
            get: () => CU,
            set() {}
          },
          version: {
            get: () => CK.i,
            set() {}
          },
          debug: {
            get: () => CE.Z.debug,
            set(X1) {
              CE.Z.debug = Boolean(X1);
            }
          }
        });
      };
      Cg(CY);
      const CH = CY;
      var Ci = CG(5882);
      var CT = CG(6599);
      var CB = CG(676);
      var Cx = CG(5592);
      var Ca = CG(6769);
      var Ce = CG(9025);
      var CS = CD.ZP.extend;
      var Cd = {
        _: CD.ZP
      };
      Cd.utils = Object.assign(Cy.Z, {
        key: CT.ZP,
        extend: CS,
        scriptloader: CB.ZP,
        rssparser: {
          parse: Ca.Z
        },
        tea: Cx.p,
        UI: Ci.ZP
      });
      Cd.utils.css.style = Cd.utils.style;
      Cd.vid = Ce.Z;
      var CT = Cd;
      var CL = CG(7543);
      function Cm(X0) {
        var X1 = {};
        CA(this, X0, X0, X1);
        CA(this, X0, Cj.prototype, X1);
      }
      function Co(X0) {
        if ((X0 = CH(X0)).uniqueId) {
          return X0._publicApi ||= new Cm(X0);
        } else {
          return X0;
        }
      }
      const Cc = /^(?:on(?:ce)?|off|trigger)$/;
      const CZ = X0 => {
        console.warn("The API method jwplayer()." + X0 + "() is disabled in the free edition of JW Player.");
      };
      const CF = (X0, X1) => {
        if (X1.length) {
          const X2 = X0.getPlugin("jwpsrv");
          if (X2 != null && X2.trackExternalAPIUsage) {
            X1.forEach(X3 => {
              var X4 = X2;
              var X5 = X3[0];
              var X3 = X3[1];
              try {
                var X6 = (X7 => {
                  switch (X5) {
                    case "setup":
                      return Boolean(X7);
                    case "getSafeRegion":
                    case "pauseAd":
                    case "setControls":
                    case "setFullscreen":
                    case "setMute":
                      if (Boolean(X7) === X7) {
                        return X7;
                      } else {
                        return undefined;
                      }
                    case "setPlaylistItem":
                    case "getPlaylistItem":
                      if ((X7 | 0) === X7) {
                        return X7;
                      } else {
                        return undefined;
                      }
                    case "setPlaybackRate":
                    case "setVolume":
                      return Number(X7);
                    case "setConfig":
                      return Object.keys(Object(X7)).join(",");
                    case "on":
                    case "once":
                    case "off":
                    case "trigger":
                    case "getPlugin":
                    case "addPlugin":
                    case "registerPlugin":
                      return "" + X7;
                  }
                  return null;
                })(X3);
                X4.trackExternalAPIUsage(X5, X6);
              } catch (X7) {
                if (CE.Z.debug) {
                  console.warn(X7);
                }
              }
            });
            X1.length = 0;
          }
        }
      };
      const CV = (X0, X1, X2, X3, X4) => function (...X5) {
        const X6 = X5[0];
        const X7 = X1._trackCallQueue ||= [];
        const X8 = Cc.test(X2);
        const X9 = X8 && X5[1] && X5[1]._callback;
        const XC = X4.edition || (XX = X4, XO = X1.getConfig().edition, XX.edition = XO);
        if (XC === "free") {
          if (["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"].indexOf(X2) > -1) {
            CZ(X2);
            return X0;
          }
          if (["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"].indexOf(X2) > -1) {
            CZ(X2);
            return null;
          }
        }
        if (!X9) {
          X7.push([X2, X6]);
        }
        if (X8) {
          CF(X1, X7);
          return X1[X2].apply(X0, X5);
        }
        var XX = X2;
        var XN = X5;
        var Xl = {
          reason: XX !== "play" && XX !== "seek" && XX !== "pause" && (0, CL.C)() ? "interaction" : "external"
        };
        switch (XX) {
          case "play":
          case "pause":
          case "playToggle":
          case "playlistNext":
          case "playlistPrev":
          case "next":
            XN[0] = Xl;
            break;
          case "seek":
          case "playlistItem":
            XN[1] = Xl;
        }
        var XO = X1[X2](...X5);
        if (X2 === "remove") {
          X1.off.call(X0);
        } else if (X2 === "setup") {
          X1.off.call(X0);
          X1.off(X6.events, null, X1);
          X1.on.call(X0, X6.events, null, X0);
          X1.on("all", (XB, XG) => {
            if (XB === "ready") {
              const Xb = Object.keys(X1).filter(Xi => Xi[0] !== "_" && X3.indexOf(Xi) === -1 && typeof X1[Xi] == "function");
              const XT = X3.concat(Xb);
              Xb.forEach(Xi => {
                X0[Xi] = CV(X0, X1, Xi, XT, X4);
              });
            }
            X1.trigger.call(X0, XB, XG);
            CF(X1, X7);
          });
        }
        CF(X1, X7);
        if (XO === X1) {
          return X0;
        } else {
          return XO;
        }
      };
      const Ch = ["getMediaElement"];
      const CA = (X0, X1, X2, X3) => {
        const X4 = Object.keys(X2);
        X4.forEach(X5 => {
          var X6 = X2[X5];
          if (Ch.indexOf(X5) === -1) {
            if (typeof X6 == "function" && X5 !== "Events") {
              X0[X5] = CV(X0, X1, X5, X4, X3);
            } else if (X5 === "_events") {
              X0._events = {};
            } else {
              Object.defineProperty(X0, X5, {
                enumerable: true,
                get: () => X2[X5]
              });
            }
          }
        });
      };
      const CI = window;
      Object.assign(CH, CT);
      Object.assign(Co, CT);
      Cg(Co);
      if (typeof CI.define == "function" && CI.define.amd) {
        CI.define([], function () {
          return Co;
        });
      }
      let Cr = Co;
      const Ck = Cr = CI.jwplayer ? CI.jwplayer : Cr;
    },
    8675: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Ve: () => Cb.Ve,
        ZP: () => CT,
        fo: () => Cb.fo
      });
      CG(3487);
      var Cb = CG(1241);
      const CT = Cb.ZP;
    },
    3487: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        MK: () => Cb.MK,
        Nq: () => Cb.Nq,
        bX: () => CT,
        sb: () => Ci
      });
      CG(1569);
      var Cb = CG(7164);
      const CT = function (Cu) {
        let CU = (0, Cb.bX)(Cu);
        if (Cu) {
          switch ((0, Cb.Nq)(Cu)) {
            case "jwpsrv":
              CU = 305001;
              break;
            case "googima":
              CU = 305002;
              break;
            case "vast":
              CU = 305003;
              break;
            case "freewheel":
              CU = 305004;
              break;
            case "dai":
              CU = 305005;
              break;
            case "gapro":
              CU = 305006;
              break;
            case "bidding":
              CU = 305007;
          }
        }
        return CU;
      };
      const Ci = Cu => {
        let CU = "";
        if (window.location.protocol !== "https:" && window.location.protocol !== "http:") {
          CU = "https:";
        }
        Cu = {
          bidding: "//ssl.p.jwpcdn.com/player/v/8.33.2/bidding.js",
          jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.33.2/jwpsrv.js",
          dai: "//ssl.p.jwpcdn.com/player/v/8.33.2/dai.js",
          vast: "//ssl.p.jwpcdn.com/player/v/8.33.2/vast.js",
          googima: "//ssl.p.jwpcdn.com/player/v/8.33.2/googima.js",
          freewheel: "//ssl.p.jwpcdn.com/player/v/8.33.2/freewheel.js",
          gapro: "//ssl.p.jwpcdn.com/player/v/8.33.2/gapro.js",
          interactive: "//ssl.p.jwpcdn.com/player/v/8.33.2/interactive.js",
          keepWatching: "//ssl.p.jwpcdn.com/player/v/8.33.2/keepWatching.js"
        }[Cu];
        if (Cu) {
          return CU + Cu;
        } else {
          return "";
        }
      };
    },
    1918: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Gb: () => CE,
        d3: () => Cq,
        lD: () => CK,
        w0: () => Cv
      });
      var Cb = CG(386);
      const CT = [{
        configName: "clearkey",
        keyName: "org.w3.clearkey"
      }, {
        configName: "widevine",
        keyName: "com.widevine.alpha"
      }, {
        configName: "playready",
        keyName: "com.microsoft.playready"
      }];
      const Ci = [];
      const Cu = {};
      let CU;
      const Cv = CM => CM.some(CJ => Boolean(CJ.drm) || CJ.sources.some(CR => Boolean(CR.drm)));
      const CK = CM => CU || ((Boolean(navigator.requestMediaKeySystemAccess) && Boolean(window.MediaKeySystemAccess.prototype.getConfiguration) || Boolean(window.MSMediaKeys)) && (0, Cb.Z)(CM)("drm") ? (CT.forEach(CJ => {
        CR = CJ.keyName;
        var CR;
        var Cs = (navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(CR, [{
          initDataTypes: ["cenc"],
          videoCapabilities: [{
            contentType: "video/mp4;codecs=\"avc1.4d401e\""
          }],
          audioCapabilities: [{
            contentType: "audio/mp4;codecs=\"mp4a.40.2\""
          }]
        }]) : new Promise((Cw, Cf) => {
          let CW;
          try {
            CW = new window.MSMediaKeys(CR);
          } catch (CP) {
            Cf(CP);
            return;
          }
          Cw(CW);
        })).then(function () {
          Cu[CJ.configName] = true;
        }).catch(function () {
          Cu[CJ.configName] = false;
        });
        Ci.push(Cs);
      }), CU = Promise.all(Ci)) : Promise.resolve());
      const CE = CM => Cu[CM];
      const Cq = CM => {
        if (CU) {
          return Object.keys(CM).some(CJ => CE(CJ));
        }
      };
    },
    2963: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        B: () => CM
      });
      var CB = CG(6593);
      var Cb = CG(8348);
      var CT = CG(386);
      var Ci = CG(1918);
      var Cu = CG(9025);
      const CU = CJ => {
        if (CJ == null || !CJ.length || !Array.isArray(CJ)) {
          CJ = ["video/mp4;codecs=\"avc1.4d400d,mp4a.40.2\""];
        }
        const CR = window.MediaSource;
        return !!CR && !!CR.isTypeSupported && CJ.every(Cs => CR.isTypeSupported(Cs));
      };
      const Cv = CJ => /hls|m3u8/.test(((CJ == null ? undefined : CJ.type) || "").toLowerCase()) || ((CJ == null ? undefined : CJ.file) || "").toLowerCase().indexOf(".m3u8") > -1;
      const CK = CJ => /mpd|dash/.test(((CJ == null ? undefined : CJ.type) || "").toLowerCase()) || ((CJ == null ? undefined : CJ.file) || "").toLowerCase().indexOf("mpd-time-csf") > -1;
      const CE = CB.B.find(CJ => CJ.name === "html5");
      const Cq = CE.supports;
      CE.supports = function (...CJ) {
        var [CR, Cs] = CJ;
        var CJ = Cq.apply(this, CJ);
        if (CK(CR)) {
          return false;
        }
        if (CJ && CR.drm && Cv(CR)) {
          const Cw = (0, CT.Z)(Cs)("drm");
          if (Cw && CR.drm.fairplay) {
            const Cf = window.WebKitMediaKeys;
            if (Cf == null || Cf.isTypeSupported == null) {
              return undefined;
            } else {
              return Cf.isTypeSupported("com.apple.fps.1_0", "video/mp4");
            }
          }
          return Cw;
        }
        return CJ;
      };
      CB.B.push({
        name: "shaka",
        supports: CJ => (!CJ.drm || !!(0, Ci.d3)(CJ.drm)) && CU(CJ.mediaTypes) && (CK(CJ) || Cv(CJ))
      });
      CB.B.unshift({
        name: "hlsjs",
        supports: CJ => {
          var CR;
          var Cs;
          return !CJ.drm && !!Cv(CJ) && !(CR = Boolean(Cu.Z == null || Cu.Z.canPlayType == null ? undefined : Cu.Z.canPlayType("application/vnd.apple.mpegURL")), Cs = typeof (CJ == null ? undefined : CJ.safarihlsjs) == "boolean" && CJ.safarihlsjs, typeof (CJ == null ? undefined : CJ.hlsjsdefault) == "boolean" && CJ.hlsjsdefault, typeof (CJ == null ? undefined : CJ.androidhls) == "boolean" && CJ.androidhls, CR && Cb.Browser.safari && !Cs) && (!CR || !Cb.OS.android || CJ.androidhls === false || CJ.hlsjsdefault !== false) && CU(CJ.mediaTypes);
        }
      });
      const CM = CB.B;
    },
    2303: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CK
      });
      var Cb = CG(2963);
      var CT = CG(12);
      var Ci = CG(670);
      var Cu = CG(2894);
      var CB = {
        html5: () => CG.e(250).then(function (CE) {
          var Cq = CG(9181).default;
          (0, Ci.Z)(Cq);
          return Cq;
        }.bind(null, CG)).catch((0, Cu.Ep)(152))
      };
      Object.assign(CB, {
        shaka: () => CG.e(371).then(function (CE) {
          var Cq = CG(2287).default;
          (0, Ci.Z)(Cq);
          return Cq;
        }.bind(null, CG)).catch((0, Cu.Ep)(154)),
        hlsjs: () => CG.e(98).then(function (CE) {
          var Cq = CG(9054).default;
          (0, Ci.Z)(Cq);
          return Cq;
        }.bind(null, CG)).catch((0, Cu.Ep)(153))
      });
      function CU(CE) {
        this.config = CE || {};
      }
      const Cv = CB;
      Object.assign(CU.prototype, {
        load(CE) {
          const Cq = Cv[CE];
          const CM = () => Promise.reject(new Error("Failed to load media"));
          if (Cq) {
            return Cq().then(() => {
              return CT.U[CE] || CM();
            });
          } else {
            return CM();
          }
        },
        providerSupports: (CE, Cq) => CE.supports(Cq),
        choose(CE) {
          if (CE === Object(CE)) {
            var Cq = Cb.B.length;
            for (let CJ = 0; CJ < Cq; CJ++) {
              var CM = Cb.B[CJ];
              if (this.providerSupports(CM, CE)) {
                return {
                  priority: Cq - CJ - 1,
                  name: CM.name,
                  type: CE.type,
                  providerToCheck: CM,
                  provider: CT.U[CM.name]
                };
              }
            }
          }
          return {};
        }
      });
      CB = CU;
      CB.prototype.providerSupports = function (CE, Cq) {
        return CE.supports(Cq, this.config.edition);
      };
      const CK = CB;
    },
    5140: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        t: () => Cb
      });
      const Cb = window.atob;
      window.btoa;
    },
    386: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => function (CR) {
          const Cs = {
            setup: [Cb, CT, Ci, Cu, CU, Cv, CE, Cq, CM, CK],
            drm: [CU, Cv, CE, Cq, CM],
            ads: [CE, Cq, CM, CK, CU, Cv, Ci],
            jwpsrv: [Cb, CT, Ci, Cu, CU, Cv, CE, CM, CK, CJ],
            discovery: [CE, CU, Cv, CM, Cq]
          };
          return function (Cw) {
            return Cs[Cw] && Cs[Cw].indexOf(CR) > -1;
          };
        }
      });
      const Cb = "free";
      const CT = "starter";
      const Ci = "business";
      const Cu = "premium";
      const CU = "enterprise";
      const Cv = "developer";
      const CK = "platinum";
      const CE = "ads";
      const Cq = "unlimited";
      const CM = "trial";
      const CJ = "invalid";
    },
    7010: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => function () {
          return CT(window, document.location.search);
        }
      });
      var Cb = CG(5950);
      const CT = function (Ci, Cu) {
        return Ci.location !== Ci.parent.location && (0, Cb.ke)(Cu, "isAMP");
      };
    },
    560: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        Z: () => CT
      });
      const Cb = () => Cb._iframe;
      Cb.mock = Ci => {
        Cb._iframe = Ci;
      };
      Cb.unmock = () => {
        Cb._iframe = Cb._original;
      };
      Cb._iframe = window.top !== window.self;
      Cb._original = Cb._iframe;
      const CT = Cb;
    },
    6599: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        ZP: () => CK,
        u5: () => CU
      });
      var Cb = CG(5592);
      var CT = CG(386);
      var Ci = CG(5140);
      var Cu = CG(4446);
      const CU = 100013;
      const Cv = "invalid";
      const CK = class {
        constructor(CE) {
          this.keyData = (Cq => {
            let CM;
            let CJ;
            let CR;
            try {
              var Cs = (0, Cb.p)(Cq || "", (0, Ci.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
              if ((CM = Cs[0]) === "pro") {
                CM = "premium";
              }
              if (!(0, CT.Z)(CM)("setup")) {
                CM = Cv;
              }
              if (Cs.length > 2) {
                CJ = Cs[1];
                const Cw = parseInt(Cs[2], 10);
                if (Cw > 0) {
                  (CR = new Date()).setTime(Cw);
                }
              }
            } catch (Cf) {
              CM = Cv;
            }
            return {
              edition: CM,
              token: CJ,
              expiration: CR
            };
          })(CE);
          this.edition = function () {
            return this.keyData.edition;
          };
          this.token = function () {
            return this.keyData.token;
          };
          this.expiration = function () {
            return this.keyData.expiration;
          };
          this.duration = function () {
            if (this.keyData.expiration) {
              return this.keyData.expiration.getTime() - new Date().getTime();
            } else {
              return 0;
            }
          };
          this.error = function () {
            let Cq;
            if (CE === undefined) {
              Cq = 100011;
            } else if (this.keyData.edition !== Cv && this.keyData.token) {
              if (this.duration() < 0) {
                Cq = CU;
              }
            } else {
              Cq = 100012;
            }
            if (Cq) {
              return new Cu.rG(Cu.pJ, Cq);
            } else {
              return null;
            }
          };
        }
      };
    },
    67: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        X: () => CT
      });
      var Cb = CG(560);
      const CT = () => {
        let Ci = window.location.host;
        if ((0, Cb.Z)()) {
          Ci = (document.referrer ? (Cu = document.referrer, (CU = document.createElement("a")).href = Cu, CU) : {}).host;
          try {
            Ci = Ci || window.top.location.host;
          } catch (Cv) {}
        }
        var Cu;
        var CU;
        return Ci;
      };
    },
    5592: (CO, CB, CG) => {
      'use strict';

      CG.d(CB, {
        p: () => Ci
      });
      var Cb = CG(5140);
      const CT = Cu => {
        var CU = new Array(Math.ceil(Cu.length / 4));
        for (let Cv = 0; Cv < CU.length; Cv++) {
          CU[Cv] = Cu.charCodeAt(Cv * 4) + (Cu.charCodeAt(Cv * 4 + 1) << 8) + (Cu.charCodeAt(Cv * 4 + 2) << 16) + (Cu.charCodeAt(Cv * 4 + 3) << 24);
        }
        return CU;
      };
      const Ci = function (Cu, CU) {
        Cu = String(Cu);
        CU = String(CU);
        if (Cu.length === 0) {
          return "";
        }
        var Cv = CT((0, Cb.t)(Cu));
        var CK = CT(unescape(encodeURIComponent(CU)).slice(0, 16));
        var CE = Cv.length;
        let Cq;
        let CM;
        let CJ = void Cv[CE - 1];
        let CR = Cv[0];
        let Cs = Math.floor(6 + 52 / CE) * 2654435769;
        while (Cs) {
          CM = Cs >>> 2 & 3;
          for (let Cw = CE - 1; Cw >= 0; Cw--) {
            Cq = ((CJ = Cv[Cw > 0 ? Cw - 1 : CE - 1]) >>> 5 ^ CR << 2) + (CR >>> 3 ^ CJ << 4) ^ (Cs ^ CR) + (CK[Cw & 3 ^ CM] ^ CJ);
            CR = Cv[Cw] -= Cq;
          }
          Cs -= 2654435769;
        }
        Cu = (Cf => {
          var CW = new Array(Cf.length);
          for (let CP = 0; CP < Cf.length; CP++) {
            CW[CP] = String.fromCharCode(Cf[CP] & 255, Cf[CP] >>> 8 & 255, Cf[CP] >>> 16 & 255, Cf[CP] >>> 24 & 255);
          }
          return CW.join("");
        })(Cv).replace(/\0+$/, "");
        try {
          return decodeURIComponent(escape(Cu));
        } catch (Cf) {
          return Cu;
        }
      };
    },
    1096: function (CO) {
      CO.exports = function () {
        'use strict';

        function CB() {}
        function CG(CK) {
          if (!(this instanceof CG)) {
            throw new TypeError("Promises must be constructed via new");
          }
          if (typeof CK != "function") {
            throw new TypeError("not a function");
          }
          this._state = 0;
          this._handled = false;
          this._value = undefined;
          this._deferreds = [];
          CU(CK, this);
        }
        function Cb(CK, CE) {
          while (CK._state === 3) {
            CK = CK._value;
          }
          if (CK._state !== 0) {
            CK._handled = true;
            CG._immediateFn(function () {
              var Cq;
              var CM = CK._state === 1 ? CE.onFulfilled : CE.onRejected;
              if (CM !== null) {
                try {
                  Cq = CM(CK._value);
                } catch (CJ) {
                  Ci(CE.promise, CJ);
                  return;
                }
                CT(CE.promise, Cq);
              } else {
                (CK._state === 1 ? CT : Ci)(CE.promise, CK._value);
              }
            });
          } else {
            CK._deferreds.push(CE);
          }
        }
        function CT(CK, CE) {
          try {
            if (CE === CK) {
              throw new TypeError("A promise cannot be resolved with itself.");
            }
            if (CE && (typeof CE == "object" || typeof CE == "function")) {
              var Cq = CE.then;
              if (CE instanceof CG) {
                CK._state = 3;
                CK._value = CE;
                return Cu(CK);
              }
              if (typeof Cq == "function") {
                return CU((CM = Cq, CJ = CE, function () {
                  CM.apply(CJ, arguments);
                }), CK);
              }
            }
            CK._state = 1;
            CK._value = CE;
            Cu(CK);
          } catch (CR) {
            Ci(CK, CR);
          }
          var CM;
          var CJ;
        }
        function Ci(CK, CE) {
          CK._state = 2;
          CK._value = CE;
          Cu(CK);
        }
        function Cu(CK) {
          if (CK._state === 2 && CK._deferreds.length === 0) {
            CG._immediateFn(function () {
              if (!CK._handled) {
                CG._unhandledRejectionFn(CK._value);
              }
            });
          }
          for (var CE = 0, Cq = CK._deferreds.length; CE < Cq; CE++) {
            Cb(CK, CK._deferreds[CE]);
          }
          CK._deferreds = null;
        }
        function CU(CK, CE) {
          var Cq = false;
          try {
            CK(function (CM) {
              if (!Cq) {
                Cq = true;
                CT(CE, CM);
              }
            }, function (CM) {
              if (!Cq) {
                Cq = true;
                Ci(CE, CM);
              }
            });
          } catch (CM) {
            if (!Cq) {
              Cq = true;
              Ci(CE, CM);
            }
          }
        }
        var Cv = setTimeout;
        CG.prototype.catch = function (CK) {
          return this.then(null, CK);
        };
        CG.prototype.then = function (CK, CE) {
          var Cq = new this.constructor(CB);
          Cb(this, new function (CM, CJ, CR) {
            this.onFulfilled = typeof CK == "function" ? CK : null;
            this.onRejected = typeof CJ == "function" ? CJ : null;
            this.promise = CR;
          }(0, CE, Cq));
          return Cq;
        };
        CG.prototype.finally = function (CK) {
          var CE = this.constructor;
          return this.then(function (Cq) {
            return CE.resolve(CK()).then(function () {
              return Cq;
            });
          }, function (Cq) {
            return CE.resolve(CK()).then(function () {
              return CE.reject(Cq);
            });
          });
        };
        CG.all = function (CK) {
          return new CG(function (CE, Cq) {
            if (!CK || CK.length === undefined) {
              throw new TypeError("Promise.all accepts an array");
            }
            var CM = Array.prototype.slice.call(CK);
            if (CM.length === 0) {
              return CE([]);
            }
            var CJ = CM.length;
            for (var CR = 0; CM.length > CR; CR++) {
              (function Cs(Cw, Cf) {
                try {
                  if (Cf && (typeof Cf == "object" || typeof Cf == "function")) {
                    var CW = Cf.then;
                    if (typeof CW == "function") {
                      return CW.call(Cf, function (CP) {
                        Cs(Cw, CP);
                      }, Cq);
                    }
                  }
                  CM[Cw] = Cf;
                  if (--CJ == 0) {
                    CE(CM);
                  }
                } catch (CP) {
                  Cq(CP);
                }
              })(CR, CM[CR]);
            }
          });
        };
        CG.resolve = function (CK) {
          if (CK && typeof CK == "object" && CK.constructor === CG) {
            return CK;
          } else {
            return new CG(function (CE) {
              CE(CK);
            });
          }
        };
        CG.reject = function (CK) {
          return new CG(function (CE, Cq) {
            Cq(CK);
          });
        };
        CG.race = function (CK) {
          return new CG(function (CE, Cq) {
            for (var CM = 0, CJ = CK.length; CM < CJ; CM++) {
              CK[CM].then(CE, Cq);
            }
          });
        };
        CG._immediateFn = typeof setImmediate == "function" ? function (CK) {
          setImmediate(CK);
        } : function (CK) {
          Cv(CK, 0);
        };
        CG._unhandledRejectionFn = function (CK) {
          if (console !== undefined && console) {
            console.warn("Possible Unhandled Promise Rejection:", CK);
          }
        };
        return CG;
      }();
    },
    9563: CO => {
      var CB;
      var CG;
      var Cb = {};
      var CT = {};
      CB = function () {
        return document.head || document.getElementsByTagName("head")[0];
      };
      function Ci() {
        return CG = CG === undefined ? CB.apply(this, arguments) : CG;
      }
      function Cu(CE, Cq) {
        var CM;
        var CJ;
        var CR = CT[CE];
        var Cs = (CR = CR || (CT[CE] = {
          element: (CE = CE, (CJ = document.createElement("style")).type = "text/css", CJ.setAttribute("data-jwplayer-id", CE), CE = CJ, Ci().appendChild(CE), CJ),
          counter: 0
        })).counter++;
        var Cw = CR.element;
        function Cf() {
          CK(Cw, Cs, "");
        }
        (CM = function (CW) {
          CK(Cw, Cs, CW);
        })(Cq.css);
        return function (CW) {
          if (CW) {
            if (CW.css !== Cq.css || CW.media !== Cq.media) {
              CM((Cq = CW).css);
            }
          } else {
            Cf();
          }
        };
      }
      CO.exports = {
        style: function (CE, Cq) {
          var CM = Cq;
          for (var CJ = function (CP) {
              var Cn = [];
              var Cy = {};
              for (var CD = 0; CD < CP.length; CD++) {
                var Cp = CP[CD];
                var Ct = Cp[0];
                var Cp = {
                  css: Cp[1],
                  media: Cp[2]
                };
                if (Cy[Ct]) {
                  Cy[Ct].parts.push(Cp);
                } else {
                  Cn.push(Cy[Ct] = {
                    id: Ct,
                    parts: [Cp]
                  });
                }
              }
              return Cn;
            }(CE), CR = 0; CR < CJ.length; CR++) {
            var Cs = CJ[CR];
            var Cw = (Cb[CM] || {})[Cs.id];
            if (Cw) {
              for (var Cf = 0; Cf < Cw.parts.length; Cf++) {
                Cw.parts[Cf](Cs.parts[Cf]);
              }
              for (; Cf < Cs.parts.length; Cf++) {
                Cw.parts.push(Cu(CM, Cs.parts[Cf]));
              }
            } else {
              var CW = [];
              for (var Cf = 0; Cf < Cs.parts.length; Cf++) {
                CW.push(Cu(CM, Cs.parts[Cf]));
              }
              Cb[CM] = Cb[CM] || {};
              Cb[CM][Cs.id] = {
                id: Cs.id,
                parts: CW
              };
            }
          }
        },
        clear: function (CE, Cq) {
          var CM = Cb[CE];
          if (CM) {
            if (Cq) {
              var CJ = CM[Cq];
              if (CJ) {
                for (var CR = 0; CR < CJ.parts.length; CR += 1) {
                  CJ.parts[CR]();
                }
              }
            } else {
              for (var Cs = Object.keys(CM), Cw = 0; Cw < Cs.length; Cw += 1) {
                for (var Cf = CM[Cs[Cw]], CW = 0; CW < Cf.parts.length; CW += 1) {
                  Cf.parts[CW]();
                }
              }
              delete Cb[CE];
            }
          }
        }
      };
      CU = [];
      var CU;
      function Cv(CE, Cq) {
        CU[CE] = Cq;
        return CU.filter(Boolean).join("\n");
      }
      function CK(CE, Cq, CM) {
        if (CE.styleSheet) {
          CE.styleSheet.cssText = Cv(Cq, CM);
        } else {
          CM = document.createTextNode(CM);
          if (Cq = CE.childNodes[Cq]) {
            CE.replaceChild(CM, Cq);
          } else {
            CE.appendChild(CM);
          }
        }
      }
    },
    4737: CO => {
      CO.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 29.3\" class=\"jw-svg-icon jw-svg-icon-watermark\" focusable=\"false\"><path d=\"M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z\"></path><polygon points=\"58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61\"></polygon><path d=\"M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z\"></path><path d=\"M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z\"></path><polygon points=\"113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18\"></polygon><polygon points=\"123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29\"></polygon><path d=\"M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z\"></path><path d=\"M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z\"></path></svg>";
    }
  };
  var CX = {};
  function CN(CO) {
    var CB = CX[CO];
    if (CB === undefined) {
      CB = CX[CO] = {
        id: CO,
        loaded: false,
        exports: {}
      };
      CC[CO].call(CB.exports, CB, CB.exports, CN);
      CB.loaded = true;
    }
    return CB.exports;
  }
  CN.m = CC;
  CN.n = CO => {
    var CB = CO && CO.__esModule ? () => CO.default : () => CO;
    CN.d(CB, {
      a: CB
    });
    return CB;
  };
  CN.d = (CO, CB) => {
    for (var CG in CB) {
      if (CN.o(CB, CG) && !CN.o(CO, CG)) {
        Object.defineProperty(CO, CG, {
          enumerable: true,
          get: CB[CG]
        });
      }
    }
  };
  CN.f = {};
  CN.e = CO => Promise.all(Object.keys(CN.f).reduce((CB, CG) => {
    CN.f[CG](CO, CB);
    return CB;
  }, []));
  CN.u = CO => ({
    63: "polyfills.webvtt",
    74: "jwplayer.controls.tizen",
    98: "provider.hlsjs",
    168: "jwplayer.amp",
    207: "jwplayer.core.controls.html5",
    250: "provider.html5",
    347: "vttparser",
    365: "related",
    371: "provider.shaka",
    493: "jwplayer.core.controls.polyfills",
    520: "provider.airplay",
    581: "jwplayer.core.controls",
    605: "jwplayer.core.controls.polyfills.html5",
    681: "jwplayer.core",
    716: "jwplayer.controls",
    926: "jwplayer.stats",
    943: "polyfills.intersection-observer",
    977: "provider.cast"
  })[CO] + ".js";
  CN.o = (CO, CB) => Object.prototype.hasOwnProperty.call(CO, CB);
  C6 = {};
  C7 = "jwplayer:";
  CN.l = (CO, CB, CG, Cb) => {
    if (C6[CO]) {
      C6[CO].push(CB);
    } else {
      var CT;
      var Ci;
      if (CG !== undefined) {
        for (var Cu = document.getElementsByTagName("script"), CU = 0; CU < Cu.length; CU++) {
          var Cv = Cu[CU];
          if (Cv.getAttribute("src") == CO || Cv.getAttribute("data-webpack") == C7 + CG) {
            CT = Cv;
            break;
          }
        }
      }
      if (!CT) {
        Ci = true;
        (CT = document.createElement("script")).charset = "utf-8";
        CT.timeout = 55;
        if (CN.nc) {
          CT.setAttribute("nonce", CN.nc);
        }
        CT.setAttribute("data-webpack", C7 + CG);
        CT.src = CO;
      }
      C6[CO] = [CB];
      var CB = (CE, Cq) => {
        CT.onerror = CT.onload = null;
        clearTimeout(CK);
        var CM = C6[CO];
        delete C6[CO];
        if (CT.parentNode) {
          CT.parentNode.removeChild(CT);
        }
        if (CM) {
          CM.forEach(CJ => CJ(Cq));
        }
        if (CE) {
          return CE(Cq);
        }
      };
      var CK = setTimeout(CB.bind(null, undefined, {
        type: "timeout",
        target: CT
      }), 55000);
      CT.onerror = CB.bind(null, CT.onerror);
      CT.onload = CB.bind(null, CT.onload);
      if (Ci) {
        document.head.appendChild(CT);
      }
    }
  };
  CN.r = CO => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(CO, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(CO, "__esModule", {
      value: true
    });
  };
  CN.nmd = CO => {
    CO.paths = [];
    CO.children ||= [];
    return CO;
  };
  CN.p = "";
  C8 = {
    313: 0
  };
  CN.f.j = (CO, CB) => {
    var CG;
    var Cb;
    var CT = CN.o(C8, CO) ? C8[CO] : undefined;
    if (CT !== 0) {
      if (CT) {
        CB.push(CT[2]);
      } else {
        CG = new Promise((Ci, Cu) => CT = C8[CO] = [Ci, Cu]);
        CB.push(CT[2] = CG);
        CB = CN.p + CN.u(CO);
        Cb = new Error();
        CN.l(CB, Ci => {
          var Cu;
          if (CN.o(C8, CO) && ((CT = C8[CO]) !== 0 && (C8[CO] = undefined), CT)) {
            Cu = Ci && (Ci.type === "load" ? "missing" : Ci.type);
            Ci = Ci && Ci.target && Ci.target.src;
            Cb.message = "Loading chunk " + CO + " failed.\n(" + Cu + ": " + Ci + ")";
            Cb.name = "ChunkLoadError";
            Cb.type = Cu;
            Cb.request = Ci;
            CT[1](Cb);
          }
        }, "chunk-" + CO, CO);
      }
    }
  };
  Cl = (CO, CB) => {
    var CG;
    var Cb;
    var [CT, Ci, Cu] = CB;
    var CU = 0;
    if (CT.some(Cv => C8[Cv] !== 0)) {
      for (CG in Ci) {
        if (CN.o(Ci, CG)) {
          CN.m[CG] = Ci[CG];
        }
      }
      if (Cu) {
        Cu(CN);
      }
    }
    for (CO && CO(CB); CU < CT.length; CU++) {
      Cb = CT[CU];
      if (CN.o(C8, Cb) && C8[Cb]) {
        C8[Cb][0]();
      }
      C8[Cb] = 0;
    }
  };
  (C9 = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(Cl.bind(null, 0));
  C9.push = Cl.bind(null, C9.push.bind(C9));
  CN.nc = undefined;
  var Cl = CN(6577);
  window.jwplayer = Cl.default;
})();
(function (C6, C7) {
  var C8;
  var C9;
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = C7();
  } else if (typeof define == "function" && define.amd) {
    define(C7);
  } else {
    C6 = C6 || self;
    C8 = C6.Cookies;
    (C9 = C6.Cookies = C7()).noConflict = function () {
      C6.Cookies = C8;
      return C9;
    };
  }
})(this, function () {
  'use strict';

  function C6(C8) {
    for (var C9 = 1; C9 < arguments.length; C9++) {
      var CC;
      var CX = arguments[C9];
      for (CC in CX) {
        C8[CC] = CX[CC];
      }
    }
    return C8;
  }
  var C7 = {
    read: function (C8) {
      return C8.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (C8) {
      return encodeURIComponent(C8).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  };
  return function C8(C9, CC) {
    function CX(CN, Cl, CO) {
      if (typeof document != "undefined") {
        if (typeof (CO = C6({}, CC, CO)).expires == "number") {
          CO.expires = new Date(Date.now() + CO.expires * 86400000);
        }
        CO.expires &&= CO.expires.toUTCString();
        CN = encodeURIComponent(CN).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        Cl = C9.write(Cl, CN);
        var CB;
        var CG = "";
        for (CB in CO) {
          if (CO[CB] && (CG += "; " + CB, CO[CB] !== true)) {
            CG += "=" + CO[CB].split(";")[0];
          }
        }
        return document.cookie = CN + "=" + Cl + CG;
      }
    }
    return Object.create({
      set: CX,
      get: function (CN) {
        if (typeof document != "undefined" && (!arguments.length || CN)) {
          for (var Cl = document.cookie ? document.cookie.split("; ") : [], CO = {}, CB = 0; CB < Cl.length; CB++) {
            var CG = Cl[CB].split("=");
            var Cb = CG.slice(1).join("=");
            if (Cb[0] === "\"") {
              Cb = Cb.slice(1, -1);
            }
            try {
              var CT = C7.read(CG[0]);
              CO[CT] = C9.read(Cb, CT);
              if (CN === CT) {
                break;
              }
            } catch (Ci) {}
          }
          if (CN) {
            return CO[CN];
          } else {
            return CO;
          }
        }
      },
      remove: function (CN, Cl) {
        CX(CN, "", C6({}, Cl, {
          expires: -1
        }));
      },
      withAttributes: function (CN) {
        return C8(this.converter, C6({}, this.attributes, CN));
      },
      withConverter: function (CN) {
        return C8(C6({}, this.converter, CN), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(CC)
      },
      converter: {
        value: Object.freeze(C9)
      }
    });
  }(C7, {
    path: "/"
  });
});
(function (C6) {
  (function () {
    if (typeof module != "undefined" && module.exports) {
      return function (C7) {
        module.exports = C7();
      };
    }
    if (typeof define == "function" && define.amd) {
      return define;
    }
    if (typeof window != "undefined") {
      return function (C7) {
        window.MobileDetect = C7();
      };
    }
    throw new Error("unknown environment");
  })()(function () {
    'use strict';

    function C7(CU, Cv) {
      return CU != null && Cv != null && CU.toLowerCase() === Cv.toLowerCase();
    }
    function C8(CU, Cv) {
      var CK;
      var CE;
      var Cq = CU.length;
      if (Cq && Cv) {
        CK = Cv.toLowerCase();
        CE = 0;
        for (; CE < Cq; ++CE) {
          if (CK === CU[CE].toLowerCase()) {
            return true;
          }
        }
      }
      return false;
    }
    function C9(CU) {
      for (var Cv in CU) {
        if (CT.call(CU, Cv)) {
          CU[Cv] = new RegExp(CU[Cv], "i");
        }
      }
    }
    function CC(CU, Cv) {
      this.ua = (CU || "").substr(0, 500);
      this._cache = {};
      this.maxPhoneWidth = Cv || 600;
    }
    var CX;
    var CN;
    var Cl;
    var CO;
    var CB;
    var CG;
    var Cb = {
      mobileDetectRules: {
        phones: {
          iPhone: "\\biPhone\\b|\\biPod\\b",
          BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
          HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
          Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
          Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
          Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
          Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
          LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
          Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
          Asus: "Asus.*Galaxy|PadFone.*Mobile",
          NokiaLumia: "Lumia [0-9]{3,4}",
          Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
          Palm: "PalmSource|Palm",
          Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
          Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
          Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
          Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
          iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
          SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
          Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
          Alcatel: "Alcatel",
          Nintendo: "Nintendo (3DS|Switch)",
          Amoi: "Amoi",
          INQ: "INQ",
          OnePlus: "ONEPLUS",
          GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
        },
        tablets: {
          iPad: "iPad|iPad.*Mobile",
          NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
          GoogleTablet: "Android.*Pixel C",
          SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
          Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
          SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
          HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
          AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
          BlackBerryTablet: "PlayBook|RIM Tablet",
          HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
          MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
          NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
          AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
          ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
          LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
          FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
          PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
          LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
          DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
          YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
          MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
          ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
          IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
          IRUTablet: "M702pro",
          MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
          EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
          AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
          ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
          AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
          NokiaLumiaTablet: "Lumia 2520",
          SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
          PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
          CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
          CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
          MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
          MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
          SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
          RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
          FlyTablet: "IQ310|Fly Vision",
          bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
          HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
          NecTablet: "\\bN-06D|\\bN-08D",
          PantechTablet: "Pantech.*P4100",
          BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
          VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
          ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
          PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
          NabiTablet: "Android.*\\bNabi",
          KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
          DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
          TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
          PlaystationTablet: "Playstation.*(Portable|Vita)",
          TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
          PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
          AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
          DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
          GalapadTablet: "Android.*\\bG1\\b(?!\\))",
          MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
          KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
          AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
          PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
          YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
          ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
          GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
          PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
          OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
          HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
          DPSTablet: "DPS Dream 9|DPS Dual 7",
          VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
          CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
          MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
          ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
          GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
          ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
          VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
          ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
          StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
          VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
          EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
          RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
          iMobileTablet: "i-mobile i-note",
          TolinoTablet: "tolino tab [0-9.]+|tolino shine",
          AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
          AMPETablet: "Android.* A78 ",
          SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
          TecnoTablet: "TECNO P9|TECNO DP8D",
          JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
          iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
          FX2Tablet: "FX2 PAD7|FX2 PAD10",
          XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
          ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
          VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
          OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
          CaptivaTablet: "CAPTIVA PAD",
          IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
          TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
          OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
          JaytechTablet: "TPC-PA762",
          BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
          DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
          EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
          LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
          AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
          MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
          CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
          WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
          MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
          MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
          NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
          NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
          LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
          UbislateTablet: "UbiSlate[\\s]?7C",
          PocketBookTablet: "Pocketbook",
          KocasoTablet: "\\b(TB-1207)\\b",
          HisenseTablet: "\\b(F5281|E2371)\\b",
          Hudl: "Hudl HT7S3|Hudl 2",
          TelstraTablet: "T-Hub2",
          GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
        },
        oss: {
          AndroidOS: "Android",
          BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
          PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
          SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
          WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
          WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
          iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
          iPadOS: "CPU OS 13",
          MeeGoOS: "MeeGo",
          MaemoOS: "Maemo",
          JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
          webOS: "webOS|hpwOS",
          badaOS: "\\bBada\\b",
          BREWOS: "BREW"
        },
        uas: {
          Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
          Dolfin: "\\bDolfin\\b",
          Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
          Skyfire: "Skyfire",
          Edge: "Mobile Safari/[.0-9]* Edge",
          IE: "IEMobile|MSIEMobile",
          Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
          Bolt: "bolt",
          TeaShark: "teashark",
          Blazer: "Blazer",
          Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
          WeChat: "\\bMicroMessenger\\b",
          UCBrowser: "UC.*Browser|UCWEB",
          baiduboxapp: "baiduboxapp",
          baidubrowser: "baidubrowser",
          DiigoBrowser: "DiigoBrowser",
          Mercury: "\\bMercury\\b",
          ObigoBrowser: "Obigo",
          NetFront: "NF-Browser",
          GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
          PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
        },
        props: {
          Mobile: "Mobile/[VER]",
          Build: "Build/[VER]",
          Version: "Version/[VER]",
          VendorID: "VendorID/[VER]",
          iPad: "iPad.*CPU[a-z ]+[VER]",
          iPhone: "iPhone.*CPU[a-z ]+[VER]",
          iPod: "iPod.*CPU[a-z ]+[VER]",
          Kindle: "Kindle/[VER]",
          Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
          Coast: ["Coast/[VER]"],
          Dolfin: "Dolfin/[VER]",
          Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
          Fennec: "Fennec/[VER]",
          Edge: "Edge/[VER]",
          IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
          NetFront: "NetFront/[VER]",
          NokiaBrowser: "NokiaBrowser/[VER]",
          Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
          "Opera Mini": "Opera Mini/[VER]",
          "Opera Mobi": "Version/[VER]",
          UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
          MQQBrowser: "MQQBrowser/[VER]",
          MicroMessenger: "MicroMessenger/[VER]",
          baiduboxapp: "baiduboxapp/[VER]",
          baidubrowser: "baidubrowser/[VER]",
          SamsungBrowser: "SamsungBrowser/[VER]",
          Iron: "Iron/[VER]",
          Safari: ["Version/[VER]", "Safari/[VER]"],
          Skyfire: "Skyfire/[VER]",
          Tizen: "Tizen/[VER]",
          Webkit: "webkit[ /][VER]",
          PaleMoon: "PaleMoon/[VER]",
          Gecko: "Gecko/[VER]",
          Trident: "Trident/[VER]",
          Presto: "Presto/[VER]",
          Goanna: "Goanna/[VER]",
          iOS: " \\bi?OS\\b [VER][ ;]{1}",
          Android: "Android [VER]",
          BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
          BREW: "BREW [VER]",
          Java: "Java/[VER]",
          "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
          "Windows Phone": "Windows Phone [VER]",
          "Windows CE": "Windows CE/[VER]",
          "Windows NT": "Windows NT [VER]",
          Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
          webOS: ["webOS/[VER]", "hpwOS/[VER];"]
        },
        utils: {
          Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
          MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
          DesktopMode: "WPDesktop",
          TV: "SonyDTV|HbbTV",
          WebKit: "(webkit)[ /]([\\w.]+)",
          Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
          Watch: "SM-V700"
        }
      },
      detectMobileBrowsers: {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
      }
    };
    var CT = Object.prototype.hasOwnProperty;
    Cb.FALLBACK_PHONE = "UnknownPhone";
    Cb.FALLBACK_TABLET = "UnknownTablet";
    Cb.FALLBACK_MOBILE = "UnknownMobile";
    var Ci = "isArray" in Array ? Array.isArray : function (CU) {
      return Object.prototype.toString.call(CU) === "[object Array]";
    };
    var Cu = Cb.mobileDetectRules;
    for (CX in Cu.props) {
      if (CT.call(Cu.props, CX)) {
        CN = Cu.props[CX];
        CB = (CN = Ci(CN) ? CN : [CN]).length;
        CO = 0;
        for (; CO < CB; ++CO) {
          if ((CG = (Cl = CN[CO]).indexOf("[VER]")) >= 0) {
            Cl = Cl.substring(0, CG) + "([\\w._\\+]+)" + Cl.substring(CG + 5);
          }
          CN[CO] = new RegExp(Cl, "i");
        }
        Cu.props[CX] = CN;
      }
    }
    C9(Cu.oss);
    C9(Cu.phones);
    C9(Cu.tablets);
    C9(Cu.uas);
    C9(Cu.utils);
    Cu.oss0 = {
      WindowsPhoneOS: Cu.oss.WindowsPhoneOS,
      WindowsMobileOS: Cu.oss.WindowsMobileOS
    };
    Cb.findMatch = function (CU, Cv) {
      for (var CK in CU) {
        if (CT.call(CU, CK) && CU[CK].test(Cv)) {
          return CK;
        }
      }
      return null;
    };
    Cb.findMatches = function (CU, Cv) {
      var CK;
      var CE = [];
      for (CK in CU) {
        if (CT.call(CU, CK) && CU[CK].test(Cv)) {
          CE.push(CK);
        }
      }
      return CE;
    };
    Cb.getVersionStr = function (CU, Cv) {
      var CK;
      var CE;
      var Cq;
      var CM;
      var CJ = Cb.mobileDetectRules.props;
      if (CT.call(CJ, CU)) {
        Cq = (CK = CJ[CU]).length;
        CE = 0;
        for (; CE < Cq; ++CE) {
          if ((CM = CK[CE].exec(Cv)) !== null) {
            return CM[1];
          }
        }
      }
      return null;
    };
    Cb.getVersion = function (CU, Cv) {
      CU = Cb.getVersionStr(CU, Cv);
      if (CU) {
        return Cb.prepareVersionNo(CU);
      } else {
        return NaN;
      }
    };
    Cb.prepareVersionNo = function (CU) {
      var Cv = CU.split(/[a-z._ \/\-]/i);
      if (Cv.length === 1) {
        CU = Cv[0];
      }
      if (Cv.length > 1) {
        CU = Cv[0] + ".";
        Cv.shift();
        CU += Cv.join("");
      }
      return Number(CU);
    };
    Cb.isMobileFallback = function (CU) {
      return Cb.detectMobileBrowsers.fullPattern.test(CU) || Cb.detectMobileBrowsers.shortPattern.test(CU.substr(0, 4));
    };
    Cb.isTabletFallback = function (CU) {
      return Cb.detectMobileBrowsers.tabletPattern.test(CU);
    };
    Cb.prepareDetectionCache = function (CU, Cv, CK) {
      var CE;
      if (CU.mobile === C6) {
        if (CE = Cb.findMatch(Cb.mobileDetectRules.tablets, Cv)) {
          CU.mobile = CU.tablet = CE;
          CU.phone = null;
          return;
        } else if (CE = Cb.findMatch(Cb.mobileDetectRules.phones, Cv)) {
          CU.mobile = CU.phone = CE;
          CU.tablet = null;
          return;
        } else {
          if (Cb.isMobileFallback(Cv)) {
            if ((CE = CC.isPhoneSized(CK)) === C6) {
              CU.mobile = Cb.FALLBACK_MOBILE;
              CU.tablet = CU.phone = null;
            } else if (CE) {
              CU.mobile = CU.phone = Cb.FALLBACK_PHONE;
              CU.tablet = null;
            } else {
              CU.mobile = CU.tablet = Cb.FALLBACK_TABLET;
              CU.phone = null;
            }
          } else if (Cb.isTabletFallback(Cv)) {
            CU.mobile = CU.tablet = Cb.FALLBACK_TABLET;
            CU.phone = null;
          } else {
            CU.mobile = CU.tablet = CU.phone = null;
          }
          return;
        }
      }
    };
    Cb.mobileGrade = function (CU) {
      var Cv = CU.mobile() !== null;
      if (CU.os("iOS") && CU.version("iPad") >= 4.3 || CU.os("iOS") && CU.version("iPhone") >= 3.1 || CU.os("iOS") && CU.version("iPod") >= 3.1 || CU.version("Android") > 2.1 && CU.is("Webkit") || CU.version("Windows Phone OS") >= 7 || CU.is("BlackBerry") && CU.version("BlackBerry") >= 6 || CU.match("Playbook.*Tablet") || CU.version("webOS") >= 1.4 && CU.match("Palm|Pre|Pixi") || CU.match("hp.*TouchPad") || CU.is("Firefox") && CU.version("Firefox") >= 12 || CU.is("Chrome") && CU.is("AndroidOS") && CU.version("Android") >= 4 || CU.is("Skyfire") && CU.version("Skyfire") >= 4.1 && CU.is("AndroidOS") && CU.version("Android") >= 2.3 || CU.is("Opera") && CU.version("Opera Mobi") > 11 && CU.is("AndroidOS") || CU.is("MeeGoOS") || CU.is("Tizen") || CU.is("Dolfin") && CU.version("Bada") >= 2 || (CU.is("UC Browser") || CU.is("Dolfin")) && CU.version("Android") >= 2.3 || CU.match("Kindle Fire") || CU.is("Kindle") && CU.version("Kindle") >= 3 || CU.is("AndroidOS") && CU.is("NookTablet") || CU.version("Chrome") >= 11 && !Cv || CU.version("Safari") >= 5 && !Cv || CU.version("Firefox") >= 4 && !Cv || CU.version("MSIE") >= 7 && !Cv || CU.version("Opera") >= 10 && !Cv) {
        return "A";
      } else if (CU.os("iOS") && CU.version("iPad") < 4.3 || CU.os("iOS") && CU.version("iPhone") < 3.1 || CU.os("iOS") && CU.version("iPod") < 3.1 || CU.is("Blackberry") && CU.version("BlackBerry") >= 5 && CU.version("BlackBerry") < 6 || CU.version("Opera Mini") >= 5 && CU.version("Opera Mini") <= 6.5 && (CU.version("Android") >= 2.3 || CU.is("iOS")) || CU.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || CU.version("Opera Mobi") >= 11 && CU.is("SymbianOS")) {
        return "B";
      } else {
        if (!(CU.version("BlackBerry") < 5) && !CU.match("MSIEMobile|Windows CE.*Mobile")) {
          CU.version("Windows Mobile");
        }
        return "C";
      }
    };
    Cb.detectOS = function (CU) {
      return Cb.findMatch(Cb.mobileDetectRules.oss0, CU) || Cb.findMatch(Cb.mobileDetectRules.oss, CU);
    };
    Cb.getDeviceSmallerSide = function () {
      if (window.screen.width < window.screen.height) {
        return window.screen.width;
      } else {
        return window.screen.height;
      }
    };
    CC.prototype = {
      constructor: CC,
      mobile: function () {
        Cb.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        Cb.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        Cb.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        if (this._cache.userAgent === C6) {
          this._cache.userAgent = Cb.findMatch(Cb.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgent;
      },
      userAgents: function () {
        if (this._cache.userAgents === C6) {
          this._cache.userAgents = Cb.findMatches(Cb.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgents;
      },
      os: function () {
        if (this._cache.os === C6) {
          this._cache.os = Cb.detectOS(this.ua);
        }
        return this._cache.os;
      },
      version: function (CU) {
        return Cb.getVersion(CU, this.ua);
      },
      versionStr: function (CU) {
        return Cb.getVersionStr(CU, this.ua);
      },
      is: function (CU) {
        return C8(this.userAgents(), CU) || C7(CU, this.os()) || C7(CU, this.phone()) || C7(CU, this.tablet()) || C8(Cb.findMatches(Cb.mobileDetectRules.utils, this.ua), CU);
      },
      match: function (CU) {
        return (CU = CU instanceof RegExp ? CU : new RegExp(CU, "i")).test(this.ua);
      },
      isPhoneSized: function (CU) {
        return CC.isPhoneSized(CU || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        if (this._cache.grade === C6) {
          this._cache.grade = Cb.mobileGrade(this);
        }
        return this._cache.grade;
      }
    };
    if (typeof window != "undefined" && window.screen) {
      CC.isPhoneSized = function (CU) {
        if (CU < 0) {
          return C6;
        } else {
          return Cb.getDeviceSmallerSide() <= CU;
        }
      };
    } else {
      CC.isPhoneSized = function () {};
    }
    CC._impl = Cb;
    CC.version = "1.4.4 2019-09-21";
    return CC;
  });
})();
(function (C6, C7) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = C7();
  } else if (typeof define == "function" && define.amd) {
    define([], C7);
  } else if (typeof exports == "object") {
    exports.devtoolsDetector = C7();
  } else {
    C6.devtoolsDetector = C7();
  }
})(typeof self != "undefined" ? self : this, function () {
  C7 = [function (C9, CC, CX) {
    'use strict';

    (function (CN) {
      CC.c = function () {
        return (typeof performance != "undefined" ? performance : Date).now();
      };
      CC.b = function (CB) {
        var CG = (CB = CB === undefined ? {} : CB).includes;
        var CB = CB.excludes;
        var CB = CB === undefined ? [] : CB;
        var Cb = false;
        var CT = false;
        for (var Ci = 0, Cu = CG === undefined ? [] : CG; Ci < Cu.length; Ci++) {
          if (Cu[Ci] === true) {
            Cb = true;
            break;
          }
        }
        for (var CU = 0, Cv = CB; CU < Cv.length; CU++) {
          if (Cv[CU] === true) {
            CT = true;
            break;
          }
        }
        return Cb && !CT;
      };
      CC.d = function (CB, CG, Cb) {
        CB = CO.a[CB];
        return CB !== undefined && Object(Cl.compare)(CB, CG, Cb);
      };
      CC.a = function () {
        if (typeof self != "undefined") {
          return self;
        } else if (typeof window != "undefined") {
          return window;
        } else if (CN !== undefined) {
          return CN;
        } else {
          return this;
        }
      };
      var Cl = CX(11);
      CX.n(Cl);
      var CO = CX(5);
    }).call(CC, CX(10));
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "c", function () {
      return Cl;
    });
    CX.d(CC, "d", function () {
      return CO;
    });
    CX.d(CC, "b", function () {
      return CB;
    });
    CX.d(CC, "g", function () {
      return CG;
    });
    CX.d(CC, "e", function () {
      return Cb;
    });
    CX.d(CC, "a", function () {
      return CT;
    });
    CX.d(CC, "f", function () {
      return Ci;
    });
    var CN;
    var CC = CX(3);
    var CX = CX(0);
    var CX = Object(CX.a)();
    var Cl = "InstallTrigger" in ((CX == null ? undefined : CX.window) || {}) || /firefox/i.test(CC.b);
    var CO = /trident/i.test(CC.b) || /msie/i.test(CC.b);
    var CB = /edge/i.test(CC.b);
    var CG = /webkit/i.test(CC.b) && !CB;
    var Cb = /IqiyiApp/.test(CC.b);
    var CT = ((CN = CX == null ? undefined : CX.window) == null ? undefined : CN.chrome) !== undefined || /chrome/i.test(CC.b) || /CriOS/i.test(CC.b);
    var Ci = (((CX = (CN = CX == null ? undefined : CX.window) == null ? undefined : CN.safari) == null ? undefined : CX.pushNotification) || false).toString() === "[object SafariRemoteNotification]" || /safari/i.test(CC.b) && !CT;
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "b", function () {
      return CO;
    });
    CX.d(CC, "c", function () {
      return CB;
    });
    CX.d(CC, "a", function () {
      return CG;
    });
    var CN = CX(1);
    function Cl(Cb) {
      if (console) {
        if (!CN.d && !CN.b) {
          return console[Cb];
        }
        if (Cb === "log" || Cb === "clear") {
          return function () {
            var CT = [];
            for (var Ci = 0; Ci < arguments.length; Ci++) {
              CT[Ci] = arguments[Ci];
            }
            console[Cb].apply(console, CT);
          };
        }
      }
      return function () {
        for (var CT = 0; CT < arguments.length; CT++) {
          CT;
          0;
        }
      };
    }
    var CO = Cl("log");
    var CB = Cl("table");
    var CG = Cl("clear");
  }, function (C9, CC, CX) {
    'use strict';

    CC.a = function () {
      var CO;
      var CB = [];
      for (var CG = 0; CG < arguments.length; CG++) {
        CB[CG] = arguments[CG];
      }
      if (CN != null && CN.document) {
        return (CO = CN.document).createElement.apply(CO, CB);
      } else {
        return {};
      }
    };
    CX.d(CC, "b", function () {
      return Cl;
    });
    var CC = CX(0);
    var CN = Object(CC.a)();
    var Cl = ((CX = CN == null ? undefined : CN.navigator) == null ? undefined : CX.userAgent) || "xxxxx";
  }, function (C9, CC, CX) {
    'use strict';

    Object.defineProperty(CC, "__esModule", {
      value: true
    });
    CC.addListener = function (CU) {
      Cu.addListener(CU);
    };
    CC.removeListener = function (CU) {
      Cu.removeListener(CU);
    };
    CC.isLaunch = function () {
      return Cu.isLaunch();
    };
    CC.launch = function () {
      Cu.launch();
    };
    CC.stop = function () {
      Cu.stop();
    };
    CC.setDetectDelay = function (CU) {
      Cu.setDetectDelay(CU);
    };
    var CN = CX(7);
    var Cl = CX(8);
    CX.d(CC, "DevtoolsDetector", function () {
      return CN.a;
    });
    CX.d(CC, "checkers", function () {
      return Cl;
    });
    var CO = CX(0);
    CX.d(CC, "match", function () {
      return CO.b;
    });
    CX.d(CC, "specificVersionMatch", function () {
      return CO.d;
    });
    var CB = CX(1);
    CX.d(CC, "isFirefox", function () {
      return CB.c;
    });
    CX.d(CC, "isIE", function () {
      return CB.d;
    });
    CX.d(CC, "isEdge", function () {
      return CB.b;
    });
    CX.d(CC, "isWebkit", function () {
      return CB.g;
    });
    CX.d(CC, "isIqiyiApp", function () {
      return CB.e;
    });
    CX.d(CC, "isChrome", function () {
      return CB.a;
    });
    CX.d(CC, "isSafari", function () {
      return CB.f;
    });
    var CG = CX(2);
    CX.d(CC, "log", function () {
      return CG.b;
    });
    CX.d(CC, "table", function () {
      return CG.c;
    });
    CX.d(CC, "clear", function () {
      return CG.a;
    });
    var Cb = CX(19);
    CX.d(CC, "isMobile", function () {
      return Cb.a;
    });
    var CT = CX(5);
    CX.d(CC, "versionMap", function () {
      return CT.a;
    });
    var Ci = CX(6);
    CX.d(CC, "isMac", function () {
      return Ci.d;
    });
    CX.d(CC, "isIpad", function () {
      return Ci.b;
    });
    CX.d(CC, "isIphone", function () {
      return Ci.c;
    });
    CX.d(CC, "isAndroid", function () {
      return Ci.a;
    });
    CX.d(CC, "isWindows", function () {
      return Ci.e;
    });
    var Cu = new CN.a({
      checkers: [Cl.erudaChecker, Cl.elementIdChecker, Cl.regToStringChecker, Cl.functionToStringChecker, Cl.depRegToStringChecker, Cl.dateToStringChecker, Cl.performanceChecker, Cl.debuggerChecker]
    });
    CC.default = Cu;
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return CN;
    });
    var CN = {};
    for (var Cl = 0, CO = (CX(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; Cl < CO.length; Cl++) {
      var CB = CO[Cl].split("/");
      var CG = CB[0];
      var CB = CB[1];
      CN[CG] = CB;
    }
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "d", function () {
      return CN;
    });
    CX.d(CC, "b", function () {
      return Cl;
    });
    CX.d(CC, "c", function () {
      return CO;
    });
    CX.d(CC, "a", function () {
      return CB;
    });
    CX.d(CC, "e", function () {
      return CG;
    });
    var CC = CX(3);
    var CN = /macintosh/i.test(CC.b);
    var Cl = /ipad/i.test(CC.b) || CN && navigator.maxTouchPoints > 1;
    var CO = /iphone/i.test(CC.b);
    var CB = /android/i.test(CC.b);
    var CG = /windows/i.test(CC.b);
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return CO;
    });
    var CN = this && this.__awaiter || function (CG, Cb, CT, Ci) {
      return new (CT = CT || Promise)(function (Cu, CU) {
        function Cv(Cq) {
          try {
            CE(Ci.next(Cq));
          } catch (CM) {
            CU(CM);
          }
        }
        function CK(Cq) {
          try {
            CE(Ci.throw(Cq));
          } catch (CM) {
            CU(CM);
          }
        }
        function CE(Cq) {
          var CM;
          if (Cq.done) {
            Cu(Cq.value);
          } else {
            ((CM = Cq.value) instanceof CT ? CM : new CT(function (CJ) {
              CJ(CM);
            })).then(Cv, CK);
          }
        }
        CE((Ci = Ci.apply(CG, Cb || [])).next());
      });
    };
    var Cl = this && this.__generator || function (CG, Cb) {
      var CT;
      var Ci;
      var Cu;
      var CU = {
        label: 0,
        sent: function () {
          if (Cu[0] & 1) {
            throw Cu[1];
          }
          return Cu[1];
        },
        trys: [],
        ops: []
      };
      var Cv = {
        next: CK(0),
        throw: CK(1),
        return: CK(2)
      };
      if (typeof Symbol == "function") {
        Cv[Symbol.iterator] = function () {
          return this;
        };
      }
      return Cv;
      function CK(CE) {
        return function (Cq) {
          var CM = [CE, Cq];
          if (CT) {
            throw new TypeError("Generator is already executing.");
          }
          while (CU) {
            try {
              CT = 1;
              if (Ci && (Cu = CM[0] & 2 ? Ci.return : CM[0] ? Ci.throw || ((Cu = Ci.return) && Cu.call(Ci), 0) : Ci.next) && !(Cu = Cu.call(Ci, CM[1])).done) {
                return Cu;
              }
              Ci = 0;
              switch ((CM = Cu ? [CM[0] & 2, Cu.value] : CM)[0]) {
                case 0:
                case 1:
                  Cu = CM;
                  break;
                case 4:
                  CU.label++;
                  return {
                    value: CM[1],
                    done: false
                  };
                case 5:
                  CU.label++;
                  Ci = CM[1];
                  CM = [0];
                  continue;
                case 7:
                  CM = CU.ops.pop();
                  CU.trys.pop();
                  continue;
                default:
                  if (!(Cu = (Cu = CU.trys).length > 0 && Cu[Cu.length - 1]) && (CM[0] === 6 || CM[0] === 2)) {
                    CU = 0;
                    continue;
                  }
                  if (CM[0] === 3 && (!Cu || CM[1] > Cu[0] && CM[1] < Cu[3])) {
                    CU.label = CM[1];
                  } else if (CM[0] === 6 && CU.label < Cu[1]) {
                    CU.label = Cu[1];
                    Cu = CM;
                  } else {
                    if (!Cu || !(CU.label < Cu[2])) {
                      if (Cu[2]) {
                        CU.ops.pop();
                      }
                      CU.trys.pop();
                      continue;
                    }
                    CU.label = Cu[2];
                    CU.ops.push(CM);
                  }
              }
              CM = Cb.call(CG, CU);
            } catch (CJ) {
              CM = [6, CJ];
              Ci = 0;
            } finally {
              CT = Cu = 0;
            }
          }
          if (CM[0] & 5) {
            throw CM[1];
          }
          return {
            value: CM[0] ? CM[1] : undefined,
            done: true
          };
        };
      }
    };
    CB.prototype.launch = function () {
      if (this._detectLoopDelay <= 0) {
        this.setDetectDelay(500);
      }
      if (this._detectLoopStopped) {
        this._detectLoopStopped = false;
        this._detectLoop();
      }
    };
    CB.prototype.stop = function () {
      if (!this._detectLoopStopped) {
        this._detectLoopStopped = true;
        clearTimeout(this._timer);
      }
    };
    CB.prototype.isLaunch = function () {
      return !this._detectLoopStopped;
    };
    CB.prototype.setDetectDelay = function (CG) {
      this._detectLoopDelay = CG;
    };
    CB.prototype.addListener = function (CG) {
      this._listeners.push(CG);
    };
    CB.prototype.removeListener = function (CG) {
      this._listeners = this._listeners.filter(function (Cb) {
        return Cb !== CG;
      });
    };
    CB.prototype._broadcast = function (CG) {
      for (var Cb = 0, CT = this._listeners; Cb < CT.length; Cb++) {
        var Ci = CT[Cb];
        try {
          Ci(CG.isOpen, CG);
        } catch (Cu) {}
      }
    };
    CB.prototype._detectLoop = function () {
      return CN(this, undefined, undefined, function () {
        var CG;
        var Cb;
        var CT;
        var Ci;
        var Cu;
        var CU = this;
        return Cl(this, function (Cv) {
          switch (Cv.label) {
            case 0:
              CG = false;
              Cb = "";
              CT = 0;
              Ci = this._checkers;
              Cv.label = 1;
            case 1:
              if (CT < Ci.length) {
                return [4, (Cu = Ci[CT]).isEnable()];
              } else {
                return [3, 6];
              }
            case 2:
              if (Cv.sent()) {
                Cb = Cu.name;
                return [4, Cu.isOpen()];
              } else {
                return [3, 4];
              }
            case 3:
              CG = Cv.sent();
              Cv.label = 4;
            case 4:
              if (CG) {
                return [3, 6];
              }
              Cv.label = 5;
            case 5:
              CT++;
              return [3, 1];
            case 6:
              if (CG != this._isOpen) {
                this._isOpen = CG;
                this._broadcast({
                  isOpen: CG,
                  checkerName: Cb
                });
              }
              if (this._detectLoopDelay > 0) {
                this._timer = setTimeout(function () {
                  return CU._detectLoop();
                }, this._detectLoopDelay);
              } else {
                this.stop();
              }
              return [2];
          }
        });
      });
    };
    var CO = CB;
    function CB(CG) {
      CG = CG.checkers;
      this._listeners = [];
      this._isOpen = false;
      this._detectLoopStopped = true;
      this._detectLoopDelay = 500;
      this._checkers = CG.slice();
    }
  }, function (C9, CC, CX) {
    'use strict';

    Object.defineProperty(CC, "__esModule", {
      value: true
    });
    var CN = CX(9);
    CX.d(CC, "depRegToStringChecker", function () {
      return CN.a;
    });
    var Cl = CX(12);
    CX.d(CC, "elementIdChecker", function () {
      return Cl.a;
    });
    var CO = CX(13);
    CX.d(CC, "functionToStringChecker", function () {
      return CO.a;
    });
    var CB = CX(14);
    CX.d(CC, "regToStringChecker", function () {
      return CB.a;
    });
    var CG = CX(15);
    CX.d(CC, "debuggerChecker", function () {
      return CG.a;
    });
    var Cb = CX(16);
    CX.d(CC, "dateToStringChecker", function () {
      return Cb.a;
    });
    var CT = CX(17);
    CX.d(CC, "performanceChecker", function () {
      return CT.a;
    });
    var Ci = CX(18);
    CX.d(CC, "erudaChecker", function () {
      return Ci.a;
    });
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return Ci;
    });
    var CN = CX(1);
    var Cl = CX(2);
    var CO = CX(0);
    var CB = this && this.__awaiter || function (Cu, CU, Cv, CK) {
      return new (Cv = Cv || Promise)(function (CE, Cq) {
        function CM(Cs) {
          try {
            CR(CK.next(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CJ(Cs) {
          try {
            CR(CK.throw(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CR(Cs) {
          var Cw;
          if (Cs.done) {
            CE(Cs.value);
          } else {
            ((Cw = Cs.value) instanceof Cv ? Cw : new Cv(function (Cf) {
              Cf(Cw);
            })).then(CM, CJ);
          }
        }
        CR((CK = CK.apply(Cu, CU || [])).next());
      });
    };
    var CG = this && this.__generator || function (Cu, CU) {
      var Cv;
      var CK;
      var CE;
      var Cq = {
        label: 0,
        sent: function () {
          if (CE[0] & 1) {
            throw CE[1];
          }
          return CE[1];
        },
        trys: [],
        ops: []
      };
      var CM = {
        next: CJ(0),
        throw: CJ(1),
        return: CJ(2)
      };
      if (typeof Symbol == "function") {
        CM[Symbol.iterator] = function () {
          return this;
        };
      }
      return CM;
      function CJ(CR) {
        return function (Cs) {
          var Cw = [CR, Cs];
          if (Cv) {
            throw new TypeError("Generator is already executing.");
          }
          while (Cq) {
            try {
              Cv = 1;
              if (CK && (CE = Cw[0] & 2 ? CK.return : Cw[0] ? CK.throw || ((CE = CK.return) && CE.call(CK), 0) : CK.next) && !(CE = CE.call(CK, Cw[1])).done) {
                return CE;
              }
              CK = 0;
              switch ((Cw = CE ? [Cw[0] & 2, CE.value] : Cw)[0]) {
                case 0:
                case 1:
                  CE = Cw;
                  break;
                case 4:
                  Cq.label++;
                  return {
                    value: Cw[1],
                    done: false
                  };
                case 5:
                  Cq.label++;
                  CK = Cw[1];
                  Cw = [0];
                  continue;
                case 7:
                  Cw = Cq.ops.pop();
                  Cq.trys.pop();
                  continue;
                default:
                  if (!(CE = (CE = Cq.trys).length > 0 && CE[CE.length - 1]) && (Cw[0] === 6 || Cw[0] === 2)) {
                    Cq = 0;
                    continue;
                  }
                  if (Cw[0] === 3 && (!CE || Cw[1] > CE[0] && Cw[1] < CE[3])) {
                    Cq.label = Cw[1];
                  } else if (Cw[0] === 6 && Cq.label < CE[1]) {
                    Cq.label = CE[1];
                    CE = Cw;
                  } else {
                    if (!CE || !(Cq.label < CE[2])) {
                      if (CE[2]) {
                        Cq.ops.pop();
                      }
                      Cq.trys.pop();
                      continue;
                    }
                    Cq.label = CE[2];
                    Cq.ops.push(Cw);
                  }
              }
              Cw = CU.call(Cu, Cq);
            } catch (Cf) {
              Cw = [6, Cf];
              CK = 0;
            } finally {
              Cv = CE = 0;
            }
          }
          if (Cw[0] & 5) {
            throw Cw[1];
          }
          return {
            value: Cw[0] ? Cw[1] : undefined,
            done: true
          };
        };
      }
    };
    var Cb = / /;
    var CT = false;
    Cb.toString = function () {
      CT = true;
      return Ci.name;
    };
    var Ci = {
      name: "dep-reg-to-string",
      isOpen: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            CT = false;
            Object(Cl.c)({
              dep: Cb
            });
            Object(Cl.a)();
            return [2, CT];
          });
        });
      },
      isEnable: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            return [2, Object(CO.b)({
              includes: [true],
              excludes: [CN.c, CN.d]
            })];
          });
        });
      }
    };
  }, function (C9, CC) {
    var CX = function () {
      return this;
    }();
    try {
      CX = CX || Function("return this")() || (0, eval)("this");
    } catch (CN) {
      if (typeof window == "object") {
        CX = window;
      }
    }
    C9.exports = CX;
  }, function (C9, CC, CX) {
    var CN;
    if ((CC = typeof (CN = function () {
      var Cl = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
      function CO(Cu) {
        var CU = Cu.replace(/^v/, "").replace(/\+.*$/, "");
        var Cv = function (CE, Cq) {
          if (CE.indexOf(Cq) === -1) {
            return CE.length;
          } else {
            return CE.indexOf(Cq);
          }
        }(CU, "-");
        var CK = CU.substring(0, Cv).split(".");
        CK.push(CU.substring(Cv + 1));
        return CK;
      }
      function CB(Cu) {
        if (isNaN(Number(Cu))) {
          return Cu;
        } else {
          return Number(Cu);
        }
      }
      function CG(Cu) {
        if (typeof Cu != "string") {
          throw new TypeError("Invalid argument expected string");
        }
        if (!Cl.test(Cu)) {
          throw new Error("Invalid argument not valid semver ('" + Cu + "' received)");
        }
      }
      function Cb(Cu, CU) {
        [Cu, CU].forEach(CG);
        for (var Cv = CO(Cu), CK = CO(CU), CE = 0; CE < Math.max(Cv.length - 1, CK.length - 1); CE++) {
          var Cq = parseInt(Cv[CE] || 0, 10);
          var CM = parseInt(CK[CE] || 0, 10);
          if (Cq > CM) {
            return 1;
          }
          if (CM > Cq) {
            return -1;
          }
        }
        var CJ = Cv[Cv.length - 1];
        var CR = CK[CK.length - 1];
        if (CJ && CR) {
          var Cs = CJ.split(".").map(CB);
          var Cw = CR.split(".").map(CB);
          for (CE = 0; CE < Math.max(Cs.length, Cw.length); CE++) {
            if (Cs[CE] === undefined || typeof Cw[CE] == "string" && typeof Cs[CE] == "number") {
              return -1;
            }
            if (Cw[CE] === undefined || typeof Cs[CE] == "string" && typeof Cw[CE] == "number") {
              return 1;
            }
            if (Cs[CE] > Cw[CE]) {
              return 1;
            }
            if (Cw[CE] > Cs[CE]) {
              return -1;
            }
          }
        } else if (CJ || CR) {
          if (CJ) {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      }
      var CT = [">", ">=", "=", "<", "<="];
      var Ci = {
        ">": [1],
        ">=": [0, 1],
        "=": [0],
        "<=": [-1, 0],
        "<": [-1]
      };
      Cb.validate = function (Cu) {
        return typeof Cu == "string" && Cl.test(Cu);
      };
      Cb.compare = function (Cu, CU, Cv) {
        (function (CE) {
          if (typeof CE != "string") {
            throw new TypeError("Invalid operator type, expected string but got " + typeof CE);
          }
          if (CT.indexOf(CE) === -1) {
            throw new TypeError("Invalid operator, expected one of " + CT.join("|"));
          }
        })(Cv);
        var CK = Cb(Cu, CU);
        return Ci[Cv].indexOf(CK) > -1;
      };
      return Cb;
    }) == "function" ? CN.apply(CC, []) : CN) !== undefined) {
      C9.exports = CC;
    }
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return Ci;
    });
    var CN = CX(1);
    var Cl = CX(2);
    var CO = CX(0);
    var CC = CX(3);
    var CB = this && this.__awaiter || function (Cu, CU, Cv, CK) {
      return new (Cv = Cv || Promise)(function (CE, Cq) {
        function CM(Cs) {
          try {
            CR(CK.next(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CJ(Cs) {
          try {
            CR(CK.throw(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CR(Cs) {
          var Cw;
          if (Cs.done) {
            CE(Cs.value);
          } else {
            ((Cw = Cs.value) instanceof Cv ? Cw : new Cv(function (Cf) {
              Cf(Cw);
            })).then(CM, CJ);
          }
        }
        CR((CK = CK.apply(Cu, CU || [])).next());
      });
    };
    var CG = this && this.__generator || function (Cu, CU) {
      var Cv;
      var CK;
      var CE;
      var Cq = {
        label: 0,
        sent: function () {
          if (CE[0] & 1) {
            throw CE[1];
          }
          return CE[1];
        },
        trys: [],
        ops: []
      };
      var CM = {
        next: CJ(0),
        throw: CJ(1),
        return: CJ(2)
      };
      if (typeof Symbol == "function") {
        CM[Symbol.iterator] = function () {
          return this;
        };
      }
      return CM;
      function CJ(CR) {
        return function (Cs) {
          var Cw = [CR, Cs];
          if (Cv) {
            throw new TypeError("Generator is already executing.");
          }
          while (Cq) {
            try {
              Cv = 1;
              if (CK && (CE = Cw[0] & 2 ? CK.return : Cw[0] ? CK.throw || ((CE = CK.return) && CE.call(CK), 0) : CK.next) && !(CE = CE.call(CK, Cw[1])).done) {
                return CE;
              }
              CK = 0;
              switch ((Cw = CE ? [Cw[0] & 2, CE.value] : Cw)[0]) {
                case 0:
                case 1:
                  CE = Cw;
                  break;
                case 4:
                  Cq.label++;
                  return {
                    value: Cw[1],
                    done: false
                  };
                case 5:
                  Cq.label++;
                  CK = Cw[1];
                  Cw = [0];
                  continue;
                case 7:
                  Cw = Cq.ops.pop();
                  Cq.trys.pop();
                  continue;
                default:
                  if (!(CE = (CE = Cq.trys).length > 0 && CE[CE.length - 1]) && (Cw[0] === 6 || Cw[0] === 2)) {
                    Cq = 0;
                    continue;
                  }
                  if (Cw[0] === 3 && (!CE || Cw[1] > CE[0] && Cw[1] < CE[3])) {
                    Cq.label = Cw[1];
                  } else if (Cw[0] === 6 && Cq.label < CE[1]) {
                    Cq.label = CE[1];
                    CE = Cw;
                  } else {
                    if (!CE || !(Cq.label < CE[2])) {
                      if (CE[2]) {
                        Cq.ops.pop();
                      }
                      Cq.trys.pop();
                      continue;
                    }
                    Cq.label = CE[2];
                    Cq.ops.push(Cw);
                  }
              }
              Cw = CU.call(Cu, Cq);
            } catch (Cf) {
              Cw = [6, Cf];
              CK = 0;
            } finally {
              Cv = CE = 0;
            }
          }
          if (Cw[0] & 5) {
            throw Cw[1];
          }
          return {
            value: Cw[0] ? Cw[1] : undefined,
            done: true
          };
        };
      }
    };
    var Cb = Object(CC.a)("div");
    var CT = false;
    Object.defineProperty(Cb, "id", {
      get: function () {
        CT = true;
        return Ci.name;
      },
      configurable: true
    });
    var Ci = {
      name: "element-id",
      isOpen: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            CT = false;
            Object(Cl.b)(Cb);
            Object(Cl.a)();
            return [2, CT];
          });
        });
      },
      isEnable: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            return [2, Object(CO.b)({
              includes: [true],
              excludes: [CN.d, CN.b, CN.c]
            })];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return Cu;
    });
    var CN = CX(1);
    var Cl = CX(2);
    var CO = CX(6);
    var CB = CX(0);
    var CG = this && this.__awaiter || function (CU, Cv, CK, CE) {
      return new (CK = CK || Promise)(function (Cq, CM) {
        function CJ(Cw) {
          try {
            Cs(CE.next(Cw));
          } catch (Cf) {
            CM(Cf);
          }
        }
        function CR(Cw) {
          try {
            Cs(CE.throw(Cw));
          } catch (Cf) {
            CM(Cf);
          }
        }
        function Cs(Cw) {
          var Cf;
          if (Cw.done) {
            Cq(Cw.value);
          } else {
            ((Cf = Cw.value) instanceof CK ? Cf : new CK(function (CW) {
              CW(Cf);
            })).then(CJ, CR);
          }
        }
        Cs((CE = CE.apply(CU, Cv || [])).next());
      });
    };
    var Cb = this && this.__generator || function (CU, Cv) {
      var CK;
      var CE;
      var Cq;
      var CM = {
        label: 0,
        sent: function () {
          if (Cq[0] & 1) {
            throw Cq[1];
          }
          return Cq[1];
        },
        trys: [],
        ops: []
      };
      var CJ = {
        next: CR(0),
        throw: CR(1),
        return: CR(2)
      };
      if (typeof Symbol == "function") {
        CJ[Symbol.iterator] = function () {
          return this;
        };
      }
      return CJ;
      function CR(Cs) {
        return function (Cw) {
          var Cf = [Cs, Cw];
          if (CK) {
            throw new TypeError("Generator is already executing.");
          }
          while (CM) {
            try {
              CK = 1;
              if (CE && (Cq = Cf[0] & 2 ? CE.return : Cf[0] ? CE.throw || ((Cq = CE.return) && Cq.call(CE), 0) : CE.next) && !(Cq = Cq.call(CE, Cf[1])).done) {
                return Cq;
              }
              CE = 0;
              switch ((Cf = Cq ? [Cf[0] & 2, Cq.value] : Cf)[0]) {
                case 0:
                case 1:
                  Cq = Cf;
                  break;
                case 4:
                  CM.label++;
                  return {
                    value: Cf[1],
                    done: false
                  };
                case 5:
                  CM.label++;
                  CE = Cf[1];
                  Cf = [0];
                  continue;
                case 7:
                  Cf = CM.ops.pop();
                  CM.trys.pop();
                  continue;
                default:
                  if (!(Cq = (Cq = CM.trys).length > 0 && Cq[Cq.length - 1]) && (Cf[0] === 6 || Cf[0] === 2)) {
                    CM = 0;
                    continue;
                  }
                  if (Cf[0] === 3 && (!Cq || Cf[1] > Cq[0] && Cf[1] < Cq[3])) {
                    CM.label = Cf[1];
                  } else if (Cf[0] === 6 && CM.label < Cq[1]) {
                    CM.label = Cq[1];
                    Cq = Cf;
                  } else {
                    if (!Cq || !(CM.label < Cq[2])) {
                      if (Cq[2]) {
                        CM.ops.pop();
                      }
                      CM.trys.pop();
                      continue;
                    }
                    CM.label = Cq[2];
                    CM.ops.push(Cf);
                  }
              }
              Cf = Cv.call(CU, CM);
            } catch (CW) {
              Cf = [6, CW];
              CE = 0;
            } finally {
              CK = Cq = 0;
            }
          }
          if (Cf[0] & 5) {
            throw Cf[1];
          }
          return {
            value: Cf[0] ? Cf[1] : undefined,
            done: true
          };
        };
      }
    };
    function CT() {}
    var Ci = 0;
    CT.toString = function () {
      Ci++;
      return "";
    };
    var Cu = {
      name: "function-to-string",
      isOpen: function () {
        return CG(this, undefined, undefined, function () {
          return Cb(this, function (CU) {
            Ci = 0;
            Object(Cl.b)(CT);
            Object(Cl.a)();
            return [2, Ci === 2];
          });
        });
      },
      isEnable: function () {
        return CG(this, undefined, undefined, function () {
          return Cb(this, function (CU) {
            return [2, Object(CB.b)({
              includes: [true],
              excludes: [CN.e, CN.c, (CO.b || CO.c) && CN.a]
            })];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return Ci;
    });
    var CN = CX(2);
    var Cl = CX(1);
    var CO = CX(0);
    var CB = this && this.__awaiter || function (Cu, CU, Cv, CK) {
      return new (Cv = Cv || Promise)(function (CE, Cq) {
        function CM(Cs) {
          try {
            CR(CK.next(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CJ(Cs) {
          try {
            CR(CK.throw(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CR(Cs) {
          var Cw;
          if (Cs.done) {
            CE(Cs.value);
          } else {
            ((Cw = Cs.value) instanceof Cv ? Cw : new Cv(function (Cf) {
              Cf(Cw);
            })).then(CM, CJ);
          }
        }
        CR((CK = CK.apply(Cu, CU || [])).next());
      });
    };
    var CG = this && this.__generator || function (Cu, CU) {
      var Cv;
      var CK;
      var CE;
      var Cq = {
        label: 0,
        sent: function () {
          if (CE[0] & 1) {
            throw CE[1];
          }
          return CE[1];
        },
        trys: [],
        ops: []
      };
      var CM = {
        next: CJ(0),
        throw: CJ(1),
        return: CJ(2)
      };
      if (typeof Symbol == "function") {
        CM[Symbol.iterator] = function () {
          return this;
        };
      }
      return CM;
      function CJ(CR) {
        return function (Cs) {
          var Cw = [CR, Cs];
          if (Cv) {
            throw new TypeError("Generator is already executing.");
          }
          while (Cq) {
            try {
              Cv = 1;
              if (CK && (CE = Cw[0] & 2 ? CK.return : Cw[0] ? CK.throw || ((CE = CK.return) && CE.call(CK), 0) : CK.next) && !(CE = CE.call(CK, Cw[1])).done) {
                return CE;
              }
              CK = 0;
              switch ((Cw = CE ? [Cw[0] & 2, CE.value] : Cw)[0]) {
                case 0:
                case 1:
                  CE = Cw;
                  break;
                case 4:
                  Cq.label++;
                  return {
                    value: Cw[1],
                    done: false
                  };
                case 5:
                  Cq.label++;
                  CK = Cw[1];
                  Cw = [0];
                  continue;
                case 7:
                  Cw = Cq.ops.pop();
                  Cq.trys.pop();
                  continue;
                default:
                  if (!(CE = (CE = Cq.trys).length > 0 && CE[CE.length - 1]) && (Cw[0] === 6 || Cw[0] === 2)) {
                    Cq = 0;
                    continue;
                  }
                  if (Cw[0] === 3 && (!CE || Cw[1] > CE[0] && Cw[1] < CE[3])) {
                    Cq.label = Cw[1];
                  } else if (Cw[0] === 6 && Cq.label < CE[1]) {
                    Cq.label = CE[1];
                    CE = Cw;
                  } else {
                    if (!CE || !(Cq.label < CE[2])) {
                      if (CE[2]) {
                        Cq.ops.pop();
                      }
                      Cq.trys.pop();
                      continue;
                    }
                    Cq.label = CE[2];
                    Cq.ops.push(Cw);
                  }
              }
              Cw = CU.call(Cu, Cq);
            } catch (Cf) {
              Cw = [6, Cf];
              CK = 0;
            } finally {
              Cv = CE = 0;
            }
          }
          if (Cw[0] & 5) {
            throw Cw[1];
          }
          return {
            value: Cw[0] ? Cw[1] : undefined,
            done: true
          };
        };
      }
    };
    var Cb = / /;
    var CT = false;
    Cb.toString = function () {
      CT = true;
      return Ci.name;
    };
    var Ci = {
      name: "reg-to-string",
      isOpen: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            CT = false;
            Object(CN.b)(Cb);
            Object(CN.a)();
            return [2, CT];
          });
        });
      },
      isEnable: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            return [2, Object(CO.b)({
              includes: [true],
              excludes: [Cl.g]
            })];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return CB;
    });
    var CN = CX(0);
    var Cl = this && this.__awaiter || function (CG, Cb, CT, Ci) {
      return new (CT = CT || Promise)(function (Cu, CU) {
        function Cv(Cq) {
          try {
            CE(Ci.next(Cq));
          } catch (CM) {
            CU(CM);
          }
        }
        function CK(Cq) {
          try {
            CE(Ci.throw(Cq));
          } catch (CM) {
            CU(CM);
          }
        }
        function CE(Cq) {
          var CM;
          if (Cq.done) {
            Cu(Cq.value);
          } else {
            ((CM = Cq.value) instanceof CT ? CM : new CT(function (CJ) {
              CJ(CM);
            })).then(Cv, CK);
          }
        }
        CE((Ci = Ci.apply(CG, Cb || [])).next());
      });
    };
    var CO = this && this.__generator || function (CG, Cb) {
      var CT;
      var Ci;
      var Cu;
      var CU = {
        label: 0,
        sent: function () {
          if (Cu[0] & 1) {
            throw Cu[1];
          }
          return Cu[1];
        },
        trys: [],
        ops: []
      };
      var Cv = {
        next: CK(0),
        throw: CK(1),
        return: CK(2)
      };
      if (typeof Symbol == "function") {
        Cv[Symbol.iterator] = function () {
          return this;
        };
      }
      return Cv;
      function CK(CE) {
        return function (Cq) {
          var CM = [CE, Cq];
          if (CT) {
            throw new TypeError("Generator is already executing.");
          }
          while (CU) {
            try {
              CT = 1;
              if (Ci && (Cu = CM[0] & 2 ? Ci.return : CM[0] ? Ci.throw || ((Cu = Ci.return) && Cu.call(Ci), 0) : Ci.next) && !(Cu = Cu.call(Ci, CM[1])).done) {
                return Cu;
              }
              Ci = 0;
              switch ((CM = Cu ? [CM[0] & 2, Cu.value] : CM)[0]) {
                case 0:
                case 1:
                  Cu = CM;
                  break;
                case 4:
                  CU.label++;
                  return {
                    value: CM[1],
                    done: false
                  };
                case 5:
                  CU.label++;
                  Ci = CM[1];
                  CM = [0];
                  continue;
                case 7:
                  CM = CU.ops.pop();
                  CU.trys.pop();
                  continue;
                default:
                  if (!(Cu = (Cu = CU.trys).length > 0 && Cu[Cu.length - 1]) && (CM[0] === 6 || CM[0] === 2)) {
                    CU = 0;
                    continue;
                  }
                  if (CM[0] === 3 && (!Cu || CM[1] > Cu[0] && CM[1] < Cu[3])) {
                    CU.label = CM[1];
                  } else if (CM[0] === 6 && CU.label < Cu[1]) {
                    CU.label = Cu[1];
                    Cu = CM;
                  } else {
                    if (!Cu || !(CU.label < Cu[2])) {
                      if (Cu[2]) {
                        CU.ops.pop();
                      }
                      CU.trys.pop();
                      continue;
                    }
                    CU.label = Cu[2];
                    CU.ops.push(CM);
                  }
              }
              CM = Cb.call(CG, CU);
            } catch (CJ) {
              CM = [6, CJ];
              Ci = 0;
            } finally {
              CT = Cu = 0;
            }
          }
          if (CM[0] & 5) {
            throw CM[1];
          }
          return {
            value: CM[0] ? CM[1] : undefined,
            done: true
          };
        };
      }
    };
    var CB = {
      name: "debugger-checker",
      isOpen: function () {
        return Cl(this, undefined, undefined, function () {
          var CG;
          return CO(this, function (Cb) {
            CG = Object(CN.c)();
            (function () {}).constructor("debugger")();
            return [2, Object(CN.c)() - CG > 100];
          });
        });
      },
      isEnable: function () {
        return Cl(this, undefined, undefined, function () {
          return CO(this, function (CG) {
            return [2, true];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return Cu;
    });
    var CN = CX(1);
    var Cl = CX(2);
    var CO = CX(0);
    var CB = CX(4);
    var CG = this && this.__awaiter || function (CU, Cv, CK, CE) {
      return new (CK = CK || Promise)(function (Cq, CM) {
        function CJ(Cw) {
          try {
            Cs(CE.next(Cw));
          } catch (Cf) {
            CM(Cf);
          }
        }
        function CR(Cw) {
          try {
            Cs(CE.throw(Cw));
          } catch (Cf) {
            CM(Cf);
          }
        }
        function Cs(Cw) {
          var Cf;
          if (Cw.done) {
            Cq(Cw.value);
          } else {
            ((Cf = Cw.value) instanceof CK ? Cf : new CK(function (CW) {
              CW(Cf);
            })).then(CJ, CR);
          }
        }
        Cs((CE = CE.apply(CU, Cv || [])).next());
      });
    };
    var Cb = this && this.__generator || function (CU, Cv) {
      var CK;
      var CE;
      var Cq;
      var CM = {
        label: 0,
        sent: function () {
          if (Cq[0] & 1) {
            throw Cq[1];
          }
          return Cq[1];
        },
        trys: [],
        ops: []
      };
      var CJ = {
        next: CR(0),
        throw: CR(1),
        return: CR(2)
      };
      if (typeof Symbol == "function") {
        CJ[Symbol.iterator] = function () {
          return this;
        };
      }
      return CJ;
      function CR(Cs) {
        return function (Cw) {
          var Cf = [Cs, Cw];
          if (CK) {
            throw new TypeError("Generator is already executing.");
          }
          while (CM) {
            try {
              CK = 1;
              if (CE && (Cq = Cf[0] & 2 ? CE.return : Cf[0] ? CE.throw || ((Cq = CE.return) && Cq.call(CE), 0) : CE.next) && !(Cq = Cq.call(CE, Cf[1])).done) {
                return Cq;
              }
              CE = 0;
              switch ((Cf = Cq ? [Cf[0] & 2, Cq.value] : Cf)[0]) {
                case 0:
                case 1:
                  Cq = Cf;
                  break;
                case 4:
                  CM.label++;
                  return {
                    value: Cf[1],
                    done: false
                  };
                case 5:
                  CM.label++;
                  CE = Cf[1];
                  Cf = [0];
                  continue;
                case 7:
                  Cf = CM.ops.pop();
                  CM.trys.pop();
                  continue;
                default:
                  if (!(Cq = (Cq = CM.trys).length > 0 && Cq[Cq.length - 1]) && (Cf[0] === 6 || Cf[0] === 2)) {
                    CM = 0;
                    continue;
                  }
                  if (Cf[0] === 3 && (!Cq || Cf[1] > Cq[0] && Cf[1] < Cq[3])) {
                    CM.label = Cf[1];
                  } else if (Cf[0] === 6 && CM.label < Cq[1]) {
                    CM.label = Cq[1];
                    Cq = Cf;
                  } else {
                    if (!Cq || !(CM.label < Cq[2])) {
                      if (Cq[2]) {
                        CM.ops.pop();
                      }
                      CM.trys.pop();
                      continue;
                    }
                    CM.label = Cq[2];
                    CM.ops.push(Cf);
                  }
              }
              Cf = Cv.call(CU, CM);
            } catch (CW) {
              Cf = [6, CW];
              CE = 0;
            } finally {
              CK = Cq = 0;
            }
          }
          if (Cf[0] & 5) {
            throw Cf[1];
          }
          return {
            value: Cf[0] ? Cf[1] : undefined,
            done: true
          };
        };
      }
    };
    var CT = new Date();
    var Ci = 0;
    CT.toString = function () {
      Ci++;
      return "";
    };
    var Cu = {
      name: "date-to-string",
      isOpen: function () {
        return CG(this, undefined, undefined, function () {
          return Cb(this, function (CU) {
            Ci = 0;
            Object(Cl.b)(CT);
            Object(Cl.a)();
            return [2, Ci === 2];
          });
        });
      },
      isEnable: function () {
        return CG(this, undefined, undefined, function () {
          return Cb(this, function (CU) {
            return [2, Object(CO.b)({
              includes: [CN.a],
              excludes: [(CB.isIpad || CB.isIphone) && CN.a]
            })];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return Ci;
    });
    var CN = CX(1);
    var Cl = CX(2);
    var CO = CX(0);
    var CB = this && this.__awaiter || function (Cu, CU, Cv, CK) {
      return new (Cv = Cv || Promise)(function (CE, Cq) {
        function CM(Cs) {
          try {
            CR(CK.next(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CJ(Cs) {
          try {
            CR(CK.throw(Cs));
          } catch (Cw) {
            Cq(Cw);
          }
        }
        function CR(Cs) {
          var Cw;
          if (Cs.done) {
            CE(Cs.value);
          } else {
            ((Cw = Cs.value) instanceof Cv ? Cw : new Cv(function (Cf) {
              Cf(Cw);
            })).then(CM, CJ);
          }
        }
        CR((CK = CK.apply(Cu, CU || [])).next());
      });
    };
    var CG = this && this.__generator || function (Cu, CU) {
      var Cv;
      var CK;
      var CE;
      var Cq = {
        label: 0,
        sent: function () {
          if (CE[0] & 1) {
            throw CE[1];
          }
          return CE[1];
        },
        trys: [],
        ops: []
      };
      var CM = {
        next: CJ(0),
        throw: CJ(1),
        return: CJ(2)
      };
      if (typeof Symbol == "function") {
        CM[Symbol.iterator] = function () {
          return this;
        };
      }
      return CM;
      function CJ(CR) {
        return function (Cs) {
          var Cw = [CR, Cs];
          if (Cv) {
            throw new TypeError("Generator is already executing.");
          }
          while (Cq) {
            try {
              Cv = 1;
              if (CK && (CE = Cw[0] & 2 ? CK.return : Cw[0] ? CK.throw || ((CE = CK.return) && CE.call(CK), 0) : CK.next) && !(CE = CE.call(CK, Cw[1])).done) {
                return CE;
              }
              CK = 0;
              switch ((Cw = CE ? [Cw[0] & 2, CE.value] : Cw)[0]) {
                case 0:
                case 1:
                  CE = Cw;
                  break;
                case 4:
                  Cq.label++;
                  return {
                    value: Cw[1],
                    done: false
                  };
                case 5:
                  Cq.label++;
                  CK = Cw[1];
                  Cw = [0];
                  continue;
                case 7:
                  Cw = Cq.ops.pop();
                  Cq.trys.pop();
                  continue;
                default:
                  if (!(CE = (CE = Cq.trys).length > 0 && CE[CE.length - 1]) && (Cw[0] === 6 || Cw[0] === 2)) {
                    Cq = 0;
                    continue;
                  }
                  if (Cw[0] === 3 && (!CE || Cw[1] > CE[0] && Cw[1] < CE[3])) {
                    Cq.label = Cw[1];
                  } else if (Cw[0] === 6 && Cq.label < CE[1]) {
                    Cq.label = CE[1];
                    CE = Cw;
                  } else {
                    if (!CE || !(Cq.label < CE[2])) {
                      if (CE[2]) {
                        Cq.ops.pop();
                      }
                      Cq.trys.pop();
                      continue;
                    }
                    Cq.label = CE[2];
                    Cq.ops.push(Cw);
                  }
              }
              Cw = CU.call(Cu, Cq);
            } catch (Cf) {
              Cw = [6, Cf];
              CK = 0;
            } finally {
              Cv = CE = 0;
            }
          }
          if (Cw[0] & 5) {
            throw Cw[1];
          }
          return {
            value: Cw[0] ? Cw[1] : undefined,
            done: true
          };
        };
      }
    };
    var Cb = null;
    var CT = 0;
    var Ci = {
      name: "performance",
      isOpen: function () {
        return CB(this, undefined, undefined, function () {
          var Cu;
          var CU;
          return CG(this, function (Cv) {
            if (Cb === null) {
              Cb = function () {
                var CE = function () {
                  var CJ = {};
                  for (var CR = 0; CR < 500; CR++) {
                    CJ[`${CR}`] = `${CR}`;
                  }
                  return CJ;
                }();
                var Cq = [];
                for (var CM = 0; CM < 50; CM++) {
                  Cq.push(CE);
                }
                return Cq;
              }();
            }
            CK = Object(CO.c)();
            Object(Cl.c)(Cb);
            Cu = Object(CO.c)() - CK;
            CK = Object(CO.c)();
            Object(Cl.b)(Cb);
            CU = Object(CO.c)() - CK;
            CT = Math.max(CT, CU);
            Object(Cl.a)();
            if (Cu == 0 || CT === 0) {
              return [2, false];
            } else {
              return [2, CT * 10 < Cu];
            }
            var CK;
          });
        });
      },
      isEnable: function () {
        return CB(this, undefined, undefined, function () {
          return CG(this, function (Cu) {
            return [2, Object(CO.b)({
              includes: [CN.a],
              excludes: []
            })];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return CO;
    });
    var CN = this && this.__awaiter || function (CB, CG, Cb, CT) {
      return new (Cb = Cb || Promise)(function (Ci, Cu) {
        function CU(CE) {
          try {
            CK(CT.next(CE));
          } catch (Cq) {
            Cu(Cq);
          }
        }
        function Cv(CE) {
          try {
            CK(CT.throw(CE));
          } catch (Cq) {
            Cu(Cq);
          }
        }
        function CK(CE) {
          var Cq;
          if (CE.done) {
            Ci(CE.value);
          } else {
            ((Cq = CE.value) instanceof Cb ? Cq : new Cb(function (CM) {
              CM(Cq);
            })).then(CU, Cv);
          }
        }
        CK((CT = CT.apply(CB, CG || [])).next());
      });
    };
    var Cl = this && this.__generator || function (CB, CG) {
      var Cb;
      var CT;
      var Ci;
      var Cu = {
        label: 0,
        sent: function () {
          if (Ci[0] & 1) {
            throw Ci[1];
          }
          return Ci[1];
        },
        trys: [],
        ops: []
      };
      var CU = {
        next: Cv(0),
        throw: Cv(1),
        return: Cv(2)
      };
      if (typeof Symbol == "function") {
        CU[Symbol.iterator] = function () {
          return this;
        };
      }
      return CU;
      function Cv(CK) {
        return function (CE) {
          var Cq = [CK, CE];
          if (Cb) {
            throw new TypeError("Generator is already executing.");
          }
          while (Cu) {
            try {
              Cb = 1;
              if (CT && (Ci = Cq[0] & 2 ? CT.return : Cq[0] ? CT.throw || ((Ci = CT.return) && Ci.call(CT), 0) : CT.next) && !(Ci = Ci.call(CT, Cq[1])).done) {
                return Ci;
              }
              CT = 0;
              switch ((Cq = Ci ? [Cq[0] & 2, Ci.value] : Cq)[0]) {
                case 0:
                case 1:
                  Ci = Cq;
                  break;
                case 4:
                  Cu.label++;
                  return {
                    value: Cq[1],
                    done: false
                  };
                case 5:
                  Cu.label++;
                  CT = Cq[1];
                  Cq = [0];
                  continue;
                case 7:
                  Cq = Cu.ops.pop();
                  Cu.trys.pop();
                  continue;
                default:
                  if (!(Ci = (Ci = Cu.trys).length > 0 && Ci[Ci.length - 1]) && (Cq[0] === 6 || Cq[0] === 2)) {
                    Cu = 0;
                    continue;
                  }
                  if (Cq[0] === 3 && (!Ci || Cq[1] > Ci[0] && Cq[1] < Ci[3])) {
                    Cu.label = Cq[1];
                  } else if (Cq[0] === 6 && Cu.label < Ci[1]) {
                    Cu.label = Ci[1];
                    Ci = Cq;
                  } else {
                    if (!Ci || !(Cu.label < Ci[2])) {
                      if (Ci[2]) {
                        Cu.ops.pop();
                      }
                      Cu.trys.pop();
                      continue;
                    }
                    Cu.label = Ci[2];
                    Cu.ops.push(Cq);
                  }
              }
              Cq = CG.call(CB, Cu);
            } catch (CM) {
              Cq = [6, CM];
              CT = 0;
            } finally {
              Cb = Ci = 0;
            }
          }
          if (Cq[0] & 5) {
            throw Cq[1];
          }
          return {
            value: Cq[0] ? Cq[1] : undefined,
            done: true
          };
        };
      }
    };
    var CO = {
      name: "eruda",
      isOpen: function () {
        var CB;
        return CN(this, undefined, undefined, function () {
          return Cl(this, function (CG) {
            if (typeof eruda != "undefined") {
              return [2, ((CB = eruda?._devTools) == null ? undefined : CB._isShow) === true];
            } else {
              return [2, false];
            }
          });
        });
      },
      isEnable: function () {
        return CN(this, undefined, undefined, function () {
          return Cl(this, function (CB) {
            return [2, true];
          });
        });
      }
    };
  }, function (C9, CC, CX) {
    'use strict';

    CX.d(CC, "a", function () {
      return CN;
    });
    var CC = CX(3);
    var CN = /mobile/i.test(CC.b);
  }];
  C8 = {};
  C6.m = C7;
  C6.c = C8;
  C6.d = function (C9, CC, CX) {
    if (!C6.o(C9, CC)) {
      Object.defineProperty(C9, CC, {
        configurable: false,
        enumerable: true,
        get: CX
      });
    }
  };
  C6.n = function (C9) {
    var CC = C9 && C9.__esModule ? function () {
      return C9.default;
    } : function () {
      return C9;
    };
    C6.d(CC, "a", CC);
    return CC;
  };
  C6.o = function (C9, CC) {
    return Object.prototype.hasOwnProperty.call(C9, CC);
  };
  C6.p = "";
  return C6(C6.s = 4);
  function C6(C9) {
    var CC;
    return (C8[C9] || (CC = C8[C9] = {
      i: C9,
      l: false,
      exports: {}
    }, C7[C9].call(CC.exports, CC, CC.exports, C6), CC.l = true, CC)).exports;
  }
  var C7;
  var C8;
});
(function (C6) {
  if ((typeof exports != "object" || typeof module == "undefined") && typeof define == "function" && define.amd) {
    define(C6);
  } else {
    C6();
  }
})(function () {
  'use strict';

  function C6(Cb) {
    var CT = this.constructor;
    return this.then(function (Ci) {
      return CT.resolve(Cb()).then(function () {
        return Ci;
      });
    }, function (Ci) {
      return CT.resolve(Cb()).then(function () {
        return CT.reject(Ci);
      });
    });
  }
  var C7 = setTimeout;
  function C8() {}
  function C9(Cb) {
    if (!(this instanceof C9)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if (typeof Cb != "function") {
      throw new TypeError("not a function");
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    CB(Cb, this);
  }
  function CC(Cb, CT) {
    while (Cb._state === 3) {
      Cb = Cb._value;
    }
    if (Cb._state === 0) {
      Cb._deferreds.push(CT);
    } else {
      Cb._handled = true;
      C9._immediateFn(function () {
        var Ci;
        var Cu = Cb._state === 1 ? CT.onFulfilled : CT.onRejected;
        if (Cu === null) {
          (Cb._state === 1 ? CX : CN)(CT.promise, Cb._value);
        } else {
          try {
            Ci = Cu(Cb._value);
          } catch (CU) {
            CN(CT.promise, CU);
            return;
          }
          CX(CT.promise, Ci);
        }
      });
    }
  }
  function CX(Cb, CT) {
    try {
      if (CT === Cb) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (CT && (typeof CT == "object" || typeof CT == "function")) {
        var Ci = CT.then;
        if (CT instanceof C9) {
          Cb._state = 3;
          Cb._value = CT;
          Cl(Cb);
          return;
        }
        if (typeof Ci == "function") {
          CB((Cu = Ci, CU = CT, function () {
            Cu.apply(CU, arguments);
          }), Cb);
          return;
        }
      }
      Cb._state = 1;
      Cb._value = CT;
      Cl(Cb);
    } catch (Cv) {
      CN(Cb, Cv);
    }
    var Cu;
    var CU;
  }
  function CN(Cb, CT) {
    Cb._state = 2;
    Cb._value = CT;
    Cl(Cb);
  }
  function Cl(Cb) {
    if (Cb._state === 2 && Cb._deferreds.length === 0) {
      C9._immediateFn(function () {
        if (!Cb._handled) {
          C9._unhandledRejectionFn(Cb._value);
        }
      });
    }
    for (var CT = 0, Ci = Cb._deferreds.length; CT < Ci; CT++) {
      CC(Cb, Cb._deferreds[CT]);
    }
    Cb._deferreds = null;
  }
  function CO(Cb, CT, Ci) {
    this.onFulfilled = typeof Cb == "function" ? Cb : null;
    this.onRejected = typeof CT == "function" ? CT : null;
    this.promise = Ci;
  }
  function CB(Cb, CT) {
    var Ci = false;
    try {
      Cb(function (Cu) {
        if (!Ci) {
          Ci = true;
          CX(CT, Cu);
        }
      }, function (Cu) {
        if (!Ci) {
          Ci = true;
          CN(CT, Cu);
        }
      });
    } catch (Cu) {
      if (!Ci) {
        Ci = true;
        CN(CT, Cu);
      }
    }
  }
  C9.prototype.catch = function (Cb) {
    return this.then(null, Cb);
  };
  C9.prototype.then = function (Cb, CT) {
    var Ci = new this.constructor(C8);
    CC(this, new CO(Cb, CT, Ci));
    return Ci;
  };
  C9.prototype.finally = C6;
  C9.all = function (Cb) {
    return new C9(function (CT, Ci) {
      if (!Cb || Cb.length === undefined) {
        throw new TypeError("Promise.all accepts an array");
      }
      var Cu = Array.prototype.slice.call(Cb);
      if (Cu.length === 0) {
        return CT([]);
      }
      var CU = Cu.length;
      for (var Cv = 0; Cv < Cu.length; Cv++) {
        (function CK(CE, Cq) {
          try {
            if (Cq && (typeof Cq == "object" || typeof Cq == "function")) {
              var CM = Cq.then;
              if (typeof CM == "function") {
                CM.call(Cq, function (CJ) {
                  CK(CE, CJ);
                }, Ci);
                return;
              }
            }
            Cu[CE] = Cq;
            if (--CU == 0) {
              CT(Cu);
            }
          } catch (CJ) {
            Ci(CJ);
          }
        })(Cv, Cu[Cv]);
      }
    });
  };
  C9.resolve = function (Cb) {
    if (Cb && typeof Cb == "object" && Cb.constructor === C9) {
      return Cb;
    } else {
      return new C9(function (CT) {
        CT(Cb);
      });
    }
  };
  C9.reject = function (Cb) {
    return new C9(function (CT, Ci) {
      Ci(Cb);
    });
  };
  C9.race = function (Cb) {
    return new C9(function (CT, Ci) {
      for (var Cu = 0, CU = Cb.length; Cu < CU; Cu++) {
        Cb[Cu].then(CT, Ci);
      }
    });
  };
  C9._immediateFn = typeof setImmediate == "function" ? function (Cb) {
    setImmediate(Cb);
  } : function (Cb) {
    C7(Cb, 0);
  };
  C9._unhandledRejectionFn = function (Cb) {
    if (typeof console != "undefined" && console) {
      console.warn("Possible Unhandled Promise Rejection:", Cb);
    }
  };
  var CG = function () {
    if (typeof self != "undefined") {
      return self;
    }
    if (typeof window != "undefined") {
      return window;
    }
    if (typeof global != "undefined") {
      return global;
    }
    throw new Error("unable to locate global object");
  }();
  if ("Promise" in CG) {
    CG.Promise.prototype.finally ||= C6;
  } else {
    CG.Promise = C9;
  }
});
const O = new MobileDetect(window.navigator.userAgent);
const B = new URLSearchParams(window.location.search);
if (!O.match("playstation|xbox|smart-tv|smarttv") && O.mobile() === null && !B.get("_debug")) {
}
(function (C6, C7) {
  if (typeof exports == "object") {
    module.exports = exports = C7();
  } else if (typeof define == "function" && define.amd) {
    define([], C7);
  } else {
    C6.CryptoJS = C7();
  }
})(this, function () {
  var C6;
  var C7;
  var C8;
  var C9;
  var CC;
  var CX;
  var CN;
  var Cl;
  var CO;
  var CB;
  var CG;
  var Cb;
  var CT;
  var Ci;
  var Cu;
  var CU;
  var Cv;
  var CK;
  var CE;
  var Cq;
  var CM;
  var CJ;
  var CR;
  var Cs;
  var Cw;
  var Cf;
  var CW;
  var CP;
  var Cn;
  var Cy;
  var CD;
  var Cp;
  var CQ;
  var Cj;
  var CY;
  var Cz;
  var Cg;
  var CH;
  var Cx;
  var Ca;
  var CS;
  var Cd;
  var CL;
  var Cm;
  var Co = function (Nu) {
    var NU;
    if (typeof window != "undefined" && window.crypto) {
      NU = window.crypto;
    }
    if (typeof self != "undefined" && self.crypto) {
      NU = self.crypto;
    }
    if (!(NU = !(NU = !(NU = typeof globalThis != "undefined" && globalThis.crypto ? globalThis.crypto : NU) && typeof window != "undefined" && window.msCrypto ? window.msCrypto : NU) && typeof global != "undefined" && global.crypto ? global.crypto : NU) && typeof require == "function") {
      try {
        NU = require("crypto");
      } catch (Nn) {}
    }
    var Nv = Object.create || function (Ny) {
      NK.prototype = Ny;
      Ny = new NK();
      NK.prototype = null;
      return Ny;
    };
    function NK() {}
    var NE = {};
    var Nq = NE.lib = {};
    var NM = Nq.Base = {
      extend: function (Ny) {
        var ND = Nv(this);
        if (Ny) {
          ND.mixIn(Ny);
        }
        if (!ND.hasOwnProperty("init") || this.init === ND.init) {
          ND.init = function () {
            ND.$super.init.apply(this, arguments);
          };
        }
        (ND.init.prototype = ND).$super = this;
        return ND;
      },
      create: function () {
        var Ny = this.extend();
        Ny.init.apply(Ny, arguments);
        return Ny;
      },
      init: function () {},
      mixIn: function (Ny) {
        for (var ND in Ny) {
          if (Ny.hasOwnProperty(ND)) {
            this[ND] = Ny[ND];
          }
        }
        if (Ny.hasOwnProperty("toString")) {
          this.toString = Ny.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    };
    var NJ = Nq.WordArray = NM.extend({
      init: function (Ny, ND) {
        Ny = this.words = Ny || [];
        this.sigBytes = ND ?? Ny.length * 4;
      },
      toString: function (Ny) {
        return (Ny || Ns).stringify(this);
      },
      concat: function (Ny) {
        var ND = this.words;
        var Np = Ny.words;
        var Nt = this.sigBytes;
        var NQ = Ny.sigBytes;
        this.clamp();
        if (Nt % 4) {
          for (var Nj = 0; Nj < NQ; Nj++) {
            var NY = Np[Nj >>> 2] >>> 24 - Nj % 4 * 8 & 255;
            ND[Nt + Nj >>> 2] |= NY << 24 - (Nt + Nj) % 4 * 8;
          }
        } else {
          for (var Nz = 0; Nz < NQ; Nz += 4) {
            ND[Nt + Nz >>> 2] = Np[Nz >>> 2];
          }
        }
        this.sigBytes += NQ;
        return this;
      },
      clamp: function () {
        var Ny = this.words;
        var ND = this.sigBytes;
        Ny[ND >>> 2] &= 4294967295 << 32 - ND % 4 * 8;
        Ny.length = Nu.ceil(ND / 4);
      },
      clone: function () {
        var Ny = NM.clone.call(this);
        Ny.words = this.words.slice(0);
        return Ny;
      },
      random: function (Ny) {
        var ND = [];
        for (var Np = 0; Np < Ny; Np += 4) {
          ND.push(function () {
            if (NU) {
              if (typeof NU.getRandomValues == "function") {
                try {
                  return NU.getRandomValues(new Uint32Array(1))[0];
                } catch (Nt) {}
              }
              if (typeof NU.randomBytes == "function") {
                try {
                  return NU.randomBytes(4).readInt32LE();
                } catch (NQ) {}
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          }());
        }
        return new NJ.init(ND, Ny);
      }
    });
    var NR = NE.enc = {};
    var Ns = NR.Hex = {
      stringify: function (Ny) {
        var ND = Ny.words;
        for (var Np = Ny.sigBytes, Nt = [], NQ = 0; NQ < Np; NQ++) {
          var Nj = ND[NQ >>> 2] >>> 24 - NQ % 4 * 8 & 255;
          Nt.push((Nj >>> 4).toString(16));
          Nt.push((Nj & 15).toString(16));
        }
        return Nt.join("");
      },
      parse: function (Ny) {
        for (var ND = Ny.length, Np = [], Nt = 0; Nt < ND; Nt += 2) {
          Np[Nt >>> 3] |= parseInt(Ny.substr(Nt, 2), 16) << 24 - Nt % 8 * 4;
        }
        return new NJ.init(Np, ND / 2);
      }
    };
    var Nw = NR.Latin1 = {
      stringify: function (Ny) {
        var ND = Ny.words;
        for (var Np = Ny.sigBytes, Nt = [], NQ = 0; NQ < Np; NQ++) {
          var Nj = ND[NQ >>> 2] >>> 24 - NQ % 4 * 8 & 255;
          Nt.push(String.fromCharCode(Nj));
        }
        return Nt.join("");
      },
      parse: function (Ny) {
        for (var ND = Ny.length, Np = [], Nt = 0; Nt < ND; Nt++) {
          Np[Nt >>> 2] |= (Ny.charCodeAt(Nt) & 255) << 24 - Nt % 4 * 8;
        }
        return new NJ.init(Np, ND);
      }
    };
    var Nf = NR.Utf8 = {
      stringify: function (Ny) {
        try {
          return decodeURIComponent(escape(Nw.stringify(Ny)));
        } catch (ND) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function (Ny) {
        return Nw.parse(unescape(encodeURIComponent(Ny)));
      }
    };
    var NW = Nq.BufferedBlockAlgorithm = NM.extend({
      reset: function () {
        this._data = new NJ.init();
        this._nDataBytes = 0;
      },
      _append: function (Ny) {
        if (typeof Ny == "string") {
          Ny = Nf.parse(Ny);
        }
        this._data.concat(Ny);
        this._nDataBytes += Ny.sigBytes;
      },
      _process: function (Ny) {
        var ND;
        var Np = this._data;
        var Nt = Np.words;
        var NQ = Np.sigBytes;
        var Nj = this.blockSize;
        var NY = NQ / (Nj * 4);
        var Nz = (NY = Ny ? Nu.ceil(NY) : Nu.max((NY | 0) - this._minBufferSize, 0)) * Nj;
        var Ny = Nu.min(Nz * 4, NQ);
        if (Nz) {
          for (var Ng = 0; Ng < Nz; Ng += Nj) {
            this._doProcessBlock(Nt, Ng);
          }
          ND = Nt.splice(0, Nz);
          Np.sigBytes -= Ny;
        }
        return new NJ.init(ND, Ny);
      },
      clone: function () {
        var Ny = NM.clone.call(this);
        Ny._data = this._data.clone();
        return Ny;
      },
      _minBufferSize: 0
    });
    Nq.Hasher = NW.extend({
      cfg: NM.extend(),
      init: function (Ny) {
        this.cfg = this.cfg.extend(Ny);
        this.reset();
      },
      reset: function () {
        NW.reset.call(this);
        this._doReset();
      },
      update: function (Ny) {
        this._append(Ny);
        this._process();
        return this;
      },
      finalize: function (Ny) {
        if (Ny) {
          this._append(Ny);
        }
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (Ny) {
        return function (ND, Np) {
          return new Ny.init(Np).finalize(ND);
        };
      },
      _createHmacHelper: function (Ny) {
        return function (ND, Np) {
          return new NP.HMAC.init(Ny, Np).finalize(ND);
        };
      }
    });
    var NP = NE.algo = {};
    return NE;
  }(Math);
  Cc = (Ch = Co).lib;
  C6 = Cc.Base;
  C7 = Cc.WordArray;
  (Cc = Ch.x64 = {}).Word = C6.extend({
    init: function (Nu, NU) {
      this.high = Nu;
      this.low = NU;
    }
  });
  Cc.WordArray = C6.extend({
    init: function (Nu, NU) {
      Nu = this.words = Nu || [];
      this.sigBytes = NU ?? Nu.length * 8;
    },
    toX32: function () {
      var Nu = this.words;
      for (var NU = Nu.length, Nv = [], NK = 0; NK < NU; NK++) {
        var NE = Nu[NK];
        Nv.push(NE.high);
        Nv.push(NE.low);
      }
      return C7.create(Nv, this.sigBytes);
    },
    clone: function () {
      var Nu = C6.clone.call(this);
      var NU = Nu.words = this.words.slice(0);
      for (var Nv = NU.length, NK = 0; NK < Nv; NK++) {
        NU[NK] = NU[NK].clone();
      }
      return Nu;
    }
  });
  if (typeof ArrayBuffer == "function") {
    Ch = Co.lib.WordArray;
    C8 = Ch.init;
    (Ch.init = function (Nu) {
      if ((Nu = (Nu = Nu instanceof ArrayBuffer ? new Uint8Array(Nu) : Nu) instanceof Int8Array || typeof Uint8ClampedArray != "undefined" && Nu instanceof Uint8ClampedArray || Nu instanceof Int16Array || Nu instanceof Uint16Array || Nu instanceof Int32Array || Nu instanceof Uint32Array || Nu instanceof Float32Array || Nu instanceof Float64Array ? new Uint8Array(Nu.buffer, Nu.byteOffset, Nu.byteLength) : Nu) instanceof Uint8Array) {
        for (var NU = Nu.byteLength, Nv = [], NK = 0; NK < NU; NK++) {
          Nv[NK >>> 2] |= Nu[NK] << 24 - NK % 4 * 8;
        }
        C8.call(this, Nv, NU);
      } else {
        C8.apply(this, arguments);
      }
    }).prototype = Ch;
  }
  var Cc = Co;
  var CZ = Cc.lib.WordArray;
  function CF(Nu) {
    return Nu << 8 & 4278255360 | Nu >>> 8 & 16711935;
  }
  (Cc = Cc.enc).Utf16 = Cc.Utf16BE = {
    stringify: function (Nu) {
      var NU = Nu.words;
      for (var Nv = Nu.sigBytes, NK = [], NE = 0; NE < Nv; NE += 2) {
        var Nq = NU[NE >>> 2] >>> 16 - NE % 4 * 8 & 65535;
        NK.push(String.fromCharCode(Nq));
      }
      return NK.join("");
    },
    parse: function (Nu) {
      for (var NU = Nu.length, Nv = [], NK = 0; NK < NU; NK++) {
        Nv[NK >>> 1] |= Nu.charCodeAt(NK) << 16 - NK % 2 * 16;
      }
      return CZ.create(Nv, NU * 2);
    }
  };
  Cc.Utf16LE = {
    stringify: function (Nu) {
      var NU = Nu.words;
      for (var Nv = Nu.sigBytes, NK = [], NE = 0; NE < Nv; NE += 2) {
        var Nq = CF(NU[NE >>> 2] >>> 16 - NE % 4 * 8 & 65535);
        NK.push(String.fromCharCode(Nq));
      }
      return NK.join("");
    },
    parse: function (Nu) {
      for (var NU = Nu.length, Nv = [], NK = 0; NK < NU; NK++) {
        Nv[NK >>> 1] |= CF(Nu.charCodeAt(NK) << 16 - NK % 2 * 16);
      }
      return CZ.create(Nv, NU * 2);
    }
  };
  C9 = (Ch = Co).lib.WordArray;
  Ch.enc.Base64 = {
    stringify: function (Nu) {
      var NU = Nu.words;
      for (var Nv = Nu.sigBytes, NK = this._map, NE = (Nu.clamp(), []), Nq = 0; Nq < Nv; Nq += 3) {
        var NM = (NU[Nq >>> 2] >>> 24 - Nq % 4 * 8 & 255) << 16 | (NU[Nq + 1 >>> 2] >>> 24 - (Nq + 1) % 4 * 8 & 255) << 8 | NU[Nq + 2 >>> 2] >>> 24 - (Nq + 2) % 4 * 8 & 255;
        for (var NJ = 0; NJ < 4 && Nq + NJ * 0.75 < Nv; NJ++) {
          NE.push(NK.charAt(NM >>> (3 - NJ) * 6 & 63));
        }
      }
      var NR = NK.charAt(64);
      if (NR) {
        while (NE.length % 4) {
          NE.push(NR);
        }
      }
      return NE.join("");
    },
    parse: function (Nu) {
      var NU = Nu.length;
      var Nv = this._map;
      if (!(NK = this._reverseMap)) {
        var NK = this._reverseMap = [];
        for (var NE = 0; NE < Nv.length; NE++) {
          NK[Nv.charCodeAt(NE)] = NE;
        }
      }
      var Nq;
      var NM;
      var NJ = Nv.charAt(64);
      if (NJ && (NJ = Nu.indexOf(NJ)) !== -1) {
        NU = NJ;
      }
      var NR = Nu;
      for (var Ns = NU, Nw = NK, Nf = [], NW = 0, NP = 0; NP < Ns; NP++) {
        if (NP % 4) {
          Nq = Nw[NR.charCodeAt(NP - 1)] << NP % 4 * 2;
          NM = Nw[NR.charCodeAt(NP)] >>> 6 - NP % 4 * 2;
          Nf[NW >>> 2] |= (Nq | NM) << 24 - NW % 4 * 8;
          NW++;
        }
      }
      return C9.create(Nf, NW);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  CC = (Cc = Co).lib.WordArray;
  Cc.enc.Base64url = {
    stringify: function (Nu, NU = true) {
      var Nv = Nu.words;
      for (var NK = Nu.sigBytes, NE = NU ? this._safe_map : this._map, Nq = (Nu.clamp(), []), NM = 0; NM < NK; NM += 3) {
        var NJ = (Nv[NM >>> 2] >>> 24 - NM % 4 * 8 & 255) << 16 | (Nv[NM + 1 >>> 2] >>> 24 - (NM + 1) % 4 * 8 & 255) << 8 | Nv[NM + 2 >>> 2] >>> 24 - (NM + 2) % 4 * 8 & 255;
        for (var NR = 0; NR < 4 && NM + NR * 0.75 < NK; NR++) {
          Nq.push(NE.charAt(NJ >>> (3 - NR) * 6 & 63));
        }
      }
      var Ns = NE.charAt(64);
      if (Ns) {
        while (Nq.length % 4) {
          Nq.push(Ns);
        }
      }
      return Nq.join("");
    },
    parse: function (Nu, NU = true) {
      var Nv = Nu.length;
      var NK = NU ? this._safe_map : this._map;
      if (!(NE = this._reverseMap)) {
        var NE = this._reverseMap = [];
        for (var Nq = 0; Nq < NK.length; Nq++) {
          NE[NK.charCodeAt(Nq)] = Nq;
        }
      }
      var NM;
      var NJ;
      var NU = NK.charAt(64);
      if (NU && (NU = Nu.indexOf(NU)) !== -1) {
        Nv = NU;
      }
      var NR = Nu;
      for (var Ns = Nv, Nw = NE, Nf = [], NW = 0, NP = 0; NP < Ns; NP++) {
        if (NP % 4) {
          NM = Nw[NR.charCodeAt(NP - 1)] << NP % 4 * 2;
          NJ = Nw[NR.charCodeAt(NP)] >>> 6 - NP % 4 * 2;
          Nf[NW >>> 2] |= (NM | NJ) << 24 - NW % 4 * 8;
          NW++;
        }
      }
      return CC.create(Nf, NW);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  };
  var CV = Math;
  var Ch = Co;
  var CA = (Cc = Ch.lib).WordArray;
  var CI = Cc.Hasher;
  var Cc = Ch.algo;
  var Cr = [];
  for (var Ck = 0; Ck < 64; Ck++) {
    Cr[Ck] = CV.abs(CV.sin(Ck + 1)) * 4294967296 | 0;
  }
  function X0(Nu, NU, Nv, NK, NE, Nq, NM) {
    Nu = Nu + (NU & Nv | ~NU & NK) + NE + NM;
    return (Nu << Nq | Nu >>> 32 - Nq) + NU;
  }
  function X1(Nu, NU, Nv, NK, NE, Nq, NM) {
    Nu = Nu + (NU & NK | Nv & ~NK) + NE + NM;
    return (Nu << Nq | Nu >>> 32 - Nq) + NU;
  }
  function X2(Nu, NU, Nv, NK, NE, Nq, NM) {
    Nu = Nu + (NU ^ Nv ^ NK) + NE + NM;
    return (Nu << Nq | Nu >>> 32 - Nq) + NU;
  }
  function X3(Nu, NU, Nv, NK, NE, Nq, NM) {
    Nu = Nu + (Nv ^ (NU | ~NK)) + NE + NM;
    return (Nu << Nq | Nu >>> 32 - Nq) + NU;
  }
  Cc = Cc.MD5 = CI.extend({
    _doReset: function () {
      this._hash = new CA.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function (Nu, NU) {
      for (var Nv = 0; Nv < 16; Nv++) {
        var NK = NU + Nv;
        var NE = Nu[NK];
        Nu[NK] = (NE << 8 | NE >>> 24) & 16711935 | (NE << 24 | NE >>> 8) & 4278255360;
      }
      var Nq = this._hash.words;
      var NM = Nu[NU + 0];
      var NJ = Nu[NU + 1];
      var NR = Nu[NU + 2];
      var Ns = Nu[NU + 3];
      var Nw = Nu[NU + 4];
      var Nf = Nu[NU + 5];
      var NW = Nu[NU + 6];
      var NP = Nu[NU + 7];
      var Nn = Nu[NU + 8];
      var Ny = Nu[NU + 9];
      var ND = Nu[NU + 10];
      var Np = Nu[NU + 11];
      var Nt = Nu[NU + 12];
      var NQ = Nu[NU + 13];
      var Nj = Nu[NU + 14];
      var NY = Nu[NU + 15];
      var Nz = X0(Nq[0], Nx = Nq[1], NH = Nq[2], Ng = Nq[3], NM, 7, Cr[0]);
      var Ng = X0(Ng, Nz, Nx, NH, NJ, 12, Cr[1]);
      var NH = X0(NH, Ng, Nz, Nx, NR, 17, Cr[2]);
      var Nx = X0(Nx, NH, Ng, Nz, Ns, 22, Cr[3]);
      Nz = X0(Nz, Nx, NH, Ng, Nw, 7, Cr[4]);
      Ng = X0(Ng, Nz, Nx, NH, Nf, 12, Cr[5]);
      NH = X0(NH, Ng, Nz, Nx, NW, 17, Cr[6]);
      Nx = X0(Nx, NH, Ng, Nz, NP, 22, Cr[7]);
      Nz = X0(Nz, Nx, NH, Ng, Nn, 7, Cr[8]);
      Ng = X0(Ng, Nz, Nx, NH, Ny, 12, Cr[9]);
      NH = X0(NH, Ng, Nz, Nx, ND, 17, Cr[10]);
      Nx = X0(Nx, NH, Ng, Nz, Np, 22, Cr[11]);
      Nz = X0(Nz, Nx, NH, Ng, Nt, 7, Cr[12]);
      Ng = X0(Ng, Nz, Nx, NH, NQ, 12, Cr[13]);
      NH = X0(NH, Ng, Nz, Nx, Nj, 17, Cr[14]);
      Nz = X1(Nz, Nx = X0(Nx, NH, Ng, Nz, NY, 22, Cr[15]), NH, Ng, NJ, 5, Cr[16]);
      Ng = X1(Ng, Nz, Nx, NH, NW, 9, Cr[17]);
      NH = X1(NH, Ng, Nz, Nx, Np, 14, Cr[18]);
      Nx = X1(Nx, NH, Ng, Nz, NM, 20, Cr[19]);
      Nz = X1(Nz, Nx, NH, Ng, Nf, 5, Cr[20]);
      Ng = X1(Ng, Nz, Nx, NH, ND, 9, Cr[21]);
      NH = X1(NH, Ng, Nz, Nx, NY, 14, Cr[22]);
      Nx = X1(Nx, NH, Ng, Nz, Nw, 20, Cr[23]);
      Nz = X1(Nz, Nx, NH, Ng, Ny, 5, Cr[24]);
      Ng = X1(Ng, Nz, Nx, NH, Nj, 9, Cr[25]);
      NH = X1(NH, Ng, Nz, Nx, Ns, 14, Cr[26]);
      Nx = X1(Nx, NH, Ng, Nz, Nn, 20, Cr[27]);
      Nz = X1(Nz, Nx, NH, Ng, NQ, 5, Cr[28]);
      Ng = X1(Ng, Nz, Nx, NH, NR, 9, Cr[29]);
      NH = X1(NH, Ng, Nz, Nx, NP, 14, Cr[30]);
      Nz = X2(Nz, Nx = X1(Nx, NH, Ng, Nz, Nt, 20, Cr[31]), NH, Ng, Nf, 4, Cr[32]);
      Ng = X2(Ng, Nz, Nx, NH, Nn, 11, Cr[33]);
      NH = X2(NH, Ng, Nz, Nx, Np, 16, Cr[34]);
      Nx = X2(Nx, NH, Ng, Nz, Nj, 23, Cr[35]);
      Nz = X2(Nz, Nx, NH, Ng, NJ, 4, Cr[36]);
      Ng = X2(Ng, Nz, Nx, NH, Nw, 11, Cr[37]);
      NH = X2(NH, Ng, Nz, Nx, NP, 16, Cr[38]);
      Nx = X2(Nx, NH, Ng, Nz, ND, 23, Cr[39]);
      Nz = X2(Nz, Nx, NH, Ng, NQ, 4, Cr[40]);
      Ng = X2(Ng, Nz, Nx, NH, NM, 11, Cr[41]);
      NH = X2(NH, Ng, Nz, Nx, Ns, 16, Cr[42]);
      Nx = X2(Nx, NH, Ng, Nz, NW, 23, Cr[43]);
      Nz = X2(Nz, Nx, NH, Ng, Ny, 4, Cr[44]);
      Ng = X2(Ng, Nz, Nx, NH, Nt, 11, Cr[45]);
      NH = X2(NH, Ng, Nz, Nx, NY, 16, Cr[46]);
      Nz = X3(Nz, Nx = X2(Nx, NH, Ng, Nz, NR, 23, Cr[47]), NH, Ng, NM, 6, Cr[48]);
      Ng = X3(Ng, Nz, Nx, NH, NP, 10, Cr[49]);
      NH = X3(NH, Ng, Nz, Nx, Nj, 15, Cr[50]);
      Nx = X3(Nx, NH, Ng, Nz, Nf, 21, Cr[51]);
      Nz = X3(Nz, Nx, NH, Ng, Nt, 6, Cr[52]);
      Ng = X3(Ng, Nz, Nx, NH, Ns, 10, Cr[53]);
      NH = X3(NH, Ng, Nz, Nx, ND, 15, Cr[54]);
      Nx = X3(Nx, NH, Ng, Nz, NJ, 21, Cr[55]);
      Nz = X3(Nz, Nx, NH, Ng, Nn, 6, Cr[56]);
      Ng = X3(Ng, Nz, Nx, NH, NY, 10, Cr[57]);
      NH = X3(NH, Ng, Nz, Nx, NW, 15, Cr[58]);
      Nx = X3(Nx, NH, Ng, Nz, NQ, 21, Cr[59]);
      Nz = X3(Nz, Nx, NH, Ng, Nw, 6, Cr[60]);
      Ng = X3(Ng, Nz, Nx, NH, Np, 10, Cr[61]);
      NH = X3(NH, Ng, Nz, Nx, NR, 15, Cr[62]);
      Nx = X3(Nx, NH, Ng, Nz, Ny, 21, Cr[63]);
      Nq[0] = Nq[0] + Nz | 0;
      Nq[1] = Nq[1] + Nx | 0;
      Nq[2] = Nq[2] + NH | 0;
      Nq[3] = Nq[3] + Ng | 0;
    },
    _doFinalize: function () {
      var Nu = this._data;
      var NU = Nu.words;
      var Nv = this._nDataBytes * 8;
      var NK = Nu.sigBytes * 8;
      NU[NK >>> 5] |= 128 << 24 - NK % 32;
      var NE = CV.floor(Nv / 4294967296);
      NU[15 + (64 + NK >>> 9 << 4)] = (NE << 8 | NE >>> 24) & 16711935 | (NE << 24 | NE >>> 8) & 4278255360;
      NU[14 + (64 + NK >>> 9 << 4)] = (Nv << 8 | Nv >>> 24) & 16711935 | (Nv << 24 | Nv >>> 8) & 4278255360;
      Nu.sigBytes = (NU.length + 1) * 4;
      this._process();
      var NE = this._hash;
      var Nq = NE.words;
      for (var NM = 0; NM < 4; NM++) {
        var NJ = Nq[NM];
        Nq[NM] = (NJ << 8 | NJ >>> 24) & 16711935 | (NJ << 24 | NJ >>> 8) & 4278255360;
      }
      return NE;
    },
    clone: function () {
      var Nu = CI.clone.call(this);
      Nu._hash = this._hash.clone();
      return Nu;
    }
  });
  Ch.MD5 = CI._createHelper(Cc);
  Ch.HmacMD5 = CI._createHmacHelper(Cc);
  Cc = (Ch = Co).lib;
  CX = Cc.WordArray;
  CN = Cc.Hasher;
  Cc = Ch.algo;
  Cl = [];
  Cc = Cc.SHA1 = CN.extend({
    _doReset: function () {
      this._hash = new CX.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (Nu, NU) {
      var Nv = this._hash.words;
      var NK = Nv[0];
      var NE = Nv[1];
      var Nq = Nv[2];
      var NM = Nv[3];
      var NJ = Nv[4];
      for (var NR = 0; NR < 80; NR++) {
        Cl[NR] = NR < 16 ? Nu[NU + NR] | 0 : (Ns = Cl[NR - 3] ^ Cl[NR - 8] ^ Cl[NR - 14] ^ Cl[NR - 16]) << 1 | Ns >>> 31;
        var Ns = (NK << 5 | NK >>> 27) + NJ + Cl[NR];
        Ns += NR < 20 ? 1518500249 + (NE & Nq | ~NE & NM) : NR < 40 ? 1859775393 + (NE ^ Nq ^ NM) : NR < 60 ? (NE & Nq | NE & NM | Nq & NM) - 1894007588 : (NE ^ Nq ^ NM) - 899497514;
        NJ = NM;
        NM = Nq;
        Nq = NE << 30 | NE >>> 2;
        NE = NK;
        NK = Ns;
      }
      Nv[0] = Nv[0] + NK | 0;
      Nv[1] = Nv[1] + NE | 0;
      Nv[2] = Nv[2] + Nq | 0;
      Nv[3] = Nv[3] + NM | 0;
      Nv[4] = Nv[4] + NJ | 0;
    },
    _doFinalize: function () {
      var Nu = this._data;
      var NU = Nu.words;
      var Nv = this._nDataBytes * 8;
      var NK = Nu.sigBytes * 8;
      NU[NK >>> 5] |= 128 << 24 - NK % 32;
      NU[14 + (64 + NK >>> 9 << 4)] = Math.floor(Nv / 4294967296);
      NU[15 + (64 + NK >>> 9 << 4)] = Nv;
      Nu.sigBytes = NU.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var Nu = CN.clone.call(this);
      Nu._hash = this._hash.clone();
      return Nu;
    }
  });
  Ch.SHA1 = CN._createHelper(Cc);
  Ch.HmacSHA1 = CN._createHmacHelper(Cc);
  var X4 = Math;
  var Ch = Co;
  var X5 = (Cc = Ch.lib).WordArray;
  var X6 = Cc.Hasher;
  var Cc = Ch.algo;
  var X7 = [];
  var X8 = [];
  function X9(Nu) {
    return (Nu - (Nu | 0)) * 4294967296 | 0;
  }
  var XC = 2;
  for (var XX = 0; XX < 64;) {
    if (function (Nu) {
      for (var NU = X4.sqrt(Nu), Nv = 2; Nv <= NU; Nv++) {
        if (!(Nu % Nv)) {
          return;
        }
      }
      return 1;
    }(XC)) {
      if (XX < 8) {
        X7[XX] = X9(X4.pow(XC, 0.5));
      }
      X8[XX] = X9(X4.pow(XC, 1 / 3));
      XX++;
    }
    XC++;
  }
  var XN = [];
  var Cc = Cc.SHA256 = X6.extend({
    _doReset: function () {
      this._hash = new X5.init(X7.slice(0));
    },
    _doProcessBlock: function (Nu, NU) {
      var Nv = this._hash.words;
      var NK = Nv[0];
      var NE = Nv[1];
      var Nq = Nv[2];
      var NM = Nv[3];
      var NJ = Nv[4];
      var NR = Nv[5];
      var Ns = Nv[6];
      var Nw = Nv[7];
      for (var Nf = 0; Nf < 64; Nf++) {
        XN[Nf] = Nf < 16 ? Nu[NU + Nf] | 0 : (((NW = XN[Nf - 15]) << 25 | NW >>> 7) ^ (NW << 14 | NW >>> 18) ^ NW >>> 3) + XN[Nf - 7] + (((NW = XN[Nf - 2]) << 15 | NW >>> 17) ^ (NW << 13 | NW >>> 19) ^ NW >>> 10) + XN[Nf - 16];
        var NW = NK & NE ^ NK & Nq ^ NE & Nq;
        var NP = Nw + ((NJ << 26 | NJ >>> 6) ^ (NJ << 21 | NJ >>> 11) ^ (NJ << 7 | NJ >>> 25)) + (NJ & NR ^ ~NJ & Ns) + X8[Nf] + XN[Nf];
        var Nw = Ns;
        var Ns = NR;
        var NR = NJ;
        var NJ = NM + NP | 0;
        var NM = Nq;
        var Nq = NE;
        var NE = NK;
        var NK = NP + (((NK << 30 | NK >>> 2) ^ (NK << 19 | NK >>> 13) ^ (NK << 10 | NK >>> 22)) + NW) | 0;
      }
      Nv[0] = Nv[0] + NK | 0;
      Nv[1] = Nv[1] + NE | 0;
      Nv[2] = Nv[2] + Nq | 0;
      Nv[3] = Nv[3] + NM | 0;
      Nv[4] = Nv[4] + NJ | 0;
      Nv[5] = Nv[5] + NR | 0;
      Nv[6] = Nv[6] + Ns | 0;
      Nv[7] = Nv[7] + Nw | 0;
    },
    _doFinalize: function () {
      var Nu = this._data;
      var NU = Nu.words;
      var Nv = this._nDataBytes * 8;
      var NK = Nu.sigBytes * 8;
      NU[NK >>> 5] |= 128 << 24 - NK % 32;
      NU[14 + (64 + NK >>> 9 << 4)] = X4.floor(Nv / 4294967296);
      NU[15 + (64 + NK >>> 9 << 4)] = Nv;
      Nu.sigBytes = NU.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var Nu = X6.clone.call(this);
      Nu._hash = this._hash.clone();
      return Nu;
    }
  });
  Ch.SHA256 = X6._createHelper(Cc);
  Ch.HmacSHA256 = X6._createHmacHelper(Cc);
  CO = (Ch = Co).lib.WordArray;
  Cc = Ch.algo;
  CB = Cc.SHA256;
  Cc = Cc.SHA224 = CB.extend({
    _doReset: function () {
      this._hash = new CO.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function () {
      var Nu = CB._doFinalize.call(this);
      Nu.sigBytes -= 4;
      return Nu;
    }
  });
  Ch.SHA224 = CB._createHelper(Cc);
  Ch.HmacSHA224 = CB._createHmacHelper(Cc);
  var Ch = Co;
  var Xl = Ch.lib.Hasher;
  var XO = (Cc = Ch.x64).Word;
  var XB = Cc.WordArray;
  var Cc = Ch.algo;
  function XG() {
    return XO.create.apply(XO, arguments);
  }
  var Xb = [XG(1116352408, 3609767458), XG(1899447441, 602891725), XG(3049323471, 3964484399), XG(3921009573, 2173295548), XG(961987163, 4081628472), XG(1508970993, 3053834265), XG(2453635748, 2937671579), XG(2870763221, 3664609560), XG(3624381080, 2734883394), XG(310598401, 1164996542), XG(607225278, 1323610764), XG(1426881987, 3590304994), XG(1925078388, 4068182383), XG(2162078206, 991336113), XG(2614888103, 633803317), XG(3248222580, 3479774868), XG(3835390401, 2666613458), XG(4022224774, 944711139), XG(264347078, 2341262773), XG(604807628, 2007800933), XG(770255983, 1495990901), XG(1249150122, 1856431235), XG(1555081692, 3175218132), XG(1996064986, 2198950837), XG(2554220882, 3999719339), XG(2821834349, 766784016), XG(2952996808, 2566594879), XG(3210313671, 3203337956), XG(3336571891, 1034457026), XG(3584528711, 2466948901), XG(113926993, 3758326383), XG(338241895, 168717936), XG(666307205, 1188179964), XG(773529912, 1546045734), XG(1294757372, 1522805485), XG(1396182291, 2643833823), XG(1695183700, 2343527390), XG(1986661051, 1014477480), XG(2177026350, 1206759142), XG(2456956037, 344077627), XG(2730485921, 1290863460), XG(2820302411, 3158454273), XG(3259730800, 3505952657), XG(3345764771, 106217008), XG(3516065817, 3606008344), XG(3600352804, 1432725776), XG(4094571909, 1467031594), XG(275423344, 851169720), XG(430227734, 3100823752), XG(506948616, 1363258195), XG(659060556, 3750685593), XG(883997877, 3785050280), XG(958139571, 3318307427), XG(1322822218, 3812723403), XG(1537002063, 2003034995), XG(1747873779, 3602036899), XG(1955562222, 1575990012), XG(2024104815, 1125592928), XG(2227730452, 2716904306), XG(2361852424, 442776044), XG(2428436474, 593698344), XG(2756734187, 3733110249), XG(3204031479, 2999351573), XG(3329325298, 3815920427), XG(3391569614, 3928383900), XG(3515267271, 566280711), XG(3940187606, 3454069534), XG(4118630271, 4000239992), XG(116418474, 1914138554), XG(174292421, 2731055270), XG(289380356, 3203993006), XG(460393269, 320620315), XG(685471733, 587496836), XG(852142971, 1086792851), XG(1017036298, 365543100), XG(1126000580, 2618297676), XG(1288033470, 3409855158), XG(1501505948, 4234509866), XG(1607167915, 987167468), XG(1816402316, 1246189591)];
  var XT = [];
  for (var Xi = 0; Xi < 80; Xi++) {
    XT[Xi] = XG();
  }
  Cc = Cc.SHA512 = Xl.extend({
    _doReset: function () {
      this._hash = new XB.init([new XO.init(1779033703, 4089235720), new XO.init(3144134277, 2227873595), new XO.init(1013904242, 4271175723), new XO.init(2773480762, 1595750129), new XO.init(1359893119, 2917565137), new XO.init(2600822924, 725511199), new XO.init(528734635, 4215389547), new XO.init(1541459225, 327033209)]);
    },
    _doProcessBlock: function (Nu, NU) {
      var Nv = this._hash.words;
      var NK = Nv[0];
      var NE = Nv[1];
      var Nq = Nv[2];
      var NM = Nv[3];
      var NJ = Nv[4];
      var NR = Nv[5];
      var Ns = Nv[6];
      var Nv = Nv[7];
      var Nw = NK.high;
      var Nf = NK.low;
      var NW = NE.high;
      var NP = NE.low;
      var Nn = Nq.high;
      var Ny = Nq.low;
      var ND = NM.high;
      var Np = NM.low;
      var Nt = NJ.high;
      var NQ = NJ.low;
      var Nj = NR.high;
      var NY = NR.low;
      var Nz = Ns.high;
      var Ng = Ns.low;
      var NH = Nv.high;
      var Nx = Nv.low;
      var Na = Nw;
      var NS = Nf;
      var Nd = NW;
      var NL = NP;
      var Nm = Nn;
      var No = Ny;
      var Nc = ND;
      var NZ = Np;
      var NF = Nt;
      var NV = NQ;
      var Nh = Nj;
      var NA = NY;
      var NI = Nz;
      var Nr = Ng;
      var Nk = NH;
      var l0 = Nx;
      for (var l1 = 0; l1 < 80; l1++) {
        var l2;
        var l3;
        var l4 = XT[l1];
        if (l1 < 16) {
          l3 = l4.high = Nu[NU + l1 * 2] | 0;
          l2 = l4.low = Nu[NU + l1 * 2 + 1] | 0;
        } else {
          lN = (l9 = XT[l1 - 15]).high;
          l9 = l9.low;
          l8 = (l7 = XT[l1 - 2]).high;
          l7 = l7.low;
          l6 = (l5 = XT[l1 - 7]).high;
          l5 = l5.low;
          lX = (lC = XT[l1 - 16]).high;
          l3 = (l3 = ((lN >>> 1 | l9 << 31) ^ (lN >>> 8 | l9 << 24) ^ lN >>> 7) + l6 + ((l2 = (l6 = (l9 >>> 1 | lN << 31) ^ (l9 >>> 8 | lN << 24) ^ (l9 >>> 7 | lN << 25)) + l5) >>> 0 < l6 >>> 0 ? 1 : 0)) + ((l8 >>> 19 | l7 << 13) ^ (l8 << 3 | l7 >>> 29) ^ l8 >>> 6) + ((l2 += l9 = (l7 >>> 19 | l8 << 13) ^ (l7 << 3 | l8 >>> 29) ^ (l7 >>> 6 | l8 << 26)) >>> 0 < l9 >>> 0 ? 1 : 0);
          l2 += lN = lC.low;
          l4.high = l3 = l3 + lX + (l2 >>> 0 < lN >>> 0 ? 1 : 0);
          l4.low = l2;
        }
        var l5 = NF & Nh ^ ~NF & NI;
        var l6 = NV & NA ^ ~NV & Nr;
        var l7 = Na & Nd ^ Na & Nm ^ Nd & Nm;
        var l8 = (NS >>> 28 | Na << 4) ^ (NS << 30 | Na >>> 2) ^ (NS << 25 | Na >>> 7);
        var l9 = Xb[l1];
        var lC = l9.high;
        var lX = l9.low;
        var lN = l0 + ((NV >>> 14 | NF << 18) ^ (NV >>> 18 | NF << 14) ^ (NV << 23 | NF >>> 9));
        var l4 = Nk + ((NF >>> 14 | NV << 18) ^ (NF >>> 18 | NV << 14) ^ (NF << 23 | NV >>> 9)) + (lN >>> 0 < l0 >>> 0 ? 1 : 0);
        var ll = l8 + (NS & NL ^ NS & No ^ NL & No);
        var Nk = NI;
        var l0 = Nr;
        var NI = Nh;
        var Nr = NA;
        var Nh = NF;
        var NA = NV;
        var NF = Nc + (l4 = l4 + l5 + ((lN = lN + l6) >>> 0 < l6 >>> 0 ? 1 : 0) + lC + ((lN = lN + lX) >>> 0 < lX >>> 0 ? 1 : 0) + l3 + ((lN = lN + l2) >>> 0 < l2 >>> 0 ? 1 : 0)) + ((NV = NZ + lN | 0) >>> 0 < NZ >>> 0 ? 1 : 0) | 0;
        var Nc = Nm;
        var NZ = No;
        var Nm = Nd;
        var No = NL;
        var Nd = Na;
        var NL = NS;
        var Na = l4 + (((Na >>> 28 | NS << 4) ^ (Na << 30 | NS >>> 2) ^ (Na << 25 | NS >>> 7)) + l7 + (ll >>> 0 < l8 >>> 0 ? 1 : 0)) + ((NS = lN + ll | 0) >>> 0 < lN >>> 0 ? 1 : 0) | 0;
      }
      Nf = NK.low = Nf + NS;
      NK.high = Nw + Na + (Nf >>> 0 < NS >>> 0 ? 1 : 0);
      NP = NE.low = NP + NL;
      NE.high = NW + Nd + (NP >>> 0 < NL >>> 0 ? 1 : 0);
      Ny = Nq.low = Ny + No;
      Nq.high = Nn + Nm + (Ny >>> 0 < No >>> 0 ? 1 : 0);
      Np = NM.low = Np + NZ;
      NM.high = ND + Nc + (Np >>> 0 < NZ >>> 0 ? 1 : 0);
      NQ = NJ.low = NQ + NV;
      NJ.high = Nt + NF + (NQ >>> 0 < NV >>> 0 ? 1 : 0);
      NY = NR.low = NY + NA;
      NR.high = Nj + Nh + (NY >>> 0 < NA >>> 0 ? 1 : 0);
      Ng = Ns.low = Ng + Nr;
      Ns.high = Nz + NI + (Ng >>> 0 < Nr >>> 0 ? 1 : 0);
      Nx = Nv.low = Nx + l0;
      Nv.high = NH + Nk + (Nx >>> 0 < l0 >>> 0 ? 1 : 0);
    },
    _doFinalize: function () {
      var Nu = this._data;
      var NU = Nu.words;
      var Nv = this._nDataBytes * 8;
      var NK = Nu.sigBytes * 8;
      NU[NK >>> 5] |= 128 << 24 - NK % 32;
      NU[30 + (128 + NK >>> 10 << 5)] = Math.floor(Nv / 4294967296);
      NU[31 + (128 + NK >>> 10 << 5)] = Nv;
      Nu.sigBytes = NU.length * 4;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      var Nu = Xl.clone.call(this);
      Nu._hash = this._hash.clone();
      return Nu;
    },
    blockSize: 32
  });
  Ch.SHA512 = Xl._createHelper(Cc);
  Ch.HmacSHA512 = Xl._createHmacHelper(Cc);
  Cc = (Ch = Co).x64;
  CG = Cc.Word;
  Cb = Cc.WordArray;
  Cc = Ch.algo;
  CT = Cc.SHA512;
  Cc = Cc.SHA384 = CT.extend({
    _doReset: function () {
      this._hash = new Cb.init([new CG.init(3418070365, 3238371032), new CG.init(1654270250, 914150663), new CG.init(2438529370, 812702999), new CG.init(355462360, 4144912697), new CG.init(1731405415, 4290775857), new CG.init(2394180231, 1750603025), new CG.init(3675008525, 1694076839), new CG.init(1203062813, 3204075428)]);
    },
    _doFinalize: function () {
      var Nu = CT._doFinalize.call(this);
      Nu.sigBytes -= 16;
      return Nu;
    }
  });
  Ch.SHA384 = CT._createHelper(Cc);
  Ch.HmacSHA384 = CT._createHmacHelper(Cc);
  var Xu = Math;
  var Ch = Co;
  var XU = (Cc = Ch.lib).WordArray;
  var Xv = Cc.Hasher;
  var XK = Ch.x64.Word;
  var Cc = Ch.algo;
  var XE = [];
  var Xq = [];
  var XM = [];
  var XJ = 1;
  var XR = 0;
  for (var Xs = 0; Xs < 24; Xs++) {
    XE[XJ + XR * 5] = (Xs + 1) * (Xs + 2) / 2 % 64;
    var Xw = (XJ * 2 + XR * 3) % 5;
    XJ = XR % 5;
    XR = Xw;
  }
  for (XJ = 0; XJ < 5; XJ++) {
    for (XR = 0; XR < 5; XR++) {
      Xq[XJ + XR * 5] = XR + (XJ * 2 + XR * 3) % 5 * 5;
    }
  }
  var Xf = 1;
  for (var XW = 0; XW < 24; XW++) {
    var XP;
    var Xn = 0;
    var Xy = 0;
    for (var XD = 0; XD < 7; XD++) {
      if (Xf & 1) {
        if ((XP = (1 << XD) - 1) < 32) {
          Xy ^= 1 << XP;
        } else {
          Xn ^= 1 << XP - 32;
        }
      }
      if (Xf & 128) {
        Xf = Xf << 1 ^ 113;
      } else {
        Xf <<= 1;
      }
    }
    XM[XW] = XK.create(Xn, Xy);
  }
  var Xp = [];
  for (var Xt = 0; Xt < 25; Xt++) {
    Xp[Xt] = XK.create();
  }
  function XQ(Nu, NU, Nv) {
    return Nu & NU | ~Nu & Nv;
  }
  function Xj(Nu, NU, Nv) {
    return Nu & Nv | NU & ~Nv;
  }
  function XY(Nu, NU) {
    return Nu << NU | Nu >>> 32 - NU;
  }
  function Xz(Nu) {
    if (typeof Nu == "string") {
      return CY;
    } else {
      return Cj;
    }
  }
  function Xg(Nu, NU, Nv) {
    var NK;
    var NE = this._iv;
    if (NE) {
      NK = NE;
      this._iv = undefined;
    } else {
      NK = this._prevBlock;
    }
    for (var Nq = 0; Nq < Nv; Nq++) {
      Nu[NU + Nq] ^= NK[Nq];
    }
  }
  function XH(Nu, NU, Nv, NK) {
    var NE;
    var Nq = this._iv;
    if (Nq) {
      NE = Nq.slice(0);
      this._iv = undefined;
    } else {
      NE = this._prevBlock;
    }
    NK.encryptBlock(NE, 0);
    for (var NM = 0; NM < Nv; NM++) {
      Nu[NU + NM] ^= NE[NM];
    }
  }
  function Xx(Nu) {
    var NU;
    var Nv;
    var NK;
    if ((Nu >> 24 & 255) == 255) {
      Nv = Nu >> 8 & 255;
      NK = Nu & 255;
      if ((NU = Nu >> 16 & 255) === 255) {
        NU = 0;
        if (Nv === 255) {
          Nv = 0;
          if (NK === 255) {
            NK = 0;
          } else {
            ++NK;
          }
        } else {
          ++Nv;
        }
      } else {
        ++NU;
      }
      Nu = 0;
      Nu = (Nu += NU << 16) + (Nv << 8) + NK;
    } else {
      Nu += 16777216;
    }
    return Nu;
  }
  Cc = Cc.SHA3 = Xv.extend({
    cfg: Xv.cfg.extend({
      outputLength: 512
    }),
    _doReset: function () {
      var Nu = this._state = [];
      for (var NU = 0; NU < 25; NU++) {
        Nu[NU] = new XK.init();
      }
      this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
    },
    _doProcessBlock: function (Nu, NU) {
      var Nv = this._state;
      for (var NK = this.blockSize / 2, NE = 0; NE < NK; NE++) {
        var Nq = Nu[NU + NE * 2];
        var NM = Nu[NU + NE * 2 + 1];
        var Nq = (Nq << 8 | Nq >>> 24) & 16711935 | (Nq << 24 | Nq >>> 8) & 4278255360;
        (Nz = Nv[NE]).high ^= (NM << 8 | NM >>> 24) & 16711935 | (NM << 24 | NM >>> 8) & 4278255360;
        Nz.low ^= Nq;
      }
      for (var NJ = 0; NJ < 24; NJ++) {
        for (var NR = 0; NR < 5; NR++) {
          var Ns = 0;
          var Nw = 0;
          for (var Nf = 0; Nf < 5; Nf++) {
            Ns ^= (Nz = Nv[NR + Nf * 5]).high;
            Nw ^= Nz.low;
          }
          var NW = Xp[NR];
          NW.high = Ns;
          NW.low = Nw;
        }
        for (NR = 0; NR < 5; NR++) {
          var NP = Xp[(NR + 4) % 5];
          var Nn = Xp[(NR + 1) % 5];
          var Ny = Nn.high;
          var Nn = Nn.low;
          var Ns = NP.high ^ (Ny << 1 | Nn >>> 31);
          var Nw = NP.low ^ (Nn << 1 | Ny >>> 31);
          for (var Nf = 0; Nf < 5; Nf++) {
            (Nz = Nv[NR + Nf * 5]).high ^= Ns;
            Nz.low ^= Nw;
          }
        }
        for (var ND = 1; ND < 25; ND++) {
          var Np = (Nz = Nv[ND]).high;
          var Nt = Nz.low;
          var NQ = XE[ND];
          Nw = NQ < 32 ? (Ns = Np << NQ | Nt >>> 32 - NQ, Nt << NQ | Np >>> 32 - NQ) : (Ns = Nt << NQ - 32 | Np >>> 64 - NQ, Np << NQ - 32 | Nt >>> 64 - NQ);
          var Np = Xp[Xq[ND]];
          Np.high = Ns;
          Np.low = Nw;
        }
        var Nj = Xp[0];
        var NY = Nv[0];
        Nj.high = NY.high;
        Nj.low = NY.low;
        for (NR = 0; NR < 5; NR++) {
          for (Nf = 0; Nf < 5; Nf++) {
            var Nz = Nv[ND = NR + Nf * 5];
            var Ng = Xp[ND];
            var NH = Xp[(NR + 1) % 5 + Nf * 5];
            var Nx = Xp[(NR + 2) % 5 + Nf * 5];
            Nz.high = Ng.high ^ ~NH.high & Nx.high;
            Nz.low = Ng.low ^ ~NH.low & Nx.low;
          }
        }
        Nz = Nv[0];
        Nj = XM[NJ];
        Nz.high ^= Nj.high;
        Nz.low ^= Nj.low;
      }
    },
    _doFinalize: function () {
      var Nu = this._data;
      var NU = Nu.words;
      this._nDataBytes;
      var Nv = Nu.sigBytes * 8;
      var NK = this.blockSize * 32;
      NU[Nv >>> 5] |= 1 << 24 - Nv % 32;
      NU[(Xu.ceil((1 + Nv) / NK) * NK >>> 5) - 1] |= 128;
      Nu.sigBytes = NU.length * 4;
      this._process();
      var NE = this._state;
      var Nv = this.cfg.outputLength / 8;
      for (var Nq = Nv / 8, NM = [], NJ = 0; NJ < Nq; NJ++) {
        var NR = NE[NJ];
        var Ns = NR.high;
        var NR = NR.low;
        var Ns = (Ns << 8 | Ns >>> 24) & 16711935 | (Ns << 24 | Ns >>> 8) & 4278255360;
        NM.push((NR << 8 | NR >>> 24) & 16711935 | (NR << 24 | NR >>> 8) & 4278255360);
        NM.push(Ns);
      }
      return new XU.init(NM, Nv);
    },
    clone: function () {
      var Nu = Xv.clone.call(this);
      var NU = Nu._state = this._state.slice(0);
      for (var Nv = 0; Nv < 25; Nv++) {
        NU[Nv] = NU[Nv].clone();
      }
      return Nu;
    }
  });
  Ch.SHA3 = Xv._createHelper(Cc);
  Ch.HmacSHA3 = Xv._createHmacHelper(Cc);
  Math;
  Cc = (Ch = Co).lib;
  Ci = Cc.WordArray;
  Cu = Cc.Hasher;
  Cc = Ch.algo;
  CU = Ci.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  Cv = Ci.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  CK = Ci.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  CE = Ci.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  Cq = Ci.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  CM = Ci.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  Cc = Cc.RIPEMD160 = Cu.extend({
    _doReset: function () {
      this._hash = Ci.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (Nu, NU) {
      for (var Nv = 0; Nv < 16; Nv++) {
        var NK = NU + Nv;
        var NE = Nu[NK];
        Nu[NK] = (NE << 8 | NE >>> 24) & 16711935 | (NE << 24 | NE >>> 8) & 4278255360;
      }
      var Nq;
      var NM;
      var NJ;
      var NR;
      var Ns;
      var Nw;
      var Nf = this._hash.words;
      var NW = Cq.words;
      var NP = CM.words;
      var Nn = CU.words;
      var Ny = Cv.words;
      var ND = CK.words;
      var Np = CE.words;
      var Nt = Nq = Nf[0];
      var NQ = NM = Nf[1];
      var Nj = NJ = Nf[2];
      var NY = NR = Nf[3];
      var Nz = Ns = Nf[4];
      for (var Nv = 0; Nv < 80; Nv += 1) {
        Nw = (Nw = XY(Nw = (Nw = Nq + Nu[NU + Nn[Nv]] | 0) + (Nv < 16 ? (NM ^ NJ ^ NR) + NW[0] : Nv < 32 ? XQ(NM, NJ, NR) + NW[1] : Nv < 48 ? ((NM | ~NJ) ^ NR) + NW[2] : Nv < 64 ? Xj(NM, NJ, NR) + NW[3] : (NM ^ (NJ | ~NR)) + NW[4]) | 0, ND[Nv])) + Ns | 0;
        Nq = Ns;
        Ns = NR;
        NR = XY(NJ, 10);
        NJ = NM;
        NM = Nw;
        Nw = (Nw = XY(Nw = (Nw = Nt + Nu[NU + Ny[Nv]] | 0) + (Nv < 16 ? (NQ ^ (Nj | ~NY)) + NP[0] : Nv < 32 ? Xj(NQ, Nj, NY) + NP[1] : Nv < 48 ? ((NQ | ~Nj) ^ NY) + NP[2] : Nv < 64 ? XQ(NQ, Nj, NY) + NP[3] : (NQ ^ Nj ^ NY) + NP[4]) | 0, Np[Nv])) + Nz | 0;
        Nt = Nz;
        Nz = NY;
        NY = XY(Nj, 10);
        Nj = NQ;
        NQ = Nw;
      }
      Nw = Nf[1] + NJ + NY | 0;
      Nf[1] = Nf[2] + NR + Nz | 0;
      Nf[2] = Nf[3] + Ns + Nt | 0;
      Nf[3] = Nf[4] + Nq + NQ | 0;
      Nf[4] = Nf[0] + NM + Nj | 0;
      Nf[0] = Nw;
    },
    _doFinalize: function () {
      var Nu = this._data;
      var NU = Nu.words;
      var Nv = this._nDataBytes * 8;
      var NK = Nu.sigBytes * 8;
      NU[NK >>> 5] |= 128 << 24 - NK % 32;
      NU[14 + (64 + NK >>> 9 << 4)] = (Nv << 8 | Nv >>> 24) & 16711935 | (Nv << 24 | Nv >>> 8) & 4278255360;
      Nu.sigBytes = (NU.length + 1) * 4;
      this._process();
      var NK = this._hash;
      var NE = NK.words;
      for (var Nq = 0; Nq < 5; Nq++) {
        var NM = NE[Nq];
        NE[Nq] = (NM << 8 | NM >>> 24) & 16711935 | (NM << 24 | NM >>> 8) & 4278255360;
      }
      return NK;
    },
    clone: function () {
      var Nu = Cu.clone.call(this);
      Nu._hash = this._hash.clone();
      return Nu;
    }
  });
  Ch.RIPEMD160 = Cu._createHelper(Cc);
  Ch.HmacRIPEMD160 = Cu._createHmacHelper(Cc);
  Cc = (Ch = Co).lib.Base;
  CJ = Ch.enc.Utf8;
  Ch.algo.HMAC = Cc.extend({
    init: function (Nu, NU) {
      Nu = this._hasher = new Nu.init();
      if (typeof NU == "string") {
        NU = CJ.parse(NU);
      }
      for (var Nv = Nu.blockSize, NK = Nv * 4, Nu = ((NU = NU.sigBytes > NK ? Nu.finalize(NU) : NU).clamp(), this._oKey = NU.clone()), NU = this._iKey = NU.clone(), NE = Nu.words, Nq = NU.words, NM = 0; NM < Nv; NM++) {
        NE[NM] ^= 1549556828;
        Nq[NM] ^= 909522486;
      }
      Nu.sigBytes = NU.sigBytes = NK;
      this.reset();
    },
    reset: function () {
      var Nu = this._hasher;
      Nu.reset();
      Nu.update(this._iKey);
    },
    update: function (Nu) {
      this._hasher.update(Nu);
      return this;
    },
    finalize: function (Nu) {
      var NU = this._hasher;
      var Nu = NU.finalize(Nu);
      NU.reset();
      return NU.finalize(this._oKey.clone().concat(Nu));
    }
  });
  Cc = (Ch = Co).lib;
  Xa = Cc.Base;
  CR = Cc.WordArray;
  Cc = Ch.algo;
  N6 = Cc.SHA1;
  Cs = Cc.HMAC;
  Cw = Cc.PBKDF2 = Xa.extend({
    cfg: Xa.extend({
      keySize: 4,
      hasher: N6,
      iterations: 1
    }),
    init: function (Nu) {
      this.cfg = this.cfg.extend(Nu);
    },
    compute: function (Nu, NU) {
      var Nv = this.cfg;
      var NK = Cs.create(Nv.hasher, Nu);
      var NE = CR.create();
      var Nq = CR.create([1]);
      for (var NM = NE.words, NJ = Nq.words, NR = Nv.keySize, Ns = Nv.iterations; NM.length < NR;) {
        var Nw = NK.update(NU).finalize(Nq);
        NK.reset();
        var Nf = Nw.words;
        var NW = Nf.length;
        var NP = Nw;
        for (var Nn = 1; Nn < Ns; Nn++) {
          NP = NK.finalize(NP);
          NK.reset();
          var Ny = NP.words;
          for (var ND = 0; ND < NW; ND++) {
            Nf[ND] ^= Ny[ND];
          }
        }
        NE.concat(Nw);
        NJ[0]++;
      }
      NE.sigBytes = NR * 4;
      return NE;
    }
  });
  Ch.PBKDF2 = function (Nu, NU, Nv) {
    return Cw.create(Nv).compute(Nu, NU);
  };
  Xa = (Cc = Co).lib;
  N6 = Xa.Base;
  Cf = Xa.WordArray;
  Xa = Cc.algo;
  Ch = Xa.MD5;
  CW = Xa.EvpKDF = N6.extend({
    cfg: N6.extend({
      keySize: 4,
      hasher: Ch,
      iterations: 1
    }),
    init: function (Nu) {
      this.cfg = this.cfg.extend(Nu);
    },
    compute: function (Nu, NU) {
      var Nv;
      var NK = this.cfg;
      var NE = NK.hasher.create();
      var Nq = Cf.create();
      for (var NM = Nq.words, NJ = NK.keySize, NR = NK.iterations; NM.length < NJ;) {
        if (Nv) {
          NE.update(Nv);
        }
        Nv = NE.update(Nu).finalize(NU);
        NE.reset();
        for (var Ns = 1; Ns < NR; Ns++) {
          Nv = NE.finalize(Nv);
          NE.reset();
        }
        Nq.concat(Nv);
      }
      Nq.sigBytes = NJ * 4;
      return Nq;
    }
  });
  Cc.EvpKDF = function (Nu, NU, Nv) {
    return CW.create(Nv).compute(Nu, NU);
  };
  if (!Co.lib.Cipher) {
    N6 = (Xa = Co).lib;
    Ch = N6.Base;
    CP = N6.WordArray;
    Cn = N6.BufferedBlockAlgorithm;
    (Cc = Xa.enc).Utf8;
    Cy = Cc.Base64;
    CD = Xa.algo.EvpKDF;
    Cp = N6.Cipher = Cn.extend({
      cfg: Ch.extend(),
      createEncryptor: function (Nu, NU) {
        return this.create(this._ENC_XFORM_MODE, Nu, NU);
      },
      createDecryptor: function (Nu, NU) {
        return this.create(this._DEC_XFORM_MODE, Nu, NU);
      },
      init: function (Nu, NU, Nv) {
        this.cfg = this.cfg.extend(Nv);
        this._xformMode = Nu;
        this._key = NU;
        this.reset();
      },
      reset: function () {
        Cn.reset.call(this);
        this._doReset();
      },
      process: function (Nu) {
        this._append(Nu);
        return this._process();
      },
      finalize: function (Nu) {
        if (Nu) {
          this._append(Nu);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function (Nu) {
        return {
          encrypt: function (NU, Nv, NK) {
            return Xz(Nv).encrypt(Nu, NU, Nv, NK);
          },
          decrypt: function (NU, Nv, NK) {
            return Xz(Nv).decrypt(Nu, NU, Nv, NK);
          }
        };
      }
    });
    N6.StreamCipher = Cp.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1
    });
    Cc = Xa.mode = {};
    Cz = N6.BlockCipherMode = Ch.extend({
      createEncryptor: function (Nu, NU) {
        return this.Encryptor.create(Nu, NU);
      },
      createDecryptor: function (Nu, NU) {
        return this.Decryptor.create(Nu, NU);
      },
      init: function (Nu, NU) {
        this._cipher = Nu;
        this._iv = NU;
      }
    });
    (Cc = Cz.extend()).Encryptor = Cc.extend({
      processBlock: function (Nu, NU) {
        var Nv = this._cipher;
        var NK = Nv.blockSize;
        Xg.call(this, Nu, NU, NK);
        Nv.encryptBlock(Nu, NU);
        this._prevBlock = Nu.slice(NU, NU + NK);
      }
    });
    Cc.Decryptor = Cc.extend({
      processBlock: function (Nu, NU) {
        var Nv = this._cipher;
        var NK = Nv.blockSize;
        var NE = Nu.slice(NU, NU + NK);
        Nv.decryptBlock(Nu, NU);
        Xg.call(this, Nu, NU, NK);
        this._prevBlock = NE;
      }
    });
    Cz = Cc.CBC = Cc;
    Cc = (Xa.pad = {}).Pkcs7 = {
      pad: function (Nu, NU) {
        var NU = NU * 4;
        for (var Nv = NU - Nu.sigBytes % NU, NK = Nv << 24 | Nv << 16 | Nv << 8 | Nv, NE = [], Nq = 0; Nq < Nv; Nq += 4) {
          NE.push(NK);
        }
        NU = CP.create(NE, Nv);
        Nu.concat(NU);
      },
      unpad: function (Nu) {
        var NU = Nu.words[Nu.sigBytes - 1 >>> 2] & 255;
        Nu.sigBytes -= NU;
      }
    };
    N6.BlockCipher = Cp.extend({
      cfg: Cp.cfg.extend({
        mode: Cz,
        padding: Cc
      }),
      reset: function () {
        Cp.reset.call(this);
        var Nu;
        var NU = this.cfg;
        var Nv = NU.iv;
        var NU = NU.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          Nu = NU.createEncryptor;
        } else {
          Nu = NU.createDecryptor;
          this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator == Nu) {
          this._mode.init(this, Nv && Nv.words);
        } else {
          this._mode = Nu.call(NU, this, Nv && Nv.words);
          this._mode.__creator = Nu;
        }
      },
      _doProcessBlock: function (Nu, NU) {
        this._mode.processBlock(Nu, NU);
      },
      _doFinalize: function () {
        var Nu;
        var NU = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          NU.pad(this._data, this.blockSize);
          Nu = this._process(true);
        } else {
          Nu = this._process(true);
          NU.unpad(Nu);
        }
        return Nu;
      },
      blockSize: 4
    });
    CQ = N6.CipherParams = Ch.extend({
      init: function (Nu) {
        this.mixIn(Nu);
      },
      toString: function (Nu) {
        return (Nu || this.formatter).stringify(this);
      }
    });
    Cz = (Xa.format = {}).OpenSSL = {
      stringify: function (Nu) {
        var NU = Nu.ciphertext;
        var Nu = Nu.salt;
        var Nu = Nu ? CP.create([1398893684, 1701076831]).concat(Nu).concat(NU) : NU;
        return Nu.toString(Cy);
      },
      parse: function (Nu) {
        var NU;
        var Nu = Cy.parse(Nu);
        var Nv = Nu.words;
        if (Nv[0] == 1398893684 && Nv[1] == 1701076831) {
          NU = CP.create(Nv.slice(2, 4));
          Nv.splice(0, 4);
          Nu.sigBytes -= 16;
        }
        return CQ.create({
          ciphertext: Nu,
          salt: NU
        });
      }
    };
    Cj = N6.SerializableCipher = Ch.extend({
      cfg: Ch.extend({
        format: Cz
      }),
      encrypt: function (Nu, NU, Nv, NK) {
        NK = this.cfg.extend(NK);
        var NE = Nu.createEncryptor(Nv, NK);
        var NU = NE.finalize(NU);
        var NE = NE.cfg;
        return CQ.create({
          ciphertext: NU,
          key: Nv,
          iv: NE.iv,
          algorithm: Nu,
          mode: NE.mode,
          padding: NE.padding,
          blockSize: Nu.blockSize,
          formatter: NK.format
        });
      },
      decrypt: function (Nu, NU, Nv, NK) {
        NK = this.cfg.extend(NK);
        NU = this._parse(NU, NK.format);
        return Nu.createDecryptor(Nv, NK).finalize(NU.ciphertext);
      },
      _parse: function (Nu, NU) {
        if (typeof Nu == "string") {
          return NU.parse(Nu, this);
        } else {
          return Nu;
        }
      }
    });
    Cc = (Xa.kdf = {}).OpenSSL = {
      execute: function (Nu, NU, Nv, NK) {
        NK = NK || CP.random(8);
        Nu = CD.create({
          keySize: NU + Nv
        }).compute(Nu, NK);
        Nv = CP.create(Nu.words.slice(NU), Nv * 4);
        Nu.sigBytes = NU * 4;
        return CQ.create({
          key: Nu,
          iv: Nv,
          salt: NK
        });
      }
    };
    CY = N6.PasswordBasedCipher = Cj.extend({
      cfg: Cj.cfg.extend({
        kdf: Cc
      }),
      encrypt: function (Nu, NU, Nv, NK) {
        Nv = (NK = this.cfg.extend(NK)).kdf.execute(Nv, Nu.keySize, Nu.ivSize);
        NK.iv = Nv.iv;
        Nu = Cj.encrypt.call(this, Nu, NU, Nv.key, NK);
        Nu.mixIn(Nv);
        return Nu;
      },
      decrypt: function (Nu, NU, Nv, NK) {
        NK = this.cfg.extend(NK);
        NU = this._parse(NU, NK.format);
        Nv = NK.kdf.execute(Nv, Nu.keySize, Nu.ivSize, NU.salt);
        NK.iv = Nv.iv;
        return Cj.decrypt.call(this, Nu, NU, Nv.key, NK);
      }
    });
  }
  Co.mode.CFB = ((Ch = Co.lib.BlockCipherMode.extend()).Encryptor = Ch.extend({
    processBlock: function (Nu, NU) {
      var Nv = this._cipher;
      var NK = Nv.blockSize;
      XH.call(this, Nu, NU, NK, Nv);
      this._prevBlock = Nu.slice(NU, NU + NK);
    }
  }), Ch.Decryptor = Ch.extend({
    processBlock: function (Nu, NU) {
      var Nv = this._cipher;
      var NK = Nv.blockSize;
      var NE = Nu.slice(NU, NU + NK);
      XH.call(this, Nu, NU, NK, Nv);
      this._prevBlock = NE;
    }
  }), Ch);
  Co.mode.CTR = (Cz = Co.lib.BlockCipherMode.extend(), Xa = Cz.Encryptor = Cz.extend({
    processBlock: function (Nu, NU) {
      var Nv = this._cipher;
      var NK = Nv.blockSize;
      var NE = this._iv;
      var Nq = this._counter;
      if (NE) {
        Nq = this._counter = NE.slice(0);
        this._iv = undefined;
      }
      var NM = Nq.slice(0);
      Nv.encryptBlock(NM, 0);
      Nq[NK - 1] = Nq[NK - 1] + 1 | 0;
      for (var NJ = 0; NJ < NK; NJ++) {
        Nu[NU + NJ] ^= NM[NJ];
      }
    }
  }), Cz.Decryptor = Xa, Cz);
  Co.mode.CTRGladman = (N6 = Co.lib.BlockCipherMode.extend(), Cc = N6.Encryptor = N6.extend({
    processBlock: function (Nu, NU) {
      var Nv = this._cipher;
      var NK = Nv.blockSize;
      var NE = this._iv;
      var Nq = this._counter;
      if (NE) {
        Nq = this._counter = NE.slice(0);
        this._iv = undefined;
      }
      if (((NE = Nq)[0] = Xx(NE[0])) === 0) {
        NE[1] = Xx(NE[1]);
      }
      var NM = Nq.slice(0);
      Nv.encryptBlock(NM, 0);
      for (var NJ = 0; NJ < NK; NJ++) {
        Nu[NU + NJ] ^= NM[NJ];
      }
    }
  }), N6.Decryptor = Cc, N6);
  Co.mode.OFB = (Ch = Co.lib.BlockCipherMode.extend(), Xa = Ch.Encryptor = Ch.extend({
    processBlock: function (Nu, NU) {
      var Nv = this._cipher;
      var NK = Nv.blockSize;
      var NE = this._iv;
      var Nq = this._keystream;
      if (NE) {
        Nq = this._keystream = NE.slice(0);
        this._iv = undefined;
      }
      Nv.encryptBlock(Nq, 0);
      for (var NM = 0; NM < NK; NM++) {
        Nu[NU + NM] ^= Nq[NM];
      }
    }
  }), Ch.Decryptor = Xa, Ch);
  Co.mode.ECB = ((Cc = Co.lib.BlockCipherMode.extend()).Encryptor = Cc.extend({
    processBlock: function (Nu, NU) {
      this._cipher.encryptBlock(Nu, NU);
    }
  }), Cc.Decryptor = Cc.extend({
    processBlock: function (Nu, NU) {
      this._cipher.decryptBlock(Nu, NU);
    }
  }), Cc);
  Co.pad.AnsiX923 = {
    pad: function (Nu, NU) {
      var Nv = Nu.sigBytes;
      var NU = NU * 4;
      var NU = NU - Nv % NU;
      var Nv = Nv + NU - 1;
      Nu.clamp();
      Nu.words[Nv >>> 2] |= NU << 24 - Nv % 4 * 8;
      Nu.sigBytes += NU;
    },
    unpad: function (Nu) {
      var NU = Nu.words[Nu.sigBytes - 1 >>> 2] & 255;
      Nu.sigBytes -= NU;
    }
  };
  Co.pad.Iso10126 = {
    pad: function (Nu, NU) {
      NU *= 4;
      NU -= Nu.sigBytes % NU;
      Nu.concat(Co.lib.WordArray.random(NU - 1)).concat(Co.lib.WordArray.create([NU << 24], 1));
    },
    unpad: function (Nu) {
      var NU = Nu.words[Nu.sigBytes - 1 >>> 2] & 255;
      Nu.sigBytes -= NU;
    }
  };
  Co.pad.Iso97971 = {
    pad: function (Nu, NU) {
      Nu.concat(Co.lib.WordArray.create([2147483648], 1));
      Co.pad.ZeroPadding.pad(Nu, NU);
    },
    unpad: function (Nu) {
      Co.pad.ZeroPadding.unpad(Nu);
      Nu.sigBytes--;
    }
  };
  Co.pad.ZeroPadding = {
    pad: function (Nu, NU) {
      NU *= 4;
      Nu.clamp();
      Nu.sigBytes += NU - (Nu.sigBytes % NU || NU);
    },
    unpad: function (Nu) {
      var NU = Nu.words;
      for (var Nv = Nu.sigBytes - 1, Nv = Nu.sigBytes - 1; Nv >= 0; Nv--) {
        if (NU[Nv >>> 2] >>> 24 - Nv % 4 * 8 & 255) {
          Nu.sigBytes = Nv + 1;
          break;
        }
      }
    }
  };
  Co.pad.NoPadding = {
    pad: function () {},
    unpad: function () {}
  };
  Cg = (N6 = Co).lib.CipherParams;
  CH = N6.enc.Hex;
  N6.format.Hex = {
    stringify: function (Nu) {
      return Nu.ciphertext.toString(CH);
    },
    parse: function (Nu) {
      Nu = CH.parse(Nu);
      return Cg.create({
        ciphertext: Nu
      });
    }
  };
  var Xa = Co;
  var Ch = Xa.lib.BlockCipher;
  var Cc = Xa.algo;
  var XS = [];
  var Xd = [];
  var XL = [];
  var Xm = [];
  var Xo = [];
  var Xc = [];
  var XZ = [];
  var XF = [];
  var XV = [];
  var Xh = [];
  var XA = [];
  for (var XI = 0; XI < 256; XI++) {
    XA[XI] = XI < 128 ? XI << 1 : XI << 1 ^ 283;
  }
  var Xr = 0;
  var Xk = 0;
  for (var XI = 0; XI < 256; XI++) {
    var N0 = Xk ^ Xk << 1 ^ Xk << 2 ^ Xk << 3 ^ Xk << 4;
    var N1 = XA[Xd[XS[Xr] = N0 = N0 >>> 8 ^ N0 & 255 ^ 99] = Xr];
    var N2 = XA[N1];
    var N3 = XA[N2];
    var N4 = XA[N0] * 257 ^ N0 * 16843008;
    XL[Xr] = N4 << 24 | N4 >>> 8;
    Xm[Xr] = N4 << 16 | N4 >>> 16;
    Xo[Xr] = N4 << 8 | N4 >>> 24;
    Xc[Xr] = N4;
    XZ[N0] = (N4 = N3 * 16843009 ^ N2 * 65537 ^ N1 * 257 ^ Xr * 16843008) << 24 | N4 >>> 8;
    XF[N0] = N4 << 16 | N4 >>> 16;
    XV[N0] = N4 << 8 | N4 >>> 24;
    Xh[N0] = N4;
    if (Xr) {
      Xr = N1 ^ XA[XA[XA[N3 ^ N1]]];
      Xk ^= XA[XA[Xk]];
    } else {
      Xr = Xk = 1;
    }
  }
  var N5 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var Cc = Cc.AES = Ch.extend({
    _doReset: function () {
      if (!this._nRounds || this._keyPriorReset !== this._key) {
        var Nu = this._keyPriorReset = this._key;
        var NU = Nu.words;
        var Nv = Nu.sigBytes / 4;
        for (var NK = (1 + (this._nRounds = 6 + Nv)) * 4, NE = this._keySchedule = [], Nq = 0; Nq < NK; Nq++) {
          if (Nq < Nv) {
            NE[Nq] = NU[Nq];
          } else {
            NR = NE[Nq - 1];
            if (Nq % Nv) {
              if (Nv > 6 && Nq % Nv == 4) {
                NR = XS[NR >>> 24] << 24 | XS[NR >>> 16 & 255] << 16 | XS[NR >>> 8 & 255] << 8 | XS[NR & 255];
              }
            } else {
              NR = XS[(NR = NR << 8 | NR >>> 24) >>> 24] << 24 | XS[NR >>> 16 & 255] << 16 | XS[NR >>> 8 & 255] << 8 | XS[NR & 255];
              NR ^= N5[Nq / Nv | 0] << 24;
            }
            NE[Nq] = NE[Nq - Nv] ^ NR;
          }
        }
        var NM = this._invKeySchedule = [];
        for (var NJ = 0; NJ < NK; NJ++) {
          var NR;
          var Nq = NK - NJ;
          NR = NJ % 4 ? NE[Nq] : NE[Nq - 4];
          NM[NJ] = NJ < 4 || Nq <= 4 ? NR : XZ[XS[NR >>> 24]] ^ XF[XS[NR >>> 16 & 255]] ^ XV[XS[NR >>> 8 & 255]] ^ Xh[XS[NR & 255]];
        }
      }
    },
    encryptBlock: function (Nu, NU) {
      this._doCryptBlock(Nu, NU, this._keySchedule, XL, Xm, Xo, Xc, XS);
    },
    decryptBlock: function (Nu, NU) {
      var Nv = Nu[NU + 1];
      Nu[NU + 1] = Nu[NU + 3];
      Nu[NU + 3] = Nv;
      this._doCryptBlock(Nu, NU, this._invKeySchedule, XZ, XF, XV, Xh, Xd);
      var Nv = Nu[NU + 1];
      Nu[NU + 1] = Nu[NU + 3];
      Nu[NU + 3] = Nv;
    },
    _doCryptBlock: function (Nu, NU, Nv, NK, NE, Nq, NM, NJ) {
      for (var NR = this._nRounds, Ns = Nu[NU] ^ Nv[0], Nw = Nu[NU + 1] ^ Nv[1], Nf = Nu[NU + 2] ^ Nv[2], NW = Nu[NU + 3] ^ Nv[3], NP = 4, Nn = 1; Nn < NR; Nn++) {
        var Ny = NK[Ns >>> 24] ^ NE[Nw >>> 16 & 255] ^ Nq[Nf >>> 8 & 255] ^ NM[NW & 255] ^ Nv[NP++];
        var ND = NK[Nw >>> 24] ^ NE[Nf >>> 16 & 255] ^ Nq[NW >>> 8 & 255] ^ NM[Ns & 255] ^ Nv[NP++];
        var Np = NK[Nf >>> 24] ^ NE[NW >>> 16 & 255] ^ Nq[Ns >>> 8 & 255] ^ NM[Nw & 255] ^ Nv[NP++];
        var Nt = NK[NW >>> 24] ^ NE[Ns >>> 16 & 255] ^ Nq[Nw >>> 8 & 255] ^ NM[Nf & 255] ^ Nv[NP++];
        var Ns = Ny;
        var Nw = ND;
        var Nf = Np;
        var NW = Nt;
      }
      Ny = (NJ[Ns >>> 24] << 24 | NJ[Nw >>> 16 & 255] << 16 | NJ[Nf >>> 8 & 255] << 8 | NJ[NW & 255]) ^ Nv[NP++];
      ND = (NJ[Nw >>> 24] << 24 | NJ[Nf >>> 16 & 255] << 16 | NJ[NW >>> 8 & 255] << 8 | NJ[Ns & 255]) ^ Nv[NP++];
      Np = (NJ[Nf >>> 24] << 24 | NJ[NW >>> 16 & 255] << 16 | NJ[Ns >>> 8 & 255] << 8 | NJ[Nw & 255]) ^ Nv[NP++];
      Nt = (NJ[NW >>> 24] << 24 | NJ[Ns >>> 16 & 255] << 16 | NJ[Nw >>> 8 & 255] << 8 | NJ[Nf & 255]) ^ Nv[NP++];
      Nu[NU] = Ny;
      Nu[NU + 1] = ND;
      Nu[NU + 2] = Np;
      Nu[NU + 3] = Nt;
    },
    keySize: 8
  });
  Xa.AES = Ch._createHelper(Cc);
  var N6 = Co;
  var N7 = (Xa = N6.lib).WordArray;
  var Xa = Xa.BlockCipher;
  var Ch = N6.algo;
  var N8 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
  var N9 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
  var NC = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
  var NX = [{
    0: 8421888,
    268435456: 32768,
    536870912: 8421378,
    805306368: 2,
    1073741824: 512,
    1342177280: 8421890,
    1610612736: 8389122,
    1879048192: 8388608,
    2147483648: 514,
    2415919104: 8389120,
    2684354560: 33280,
    2952790016: 8421376,
    3221225472: 32770,
    3489660928: 8388610,
    3758096384: 0,
    4026531840: 33282,
    134217728: 0,
    402653184: 8421890,
    671088640: 33282,
    939524096: 32768,
    1207959552: 8421888,
    1476395008: 512,
    1744830464: 8421378,
    2013265920: 2,
    2281701376: 8389120,
    2550136832: 33280,
    2818572288: 8421376,
    3087007744: 8389122,
    3355443200: 8388610,
    3623878656: 32770,
    3892314112: 514,
    4160749568: 8388608,
    1: 32768,
    268435457: 2,
    536870913: 8421888,
    805306369: 8388608,
    1073741825: 8421378,
    1342177281: 33280,
    1610612737: 512,
    1879048193: 8389122,
    2147483649: 8421890,
    2415919105: 8421376,
    2684354561: 8388610,
    2952790017: 33282,
    3221225473: 514,
    3489660929: 8389120,
    3758096385: 32770,
    4026531841: 0,
    134217729: 8421890,
    402653185: 8421376,
    671088641: 8388608,
    939524097: 512,
    1207959553: 32768,
    1476395009: 8388610,
    1744830465: 2,
    2013265921: 33282,
    2281701377: 32770,
    2550136833: 8389122,
    2818572289: 514,
    3087007745: 8421888,
    3355443201: 8389120,
    3623878657: 0,
    3892314113: 33280,
    4160749569: 8421378
  }, {
    0: 1074282512,
    16777216: 16384,
    33554432: 524288,
    50331648: 1074266128,
    67108864: 1073741840,
    83886080: 1074282496,
    100663296: 1073758208,
    117440512: 16,
    134217728: 540672,
    150994944: 1073758224,
    167772160: 1073741824,
    184549376: 540688,
    201326592: 524304,
    218103808: 0,
    234881024: 16400,
    251658240: 1074266112,
    8388608: 1073758208,
    25165824: 540688,
    41943040: 16,
    58720256: 1073758224,
    75497472: 1074282512,
    92274688: 1073741824,
    109051904: 524288,
    125829120: 1074266128,
    142606336: 524304,
    159383552: 0,
    176160768: 16384,
    192937984: 1074266112,
    209715200: 1073741840,
    226492416: 540672,
    243269632: 1074282496,
    260046848: 16400,
    268435456: 0,
    285212672: 1074266128,
    301989888: 1073758224,
    318767104: 1074282496,
    335544320: 1074266112,
    352321536: 16,
    369098752: 540688,
    385875968: 16384,
    402653184: 16400,
    419430400: 524288,
    436207616: 524304,
    452984832: 1073741840,
    469762048: 540672,
    486539264: 1073758208,
    503316480: 1073741824,
    520093696: 1074282512,
    276824064: 540688,
    293601280: 524288,
    310378496: 1074266112,
    327155712: 16384,
    343932928: 1073758208,
    360710144: 1074282512,
    377487360: 16,
    394264576: 1073741824,
    411041792: 1074282496,
    427819008: 1073741840,
    444596224: 1073758224,
    461373440: 524304,
    478150656: 0,
    494927872: 16400,
    511705088: 1074266128,
    528482304: 540672
  }, {
    0: 260,
    1048576: 0,
    2097152: 67109120,
    3145728: 65796,
    4194304: 65540,
    5242880: 67108868,
    6291456: 67174660,
    7340032: 67174400,
    8388608: 67108864,
    9437184: 67174656,
    10485760: 65792,
    11534336: 67174404,
    12582912: 67109124,
    13631488: 65536,
    14680064: 4,
    15728640: 256,
    524288: 67174656,
    1572864: 67174404,
    2621440: 0,
    3670016: 67109120,
    4718592: 67108868,
    5767168: 65536,
    6815744: 65540,
    7864320: 260,
    8912896: 4,
    9961472: 256,
    11010048: 67174400,
    12058624: 65796,
    13107200: 65792,
    14155776: 67109124,
    15204352: 67174660,
    16252928: 67108864,
    16777216: 67174656,
    17825792: 65540,
    18874368: 65536,
    19922944: 67109120,
    20971520: 256,
    22020096: 67174660,
    23068672: 67108868,
    24117248: 0,
    25165824: 67109124,
    26214400: 67108864,
    27262976: 4,
    28311552: 65792,
    29360128: 67174400,
    30408704: 260,
    31457280: 65796,
    32505856: 67174404,
    17301504: 67108864,
    18350080: 260,
    19398656: 67174656,
    20447232: 0,
    21495808: 65540,
    22544384: 67109120,
    23592960: 256,
    24641536: 67174404,
    25690112: 65536,
    26738688: 67174660,
    27787264: 65796,
    28835840: 67108868,
    29884416: 67109124,
    30932992: 67174400,
    31981568: 4,
    33030144: 65792
  }, {
    0: 2151682048,
    65536: 2147487808,
    131072: 4198464,
    196608: 2151677952,
    262144: 0,
    327680: 4198400,
    393216: 2147483712,
    458752: 4194368,
    524288: 2147483648,
    589824: 4194304,
    655360: 64,
    720896: 2147487744,
    786432: 2151678016,
    851968: 4160,
    917504: 4096,
    983040: 2151682112,
    32768: 2147487808,
    98304: 64,
    163840: 2151678016,
    229376: 2147487744,
    294912: 4198400,
    360448: 2151682112,
    425984: 0,
    491520: 2151677952,
    557056: 4096,
    622592: 2151682048,
    688128: 4194304,
    753664: 4160,
    819200: 2147483648,
    884736: 4194368,
    950272: 4198464,
    1015808: 2147483712,
    1048576: 4194368,
    1114112: 4198400,
    1179648: 2147483712,
    1245184: 0,
    1310720: 4160,
    1376256: 2151678016,
    1441792: 2151682048,
    1507328: 2147487808,
    1572864: 2151682112,
    1638400: 2147483648,
    1703936: 2151677952,
    1769472: 4198464,
    1835008: 2147487744,
    1900544: 4194304,
    1966080: 64,
    2031616: 4096,
    1081344: 2151677952,
    1146880: 2151682112,
    1212416: 0,
    1277952: 4198400,
    1343488: 4194368,
    1409024: 2147483648,
    1474560: 2147487808,
    1540096: 64,
    1605632: 2147483712,
    1671168: 4096,
    1736704: 2147487744,
    1802240: 2151678016,
    1867776: 4160,
    1933312: 2151682048,
    1998848: 4194304,
    2064384: 4198464
  }, {
    0: 128,
    4096: 17039360,
    8192: 262144,
    12288: 536870912,
    16384: 537133184,
    20480: 16777344,
    24576: 553648256,
    28672: 262272,
    32768: 16777216,
    36864: 537133056,
    40960: 536871040,
    45056: 553910400,
    49152: 553910272,
    53248: 0,
    57344: 17039488,
    61440: 553648128,
    2048: 17039488,
    6144: 553648256,
    10240: 128,
    14336: 17039360,
    18432: 262144,
    22528: 537133184,
    26624: 553910272,
    30720: 536870912,
    34816: 537133056,
    38912: 0,
    43008: 553910400,
    47104: 16777344,
    51200: 536871040,
    55296: 553648128,
    59392: 16777216,
    63488: 262272,
    65536: 262144,
    69632: 128,
    73728: 536870912,
    77824: 553648256,
    81920: 16777344,
    86016: 553910272,
    90112: 537133184,
    94208: 16777216,
    98304: 553910400,
    102400: 553648128,
    106496: 17039360,
    110592: 537133056,
    114688: 262272,
    118784: 536871040,
    122880: 0,
    126976: 17039488,
    67584: 553648256,
    71680: 16777216,
    75776: 17039360,
    79872: 537133184,
    83968: 536870912,
    88064: 17039488,
    92160: 128,
    96256: 553910272,
    100352: 262272,
    104448: 553910400,
    108544: 0,
    112640: 553648128,
    116736: 16777344,
    120832: 262144,
    124928: 537133056,
    129024: 536871040
  }, {
    0: 268435464,
    256: 8192,
    512: 270532608,
    768: 270540808,
    1024: 268443648,
    1280: 2097152,
    1536: 2097160,
    1792: 268435456,
    2048: 0,
    2304: 268443656,
    2560: 2105344,
    2816: 8,
    3072: 270532616,
    3328: 2105352,
    3584: 8200,
    3840: 270540800,
    128: 270532608,
    384: 270540808,
    640: 8,
    896: 2097152,
    1152: 2105352,
    1408: 268435464,
    1664: 268443648,
    1920: 8200,
    2176: 2097160,
    2432: 8192,
    2688: 268443656,
    2944: 270532616,
    3200: 0,
    3456: 270540800,
    3712: 2105344,
    3968: 268435456,
    4096: 268443648,
    4352: 270532616,
    4608: 270540808,
    4864: 8200,
    5120: 2097152,
    5376: 268435456,
    5632: 268435464,
    5888: 2105344,
    6144: 2105352,
    6400: 0,
    6656: 8,
    6912: 270532608,
    7168: 8192,
    7424: 268443656,
    7680: 270540800,
    7936: 2097160,
    4224: 8,
    4480: 2105344,
    4736: 2097152,
    4992: 268435464,
    5248: 268443648,
    5504: 8200,
    5760: 270540808,
    6016: 270532608,
    6272: 270540800,
    6528: 270532616,
    6784: 8192,
    7040: 2105352,
    7296: 2097160,
    7552: 0,
    7808: 268435456,
    8064: 268443656
  }, {
    0: 1048576,
    16: 33555457,
    32: 1024,
    48: 1049601,
    64: 34604033,
    80: 0,
    96: 1,
    112: 34603009,
    128: 33555456,
    144: 1048577,
    160: 33554433,
    176: 34604032,
    192: 34603008,
    208: 1025,
    224: 1049600,
    240: 33554432,
    8: 34603009,
    24: 0,
    40: 33555457,
    56: 34604032,
    72: 1048576,
    88: 33554433,
    104: 33554432,
    120: 1025,
    136: 1049601,
    152: 33555456,
    168: 34603008,
    184: 1048577,
    200: 1024,
    216: 34604033,
    232: 1,
    248: 1049600,
    256: 33554432,
    272: 1048576,
    288: 33555457,
    304: 34603009,
    320: 1048577,
    336: 33555456,
    352: 34604032,
    368: 1049601,
    384: 1025,
    400: 34604033,
    416: 1049600,
    432: 1,
    448: 0,
    464: 34603008,
    480: 33554433,
    496: 1024,
    264: 1049600,
    280: 33555457,
    296: 34603009,
    312: 1,
    328: 33554432,
    344: 1048576,
    360: 1025,
    376: 34604032,
    392: 33554433,
    408: 34603008,
    424: 0,
    440: 34604033,
    456: 1049601,
    472: 1024,
    488: 33555456,
    504: 1048577
  }, {
    0: 134219808,
    1: 131072,
    2: 134217728,
    3: 32,
    4: 131104,
    5: 134350880,
    6: 134350848,
    7: 2048,
    8: 134348800,
    9: 134219776,
    10: 133120,
    11: 134348832,
    12: 2080,
    13: 0,
    14: 134217760,
    15: 133152,
    2147483648: 2048,
    2147483649: 134350880,
    2147483650: 134219808,
    2147483651: 134217728,
    2147483652: 134348800,
    2147483653: 133120,
    2147483654: 133152,
    2147483655: 32,
    2147483656: 134217760,
    2147483657: 2080,
    2147483658: 131104,
    2147483659: 134350848,
    2147483660: 0,
    2147483661: 134348832,
    2147483662: 134219776,
    2147483663: 131072,
    16: 133152,
    17: 134350848,
    18: 32,
    19: 2048,
    20: 134219776,
    21: 134217760,
    22: 134348832,
    23: 131072,
    24: 0,
    25: 131104,
    26: 134348800,
    27: 134219808,
    28: 134350880,
    29: 133120,
    30: 2080,
    31: 134217728,
    2147483664: 131072,
    2147483665: 2048,
    2147483666: 134348832,
    2147483667: 133152,
    2147483668: 32,
    2147483669: 134348800,
    2147483670: 134217728,
    2147483671: 134219808,
    2147483672: 134350880,
    2147483673: 134217760,
    2147483674: 134219776,
    2147483675: 0,
    2147483676: 133120,
    2147483677: 2080,
    2147483678: 131104,
    2147483679: 134350848
  }];
  var NN = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
  var Nl = Ch.DES = Xa.extend({
    _doReset: function () {
      var Nu = this._key.words;
      var NU = [];
      for (var Nv = 0; Nv < 56; Nv++) {
        var NK = N8[Nv] - 1;
        NU[Nv] = Nu[NK >>> 5] >>> 31 - NK % 32 & 1;
      }
      var NE = this._subKeys = [];
      for (var Nq = 0; Nq < 16; Nq++) {
        var NM = NE[Nq] = [];
        var NJ = NC[Nq];
        for (var Nv = 0; Nv < 24; Nv++) {
          NM[Nv / 6 | 0] |= NU[(N9[Nv] - 1 + NJ) % 28] << 31 - Nv % 6;
          NM[4 + (Nv / 6 | 0)] |= NU[28 + (N9[Nv + 24] - 1 + NJ) % 28] << 31 - Nv % 6;
        }
        NM[0] = NM[0] << 1 | NM[0] >>> 31;
        for (Nv = 1; Nv < 7; Nv++) {
          NM[Nv] = NM[Nv] >>> (Nv - 1) * 4 + 3;
        }
        NM[7] = NM[7] << 5 | NM[7] >>> 27;
      }
      var NR = this._invSubKeys = [];
      for (var Nv = 0; Nv < 16; Nv++) {
        NR[Nv] = NE[15 - Nv];
      }
    },
    encryptBlock: function (Nu, NU) {
      this._doCryptBlock(Nu, NU, this._subKeys);
    },
    decryptBlock: function (Nu, NU) {
      this._doCryptBlock(Nu, NU, this._invSubKeys);
    },
    _doCryptBlock: function (Nu, NU, Nv) {
      this._lBlock = Nu[NU];
      this._rBlock = Nu[NU + 1];
      NO.call(this, 4, 252645135);
      NO.call(this, 16, 65535);
      NB.call(this, 2, 858993459);
      NB.call(this, 8, 16711935);
      NO.call(this, 1, 1431655765);
      for (var NK = 0; NK < 16; NK++) {
        var NE = Nv[NK];
        var Nq = this._lBlock;
        var NM = this._rBlock;
        var NJ = 0;
        for (var NR = 0; NR < 8; NR++) {
          NJ |= NX[NR][((NM ^ NE[NR]) & NN[NR]) >>> 0];
        }
        this._lBlock = NM;
        this._rBlock = Nq ^ NJ;
      }
      var Ns = this._lBlock;
      this._lBlock = this._rBlock;
      this._rBlock = Ns;
      NO.call(this, 1, 1431655765);
      NB.call(this, 8, 16711935);
      NB.call(this, 2, 858993459);
      NO.call(this, 16, 65535);
      NO.call(this, 4, 252645135);
      Nu[NU] = this._lBlock;
      Nu[NU + 1] = this._rBlock;
    },
    keySize: 2,
    ivSize: 2,
    blockSize: 2
  });
  function NO(Nu, NU) {
    NU = (this._lBlock >>> Nu ^ this._rBlock) & NU;
    this._rBlock ^= NU;
    this._lBlock ^= NU << Nu;
  }
  function NB(Nu, NU) {
    NU = (this._rBlock >>> Nu ^ this._lBlock) & NU;
    this._lBlock ^= NU;
    this._rBlock ^= NU << Nu;
  }
  N6.DES = Xa._createHelper(Nl);
  Ch = Ch.TripleDES = Xa.extend({
    _doReset: function () {
      var Nu = this._key.words;
      if (Nu.length !== 2 && Nu.length !== 4 && Nu.length < 6) {
        throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
      }
      var NU = Nu.slice(0, 2);
      var Nv = Nu.length < 4 ? Nu.slice(0, 2) : Nu.slice(2, 4);
      var Nu = Nu.length < 6 ? Nu.slice(0, 2) : Nu.slice(4, 6);
      this._des1 = Nl.createEncryptor(N7.create(NU));
      this._des2 = Nl.createEncryptor(N7.create(Nv));
      this._des3 = Nl.createEncryptor(N7.create(Nu));
    },
    encryptBlock: function (Nu, NU) {
      this._des1.encryptBlock(Nu, NU);
      this._des2.decryptBlock(Nu, NU);
      this._des3.encryptBlock(Nu, NU);
    },
    decryptBlock: function (Nu, NU) {
      this._des3.decryptBlock(Nu, NU);
      this._des2.encryptBlock(Nu, NU);
      this._des1.decryptBlock(Nu, NU);
    },
    keySize: 6,
    ivSize: 2,
    blockSize: 2
  });
  N6.TripleDES = Xa._createHelper(Ch);
  var Cc = Co;
  var N6 = Cc.lib.StreamCipher;
  var Xa = Cc.algo;
  var NG = Xa.RC4 = N6.extend({
    _doReset: function () {
      var Nu = this._key;
      var NU = Nu.words;
      var Nv = Nu.sigBytes;
      var NK = this._S = [];
      for (var NE = 0; NE < 256; NE++) {
        NK[NE] = NE;
      }
      for (var NE = 0, Nq = 0; NE < 256; NE++) {
        var NM = NE % Nv;
        var NM = NU[NM >>> 2] >>> 24 - NM % 4 * 8 & 255;
        var Nq = (Nq + NK[NE] + NM) % 256;
        var NM = NK[NE];
        NK[NE] = NK[Nq];
        NK[Nq] = NM;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function (Nu, NU) {
      Nu[NU] ^= Nb.call(this);
    },
    keySize: 8,
    ivSize: 0
  });
  function Nb() {
    var Nu = this._S;
    var NU = this._i;
    var Nv = this._j;
    var NK = 0;
    for (var NE = 0; NE < 4; NE++) {
      var Nv = (Nv + Nu[NU = (NU + 1) % 256]) % 256;
      var Nq = Nu[NU];
      Nu[NU] = Nu[Nv];
      Nu[Nv] = Nq;
      NK |= Nu[(Nu[NU] + Nu[Nv]) % 256] << 24 - NE * 8;
    }
    this._i = NU;
    this._j = Nv;
    return NK;
  }
  function NT() {
    var Nu = this._X;
    var NU = this._C;
    for (var Nv = 0; Nv < 8; Nv++) {
      Ca[Nv] = NU[Nv];
    }
    NU[0] = NU[0] + 1295307597 + this._b | 0;
    NU[1] = NU[1] + 3545052371 + (NU[0] >>> 0 < Ca[0] >>> 0 ? 1 : 0) | 0;
    NU[2] = NU[2] + 886263092 + (NU[1] >>> 0 < Ca[1] >>> 0 ? 1 : 0) | 0;
    NU[3] = NU[3] + 1295307597 + (NU[2] >>> 0 < Ca[2] >>> 0 ? 1 : 0) | 0;
    NU[4] = NU[4] + 3545052371 + (NU[3] >>> 0 < Ca[3] >>> 0 ? 1 : 0) | 0;
    NU[5] = NU[5] + 886263092 + (NU[4] >>> 0 < Ca[4] >>> 0 ? 1 : 0) | 0;
    NU[6] = NU[6] + 1295307597 + (NU[5] >>> 0 < Ca[5] >>> 0 ? 1 : 0) | 0;
    NU[7] = NU[7] + 3545052371 + (NU[6] >>> 0 < Ca[6] >>> 0 ? 1 : 0) | 0;
    this._b = NU[7] >>> 0 < Ca[7] >>> 0 ? 1 : 0;
    for (Nv = 0; Nv < 8; Nv++) {
      var NK = Nu[Nv] + NU[Nv];
      var NE = NK & 65535;
      var Nq = NK >>> 16;
      CS[Nv] = ((NE * NE >>> 17) + NE * Nq >>> 15) + Nq * Nq ^ ((NK & 4294901760) * NK | 0) + ((NK & 65535) * NK | 0);
    }
    Nu[0] = CS[0] + (CS[7] << 16 | CS[7] >>> 16) + (CS[6] << 16 | CS[6] >>> 16) | 0;
    Nu[1] = CS[1] + (CS[0] << 8 | CS[0] >>> 24) + CS[7] | 0;
    Nu[2] = CS[2] + (CS[1] << 16 | CS[1] >>> 16) + (CS[0] << 16 | CS[0] >>> 16) | 0;
    Nu[3] = CS[3] + (CS[2] << 8 | CS[2] >>> 24) + CS[1] | 0;
    Nu[4] = CS[4] + (CS[3] << 16 | CS[3] >>> 16) + (CS[2] << 16 | CS[2] >>> 16) | 0;
    Nu[5] = CS[5] + (CS[4] << 8 | CS[4] >>> 24) + CS[3] | 0;
    Nu[6] = CS[6] + (CS[5] << 16 | CS[5] >>> 16) + (CS[4] << 16 | CS[4] >>> 16) | 0;
    Nu[7] = CS[7] + (CS[6] << 8 | CS[6] >>> 24) + CS[5] | 0;
  }
  function Ni() {
    var Nu = this._X;
    var NU = this._C;
    for (var Nv = 0; Nv < 8; Nv++) {
      CL[Nv] = NU[Nv];
    }
    NU[0] = NU[0] + 1295307597 + this._b | 0;
    NU[1] = NU[1] + 3545052371 + (NU[0] >>> 0 < CL[0] >>> 0 ? 1 : 0) | 0;
    NU[2] = NU[2] + 886263092 + (NU[1] >>> 0 < CL[1] >>> 0 ? 1 : 0) | 0;
    NU[3] = NU[3] + 1295307597 + (NU[2] >>> 0 < CL[2] >>> 0 ? 1 : 0) | 0;
    NU[4] = NU[4] + 3545052371 + (NU[3] >>> 0 < CL[3] >>> 0 ? 1 : 0) | 0;
    NU[5] = NU[5] + 886263092 + (NU[4] >>> 0 < CL[4] >>> 0 ? 1 : 0) | 0;
    NU[6] = NU[6] + 1295307597 + (NU[5] >>> 0 < CL[5] >>> 0 ? 1 : 0) | 0;
    NU[7] = NU[7] + 3545052371 + (NU[6] >>> 0 < CL[6] >>> 0 ? 1 : 0) | 0;
    this._b = NU[7] >>> 0 < CL[7] >>> 0 ? 1 : 0;
    for (Nv = 0; Nv < 8; Nv++) {
      var NK = Nu[Nv] + NU[Nv];
      var NE = NK & 65535;
      var Nq = NK >>> 16;
      Cm[Nv] = ((NE * NE >>> 17) + NE * Nq >>> 15) + Nq * Nq ^ ((NK & 4294901760) * NK | 0) + ((NK & 65535) * NK | 0);
    }
    Nu[0] = Cm[0] + (Cm[7] << 16 | Cm[7] >>> 16) + (Cm[6] << 16 | Cm[6] >>> 16) | 0;
    Nu[1] = Cm[1] + (Cm[0] << 8 | Cm[0] >>> 24) + Cm[7] | 0;
    Nu[2] = Cm[2] + (Cm[1] << 16 | Cm[1] >>> 16) + (Cm[0] << 16 | Cm[0] >>> 16) | 0;
    Nu[3] = Cm[3] + (Cm[2] << 8 | Cm[2] >>> 24) + Cm[1] | 0;
    Nu[4] = Cm[4] + (Cm[3] << 16 | Cm[3] >>> 16) + (Cm[2] << 16 | Cm[2] >>> 16) | 0;
    Nu[5] = Cm[5] + (Cm[4] << 8 | Cm[4] >>> 24) + Cm[3] | 0;
    Nu[6] = Cm[6] + (Cm[5] << 16 | Cm[5] >>> 16) + (Cm[4] << 16 | Cm[4] >>> 16) | 0;
    Nu[7] = Cm[7] + (Cm[6] << 8 | Cm[6] >>> 24) + Cm[5] | 0;
  }
  Cc.RC4 = N6._createHelper(NG);
  Xa = Xa.RC4Drop = NG.extend({
    cfg: NG.cfg.extend({
      drop: 192
    }),
    _doReset: function () {
      NG._doReset.call(this);
      for (var Nu = this.cfg.drop; Nu > 0; Nu--) {
        Nb.call(this);
      }
    }
  });
  Cc.RC4Drop = N6._createHelper(Xa);
  Cc = (Ch = Co).lib.StreamCipher;
  N6 = Ch.algo;
  Cx = [];
  Ca = [];
  CS = [];
  N6 = N6.Rabbit = Cc.extend({
    _doReset: function () {
      var Nu = this._key.words;
      var NU = this.cfg.iv;
      for (var Nv = 0; Nv < 4; Nv++) {
        Nu[Nv] = (Nu[Nv] << 8 | Nu[Nv] >>> 24) & 16711935 | (Nu[Nv] << 24 | Nu[Nv] >>> 8) & 4278255360;
      }
      var NK = this._X = [Nu[0], Nu[3] << 16 | Nu[2] >>> 16, Nu[1], Nu[0] << 16 | Nu[3] >>> 16, Nu[2], Nu[1] << 16 | Nu[0] >>> 16, Nu[3], Nu[2] << 16 | Nu[1] >>> 16];
      var NE = this._C = [Nu[2] << 16 | Nu[2] >>> 16, Nu[0] & 4294901760 | Nu[1] & 65535, Nu[3] << 16 | Nu[3] >>> 16, Nu[1] & 4294901760 | Nu[2] & 65535, Nu[0] << 16 | Nu[0] >>> 16, Nu[2] & 4294901760 | Nu[3] & 65535, Nu[1] << 16 | Nu[1] >>> 16, Nu[3] & 4294901760 | Nu[0] & 65535];
      for (var Nv = this._b = 0; Nv < 4; Nv++) {
        NT.call(this);
      }
      for (Nv = 0; Nv < 8; Nv++) {
        NE[Nv] ^= NK[Nv + 4 & 7];
      }
      if (NU) {
        var NU = NU.words;
        var Nq = NU[0];
        var NU = NU[1];
        var Nq = (Nq << 8 | Nq >>> 24) & 16711935 | (Nq << 24 | Nq >>> 8) & 4278255360;
        var NU = (NU << 8 | NU >>> 24) & 16711935 | (NU << 24 | NU >>> 8) & 4278255360;
        var NM = Nq >>> 16 | NU & 4294901760;
        var NJ = NU << 16 | Nq & 65535;
        NE[0] ^= Nq;
        NE[1] ^= NM;
        NE[2] ^= NU;
        NE[3] ^= NJ;
        NE[4] ^= Nq;
        NE[5] ^= NM;
        NE[6] ^= NU;
        NE[7] ^= NJ;
        for (Nv = 0; Nv < 4; Nv++) {
          NT.call(this);
        }
      }
    },
    _doProcessBlock: function (Nu, NU) {
      var Nv = this._X;
      NT.call(this);
      Cx[0] = Nv[0] ^ Nv[5] >>> 16 ^ Nv[3] << 16;
      Cx[1] = Nv[2] ^ Nv[7] >>> 16 ^ Nv[5] << 16;
      Cx[2] = Nv[4] ^ Nv[1] >>> 16 ^ Nv[7] << 16;
      Cx[3] = Nv[6] ^ Nv[3] >>> 16 ^ Nv[1] << 16;
      for (var NK = 0; NK < 4; NK++) {
        Cx[NK] = (Cx[NK] << 8 | Cx[NK] >>> 24) & 16711935 | (Cx[NK] << 24 | Cx[NK] >>> 8) & 4278255360;
        Nu[NU + NK] ^= Cx[NK];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  Ch.Rabbit = Cc._createHelper(N6);
  Ch = (Xa = Co).lib.StreamCipher;
  Cc = Xa.algo;
  Cd = [];
  CL = [];
  Cm = [];
  Cc = Cc.RabbitLegacy = Ch.extend({
    _doReset: function () {
      var Nu = this._key.words;
      var NU = this.cfg.iv;
      var Nv = this._X = [Nu[0], Nu[3] << 16 | Nu[2] >>> 16, Nu[1], Nu[0] << 16 | Nu[3] >>> 16, Nu[2], Nu[1] << 16 | Nu[0] >>> 16, Nu[3], Nu[2] << 16 | Nu[1] >>> 16];
      var NK = this._C = [Nu[2] << 16 | Nu[2] >>> 16, Nu[0] & 4294901760 | Nu[1] & 65535, Nu[3] << 16 | Nu[3] >>> 16, Nu[1] & 4294901760 | Nu[2] & 65535, Nu[0] << 16 | Nu[0] >>> 16, Nu[2] & 4294901760 | Nu[3] & 65535, Nu[1] << 16 | Nu[1] >>> 16, Nu[3] & 4294901760 | Nu[0] & 65535];
      for (var NE = this._b = 0; NE < 4; NE++) {
        Ni.call(this);
      }
      for (NE = 0; NE < 8; NE++) {
        NK[NE] ^= Nv[NE + 4 & 7];
      }
      if (NU) {
        var Nu = NU.words;
        var NU = Nu[0];
        var Nu = Nu[1];
        var NU = (NU << 8 | NU >>> 24) & 16711935 | (NU << 24 | NU >>> 8) & 4278255360;
        var Nu = (Nu << 8 | Nu >>> 24) & 16711935 | (Nu << 24 | Nu >>> 8) & 4278255360;
        var Nq = NU >>> 16 | Nu & 4294901760;
        var NM = Nu << 16 | NU & 65535;
        NK[0] ^= NU;
        NK[1] ^= Nq;
        NK[2] ^= Nu;
        NK[3] ^= NM;
        NK[4] ^= NU;
        NK[5] ^= Nq;
        NK[6] ^= Nu;
        NK[7] ^= NM;
        for (NE = 0; NE < 4; NE++) {
          Ni.call(this);
        }
      }
    },
    _doProcessBlock: function (Nu, NU) {
      var Nv = this._X;
      Ni.call(this);
      Cd[0] = Nv[0] ^ Nv[5] >>> 16 ^ Nv[3] << 16;
      Cd[1] = Nv[2] ^ Nv[7] >>> 16 ^ Nv[5] << 16;
      Cd[2] = Nv[4] ^ Nv[1] >>> 16 ^ Nv[7] << 16;
      Cd[3] = Nv[6] ^ Nv[3] >>> 16 ^ Nv[1] << 16;
      for (var NK = 0; NK < 4; NK++) {
        Cd[NK] = (Cd[NK] << 8 | Cd[NK] >>> 24) & 16711935 | (Cd[NK] << 24 | Cd[NK] >>> 8) & 4278255360;
        Nu[NU + NK] ^= Cd[NK];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  Xa.RabbitLegacy = Ch._createHelper(Cc);
  return Co;
});
const G = (C6, C7) => {
  try {
    var C8 = CryptoJS.AES.decrypt(C6, C7);
    return JSON.parse(C8.toString(CryptoJS.enc.Utf8));
  } catch (C9) {
    console.log(C9.message);
  }
  return [];
};
const b = C6 => Array.isArray(C6);
const T = (...C6) => C6.join("");
const i = () => {
  if (Q.getPosition() > 10) {
    Q.seek(Q.getPosition() - 10);
  } else {
    Q.seek(0);
  }
};
const u = () => {
  if (Q.getPosition() < Q.getDuration()) {
    Q.seek(Q.getPosition() + 10);
  }
};
const U = () => {
  window.open("/embed-2/download/" + z, "_blank");
};
const v = () => {
  window.open("/embed-1/download/" + z, "_blank");
};
const K = C6 => typeof Storage != "undefined" && localStorage.getItem(C6) ? localStorage.getItem(C6) : null;
const E = (C6, C7) => {
  if (typeof Storage != "undefined") {
    localStorage.setItem(C6, C7);
  }
};
const q = C6 => {
  if (typeof Storage != "undefined") {
    localStorage.removeItem(C6);
  }
};
const M = C6 => {
  let C7 = "";
  let C8 = C6;
  let C9 = 0;
  for (let CN = 0; CN < numberOfPartKey; CN++) {
    let Cl;
    let CO;
    switch (CN) {
      case 0:
        Cl = partKeyStartPosition_0;
        CO = partKeyLength_0;
        break;
      case 1:
        Cl = partKeyStartPosition_1;
        CO = partKeyLength_1;
        break;
      case 2:
        Cl = partKeyStartPosition_2;
        CO = partKeyLength_2;
        break;
      case 3:
        Cl = partKeyStartPosition_3;
        CO = partKeyLength_3;
        break;
      case 4:
        Cl = partKeyStartPosition_4;
        CO = partKeyLength_4;
        break;
      case 5:
        Cl = partKeyStartPosition_5;
        CO = partKeyLength_5;
        break;
      case 6:
        Cl = partKeyStartPosition_6;
        CO = partKeyLength_6;
        break;
      case 7:
        Cl = partKeyStartPosition_7;
        CO = partKeyLength_7;
        break;
      case 8:
        Cl = partKeyStartPosition_8;
        CO = partKeyLength_8;
    }
    var CC = Cl + C9;
    var CX = CC + CO;
    C7 += C6.slice(CC, CX);
    C8 = C8.replace(C6.substring(CC, CX), "");
    C9 += CO;
  }
  return G(C8, C7);
};
let J;
(function () {
  const C6 = {};
  let C7;
  if (typeof document != "undefined" && document.currentScript !== null) {
    C7 = new URL(document.currentScript.src, location.href).toString();
  }
  let C8 = undefined;
  const C9 = new Array(128).fill(undefined);
  function CC(CQ) {
    return C9[CQ];
  }
  C9.push(undefined, null, true, false);
  let CX = 0;
  let CN = null;
  function Cl() {
    return CN = CN !== null && CN.byteLength !== 0 ? CN : new Uint8Array(C8.memory.buffer);
  }
  const CO = typeof TextEncoder != "undefined" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  };
  const CB = typeof CO.encodeInto == "function" ? function (CQ, Cj) {
    return CO.encodeInto(CQ, Cj);
  } : function (CQ, Cj) {
    var CY = CO.encode(CQ);
    Cj.set(CY);
    return {
      read: CQ.length,
      written: CY.length
    };
  };
  function CG(CQ, Cj, CY) {
    if (CY === undefined) {
      var Cz = CO.encode(CQ);
      const CS = Cj(Cz.length, 1) >>> 0;
      Cl().subarray(CS, CS + Cz.length).set(Cz);
      CX = Cz.length;
      return CS;
    }
    let Cg = CQ.length;
    let CH = Cj(Cg, 1) >>> 0;
    var Cx = Cl();
    let Ca = 0;
    for (; Ca < Cg; Ca++) {
      var Ce = CQ.charCodeAt(Ca);
      if (Ce > 127) {
        break;
      }
      Cx[CH + Ca] = Ce;
    }
    if (Ca !== Cg) {
      if (Ca !== 0) {
        CQ = CQ.slice(Ca);
      }
      CH = CY(CH, Cg, Cg = Ca + CQ.length * 3, 1) >>> 0;
      Cz = Cl().subarray(CH + Ca, CH + Cg);
      Cj = CB(CQ, Cz);
      Ca += Cj.written;
      CH = CY(CH, Cg, Ca, 1) >>> 0;
    }
    CX = Ca;
    return CH;
  }
  function Cb(CQ) {
    return CQ == null;
  }
  let CT = null;
  function Ci() {
    return CT = CT === null || CT.buffer.detached === true || CT.buffer.detached === undefined && CT.buffer !== C8.memory.buffer ? new DataView(C8.memory.buffer) : CT;
  }
  let Cu = C9.length;
  function CU(CQ) {
    if (!(CQ < 132)) {
      C9[CQ] = Cu;
      Cu = CQ;
    }
  }
  function Cv(CQ) {
    var Cj = CC(CQ);
    CU(CQ);
    return Cj;
  }
  const CK = typeof TextDecoder != "undefined" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  function CE(CQ, Cj) {
    CQ >>>= 0;
    return CK.decode(Cl().subarray(CQ, CQ + Cj));
  }
  function Cq(CQ) {
    if (Cu === C9.length) {
      C9.push(C9.length + 1);
    }
    var Cj = Cu;
    Cu = C9[Cj];
    C9[Cj] = CQ;
    return Cj;
  }
  if (typeof TextDecoder != "undefined") {
    CK.decode();
  }
  const CM = typeof FinalizationRegistry == "undefined" ? {
    register: () => {},
    unregister: () => {}
  } : new FinalizationRegistry(CQ => {
    C8.__wbindgen_export_2.get(CQ.dtor)(CQ.a, CQ.b);
  });
  function CJ(CQ, Cj, CY, Cz) {
    const Cg = {
      a: CQ,
      b: Cj,
      cnt: 1,
      dtor: CY
    };
    CQ = (...CH) => {
      Cg.cnt++;
      try {
        return Cz(Cg.a, Cg.b, ...CH);
      } finally {
        if (--Cg.cnt == 0) {
          C8.__wbindgen_export_2.get(Cg.dtor)(Cg.a, Cg.b);
          Cg.a = 0;
          CM.unregister(Cg);
        }
      }
    };
    CQ.original = Cg;
    CM.register(CQ, Cg, Cg);
    return CQ;
  }
  function CR(CQ, Cj) {
    return Cv(C8.__wbindgen_export_3(CQ, Cj));
  }
  function Cs(CQ, Cj, CY) {
    C8.__wbindgen_export_4(CQ, Cj, Cq(CY));
  }
  function Cw(CQ, Cj) {
    C8.__wbindgen_export_5(CQ, Cj);
  }
  function Cf(CQ, Cj) {
    try {
      return CQ.apply(this, Cj);
    } catch (CY) {
      C8.__wbindgen_export_6(Cq(CY));
    }
  }
  function CW(CQ, Cj) {
    Cj = Cj(+CQ.length, 1) >>> 0;
    Cl().set(CQ, Cj);
    CX = CQ.length;
    return Cj;
  }
  async function CP(CQ, Cj) {
    var CY;
    var Cz;
    if (typeof Response == "function" && CQ instanceof Response) {
      CY = await CQ.arrayBuffer();
      Cz = await WebAssembly.instantiate(CY, Cj);
      return Object.assign(Cz, {
        bytes: CY
      });
    } else if ((Cz = await WebAssembly.instantiate(CQ, Cj)) instanceof WebAssembly.Instance) {
      return {
        instance: Cz,
        module: CQ
      };
    } else {
      return Cz;
    }
  }
  function Cn() {
    const CQ = {
      wbg: {}
    };
    CQ.wbg.__wbindgen_is_undefined = function (Cj) {
      return CC(Cj) === undefined;
    };
    CQ.wbg.__wbindgen_is_null = function (Cj) {
      return CC(Cj) === null;
    };
    CQ.wbg.__wbindgen_string_get = function (Cj, CY) {
      var CY = CC(CY);
      var CY = typeof CY == "string" ? CY : undefined;
      var CY = Cb(CY) ? 0 : CG(CY, C8.__wbindgen_export_0, C8.__wbindgen_export_1);
      var Cz = CX;
      Ci().setInt32(Cj + 4, Cz, true);
      Ci().setInt32(Cj + 0, CY, true);
    };
    CQ.wbg.__wbindgen_object_drop_ref = function (Cj) {
      Cv(Cj);
    };
    CQ.wbg.__wbindgen_cb_drop = function (Cj) {
      Cj = Cv(Cj).original;
      return Cj.cnt-- == 1 && !(Cj.a = 0);
    };
    CQ.wbg.__wbindgen_string_new = function (Cj, CY) {
      return Cq(CE(Cj, CY));
    };
    CQ.wbg.__wbindgen_boolean_get = function (Cj) {
      Cj = CC(Cj);
      if (typeof Cj == "boolean") {
        if (Cj) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 2;
      }
    };
    CQ.wbg.__wbindgen_number_get = function (Cj, CY) {
      CY = CC(CY);
      CY = typeof CY == "number" ? CY : undefined;
      Ci().setFloat64(Cj + 8, Cb(CY) ? 0 : CY, true);
      Ci().setInt32(Cj + 0, !Cb(CY), true);
    };
    CQ.wbg.__wbg_instanceof_CanvasRenderingContext2d_4ec30ddd3f29f8f9 = function (Cj) {
      let CY;
      try {
        CY = CC(Cj) instanceof CanvasRenderingContext2D;
      } catch (Cz) {
        CY = false;
      }
      return CY;
    };
    CQ.wbg.__wbg_setfillStyle_59f426135f52910f = function (Cj, CY) {
      CC(Cj).fillStyle = CC(CY);
    };
    CQ.wbg.__wbg_setshadowBlur_229c56539d02f401 = function (Cj, CY) {
      CC(Cj).shadowBlur = CY;
    };
    CQ.wbg.__wbg_setshadowColor_340d5290cdc4ae9d = function (Cj, CY, Cz) {
      CC(Cj).shadowColor = CE(CY, Cz);
    };
    CQ.wbg.__wbg_setfont_16d6e31e06a420a5 = function (Cj, CY, Cz) {
      CC(Cj).font = CE(CY, Cz);
    };
    CQ.wbg.__wbg_settextBaseline_c3266d3bd4a6695c = function (Cj, CY, Cz) {
      CC(Cj).textBaseline = CE(CY, Cz);
    };
    CQ.wbg.__wbg_drawImage_cb13768a1bdc04bd = function () {
      return Cf(function (Cj, CY, Cz, Cg) {
        CC(Cj).drawImage(CC(CY), Cz, Cg);
      }, arguments);
    };
    CQ.wbg.__wbg_getImageData_66269d289f37d3c7 = function () {
      return Cf(function (Cj, CY, Cz, Cg, CH) {
        return Cq(CC(Cj).getImageData(CY, Cz, Cg, CH));
      }, arguments);
    };
    CQ.wbg.__wbg_rect_2fa1df87ef638738 = function (Cj, CY, Cz, Cg, CH) {
      CC(Cj).rect(CY, Cz, Cg, CH);
    };
    CQ.wbg.__wbg_fillRect_4dd28e628381d240 = function (Cj, CY, Cz, Cg, CH) {
      CC(Cj).fillRect(CY, Cz, Cg, CH);
    };
    CQ.wbg.__wbg_fillText_07e5da9e41652f20 = function () {
      return Cf(function (Cj, CY, Cz, Cg, CH) {
        CC(Cj).fillText(CE(CY, Cz), Cg, CH);
      }, arguments);
    };
    CQ.wbg.__wbg_setProperty_5144ddce66bbde41 = function () {
      return Cf(function (Cj, CY, Cz, Cg, CH) {
        CC(Cj).setProperty(CE(CY, Cz), CE(Cg, CH));
      }, arguments);
    };
    CQ.wbg.__wbg_createElement_03cf347ddad1c8c0 = function () {
      return Cf(function (Cj, CY, Cz) {
        return Cq(CC(Cj).createElement(CE(CY, Cz)));
      }, arguments);
    };
    CQ.wbg.__wbg_querySelector_118a0639aa1f51cd = function () {
      return Cf(function (Cj, CY, Cz) {
        Cj = CC(Cj).querySelector(CE(CY, Cz));
        if (Cb(Cj)) {
          return 0;
        } else {
          return Cq(Cj);
        }
      }, arguments);
    };
    CQ.wbg.__wbg_querySelectorAll_50c79cd4f7573825 = function () {
      return Cf(function (Cj, CY, Cz) {
        return Cq(CC(Cj).querySelectorAll(CE(CY, Cz)));
      }, arguments);
    };
    CQ.wbg.__wbg_getAttribute_706ae88bd37410fa = function (Cj, CY, Cz, Cg) {
      CY = CC(CY).getAttribute(CE(Cz, Cg));
      Cz = Cb(CY) ? 0 : CG(CY, C8.__wbindgen_export_0, C8.__wbindgen_export_1);
      Cg = CX;
      Ci().setInt32(Cj + 4, Cg, true);
      Ci().setInt32(Cj + 0, Cz, true);
    };
    CQ.wbg.__wbg_target_6795373f170fd786 = function (Cj) {
      Cj = CC(Cj).target;
      if (Cb(Cj)) {
        return 0;
      } else {
        return Cq(Cj);
      }
    };
    CQ.wbg.__wbg_addEventListener_f984e99465a6a7f4 = function () {
      return Cf(function (Cj, CY, Cz, Cg) {
        CC(Cj).addEventListener(CE(CY, Cz), CC(Cg));
      }, arguments);
    };
    CQ.wbg.__wbg_instanceof_HtmlCanvasElement_1e81f71f630e46bc = function (Cj) {
      let CY;
      try {
        CY = CC(Cj) instanceof HTMLCanvasElement;
      } catch (Cz) {
        CY = false;
      }
      return CY;
    };
    CQ.wbg.__wbg_setwidth_233645b297bb3318 = function (Cj, CY) {
      CC(Cj).width = CY >>> 0;
    };
    CQ.wbg.__wbg_setheight_fcb491cf54e3527c = function (Cj, CY) {
      CC(Cj).height = CY >>> 0;
    };
    CQ.wbg.__wbg_getContext_dfc91ab0837db1d1 = function () {
      return Cf(function (Cj, CY, Cz) {
        Cj = CC(Cj).getContext(CE(CY, Cz));
        if (Cb(Cj)) {
          return 0;
        } else {
          return Cq(Cj);
        }
      }, arguments);
    };
    CQ.wbg.__wbg_toDataURL_97b108dd1a4b7454 = function () {
      return Cf(function (Cj, CY) {
        var CY = CG(CC(CY).toDataURL(), C8.__wbindgen_export_0, C8.__wbindgen_export_1);
        var Cz = CX;
        Ci().setInt32(Cj + 4, Cz, true);
        Ci().setInt32(Cj + 0, CY, true);
      }, arguments);
    };
    CQ.wbg.__wbg_style_ca229e3326b3c3fb = function (Cj) {
      return Cq(CC(Cj).style);
    };
    CQ.wbg.__wbg_instanceof_HtmlImageElement_9c82d4e3651a8533 = function (Cj) {
      let CY;
      try {
        CY = CC(Cj) instanceof HTMLImageElement;
      } catch (Cz) {
        CY = false;
      }
      return CY;
    };
    CQ.wbg.__wbg_src_87a0e38af6229364 = function (Cj, CY) {
      var CY = CG(CC(CY).src, C8.__wbindgen_export_0, C8.__wbindgen_export_1);
      var Cz = CX;
      Ci().setInt32(Cj + 4, Cz, true);
      Ci().setInt32(Cj + 0, CY, true);
    };
    CQ.wbg.__wbg_width_e1a38bdd483e1283 = function (Cj) {
      return CC(Cj).width;
    };
    CQ.wbg.__wbg_height_e4cc2294187313c9 = function (Cj) {
      return CC(Cj).height;
    };
    CQ.wbg.__wbg_complete_1162c2697406af11 = function (Cj) {
      return CC(Cj).complete;
    };
    CQ.wbg.__wbg_data_d34dc554f90b8652 = function (Cj, CY) {
      var CY = CW(CC(CY).data, C8.__wbindgen_export_0);
      var Cz = CX;
      Ci().setInt32(Cj + 4, Cz, true);
      Ci().setInt32(Cj + 0, CY, true);
    };
    CQ.wbg.__wbg_origin_305402044aa148ce = function () {
      return Cf(function (Cj, CY) {
        var CY = CG(CC(CY).origin, C8.__wbindgen_export_0, C8.__wbindgen_export_1);
        var Cz = CX;
        Ci().setInt32(Cj + 4, Cz, true);
        Ci().setInt32(Cj + 0, CY, true);
      }, arguments);
    };
    CQ.wbg.__wbg_length_8a9352f7b7360c37 = function (Cj) {
      return CC(Cj).length;
    };
    CQ.wbg.__wbg_get_c30ae0782d86747f = function (Cj, CY) {
      Cj = CC(Cj)[CY >>> 0];
      if (Cb(Cj)) {
        return 0;
      } else {
        return Cq(Cj);
      }
    };
    CQ.wbg.__wbg_timeOrigin_f462952854d802ec = function (Cj) {
      return CC(Cj).timeOrigin;
    };
    CQ.wbg.__wbg_instanceof_Window_cee7a886d55e7df5 = function (Cj) {
      let CY;
      try {
        CY = CC(Cj) instanceof Window;
      } catch (Cz) {
        CY = false;
      }
      return CY;
    };
    CQ.wbg.__wbg_document_eb7fd66bde3ee213 = function (Cj) {
      Cj = CC(Cj).document;
      if (Cb(Cj)) {
        return 0;
      } else {
        return Cq(Cj);
      }
    };
    CQ.wbg.__wbg_location_b17760ac7977a47a = function (Cj) {
      return Cq(CC(Cj).location);
    };
    CQ.wbg.__wbg_localStorage_3d538af21ea07fcc = function () {
      return Cf(function (Cj) {
        Cj = CC(Cj).localStorage;
        if (Cb(Cj)) {
          return 0;
        } else {
          return Cq(Cj);
        }
      }, arguments);
    };
    CQ.wbg.__wbg_performance_4ca1873776fdb3d2 = function (Cj) {
      Cj = CC(Cj).performance;
      if (Cb(Cj)) {
        return 0;
      } else {
        return Cq(Cj);
      }
    };
    CQ.wbg.__wbg_origin_e1f8acdeb3a39a2b = function (Cj, CY) {
      var CY = CG(CC(CY).origin, C8.__wbindgen_export_0, C8.__wbindgen_export_1);
      var Cz = CX;
      Ci().setInt32(Cj + 4, Cz, true);
      Ci().setInt32(Cj + 0, CY, true);
    };
    CQ.wbg.__wbg_get_8986951b1ee310e0 = function (Cj, CY, Cz) {
      Cj = CC(Cj)[CE(CY, Cz)];
      if (Cb(Cj)) {
        return 0;
      } else {
        return Cq(Cj);
      }
    };
    CQ.wbg.__wbg_setTimeout_6ed7182ebad5d297 = function () {
      return Cf(function (Cj, CY, Cz) {
        return CC(Cj).setTimeout(CC(CY), Cz);
      }, arguments);
    };
    CQ.wbg.__wbindgen_is_object = function (Cj) {
      Cj = CC(Cj);
      return typeof Cj == "object" && Cj !== null;
    };
    CQ.wbg.__wbg_crypto_1d1f22824a6a080c = function (Cj) {
      return Cq(CC(Cj).crypto);
    };
    CQ.wbg.__wbg_process_4a72847cc503995b = function (Cj) {
      return Cq(CC(Cj).process);
    };
    CQ.wbg.__wbg_versions_f686565e586dd935 = function (Cj) {
      return Cq(CC(Cj).versions);
    };
    CQ.wbg.__wbg_node_104a2ff8d6ea03a2 = function (Cj) {
      return Cq(CC(Cj).node);
    };
    CQ.wbg.__wbindgen_is_string = function (Cj) {
      return typeof CC(Cj) == "string";
    };
    CQ.wbg.__wbg_require_cca90b1a94a0255b = function () {
      return Cf(function () {
        return Cq(module.require);
      }, arguments);
    };
    CQ.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (Cj) {
      return Cq(CC(Cj).msCrypto);
    };
    CQ.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
      return Cf(function (Cj, CY) {
        CC(Cj).randomFillSync(Cv(CY));
      }, arguments);
    };
    CQ.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
      return Cf(function (Cj, CY) {
        CC(Cj).getRandomValues(CC(CY));
      }, arguments);
    };
    CQ.wbg.__wbindgen_is_function = function (Cj) {
      return typeof CC(Cj) == "function";
    };
    CQ.wbg.__wbg_self_05040bd9523805b9 = function () {
      return Cf(function () {
        return Cq(self.self);
      }, arguments);
    };
    CQ.wbg.__wbg_window_adc720039f2cb14f = function () {
      return Cf(function () {
        return Cq(window.window);
      }, arguments);
    };
    CQ.wbg.__wbg_globalThis_622105db80c1457d = function () {
      return Cf(function () {
        return Cq(globalThis.globalThis);
      }, arguments);
    };
    CQ.wbg.__wbg_global_f56b013ed9bcf359 = function () {
      return Cf(function () {
        return Cq(global.global);
      }, arguments);
    };
    CQ.wbg.__wbg_newnoargs_cfecb3965268594c = function (Cj, CY) {
      return Cq(new Function(CE(Cj, CY)));
    };
    CQ.wbg.__wbindgen_object_clone_ref = function (Cj) {
      return Cq(CC(Cj));
    };
    CQ.wbg.__wbg_eval_c824e170787ad184 = function () {
      return Cf(function (Cj, CY) {
        const Cz = eval(CE(Cj, CY));
        return Cq(Cz);
      }, arguments);
    };
    CQ.wbg.__wbg_call_3f093dd26d5569f8 = function () {
      return Cf(function (Cj, CY) {
        return Cq(CC(Cj).call(CC(CY)));
      }, arguments);
    };
    CQ.wbg.__wbg_call_67f2111acd2dfdb6 = function () {
      return Cf(function (Cj, CY, Cz) {
        return Cq(CC(Cj).call(CC(CY), CC(Cz)));
      }, arguments);
    };
    CQ.wbg.__wbg_toString_6eb7c1f755c00453 = function (Cj) {
      return Cq(CC(Cj).toString());
    };
    CQ.wbg.__wbg_set_961700853a212a39 = function () {
      return Cf(function (Cj, CY, Cz) {
        return Reflect.set(CC(Cj), CC(CY), CC(Cz));
      }, arguments);
    };
    CQ.wbg.__wbg_buffer_b914fb8b50ebbc3e = function (Cj) {
      return Cq(CC(Cj).buffer);
    };
    CQ.wbg.__wbg_toString_139023ab33acec36 = function (Cj) {
      return Cq(CC(Cj).toString());
    };
    CQ.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e = function (Cj, CY, Cz) {
      return Cq(new Uint8Array(CC(Cj), CY >>> 0, Cz >>> 0));
    };
    CQ.wbg.__wbg_new_b1f2d6842d615181 = function (Cj) {
      return Cq(new Uint8Array(CC(Cj)));
    };
    CQ.wbg.__wbg_newwithlength_0d03cef43b68a530 = function (Cj) {
      return Cq(new Uint8Array(Cj >>> 0));
    };
    CQ.wbg.__wbg_buffer_67e624f5a0ab2319 = function (Cj) {
      return Cq(CC(Cj).buffer);
    };
    CQ.wbg.__wbg_subarray_adc418253d76e2f1 = function (Cj, CY, Cz) {
      return Cq(CC(Cj).subarray(CY >>> 0, Cz >>> 0));
    };
    CQ.wbg.__wbg_length_21c4b0ae73cba59d = function (Cj) {
      return CC(Cj).length;
    };
    CQ.wbg.__wbg_set_7d988c98e6ced92d = function (Cj, CY, Cz) {
      CC(Cj).set(CC(CY), Cz >>> 0);
    };
    CQ.wbg.__wbindgen_throw = function (Cj, CY) {
      throw new Error(CE(Cj, CY));
    };
    CQ.wbg.__wbindgen_memory = function () {
      return Cq(C8.memory);
    };
    CQ.wbg.__wbindgen_closure_wrapper117 = function (Cj, CY, Cz) {
      return Cq(CJ(Cj, CY, 2, CR));
    };
    CQ.wbg.__wbindgen_closure_wrapper119 = function (Cj, CY, Cz) {
      return Cq(CJ(Cj, CY, 2, Cs));
    };
    CQ.wbg.__wbindgen_closure_wrapper121 = function (Cj, CY, Cz) {
      return Cq(CJ(Cj, CY, 2, Cw));
    };
    CQ.wbg.__wbindgen_closure_wrapper123 = function (Cj, CY, Cz) {
      return Cq(CJ(Cj, CY, 9, Cs));
    };
    return CQ;
  }
  function Cy(CQ, Cj) {}
  function CD(CQ, Cj) {
    C8 = CQ.exports;
    Ct.__wbindgen_wasm_module = Cj;
    CT = null;
    CN = null;
    return C8;
  }
  function Cp(CQ) {
    if (C8 !== undefined) {
      return C8;
    }
    if (CQ !== undefined && Object.getPrototypeOf(CQ) === Object.prototype) {
      CQ = CQ.module;
    } else {
      console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
    }
    var Cj = Cn();
    Cy(Cj);
    if (!(CQ instanceof WebAssembly.Module)) {
      CQ = new WebAssembly.Module(CQ);
    }
    var Cj = new WebAssembly.Instance(CQ, Cj);
    return CD(Cj, CQ);
  }
  async function Ct(CQ) {
    var Cj;
    var CY;
    if (C8 !== undefined) {
      return C8;
    } else {
      Cj = Cn();
      ({
        instance: CQ,
        module: Cj,
        bytes: CY
      } = (CQ = fetch(CQ), Cy(Cj), await CP(await CQ, Cj)));
      CD(CQ, Cj);
      return CY;
    }
  }
  C6.groot = function () {
    C8.groot();
  };
  J = Object.assign(Ct, {
    initSync: Cp
  }, C6);
})();
const R = C6 => {
  $("#log-stack").append("<div> " + C6 + " <div>");
};
const s = async C6 => {
  C6.mu = C6.location.pathname;
  C6.ra = C6.requestAnimationFrame || function () {};
  C6.t = C6.performance && C6.performance.timeOrigin || 0;
  if (C6.mu == null || C6.ra == null) {
    return null;
  } else if (C6.mu.length > 0) {
    return C6;
  } else {
    return undefined;
  }
};
const w = async C6 => /\{\s+\[native code\]/.test(Function.prototype.toString.call(C6));
const f = () => {
  try {
    navigator.appVersion;
    var C6;
    var C7;
    var C8;
    var C9 = navigator.userAgent;
    var CC = navigator.appName;
    var CX = "" + parseFloat(navigator.appVersion);
    var CN = parseInt(navigator.appVersion, 10);
    if ((C7 = C9.indexOf("Opera")) != -1) {
      CC = "Opera";
      CX = C9.substring(C7 + 6);
      if ((C7 = C9.indexOf("Version")) != -1) {
        CX = C9.substring(C7 + 8);
      }
    } else if ((C7 = C9.indexOf("MSIE")) != -1) {
      CC = "Microsoft Internet Explorer";
      CX = C9.substring(C7 + 5);
    } else if ((C7 = C9.indexOf("Chrome")) != -1) {
      CC = "Chrome";
      CX = C9.substring(C7 + 7);
    } else if ((C7 = C9.indexOf("Safari")) != -1) {
      CC = "Safari";
      CX = C9.substring(C7 + 7);
      if ((C7 = C9.indexOf("Version")) != -1) {
        CX = C9.substring(C7 + 8);
      }
    } else if ((C7 = C9.indexOf("Firefox")) != -1) {
      CC = "Firefox";
      CX = C9.substring(C7 + 8);
    } else if ((C6 = C9.lastIndexOf(" ") + 1) < (C7 = C9.lastIndexOf("/")) && (CC = C9.substring(C6, C7), CX = C9.substring(C7 + 1), CC.toLowerCase() == CC.toUpperCase())) {
      CC = navigator.appName;
    }
    if ((C8 = (CX = (C8 = CX.indexOf(";")) != -1 ? CX.substring(0, C8) : CX).indexOf(" ")) != -1) {
      CX = CX.substring(0, C8);
    }
    CN = parseInt("" + CX, 10);
    if (isNaN(CN)) {
      CX = "" + parseFloat(navigator.appVersion);
      CN = parseInt(navigator.appVersion, 10);
    }
    return {
      browserName: CC,
      fullVersion: +CX.split(".")[0],
      majorVersion: CN
    };
  } catch (Cl) {
    return {
      browserName: "",
      fullVersion: "",
      majorVersion: ""
    };
  }
};
const W = async () => {
  var C6 = f();
  var C7 = (document && document.getElementById && document.getElementById("9cbc1d63ef40c79")) != null;
  var C8 = document && document.createElement("canvas");
  var C9 = C8 && C8.getContext != null;
  var CC = CanvasGradient != null;
  var CX = window.WebSocket != null;
  var CN = document && document.$cdc_asdjflasutopfhvcZLmcfl_ != null;
  var Cl = window.GPU != null;
  var CO = window.webkitMediaStream != null;
  var CB = window.RTCPeerConnection != null;
  var CG = window.RTCDataChannel != null;
  var C8 = C8 && C8.getContext && C8.getContext("webgl") != null;
  var Cb = window.WebGLActiveInfo != null;
  var CT = window.WebAssembly != null;
  var Ci = window.WebAssembly && WebAssembly.instantiate != null;
  var Cu = window.WebAssembly && WebAssembly.Module != null;
  C7 = [C7, C9, CX, CN, Cl, CO, CB, CG, C8, Cb, CT, Ci, window.mdn != null, window.chrome != null, window.documentPictureInPicture != null, Cu, window.Audio, CC, window.document != null, window.navigator != null, window.navigator && window.navigator.userAgentData != null, window.navigator && window.navigator.userAgentData && window.navigator.userAgentData.mobile == 1, window.navigator && window.navigator && window.navigator.appCodeName == "Mozilla", C6 && C6.fullVersion && C6.fullVersion < 100].map(CU => CU ? "1" : "0").join("");
  window.browser_version = function (CU) {
    for (var Cv = CU.match(/.{1,8}/g), CK = [], CE = 0; CE < Cv.length; CE++) {
      CK.push(+parseInt(Cv[CE], 2).toString(10));
    }
    return CK[0] << 24 | CK[1] << 16 | CK[2] << 8 | CK[3];
  }(C7);
};
const P = async C6 => {
  var C7;
  if (C6 != null && C6.mu != null) {
    if ((C7 = mu.split("/")) == null || C7.length < 2 && !w(C6.eval)) {
      return "";
    } else {
      C6.xrax = C7[C7.length - 1];
      return;
    }
  }
};
const n = async () => {
  P(await s(window));
};
function y(C6) {
  return [(C6 & 4278190080) >> 24, (C6 & 16711680) >> 16, (C6 & 65280) >> 8, C6 & 255];
}
const D = C6 => {
  var C7;
  var C8 = null;
  if ((C8 = C6.navigate) == null || (C7 = C6.localStorage.getItem("ktime"), C6.t != C7)) {
    return null;
  } else {
    C6 = C8();
    return new Uint8Array(C6);
  }
};
const p = async (C6, C7) => {
  try {
    for (let C8 = 0; C8 < C6.length; C8++) {
      C6[C8] = C6[C8] ^ C7[C8 % C7.length];
    }
  } catch (C9) {
    return null;
  }
};
const t = async C6 => {
  try {
    var C7 = await J("/images/loading.png?v=0.0.9");
    window.bytes = C7;
    J.groot();
    C6.jwt_plugin(C7);
  } catch (C8) {
    console.log(C8);
    C6.error = true;
  }
};
var Q = jwplayer("megacloud-player");
var j = Boolean(parseInt(settings.autoPlay));
var Y = Boolean(parseInt(settings.vast));
var z = $("#megacloud-player").data("id");
var g = $("#megacloud-player").data("realid");
var H = $("#megacloud-player").data("mediaid");
var x = $("#megacloud-player").data("fileversion");
var a = true;
var e = parseInt(settings.time);
var S = {
  channel: "megacloud"
};
var d;
var L;
var m;
var o = [{
  link: "https://1flix.to/",
  image: "https://iili.io/JvfI5dv.jpg",
  name: "1flix"
}];
const c = () => {
  var C6 = Math.floor(Math.random() * o.length);
  return o[C6];
};
const Z = () => {
  var C6 = c();
  if (C6) {
    $("#overlay-center").html("<a id=\"closeBanner\" href=\"javascript:;\" style=\"position: absolute; top: -15px; right: -15px; z-index: 99; background:#fff; width:30px;height:30px;border-radius:50%; text-align:center;border:solid 1px;\"><img style=\"width:16px;margin-top:7px;\" src=\"/images/close.png\"/></a><a rel=\"nofollow\" target=\"_blank\" href=\"" + C6.link + "\"><img alt=\"" + C6.name + "\" src=\"" + C6.image + "\" style=\"max-width:100%; width:300px;\" /></a>");
    $("#overlay-center").show();
  }
};
const F = new URLSearchParams(window.location.search);
if (F.get("_debug")) {
  $(".mg3-player").prepend("<div style=\"position: absolute; z-index: 90; left: 0; top: 0;\"><p>Peers: <span id=\"id\"></span></p><p>HTTP: <span id=\"http-bytes\"></span></p><p>PEER: <span id=\"peer-bytes\"></span></p><p>UPLOADED: <span id=\"peer-uploaded\"></span></p></div>");
}
const V = new MobileDetect(window.navigator.userAgent);
window.safeSetupP2pConfig = function () {
  var C6 = {
    videoId: H
  };
  if (F.get("_debug")) {
    C6.listener = {
      onHttpDownloaded: function (C7) {
        document.getElementById("http-bytes").innerHTML = C7;
      },
      onP2pDownloaded: function (C7) {
        document.getElementById("peer-bytes").innerHTML = C7;
      },
      onUploaded: function (C7) {
        document.getElementById("peer-uploaded").innerHTML = C7;
      },
      onNewPeer: function (C7) {
        setTimeout(() => {
          document.getElementById("id").innerHTML = Object.values(dwr.p2p.manager.peers).map(C8 => C8.peer.remoteAddress).join(", ");
        }, 200);
      },
      onClosePeer: function (C7) {
        setTimeout(() => {
          document.getElementById("id").innerHTML = Object.values(dwr.p2p.manager.peers).map(C8 => C8.peer.remoteAddress).join(", ");
        }, 200);
      }
    };
  }
  var C6 = window.SetupJwPlayer && window.SetupJwPlayer(Q, C6);
  if (C6 == null) {
    if (window.P2PLog) {
      window.P2PLog("SETUP_FAILED");
    }
    return {};
  } else {
    return {
      hlsjsConfig: {
        loader: C6
      }
    };
  }
};
const h = async ({
  sources: C6,
  tracks: C7
}) => {
  C6 = {
    playbackRateControls: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
    mute: false,
    cast: {},
    autostart: j,
    sources: C6,
    tracks: C7,
    key: "7MeMRClEneUmFoHRO3u3ypzAZXlVgNtBE2pKDw=="
  };
  if (Y) {
    C6.advertising = {
      client: "vast",
      schedule: [{
        tag: "https://services.vlitag.com/vpaid/?q=1ba9c35e4570ec49cfc2da2c2116ac79&vast_slot=vi_2284298620&defaultVolume=&page_url=https://rapid-cloud.co"
      }]
    };
  }
  Q.setup(C6);
  Q.on("ready", function () {
    $(".jw-icon-rewind").remove();
    Q.addButton("/images/skip-10-next.svg?v=0.1", "+10s", u, "forward-10s-button");
    Q.addButton("/images/skip-10-prev.svg?v=0.1", "-10s", i, "rewind-10s-button");
    $("#megacloud-player").prepend("<div id=\"overlay-control\"></div>");
    if (d) {
      $("#overlay-control").prepend("<div class=\"botright\"><a style=\"display: none;\" href=\"javascript:;\" id=\"skip-intro\" class=\"zbtn zbtn-outline\">Skip Intro</a></div>");
    }
    if (L) {
      $("#overlay-control").prepend("<div class=\"botright\"><a style=\"display: none;\" href=\"javascript:;\" id=\"skip-outro\" class=\"zbtn zbtn-outline\">Skip Outro</a></div>");
    }
  });
  Q.on("pause", function () {});
  Q.on("captionsChanged", function (C8) {});
  Q.on("firstFrame", function () {
    var C8 = 0;
    var C9 = 0;
    var CC = Q.getDuration();
    if (d && $(".jw-intro").length === 0) {
      C9 = d.start / CC * 100;
      C8 = (d.end - d.start) / CC * 100;
      $(".jw-slider-container").append("<div class=\"jw-reset jw-intro\" style=\"margin-left: " + C9 + "%; width: " + C8 + "%\"></div>");
    }
    if (L && $(".jw-outro").length === 0) {
      L.end = L.end > CC ? CC : L.end;
      C8 = L.start / CC * 100 - C8 - C9;
      C9 = (L.end - L.start) / CC * 100;
      $(".jw-slider-container").append("<div class=\"jw-reset jw-outro\" style=\"margin-left: " + C8 + "%; width: " + C9 + "%\"></div>");
    }
    if (g) {
      CC = K("vc_" + g + "_time");
      if (e > 0) {
        Q.seek(e);
      } else if (CC) {
        Q.seek(CC);
      }
    }
  });
  Q.on("play", function () {});
  Q.on("buffer", function (C8) {});
  Q.on("time", function (C8) {
    C0(C8.position);
    if (g) {
      E("vc_" + g + "_time", Q.getPosition());
    }
    S.event = "time";
    S.time = Q.getPosition();
    S.duration = Q.getDuration();
    S.percent = Q.getPosition() / Q.getDuration() * 100;
    window.parent.postMessage(JSON.stringify(S), "*");
  });
  Q.on("complete", function () {
    e = 0;
    q("vc_" + g + "_time");
    S.event = "complete";
    window.parent.postMessage(JSON.stringify(S), "*");
  });
  Q.on("error", function () {
    A();
  });
  Q.on("setupError", function () {});
};
function A() {
  S.event = "error";
  window.parent.postMessage(JSON.stringify(S), "*");
}
var I = window.addEventListener ? "addEventListener" : "attachEvent";
var r = window[I];
var k = I === "attachEvent" ? "onmessage" : "message";
function C0(C6) {
  if (d && C6 >= d.start && C6 < d.end) {
    if (parseInt(settings.autoSkipIntro) === 1) {
      C1();
    } else {
      $("#skip-intro").show();
    }
  } else {
    $("#skip-intro").hide();
  }
  if (L && C6 >= L.start && C6 < L.end) {
    if (parseInt(settings.autoSkipIntro) === 1) {
      C2();
    } else {
      $("#skip-outro").show();
    }
  } else {
    $("#skip-outro").hide();
  }
}
function C1() {
  Q.seek(d.end);
  $("#skip-intro").hide();
}
function C2() {
  Q.seek(L.end);
  $("#skip-outro").hide();
}
r(k, function (C6) {
  var C7 = C6.data || C6.message;
  try {
    if ((C7 = JSON.parse(C7)).event === "seek") {
      Q.seek(C7.time);
    }
  } catch (C8) {}
});
$(document).on("click", "#skip-intro", function () {
  C1();
});
$(document).on("click", "#skip-outro", function () {
  C2();
});
const C3 = () => {
  $("#overlay-center").hide();
  Q.play();
};
$(document).on("click", "#closeBanner", () => {
  C3();
});
const C4 = (C6, C7) => {
  var C8;
  var C9 = window.browser_version;
  const CC = window.localStorage && window.localStorage.getItem("kversion") || C9;
  var CX = window.localStorage && window.localStorage.getItem("kid") || "";
  if (window.pid == null) {
    console.log("=> pid null");
  } else {
    var CN = D(window);
    var CX = "/embed-2/ajax/e-1/getSources?id=" + window.pid + "&v=" + CC + "&h=" + CX + "&b=" + C9;
    const Cl = {
      sources: [],
      tracks: []
    };
    $.get(CX, function (CO) {
      var CB;
      if (b(CO.sources)) {
        Cl.sources = CO.sources;
      } else {
        C8 = y(CC);
        CB = CO.t != 0 ? (p(CN, C8), CN) : (CB = CO.k, p(CB, C8), CB);
        CB = btoa(String.fromCharCode.apply(null, new Uint8Array(CB)));
        Cl.sources = G(CO.sources, CB);
      }
      Cl.tracks = CO.tracks;
      console.log(Cl)
      C7(Cl);
    });
  }
};
const C5 = () => {
  n().then(() => W());
  t(window);
  const C6 = setInterval(() => {
    if (window.navigate != null || !!window.error) {
      clearInterval(C6);
      C4(window.xrax, h);
    }
  }, 100);
};
C5();