!(function (l, _) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = l.document
        ? _(l, !0)
        : function (l) {
            if (l.document) return _(l);
            throw Error("jQuery requires a window with a document");
          })
    : _(l);
})("undefined" != typeof window ? window : this, function (l, _) {
  "use strict";
  function C(l) {
    return "function" == typeof l && "number" != typeof l.nodeType;
  }
  function N(l) {
    return null != l && l === l.window;
  }
  var X,
    ee,
    et,
    en,
    er,
    ei,
    eo,
    ea,
    es,
    el,
    eu,
    ec,
    e$,
    ed = [],
    e_ = l.document,
    ef = Object.getPrototypeOf,
    ep = ed.slice,
    eh = ed.concat,
    e0 = ed.push,
    eg = ed.indexOf,
    e1 = {},
    e2 = e1.toString,
    e3 = e1.hasOwnProperty,
    eb = e3.toString,
    e5 = eb.call(Object),
    ev = {},
    ey = { type: !0, src: !0, noModule: !0 };
  function em(l, _, C) {
    var N,
      X = (_ = _ || e_).createElement("script");
    if (((X.text = l), C)) for (N in ey) C[N] && (X[N] = C[N]);
    _.head.appendChild(X).parentNode.removeChild(X);
  }
  function e4(l) {
    return null == l
      ? l + ""
      : "object" == typeof l || "function" == typeof l
        ? e1[e2.call(l)] || "object"
        : typeof l;
  }
  function e6(l, _) {
    return new e6.fn.init(l, _);
  }
  var eT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function eS(l) {
    var _ = !!l && "length" in l && l.length,
      X = e4(l);
    return (
      !C(l) &&
      !N(l) &&
      ("array" === X ||
        0 === _ ||
        ("number" == typeof _ && _ > 0 && _ - 1 in l))
    );
  }
  function e7(l, _, C) {
    for (var N = [], X = void 0 !== C; (l = l[_]) && 9 !== l.nodeType; )
      if (1 === l.nodeType) {
        if (X && e6(l).is(C)) break;
        N.push(l);
      }
    return N;
  }
  function ew(l, _) {
    for (var C = []; l; l = l.nextSibling)
      1 === l.nodeType && l !== _ && C.push(l);
    return C;
  }
  (e6.fn = e6.prototype =
    {
      jquery: "3.3.1",
      constructor: e6,
      length: 0,
      toArray: function () {
        return ep.call(this);
      },
      get: function (l) {
        return null == l
          ? ep.call(this)
          : l < 0
            ? this[l + this.length]
            : this[l];
      },
      pushStack: function (l) {
        return ((l = e6.merge(this.constructor(), l)).prevObject = this), l;
      },
      each: function (l) {
        return e6.each(this, l);
      },
      map: function (l) {
        return this.pushStack(
          e6.map(this, function (_, C) {
            return l.call(_, C, _);
          })
        );
      },
      slice: function () {
        return this.pushStack(ep.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (l) {
        var _ = this.length,
          l = +l + (l < 0 ? _ : 0);
        return this.pushStack(l >= 0 && l < _ ? [this[l]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: e0,
      sort: ed.sort,
      splice: ed.splice,
    }),
    (e6.extend = e6.fn.extend =
      function () {
        var l,
          _,
          N,
          X,
          ee,
          et = arguments[0] || {},
          en = 1,
          er = arguments.length,
          ei = !1;
        for (
          "boolean" == typeof et &&
            ((ei = et), (et = arguments[en] || {}), en++),
            "object" == typeof et || C(et) || (et = {}),
            en === er && ((et = this), en--);
          en < er;
          en++
        )
          if (null != (l = arguments[en]))
            for (_ in l)
              (ee = et[_]),
                et !== (N = l[_]) &&
                  (ei && N && (e6.isPlainObject(N) || (X = Array.isArray(N)))
                    ? ((ee = X
                        ? ((X = !1), ee && Array.isArray(ee) ? ee : [])
                        : ee && e6.isPlainObject(ee)
                          ? ee
                          : {}),
                      (et[_] = e6.extend(ei, ee, N)))
                    : void 0 !== N && (et[_] = N));
        return et;
      }),
    e6.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (l) {
        throw Error(l);
      },
      noop: function () {},
      isPlainObject: function (l) {
        return (
          !!l &&
          "[object Object]" === e2.call(l) &&
          (!(l = ef(l)) ||
            ("function" ==
              typeof (l = e3.call(l, "constructor") && l.constructor) &&
              eb.call(l) === e5))
        );
      },
      isEmptyObject: function (l) {
        for (var _ in l) return !1;
        return !0;
      },
      globalEval: function (l) {
        em(l);
      },
      each: function (l, _) {
        var C,
          N = 0;
        if (eS(l))
          for (C = l.length; N < C && !1 !== _.call(l[N], N, l[N]); N++);
        else for (N in l) if (!1 === _.call(l[N], N, l[N])) break;
        return l;
      },
      trim: function (l) {
        return null == l ? "" : (l + "").replace(eT, "");
      },
      makeArray: function (l, _) {
        return (
          (_ = _ || []),
          null != l &&
            (eS(Object(l))
              ? e6.merge(_, "string" == typeof l ? [l] : l)
              : e0.call(_, l)),
          _
        );
      },
      inArray: function (l, _, C) {
        return null == _ ? -1 : eg.call(_, l, C);
      },
      merge: function (l, _) {
        for (var C = +_.length, N = 0, X = l.length; N < C; N++) l[X++] = _[N];
        return (l.length = X), l;
      },
      grep: function (l, _, C) {
        for (var N = [], X = 0, ee = l.length, et = !C; X < ee; X++)
          !_(l[X], X) != et && N.push(l[X]);
        return N;
      },
      map: function (l, _, C) {
        var N,
          X,
          ee = 0,
          et = [];
        if (eS(l))
          for (N = l.length; ee < N; ee++)
            null != (X = _(l[ee], ee, C)) && et.push(X);
        else for (ee in l) null != (X = _(l[ee], ee, C)) && et.push(X);
        return eh.apply([], et);
      },
      guid: 1,
      support: ev,
    }),
    "function" == typeof Symbol &&
      (e6.fn[Symbol.iterator] = ed[Symbol.iterator]),
    e6.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (l, _) {
        e1["[object " + _ + "]"] = _.toLowerCase();
      }
    );
  var ed = (function (l) {
    function _(l, _, C) {
      var N = "0x" + _ - 65536;
      return N != N || C
        ? _
        : N < 0
          ? String.fromCharCode(65536 + N)
          : String.fromCharCode((N >> 10) | 55296, (1023 & N) | 56320);
    }
    function C(l, _) {
      return _
        ? "\0" === l
          ? "�"
          : l.slice(0, -1) +
            "\\" +
            l.charCodeAt(l.length - 1).toString(16) +
            " "
        : "\\" + l;
    }
    function N() {
      ec();
    }
    var X,
      ee,
      et,
      en,
      er,
      ei,
      eo,
      ea,
      es,
      el,
      eu,
      ec,
      e$,
      ed,
      e_,
      ef,
      ep,
      eh,
      e0,
      eg = "sizzle" + +new Date(),
      e1 = l.document,
      e2 = 0,
      e3 = 0,
      eb = eq(),
      e5 = eq(),
      ev = eq();
    function ey(l, _) {
      return l === _ && (eu = !0), 0;
    }
    var em = {}.hasOwnProperty,
      e4 = [],
      e6 = e4.pop,
      eT = e4.push,
      eS = e4.push,
      e7 = e4.slice;
    function ew(l, _) {
      for (var C = 0, N = l.length; C < N; C++) if (l[C] === _) return C;
      return -1;
    }
    var eP =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      eA = "[\\x20\\t\\r\\n\\f]",
      e8 = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      eC =
        "\\[" +
        eA +
        "*(" +
        e8 +
        ")(?:" +
        eA +
        "*([*^$|!~]?=)" +
        eA +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        e8 +
        "))|)" +
        eA +
        "*\\]",
      eM =
        ":(" +
        e8 +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        eC +
        ")*)|.*)\\)|)",
      ex = RegExp(eA + "+", "g"),
      ek = RegExp("^" + eA + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eA + "+$", "g"),
      eB = RegExp("^" + eA + "*," + eA + "*"),
      eE = RegExp("^" + eA + "*([>+~]|" + eA + ")" + eA + "*"),
      eG = RegExp("=" + eA + "*([^\\]'\"]*?)" + eA + "*\\]", "g"),
      eH = RegExp(eM),
      eD = RegExp("^" + e8 + "$"),
      eI = {
        ID: RegExp("^#(" + e8 + ")"),
        CLASS: RegExp("^\\.(" + e8 + ")"),
        TAG: RegExp("^(" + e8 + "|[*])"),
        ATTR: RegExp("^" + eC),
        PSEUDO: RegExp("^" + eM),
        CHILD: RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            eA +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            eA +
            "*(?:([+-]|)" +
            eA +
            "*(\\d+)|))" +
            eA +
            "*\\)|)",
          "i"
        ),
        bool: RegExp("^(?:" + eP + ")$", "i"),
        needsContext: RegExp(
          "^" +
            eA +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            eA +
            "*((?:-\\d)?\\d*)" +
            eA +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      eL = /^(?:input|select|textarea|button)$/i,
      eN = /^h\d$/i,
      eO = /^[^{]+\{\s*\[native \w/,
      ej = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      eR = /[+~]/,
      eF = RegExp("\\\\([\\da-f]{1,6}" + eA + "?|(" + eA + ")|.)", "ig"),
      eV = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      eW = tn(
        function (l) {
          return !0 === l.disabled && ("form" in l || "label" in l);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      eS.apply((e4 = e7.call(e1.childNodes)), e1.childNodes),
        e4[e1.childNodes.length].nodeType;
    } catch (eX) {
      eS = {
        apply: e4.length
          ? function (l, _) {
              eT.apply(l, e7.call(_));
            }
          : function (l, _) {
              for (var C = l.length, N = 0; (l[C++] = _[N++]); );
              l.length = C - 1;
            },
      };
    }
    function ez(l, _, N, X) {
      var et,
        en,
        er,
        eo,
        es,
        el,
        eu,
        ed = _ && _.ownerDocument,
        ep = _ ? _.nodeType : 9;
      if (
        ((N = N || []),
        "string" != typeof l || !l || (1 !== ep && 9 !== ep && 11 !== ep))
      )
        return N;
      if (
        !X &&
        ((_ ? _.ownerDocument || _ : e1) !== e$ && ec(_), (_ = _ || e$), e_)
      ) {
        if (11 !== ep && (es = ej.exec(l))) {
          if ((et = es[1])) {
            if (9 === ep) {
              if (!(er = _.getElementById(et))) return N;
              if (er.id === et) return N.push(er), N;
            } else if (
              ed &&
              (er = ed.getElementById(et)) &&
              e0(_, er) &&
              er.id === et
            )
              return N.push(er), N;
          } else {
            if (es[2]) return eS.apply(N, _.getElementsByTagName(l)), N;
            if (
              (et = es[3]) &&
              ee.getElementsByClassName &&
              _.getElementsByClassName
            )
              return eS.apply(N, _.getElementsByClassName(et)), N;
          }
        }
        if (ee.qsa && !ev[l + " "] && (!ef || !ef.test(l))) {
          if (1 !== ep) (ed = _), (eu = l);
          else if ("object" !== _.nodeName.toLowerCase()) {
            for (
              (eo = _.getAttribute("id"))
                ? (eo = eo.replace(eV, C))
                : _.setAttribute("id", (eo = eg)),
                en = (el = ei(l)).length;
              en--;

            )
              el[en] = "#" + eo + " " + tt(el[en]);
            (eu = el.join(",")), (ed = (eR.test(l) && eJ(_.parentNode)) || _);
          }
          if (eu)
            try {
              return eS.apply(N, ed.querySelectorAll(eu)), N;
            } catch (eh) {
            } finally {
              eo === eg && _.removeAttribute("id");
            }
        }
      }
      return ea(l.replace(ek, "$1"), _, N, X);
    }
    function eq() {
      var l = [];
      function _(C, N) {
        return (
          l.push(C + " ") > et.cacheLength && delete _[l.shift()],
          (_[C + " "] = N)
        );
      }
      return _;
    }
    function eU(l) {
      return (l[eg] = !0), l;
    }
    function eZ(l) {
      var _ = e$.createElement("fieldset");
      try {
        return !!l(_);
      } catch (C) {
        return !1;
      } finally {
        _.parentNode && _.parentNode.removeChild(_);
      }
    }
    function eK(l, _) {
      for (var C = l.split("|"), N = C.length; N--; ) et.attrHandle[C[N]] = _;
    }
    function eQ(l, _) {
      var C = _ && l,
        N =
          C &&
          1 === l.nodeType &&
          1 === _.nodeType &&
          l.sourceIndex - _.sourceIndex;
      if (N) return N;
      if (C) {
        for (; (C = C.nextSibling); ) if (C === _) return -1;
      }
      return l ? 1 : -1;
    }
    function e9(l) {
      return function (_) {
        return "form" in _
          ? _.parentNode && !1 === _.disabled
            ? "label" in _
              ? "label" in _.parentNode
                ? _.parentNode.disabled === l
                : _.disabled === l
              : _.isDisabled === l || (!l !== _.isDisabled && eW(_) === l)
            : _.disabled === l
          : "label" in _ && _.disabled === l;
      };
    }
    function eY(l) {
      return eU(function (_) {
        return (
          (_ = +_),
          eU(function (C, N) {
            for (var X, ee = l([], C.length, _), et = ee.length; et--; )
              C[(X = ee[et])] && (C[X] = !(N[X] = C[X]));
          })
        );
      });
    }
    function eJ(l) {
      return l && void 0 !== l.getElementsByTagName && l;
    }
    for (X in ((ee = ez.support = {}),
    (er = ez.isXML =
      function (l) {
        return (
          !!(l = l && (l.ownerDocument || l).documentElement) &&
          "HTML" !== l.nodeName
        );
      }),
    (ec = ez.setDocument =
      function (l) {
        var l = l ? l.ownerDocument || l : e1;
        return (
          l !== e$ &&
            9 === l.nodeType &&
            l.documentElement &&
            ((ed = (e$ = l).documentElement),
            (e_ = !er(e$)),
            e1 !== e$ &&
              (l = e$.defaultView) &&
              l.top !== l &&
              (l.addEventListener
                ? l.addEventListener("unload", N, !1)
                : l.attachEvent && l.attachEvent("onunload", N)),
            (ee.attributes = eZ(function (l) {
              return (l.className = "i"), !l.getAttribute("className");
            })),
            (ee.getElementsByTagName = eZ(function (l) {
              return (
                l.appendChild(e$.createComment("")),
                !l.getElementsByTagName("*").length
              );
            })),
            (ee.getElementsByClassName = eO.test(e$.getElementsByClassName)),
            (ee.getById = eZ(function (l) {
              return (
                (ed.appendChild(l).id = eg),
                !e$.getElementsByName || !e$.getElementsByName(eg).length
              );
            })),
            ee.getById
              ? ((et.filter.ID = function (l) {
                  var C = l.replace(eF, _);
                  return function (l) {
                    return l.getAttribute("id") === C;
                  };
                }),
                (et.find.ID = function (l, _) {
                  if (void 0 !== _.getElementById && e_)
                    return (_ = _.getElementById(l)) ? [_] : [];
                }))
              : ((et.filter.ID = function (l) {
                  var C = l.replace(eF, _);
                  return function (l) {
                    return (
                      (l =
                        void 0 !== l.getAttributeNode &&
                        l.getAttributeNode("id")) && l.value === C
                    );
                  };
                }),
                (et.find.ID = function (l, _) {
                  if (void 0 !== _.getElementById && e_) {
                    var C,
                      N,
                      X,
                      ee = _.getElementById(l);
                    if (ee) {
                      if ((C = ee.getAttributeNode("id")) && C.value === l)
                        return [ee];
                      for (X = _.getElementsByName(l), N = 0; (ee = X[N++]); )
                        if ((C = ee.getAttributeNode("id")) && C.value === l)
                          return [ee];
                    }
                    return [];
                  }
                })),
            (et.find.TAG = ee.getElementsByTagName
              ? function (l, _) {
                  return void 0 !== _.getElementsByTagName
                    ? _.getElementsByTagName(l)
                    : ee.qsa
                      ? _.querySelectorAll(l)
                      : void 0;
                }
              : function (l, _) {
                  var C,
                    N = [],
                    X = 0,
                    ee = _.getElementsByTagName(l);
                  if ("*" !== l) return ee;
                  for (; (C = ee[X++]); ) 1 === C.nodeType && N.push(C);
                  return N;
                }),
            (et.find.CLASS =
              ee.getElementsByClassName &&
              function (l, _) {
                if (void 0 !== _.getElementsByClassName && e_)
                  return _.getElementsByClassName(l);
              }),
            (ep = []),
            (ef = []),
            (ee.qsa = eO.test(e$.querySelectorAll)) &&
              (eZ(function (l) {
                (ed.appendChild(l).innerHTML =
                  "<a id='" +
                  eg +
                  "'></a><select id='" +
                  eg +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  l.querySelectorAll("[msallowcapture^='']").length &&
                    ef.push("[*^$]=" + eA + "*(?:''|\"\")"),
                  l.querySelectorAll("[selected]").length ||
                    ef.push("\\[" + eA + "*(?:value|" + eP + ")"),
                  l.querySelectorAll("[id~=" + eg + "-]").length ||
                    ef.push("~="),
                  l.querySelectorAll(":checked").length || ef.push(":checked"),
                  l.querySelectorAll("a#" + eg + "+*").length ||
                    ef.push(".#.+[+~]");
              }),
              eZ(function (l) {
                l.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var _ = e$.createElement("input");
                _.setAttribute("type", "hidden"),
                  l.appendChild(_).setAttribute("name", "D"),
                  l.querySelectorAll("[name=d]").length &&
                    ef.push("name" + eA + "*[*^$|!~]?="),
                  2 !== l.querySelectorAll(":enabled").length &&
                    ef.push(":enabled", ":disabled"),
                  (ed.appendChild(l).disabled = !0),
                  2 !== l.querySelectorAll(":disabled").length &&
                    ef.push(":enabled", ":disabled"),
                  l.querySelectorAll("*,:x"),
                  ef.push(",.*:");
              })),
            (ee.matchesSelector = eO.test(
              (eh =
                ed.matches ||
                ed.webkitMatchesSelector ||
                ed.mozMatchesSelector ||
                ed.oMatchesSelector ||
                ed.msMatchesSelector)
            )) &&
              eZ(function (l) {
                (ee.disconnectedMatch = eh.call(l, "*")),
                  eh.call(l, "[s!='']:x"),
                  ep.push("!=", eM);
              }),
            (ef = ef.length && RegExp(ef.join("|"))),
            (ep = ep.length && RegExp(ep.join("|"))),
            (e0 =
              (l = eO.test(ed.compareDocumentPosition)) || eO.test(ed.contains)
                ? function (l, _) {
                    var C = 9 === l.nodeType ? l.documentElement : l,
                      _ = _ && _.parentNode;
                    return (
                      l === _ ||
                      (!!_ &&
                        1 === _.nodeType &&
                        !!(C.contains
                          ? C.contains(_)
                          : l.compareDocumentPosition &&
                            16 & l.compareDocumentPosition(_)))
                    );
                  }
                : function (l, _) {
                    if (_) {
                      for (; (_ = _.parentNode); ) if (_ === l) return !0;
                    }
                    return !1;
                  }),
            (ey = l
              ? function (l, _) {
                  var C;
                  return l === _
                    ? ((eu = !0), 0)
                    : !l.compareDocumentPosition - !_.compareDocumentPosition ||
                        (1 &
                          (C =
                            (l.ownerDocument || l) === (_.ownerDocument || _)
                              ? l.compareDocumentPosition(_)
                              : 1) ||
                        (!ee.sortDetached && _.compareDocumentPosition(l) === C)
                          ? l === e$ || (l.ownerDocument === e1 && e0(e1, l))
                            ? -1
                            : _ === e$ || (_.ownerDocument === e1 && e0(e1, _))
                              ? 1
                              : el
                                ? ew(el, l) - ew(el, _)
                                : 0
                          : 4 & C
                            ? -1
                            : 1);
                }
              : function (l, _) {
                  if (l === _) return (eu = !0), 0;
                  var C,
                    N = 0,
                    X = l.parentNode,
                    ee = _.parentNode,
                    et = [l],
                    en = [_];
                  if (!X || !ee) {
                    if (l === e$) return -1;
                    if (_ === e$) return 1;
                    if (X) return -1;
                    else if (ee) return 1;
                    else if (el) return ew(el, l) - ew(el, _);
                    else return 0;
                  }
                  if (X === ee) return eQ(l, _);
                  for (C = l; (C = C.parentNode); ) et.unshift(C);
                  for (C = _; (C = C.parentNode); ) en.unshift(C);
                  for (; et[N] === en[N]; ) N++;
                  return N
                    ? eQ(et[N], en[N])
                    : et[N] === e1
                      ? -1
                      : en[N] === e1
                        ? 1
                        : 0;
                })),
          e$
        );
      }),
    (ez.matches = function (l, _) {
      return ez(l, null, null, _);
    }),
    (ez.matchesSelector = function (l, _) {
      if (
        ((l.ownerDocument || l) !== e$ && ec(l),
        (_ = _.replace(eG, "='$1']")),
        ee.matchesSelector &&
          e_ &&
          !ev[_ + " "] &&
          (!ep || !ep.test(_)) &&
          (!ef || !ef.test(_)))
      )
        try {
          var C = eh.call(l, _);
          if (
            C ||
            ee.disconnectedMatch ||
            (l.document && 11 !== l.document.nodeType)
          )
            return C;
        } catch (N) {}
      return ez(_, e$, null, [l]).length > 0;
    }),
    (ez.contains = function (l, _) {
      return (l.ownerDocument || l) !== e$ && ec(l), e0(l, _);
    }),
    (ez.attr = function (l, _) {
      (l.ownerDocument || l) !== e$ && ec(l);
      var C = et.attrHandle[_.toLowerCase()],
        C =
          C && em.call(et.attrHandle, _.toLowerCase()) ? C(l, _, !e_) : void 0;
      return void 0 !== C
        ? C
        : ee.attributes || !e_
          ? l.getAttribute(_)
          : (C = l.getAttributeNode(_)) && C.specified
            ? C.value
            : null;
    }),
    (ez.escape = function (l) {
      return (l + "").replace(eV, C);
    }),
    (ez.error = function (l) {
      throw Error("Syntax error, unrecognized expression: " + l);
    }),
    (ez.uniqueSort = function (l) {
      var _,
        C = [],
        N = 0,
        X = 0;
      if (
        ((eu = !ee.detectDuplicates),
        (el = !ee.sortStable && l.slice(0)),
        l.sort(ey),
        eu)
      ) {
        for (; (_ = l[X++]); ) _ === l[X] && (N = C.push(X));
        for (; N--; ) l.splice(C[N], 1);
      }
      return (el = null), l;
    }),
    (en = ez.getText =
      function (l) {
        var _,
          C = "",
          N = 0,
          X = l.nodeType;
        if (X) {
          if (1 === X || 9 === X || 11 === X) {
            if ("string" == typeof l.textContent) return l.textContent;
            for (l = l.firstChild; l; l = l.nextSibling) C += en(l);
          } else if (3 === X || 4 === X) return l.nodeValue;
        } else for (; (_ = l[N++]); ) C += en(_);
        return C;
      }),
    ((et = ez.selectors =
      {
        cacheLength: 50,
        createPseudo: eU,
        match: eI,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (l) {
            return (
              (l[1] = l[1].replace(eF, _)),
              (l[3] = (l[3] || l[4] || l[5] || "").replace(eF, _)),
              "~=" === l[2] && (l[3] = " " + l[3] + " "),
              l.slice(0, 4)
            );
          },
          CHILD: function (l) {
            return (
              (l[1] = l[1].toLowerCase()),
              "nth" === l[1].slice(0, 3)
                ? (l[3] || ez.error(l[0]),
                  (l[4] = +(l[4]
                    ? l[5] + (l[6] || 1)
                    : 2 * ("even" === l[3] || "odd" === l[3]))),
                  (l[5] = +(l[7] + l[8] || "odd" === l[3])))
                : l[3] && ez.error(l[0]),
              l
            );
          },
          PSEUDO: function (l) {
            var _,
              C = !l[6] && l[2];
            return eI.CHILD.test(l[0])
              ? null
              : (l[3]
                  ? (l[2] = l[4] || l[5] || "")
                  : C &&
                    eH.test(C) &&
                    (_ =
                      (_ = ei(C, !0)) &&
                      C.indexOf(")", C.length - _) - C.length) &&
                    ((l[0] = l[0].slice(0, _)), (l[2] = C.slice(0, _))),
                l.slice(0, 3));
          },
        },
        filter: {
          TAG: function (l) {
            var C = l.replace(eF, _).toLowerCase();
            return "*" === l
              ? function () {
                  return !0;
                }
              : function (l) {
                  return l.nodeName && l.nodeName.toLowerCase() === C;
                };
          },
          CLASS: function (l) {
            var _ = eb[l + " "];
            return (
              _ ||
              ((_ = RegExp("(^|" + eA + ")" + l + "(" + eA + "|$)")),
              eb(l, function (l) {
                return _.test(
                  ("string" == typeof l.className && l.className) ||
                    (void 0 !== l.getAttribute && l.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (l, _, C) {
            return function (N) {
              return null == (N = ez.attr(N, l))
                ? "!=" === _
                : !_ ||
                    ((N += ""),
                    "=" === _
                      ? N === C
                      : "!=" === _
                        ? N !== C
                        : "^=" === _
                          ? C && 0 === N.indexOf(C)
                          : "*=" === _
                            ? C && N.indexOf(C) > -1
                            : "$=" === _
                              ? C && N.slice(-C.length) === C
                              : "~=" === _
                                ? (" " + N.replace(ex, " ") + " ").indexOf(C) >
                                  -1
                                : "|=" === _ &&
                                  (N === C ||
                                    N.slice(0, C.length + 1) === C + "-"));
            };
          },
          CHILD: function (l, _, C, N, X) {
            var ee = "nth" !== l.slice(0, 3),
              et = "last" !== l.slice(-4),
              en = "of-type" === _;
            return 1 === N && 0 === X
              ? function (l) {
                  return !!l.parentNode;
                }
              : function (_, C, er) {
                  var ei,
                    eo,
                    ea,
                    es,
                    el,
                    eu,
                    ec = ee != et ? "nextSibling" : "previousSibling",
                    e$ = _.parentNode,
                    ed = en && _.nodeName.toLowerCase(),
                    e_ = !er && !en,
                    ef = !1;
                  if (e$) {
                    if (ee) {
                      for (; ec; ) {
                        for (es = _; (es = es[ec]); )
                          if (
                            en
                              ? es.nodeName.toLowerCase() === ed
                              : 1 === es.nodeType
                          )
                            return !1;
                        eu = ec = "only" === l && !eu && "nextSibling";
                      }
                      return !0;
                    }
                    if (
                      ((eu = [et ? e$.firstChild : e$.lastChild]), et && e_)
                    ) {
                      for (
                        ef =
                          (el =
                            (ei =
                              (eo =
                                (ea = (es = e$)[eg] || (es[eg] = {}))[
                                  es.uniqueID
                                ] || (ea[es.uniqueID] = {}))[l] || [])[0] ===
                              e2 && ei[1]) && ei[2],
                          es = el && e$.childNodes[el];
                        (es =
                          (++el && es && es[ec]) || ((ef = el = 0), eu.pop()));

                      )
                        if (1 === es.nodeType && ++ef && es === _) {
                          eo[l] = [e2, el, ef];
                          break;
                        }
                    } else if (
                      !1 ===
                      (ef = e_
                        ? (el =
                            (ei =
                              (eo =
                                (ea = (es = _)[eg] || (es[eg] = {}))[
                                  es.uniqueID
                                ] || (ea[es.uniqueID] = {}))[l] || [])[0] ===
                              e2 && ei[1])
                        : ef)
                    )
                      for (
                        ;
                        (es =
                          (++el && es && es[ec]) ||
                          ((ef = el = 0), eu.pop())) &&
                        ((en
                          ? es.nodeName.toLowerCase() !== ed
                          : 1 !== es.nodeType) ||
                          !++ef ||
                          (e_ &&
                            ((eo =
                              (ea = es[eg] ||= {})[es.uniqueID] ||
                              (ea[es.uniqueID] = {}))[l] = [e2, ef]),
                          es !== _));

                      );
                    return (ef -= X) === N || (ef % N == 0 && ef / N >= 0);
                  }
                };
          },
          PSEUDO: function (l, _) {
            var C,
              N =
                et.pseudos[l] ||
                et.setFilters[l.toLowerCase()] ||
                ez.error("unsupported pseudo: " + l);
            return N[eg]
              ? N(_)
              : N.length > 1
                ? ((C = [l, l, "", _]),
                  et.setFilters.hasOwnProperty(l.toLowerCase()))
                  ? eU(function (l, C) {
                      for (var X, ee = N(l, _), et = ee.length; et--; )
                        l[(X = ew(l, ee[et]))] = !(C[X] = ee[et]);
                    })
                  : function (l) {
                      return N(l, 0, C);
                    }
                : N;
          },
        },
        pseudos: {
          not: eU(function (l) {
            var _ = [],
              C = [],
              N = eo(l.replace(ek, "$1"));
            return N[eg]
              ? eU(function (l, _, C, X) {
                  for (var ee, et = N(l, null, X, []), en = l.length; en--; )
                    (ee = et[en]) && (l[en] = !(_[en] = ee));
                })
              : function (l, X, ee) {
                  return (_[0] = l), N(_, null, ee, C), (_[0] = null), !C.pop();
                };
          }),
          has: eU(function (l) {
            return function (_) {
              return ez(l, _).length > 0;
            };
          }),
          contains: eU(function (l) {
            return (
              (l = l.replace(eF, _)),
              function (_) {
                return (_.textContent || _.innerText || en(_)).indexOf(l) > -1;
              }
            );
          }),
          lang: eU(function (l) {
            return (
              eD.test(l || "") || ez.error("unsupported lang: " + l),
              (l = l.replace(eF, _).toLowerCase()),
              function (_) {
                var C;
                do
                  if (
                    (C = e_
                      ? _.lang
                      : _.getAttribute("xml:lang") || _.getAttribute("lang"))
                  )
                    return (
                      (C = C.toLowerCase()) === l || 0 === C.indexOf(l + "-")
                    );
                while ((_ = _.parentNode) && 1 === _.nodeType);
                return !1;
              }
            );
          }),
          target: function (_) {
            var C = l.location && l.location.hash;
            return C && C.slice(1) === _.id;
          },
          root: function (l) {
            return l === ed;
          },
          focus: function (l) {
            return (
              l === e$.activeElement &&
              (!e$.hasFocus || e$.hasFocus()) &&
              (!!l.type || !!l.href || !!~l.tabIndex)
            );
          },
          enabled: e9(!1),
          disabled: e9(!0),
          checked: function (l) {
            var _ = l.nodeName.toLowerCase();
            return (
              ("input" === _ && !!l.checked) || ("option" === _ && !!l.selected)
            );
          },
          selected: function (l) {
            return (
              l.parentNode && l.parentNode.selectedIndex, !0 === l.selected
            );
          },
          empty: function (l) {
            for (l = l.firstChild; l; l = l.nextSibling)
              if (l.nodeType < 6) return !1;
            return !0;
          },
          parent: function (l) {
            return !et.pseudos.empty(l);
          },
          header: function (l) {
            return eN.test(l.nodeName);
          },
          input: function (l) {
            return eL.test(l.nodeName);
          },
          button: function (l) {
            var _ = l.nodeName.toLowerCase();
            return ("input" === _ && "button" === l.type) || "button" === _;
          },
          text: function (l) {
            return (
              "input" === l.nodeName.toLowerCase() &&
              "text" === l.type &&
              (null == (l = l.getAttribute("type")) ||
                "text" === l.toLowerCase())
            );
          },
          first: eY(function () {
            return [0];
          }),
          last: eY(function (l, _) {
            return [_ - 1];
          }),
          eq: eY(function (l, _, C) {
            return [C < 0 ? C + _ : C];
          }),
          even: eY(function (l, _) {
            for (var C = 0; C < _; C += 2) l.push(C);
            return l;
          }),
          odd: eY(function (l, _) {
            for (var C = 1; C < _; C += 2) l.push(C);
            return l;
          }),
          lt: eY(function (l, _, C) {
            for (var N = C < 0 ? C + _ : C; --N >= 0; ) l.push(N);
            return l;
          }),
          gt: eY(function (l, _, C) {
            for (var N = C < 0 ? C + _ : C; ++N < _; ) l.push(N);
            return l;
          }),
        },
      }).pseudos.nth = et.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      et.pseudos[X] = (function (l) {
        return function (_) {
          return "input" === _.nodeName.toLowerCase() && _.type === l;
        };
      })(X);
    for (X in { submit: !0, reset: !0 })
      et.pseudos[X] = (function (l) {
        return function (_) {
          var C = _.nodeName.toLowerCase();
          return ("input" === C || "button" === C) && _.type === l;
        };
      })(X);
    function te() {}
    function tt(l) {
      for (var _ = 0, C = l.length, N = ""; _ < C; _++) N += l[_].value;
      return N;
    }
    function tn(l, _, C) {
      var N = _.dir,
        X = _.next,
        ee = X || N,
        et = C && "parentNode" === ee,
        en = e3++;
      return _.first
        ? function (_, C, X) {
            for (; (_ = _[N]); ) if (1 === _.nodeType || et) return l(_, C, X);
            return !1;
          }
        : function (_, C, er) {
            var ei,
              eo,
              ea = [e2, en];
            if (er) {
              for (; (_ = _[N]); )
                if ((1 === _.nodeType || et) && l(_, C, er)) return !0;
            } else
              for (; (_ = _[N]); )
                if (1 === _.nodeType || et) {
                  if (
                    ((eo =
                      (eo = _[eg] ||= {})[_.uniqueID] || (eo[_.uniqueID] = {})),
                    X && X === _.nodeName.toLowerCase())
                  )
                    _ = _[N] || _;
                  else {
                    if ((ei = eo[ee]) && ei[0] === e2 && ei[1] === en)
                      return (ea[2] = ei[2]);
                    if (((eo[ee] = ea)[2] = l(_, C, er))) return !0;
                  }
                }
            return !1;
          };
    }
    function tr(l) {
      return l.length > 1
        ? function (_, C, N) {
            for (var X = l.length; X--; ) if (!l[X](_, C, N)) return !1;
            return !0;
          }
        : l[0];
    }
    function ti(l, _, C, N, X) {
      for (
        var ee, et = [], en = 0, er = l.length, ei = null != _;
        en < er;
        en++
      )
        (ee = l[en]) && (!C || C(ee, N, X)) && (et.push(ee), ei && _.push(en));
      return et;
    }
    function to(l, _, C, N, X, ee) {
      return (
        N && !N[eg] && (N = to(N)),
        X && !X[eg] && (X = to(X, ee)),
        eU(function (ee, et, en, er) {
          var ei,
            eo,
            ea,
            es = [],
            el = [],
            eu = et.length,
            ec =
              ee ||
              (function (l, _, C) {
                for (var N = 0, X = _.length; N < X; N++) ez(l, _[N], C);
                return C;
              })(_ || "*", en.nodeType ? [en] : en, []),
            e$ = l && (ee || !_) ? ti(ec, es, l, en, er) : ec,
            ed = C ? (X || (ee ? l : eu || N) ? [] : et) : e$;
          if ((C && C(e$, ed, en, er), N))
            for (ei = ti(ed, el), N(ei, [], en, er), eo = ei.length; eo--; )
              (ea = ei[eo]) && (ed[el[eo]] = !(e$[el[eo]] = ea));
          if (ee) {
            if (X || l) {
              if (X) {
                for (ei = [], eo = ed.length; eo--; )
                  (ea = ed[eo]) && ei.push((e$[eo] = ea));
                X(null, (ed = []), ei, er);
              }
              for (eo = ed.length; eo--; )
                (ea = ed[eo]) &&
                  (ei = X ? ew(ee, ea) : es[eo]) > -1 &&
                  (ee[ei] = !(et[ei] = ea));
            }
          } else
            (ed = ti(ed === et ? ed.splice(eu, ed.length) : ed)),
              X ? X(null, et, ed, er) : eS.apply(et, ed);
        })
      );
    }
    function ta(l, _) {
      function C(C, ee, en, er, ei) {
        var eo,
          ea,
          el,
          eu = 0,
          ed = "0",
          ef = C && [],
          ep = [],
          eh = es,
          e0 = C || (X && et.find.TAG("*", ei)),
          eg = (e2 += null == eh ? 1 : Math.random() || 0.1),
          e1 = e0.length;
        for (
          ei && (es = ee === e$ || ee || ei);
          ed !== e1 && null != (eo = e0[ed]);
          ed++
        ) {
          if (X && eo) {
            for (
              ea = 0, ee || eo.ownerDocument === e$ || (ec(eo), (en = !e_));
              (el = l[ea++]);

            )
              if (el(eo, ee || e$, en)) {
                er.push(eo);
                break;
              }
            ei && (e2 = eg);
          }
          N && ((eo = !el && eo) && eu--, C) && ef.push(eo);
        }
        if (((eu += ed), N && ed !== eu)) {
          for (ea = 0; (el = _[ea++]); ) el(ef, ep, ee, en);
          if (C) {
            if (eu > 0)
              for (; ed--; ) ef[ed] || ep[ed] || (ep[ed] = e6.call(er));
            ep = ti(ep);
          }
          eS.apply(er, ep),
            ei && !C && ep.length > 0 && eu + _.length > 1 && ez.uniqueSort(er);
        }
        return ei && ((e2 = eg), (es = eh)), ef;
      }
      var N = _.length > 0,
        X = l.length > 0;
      return N ? eU(C) : C;
    }
    return (
      (te.prototype = et.filters = et.pseudos),
      (et.setFilters = new te()),
      (ei = ez.tokenize =
        function (l, _) {
          var C,
            N,
            X,
            ee,
            en,
            er,
            ei,
            eo = e5[l + " "];
          if (eo) return _ ? 0 : eo.slice(0);
          for (en = l, er = [], ei = et.preFilter; en; ) {
            for (ee in ((!C || (N = eB.exec(en))) &&
              (N && (en = en.slice(N[0].length) || en), er.push((X = []))),
            (C = !1),
            (N = eE.exec(en)) &&
              ((C = N.shift()),
              X.push({ value: C, type: N[0].replace(ek, " ") }),
              (en = en.slice(C.length))),
            et.filter))
              (N = eI[ee].exec(en)) &&
                (!ei[ee] || (N = ei[ee](N))) &&
                ((C = N.shift()),
                X.push({ value: C, type: ee, matches: N }),
                (en = en.slice(C.length)));
            if (!C) break;
          }
          return _ ? en.length : en ? ez.error(l) : e5(l, er).slice(0);
        }),
      (eo = ez.compile =
        function (l, _) {
          var C,
            N = [],
            X = [],
            ee = ev[l + " "];
          if (!ee) {
            for (C = (_ = _ || ei(l)).length; C--; )
              ((ee = (function l(_) {
                for (
                  var C,
                    N,
                    X,
                    ee = _.length,
                    en = et.relative[_[0].type],
                    er = en || et.relative[" "],
                    ei = en ? 1 : 0,
                    eo = tn(
                      function (l) {
                        return l === C;
                      },
                      er,
                      !0
                    ),
                    ea = tn(
                      function (l) {
                        return ew(C, l) > -1;
                      },
                      er,
                      !0
                    ),
                    el = [
                      function (l, _, N) {
                        return (
                          (l =
                            (!en && (N || _ !== es)) ||
                            ((C = _).nodeType ? eo : ea)(l, _, N)),
                          (C = null),
                          l
                        );
                      },
                    ];
                  ei < ee;
                  ei++
                )
                  if ((N = et.relative[_[ei].type])) el = [tn(tr(el), N)];
                  else {
                    if (
                      (N = et.filter[_[ei].type].apply(null, _[ei].matches))[eg]
                    ) {
                      for (X = ++ei; X < ee && !et.relative[_[X].type]; X++);
                      return to(
                        ei > 1 && tr(el),
                        ei > 1 &&
                          tt(
                            _.slice(0, ei - 1).concat({
                              value: " " === _[ei - 2].type ? "*" : "",
                            })
                          ).replace(ek, "$1"),
                        N,
                        ei < X && l(_.slice(ei, X)),
                        X < ee && l((_ = _.slice(X))),
                        X < ee && tt(_)
                      );
                    }
                    el.push(N);
                  }
                return tr(el);
              })(_[C]))[eg]
                ? N
                : X
              ).push(ee);
            (ee = ev(l, ta(X, N))).selector = l;
          }
          return ee;
        }),
      (ea = ez.select =
        function (l, C, N, X) {
          var ee,
            en,
            er,
            ea,
            es,
            el = "function" == typeof l && l,
            eu = !X && ei((l = el.selector || l));
          if (((N = N || []), 1 === eu.length)) {
            if (
              (en = eu[0] = eu[0].slice(0)).length > 2 &&
              "ID" === (er = en[0]).type &&
              9 === C.nodeType &&
              e_ &&
              et.relative[en[1].type]
            ) {
              if (!(C = (et.find.ID(er.matches[0].replace(eF, _), C) || [])[0]))
                return N;
              el && (C = C.parentNode), (l = l.slice(en.shift().value.length));
            }
            for (
              ee = eI.needsContext.test(l) ? 0 : en.length;
              ee-- && ((er = en[ee]), !et.relative[(ea = er.type)]);

            )
              if (
                (es = et.find[ea]) &&
                (X = es(
                  er.matches[0].replace(eF, _),
                  (eR.test(en[0].type) && eJ(C.parentNode)) || C
                ))
              ) {
                if ((en.splice(ee, 1), (l = X.length && tt(en)))) break;
                return eS.apply(N, X), N;
              }
          }
          return (
            (el || eo(l, eu))(
              X,
              C,
              !e_,
              N,
              !C || (eR.test(l) && eJ(C.parentNode)) || C
            ),
            N
          );
        }),
      (ee.sortStable = eg.split("").sort(ey).join("") === eg),
      (ee.detectDuplicates = !!eu),
      ec(),
      (ee.sortDetached = eZ(function (l) {
        return 1 & l.compareDocumentPosition(e$.createElement("fieldset"));
      })),
      eZ(function (l) {
        return (
          (l.innerHTML = "<a href='#'></a>"),
          "#" === l.firstChild.getAttribute("href")
        );
      }) ||
        eK("type|href|height|width", function (l, _, C) {
          if (!C) return l.getAttribute(_, "type" === _.toLowerCase() ? 1 : 2);
        }),
      (ee.attributes &&
        eZ(function (l) {
          return (
            (l.innerHTML = "<input/>"),
            l.firstChild.setAttribute("value", ""),
            "" === l.firstChild.getAttribute("value")
          );
        })) ||
        eK("value", function (l, _, C) {
          if (!C && "input" === l.nodeName.toLowerCase()) return l.defaultValue;
        }),
      eZ(function (l) {
        return null == l.getAttribute("disabled");
      }) ||
        eK(eP, function (l, _, C) {
          if (!C)
            return !0 === l[_]
              ? _.toLowerCase()
              : (C = l.getAttributeNode(_)) && C.specified
                ? C.value
                : null;
        }),
      ez
    );
  })(l);
  (e6.find = ed),
    (e6.expr = ed.selectors),
    (e6.expr[":"] = e6.expr.pseudos),
    (e6.uniqueSort = e6.unique = ed.uniqueSort),
    (e6.text = ed.getText),
    (e6.isXMLDoc = ed.isXML),
    (e6.contains = ed.contains),
    (e6.escapeSelector = ed.escape);
  var eP = e6.expr.match.needsContext;
  function eA(l, _) {
    return l.nodeName && l.nodeName.toLowerCase() === _.toLowerCase();
  }
  var e8 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function eC(l, _, N) {
    return C(_)
      ? e6.grep(l, function (l, C) {
          return !!_.call(l, C, l) !== N;
        })
      : _.nodeType
        ? e6.grep(l, function (l) {
            return (l === _) !== N;
          })
        : "string" != typeof _
          ? e6.grep(l, function (l) {
              return eg.call(_, l) > -1 !== N;
            })
          : e6.filter(_, l, N);
  }
  (e6.filter = function (l, _, C) {
    var N = _[0];
    return (C && (l = ":not(" + l + ")"), 1 !== _.length || 1 !== N.nodeType)
      ? e6.find.matches(
          l,
          e6.grep(_, function (l) {
            return 1 === l.nodeType;
          })
        )
      : e6.find.matchesSelector(N, l)
        ? [N]
        : [];
  }),
    e6.fn.extend({
      find: function (l) {
        var _,
          C,
          N = this.length,
          X = this;
        if ("string" != typeof l)
          return this.pushStack(
            e6(l).filter(function () {
              for (_ = 0; _ < N; _++) if (e6.contains(X[_], this)) return !0;
            })
          );
        for (C = this.pushStack([]), _ = 0; _ < N; _++) e6.find(l, X[_], C);
        return N > 1 ? e6.uniqueSort(C) : C;
      },
      filter: function (l) {
        return this.pushStack(eC(this, l || [], !1));
      },
      not: function (l) {
        return this.pushStack(eC(this, l || [], !0));
      },
      is: function (l) {
        return !!eC(
          this,
          "string" == typeof l && eP.test(l) ? e6(l) : l || [],
          !1
        ).length;
      },
    });
  var eM = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((e6.fn.init = function (l, _, N) {
    if (l) {
      if (((N = N || X), "string" != typeof l))
        return l.nodeType
          ? ((this[0] = l), (this.length = 1), this)
          : C(l)
            ? void 0 !== N.ready
              ? N.ready(l)
              : l(e6)
            : e6.makeArray(l, this);
      if (
        !(ee =
          "<" === l[0] && ">" === l[l.length - 1] && l.length >= 3
            ? [null, l, null]
            : eM.exec(l)) ||
        (!ee[1] && _)
      )
        return (!_ || _.jquery ? _ || N : this.constructor(_)).find(l);
      if (ee[1]) {
        if (
          ((_ = _ instanceof e6 ? _[0] : _),
          e6.merge(
            this,
            e6.parseHTML(ee[1], _ && _.nodeType ? _.ownerDocument || _ : e_, !0)
          ),
          e8.test(ee[1]) && e6.isPlainObject(_))
        )
          for (var ee in _)
            C(this[ee]) ? this[ee](_[ee]) : this.attr(ee, _[ee]);
      } else
        (N = e_.getElementById(ee[2])) && ((this[0] = N), (this.length = 1));
    }
    return this;
  }).prototype = e6.fn),
    (X = e6(e_));
  var ex = /^(?:parents|prev(?:Until|All))/,
    ek = { children: !0, contents: !0, next: !0, prev: !0 };
  function eB(l, _) {
    for (; (l = l[_]) && 1 !== l.nodeType; );
    return l;
  }
  e6.fn.extend({
    has: function (l) {
      var _ = e6(l, this),
        C = _.length;
      return this.filter(function () {
        for (var l = 0; l < C; l++) if (e6.contains(this, _[l])) return !0;
      });
    },
    closest: function (l, _) {
      var C,
        N = 0,
        X = this.length,
        ee = [],
        et = "string" != typeof l && e6(l);
      if (!eP.test(l)) {
        for (; N < X; N++)
          for (C = this[N]; C && C !== _; C = C.parentNode)
            if (
              C.nodeType < 11 &&
              (et
                ? et.index(C) > -1
                : 1 === C.nodeType && e6.find.matchesSelector(C, l))
            ) {
              ee.push(C);
              break;
            }
      }
      return this.pushStack(ee.length > 1 ? e6.uniqueSort(ee) : ee);
    },
    index: function (l) {
      return l
        ? "string" == typeof l
          ? eg.call(e6(l), this[0])
          : eg.call(this, l.jquery ? l[0] : l)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (l, _) {
      return this.pushStack(e6.uniqueSort(e6.merge(this.get(), e6(l, _))));
    },
    addBack: function (l) {
      return this.add(null == l ? this.prevObject : this.prevObject.filter(l));
    },
  }),
    e6.each(
      {
        parent: function (l) {
          return (l = l.parentNode) && 11 !== l.nodeType ? l : null;
        },
        parents: function (l) {
          return e7(l, "parentNode");
        },
        parentsUntil: function (l, _, C) {
          return e7(l, "parentNode", C);
        },
        next: function (l) {
          return eB(l, "nextSibling");
        },
        prev: function (l) {
          return eB(l, "previousSibling");
        },
        nextAll: function (l) {
          return e7(l, "nextSibling");
        },
        prevAll: function (l) {
          return e7(l, "previousSibling");
        },
        nextUntil: function (l, _, C) {
          return e7(l, "nextSibling", C);
        },
        prevUntil: function (l, _, C) {
          return e7(l, "previousSibling", C);
        },
        siblings: function (l) {
          return ew((l.parentNode || {}).firstChild, l);
        },
        children: function (l) {
          return ew(l.firstChild);
        },
        contents: function (l) {
          return eA(l, "iframe")
            ? l.contentDocument
            : (eA(l, "template") && (l = l.content || l),
              e6.merge([], l.childNodes));
        },
      },
      function (l, _) {
        e6.fn[l] = function (C, N) {
          var X = e6.map(this, _, C);
          return (
            (N = "Until" !== l.slice(-5) ? C : N) &&
              "string" == typeof N &&
              (X = e6.filter(N, X)),
            this.length > 1 &&
              (ek[l] || e6.uniqueSort(X), ex.test(l)) &&
              X.reverse(),
            this.pushStack(X)
          );
        };
      }
    );
  var eE = /[^\x20\t\r\n\f]+/g;
  function eG(l) {
    return l;
  }
  function eH(l) {
    throw l;
  }
  function eD(l, _, N, X) {
    var ee;
    try {
      l && C((ee = l.promise))
        ? ee.call(l).done(_).fail(N)
        : l && C((ee = l.then))
          ? ee.call(l, _, N)
          : _.apply(void 0, [l].slice(X));
    } catch (et) {
      N.apply(void 0, [et]);
    }
  }
  (e6.Callbacks = function (l) {
    function _() {
      for (er = er || l.once, en = ee = !0; eo.length; ea = -1)
        for (et = eo.shift(); ++ea < ei.length; )
          !1 === ei[ea].apply(et[0], et[1]) &&
            l.stopOnFalse &&
            ((ea = ei.length), (et = !1));
      l.memory || (et = !1), (ee = !1), er && (ei = et ? [] : "");
    }
    l =
      "string" == typeof l
        ? ((N = l),
          (X = {}),
          e6.each(N.match(eE) || [], function (l, _) {
            X[_] = !0;
          }),
          X)
        : e6.extend({}, l);
    var N,
      X,
      ee,
      et,
      en,
      er,
      ei = [],
      eo = [],
      ea = -1,
      es = {
        add: function () {
          return (
            ei &&
              (et && !ee && ((ea = ei.length - 1), eo.push(et)),
              (function _(N) {
                e6.each(N, function (N, X) {
                  C(X)
                    ? (l.unique && es.has(X)) || ei.push(X)
                    : X && X.length && "string" !== e4(X) && _(X);
                });
              })(arguments),
              et) &&
              !ee &&
              _(),
            this
          );
        },
        remove: function () {
          return (
            e6.each(arguments, function (l, _) {
              for (var C; (C = e6.inArray(_, ei, C)) > -1; )
                ei.splice(C, 1), C <= ea && ea--;
            }),
            this
          );
        },
        has: function (l) {
          return l ? e6.inArray(l, ei) > -1 : ei.length > 0;
        },
        empty: function () {
          return (ei = ei && []), this;
        },
        disable: function () {
          return (er = eo = []), (ei = et = ""), this;
        },
        disabled: function () {
          return !ei;
        },
        lock: function () {
          return (er = eo = []), et || ee || (ei = et = ""), this;
        },
        locked: function () {
          return !!er;
        },
        fireWith: function (l, C) {
          return (
            er ||
              ((C = [l, (C = C || []).slice ? C.slice() : C]),
              eo.push(C),
              ee) ||
              _(),
            this
          );
        },
        fire: function () {
          return es.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!en;
        },
      };
    return es;
  }),
    e6.extend({
      Deferred: function (_) {
        var N = [
            [
              "notify",
              "progress",
              e6.Callbacks("memory"),
              e6.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              e6.Callbacks("once memory"),
              e6.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              e6.Callbacks("once memory"),
              e6.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          X = "pending",
          ee = {
            state: function () {
              return X;
            },
            always: function () {
              return et.done(arguments).fail(arguments), this;
            },
            catch: function (l) {
              return ee.then(null, l);
            },
            pipe: function () {
              var l = arguments;
              return e6
                .Deferred(function (_) {
                  e6.each(N, function (N, X) {
                    var ee = C(l[X[4]]) && l[X[4]];
                    et[X[1]](function () {
                      var l = ee && ee.apply(this, arguments);
                      l && C(l.promise)
                        ? l
                            .promise()
                            .progress(_.notify)
                            .done(_.resolve)
                            .fail(_.reject)
                        : _[X[0] + "With"](this, ee ? [l] : arguments);
                    });
                  }),
                    (l = null);
                })
                .promise();
            },
            then: function (_, X, ee) {
              var et = 0;
              function en(_, N, X, ee) {
                return function () {
                  function er() {
                    var l, er;
                    if (!(_ < et)) {
                      if ((l = X.apply(ei, eo)) === N.promise())
                        throw TypeError("Thenable self-resolution");
                      C(
                        (er =
                          l &&
                          ("object" == typeof l || "function" == typeof l) &&
                          l.then)
                      )
                        ? ee
                          ? er.call(l, en(et, N, eG, ee), en(et, N, eH, ee))
                          : (et++,
                            er.call(
                              l,
                              en(et, N, eG, ee),
                              en(et, N, eH, ee),
                              en(et, N, eG, N.notifyWith)
                            ))
                        : (X !== eG && ((ei = void 0), (eo = [l])),
                          (ee || N.resolveWith)(ei, eo));
                    }
                  }
                  var ei = this,
                    eo = arguments,
                    ea = ee
                      ? er
                      : function () {
                          try {
                            er();
                          } catch (l) {
                            e6.Deferred.exceptionHook &&
                              e6.Deferred.exceptionHook(l, ea.stackTrace),
                              et <= _ + 1 &&
                                (X !== eH && ((ei = void 0), (eo = [l])),
                                N.rejectWith(ei, eo));
                          }
                        };
                  _
                    ? ea()
                    : (e6.Deferred.getStackHook &&
                        (ea.stackTrace = e6.Deferred.getStackHook()),
                      l.setTimeout(ea));
                };
              }
              return e6
                .Deferred(function (l) {
                  N[0][3].add(en(0, l, C(ee) ? ee : eG, l.notifyWith)),
                    N[1][3].add(en(0, l, C(_) ? _ : eG)),
                    N[2][3].add(en(0, l, C(X) ? X : eH));
                })
                .promise();
            },
            promise: function (l) {
              return null != l ? e6.extend(l, ee) : ee;
            },
          },
          et = {};
        return (
          e6.each(N, function (l, _) {
            var C = _[2],
              en = _[5];
            (ee[_[1]] = C.add),
              en &&
                C.add(
                  function () {
                    X = en;
                  },
                  N[3 - l][2].disable,
                  N[3 - l][3].disable,
                  N[0][2].lock,
                  N[0][3].lock
                ),
              C.add(_[3].fire),
              (et[_[0]] = function () {
                return (
                  et[_[0] + "With"](this === et ? void 0 : this, arguments),
                  this
                );
              }),
              (et[_[0] + "With"] = C.fireWith);
          }),
          ee.promise(et),
          _ && _.call(et, et),
          et
        );
      },
      when: function (l) {
        function _(l) {
          return function (_) {
            (ee[l] = this),
              (et[l] = arguments.length > 1 ? ep.call(arguments) : _),
              --N || en.resolveWith(ee, et);
          };
        }
        var N = arguments.length,
          X = N,
          ee = Array(X),
          et = ep.call(arguments),
          en = e6.Deferred();
        if (
          N <= 1 &&
          (eD(l, en.done(_(X)).resolve, en.reject, !N),
          "pending" === en.state() || C(et[X] && et[X].then))
        )
          return en.then();
        for (; X--; ) eD(et[X], _(X), en.reject);
        return en.promise();
      },
    });
  var eI = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (e6.Deferred.exceptionHook = function (_, C) {
    l.console &&
      l.console.warn &&
      _ &&
      eI.test(_.name) &&
      l.console.warn("jQuery.Deferred exception: " + _.message, _.stack, C);
  }),
    (e6.readyException = function (_) {
      l.setTimeout(function () {
        throw _;
      });
    });
  var eL = e6.Deferred();
  function eN() {
    e_.removeEventListener("DOMContentLoaded", eN),
      l.removeEventListener("load", eN),
      e6.ready();
  }
  function eO(l, _, N, X, ee, et, en) {
    var er = 0,
      ei = l.length,
      eo = null == N;
    if ("object" === e4(N))
      for (er in ((ee = !0), N)) eO(l, _, er, N[er], !0, et, en);
    else if (
      void 0 !== X &&
      ((ee = !0),
      C(X) || (en = !0),
      (_ = eo
        ? en
          ? (_.call(l, X), null)
          : ((eo = _),
            function (l, _, C) {
              return eo.call(e6(l), C);
            })
        : _))
    )
      for (; er < ei; er++)
        _(l[er], N, en ? X : X.call(l[er], er, _(l[er], N)));
    return ee ? l : eo ? _.call(l) : ei ? _(l[0], N) : et;
  }
  (e6.fn.ready = function (l) {
    return (
      eL.then(l).catch(function (l) {
        e6.readyException(l);
      }),
      this
    );
  }),
    e6.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (l) {
        (!0 === l ? --e6.readyWait : e6.isReady) ||
          ((e6.isReady = !0) !== l && --e6.readyWait > 0) ||
          eL.resolveWith(e_, [e6]);
      },
    }),
    (e6.ready.then = eL.then),
    "complete" !== e_.readyState &&
    ("loading" === e_.readyState || e_.documentElement.doScroll)
      ? (e_.addEventListener("DOMContentLoaded", eN),
        l.addEventListener("load", eN))
      : l.setTimeout(e6.ready);
  var ej = /^-ms-/,
    eR = /-([a-z])/g;
  function eF(l, _) {
    return _.toUpperCase();
  }
  function eV(l) {
    return l.replace(ej, "ms-").replace(eR, eF);
  }
  function eW(l) {
    return 1 === l.nodeType || 9 === l.nodeType || !+l.nodeType;
  }
  function eX() {
    this.expando = e6.expando + eX.uid++;
  }
  (eX.uid = 1),
    (eX.prototype = {
      cache: function (l) {
        var _ = l[this.expando];
        return (
          !_ &&
            ((_ = {}),
            eW(l) &&
              (l.nodeType
                ? (l[this.expando] = _)
                : Object.defineProperty(l, this.expando, {
                    value: _,
                    configurable: !0,
                  }))),
          _
        );
      },
      set: function (l, _, C) {
        var N,
          X = this.cache(l);
        if ("string" == typeof _) X[eV(_)] = C;
        else for (N in _) X[eV(N)] = _[N];
        return X;
      },
      get: function (l, _) {
        return void 0 === _
          ? this.cache(l)
          : l[this.expando] && l[this.expando][eV(_)];
      },
      access: function (l, _, C) {
        return void 0 === _ || (_ && "string" == typeof _ && void 0 === C)
          ? this.get(l, _)
          : (this.set(l, _, C), void 0 !== C)
            ? C
            : _;
      },
      remove: function (l, _) {
        var C,
          N = l[this.expando];
        if (void 0 !== N) {
          if (void 0 !== _)
            for (
              C = (_ = Array.isArray(_)
                ? _.map(eV)
                : ((_ = eV(_)) in N)
                  ? [_]
                  : _.match(eE) || []).length;
              C--;

            )
              delete N[_[C]];
          (void 0 === _ || e6.isEmptyObject(N)) &&
            (l.nodeType ? (l[this.expando] = void 0) : delete l[this.expando]);
        }
      },
      hasData: function (l) {
        return void 0 !== (l = l[this.expando]) && !e6.isEmptyObject(l);
      },
    });
  var ez = new eX(),
    eq = new eX(),
    eU = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    eZ = /[A-Z]/g;
  function eK(l, _, C) {
    var N, X;
    if (void 0 === C && 1 === l.nodeType) {
      if (
        ((N = "data-" + _.replace(eZ, "-$&").toLowerCase()),
        "string" == typeof (C = l.getAttribute(N)))
      ) {
        try {
          C =
            "true" === (X = C) ||
            ("false" !== X &&
              ("null" === X
                ? null
                : X === +X + ""
                  ? +X
                  : eU.test(X)
                    ? JSON.parse(X)
                    : X));
        } catch (ee) {}
        eq.set(l, _, C);
      } else C = void 0;
    }
    return C;
  }
  function eQ(l, _) {
    return (
      "none" === (l = _ || l).style.display ||
      ("" === l.style.display &&
        e6.contains(l.ownerDocument, l) &&
        "none" === e6.css(l, "display"))
    );
  }
  function e9(l, _, C, N) {
    var X,
      ee = {};
    for (X in _) (ee[X] = l.style[X]), (l.style[X] = _[X]);
    for (X in ((C = C.apply(l, N || [])), _)) l.style[X] = ee[X];
    return C;
  }
  e6.extend({
    hasData: function (l) {
      return eq.hasData(l) || ez.hasData(l);
    },
    data: function (l, _, C) {
      return eq.access(l, _, C);
    },
    removeData: function (l, _) {
      eq.remove(l, _);
    },
    _data: function (l, _, C) {
      return ez.access(l, _, C);
    },
    _removeData: function (l, _) {
      ez.remove(l, _);
    },
  }),
    e6.fn.extend({
      data: function (l, _) {
        var C,
          N,
          X,
          ee = this[0],
          et = ee && ee.attributes;
        if (void 0 !== l)
          return "object" == typeof l
            ? this.each(function () {
                eq.set(this, l);
              })
            : eO(
                this,
                function (_) {
                  var C;
                  if (ee && void 0 === _)
                    return void 0 !== (C = eq.get(ee, l)) ||
                      void 0 !== (C = eK(ee, l))
                      ? C
                      : void 0;
                  this.each(function () {
                    eq.set(this, l, _);
                  });
                },
                null,
                _,
                arguments.length > 1,
                null,
                !0
              );
        if (
          this.length &&
          ((X = eq.get(ee)), 1 === ee.nodeType) &&
          !ez.get(ee, "hasDataAttrs")
        ) {
          for (C = et.length; C--; )
            et[C] &&
              0 === (N = et[C].name).indexOf("data-") &&
              eK(ee, (N = eV(N.slice(5))), X[N]);
          ez.set(ee, "hasDataAttrs", !0);
        }
        return X;
      },
      removeData: function (l) {
        return this.each(function () {
          eq.remove(this, l);
        });
      },
    }),
    e6.extend({
      queue: function (l, _, C) {
        var N;
        if (l)
          return (
            (N = ez.get(l, (_ = (_ || "fx") + "queue"))),
            C &&
              (!N || Array.isArray(C)
                ? (N = ez.access(l, _, e6.makeArray(C)))
                : N.push(C)),
            N || []
          );
      },
      dequeue: function (l, _) {
        _ = _ || "fx";
        var C = e6.queue(l, _),
          N = C.length,
          X = C.shift(),
          ee = e6._queueHooks(l, _);
        "inprogress" === X && ((X = C.shift()), N--),
          X &&
            ("fx" === _ && C.unshift("inprogress"),
            delete ee.stop,
            X.call(
              l,
              function () {
                e6.dequeue(l, _);
              },
              ee
            )),
          !N && ee && ee.empty.fire();
      },
      _queueHooks: function (l, _) {
        var C = _ + "queueHooks";
        return (
          ez.get(l, C) ||
          ez.access(l, C, {
            empty: e6.Callbacks("once memory").add(function () {
              ez.remove(l, [_ + "queue", C]);
            }),
          })
        );
      },
    }),
    e6.fn.extend({
      queue: function (l, _) {
        var C = 2;
        return ("string" != typeof l && ((_ = l), (l = "fx"), C--),
        arguments.length < C)
          ? e6.queue(this[0], l)
          : void 0 === _
            ? this
            : this.each(function () {
                var C = e6.queue(this, l, _);
                e6._queueHooks(this, l),
                  "fx" === l && "inprogress" !== C[0] && e6.dequeue(this, l);
              });
      },
      dequeue: function (l) {
        return this.each(function () {
          e6.dequeue(this, l);
        });
      },
      clearQueue: function (l) {
        return this.queue(l || "fx", []);
      },
      promise: function (l, _) {
        function C() {
          --X || ee.resolveWith(et, [et]);
        }
        var N,
          X = 1,
          ee = e6.Deferred(),
          et = this,
          en = this.length;
        for (
          "string" != typeof l && ((_ = l), (l = void 0)), l = l || "fx";
          en--;

        )
          (N = ez.get(et[en], l + "queueHooks")) &&
            N.empty &&
            (X++, N.empty.add(C));
        return C(), ee.promise(_);
      },
    });
  var ed = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    eY = RegExp("^(?:([+-])=|)(" + ed + ")([a-z%]*)$", "i"),
    eJ = ["Top", "Right", "Bottom", "Left"];
  function te(l, _, C, N) {
    var X,
      ee,
      et = 20,
      en = N
        ? function () {
            return N.cur();
          }
        : function () {
            return e6.css(l, _, "");
          },
      er = en(),
      ei = (C && C[3]) || (e6.cssNumber[_] ? "" : "px"),
      eo = (e6.cssNumber[_] || ("px" !== ei && +er)) && eY.exec(e6.css(l, _));
    if (eo && eo[3] !== ei) {
      for (ei = ei || eo[3], eo = +(er /= 2) || 1; et--; )
        e6.style(l, _, eo + ei),
          (1 - ee) * (1 - (ee = en() / er || 0.5)) <= 0 && (et = 0),
          (eo /= ee);
      e6.style(l, _, (eo *= 2) + ei), (C = C || []);
    }
    return (
      C &&
        ((eo = +eo || +er || 0),
        (X = C[1] ? eo + (C[1] + 1) * C[2] : +C[2]),
        N) &&
        ((N.unit = ei), (N.start = eo), (N.end = X)),
      X
    );
  }
  var tt = {};
  function tn(l, _) {
    for (var C, N, X, ee, et, en = [], er = 0, ei = l.length; er < ei; er++)
      (N = l[er]).style &&
        ((C = N.style.display),
        _
          ? ("none" !== C ||
              ((en[er] = ez.get(N, "display") || null),
              en[er] || (N.style.display = "")),
            "" === N.style.display &&
              eQ(N) &&
              ((et = ee = void 0),
              (ee = (X = N).ownerDocument),
              (X = X.nodeName),
              (en[er] =
                (et = tt[X]) ||
                ((ee = ee.body.appendChild(ee.createElement(X))),
                (et = e6.css(ee, "display")),
                ee.parentNode.removeChild(ee),
                (tt[X] = et = "none" === et ? "block" : et)))))
          : "none" !== C && ((en[er] = "none"), ez.set(N, "display", C)));
    for (er = 0; er < ei; er++)
      null != en[er] && (l[er].style.display = en[er]);
    return l;
  }
  e6.fn.extend({
    show: function () {
      return tn(this, !0);
    },
    hide: function () {
      return tn(this);
    },
    toggle: function (l) {
      return "boolean" != typeof l
        ? this.each(function () {
            eQ(this) ? e6(this).show() : e6(this).hide();
          })
        : l
          ? this.show()
          : this.hide();
    },
  });
  var tr = /^(?:checkbox|radio)$/i,
    ti = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    to = /^$|^module$|\/(?:java|ecma)script/i,
    ta = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ts(l, _) {
    var C =
      void 0 !== l.getElementsByTagName
        ? l.getElementsByTagName(_ || "*")
        : void 0 !== l.querySelectorAll
          ? l.querySelectorAll(_ || "*")
          : [];
    return void 0 === _ || (_ && eA(l, _)) ? e6.merge([l], C) : C;
  }
  function tl(l, _) {
    for (var C = 0, N = l.length; C < N; C++)
      ez.set(l[C], "globalEval", !_ || ez.get(_[C], "globalEval"));
  }
  (ta.optgroup = ta.option),
    (ta.tbody = ta.tfoot = ta.colgroup = ta.caption = ta.thead),
    (ta.th = ta.td);
  var tu = /<|&#?\w+;/;
  function tc(l, _, C, N, X) {
    for (
      var ee,
        et,
        en,
        er,
        ei,
        eo = _.createDocumentFragment(),
        ea = [],
        es = 0,
        el = l.length;
      es < el;
      es++
    )
      if ((ee = l[es]) || 0 === ee) {
        if ("object" === e4(ee)) e6.merge(ea, ee.nodeType ? [ee] : ee);
        else if (tu.test(ee)) {
          for (
            et = et || eo.appendChild(_.createElement("div")),
              en =
                ta[(en = (ti.exec(ee) || ["", ""])[1].toLowerCase())] ||
                ta._default,
              et.innerHTML = en[1] + e6.htmlPrefilter(ee) + en[2],
              ei = en[0];
            ei--;

          )
            et = et.lastChild;
          e6.merge(ea, et.childNodes), ((et = eo.firstChild).textContent = "");
        } else ea.push(_.createTextNode(ee));
      }
    for (eo.textContent = "", es = 0; (ee = ea[es++]); )
      if (N && e6.inArray(ee, N) > -1) X && X.push(ee);
      else if (
        ((er = e6.contains(ee.ownerDocument, ee)),
        (et = ts(eo.appendChild(ee), "script")),
        er && tl(et),
        C)
      )
        for (ei = 0; (ee = et[ei++]); ) to.test(ee.type || "") && C.push(ee);
    return eo;
  }
  (ec = e_.createDocumentFragment().appendChild(e_.createElement("div"))),
    (eu = e_.createElement("input")).setAttribute("type", "radio"),
    eu.setAttribute("checked", "checked"),
    eu.setAttribute("name", "t"),
    ec.appendChild(eu),
    (ev.checkClone = ec.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ec.innerHTML = "<textarea>x</textarea>"),
    (ev.noCloneChecked = !!ec.cloneNode(!0).lastChild.defaultValue);
  var t$ = e_.documentElement,
    td = /^key/,
    t_ = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    tf = /^([^.]*)(?:\.(.+)|)/;
  function tp() {
    return !0;
  }
  function th() {
    return !1;
  }
  function t0() {
    try {
      return e_.activeElement;
    } catch (l) {}
  }
  function tg(l, _, C, N, X, ee) {
    var et, en;
    if ("object" == typeof _) {
      for (en in ("string" != typeof C && ((N = N || C), (C = void 0)), _))
        tg(l, en, C, N, _[en], ee);
      return l;
    }
    if (
      (null == N && null == X
        ? ((X = C), (N = C = void 0))
        : null == X &&
          ("string" == typeof C
            ? ((X = N), (N = void 0))
            : ((X = N), (N = C), (C = void 0))),
      !1 === X)
    )
      X = th;
    else if (!X) return l;
    return (
      1 === ee &&
        ((et = X),
        ((X = function (l) {
          return e6().off(l), et.apply(this, arguments);
        }).guid = et.guid ||=
          e6.guid++)),
      l.each(function () {
        e6.event.add(this, _, X, N, C);
      })
    );
  }
  (e6.event = {
    global: {},
    add: function (l, _, C, N, X) {
      var ee,
        et,
        en,
        er,
        ei,
        eo,
        ea,
        es,
        el,
        eu = ez.get(l);
      if (eu)
        for (
          C.handler && ((C = (ee = C).handler), (X = ee.selector)),
            X && e6.find.matchesSelector(t$, X),
            C.guid ||= e6.guid++,
            en = (en = eu.events) || (eu.events = {}),
            et =
              (et = eu.handle) ||
              (eu.handle = function (_) {
                return void 0 !== e6 && e6.event.triggered !== _.type
                  ? e6.event.dispatch.apply(l, arguments)
                  : void 0;
              }),
            er = (_ = (_ || "").match(eE) || [""]).length;
          er--;

        )
          (ea = el = (es = tf.exec(_[er]) || [])[1]),
            (es = (es[2] || "").split(".").sort()),
            ea &&
              ((ei = e6.event.special[ea] || {}),
              (ea = (X ? ei.delegateType : ei.bindType) || ea),
              (ei = e6.event.special[ea] || {}),
              (el = e6.extend(
                {
                  type: ea,
                  origType: el,
                  data: N,
                  handler: C,
                  guid: C.guid,
                  selector: X,
                  needsContext: X && e6.expr.match.needsContext.test(X),
                  namespace: es.join("."),
                },
                ee
              )),
              (eo = en[ea]) ||
                (((eo = en[ea] = []).delegateCount = 0),
                ei.setup && !1 !== ei.setup.call(l, N, es, et)) ||
                !l.addEventListener ||
                l.addEventListener(ea, et),
              ei.add && (ei.add.call(l, el), (el.handler.guid ||= C.guid)),
              X ? eo.splice(eo.delegateCount++, 0, el) : eo.push(el),
              (e6.event.global[ea] = !0));
    },
    remove: function (l, _, C, N, X) {
      var ee,
        et,
        en,
        er,
        ei,
        eo,
        ea,
        es,
        el,
        eu,
        ec,
        e$ = ez.hasData(l) && ez.get(l);
      if (e$ && (er = e$.events)) {
        for (ei = (_ = (_ || "").match(eE) || [""]).length; ei--; )
          if (
            ((el = ec = (en = tf.exec(_[ei]) || [])[1]),
            (eu = (en[2] || "").split(".").sort()),
            el)
          ) {
            for (
              ea = e6.event.special[el] || {},
                es = er[(el = (N ? ea.delegateType : ea.bindType) || el)] || [],
                en =
                  en[2] &&
                  RegExp("(^|\\.)" + eu.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                et = ee = es.length;
              ee--;

            )
              (eo = es[ee]),
                (X || ec === eo.origType) &&
                  (!C || C.guid === eo.guid) &&
                  (!en || en.test(eo.namespace)) &&
                  (!N || N === eo.selector || ("**" === N && eo.selector)) &&
                  (es.splice(ee, 1),
                  eo.selector && es.delegateCount--,
                  ea.remove && ea.remove.call(l, eo));
            et &&
              !es.length &&
              ((ea.teardown && !1 !== ea.teardown.call(l, eu, e$.handle)) ||
                e6.removeEvent(l, el, e$.handle),
              delete er[el]);
          } else for (el in er) e6.event.remove(l, el + _[ei], C, N, !0);
        e6.isEmptyObject(er) && ez.remove(l, "handle events");
      }
    },
    dispatch: function (l) {
      var _,
        C,
        N,
        X,
        ee,
        et = e6.event.fix(l),
        en = Array(arguments.length),
        l = (ez.get(this, "events") || {})[et.type] || [],
        er = e6.event.special[et.type] || {};
      for (en[0] = et, _ = 1; _ < arguments.length; _++) en[_] = arguments[_];
      if (
        ((et.delegateTarget = this),
        !er.preDispatch || !1 !== er.preDispatch.call(this, et))
      ) {
        for (
          ee = e6.event.handlers.call(this, et, l), _ = 0;
          (N = ee[_++]) && !et.isPropagationStopped();

        )
          for (
            et.currentTarget = N.elem, C = 0;
            (X = N.handlers[C++]) && !et.isImmediatePropagationStopped();

          )
            (!et.rnamespace || et.rnamespace.test(X.namespace)) &&
              ((et.handleObj = X),
              (et.data = X.data),
              void 0 !==
                (X = (
                  (e6.event.special[X.origType] || {}).handle || X.handler
                ).apply(N.elem, en)) &&
                !1 === (et.result = X) &&
                (et.preventDefault(), et.stopPropagation()));
        return er.postDispatch && er.postDispatch.call(this, et), et.result;
      }
    },
    handlers: function (l, _) {
      var C,
        N,
        X,
        ee,
        et,
        en = [],
        er = _.delegateCount,
        ei = l.target;
      if (er && ei.nodeType && ("click" !== l.type || !(l.button >= 1))) {
        for (; ei !== this; ei = ei.parentNode || this)
          if (1 === ei.nodeType && ("click" !== l.type || !0 !== ei.disabled)) {
            for (ee = [], et = {}, C = 0; C < er; C++)
              void 0 === et[(X = (N = _[C]).selector + " ")] &&
                (et[X] = N.needsContext
                  ? e6(X, this).index(ei) > -1
                  : e6.find(X, this, null, [ei]).length),
                et[X] && ee.push(N);
            ee.length && en.push({ elem: ei, handlers: ee });
          }
      }
      return (
        (ei = this),
        er < _.length && en.push({ elem: ei, handlers: _.slice(er) }),
        en
      );
    },
    addProp: function (l, _) {
      Object.defineProperty(e6.Event.prototype, l, {
        enumerable: !0,
        configurable: !0,
        get: C(_)
          ? function () {
              if (this.originalEvent) return _(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[l];
            },
        set: function (_) {
          Object.defineProperty(this, l, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: _,
          });
        },
      });
    },
    fix: function (l) {
      return l[e6.expando] ? l : new e6.Event(l);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== t0() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === t0() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && eA(this, "input"))
            return this.click(), !1;
        },
        _default: function (l) {
          return eA(l.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (l) {
          void 0 !== l.result &&
            l.originalEvent &&
            (l.originalEvent.returnValue = l.result);
        },
      },
    },
  }),
    (e6.removeEvent = function (l, _, C) {
      l.removeEventListener && l.removeEventListener(_, C);
    }),
    (e6.Event = function (l, _) {
      if (!(this instanceof e6.Event)) return new e6.Event(l, _);
      l && l.type
        ? ((this.originalEvent = l),
          (this.type = l.type),
          (this.isDefaultPrevented =
            l.defaultPrevented ||
            (void 0 === l.defaultPrevented && !1 === l.returnValue)
              ? tp
              : th),
          (this.target =
            l.target && 3 === l.target.nodeType
              ? l.target.parentNode
              : l.target),
          (this.currentTarget = l.currentTarget),
          (this.relatedTarget = l.relatedTarget))
        : (this.type = l),
        _ && e6.extend(this, _),
        (this.timeStamp = (l && l.timeStamp) || Date.now()),
        (this[e6.expando] = !0);
    }),
    (e6.Event.prototype = {
      constructor: e6.Event,
      isDefaultPrevented: th,
      isPropagationStopped: th,
      isImmediatePropagationStopped: th,
      isSimulated: !1,
      preventDefault: function () {
        var l = this.originalEvent;
        (this.isDefaultPrevented = tp),
          l && !this.isSimulated && l.preventDefault();
      },
      stopPropagation: function () {
        var l = this.originalEvent;
        (this.isPropagationStopped = tp),
          l && !this.isSimulated && l.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var l = this.originalEvent;
        (this.isImmediatePropagationStopped = tp),
          l && !this.isSimulated && l.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    e6.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (l) {
          var _ = l.button;
          return null == l.which && td.test(l.type)
            ? (l.charCode ?? l.keyCode)
            : !l.which && void 0 !== _ && t_.test(l.type)
              ? 1 & _
                ? 1
                : 2 & _
                  ? 3
                  : 4 & _
                    ? 2
                    : 0
              : l.which;
        },
      },
      e6.event.addProp
    ),
    e6.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (l, _) {
        e6.event.special[l] = {
          delegateType: _,
          bindType: _,
          handle: function (l) {
            var C,
              N = l.relatedTarget,
              X = l.handleObj;
            return (
              (N && (N === this || e6.contains(this, N))) ||
                ((l.type = X.origType),
                (C = X.handler.apply(this, arguments)),
                (l.type = _)),
              C
            );
          },
        };
      }
    ),
    e6.fn.extend({
      on: function (l, _, C, N) {
        return tg(this, l, _, C, N);
      },
      one: function (l, _, C, N) {
        return tg(this, l, _, C, N, 1);
      },
      off: function (l, _, C) {
        var N, X;
        if (l && l.preventDefault && l.handleObj)
          (N = l.handleObj),
            e6(l.delegateTarget).off(
              N.namespace ? N.origType + "." + N.namespace : N.origType,
              N.selector,
              N.handler
            );
        else {
          if ("object" != typeof l)
            return (
              (!1 === _ || "function" == typeof _) && ((C = _), (_ = void 0)),
              !1 === C && (C = th),
              this.each(function () {
                e6.event.remove(this, l, C, _);
              })
            );
          for (X in l) this.off(X, _, l[X]);
        }
        return this;
      },
    });
  var t1 =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    t2 = /<script|<style|<link/i,
    t3 = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function t5(l, _) {
    return (
      (eA(l, "table") &&
        eA(11 !== _.nodeType ? _ : _.firstChild, "tr") &&
        e6(l).children("tbody")[0]) ||
      l
    );
  }
  function tv(l) {
    return (l.type = (null !== l.getAttribute("type")) + "/" + l.type), l;
  }
  function ty(l) {
    return (
      "true/" === (l.type || "").slice(0, 5)
        ? (l.type = l.type.slice(5))
        : l.removeAttribute("type"),
      l
    );
  }
  function tm(l, _) {
    var C, N, X, ee, et, en;
    if (1 === _.nodeType) {
      if (
        ez.hasData(l) &&
        ((ee = ez.access(l)), (et = ez.set(_, ee)), (en = ee.events))
      )
        for (X in (delete et.handle, (et.events = {}), en))
          for (C = 0, N = en[X].length; C < N; C++)
            e6.event.add(_, X, en[X][C]);
      eq.hasData(l) &&
        ((ee = eq.access(l)), (et = e6.extend({}, ee)), eq.set(_, et));
    }
  }
  function t4(l, _, N, X) {
    _ = eh.apply([], _);
    var ee,
      et,
      en,
      er,
      ei,
      eo,
      ea = 0,
      es = l.length,
      el = es - 1,
      eu = _[0],
      ec = C(eu);
    if (
      ec ||
      (es > 1 && "string" == typeof eu && !ev.checkClone && t3.test(eu))
    )
      return l.each(function (C) {
        var ee = l.eq(C);
        ec && (_[0] = eu.call(this, C, ee.html())), t4(ee, _, N, X);
      });
    if (
      es &&
      ((et = (ee = tc(_, l[0].ownerDocument, !1, l, X)).firstChild),
      1 === ee.childNodes.length && (ee = et),
      et || X)
    ) {
      for (er = (en = e6.map(ts(ee, "script"), tv)).length; ea < es; ea++)
        (ei = ee),
          ea !== el &&
            ((ei = e6.clone(ei, !0, !0)), er) &&
            e6.merge(en, ts(ei, "script")),
          N.call(l[ea], ei, ea);
      if (er)
        for (
          eo = en[en.length - 1].ownerDocument, e6.map(en, ty), ea = 0;
          ea < er;
          ea++
        )
          (ei = en[ea]),
            to.test(ei.type || "") &&
              !ez.access(ei, "globalEval") &&
              e6.contains(eo, ei) &&
              (ei.src && "module" !== (ei.type || "").toLowerCase()
                ? e6._evalUrl && e6._evalUrl(ei.src)
                : em(ei.textContent.replace(tb, ""), eo, ei));
    }
    return l;
  }
  function t6(l, _, C) {
    for (var N, X = _ ? e6.filter(_, l) : l, ee = 0; null != (N = X[ee]); ee++)
      C || 1 !== N.nodeType || e6.cleanData(ts(N)),
        N.parentNode &&
          (C && e6.contains(N.ownerDocument, N) && tl(ts(N, "script")),
          N.parentNode.removeChild(N));
    return l;
  }
  function tT(_) {
    var C = _.ownerDocument.defaultView;
    return (C = C && C.opener ? C : l).getComputedStyle(_);
  }
  e6.extend({
    htmlPrefilter: function (l) {
      return l.replace(t1, "<$1></$2>");
    },
    clone: function (l, _, C) {
      var N,
        X,
        ee,
        et,
        en,
        er,
        ei,
        eo = l.cloneNode(!0),
        ea = e6.contains(l.ownerDocument, l);
      if (
        !ev.noCloneChecked &&
        (1 === l.nodeType || 11 === l.nodeType) &&
        !e6.isXMLDoc(l)
      )
        for (et = ts(eo), N = 0, X = (ee = ts(l)).length; N < X; N++)
          (en = ee[N]),
            (er = et[N]),
            (ei = void 0),
            "input" === (ei = er.nodeName.toLowerCase()) && tr.test(en.type)
              ? (er.checked = en.checked)
              : ("input" === ei || "textarea" === ei) &&
                (er.defaultValue = en.defaultValue);
      if (_) {
        if (C)
          for (
            ee = ee || ts(l), et = et || ts(eo), N = 0, X = ee.length;
            N < X;
            N++
          )
            tm(ee[N], et[N]);
        else tm(l, eo);
      }
      return (
        (et = ts(eo, "script")).length > 0 && tl(et, !ea && ts(l, "script")), eo
      );
    },
    cleanData: function (l) {
      for (
        var _, C, N, X = e6.event.special, ee = 0;
        void 0 !== (C = l[ee]);
        ee++
      )
        if (eW(C)) {
          if ((_ = C[ez.expando])) {
            if (_.events)
              for (N in _.events)
                X[N] ? e6.event.remove(C, N) : e6.removeEvent(C, N, _.handle);
            C[ez.expando] = void 0;
          }
          C[eq.expando] &&= void 0;
        }
    },
  }),
    e6.fn.extend({
      detach: function (l) {
        return t6(this, l, !0);
      },
      remove: function (l) {
        return t6(this, l);
      },
      text: function (l) {
        return eO(
          this,
          function (l) {
            return void 0 === l
              ? e6.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = l);
                });
          },
          null,
          l,
          arguments.length
        );
      },
      append: function () {
        return t4(this, arguments, function (l) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            t5(this, l).appendChild(l);
        });
      },
      prepend: function () {
        return t4(this, arguments, function (l) {
          var _;
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            (_ = t5(this, l)).insertBefore(l, _.firstChild);
        });
      },
      before: function () {
        return t4(this, arguments, function (l) {
          this.parentNode && this.parentNode.insertBefore(l, this);
        });
      },
      after: function () {
        return t4(this, arguments, function (l) {
          this.parentNode && this.parentNode.insertBefore(l, this.nextSibling);
        });
      },
      empty: function () {
        for (var l, _ = 0; null != (l = this[_]); _++)
          1 === l.nodeType && (e6.cleanData(ts(l, !1)), (l.textContent = ""));
        return this;
      },
      clone: function (l, _) {
        return (
          (l = null != l && l),
          (_ = null == _ ? l : _),
          this.map(function () {
            return e6.clone(this, l, _);
          })
        );
      },
      html: function (l) {
        return eO(
          this,
          function (l) {
            var _ = this[0] || {},
              C = 0,
              N = this.length;
            if (void 0 === l && 1 === _.nodeType) return _.innerHTML;
            if (
              "string" == typeof l &&
              !t2.test(l) &&
              !ta[(ti.exec(l) || ["", ""])[1].toLowerCase()]
            ) {
              l = e6.htmlPrefilter(l);
              try {
                for (; C < N; C++)
                  1 === (_ = this[C] || {}).nodeType &&
                    (e6.cleanData(ts(_, !1)), (_.innerHTML = l));
                _ = 0;
              } catch (X) {}
            }
            _ && this.empty().append(l);
          },
          null,
          l,
          arguments.length
        );
      },
      replaceWith: function () {
        var l = [];
        return t4(
          this,
          arguments,
          function (_) {
            var C = this.parentNode;
            0 > e6.inArray(this, l) &&
              (e6.cleanData(ts(this)), C) &&
              C.replaceChild(_, this);
          },
          l
        );
      },
    }),
    e6.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (l, _) {
        e6.fn[l] = function (l) {
          for (
            var C, N = [], X = e6(l), ee = X.length - 1, et = 0;
            et <= ee;
            et++
          )
            (C = et === ee ? this : this.clone(!0)),
              e6(X[et])[_](C),
              e0.apply(N, C.get());
          return this.pushStack(N);
        };
      }
    );
  var tS = RegExp("^(" + ed + ")(?!px)[a-z%]+$", "i"),
    t7 = RegExp(eJ.join("|"), "i");
  function tw() {
    var _;
    ea &&
      ((eo.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
      (ea.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
      t$.appendChild(eo).appendChild(ea),
      (ee = "1%" !== (_ = l.getComputedStyle(ea)).top),
      (ei = 12 === tP(_.marginLeft)),
      (ea.style.right = "60%"),
      (er = 36 === tP(_.right)),
      (et = 36 === tP(_.width)),
      (ea.style.position = "absolute"),
      (en = 36 === ea.offsetWidth || "absolute"),
      t$.removeChild(eo),
      (ea = null));
  }
  function tP(l) {
    return Math.round(parseFloat(l));
  }
  function tA(l, _, C) {
    var N,
      X,
      ee = l.style;
    return ((C = C || tT(l)) &&
      ("" !== (X = C.getPropertyValue(_) || C[_]) ||
        e6.contains(l.ownerDocument, l) ||
        (X = e6.style(l, _)),
      !ev.pixelBoxStyles()) &&
      tS.test(X) &&
      t7.test(_) &&
      ((l = ee.width),
      (_ = ee.minWidth),
      (N = ee.maxWidth),
      (ee.minWidth = ee.maxWidth = ee.width = X),
      (X = C.width),
      (ee.width = l),
      (ee.minWidth = _),
      (ee.maxWidth = N)),
    void 0 !== X)
      ? X + ""
      : X;
  }
  function t8(l, _) {
    return {
      get: function () {
        if (!l()) return (this.get = _).apply(this, arguments);
        delete this.get;
      },
    };
  }
  (eo = e_.createElement("div")),
    (ea = e_.createElement("div")).style &&
      ((ea.style.backgroundClip = "content-box"),
      (ea.cloneNode(!0).style.backgroundClip = ""),
      (ev.clearCloneStyle = "content-box" === ea.style.backgroundClip),
      e6.extend(ev, {
        boxSizingReliable: function () {
          return tw(), et;
        },
        pixelBoxStyles: function () {
          return tw(), er;
        },
        pixelPosition: function () {
          return tw(), ee;
        },
        reliableMarginLeft: function () {
          return tw(), ei;
        },
        scrollboxSize: function () {
          return tw(), en;
        },
      }));
  var tC = /^(none|table(?!-c[ea]).+)/,
    tM = /^--/,
    tx = { position: "absolute", visibility: "hidden", display: "block" },
    tk = { letterSpacing: "0", fontWeight: "400" },
    tB = ["Webkit", "Moz", "ms"],
    tE = e_.createElement("div").style;
  function tG(l) {
    return (e6.cssProps[l] ||=
      (function (l) {
        if (l in tE) return l;
        for (var _ = l[0].toUpperCase() + l.slice(1), C = tB.length; C--; )
          if ((l = tB[C] + _) in tE) return l;
      })(l) || l);
  }
  function tH(l, _, C) {
    var N = eY.exec(_);
    return N ? Math.max(0, N[2] - (C || 0)) + (N[3] || "px") : _;
  }
  function tD(l, _, C, N, X, ee) {
    var et = "width" === _ ? 1 : 0,
      en = 0,
      er = 0;
    if (C === (N ? "border" : "content")) return 0;
    for (; et < 4; et += 2)
      "margin" === C && (er += e6.css(l, C + eJ[et], !0, X)),
        N
          ? ("content" === C && (er -= e6.css(l, "padding" + eJ[et], !0, X)),
            "margin" !== C &&
              (er -= e6.css(l, "border" + eJ[et] + "Width", !0, X)))
          : ((er += e6.css(l, "padding" + eJ[et], !0, X)),
            "padding" !== C
              ? (er += e6.css(l, "border" + eJ[et] + "Width", !0, X))
              : (en += e6.css(l, "border" + eJ[et] + "Width", !0, X)));
    return (
      !N &&
        ee >= 0 &&
        (er += Math.max(
          0,
          Math.ceil(
            l["offset" + _[0].toUpperCase() + _.slice(1)] - ee - er - en - 0.5
          )
        )),
      er
    );
  }
  function tI(l, _, C) {
    var N = tT(l),
      X = tA(l, _, N),
      ee = "border-box" === e6.css(l, "boxSizing", !1, N),
      et = ee;
    if (tS.test(X)) {
      if (!C) return X;
      X = "auto";
    }
    return (
      (et = et && (ev.boxSizingReliable() || X === l.style[_])),
      ("auto" !== X &&
        (parseFloat(X) || "inline" !== e6.css(l, "display", !1, N))) ||
        ((X = l["offset" + _[0].toUpperCase() + _.slice(1)]), (et = !0)),
      (X = parseFloat(X) || 0) +
        tD(l, _, C || (ee ? "border" : "content"), et, N, X) +
        "px"
    );
  }
  function tL(l, _, C, N, X) {
    return new tL.prototype.init(l, _, C, N, X);
  }
  e6.extend({
    cssHooks: {
      opacity: {
        get: function (l, _) {
          if (_) return "" === (_ = tA(l, "opacity")) ? "1" : _;
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (l, _, C, N) {
      if (l && 3 !== l.nodeType && 8 !== l.nodeType && l.style) {
        var X,
          ee,
          et,
          en = eV(_),
          er = tM.test(_),
          ei = l.style;
        if (
          (er || (_ = tG(en)),
          (et = e6.cssHooks[_] || e6.cssHooks[en]),
          void 0 === C)
        )
          return et && "get" in et && void 0 !== (X = et.get(l, !1, N))
            ? X
            : ei[_];
        "string" == (ee = typeof C) &&
          (X = eY.exec(C)) &&
          X[1] &&
          ((C = te(l, _, X)), (ee = "number")),
          null == C ||
            C != C ||
            ("number" === ee &&
              (C += (X && X[3]) || (e6.cssNumber[en] ? "" : "px")),
            ev.clearCloneStyle ||
              "" !== C ||
              0 !== _.indexOf("background") ||
              (ei[_] = "inherit"),
            (et && "set" in et && void 0 === (C = et.set(l, C, N))) ||
              (er ? ei.setProperty(_, C) : (ei[_] = C)));
      }
    },
    css: function (l, _, C, N) {
      var X,
        ee = eV(_);
      return (tM.test(_) || (_ = tG(ee)),
      "normal" ===
        (X =
          void 0 ===
          (X =
            (ee = e6.cssHooks[_] || e6.cssHooks[ee]) && "get" in ee
              ? ee.get(l, !0, C)
              : X)
            ? tA(l, _, N)
            : X) &&
        _ in tk &&
        (X = tk[_]),
      ("" === C || C) && ((ee = parseFloat(X)), !0 === C || isFinite(ee)))
        ? ee || 0
        : X;
    },
  }),
    e6.each(["height", "width"], function (l, _) {
      e6.cssHooks[_] = {
        get: function (l, C, N) {
          if (C)
            return !tC.test(e6.css(l, "display")) ||
              (l.getClientRects().length && l.getBoundingClientRect().width)
              ? tI(l, _, N)
              : e9(l, tx, function () {
                  return tI(l, _, N);
                });
        },
        set: function (l, C, N) {
          var X = tT(l),
            ee = "border-box" === e6.css(l, "boxSizing", !1, X),
            N = N && tD(l, _, N, ee, X);
          return (
            ee &&
              ev.scrollboxSize() === X.position &&
              (N -= Math.ceil(
                l["offset" + _[0].toUpperCase() + _.slice(1)] -
                  parseFloat(X[_]) -
                  tD(l, _, "border", !1, X) -
                  0.5
              )),
            N &&
              (ee = eY.exec(C)) &&
              "px" !== (ee[3] || "px") &&
              ((l.style[_] = C), (C = e6.css(l, _))),
            tH(0, C, N)
          );
        },
      };
    }),
    (e6.cssHooks.marginLeft = t8(ev.reliableMarginLeft, function (l, _) {
      if (_)
        return (
          (parseFloat(tA(l, "marginLeft")) ||
            l.getBoundingClientRect().left -
              e9(l, { marginLeft: 0 }, function () {
                return l.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    e6.each({ margin: "", padding: "", border: "Width" }, function (l, _) {
      (e6.cssHooks[l + _] = {
        expand: function (C) {
          for (
            var N = 0, X = {}, ee = "string" == typeof C ? C.split(" ") : [C];
            N < 4;
            N++
          )
            X[l + eJ[N] + _] = ee[N] || ee[N - 2] || ee[0];
          return X;
        },
      }),
        "margin" !== l && (e6.cssHooks[l + _].set = tH);
    }),
    e6.fn.extend({
      css: function (l, _) {
        return eO(
          this,
          function (l, _, C) {
            var N,
              X,
              ee = {},
              et = 0;
            if (Array.isArray(_)) {
              for (N = tT(l), X = _.length; et < X; et++)
                ee[_[et]] = e6.css(l, _[et], !1, N);
              return ee;
            }
            return void 0 !== C ? e6.style(l, _, C) : e6.css(l, _);
          },
          l,
          _,
          arguments.length > 1
        );
      },
    }),
    (((e6.Tween = tL).prototype = {
      constructor: tL,
      init: function (l, _, C, N, X, ee) {
        (this.elem = l),
          (this.prop = C),
          (this.easing = X || e6.easing._default),
          (this.options = _),
          (this.start = this.now = this.cur()),
          (this.end = N),
          (this.unit = ee || (e6.cssNumber[C] ? "" : "px"));
      },
      cur: function () {
        var l = tL.propHooks[this.prop];
        return (l && l.get ? l : tL.propHooks._default).get(this);
      },
      run: function (l) {
        var _,
          C = tL.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = _ =
                e6.easing[this.easing](
                  l,
                  this.options.duration * l,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = _ = l),
          (this.now = (this.end - this.start) * _ + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (C && C.set ? C : tL.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = tL.prototype),
    ((tL.propHooks = {
      _default: {
        get: function (l) {
          return 1 !== l.elem.nodeType ||
            (null != l.elem[l.prop] && null == l.elem.style[l.prop])
            ? l.elem[l.prop]
            : (l = e6.css(l.elem, l.prop, "")) && "auto" !== l
              ? l
              : 0;
        },
        set: function (l) {
          e6.fx.step[l.prop]
            ? e6.fx.step[l.prop](l)
            : 1 === l.elem.nodeType &&
                (null != l.elem.style[e6.cssProps[l.prop]] ||
                  e6.cssHooks[l.prop])
              ? e6.style(l.elem, l.prop, l.now + l.unit)
              : (l.elem[l.prop] = l.now);
        },
      },
    }).scrollTop = tL.propHooks.scrollLeft =
      {
        set: function (l) {
          l.elem.nodeType && l.elem.parentNode && (l.elem[l.prop] = l.now);
        },
      }),
    (e6.easing = {
      linear: function (l) {
        return l;
      },
      swing: function (l) {
        return 0.5 - Math.cos(l * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (e6.fx = tL.prototype.init),
    (e6.fx.step = {});
  var tN = /^(?:toggle|show|hide)$/,
    tO = /queueHooks$/;
  function tj() {
    el &&
      (!1 === e_.hidden && l.requestAnimationFrame
        ? l.requestAnimationFrame(tj)
        : l.setTimeout(tj, e6.fx.interval),
      e6.fx.tick());
  }
  function tR() {
    return (
      l.setTimeout(function () {
        es = void 0;
      }),
      (es = Date.now())
    );
  }
  function tF(l, _) {
    var C,
      N = 0,
      X = { height: l };
    for (_ = _ ? 1 : 0; N < 4; N += 2 - _)
      X["margin" + (C = eJ[N])] = X["padding" + C] = l;
    return _ && (X.opacity = X.width = l), X;
  }
  function tV(l, _, C) {
    for (
      var N,
        X = (tW.tweeners[_] || []).concat(tW.tweeners["*"]),
        ee = 0,
        et = X.length;
      ee < et;
      ee++
    )
      if ((N = X[ee].call(C, _, l))) return N;
  }
  function tW(l, _, N) {
    var X,
      ee,
      et,
      en,
      er,
      ei,
      eo,
      ea = 0,
      el = tW.prefilters.length,
      eu = e6.Deferred().always(function () {
        delete ec.elem;
      });
    function ec() {
      if (ee) return !1;
      for (
        var _ = es || tR(),
          _ = Math.max(0, e$.startTime + e$.duration - _),
          C = 1 - (_ / e$.duration || 0),
          N = 0,
          X = e$.tweens.length;
        N < X;
        N++
      )
        e$.tweens[N].run(C);
      return (eu.notifyWith(l, [e$, C, _]), C < 1 && X)
        ? _
        : (X || eu.notifyWith(l, [e$, 1, 0]), eu.resolveWith(l, [e$]), !1);
    }
    var e$ = eu.promise({
        elem: l,
        props: e6.extend({}, _),
        opts: e6.extend(
          !0,
          { specialEasing: {}, easing: e6.easing._default },
          N
        ),
        originalProperties: _,
        originalOptions: N,
        startTime: es || tR(),
        duration: N.duration,
        tweens: [],
        createTween: function (_, C) {
          return (
            (C = e6.Tween(
              l,
              e$.opts,
              _,
              C,
              e$.opts.specialEasing[_] || e$.opts.easing
            )),
            e$.tweens.push(C),
            C
          );
        },
        stop: function (_) {
          var C = 0,
            N = _ ? e$.tweens.length : 0;
          if (!ee) {
            for (ee = !0; C < N; C++) e$.tweens[C].run(1);
            _
              ? (eu.notifyWith(l, [e$, 1, 0]), eu.resolveWith(l, [e$, _]))
              : eu.rejectWith(l, [e$, _]);
          }
          return this;
        },
      }),
      ed = e$.props,
      e_ = ed,
      ef = e$.opts.specialEasing;
    for (et in e_)
      if (
        ((er = ef[(en = eV(et))]),
        Array.isArray((ei = e_[et])) && ((er = ei[1]), (ei = e_[et] = ei[0])),
        et !== en && ((e_[en] = ei), delete e_[et]),
        (eo = e6.cssHooks[en]) && "expand" in eo)
      )
        for (et in ((ei = eo.expand(ei)), delete e_[en], ei))
          et in e_ || ((e_[et] = ei[et]), (ef[et] = er));
      else ef[en] = er;
    for (; ea < el; ea++)
      if ((X = tW.prefilters[ea].call(e$, l, ed, e$.opts)))
        return (
          C(X.stop) &&
            (e6._queueHooks(e$.elem, e$.opts.queue).stop = X.stop.bind(X)),
          X
        );
    return (
      e6.map(ed, tV, e$),
      C(e$.opts.start) && e$.opts.start.call(l, e$),
      e$
        .progress(e$.opts.progress)
        .done(e$.opts.done, e$.opts.complete)
        .fail(e$.opts.fail)
        .always(e$.opts.always),
      e6.fx.timer(e6.extend(ec, { elem: l, anim: e$, queue: e$.opts.queue })),
      e$
    );
  }
  (e6.Animation = e6.extend(tW, {
    tweeners: {
      "*": [
        function (l, _) {
          var C = this.createTween(l, _);
          return te(C.elem, l, eY.exec(_), C), C;
        },
      ],
    },
    tweener: function (l, _) {
      for (
        var N, X = 0, ee = (l = C(l) ? ((_ = l), ["*"]) : l.match(eE)).length;
        X < ee;
        X++
      )
        (N = l[X]),
          (tW.tweeners[N] = tW.tweeners[N] || []),
          tW.tweeners[N].unshift(_);
    },
    prefilters: [
      function (l, _, C) {
        var N,
          X,
          ee,
          et,
          en,
          er,
          ei,
          eo = "width" in _ || "height" in _,
          ea = this,
          es = {},
          el = l.style,
          eu = l.nodeType && eQ(l),
          ec = ez.get(l, "fxshow");
        for (N in (C.queue ||
          (null == (et = e6._queueHooks(l, "fx")).unqueued &&
            ((et.unqueued = 0),
            (en = et.empty.fire),
            (et.empty.fire = function () {
              et.unqueued || en();
            })),
          et.unqueued++,
          ea.always(function () {
            ea.always(function () {
              et.unqueued--, e6.queue(l, "fx").length || et.empty.fire();
            });
          })),
        _))
          if (((X = _[N]), tN.test(X))) {
            if (
              (delete _[N],
              (ee = ee || "toggle" === X),
              X === (eu ? "hide" : "show"))
            ) {
              if ("show" !== X || !ec || void 0 === ec[N]) continue;
              eu = !0;
            }
            es[N] = (ec && ec[N]) || e6.style(l, N);
          }
        if ((er = !e6.isEmptyObject(_)) || !e6.isEmptyObject(es))
          for (N in (eo &&
            1 === l.nodeType &&
            ((C.overflow = [el.overflow, el.overflowX, el.overflowY]),
            null == (ei = ec && ec.display) && (ei = ez.get(l, "display")),
            "none" === (eo = e6.css(l, "display")) &&
              (ei
                ? (eo = ei)
                : (tn([l], !0),
                  (ei = l.style.display || ei),
                  (eo = e6.css(l, "display")),
                  tn([l]))),
            "inline" === eo || ("inline-block" === eo && null != ei)) &&
            "none" === e6.css(l, "float") &&
            (er ||
              (ea.done(function () {
                el.display = ei;
              }),
              null != ei || (ei = "none" === (eo = el.display) ? "" : eo)),
            (el.display = "inline-block")),
          C.overflow &&
            ((el.overflow = "hidden"),
            ea.always(function () {
              (el.overflow = C.overflow[0]),
                (el.overflowX = C.overflow[1]),
                (el.overflowY = C.overflow[2]);
            })),
          (er = !1),
          es))
            er ||
              (ec
                ? "hidden" in ec && (eu = ec.hidden)
                : (ec = ez.access(l, "fxshow", { display: ei })),
              ee && (ec.hidden = !eu),
              eu && tn([l], !0),
              ea.done(function () {
                for (N in (eu || tn([l]), ez.remove(l, "fxshow"), es))
                  e6.style(l, N, es[N]);
              })),
              (er = tV(eu ? ec[N] : 0, N, ea)),
              N in ec ||
                ((ec[N] = er.start),
                eu && ((er.end = er.start), (er.start = 0)));
      },
    ],
    prefilter: function (l, _) {
      _ ? tW.prefilters.unshift(l) : tW.prefilters.push(l);
    },
  })),
    (e6.speed = function (l, _, N) {
      var X =
        l && "object" == typeof l
          ? e6.extend({}, l)
          : {
              complete: N || (!N && _) || (C(l) && l),
              duration: l,
              easing: (N && _) || (_ && !C(_) && _),
            };
      return (
        e6.fx.off
          ? (X.duration = 0)
          : "number" != typeof X.duration &&
            (X.duration in e6.fx.speeds
              ? (X.duration = e6.fx.speeds[X.duration])
              : (X.duration = e6.fx.speeds._default)),
        (null == X.queue || !0 === X.queue) && (X.queue = "fx"),
        (X.old = X.complete),
        (X.complete = function () {
          C(X.old) && X.old.call(this), X.queue && e6.dequeue(this, X.queue);
        }),
        X
      );
    }),
    e6.fn.extend({
      fadeTo: function (l, _, C, N) {
        return this.filter(eQ)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: _ }, l, C, N);
      },
      animate: function (l, _, C, N) {
        function X() {
          var _ = tW(this, e6.extend({}, l), et);
          (ee || ez.get(this, "finish")) && _.stop(!0);
        }
        var ee = e6.isEmptyObject(l),
          et = e6.speed(_, C, N);
        return ((X.finish = X), ee || !1 === et.queue)
          ? this.each(X)
          : this.queue(et.queue, X);
      },
      stop: function (l, _, C) {
        function N(l) {
          var _ = l.stop;
          delete l.stop, _(C);
        }
        return (
          "string" != typeof l && ((C = _), (_ = l), (l = void 0)),
          _ && !1 !== l && this.queue(l || "fx", []),
          this.each(function () {
            var _ = !0,
              X = null != l && l + "queueHooks",
              ee = e6.timers,
              et = ez.get(this);
            if (X) et[X] && et[X].stop && N(et[X]);
            else for (X in et) et[X] && et[X].stop && tO.test(X) && N(et[X]);
            for (X = ee.length; X--; )
              ee[X].elem === this &&
                (null == l || ee[X].queue === l) &&
                (ee[X].anim.stop(C), (_ = !1), ee.splice(X, 1));
            (_ || !C) && e6.dequeue(this, l);
          })
        );
      },
      finish: function (l) {
        return (
          !1 !== l && (l = l || "fx"),
          this.each(function () {
            var _,
              C = ez.get(this),
              N = C[l + "queue"],
              X = C[l + "queueHooks"],
              ee = e6.timers,
              et = N ? N.length : 0;
            for (
              C.finish = !0,
                e6.queue(this, l, []),
                X && X.stop && X.stop.call(this, !0),
                _ = ee.length;
              _--;

            )
              ee[_].elem === this &&
                ee[_].queue === l &&
                (ee[_].anim.stop(!0), ee.splice(_, 1));
            for (_ = 0; _ < et; _++)
              N[_] && N[_].finish && N[_].finish.call(this);
            delete C.finish;
          })
        );
      },
    }),
    e6.each(["toggle", "show", "hide"], function (l, _) {
      var C = e6.fn[_];
      e6.fn[_] = function (l, N, X) {
        return null == l || "boolean" == typeof l
          ? C.apply(this, arguments)
          : this.animate(tF(_, !0), l, N, X);
      };
    }),
    e6.each(
      {
        slideDown: tF("show"),
        slideUp: tF("hide"),
        slideToggle: tF("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (l, _) {
        e6.fn[l] = function (l, C, N) {
          return this.animate(_, l, C, N);
        };
      }
    ),
    (e6.timers = []),
    (e6.fx.tick = function () {
      var l,
        _ = 0,
        C = e6.timers;
      for (es = Date.now(); _ < C.length; _++)
        (l = C[_])() || C[_] !== l || C.splice(_--, 1);
      C.length || e6.fx.stop(), (es = void 0);
    }),
    (e6.fx.timer = function (l) {
      e6.timers.push(l), e6.fx.start();
    }),
    (e6.fx.interval = 13),
    (e6.fx.start = function () {
      el || ((el = !0), tj());
    }),
    (e6.fx.stop = function () {
      el = null;
    }),
    (e6.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (e6.fn.delay = function (_, C) {
      return (
        (_ = (e6.fx && e6.fx.speeds[_]) || _),
        this.queue((C = C || "fx"), function (C, N) {
          var X = l.setTimeout(C, _);
          N.stop = function () {
            l.clearTimeout(X);
          };
        })
      );
    }),
    (eu = e_.createElement("input")),
    (ec = e_.createElement("select").appendChild(e_.createElement("option"))),
    (eu.type = "checkbox"),
    (ev.checkOn = "" !== eu.value),
    (ev.optSelected = ec.selected),
    ((eu = e_.createElement("input")).value = "t"),
    (eu.type = "radio"),
    (ev.radioValue = "t" === eu.value);
  var tX = e6.expr.attrHandle;
  e6.fn.extend({
    attr: function (l, _) {
      return eO(this, e6.attr, l, _, arguments.length > 1);
    },
    removeAttr: function (l) {
      return this.each(function () {
        e6.removeAttr(this, l);
      });
    },
  }),
    e6.extend({
      attr: function (l, _, C) {
        var N,
          X,
          ee = l.nodeType;
        if (3 !== ee && 8 !== ee && 2 !== ee) {
          if (void 0 === l.getAttribute) return e6.prop(l, _, C);
          if (
            ((1 === ee && e6.isXMLDoc(l)) ||
              (X =
                e6.attrHooks[_.toLowerCase()] ||
                (e6.expr.match.bool.test(_) ? e$ : void 0)),
            void 0 !== C)
          ) {
            if (null === C) {
              e6.removeAttr(l, _);
              return;
            }
            return X && "set" in X && void 0 !== (N = X.set(l, C, _))
              ? N
              : (l.setAttribute(_, C + ""), C);
          }
          if (
            (!X || !("get" in X) || null === (N = X.get(l, _))) &&
            null == (N = e6.find.attr(l, _))
          )
            return;
          return N;
        }
      },
      attrHooks: {
        type: {
          set: function (l, _) {
            var C;
            if (!ev.radioValue && "radio" === _ && eA(l, "input"))
              return (
                (C = l.value), l.setAttribute("type", _), C && (l.value = C), _
              );
          },
        },
      },
      removeAttr: function (l, _) {
        var C,
          N = 0,
          X = _ && _.match(eE);
        if (X && 1 === l.nodeType) for (; (C = X[N++]); ) l.removeAttribute(C);
      },
    }),
    (e$ = {
      set: function (l, _, C) {
        return !1 === _ ? e6.removeAttr(l, C) : l.setAttribute(C, C), C;
      },
    }),
    e6.each(e6.expr.match.bool.source.match(/\w+/g), function (l, _) {
      var C = tX[_] || e6.find.attr;
      tX[_] = function (l, _, N) {
        var X,
          ee,
          et = _.toLowerCase();
        return (
          N ||
            ((ee = tX[et]),
            (tX[et] = X),
            (X = null != C(l, _, N) ? et : null),
            (tX[et] = ee)),
          X
        );
      };
    });
  var tz = /^(?:input|select|textarea|button)$/i,
    tq = /^(?:a|area)$/i;
  function tU(l) {
    return (l.match(eE) || []).join(" ");
  }
  function tZ(l) {
    return (l.getAttribute && l.getAttribute("class")) || "";
  }
  function tK(l) {
    return Array.isArray(l) ? l : ("string" == typeof l && l.match(eE)) || [];
  }
  function tQ(l) {
    l.stopPropagation();
  }
  e6.fn.extend({
    prop: function (l, _) {
      return eO(this, e6.prop, l, _, arguments.length > 1);
    },
    removeProp: function (l) {
      return this.each(function () {
        delete this[e6.propFix[l] || l];
      });
    },
  }),
    e6.extend({
      prop: function (l, _, C) {
        var N,
          X,
          ee = l.nodeType;
        if (3 !== ee && 8 !== ee && 2 !== ee)
          return ((1 === ee && e6.isXMLDoc(l)) ||
            ((_ = e6.propFix[_] || _), (X = e6.propHooks[_])),
          void 0 !== C)
            ? X && "set" in X && void 0 !== (N = X.set(l, C, _))
              ? N
              : (l[_] = C)
            : X && "get" in X && null !== (N = X.get(l, _))
              ? N
              : (0, l[_]);
      },
      propHooks: {
        tabIndex: {
          get: function (l) {
            var _ = e6.find.attr(l, "tabindex");
            return _
              ? parseInt(_, 10)
              : tz.test(l.nodeName) || (tq.test(l.nodeName) && l.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ev.optSelected ||
      (e6.propHooks.selected = {
        get: function (l) {
          return (
            (l = l.parentNode) && l.parentNode && l.parentNode.selectedIndex,
            null
          );
        },
        set: function (l) {
          (l = l.parentNode) &&
            (l.selectedIndex, l.parentNode) &&
            l.parentNode.selectedIndex;
        },
      }),
    e6.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        e6.propFix[this.toLowerCase()] = this;
      }
    ),
    e6.fn.extend({
      addClass: function (l) {
        var _,
          N,
          X,
          ee,
          et,
          en,
          er = 0;
        if (C(l))
          return this.each(function (_) {
            e6(this).addClass(l.call(this, _, tZ(this)));
          });
        if ((_ = tK(l)).length) {
          for (; (N = this[er++]); )
            if (((en = tZ(N)), (X = 1 === N.nodeType && " " + tU(en) + " "))) {
              for (et = 0; (ee = _[et++]); )
                0 > X.indexOf(" " + ee + " ") && (X += ee + " ");
              en !== (en = tU(X)) && N.setAttribute("class", en);
            }
        }
        return this;
      },
      removeClass: function (l) {
        var _,
          N,
          X,
          ee,
          et,
          en,
          er = 0;
        if (C(l))
          return this.each(function (_) {
            e6(this).removeClass(l.call(this, _, tZ(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((_ = tK(l)).length) {
          for (; (N = this[er++]); )
            if (((en = tZ(N)), (X = 1 === N.nodeType && " " + tU(en) + " "))) {
              for (et = 0; (ee = _[et++]); )
                for (; X.indexOf(" " + ee + " ") > -1; )
                  X = X.replace(" " + ee + " ", " ");
              en !== (en = tU(X)) && N.setAttribute("class", en);
            }
        }
        return this;
      },
      toggleClass: function (l, _) {
        var N = typeof l,
          X = "string" == N || Array.isArray(l);
        return "boolean" == typeof _ && X
          ? _
            ? this.addClass(l)
            : this.removeClass(l)
          : C(l)
            ? this.each(function (C) {
                e6(this).toggleClass(l.call(this, C, tZ(this), _), _);
              })
            : this.each(function () {
                var _, C, ee, et;
                if (X)
                  for (C = 0, ee = e6(this), et = tK(l); (_ = et[C++]); )
                    ee.hasClass(_) ? ee.removeClass(_) : ee.addClass(_);
                else
                  (void 0 === l || "boolean" == N) &&
                    ((_ = tZ(this)) && ez.set(this, "__className__", _),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        (!_ && !1 !== l && ez.get(this, "__className__")) || ""
                      ));
              });
      },
      hasClass: function (l) {
        for (var _, C = 0, N = " " + l + " "; (_ = this[C++]); )
          if (1 === _.nodeType && (" " + tU(tZ(_)) + " ").indexOf(N) > -1)
            return !0;
        return !1;
      },
    });
  var t9 = /\r/g;
  e6.fn.extend({
    val: function (l) {
      var _,
        N,
        X,
        ee = this[0];
      if (arguments.length)
        return (
          (X = C(l)),
          this.each(function (C) {
            1 !== this.nodeType ||
              (null == (C = X ? l.call(this, C, e6(this).val()) : l)
                ? (C = "")
                : "number" == typeof C
                  ? (C += "")
                  : Array.isArray(C) &&
                    (C = e6.map(C, function (l) {
                      return null == l ? "" : l + "";
                    })),
              ((_ =
                e6.valHooks[this.type] ||
                e6.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in _ &&
                void 0 !== _.set(this, C, "value")) ||
                (this.value = C));
          })
        );
      if (ee)
        return (_ =
          e6.valHooks[ee.type] || e6.valHooks[ee.nodeName.toLowerCase()]) &&
          "get" in _ &&
          void 0 !== (N = _.get(ee, "value"))
          ? N
          : "string" == typeof (N = ee.value)
            ? N.replace(t9, "")
            : null == N
              ? ""
              : N;
    },
  }),
    e6.extend({
      valHooks: {
        option: {
          get: function (l) {
            return e6.find.attr(l, "value") ?? tU(e6.text(l));
          },
        },
        select: {
          get: function (l) {
            for (
              var _,
                C = l.options,
                N = l.selectedIndex,
                X = "select-one" === l.type,
                ee = X ? null : [],
                et = X ? N + 1 : C.length,
                en = N < 0 ? et : X ? N : 0;
              en < et;
              en++
            )
              if (
                ((_ = C[en]).selected || en === N) &&
                !_.disabled &&
                (!_.parentNode.disabled || !eA(_.parentNode, "optgroup"))
              ) {
                if (((_ = e6(_).val()), X)) return _;
                ee.push(_);
              }
            return ee;
          },
          set: function (l, _) {
            for (
              var C, N, X = l.options, ee = e6.makeArray(_), et = X.length;
              et--;

            )
              ((N = X[et]).selected =
                e6.inArray(e6.valHooks.option.get(N), ee) > -1) && (C = !0);
            return C || (l.selectedIndex = -1), ee;
          },
        },
      },
    }),
    e6.each(["radio", "checkbox"], function () {
      (e6.valHooks[this] = {
        set: function (l, _) {
          if (Array.isArray(_))
            return (l.checked = e6.inArray(e6(l).val(), _) > -1);
        },
      }),
        ev.checkOn ||
          (e6.valHooks[this].get = function (l) {
            return null === l.getAttribute("value") ? "on" : l.value;
          });
    }),
    (ev.focusin = "onfocusin" in l);
  var tY = /^(?:focusinfocus|focusoutblur)$/;
  e6.extend(e6.event, {
    trigger: function (_, X, ee, et) {
      var en,
        er,
        ei,
        eo,
        ea,
        es,
        el,
        eu = [ee || e_],
        ec = e3.call(_, "type") ? _.type : _,
        e$ = e3.call(_, "namespace") ? _.namespace.split(".") : [],
        ed = (el = er = ee = ee || e_);
      if (
        3 !== ee.nodeType &&
        8 !== ee.nodeType &&
        !tY.test(ec + e6.event.triggered) &&
        (ec.indexOf(".") > -1 &&
          ((ec = (e$ = ec.split(".")).shift()), e$.sort()),
        (eo = 0 > ec.indexOf(":") && "on" + ec),
        ((_ = _[e6.expando]
          ? _
          : new e6.Event(ec, "object" == typeof _ && _)).isTrigger = et
          ? 2
          : 3),
        (_.namespace = e$.join(".")),
        (_.rnamespace = _.namespace
          ? RegExp("(^|\\.)" + e$.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (_.result = void 0),
        (_.target ||= ee),
        (X = null == X ? [_] : e6.makeArray(X, [_])),
        (es = e6.event.special[ec] || {}),
        et || !es.trigger || !1 !== es.trigger.apply(ee, X))
      ) {
        if (!et && !es.noBubble && !N(ee)) {
          for (
            ei = es.delegateType || ec,
              tY.test(ei + ec) || (ed = ed.parentNode);
            ed;
            ed = ed.parentNode
          )
            eu.push(ed), (er = ed);
          er === (ee.ownerDocument || e_) &&
            eu.push(er.defaultView || er.parentWindow || l);
        }
        for (en = 0; (ed = eu[en++]) && !_.isPropagationStopped(); )
          (el = ed),
            (_.type = en > 1 ? ei : es.bindType || ec),
            (ea =
              (ez.get(ed, "events") || {})[_.type] && ez.get(ed, "handle")) &&
              ea.apply(ed, X),
            (ea = eo && ed[eo]) &&
              ea.apply &&
              eW(ed) &&
              ((_.result = ea.apply(ed, X)), !1 === _.result) &&
              _.preventDefault();
        return (
          (_.type = ec),
          !et &&
            !_.isDefaultPrevented() &&
            (!es._default || !1 === es._default.apply(eu.pop(), X)) &&
            eW(ee) &&
            eo &&
            C(ee[ec]) &&
            !N(ee) &&
            ((er = ee[eo]) && (ee[eo] = null),
            (e6.event.triggered = ec),
            _.isPropagationStopped() && el.addEventListener(ec, tQ),
            ee[ec](),
            _.isPropagationStopped() && el.removeEventListener(ec, tQ),
            (e6.event.triggered = void 0),
            er) &&
            (ee[eo] = er),
          _.result
        );
      }
    },
    simulate: function (l, _, C) {
      (C = e6.extend(new e6.Event(), C, { type: l, isSimulated: !0 })),
        e6.event.trigger(C, null, _);
    },
  }),
    e6.fn.extend({
      trigger: function (l, _) {
        return this.each(function () {
          e6.event.trigger(l, _, this);
        });
      },
      triggerHandler: function (l, _) {
        var C = this[0];
        if (C) return e6.event.trigger(l, _, C, !0);
      },
    }),
    ev.focusin ||
      e6.each({ focus: "focusin", blur: "focusout" }, function (l, _) {
        function C(l) {
          e6.event.simulate(_, l.target, e6.event.fix(l));
        }
        e6.event.special[_] = {
          setup: function () {
            var N = this.ownerDocument || this,
              X = ez.access(N, _);
            X || N.addEventListener(l, C, !0), ez.access(N, _, (X || 0) + 1);
          },
          teardown: function () {
            var N = this.ownerDocument || this,
              X = ez.access(N, _) - 1;
            X
              ? ez.access(N, _, X)
              : (N.removeEventListener(l, C, !0), ez.remove(N, _));
          },
        };
      });
  var tJ = l.location,
    ne = Date.now(),
    nt = /\?/;
  e6.parseXML = function (_) {
    var C;
    if (!_ || "string" != typeof _) return null;
    try {
      C = new l.DOMParser().parseFromString(_, "text/xml");
    } catch (N) {
      C = void 0;
    }
    return (
      (!C || C.getElementsByTagName("parsererror").length) &&
        e6.error("Invalid XML: " + _),
      C
    );
  };
  var nn = /\[\]$/,
    nr = /\r?\n/g,
    ni = /^(?:submit|button|image|reset|file)$/i,
    no = /^(?:input|select|textarea|keygen)/i;
  (e6.param = function (l, _) {
    function N(l, _) {
      (_ = C(_) ? _() : _),
        (ee[ee.length] =
          encodeURIComponent(l) + "=" + encodeURIComponent(null == _ ? "" : _));
    }
    var X,
      ee = [];
    if (Array.isArray(l) || (l.jquery && !e6.isPlainObject(l)))
      e6.each(l, function () {
        N(this.name, this.value);
      });
    else
      for (X in l)
        !(function l(_, C, N, X) {
          if (Array.isArray(C))
            e6.each(C, function (C, ee) {
              N || nn.test(_)
                ? X(_, ee)
                : l(
                    _ +
                      "[" +
                      ("object" == typeof ee && null != ee ? C : "") +
                      "]",
                    ee,
                    N,
                    X
                  );
            });
          else if (N || "object" !== e4(C)) X(_, C);
          else for (var ee in C) l(_ + "[" + ee + "]", C[ee], N, X);
        })(X, l[X], _, N);
    return ee.join("&");
  }),
    e6.fn.extend({
      serialize: function () {
        return e6.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var l = e6.prop(this, "elements");
          return l ? e6.makeArray(l) : this;
        })
          .filter(function () {
            var l = this.type;
            return (
              this.name &&
              !e6(this).is(":disabled") &&
              no.test(this.nodeName) &&
              !ni.test(l) &&
              (this.checked || !tr.test(l))
            );
          })
          .map(function (l, _) {
            var C = e6(this).val();
            return null == C
              ? null
              : Array.isArray(C)
                ? e6.map(C, function (l) {
                    return { name: _.name, value: l.replace(nr, "\r\n") };
                  })
                : { name: _.name, value: C.replace(nr, "\r\n") };
          })
          .get();
      },
    });
  var na = /%20/g,
    ns = /#.*$/,
    nl = /([?&])_=[^&]*/,
    nu = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    nc = /^(?:GET|HEAD)$/,
    n$ = /^\/\//,
    nd = {},
    n_ = {},
    nf = "*/*",
    np = e_.createElement("a");
  function nh(l) {
    return function (_, N) {
      "string" != typeof _ && ((N = _), (_ = "*"));
      var X,
        ee = 0,
        et = _.toLowerCase().match(eE) || [];
      if (C(N))
        for (; (X = et[ee++]); )
          "+" === X[0]
            ? (l[(X = X.slice(1) || "*")] = l[X] || []).unshift(N)
            : (l[X] = l[X] || []).push(N);
    };
  }
  function n0(l, _, C, N) {
    var X = {},
      ee = l === n_;
    function et(en) {
      var er;
      return (
        (X[en] = !0),
        e6.each(l[en] || [], function (l, en) {
          return "string" != typeof (en = en(_, C, N)) || ee || X[en]
            ? ee
              ? !(er = en)
              : void 0
            : (_.dataTypes.unshift(en), et(en), !1);
        }),
        er
      );
    }
    return et(_.dataTypes[0]) || (!X["*"] && et("*"));
  }
  function ng(l, _) {
    var C,
      N,
      X = e6.ajaxSettings.flatOptions || {};
    for (C in _) void 0 !== _[C] && ((X[C] ? l : (N = N || {}))[C] = _[C]);
    return N && e6.extend(!0, l, N), l;
  }
  (np.href = tJ.href),
    e6.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: tJ.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            tJ.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": nf,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": e6.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (l, _) {
        return _ ? ng(ng(l, e6.ajaxSettings), _) : ng(e6.ajaxSettings, l);
      },
      ajaxPrefilter: nh(nd),
      ajaxTransport: nh(n_),
      ajax: function (_, C) {
        "object" == typeof _ && ((C = _), (_ = void 0));
        var N,
          X,
          ee,
          et,
          en,
          er,
          ei,
          eo,
          ea = e6.ajaxSetup({}, (C = C || {})),
          es = ea.context || ea,
          el = ea.context && (es.nodeType || es.jquery) ? e6(es) : e6.event,
          eu = e6.Deferred(),
          ec = e6.Callbacks("once memory"),
          e$ = ea.statusCode || {},
          ed = {},
          ef = {},
          ep = "canceled",
          eh = {
            readyState: 0,
            getResponseHeader: function (l) {
              var _;
              if (er) {
                if (!et)
                  for (et = {}; (_ = nu.exec(ee)); )
                    et[_[1].toLowerCase()] = _[2];
                _ = et[l.toLowerCase()];
              }
              return null == _ ? null : _;
            },
            getAllResponseHeaders: function () {
              return er ? ee : null;
            },
            setRequestHeader: function (l, _) {
              return (
                null == er &&
                  (ed[(l = ef[l.toLowerCase()] = ef[l.toLowerCase()] || l)] =
                    _),
                this
              );
            },
            overrideMimeType: function (l) {
              return null == er && (ea.mimeType = l), this;
            },
            statusCode: function (l) {
              if (l) {
                if (er) eh.always(l[eh.status]);
                else for (var _ in l) e$[_] = [e$[_], l[_]];
              }
              return this;
            },
            abort: function (l) {
              return (l = l || ep), N && N.abort(l), e1(0, l), this;
            },
          };
        if (
          (eu.promise(eh),
          (ea.url = ((_ || ea.url || tJ.href) + "").replace(
            n$,
            tJ.protocol + "//"
          )),
          (ea.type = C.method || C.type || ea.method || ea.type),
          (ea.dataTypes = (ea.dataType || "*").toLowerCase().match(eE) || [""]),
          null == ea.crossDomain)
        ) {
          _ = e_.createElement("a");
          try {
            (_.href = ea.url),
              (_.href = _.href),
              (ea.crossDomain =
                np.protocol + "//" + np.host != _.protocol + "//" + _.host);
          } catch (e0) {
            ea.crossDomain = !0;
          }
        }
        if (
          (ea.data &&
            ea.processData &&
            "string" != typeof ea.data &&
            (ea.data = e6.param(ea.data, ea.traditional)),
          n0(nd, ea, C, eh),
          !er)
        ) {
          for (eo in ((ei = e6.event && ea.global) &&
            0 == e6.active++ &&
            e6.event.trigger("ajaxStart"),
          (ea.type = ea.type.toUpperCase()),
          (ea.hasContent = !nc.test(ea.type)),
          (X = ea.url.replace(ns, "")),
          ea.hasContent
            ? ea.data &&
              ea.processData &&
              0 ===
                (ea.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (ea.data = ea.data.replace(na, "+"))
            : ((_ = ea.url.slice(X.length)),
              ea.data &&
                (ea.processData || "string" == typeof ea.data) &&
                ((X += (nt.test(X) ? "&" : "?") + ea.data), delete ea.data),
              !1 === ea.cache &&
                ((X = X.replace(nl, "$1")),
                (_ = (nt.test(X) ? "&" : "?") + "_=" + ne++ + _)),
              (ea.url = X + _)),
          ea.ifModified &&
            (e6.lastModified[X] &&
              eh.setRequestHeader("If-Modified-Since", e6.lastModified[X]),
            e6.etag[X]) &&
            eh.setRequestHeader("If-None-Match", e6.etag[X]),
          ((ea.data && ea.hasContent && !1 !== ea.contentType) ||
            C.contentType) &&
            eh.setRequestHeader("Content-Type", ea.contentType),
          eh.setRequestHeader(
            "Accept",
            ea.dataTypes[0] && ea.accepts[ea.dataTypes[0]]
              ? ea.accepts[ea.dataTypes[0]] +
                  ("*" !== ea.dataTypes[0] ? ", " + nf + "; q=0.01" : "")
              : ea.accepts["*"]
          ),
          ea.headers))
            eh.setRequestHeader(eo, ea.headers[eo]);
          if (ea.beforeSend && (!1 === ea.beforeSend.call(es, eh, ea) || er))
            return eh.abort();
          if (
            ((ep = "abort"),
            ec.add(ea.complete),
            eh.done(ea.success),
            eh.fail(ea.error),
            (N = n0(n_, ea, C, eh)))
          ) {
            if (
              ((eh.readyState = 1), ei && el.trigger("ajaxSend", [eh, ea]), er)
            )
              return eh;
            ea.async &&
              ea.timeout > 0 &&
              (en = l.setTimeout(function () {
                eh.abort("timeout");
              }, ea.timeout));
            try {
              (er = !1), N.send(ed, e1);
            } catch (eg) {
              if (er) throw eg;
              e1(-1, eg);
            }
          } else e1(-1, "No Transport");
        }
        return eh;
        function e1(_, C, et, eo) {
          var ed,
            e_,
            ef,
            ep = C;
          er ||
            ((er = !0),
            en && l.clearTimeout(en),
            (N = void 0),
            (ee = eo || ""),
            (eh.readyState = _ > 0 ? 4 : 0),
            (eo = (_ >= 200 && _ < 300) || 304 === _),
            et &&
              (ef = (function (l, _, C) {
                for (
                  var N, X, ee, et, en = l.contents, er = l.dataTypes;
                  "*" === er[0];

                )
                  er.shift(),
                    void 0 === N &&
                      (N = l.mimeType || _.getResponseHeader("Content-Type"));
                if (N) {
                  for (X in en)
                    if (en[X] && en[X].test(N)) {
                      er.unshift(X);
                      break;
                    }
                }
                if (er[0] in C) ee = er[0];
                else {
                  for (X in C) {
                    if (!er[0] || l.converters[X + " " + er[0]]) {
                      ee = X;
                      break;
                    }
                    et = et || X;
                  }
                  ee = ee || et;
                }
                if (ee) return ee !== er[0] && er.unshift(ee), C[ee];
              })(ea, eh, et)),
            (ef = (function (l, _, C, N) {
              var X,
                ee,
                et,
                en,
                er,
                ei = {},
                eo = l.dataTypes.slice();
              if (eo[1])
                for (et in l.converters)
                  ei[et.toLowerCase()] = l.converters[et];
              for (ee = eo.shift(); ee; )
                if (
                  (l.responseFields[ee] && (C[l.responseFields[ee]] = _),
                  !er && N && l.dataFilter && (_ = l.dataFilter(_, l.dataType)),
                  (er = ee),
                  (ee = eo.shift()))
                ) {
                  if ("*" === ee) ee = er;
                  else if ("*" !== er && er !== ee) {
                    if (!(et = ei[er + " " + ee] || ei["* " + ee])) {
                      for (X in ei)
                        if (
                          (en = X.split(" "))[1] === ee &&
                          (et = ei[er + " " + en[0]] || ei["* " + en[0]])
                        ) {
                          !0 === et
                            ? (et = ei[X])
                            : !0 !== ei[X] && ((ee = en[0]), eo.unshift(en[1]));
                          break;
                        }
                    }
                    if (!0 !== et) {
                      if (et && l.throws) _ = et(_);
                      else
                        try {
                          _ = et(_);
                        } catch (ea) {
                          return {
                            state: "parsererror",
                            error: et
                              ? ea
                              : "No conversion from " + er + " to " + ee,
                          };
                        }
                    }
                  }
                }
              return { state: "success", data: _ };
            })(ea, ef, eh, eo)),
            eo
              ? (ea.ifModified &&
                  ((et = eh.getResponseHeader("Last-Modified")) &&
                    (e6.lastModified[X] = et),
                  (et = eh.getResponseHeader("etag"))) &&
                  (e6.etag[X] = et),
                204 === _ || "HEAD" === ea.type
                  ? (ep = "nocontent")
                  : 304 === _
                    ? (ep = "notmodified")
                    : ((ep = ef.state),
                      (ed = ef.data),
                      (eo = !(e_ = ef.error))))
              : ((e_ = ep), (_ || !ep) && ((ep = "error"), _ < 0 && (_ = 0))),
            (eh.status = _),
            (eh.statusText = (C || ep) + ""),
            eo
              ? eu.resolveWith(es, [ed, ep, eh])
              : eu.rejectWith(es, [eh, ep, e_]),
            eh.statusCode(e$),
            (e$ = void 0),
            ei &&
              el.trigger(eo ? "ajaxSuccess" : "ajaxError", [
                eh,
                ea,
                eo ? ed : e_,
              ]),
            ec.fireWith(es, [eh, ep]),
            !ei ||
              (el.trigger("ajaxComplete", [eh, ea]),
              --e6.active || e6.event.trigger("ajaxStop")));
        }
      },
      getJSON: function (l, _, C) {
        return e6.get(l, _, C, "json");
      },
      getScript: function (l, _) {
        return e6.get(l, void 0, _, "script");
      },
    }),
    e6.each(["get", "post"], function (l, _) {
      e6[_] = function (l, N, X, ee) {
        return (
          C(N) && ((ee = ee || X), (X = N), (N = void 0)),
          e6.ajax(
            e6.extend(
              { url: l, type: _, dataType: ee, data: N, success: X },
              e6.isPlainObject(l) && l
            )
          )
        );
      };
    }),
    (e6._evalUrl = function (l) {
      return e6.ajax({
        url: l,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    e6.fn.extend({
      wrapAll: function (l) {
        return (
          this[0] &&
            (C(l) && (l = l.call(this[0])),
            (l = e6(l, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && l.insertBefore(this[0]),
            l
              .map(function () {
                for (var l = this; l.firstElementChild; )
                  l = l.firstElementChild;
                return l;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (l) {
        return C(l)
          ? this.each(function (_) {
              e6(this).wrapInner(l.call(this, _));
            })
          : this.each(function () {
              var _ = e6(this),
                C = _.contents();
              C.length ? C.wrapAll(l) : _.append(l);
            });
      },
      wrap: function (l) {
        var _ = C(l);
        return this.each(function (C) {
          e6(this).wrapAll(_ ? l.call(this, C) : l);
        });
      },
      unwrap: function (l) {
        return (
          this.parent(l)
            .not("body")
            .each(function () {
              e6(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (e6.expr.pseudos.hidden = function (l) {
      return !e6.expr.pseudos.visible(l);
    }),
    (e6.expr.pseudos.visible = function (l) {
      return !!l.offsetWidth || !!l.offsetHeight || !!l.getClientRects().length;
    }),
    (e6.ajaxSettings.xhr = function () {
      try {
        return new l.XMLHttpRequest();
      } catch (_) {}
    });
  var n1 = { 0: 200, 1223: 204 },
    n2 = e6.ajaxSettings.xhr();
  (ev.cors = !!n2 && "withCredentials" in n2),
    (ev.ajax = n2 = !!n2),
    e6.ajaxTransport(function (_) {
      var C, N;
      if (ev.cors || (n2 && !_.crossDomain))
        return {
          send: function (X, ee) {
            var et,
              en = _.xhr();
            if (
              (en.open(_.type, _.url, _.async, _.username, _.password),
              _.xhrFields)
            )
              for (et in _.xhrFields) en[et] = _.xhrFields[et];
            for (et in (_.mimeType &&
              en.overrideMimeType &&
              en.overrideMimeType(_.mimeType),
            _.crossDomain ||
              X["X-Requested-With"] ||
              (X["X-Requested-With"] = "XMLHttpRequest"),
            X))
              en.setRequestHeader(et, X[et]);
            (C = function (l) {
              return function () {
                C &&
                  ((C =
                    N =
                    en.onload =
                    en.onerror =
                    en.onabort =
                    en.ontimeout =
                    en.onreadystatechange =
                      null),
                  "abort" === l
                    ? en.abort()
                    : "error" === l
                      ? "number" != typeof en.status
                        ? ee(0, "error")
                        : ee(en.status, en.statusText)
                      : ee(
                          n1[en.status] || en.status,
                          en.statusText,
                          "text" !== (en.responseType || "text") ||
                            "string" != typeof en.responseText
                            ? { binary: en.response }
                            : { text: en.responseText },
                          en.getAllResponseHeaders()
                        ));
              };
            }),
              (en.onload = C()),
              (N = en.onerror = en.ontimeout = C("error")),
              void 0 !== en.onabort
                ? (en.onabort = N)
                : (en.onreadystatechange = function () {
                    4 === en.readyState &&
                      l.setTimeout(function () {
                        C && N();
                      });
                  }),
              (C = C("abort"));
            try {
              en.send((_.hasContent && _.data) || null);
            } catch (er) {
              if (C) throw er;
            }
          },
          abort: function () {
            C && C();
          },
        };
    }),
    e6.ajaxPrefilter(function (l) {
      l.crossDomain && (l.contents.script = !1);
    }),
    e6.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (l) {
          return e6.globalEval(l), l;
        },
      },
    }),
    e6.ajaxPrefilter("script", function (l) {
      void 0 === l.cache && (l.cache = !1), l.crossDomain && (l.type = "GET");
    }),
    e6.ajaxTransport("script", function (l) {
      var _, C;
      if (l.crossDomain)
        return {
          send: function (N, X) {
            (_ = e6("<script>")
              .prop({ charset: l.scriptCharset, src: l.url })
              .on(
                "load error",
                (C = function (l) {
                  _.remove(),
                    (C = null),
                    l && X("error" === l.type ? 404 : 200, l.type);
                })
              )),
              e_.head.appendChild(_[0]);
          },
          abort: function () {
            C && C();
          },
        };
    });
  var n3 = [],
    nb = /(=)\?(?=&|$)|\?\?/;
  e6.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var l = n3.pop() || e6.expando + "_" + ne++;
      return (this[l] = !0), l;
    },
  }),
    e6.ajaxPrefilter("json jsonp", function (_, N, X) {
      var ee,
        et,
        en,
        er =
          !1 !== _.jsonp &&
          (nb.test(_.url)
            ? "url"
            : "string" == typeof _.data &&
              0 ===
                (_.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              nb.test(_.data) &&
              "data");
      if (er || "jsonp" === _.dataTypes[0])
        return (
          (ee = _.jsonpCallback =
            C(_.jsonpCallback) ? _.jsonpCallback() : _.jsonpCallback),
          er
            ? (_[er] = _[er].replace(nb, "$1" + ee))
            : !1 !== _.jsonp &&
              (_.url += (nt.test(_.url) ? "&" : "?") + _.jsonp + "=" + ee),
          (_.converters["script json"] = function () {
            return en || e6.error(ee + " was not called"), en[0];
          }),
          (_.dataTypes[0] = "json"),
          (et = l[ee]),
          (l[ee] = function () {
            en = arguments;
          }),
          X.always(function () {
            void 0 === et ? e6(l).removeProp(ee) : (l[ee] = et),
              _[ee] && ((_.jsonpCallback = N.jsonpCallback), n3.push(ee)),
              en && C(et) && et(en[0]),
              (en = et = void 0);
          }),
          "script"
        );
    }),
    ((ed = e_.implementation.createHTMLDocument("").body).innerHTML =
      "<form></form><form></form>"),
    (ev.createHTMLDocument = 2 === ed.childNodes.length),
    (e6.parseHTML = function (l, _, C) {
      var N;
      return "string" != typeof l
        ? []
        : ("boolean" == typeof _ && ((C = _), (_ = !1)),
            _ ||
              (ev.createHTMLDocument
                ? (((N = (_ =
                    e_.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = e_.location.href),
                  _.head.appendChild(N))
                : (_ = e_)),
            (N = !C && []),
            (C = e8.exec(l)))
          ? [_.createElement(C[1])]
          : ((C = tc([l], _, N)),
            N && N.length && e6(N).remove(),
            e6.merge([], C.childNodes));
    }),
    (e6.fn.load = function (l, _, N) {
      var X,
        ee,
        et,
        en = this,
        er = l.indexOf(" ");
      return (
        er > -1 && ((X = tU(l.slice(er))), (l = l.slice(0, er))),
        C(_)
          ? ((N = _), (_ = void 0))
          : _ && "object" == typeof _ && (ee = "POST"),
        en.length > 0 &&
          e6
            .ajax({ url: l, type: ee || "GET", dataType: "html", data: _ })
            .done(function (l) {
              (et = arguments),
                en.html(X ? e6("<div>").append(e6.parseHTML(l)).find(X) : l);
            })
            .always(
              N &&
                function (l, _) {
                  en.each(function () {
                    N.apply(this, et || [l.responseText, _, l]);
                  });
                }
            ),
        this
      );
    }),
    e6.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (l, _) {
        e6.fn[_] = function (l) {
          return this.on(_, l);
        };
      }
    ),
    (e6.expr.pseudos.animated = function (l) {
      return e6.grep(e6.timers, function (_) {
        return l === _.elem;
      }).length;
    }),
    (e6.offset = {
      setOffset: function (l, _, N) {
        var X,
          ee,
          et,
          en,
          er = e6.css(l, "position"),
          ei = e6(l),
          eo = {};
        "static" === er && (l.style.position = "relative"),
          (et = ei.offset()),
          (X = e6.css(l, "top")),
          (en = e6.css(l, "left")),
          (er =
            ("absolute" === er || "fixed" === er) &&
            (X + en).indexOf("auto") > -1
              ? ((ee = (er = ei.position()).top), er.left)
              : ((ee = parseFloat(X) || 0), parseFloat(en) || 0)),
          null != (_ = C(_) ? _.call(l, N, e6.extend({}, et)) : _).top &&
            (eo.top = _.top - et.top + ee),
          null != _.left && (eo.left = _.left - et.left + er),
          "using" in _ ? _.using.call(l, eo) : ei.css(eo);
      },
    }),
    e6.fn.extend({
      offset: function (l) {
        var _, C;
        return arguments.length
          ? void 0 === l
            ? this
            : this.each(function (_) {
                e6.offset.setOffset(this, l, _);
              })
          : (C = this[0])
            ? C.getClientRects().length
              ? ((_ = C.getBoundingClientRect()),
                (C = C.ownerDocument.defaultView),
                { top: _.top + C.pageYOffset, left: _.left + C.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
      },
      position: function () {
        if (this[0]) {
          var l,
            _,
            C,
            N = this[0],
            X = { top: 0, left: 0 };
          if ("fixed" === e6.css(N, "position")) _ = N.getBoundingClientRect();
          else {
            for (
              _ = this.offset(),
                C = N.ownerDocument,
                l = N.offsetParent || C.documentElement;
              l &&
              (l === C.body || l === C.documentElement) &&
              "static" === e6.css(l, "position");

            )
              l = l.parentNode;
            l &&
              l !== N &&
              1 === l.nodeType &&
              (((X = e6(l).offset()).top += e6.css(l, "borderTopWidth", !0)),
              (X.left += e6.css(l, "borderLeftWidth", !0)));
          }
          return {
            top: _.top - X.top - e6.css(N, "marginTop", !0),
            left: _.left - X.left - e6.css(N, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var l = this.offsetParent;
            l && "static" === e6.css(l, "position");

          )
            l = l.offsetParent;
          return l || t$;
        });
      },
    }),
    e6.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (l, _) {
        var C = "pageYOffset" === _;
        e6.fn[l] = function (X) {
          return eO(
            this,
            function (l, X, ee) {
              var et;
              if (
                (N(l) ? (et = l) : 9 === l.nodeType && (et = l.defaultView),
                void 0 === ee)
              )
                return et ? et[_] : l[X];
              et
                ? et.scrollTo(C ? et.pageXOffset : ee, C ? ee : et.pageYOffset)
                : (l[X] = ee);
            },
            l,
            X,
            arguments.length
          );
        };
      }
    ),
    e6.each(["top", "left"], function (l, _) {
      e6.cssHooks[_] = t8(ev.pixelPosition, function (l, C) {
        if (C)
          return ((C = tA(l, _)), tS.test(C)) ? e6(l).position()[_] + "px" : C;
      });
    }),
    e6.each({ Height: "height", Width: "width" }, function (l, _) {
      e6.each(
        { padding: "inner" + l, content: _, "": "outer" + l },
        function (C, X) {
          e6.fn[X] = function (ee, et) {
            var en = arguments.length && (C || "boolean" != typeof ee),
              er = C || (!0 === ee || !0 === et ? "margin" : "border");
            return eO(
              this,
              function (_, C, ee) {
                var et;
                return N(_)
                  ? 0 === X.indexOf("outer")
                    ? _["inner" + l]
                    : _.document.documentElement["client" + l]
                  : 9 === _.nodeType
                    ? ((et = _.documentElement),
                      Math.max(
                        _.body["scroll" + l],
                        et["scroll" + l],
                        _.body["offset" + l],
                        et["offset" + l],
                        et["client" + l]
                      ))
                    : void 0 === ee
                      ? e6.css(_, C, er)
                      : e6.style(_, C, ee, er);
              },
              _,
              en ? ee : void 0,
              en
            );
          };
        }
      );
    }),
    e6.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (l, _) {
        e6.fn[_] = function (l, C) {
          return arguments.length > 0
            ? this.on(_, null, l, C)
            : this.trigger(_);
        };
      }
    ),
    e6.fn.extend({
      hover: function (l, _) {
        return this.mouseenter(l).mouseleave(_ || l);
      },
    }),
    e6.fn.extend({
      bind: function (l, _, C) {
        return this.on(l, null, _, C);
      },
      unbind: function (l, _) {
        return this.off(l, null, _);
      },
      delegate: function (l, _, C, N) {
        return this.on(_, l, C, N);
      },
      undelegate: function (l, _, C) {
        return 1 === arguments.length
          ? this.off(l, "**")
          : this.off(_, l || "**", C);
      },
    }),
    (e6.proxy = function (l, _) {
      var N, X;
      if (("string" == typeof _ && ((X = l[_]), (_ = l), (l = X)), C(l)))
        return (
          (N = ep.call(arguments, 2)),
          ((X = function () {
            return l.apply(_ || this, N.concat(ep.call(arguments)));
          }).guid = l.guid =
            l.guid || e6.guid++),
          X
        );
    }),
    (e6.holdReady = function (l) {
      l ? e6.readyWait++ : e6.ready(!0);
    }),
    (e6.isArray = Array.isArray),
    (e6.parseJSON = JSON.parse),
    (e6.nodeName = eA),
    (e6.isFunction = C),
    (e6.isWindow = N),
    (e6.camelCase = eV),
    (e6.type = e4),
    (e6.now = Date.now),
    (e6.isNumeric = function (l) {
      var _ = e6.type(l);
      return ("number" === _ || "string" === _) && !isNaN(l - parseFloat(l));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return e6;
      });
  var n5 = l.jQuery,
    nv = l.$;
  return (
    (e6.noConflict = function (_) {
      return (
        l.$ === e6 && (l.$ = nv), _ && l.jQuery === e6 && (l.jQuery = n5), e6
      );
    }),
    _ || (l.jQuery = l.$ = e6),
    e6
  );
}),
  (() => {
    var l,
      _,
      C,
      N,
      X = {
        696(l, _, C) {
          "use strict";
          C.d(_, { Z: () => N });
          let N = {
            advertising: {
              admessage: "This ad will end in xx",
              cuetext: "Advertisement",
              displayHeading: "Advertisement",
              loadingAd: "Loading ad",
              podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
              skipmessage: "Skip ad in xx",
              skiptext: "Skip",
            },
            airplay: "AirPlay",
            audioTracks: "Audio Tracks",
            auto: "Auto",
            buffer: "Loading",
            cast: "Chromecast",
            cc: "Closed Captions",
            close: "Close",
            errors: {
              badConnection:
                "This video cannot be played because of a problem with your internet connection.",
              cantLoadPlayer: "Sorry, the video player failed to load.",
              cantPlayInBrowser: "The video cannot be played in this browser.",
              cantPlayVideo: "This video file cannot be played.",
              errorCode: "Error Code",
              liveStreamDown: "The live stream is either down or has ended.",
              protectedContent:
                "There was a problem providing access to protected content.",
              technicalError:
                "This video cannot be played because of a technical error.",
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
              heading: "More Videos",
            },
            replay: "Replay",
            rewind: "Rewind 10 Seconds",
            settings: "Settings",
            sharing: {
              copied: "Copied",
              email: "Email",
              embed: "Embed",
              heading: "Share",
              link: "Link",
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
              shortcutsToggle: "Shortcuts Open/Close",
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
              dropShadow: "Drop Shadow",
            },
            disabled: "Disabled",
            enabled: "Enabled",
            reset: "Reset",
          };
        },
        9128(l, _, C) {
          "use strict";
          function N(l, _, C) {
            function N() {
              for (; X.length > 0; ) {
                var { command: _, args: C } = X.shift();
                (ee[_] || l[_]).apply(l, C);
              }
            }
            let X = [],
              ee = {};
            _.forEach((_) => {
              let et = l[_];
              (ee[_] = et),
                (l[_] = function (...l) {
                  C()
                    ? X.push({ command: _, args: l })
                    : (N(), et && et.apply(this, l));
                });
            }),
              Object.defineProperty(this, "queue", {
                enumerable: !0,
                get: () => X,
              }),
              (this.flush = N),
              (this.empty = function () {
                X.length = 0;
              }),
              (this.off = function () {
                _.forEach((_) => {
                  var C = ee[_];
                  C && ((l[_] = C), delete ee[_]);
                });
              }),
              (this.destroy = function () {
                this.off(), this.empty();
              });
          }
          C.d(_, { Z: () => N });
        },
        4742(l, _, C) {
          "use strict";
          C.d(_, { Z: () => N });
          let N = { debug: !1 };
        },
        5191(l, _, C) {
          "use strict";
          C.d(_, { R: () => X, a: () => N });
          let N = function (l) {
              return (l = l.slice && "px" === l.slice(-2) ? l.slice(0, -2) : l);
            },
            X = function (l, _) {
              var C;
              return -1 !== _.toString().indexOf("%") &&
                "string" == typeof l &&
                l
                ? /^\d*\.?\d+%$/.test(l)
                  ? l
                  : -1 === (_ = l.indexOf(":")) ||
                      ((C = parseFloat(l.substr(0, _))),
                      (l = parseFloat(l.substr(_ + 1))),
                      C <= 0) ||
                      l <= 0
                    ? 0
                    : (l / C) * 100 + "%"
                : 0;
            };
        },
        5083(l, _, C) {
          "use strict";
          C.d(_, { G0: () => ea, ZP: () => es, ke: () => eo });
          var N = C(5191),
            X = C(1569),
            ee = C(9888),
            et = C(6042),
            en = C(8348),
            er = C(696),
            ei = C(8518);
          let eo = {
              autoPause: { viewability: !1, pauseAds: !1 },
              autostart: !1,
              allowFullscreen: !0,
              bandwidthEstimate: null,
              bitrateSelection: null,
              castAvailable: !1,
              controls: !0,
              cues: [],
              defaultPlaybackRate: 1,
              displaydescription: !0,
              displaytitle: !0,
              displayPlaybackLabel: !1,
              enableAdLoadingUI: !0,
              enableShortcuts: !0,
              floating: { mode: "never" },
              height: 360,
              intl: {},
              item: 0,
              language: "en",
              liveTimeout: null,
              localization: er.Z,
              mute: !1,
              nextUpDisplay: !0,
              playbackRateControls: !1,
              playbackRates: [0.5, 1, 1.25, 1.5, 2],
              renderCaptionsNatively: !1,
              repeat: !1,
              showUIWhen: "onReady",
              stretching: "uniform",
              volume: 90,
              width: 640,
            },
            ea = function (l) {
              return l < 5 ? 5 : l;
            },
            es = function (l, _) {
              var es,
                el,
                eu = {};
              _ &&
                (function (l) {
                  if (null == l)
                    throw TypeError(
                      "Cannot convert undefined or null to object"
                    );
                  return Object.prototype.hasOwnProperty.call(
                    Object(l),
                    "mute"
                  );
                })(_) &&
                ("boolean" == typeof _.mute && (eu.mute = _.mute),
                delete _.mute);
              var eu = Object.assign(
                {},
                eu,
                null == (eu = window) || null == (eu = eu.jwplayer)
                  ? void 0
                  : eu.defaults,
                _,
                l
              );
              Object.keys((el = eu)).forEach((l) => {
                "id" !== l && (el[l] = (0, ee.serialize)(el[l]));
              });
              var _ = eu.forceLocalizationDefaults ? eo.language : (0, ei.G3)(),
                l = (0, ei.tK)(eu.intl);
              eu.localization = (0, ei.Mh)(er.Z, (0, ei.Pm)(eu, l, _));
              var ec = Object.assign({}, eo, eu);
              "." === ec.base &&
                (ec.base = (0, X.getScriptPath)("jwplayer.js")),
                (ec.base = (ec.base || (0, X.loadFrom)()).replace(/\/?$/, "/")),
                (C.p = ec.base),
                (ec.width = (0, N.a)(ec.width)),
                (ec.height = (0, N.a)(ec.height)),
                (ec.aspectratio = (0, N.R)(ec.aspectratio, ec.width)),
                "string" == typeof ec.volume &&
                  (ec.volume = parseFloat(ec.volume)),
                (ec.volume = (0, et.qh)(ec.volume)
                  ? Math.min(Math.max(0, ec.volume), 100)
                  : eo.volume),
                (ec.mute = Boolean(ec.mute)),
                (ec.language = _),
                (ec.intl = l);
              var _ = ec.playlistIndex;
              _ && (ec.item = _), (0, et.hj)(ec.item) || (ec.item = 0);
              var l = eu.autoPause;
              l &&
                (ec.autoPause.viewability =
                  !("viewability" in l) || Boolean(l.viewability));
              var _ = ec.playbackRateControls;
              if (_) {
                let e$ = ec.playbackRates;
                0 >
                  (e$ = (e$ = Array.isArray(_) ? _ : e$)
                    .filter((l) => (0, et.hj)(l) && l >= 0.25 && l <= 4)
                    .map((l) => Math.round(100 * l) / 100)).indexOf(1) &&
                  e$.push(1),
                  e$.sort(),
                  (ec.playbackRateControls = !0),
                  (ec.playbackRates = e$);
              }
              if (
                ((!ec.playbackRateControls ||
                  0 > ec.playbackRates.indexOf(ec.defaultPlaybackRate)) &&
                  (ec.defaultPlaybackRate = 1),
                (ec.playbackRate = ec.defaultPlaybackRate),
                ec.aspectratio || delete ec.aspectratio,
                (eu = ec.playlist))
              )
                Array.isArray(eu.playlist) &&
                  ((ec.feedData = eu), (ec.playlist = eu.playlist));
              else {
                let ed = (0, et.ei)(ec, [
                  "title",
                  "description",
                  "type",
                  "mediaid",
                  "image",
                  "images",
                  "file",
                  "sources",
                  "tracks",
                  "preload",
                  "duration",
                  "chapters",
                ]);
                ec.playlist = [ed];
              }
              (ec.qualityLabels = ec.qualityLabels || ec.hlslabels),
                delete ec.duration;
              let e_ = ec.liveTimeout;
              return (
                null !== e_ &&
                  ((0, et.qh)(e_)
                    ? 0 !== e_ && (e_ = Math.max(30, e_))
                    : (e_ = null),
                  (ec.liveTimeout = e_)),
                (l = parseFloat(ec.bandwidthEstimate)),
                (_ = parseFloat(ec.bitrateSelection)),
                (ec.bandwidthEstimate = (0, et.qh)(l)
                  ? l
                  : ((es = parseFloat((es = ec.defaultBandwidthEstimate))),
                      (0, et.qh)(es))
                    ? Math.max(es, 1)
                    : eo.bandwidthEstimate),
                (ec.bitrateSelection = (0, et.qh)(_) ? _ : eo.bitrateSelection),
                (ec.liveSyncDuration = ea(ec.liveSyncDuration)),
                (ec.backgroundLoading = (
                  (0, et.jn)(ec.backgroundLoading) ? ec : en.Features
                ).backgroundLoading),
                (ec.enableAdLoadingUI =
                  !en.Features.enableAdLoadingUI ||
                  Boolean(ec.enableAdLoadingUI)),
                ec
              );
            };
        },
        2894(l, _, C) {
          "use strict";
          C.d(_, { Ep: () => ee, Jt: () => et, Tr: () => X, Zq: () => en });
          var N = C(4446);
          let X = {},
            ee = function (l, _) {
              return () => {
                throw new N.rG(N.pJ, l, _);
              };
            },
            et = function (l, _) {
              return () => {
                throw new N.rG(null, l, _);
              };
            },
            en = function () {
              return C.e(681)
                .then(
                  function (l) {
                    return C(7047).default;
                  }.bind(null, C)
                )
                .catch(ee(N.fU + 101));
            };
        },
        623(l, _, C) {
          "use strict";
          C.d(_, { ZP: () => ej, c2: () => eO });
          var N = C(9128),
            X = C(2445),
            ee = C(2894),
            et = C(393),
            en = C(8320),
            er = C(2963),
            ei = C(670),
            eo = C(4601),
            ea = C(4446),
            es = C(8348);
          let el = null;
          function eu() {
            var l = window.IntersectionObserverEntry;
            return (
              !l ||
              !("IntersectionObserver" in window) ||
              !("intersectionRatio" in l.prototype)
            );
          }
          function ec() {
            return (
              eu()
                ? C.e(943)
                    .then(
                      function (l) {
                        return C(6337);
                      }.bind(null, C)
                    )
                    .catch((0, ee.Ep)(ea.fU + 120))
                : Promise.resolve()
            ).then(ee.Zq);
          }
          let e$ = function (l) {
            var _,
              N = l.get("controls"),
              X = eu(),
              l = (function (l) {
                let _ = l.get("playlist");
                if (Array.isArray(_) && _.length) {
                  var C = (0, en.bx)(l.get("item"), _.length),
                    N = (0, en.T5)((0, et.Z)(_[C]), l);
                  for (let X = 0; X < N.length; X++) {
                    var ee = N[X],
                      ei = l.getProviders();
                    for (let eo = 0; eo < er.B.length; eo++) {
                      let ea = er.B[eo];
                      if (ei.providerSupports(ea, ee))
                        return "html5" === ea.name;
                    }
                  }
                }
                return !1;
              })(l);
            if (es.OS.tizen) return ec();
            if (N && X && l)
              return (
                (_ = C.e(605)
                  .then(
                    function (l) {
                      C(6337);
                      var _ = C(7047).default;
                      return (
                        (eo.v.controls = C(5827).default),
                        (0, ei.Z)(C(9181).default),
                        _
                      );
                    }.bind(null, C)
                  )
                  .catch((0, ee.Ep)(ea.fU + 105))),
                (ee.Tr.html5 = _)
              );
            if (N && l)
              return (
                (_ = C.e(207)
                  .then(
                    function (l) {
                      var _ = C(7047).default;
                      return (
                        (eo.v.controls = C(5827).default),
                        (0, ei.Z)(C(9181).default),
                        _
                      );
                    }.bind(null, C)
                  )
                  .catch((0, ee.Ep)(ea.fU + 104))),
                (ee.Tr.html5 = _)
              );
            if (N && X)
              return C.e(493)
                .then(
                  function (l) {
                    C(6337);
                    var _ = C(7047).default;
                    return (eo.v.controls = C(5827).default), _;
                  }.bind(null, C)
                )
                .catch((0, ee.Ep)(ea.fU + 103));
            if (N)
              return C.e(581)
                .then(
                  function (l) {
                    var _ = C(7047).default;
                    return (eo.v.controls = C(5827).default), _;
                  }.bind(null, C)
                )
                .catch((0, ee.Ep)(ea.fU + 102));
            else return ec();
          };
          var ed = C(1643),
            e_ = C(7263),
            ef = C(676),
            ep = C(8518),
            eh = C(8675),
            e0 = C(8381);
          function eg(l, _, C) {
            ((l = l.attributes).playlist = (0, en.ZP)(_)), (l.feedData = C);
          }
          function e1(l) {
            let _ = l.get("playlist");
            return new Promise((C, N) => {
              if ("string" != typeof _) {
                let X = l.get("feedData") || {};
                return eg(l, _, X), C();
              }
              var ee = new e_.Z();
              ee.on(ed.Ow, function (_) {
                var N = _.playlist;
                delete _.playlist, eg(l, N, _), C();
              }),
                ee.on(ed.pn, (_) => {
                  eg(l, [], {}), N((0, ea.l9)(_, ea.xk));
                }),
                ee.load(_);
            });
          }
          function e2(l) {
            return l.attributes._destroyed;
          }
          var e3 = C(1918),
            eb = C(6599),
            e5 = C(7010);
          function ev(l) {
            let _;
            (this.start = function (C) {
              let N = eT(l, C),
                X = Promise.all([
                  ((C = l), (el = el || e$(C))),
                  e7(l),
                  N,
                  e4(l),
                  e6(l),
                  ey(l),
                  eS(l),
                ]);
              return (
                (C = new Promise((l, C) => {
                  _ = setTimeout(() => {
                    C(new ea.rG(ea.pJ, ea.T6));
                  }, 6e4);
                  var N = () => {
                    clearTimeout(_), setTimeout(l, 6e4);
                  };
                  X.then(N).catch(N);
                })),
                Promise.race([X, C])
                  .catch((l) => {
                    var _ = () => {
                      throw l;
                    };
                    return N.then(_).catch(_);
                  })
                  .then((l) => {
                    var _;
                    return l && l.length
                      ? ((_ = l
                          .reduce((l, _) => l.concat(_), [])
                          .filter((l) => (null == l ? void 0 : l.code))),
                        { core: l[0], warnings: _ })
                      : { core: null, warnings: [] };
                  })
              );
            }),
              (this.destroy = function () {
                clearTimeout(_), l.set("_destroyed", !0), (l = null);
              });
          }
          let ey = function (l) {
              var _ = l.get("skin") ? l.get("skin").url : void 0;
              return "string" != typeof _ ||
                (function (l) {
                  var _ = document.styleSheets;
                  for (let C = 0, N = _.length; C < N; C++)
                    if (_[C].href === l) return 1;
                })(_)
                ? Promise.resolve()
                : new ef.ZP(_, !0).load().catch((l) => l);
            },
            em = (l) =>
              Boolean(
                null == (l = l.get("advertising")) ? void 0 : l.outstream
              ),
            e4 = (l) =>
              em(l)
                ? Promise.resolve()
                : e1(l)
                    .then(() => {
                      if (l.get("drm") || (0, e3.w0)(l.get("playlist")))
                        return (0, e3.lD)(l.get("edition"));
                    })
                    .then(() => {
                      var _;
                      return e1((_ = l)).then(() => {
                        if (!e2(_)) {
                          var l = (0, en.s7)(_.get("playlist"), _);
                          _.attributes.playlist = l;
                          try {
                            (0, en._)(l);
                          } catch (C) {
                            throw ((C.code += ea.xk), C);
                          }
                          var N = _.getProviders(),
                            X = (0, en.bx)(_.get("item"), l.length),
                            { provider: X, name: et } = N.choose(
                              l[X].sources[0]
                            );
                          return "function" == typeof X
                            ? X
                            : ee.Tr.html5 && "html5" === et
                              ? ee.Tr.html5
                              : N.load(et).catch((l) => {
                                  throw (0, ea.l9)(l, ea.y4);
                                });
                        }
                      });
                    }),
            e6 = (l, _) => {
              var C = [
                ((l) => {
                  let _ = l.attributes,
                    C = _.error;
                  if (C && C.code === eb.u5) {
                    let N = _.pid,
                      X = _.ph,
                      ee = new eb.ZP(_.key);
                    if (X > 0 && X < 4 && N && ee.duration() > -7776e6)
                      return new ef.ZP(
                        "//content.jwplatform.com/libraries/" + N + ".js"
                      )
                        .load()
                        .then(() => {
                          var l = window.jwplayer.defaults.key,
                            C = new eb.ZP(l);
                          C.error() ||
                            C.token() !== ee.token() ||
                            ((_.key = l),
                            (_.edition = C.edition()),
                            (_.error = C.error()));
                        })
                        .catch(() => {});
                  }
                  return Promise.resolve();
                })(l),
              ];
              return em(l) || C.push(Promise.resolve()), Promise.all(C);
            },
            eT = (l, _) => {
              var N,
                X,
                et,
                en = () => (0, eh.ZP)(l, _);
              return (0, e5.Z)()
                ? ((X = N = l),
                  (et = _),
                  C.e(168)
                    .then(
                      ((l) => new (C(5545).default)(et).setup(X)).bind(null, C)
                    )
                    .catch((0, ee.Ep)(ea.fU + 130))
                    .then(() => ey(N))
                    .then(en)
                    .catch(en))
                : en();
            },
            eS = function (l) {
              let _ = l.attributes,
                { language: C, base: N, setupConfig: X, intl: ee } = _,
                et = (0, ep.Pm)(X, ee, C);
              return !(0, ep.q2)(C) || (0, ep.dl)(et)
                ? Promise.resolve()
                : new Promise((X) =>
                    (0, ep.Dq)(N, C)
                      .then(({ response: C }) => {
                        if (!e2(l)) {
                          if (!C) throw new ea.rG(null, ea.wH);
                          (_.localization = (0, ep.Mh)(C, et)), X();
                        }
                      })
                      .catch((l) => {
                        X(l.code === ea.wH ? l : (0, ea.l9)(l, ea.A6));
                      })
                  );
            },
            e7 = (l) =>
              new Promise((_) => {
                var C;
                return l.attributes.liveSyncDuration > 45
                  ? _((0, ea.l9)(Error(), ea.wM))
                  : null !=
                        (C =
                          Array.isArray(l.attributes.playlist) &&
                          l.attributes.playlist.map((l) => l.chapters)) &&
                      C.length
                    ? (0, e0.T2)(C, _)
                    : _();
              });
          var ew = C(2303),
            eP = C(7411),
            eA = C(9888),
            e8 = C(4742);
          let eC = { removeItem(l) {} };
          try {
            eC = window.localStorage || eC;
          } catch (eM) {}
          let ex = class {
            constructor(l, _) {
              (this.namespace = l), (this.items = _);
            }
            getAllItems() {
              return this.items.reduce((l, _) => {
                var C = eC[this.namespace + "." + _];
                return (
                  C &&
                    (l[_] =
                      "captions" !== _ ? (0, eA.serialize)(C) : JSON.parse(C)),
                  l
                );
              }, {});
            }
            track(l) {
              this.items.forEach((_) => {
                l.on("change:" + _, (l, C) => {
                  try {
                    "captions" === _ && (C = JSON.stringify(C)),
                      (eC[this.namespace + "." + _] = C);
                  } catch (N) {
                    e8.Z.debug && console.error(N);
                  }
                });
              });
            }
            clear() {
              this.items.forEach((l) => {
                eC.removeItem(this.namespace + "." + l);
              });
            }
          };
          var ek = C(7753),
            eB = C(9918),
            _ = C(328),
            eE = C(4225),
            eG = C(7683),
            eH = C(4609),
            eD = C(5882);
          function eI(l, _) {
            _ &&
              _.code &&
              (_.sourceError && console.error(_.sourceError),
              console.error(ea.rG.logMessage(_.code)));
          }
          function eL(l) {
            l && l.code && console.warn(ea.rG.logMessage(l.code));
          }
          function eN(l) {
            (this._events = {}),
              (this.modelShim = new ek.Z()),
              (this.modelShim._qoeItem = new eP.Z()),
              (this.mediaShim = {}),
              (this.setup = new ev(this.modelShim)),
              (this.currentContainer = this.originalContainer = l),
              (this.apiQueue = new N.Z(
                this,
                [
                  "load",
                  "play",
                  "pause",
                  "seek",
                  "stop",
                  "playlistItem",
                  "playlistNext",
                  "playlistPrev",
                  "next",
                  "preload",
                  "setAllowFullscreen",
                  "setConfig",
                  "setCurrentAudioTrack",
                  "setCurrentCaptions",
                  "setCurrentQuality",
                  "setFullscreen",
                  "setPip",
                  "requestPip",
                  "addButton",
                  "removeButton",
                  "castToggle",
                  "requestCast",
                  "setMute",
                  "setVolume",
                  "setPlaybackRate",
                  "addCues",
                  "setCues",
                  "getCues",
                  "setPlaylistItem",
                  "stopCasting",
                  "getChapters",
                  "getCurrentChapter",
                  "setChapter",
                  "resize",
                  "setCaptions",
                  "setControls",
                ],
                () => !0
              ));
          }
          C(4671), C(9926);
          let eO = function (l, _) {
            if (!document.body.contains(l.currentContainer)) {
              let C = document.getElementById(l.get("id"));
              C && (l.currentContainer = C);
            }
            l.currentContainer.parentElement &&
              l.currentContainer.parentElement.replaceChild(
                _,
                l.currentContainer
              ),
              (l.currentContainer = _);
          };
          Object.assign(eN.prototype, {
            on: _.ZP.on,
            once: _.ZP.once,
            off: _.ZP.off,
            trigger: _.ZP.trigger,
            init(l, _) {
              let C = this.modelShim,
                N = new ex("jwplayer", [
                  "volume",
                  "mute",
                  "captionLabel",
                  "captions",
                  "bandwidthEstimate",
                  "bitrateSelection",
                  "qualityLabel",
                  "enableShortcuts",
                ]),
                ee = null == N ? void 0 : N.getAllItems();
              (C.attributes = C.attributes || {}),
                Object.assign(this.mediaShim, eB.L4);
              let et = l,
                en = (0, X.ZP)(Object.assign({}, l), ee);
              (en.id = _.id),
                (en.setupConfig = et),
                Object.assign(C.attributes, en, eB.bv),
                (C.getProviders = function () {
                  return new ew.Z(en);
                }),
                (C.setProvider = function () {});
              let er = (0, eG.Z)();
              {
                C.get("backgroundLoading") ||
                  (er = (0, eH.Z)(er.getPrimedElement(), er));
                let ei = (this.primeUi = new eD.ZP(
                  (0, eD.GU)(this.originalContainer)
                ).once("gesture", () => {
                  er.prime(), this.preload(), ei.destroy();
                }));
              }
              return (
                C.on("change:errorEvent", eI),
                this.setup
                  .start(_)
                  .then((l) => {
                    var X = l.core;
                    if (!X) throw (0, ea.l9)(null, ea.y7);
                    if (this.setup) {
                      if (
                        (this.on(ed.cM, eL),
                        l.warnings.forEach((l) => {
                          this.trigger(ed.cM, l);
                        }),
                        (l = this.modelShim.clone()).error)
                      )
                        throw l.error;
                      var ee = this.apiQueue.queue.slice(0);
                      this.apiQueue.destroy(),
                        Object.assign(this, X.prototype),
                        this.playerSetup(
                          l,
                          _,
                          this.originalContainer,
                          this._events,
                          ee,
                          er
                        );
                      var X = this._model;
                      return (
                        C.off("change:errorEvent", eI),
                        X.on("change:errorEvent", eI),
                        N.track(X),
                        this.updatePlaylist(
                          X.get("playlist"),
                          X.get("feedData")
                        ).catch((l) => {
                          var _ = l.code === ea._M ? ea.IB : ea.xk;
                          throw (0, ea.l9)(l, _);
                        })
                      );
                    }
                  })
                  .then(() => {
                    this.setup && this.playerReady();
                  })
                  .catch((l) => {
                    var C, N, X;
                    this.setup &&
                      ((C = this),
                      (N = _),
                      (X = l),
                      Promise.resolve().then(() => {
                        var l = (0, ea.Mm)(ea.ud, ea.nk, X),
                          _ = C._model || C.modelShim;
                        (l.message =
                          l.message || _.get("localization").errors[l.key]),
                          delete l.key;
                        var ee = _.get("contextual");
                        if (!ee) {
                          let et = (0, eE.Z)(C, l);
                          eE.Z.cloneIcon &&
                            et
                              .querySelector(".jw-icon")
                              .appendChild(eE.Z.cloneIcon("error")),
                            eO(C, et);
                        }
                        _.set("errorEvent", l),
                          _.set("state", ed.Vy),
                          C.trigger(ed.HH, l),
                          ee && N.remove();
                      }));
                  })
              );
            },
            playerDestroy() {
              this.destroy && this.destroy(),
                this.apiQueue && this.apiQueue.destroy(),
                this.setup && this.setup.destroy(),
                this.primeUi && this.primeUi.destroy(),
                this.currentContainer !== this.originalContainer &&
                  eO(this, this.originalContainer),
                this.off(),
                (this._events =
                  this._model =
                  this.modelShim =
                  this.apiQueue =
                  this.primeUi =
                  this.setup =
                    null);
            },
            getContainer() {
              return this.currentContainer;
            },
            get(l) {
              if (this.modelShim)
                return l in this.mediaShim
                  ? this.mediaShim[l]
                  : this.modelShim.get(l);
            },
            getItemQoe() {
              return this.modelShim._qoeItem;
            },
            getItemPromise: () => null,
            setItemCallback(l) {
              this.modelShim &&
                (this.modelShim.attributes.playlistItemCallback = l);
            },
            getConfig() {
              return Object.assign(
                {},
                this.modelShim.attributes,
                this.mediaShim
              );
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
            getSafeRegion: () => ({ x: 0, y: 0, width: 0, height: 0 }),
            isBeforeComplete: () => !1,
            isBeforePlay: () => !1,
            createInstream: () => null,
            skipAd() {},
            getMediaElement() {},
            attachMedia() {},
            detachMedia() {},
            isReady() {
              var l;
              return (
                (null == (l = this._model) ? void 0 : l.get("isReady")) || !1
              );
            },
          });
          let ej = eN;
        },
        4446(l, _, C) {
          "use strict";
          C.d(_, {
            A6: () => ep,
            DD: () => ea,
            EY: () => e$,
            H4: () => eb,
            IB: () => ei,
            MD: () => eg,
            Mm: () => ey,
            Sp: () => e3,
            T6: () => ee,
            Y7: () => ef,
            YQ: () => eo,
            _M: () => ec,
            aD: () => e_,
            fU: () => en,
            l9: () => em,
            nk: () => X,
            nm: () => e4,
            o2: () => eu,
            pJ: () => e1,
            rG: () => ev,
            tJ: () => el,
            ud: () => e5,
            ul: () => e0,
            wH: () => eh,
            wM: () => ed,
            xk: () => er,
            y4: () => es,
            y7: () => et,
            zO: () => e2,
          });
          var N = C(6042);
          let X = 1e5,
            ee = 100001,
            et = 100002,
            en = 101e3,
            er = 102e3,
            ei = 102700,
            eo = 200001,
            ea = 202e3,
            es = 104e3,
            el = 203e3,
            eu = 203640,
            ec = 203700,
            e$ = 204e3,
            ed = 300100,
            e_ = 300200,
            ef = 306e3,
            ep = 308e3,
            eh = 308640,
            e0 = "cantPlayVideo",
            eg = "badConnection",
            e1 = "cantLoadPlayer",
            e2 = "cantPlayInBrowser",
            e3 = "liveStreamDown",
            eb = "protectedContent",
            e5 = "technicalError";
          class ev {
            constructor(l, _, C) {
              (this.code = (0, N.qh)(_) ? _ : 0),
                (this.sourceError = C || null),
                l ? (this.key = l) : delete this.key;
            }
            static logMessage(l) {
              var _ = l % 1e3,
                C = Math.floor((l - _) / 1e3);
              let N = l.toString();
              return (
                "JW Player " +
                (l > 299999 && l < 4e5 ? "Warning" : "Error") +
                " " +
                l +
                ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" +
                (N = _ >= 400 && _ < 600 ? C + "400-" + C + "599" : N)
              );
            }
          }
          let ey = function (l, _, C) {
              return C instanceof ev && C.code ? C : new ev(l, _, C);
            },
            em = function (l, _) {
              var C = ey(e5, _, l);
              return (C.code = ((l && l instanceof ev && l.code) || 0) + _), C;
            },
            e4 = function (l) {
              var { name: l, message: _ } = l;
              switch (l) {
                case "AbortError":
                  if (/pause/.test(_)) return 303213;
                  if (/load/.test(_)) return 303212;
                  return 303210;
                case "NotAllowedError":
                  return 303220;
                case "NotSupportedError":
                  return 303230;
                default:
                  return 303200;
              }
            };
        },
        6391(l, _, C) {
          "use strict";
          C.d(_, { Z: () => N });
          let N = [];
        },
        7411(l, _, C) {
          "use strict";
          C.d(_, { Z: () => en });
          var N = C(5004);
          let X = window.performance || { timing: {} },
            ee = X.timing.navigationStart || (0, N.z)();
          "now" in X || (X.now = () => (0, N.z)() - ee);
          let et = () => ee + X.now(),
            en = class {
              constructor() {
                (this.startTimes = {}),
                  (this.sum = {}),
                  (this.counts = {}),
                  (this.ticks = {});
              }
              start(l) {
                (this.startTimes[l] = et()),
                  (this.counts[l] = this.counts[l] + 1 || 1);
              }
              end(l) {
                var _;
                this.startTimes[l] &&
                  ((_ = et() - this.startTimes[l]),
                  delete this.startTimes[l],
                  (this.sum[l] = this.sum[l] + _ || _));
              }
              dump() {
                var l,
                  _ = Object.assign({}, this.sum);
                for (let C in this.startTimes)
                  (function (l, _) {
                    if (null == l)
                      throw TypeError(
                        "Cannot convert undefined or null to object"
                      );
                    return Object.prototype.hasOwnProperty.call(Object(l), _);
                  })(this.startTimes, C) &&
                    ((l = et() - this.startTimes[C]), (_[C] = _[C] + l || l));
                return {
                  counts: Object.assign({}, this.counts),
                  sums: _,
                  events: Object.assign({}, this.ticks),
                };
              }
              tick(l) {
                this.ticks[l] = et();
              }
              clear(l) {
                delete this.ticks[l];
              }
              between(l, _) {
                return this.ticks[_] && this.ticks[l]
                  ? this.ticks[_] - this.ticks[l]
                  : null;
              }
            };
        },
        4601(l, _, C) {
          "use strict";
          C.d(_, { v: () => et, z: () => en });
          var N = C(2894),
            X = C(8348);
          let ee = null,
            et = {},
            en = function () {
              return (ee =
                ee ||
                (X.OS.tizenApp
                  ? C.e(74)
                      .then(
                        function (l) {
                          var _ = C(3112).default;
                          return (et.controls = _);
                        }.bind(null, C)
                      )
                      .catch(function () {
                        ((ee = null), N.Jt)(301133)();
                      })
                  : C.e(716)
                      .then(
                        function (l) {
                          var _ = C(5827).default;
                          return (et.controls = _);
                        }.bind(null, C)
                      )
                      .catch(function () {
                        ((ee = null), N.Jt)(301130)();
                      })));
            };
        },
        8348(l, _, C) {
          "use strict";
          C.r(_),
            C.d(_, { Browser: () => en, Features: () => e0, OS: () => ec });
          var N = C(2268);
          let X = (l, _) => {
              if ((l = l.exec(_)) && l.length > 1) return l[1];
            },
            ee = navigator.userAgent,
            et = () => {},
            en = {
              get androidNative() {
                return (0, N.O7)();
              },
              get chrome() {
                return (0, N.i7)();
              },
              get edge() {
                return (0, N.un)();
              },
              get facebook() {
                return (0, N.DF)();
              },
              get firefox() {
                return (0, N.pZ)();
              },
              get ie() {
                return (0, N.w1)();
              },
              get msie() {
                return (0, N.A)();
              },
              get safari() {
                return (0, N.G6)();
              },
              get version() {
                {
                  var er = this,
                    ei = ee;
                  let eo, ea, es, el;
                  if (er.chrome)
                    eo =
                      -1 !== ei.indexOf("Chrome")
                        ? ei.substring(ei.indexOf("Chrome") + 7)
                        : ei.substring(ei.indexOf("CriOS") + 6);
                  else if (er.safari)
                    eo = ei.substring(ei.indexOf("Version") + 8);
                  else if (er.firefox)
                    eo = ei.substring(ei.indexOf("Firefox") + 8);
                  else if (er.edge) {
                    let eu = ei.indexOf("Edge");
                    -1 === eu ? (eu = ei.indexOf("Edg") + 4) : (eu += 5),
                      (eo = ei.substring(eu));
                  } else
                    er.ie &&
                      (-1 !== ei.indexOf("rv:")
                        ? (eo = ei.substring(ei.indexOf("rv:") + 3))
                        : -1 !== ei.indexOf("MSIE") &&
                          (eo = ei.substring(ei.indexOf("MSIE") + 5)));
                  return (
                    eo &&
                      (-1 !==
                        (el = (eo =
                          -1 !==
                          (el = (eo =
                            -1 !== (el = eo.indexOf(";"))
                              ? eo.substring(0, el)
                              : eo).indexOf(" "))
                            ? eo.substring(0, el)
                            : eo).indexOf(")")) && (eo = eo.substring(0, el)),
                      (ea = parseInt(eo, 10)),
                      (es = parseInt(eo.split(".")[1], 10))),
                    { version: eo, major: ea, minor: es }
                  );
                }
              },
            },
            ec = {
              get android() {
                return (0, N.Dt)();
              },
              get iOS() {
                return (0, N.gn)();
              },
              get mobile() {
                return (0, N.tq)();
              },
              get mac() {
                return (0, N.id)();
              },
              get iPad() {
                return (0, N.zc)();
              },
              get iPhone() {
                return (0, N.xb)();
              },
              get windows() {
                return ee.indexOf("Windows") > -1;
              },
              get tizen() {
                return (0, N.yS)();
              },
              get tizenApp() {
                return (0, N.Q6)();
              },
              get version() {
                {
                  var e$ = this,
                    ed = ee;
                  let e_, ef, ep;
                  if (e$.windows)
                    switch ((e_ = X(/Windows(?: NT|)? ([._\d]+)/, ed))) {
                      case "6.1":
                        e_ = "7.0";
                        break;
                      case "6.2":
                        e_ = "8.0";
                        break;
                      case "6.3":
                        e_ = "8.1";
                    }
                  else
                    e$.android
                      ? (e_ = X(/Android ([._\d]+)/, ed))
                      : e$.iOS
                        ? (e_ = X(/OS ([._\d]+)/, ed))
                        : e$.mac
                          ? (e_ = X(/Mac OS X ([._\d]+)/, ed))
                          : e$.tizen && (e_ = X(/Tizen ([._\d]+)/, ed));
                  if (e_) {
                    ef = parseInt(e_, 10);
                    let eh = e_.split(/[._]/);
                    eh && (ep = parseInt(eh[1], 10));
                  }
                  return { version: e_, major: ef, minor: ep };
                }
              },
            },
            e0 = {
              get flash() {
                return (0, N.NO)();
              },
              get flashVersion() {
                return (0, N.dI)();
              },
              get iframe() {
                return (0, N.cL)();
              },
              get passiveEvents() {
                {
                  let eg = !1;
                  try {
                    var e1 = Object.defineProperty({}, "passive", {
                      get: () => (eg = !0),
                    });
                    window.addEventListener("testPassive", et, e1),
                      window.removeEventListener("testPassive", et, e1);
                  } catch (e2) {}
                  return eg;
                }
              },
              get backgroundLoading() {
                return !ec.iOS && !en.safari && !ec.tizen;
              },
              get enableAdLoadingUI() {
                return !ec.iOS && !ec.tizen;
              },
            };
        },
        1643(l, _, C) {
          "use strict";
          C.d(_, {
            $_: () => eg,
            $j: () => e4,
            AQ: () => eS,
            Ax: () => e1,
            B1: () => e$,
            Bs: () => ti,
            Ew: () => eA,
            FU: () => e8,
            Gj: () => tt,
            HH: () => ek,
            Hy: () => eV,
            Ib: () => eY,
            Je: () => eM,
            Jl: () => eT,
            K5: () => e_,
            Kb: () => N,
            Ms: () => ev,
            NZ: () => em,
            O1: () => eN,
            Ow: () => eq,
            P: () => ec,
            QF: () => e9,
            R2: () => eG,
            RF: () => ts,
            Rc: () => ey,
            Rt: () => e0,
            SL: () => eJ,
            Sv: () => el,
            TJ: () => eH,
            U3: () => ef,
            UF: () => eQ,
            UW: () => eW,
            UZ: () => ej,
            V$: () => ew,
            Vy: () => er,
            WE: () => e2,
            Wp: () => ea,
            Z_: () => te,
            _5: () => et,
            _B: () => eZ,
            aM: () => eR,
            aQ: () => ex,
            bc: () => X,
            cM: () => eh,
            cq: () => eC,
            cy: () => e7,
            gO: () => ez,
            gy: () => eL,
            h7: () => to,
            ik: () => ei,
            j0: () => eU,
            jt: () => eK,
            k3: () => e3,
            l5: () => tr,
            nQ: () => eo,
            nv: () => es,
            oZ: () => eD,
            ot: () => eu,
            pi: () => eP,
            pn: () => ep,
            qG: () => ta,
            r0: () => en,
            rx: () => eO,
            s$: () => e6,
            sF: () => eX,
            t6: () => tl,
            tP: () => ed,
            uL: () => eb,
            uT: () => eE,
            uc: () => eB,
            ug: () => eF,
            wh: () => e5,
            xQ: () => ee,
            xf: () => tn,
            yH: () => eI,
          });
          let N = "buffering",
            X = "idle",
            ee = "complete",
            et = "paused",
            en = "playing",
            er = "error",
            ei = "loading",
            eo = "stalled",
            ea = "drag",
            es = "dragStart",
            el = "dragEnd",
            eu = "click",
            ec = "doubleClick",
            e$ = "over",
            ed = "move",
            e_ = "enter",
            ef = "out",
            ep = er,
            eh = "warning",
            e0 = "adClick",
            eg = "mediaLoaded",
            e1 = "adPause",
            e2 = "adPlay",
            e3 = "adSkipped",
            eb = "adTime",
            e5 = "autostartNotAllowed",
            ev = ee,
            ey = "ready",
            em = "seek",
            e4 = "beforePlay",
            e6 = "beforeComplete",
            eT = "bufferFull",
            eS = "absolutePositionReady",
            e7 = "displayClick",
            ew = "playlistComplete",
            eP = "cast",
            eA = "mediaError",
            e8 = "firstFrame",
            eC = "playAttempt",
            eM = "playAttemptFailed",
            ex = "seeked",
            ek = "setupError",
            eB = "state",
            eE = "bufferChange",
            eG = "time",
            eH = "ratechange",
            eD = "mediaType",
            eI = "volume",
            eL = "mute",
            eN = "metadataCueParsed",
            eO = "meta",
            ej = "levels",
            eR = "levelsChanged",
            eF = "visualQuality",
            eV = "controls",
            eW = "fullscreen",
            eX = "resize",
            ez = "playlistItem",
            eq = "playlist",
            eU = "audioTracks",
            eZ = "audioTrackChanged",
            eK = "subtitlesTracks",
            eQ = "subtitlesTrackChanged",
            e9 = "playbackRateChanged",
            eY = "logoClick",
            eJ = "captionsList",
            te = "captionsChanged",
            tt = "providerFirstFrame",
            tn = "userAction",
            tr = "instreamClick",
            ti = "breakpoint",
            to = "fullscreenchange",
            ta = "bandwidthEstimate",
            ts = "float",
            tl = "chapter";
        },
        9918(l, _, C) {
          "use strict";
          C.d(_, { L4: () => X, OG: () => et, bv: () => N, ni: () => ee });
          let N = {
              audioMode: !1,
              itemMeta: {},
              playbackRate: 1,
              playRejected: !1,
              state: C(1643).bc,
              itemReady: !1,
              controlsEnabled: !1,
            },
            X = { position: 0, duration: 0, buffer: 0, currentTime: 0 },
            ee = 120,
            et = 25;
        },
        7753(l, _, C) {
          "use strict";
          C.d(_, { Z: () => N });
          class N extends C(328).ZP {
            constructor() {
              super(), (this.attributes = Object.create(null));
            }
            addAttributes(l) {
              Object.keys(l).forEach((_) => {
                this.add(_, l[_]);
              });
            }
            add(l, _) {
              Object.defineProperty(this, l, {
                get: () => this.attributes[l],
                set: (_) => {
                  this.set(l, _);
                },
                enumerable: !1,
              }),
                (this.attributes[l] = _);
            }
            get(l) {
              return this.attributes[l];
            }
            set(l, _) {
              var C;
              this.attributes[l] !== _ &&
                ((C = this.attributes[l]),
                (this.attributes[l] = _),
                this.trigger("change:" + l, this, _, C));
            }
            clone() {
              var l = {},
                _ = this.attributes;
              if (_) for (let C in _) l[C] = _[C];
              return l;
            }
            change(l, _, C) {
              return (
                this.on("change:" + l, _, C),
                (l = this.get(l)),
                _.call(C, this, l, l),
                this
              );
            }
          }
        },
        7941(l, _, C) {
          "use strict";
          C.d(_, { dZ: () => ee, my: () => en, qk: () => et, r1: () => X });
          var N = C(2957);
          let X = (l) => {
              let _ = "";
              return (
                l &&
                  (l.localName
                    ? (_ = l.localName)
                    : l.baseName && (_ = l.baseName)),
                _
              );
            },
            ee = (l) => {
              let _ = "";
              return (
                l &&
                  (l.textContent
                    ? (_ = (0, N.fy)(l.textContent))
                    : l.text && (_ = (0, N.fy)(l.text))),
                _
              );
            },
            et = (l, _) => l.childNodes[_],
            en = (l) => (l.childNodes ? l.childNodes.length : 0);
        },
        6769(l, _, C) {
          "use strict";
          C.d(_, {
            Z: () =>
              function (l) {
                var _ = [];
                _.feedData = {};
                for (let C = 0; C < (0, N.my)(l); C++) {
                  var X = (0, N.qk)(l, C);
                  if ("channel" === (0, N.r1)(X).toLowerCase())
                    for (let ee = 0; ee < (0, N.my)(X); ee++) {
                      var et = (0, N.qk)(X, ee),
                        en = (0, N.r1)(et).toLowerCase();
                      "item" === en
                        ? _.push(ei(et))
                        : en && (_.feedData[en] = (0, N.dZ)(et));
                    }
                }
                return _;
              },
          });
          var N = C(7941),
            X = C(2957);
          function ee(l, _) {
            let C = [];
            for (let et = 0; et < (0, N.my)(l); et++) {
              var en,
                er = l.childNodes[et];
              if ("media" === er.prefix && (0, N.r1)(er))
                switch ((0, N.r1)(er).toLowerCase()) {
                  case "content":
                    if (
                      ((0, X.Dc)(er, "duration") &&
                        (_.duration = (0, X.m9)((0, X.Dc)(er, "duration"))),
                      (0, X.Dc)(er, "url"))
                    ) {
                      _.sources ||= [];
                      let ei = {
                          file: (0, X.Dc)(er, "url"),
                          type: (0, X.Dc)(er, "type"),
                          width: (0, X.Dc)(er, "width"),
                          label: (0, X.Dc)(er, "label"),
                        },
                        eo = ((l) => {
                          var _ = [];
                          for (let C = 0; C < (0, N.my)(l); C++) {
                            var X = l.childNodes[C];
                            "jwplayer" === X.prefix &&
                              "mediatypes" === (0, N.r1)(X).toLowerCase() &&
                              _.push((0, N.dZ)(X));
                          }
                          return _;
                        })(er);
                      eo.length && (ei.mediaTypes = eo), _.sources.push(ei);
                    }
                    (0, N.my)(er) > 0 && (_ = ee(er, _));
                    break;
                  case "title":
                    _.title = (0, N.dZ)(er);
                    break;
                  case "description":
                    _.description = (0, N.dZ)(er);
                    break;
                  case "guid":
                    _.mediaid = (0, N.dZ)(er);
                    break;
                  case "thumbnail":
                    _.image ||= (0, X.Dc)(er, "url");
                    break;
                  case "group":
                    ee(er, _);
                    break;
                  case "subtitle": {
                    let ea = { file: (0, X.Dc)(er, "url"), kind: "captions" };
                    (0, X.Dc)(er, "lang").length > 0 &&
                      ((en = (0, X.Dc)(er, "lang")),
                      (ea.label =
                        {
                          zh: "Chinese",
                          nl: "Dutch",
                          en: "English",
                          fr: "French",
                          de: "German",
                          it: "Italian",
                          ja: "Japanese",
                          pt: "Portuguese",
                          ru: "Russian",
                          es: "Spanish",
                        }[en] || en)),
                      C.push(ea);
                  }
                }
            }
            _.tracks ||= [];
            for (let es = 0; es < C.length; es++) _.tracks.push(C[es]);
            return _;
          }
          let et = ee;
          var en = C(9888),
            er = C(393);
          let ei = (l) => {
            var _ = {};
            for (let C = 0; C < l.childNodes.length; C++) {
              var ee = l.childNodes[C],
                ei = (0, N.r1)(ee);
              if (ei)
                switch (ei.toLowerCase()) {
                  case "enclosure":
                    _.file = (0, X.Dc)(ee, "url");
                    break;
                  case "title":
                    _.title = (0, N.dZ)(ee);
                    break;
                  case "guid":
                    _.mediaid = (0, N.dZ)(ee);
                    break;
                  case "pubdate":
                    _.date = (0, N.dZ)(ee);
                    break;
                  case "description":
                    _.description = (0, N.dZ)(ee);
                    break;
                  case "link":
                    _.link = (0, N.dZ)(ee);
                    break;
                  case "category":
                    _.tags
                      ? (_.tags += (0, N.dZ)(ee))
                      : (_.tags = (0, N.dZ)(ee));
                }
            }
            return new er.Z(
              (function (l, _) {
                var C = "default",
                  ee = "file",
                  et = [],
                  er = [],
                  ei = _;
                for (let eo = 0; eo < l.childNodes.length; eo++) {
                  var ea = l.childNodes[eo];
                  if ("jwplayer" === ea.prefix) {
                    let es = (0, N.r1)(ea);
                    "source" === es
                      ? (delete _.sources,
                        et.push({
                          file: (0, X.Dc)(ea, ee),
                          default: (0, X.Dc)(ea, C),
                          label: (0, X.Dc)(ea, "label"),
                          type: (0, X.Dc)(ea, "type"),
                        }))
                      : "track" === es
                        ? (delete _.tracks,
                          er.push({
                            file: (0, X.Dc)(ea, ee),
                            default: (0, X.Dc)(ea, C),
                            kind: (0, X.Dc)(ea, "kind"),
                            label: (0, X.Dc)(ea, "label"),
                          }))
                        : ((_[es] = (0, en.serialize)((0, N.dZ)(ea))),
                          "file" === es && _.sources && delete _.sources);
                  }
                  _[ee] ||= _.link;
                }
                if (et.length) {
                  _.sources = [];
                  for (let el = 0; el < et.length; el++) {
                    let eu = et[el];
                    eu.file.length > 0 &&
                      ((eu[C] = "true" === et[el][C]),
                      eu.label || delete eu.label,
                      ei.sources.push(eu));
                  }
                }
                if (er.length) {
                  _.tracks = [];
                  for (let ec = 0; ec < er.length; ec++) {
                    let e$ = er[ec];
                    e$.file &&
                      e$.file.length > 0 &&
                      ((e$[C] = "true" === er[ec][C]),
                      (e$.kind = er[ec].kind.length ? er[ec].kind : "captions"),
                      e$.label || delete e$.label,
                      ei.tracks.push(e$));
                  }
                }
                return ei;
              })(l, et(l, _))
            );
          };
        },
        2557(l, _, C) {
          "use strict";
          C.d(_, { t: () => N, u: () => X });
          class N {
            constructor(l, _) {
              (this.defaultLanguage = l), (this.timestamps = _);
            }
          }
          class X {
            constructor({ title: l = {}, group: _, time: C, image: N }) {
              (this.title = {}),
                (this.time = C),
                (this.group = _),
                (this.image = N),
                Object.keys(l).forEach((_) => {
                  var C = l[_];
                  this.addTitle(_, C);
                });
            }
            addTitle(l, _) {
              this.title[l] = _;
            }
          }
        },
        393(l, _, C) {
          "use strict";
          C.d(_, { Z: () => er });
          var N = C(6053);
          function X(l) {
            var _;
            if (l && l.file)
              return (
                ((l = Object.assign(
                  {},
                  { kind: "captions", default: !1 },
                  l
                )).kind =
                  ((_ = l.kind), -1 !== ee.indexOf(_) ? l.kind : "captions")),
                (l.default = Boolean(l.default)),
                l
              );
          }
          let ee = ["captions", "metadata", "thumbnails", "chapters"];
          var et = C(9918);
          let en = Array.isArray,
            er = function (l) {
              en((l = l || {}).tracks) || delete l.tracks;
              var _ = Object.assign(
                {},
                { sources: [], tracks: [], minDvrWindow: et.ni },
                l
              );
              _.sources !== Object(_.sources) ||
                en(_.sources) ||
                (_.sources = [(0, N.Z)(_.sources)]),
                (en(_.sources) && 0 !== _.sources.length) ||
                  (l.levels
                    ? (_.sources = l.levels)
                    : (_.sources = [(0, N.Z)(l)]));
              for (let C = 0; C < _.sources.length; C++) {
                var ee,
                  er = _.sources[C];
                er &&
                  ((ee = er.default),
                  (er.default = !!ee && "true" === ee.toString()),
                  (_.sources[C].label ||= C.toString()),
                  (_.sources[C] = (0, N.Z)(_.sources[C])));
              }
              return (
                (_.sources = _.sources.filter(Boolean)),
                en(_.tracks) || (_.tracks = []),
                en(_.captions) &&
                  ((_.tracks = _.tracks.concat(_.captions)), delete _.captions),
                (_.tracks = _.tracks.map(X).filter(Boolean)),
                _
              );
            };
        },
        7263(l, _, C) {
          "use strict";
          C.d(_, { Z: () => ei });
          var N = C(1643),
            X = C(7941),
            ee = C(6769),
            et = C(6886),
            en = C(328),
            er = C(4446);
          let ei = function () {
            function l(l) {
              try {
                let et = l.responseXML ? l.responseXML.childNodes : null,
                  en,
                  ei = null;
                if (et) {
                  for (
                    let eo = 0;
                    eo < et.length && 8 === (ei = et[eo]).nodeType;
                    eo++
                  );
                  if (
                    (ei =
                      ei && "xml" === (0, X.r1)(ei) ? ei.nextSibling : ei) &&
                    "rss" === (0, X.r1)(ei)
                  ) {
                    let ea = (0, ee.Z)(ei);
                    en = Object.assign({ playlist: ea }, ea.feedData);
                  }
                }
                if (!en)
                  try {
                    let es = JSON.parse(l.responseText);
                    if (Array.isArray(es)) en = { playlist: es };
                    else {
                      if (!Array.isArray(es.playlist))
                        throw Error("Playlist is not an array");
                      en = es;
                    }
                  } catch (el) {
                    throw new er.rG(er.ul, 621, el);
                  }
                _.trigger(N.Ow, en);
              } catch (eu) {
                C(eu);
              }
            }
            let _ = Object.assign(this, en.ZP),
              C = function (l) {
                l instanceof er.rG && !l.code && (l = new er.rG(er.ul, 0)),
                  _.trigger(N.pn, l);
              };
            (this.load = function (_) {
              (0, et.h)(_, l, (l, _, N, X) => {
                C(X);
              });
            }),
              (this.destroy = function () {
                this.off();
              });
          };
        },
        8320(l, _, C) {
          "use strict";
          C.d(_, {
            ZP: () => e_,
            s7: () => eu,
            T5: () => ed,
            YF: () => el,
            _: () => ec,
            bx: () => e$,
          });
          let N = { none: !0, metadata: !0, auto: !0 },
            X = (l, _) => (N[l] ? l : N[_] ? _ : "metadata");
          var ee = C(393),
            et = C(6053),
            en = C(2303),
            er = C(4446);
          let ei = (l, _) => (void 0 === l ? _ : l),
            eo = (l, _, C) => {
              C in _ && (l[C] = _[C]);
            },
            ea = (l, _) => {
              let C = _.attributes,
                { sources: N, allSources: ee, preload: en, drm: er } = l,
                ea = ei(l.withCredentials, C.withCredentials);
              return (ee || N)
                .map(function (_) {
                  var N, ee, es;
                  return _ !== Object(_)
                    ? null
                    : (eo(_, C, "androidhls"),
                      eo(_, C, "hlsjsdefault"),
                      eo(_, C, "safarihlsjs"),
                      (es = _),
                      (N = l),
                      (ee = C),
                      es.liveSyncDuration ||
                        eo(
                          es,
                          (N = N.liveSyncDuration ? N : ee),
                          "liveSyncDuration"
                        ),
                      eo(_, C, "_hlsjsProgressive"),
                      (_.preload = X(_.preload, en)),
                      (ee = _.drm || er || C.drm) && (_.drm = ee),
                      void 0 !== (es = ei(_.withCredentials, ea)) &&
                        (_.withCredentials = es),
                      (0, et.Z)(_));
                })
                .filter(Boolean);
            },
            es = (l, _) => {
              var C = ((l, _) => {
                for (let C = 0; C < l.length; C++) {
                  var N = l[C],
                    X = _.choose(N).providerToCheck;
                  if (X) return { type: N.type, provider: X };
                }
                return null;
              })(l, (_ = _ && _.choose ? _ : new en.Z()));
              if (!C) return [];
              let N = C.provider,
                X = C.type;
              return l.filter(function (l) {
                return l.type === X && _.providerSupports(N, l);
              });
            },
            el = (l, _, C) => {
              var N = l.getProviders(),
                ee = l.get("preload"),
                et = l.get("jwStart"),
                en = Object.assign({}, _);
              if (
                ((en.preload = X(_.preload, ee)),
                (en.allSources = ea(en, l)),
                (en.sources = es(en.allSources, N)),
                en.sources.length)
              )
                return (
                  (en.file = en.sources[0].file),
                  (en.feedData = C),
                  et &&
                    -1 !== et &&
                    l.get("generateSEOMetadata") &&
                    (en.starttime = et),
                  (ee = (_ = en).sources[0].liveSyncDuration) &&
                    (_.liveSyncDuration = _.dvrSeekLimit = ee),
                  _
                );
            },
            eu = (l, _, C) => {
              let N = Object.assign({}, C);
              return (
                delete N.playlist, l.map((l) => el(_, l, N)).filter(Boolean)
              );
            },
            ec = (l) => {
              if (!Array.isArray(l) || 0 === l.length)
                throw new er.rG(er.ul, 630);
            },
            e$ = (l, _) => {
              let C = (parseInt(l, 10) || 0) % _;
              return C < 0 && (C += _), C;
            },
            ed = (l, _) => es(ea(l, _), _.getProviders()),
            e_ = function (l) {
              return (Array.isArray(l) ? l : [l]).map(ee.Z);
            };
        },
        6053(l, _, C) {
          "use strict";
          C.d(_, { Z: () => ee });
          var N = C(7034),
            X = C(2957);
          let ee = function (l) {
            if (l && l.file) {
              let _ = Object.assign({}, { default: !1, type: "" }, l);
              _.file = (0, X.fy)("" + _.file);
              var l = /^[^/]+\/(?:x-)?([^/]+)$/,
                C = _.type;
              if (
                (l.test(C) && ((_.mimeType = C), (_.type = C.replace(l, "$1"))),
                (0, N.isYouTube)(_.file)
                  ? (_.type = "youtube")
                  : (0, N.isRtmp)(_.file)
                    ? (_.type = "rtmp")
                    : (_.type ||= (0, X.AO)(_.file)),
                _.type)
              ) {
                switch (_.type) {
                  case "m3u8":
                  case "vnd.apple.mpegurl":
                    _.type = "hls";
                    break;
                  case "dash+xml":
                    _.type = "dash";
                    break;
                  case "m4a":
                    _.type = "aac";
                    break;
                  case "smil":
                    _.type = "rtmp";
                }
                return (
                  Object.keys(_).forEach(function (l) {
                    "" === _[l] && delete _[l];
                  }),
                  _
                );
              }
            }
          };
        },
        4101(l, _, C) {
          "use strict";
          C.d(_, { Z: () => eo });
          var N = C(676),
            X = C(9888),
            ee = C(2957),
            et = C(4446),
            en = C(3487);
          function er(l) {
            var _, C;
            if ("string" == typeof l)
              return (_ = (l = l.split("?")[0]).indexOf("://")) > 0
                ? 0
                : ((C = l.indexOf("/")),
                    (l = (0, ee.AO)(l)),
                    !(_ < 0) || !(C < 0) || (l && isNaN(l)))
                  ? 1
                  : 2;
          }
          function ei(l) {
            (this.url = l), (this.promise_ = null);
          }
          Object.defineProperties(ei.prototype, {
            promise: {
              get() {
                return this.load();
              },
              set() {},
            },
          }),
            Object.assign(ei.prototype, {
              load() {
                let l = this.promise_;
                if (!l) {
                  if (2 === er(this.url)) return Promise.resolve(this);
                  var _ = new N.ZP(
                    ((l) => {
                      switch (er(l)) {
                        case 0:
                          return l;
                        case 1:
                          return (0, X.getAbsolutePath)(
                            l,
                            window.location.href
                          );
                      }
                    })(this.url)
                  );
                  (this.loader = _),
                    (l = _.load().then(() => this)),
                    (this.promise_ = l);
                }
                return l;
              },
              registerPlugin(l, _, C) {
                (this.name = l), (this.target = _), (this.js = C);
              },
              getNewInstance(l, _, C) {
                var N = this.js;
                if ("function" != typeof N)
                  throw new et.rG(null, (0, en.bX)(this.url) + 100);
                let X = new N(l, _, C),
                  ee = {
                    type: "pluginInitialized",
                    name: this.name,
                    config: _,
                  };
                return (
                  (X.addToPlayer = function (l = !1) {
                    var _ = this.getContainer().querySelector(".jw-overlays");
                    if (_)
                      return (
                        (C.left = _.style.left),
                        (C.top = _.style.top),
                        _.appendChild(C),
                        l
                          ? this.trigger("pluginInitialized", ee)
                          : setTimeout(
                              () => this.trigger("pluginInitialized", ee),
                              0
                            ),
                        X
                      );
                  }),
                  (X.resizeHandler = function () {
                    var l = this.getContainer().querySelector(".jw-overlays");
                    l && X.resize(l.clientWidth, l.clientHeight);
                  }),
                  X
                );
              },
            });
          let eo = ei;
        },
        1241(l, _, C) {
          "use strict";
          C.d(_, {
            ZP: () =>
              function (l, _) {
                var C = l.get("plugins");
                return (
                  (window.jwplayerPluginJsonp = eo),
                  (l.pluginLoader = l.pluginLoader || new ee())
                    .load(_, ei, C, l)
                    .then((_) => {
                      if (!l.attributes._destroyed)
                        return delete window.jwplayerPluginJsonp, _;
                    })
                );
              },
            fo: () => eo,
            Ve: () => ea,
          });
          var N = C(4446),
            X = C(3487);
          let ee = function () {
            this.load = function (l, _, C, ee) {
              return C && "object" == typeof C
                ? Promise.all(
                    Object.keys(C)
                      .filter((l) => l)
                      .map((et) => {
                        let en = C[et];
                        return _.setupPlugin(et)
                          .then((_) => {
                            if (!ee.attributes._destroyed)
                              return (0, X.MK)(_, en, l);
                          })
                          .catch((l) =>
                            (_.removePlugin(et), l.code)
                              ? l
                              : new N.rG(null, (0, X.bX)(et), l)
                          );
                      })
                  )
                : Promise.resolve();
            };
          };
          var et = C(4101),
            en = C(5499);
          let er = {},
            ei = new (class {
              setupPlugin(l) {
                var _ = this.getPlugin(l);
                return _
                  ? (_.url !== l &&
                      (0, en.c)(
                        'JW Plugin "' +
                          (0, X.Nq)(l) +
                          '" already loaded from "' +
                          _.url +
                          '". Ignoring "' +
                          l +
                          '."'
                      ),
                    _.promise)
                  : this.addPlugin(l).load();
              }
              addPlugin(l) {
                var _ = (0, X.Nq)(l);
                let C = er[_];
                return C || ((C = new et.Z(l)), (er[_] = C)), C;
              }
              getPlugin(l) {
                return er[(0, X.Nq)(l)];
              }
              removePlugin(l) {
                delete er[X.Nq(l)];
              }
              getPlugins() {
                return er;
              }
            })(),
            eo = function (l, _, C) {
              var N = ei.addPlugin(l);
              N.js || N.registerPlugin(l, _, C);
            },
            ea = async (l, _, C) => {
              var N = (0, X.Nq)(l),
                ee = ei.getPlugin(N);
              if (ee) return (0, X.MK)(ee, _, C);
              let et = l;
              return ei.setupPlugin(et).then((l) => (0, X.MK)(l, _, C));
            };
        },
        7164(l, _, C) {
          "use strict";
          C.d(_, { MK: () => et, Nq: () => X, bX: () => ee });
          var N = C(5950);
          let X = function (l) {
              var _ = /\/((.(?!\/))+?)\.js/i.exec(l),
                _ = (null == _ ? void 0 : _[1]) || l;
              return _ && "jwpsrv-dnt" === _ ? "jwpsrv" : _;
            },
            ee = (l) => 305e3,
            et = (l, _, C) => {
              var X = l.name,
                _ = Object.assign({}, _, (0, N.vl)(l.url)),
                ee = document.createElement("div");
              (ee.id = C.id + "_" + X), (ee.className = "jw-plugin jw-reset");
              var l = l.getNewInstance(C, _, ee);
              return C.addPlugin(X, l), l;
            };
        },
        7683(l, _, C) {
          "use strict";
          C.d(_, {
            V: () => ee,
            Z: () =>
              function () {
                let l = N.Jx,
                  _ = [],
                  C = [];
                for (let et = 0; et < l; et++) {
                  let en = ee();
                  _.push(en), C.push(en), X(en);
                }
                let er = C.shift(),
                  ei = C.shift(),
                  eo = !1;
                return {
                  primed: () => eo,
                  prime() {
                    _.forEach(X), (eo = !0);
                  },
                  played() {
                    eo = !0;
                  },
                  getPrimedElement: () => C.shift() || null,
                  getAdElement: () => er,
                  getTestElement: () => ei,
                  clean(l) {
                    if (l.src) {
                      l.removeAttribute("src");
                      try {
                        l.load();
                      } catch (_) {}
                    }
                  },
                  recycle(l) {
                    l && !C.some((_) => _ === l) && (this.clean(l), C.push(l));
                  },
                  syncVolume(l) {
                    let C = Math.min(Math.max(0, l / 100), 1);
                    _.forEach((l) => {
                      l.volume = C;
                    });
                  },
                  syncMute(l) {
                    _.forEach((_) => {
                      _.muted = l;
                    });
                  },
                };
              },
          });
          var N = C(658);
          let X = (l) => {
              l.src || l.load();
            },
            ee = (l) => {
              let _ = document.createElement("video");
              return (
                (_.className = "jw-video jw-reset"),
                _.setAttribute("tabindex", "-1"),
                _.setAttribute("disableRemotePlayback", ""),
                _.setAttribute("webkit-playsinline", ""),
                _.setAttribute("playsinline", ""),
                l &&
                  Object.keys(l).forEach((C) => {
                    _.setAttribute(C, l[C]);
                  }),
                _
              );
            };
        },
        658(l, _, C) {
          "use strict";
          C.d(_, { HB: () => ee, Jx: () => N, l_: () => X });
          let N = 4,
            X = 5,
            ee = 1;
        },
        4609(l, _, C) {
          "use strict";
          C.d(_, {
            Z: () =>
              function (l, _) {
                return Object.assign({}, _, {
                  prime() {
                    l.src || l.load();
                  },
                  getPrimedElement: () => l,
                  clean() {
                    _.clean(l);
                  },
                  recycle() {
                    _.clean(l);
                  },
                });
              },
          });
        },
        6528(l, _, C) {
          "use strict";
          C.d(_, { Z: () => er });
          var N = C(1643),
            X = C(1384);
          function ee() {}
          let et = () => !1,
            en = { name: "default" },
            er = {
              supports: et,
              play: ee,
              pause: ee,
              preload: ee,
              load: ee,
              stop: ee,
              volume: ee,
              mute: ee,
              seek: ee,
              resize: ee,
              remove: ee,
              destroy: ee,
              setVisibility: ee,
              setFullscreen(l) {
                return (0, X.CX)(this, l);
              },
              getFullscreen: et,
              supportsFullscreen: et,
              getContainer: ee,
              setContainer: ee,
              getName: () => en,
              getQualityLevels: ee,
              getCurrentQuality: ee,
              setCurrentQuality: ee,
              getAudioTracks: ee,
              getCurrentAudioTrack: ee,
              setCurrentAudioTrack: ee,
              getSeekRange() {
                return { start: 0, end: this.getDuration() };
              },
              setPlaybackRate: ee,
              getPlaybackRate: () => 1,
              getBandwidthEstimate: () => null,
              getLiveLatency: () => null,
              attachMedia: ee,
              detachMedia: ee,
              init: ee,
              setState(l) {
                (this.state = l), this.trigger(N.uc, { newstate: l });
              },
              sendMediaType(l) {
                var { type: l, mimeType: _ } = l[0],
                  l =
                    "aac" === l ||
                    "mp3" === l ||
                    "mpeg" === l ||
                    (_ && 0 === _.indexOf("audio/"));
                this.trigger(N.oZ, { mediaType: l ? "audio" : "video" });
              },
              getDuration: () => 0,
              trigger: ee,
            };
        },
        1628(l, _, C) {
          "use strict";
          C.d(_, { V: () => X });
          var N = C(8348);
          let X = (l) =>
            "hls" === l.type && N.OS.android
              ? !1 !== l.androidhls &&
                !N.Browser.firefox &&
                parseFloat(N.OS.version.version || "0") >= 4.4
              : null;
        },
        12(l, _, C) {
          "use strict";
          C.d(_, { U: () => N });
          let N = {};
        },
        670(l, _, C) {
          "use strict";
          C.d(_, {
            Z: () =>
              function (l) {
                var _ = l.getName().name;
                if (!N.U[_]) {
                  if (!(0, et.sE)(X.B, (0, et.wB)({ name: _ }))) {
                    if (!(0, et.mf)(l.supports))
                      throw Error(
                        "Tried to register a provider with an invalid object"
                      );
                    X.B.unshift({ name: _, supports: l.supports });
                  }
                  (0, et.ce)(l.prototype, ee.Z), (N.U[_] = l);
                }
              },
          });
          var N = C(12),
            X = C(2963),
            ee = C(6528),
            et = C(6042);
          C(328);
        },
        6593(l, _, C) {
          "use strict";
          C.d(_, { B: () => er, H: () => en });
          var N = C(1628),
            X = C(7034),
            ee = C(9025);
          let et = {
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
              hls: "application/vnd.apple.mpegurl",
            },
            en = (l) => {
              if (!ee.Z || !ee.Z.canPlayType || !1 === (0, N.V)(l)) return !1;
              var _ = l.file,
                C = l.type;
              if ((0, X.isRtmp)(_, C)) return !1;
              let en = l.mimeType || et[C];
              return (
                !!en &&
                (null != (_ = l.mediaTypes) &&
                  _.length &&
                  (en = [en].concat(_.slice()).join("; ")),
                Boolean(ee.Z.canPlayType(en)))
              );
            },
            er = [{ name: "html5", supports: en }];
        },
        1384(l, _, C) {
          "use strict";
          C.d(_, { CX: () => ei, IP: () => ea, If: () => er, Nm: () => eo });
          var N = C(1643);
          let X,
            ee,
            et = !1;
          function en(l, _, C) {
            (et = C), l.trigger(N.h7, { target: _.target, jwstate: C });
          }
          let er = () => et,
            ei = function (l, _) {
              if ((_ = Boolean(_))) {
                try {
                  let C =
                    l.video.webkitEnterFullscreen ||
                    l.video.webkitEnterFullScreen;
                  C && C.apply(l.video);
                } catch (N) {
                  return !1;
                }
                return l.getFullscreen();
              }
              var X =
                l.video.webkitExitFullscreen || l.video.webkitExitFullScreen;
              return X && X.apply(l.video), _;
            },
            eo = function (l, _) {
              (X = (_) => en(l, _, !0)),
                (ee = (_) => en(l, _, !1)),
                _.addEventListener("webkitbeginfullscreen", X),
                _.addEventListener("webkitendfullscreen", ee);
            },
            ea = (l) => {
              l.removeEventListener("webkitbeginfullscreen", X),
                l.removeEventListener("webkitendfullscreen", ee);
            };
        },
        6875(l, _, C) {
          "use strict";
          C.d(_, { Z: () => N });
          let N =
            "hidden" in document
              ? function () {
                  return !document.hidden;
                }
              : "webkitHidden" in document
                ? function () {
                    return !document.webkitHidden;
                  }
                : function () {
                    return !0;
                  };
        },
        6886(l, _, C) {
          "use strict";
          C.d(_, { E: () => en, h: () => es });
          var N = C(9888),
            X = C(7034),
            ee = C(4446);
          function et() {}
          let en = (l) => {
              (l.onload = null),
                (l.onprogress = null),
                (l.onreadystatechange = null),
                (l.onerror = null),
                "abort" in l && l.abort();
            },
            er = (l, _, C, N) => {
              l.onerror(_, l.url, l.xhr, new ee.rG(_, C, N));
            },
            ei = (l, _, C) => {
              var N = _.documentElement;
              if (
                !C.requireValidXML ||
                ("parsererror" !== N.nodeName &&
                  !N.getElementsByTagName("parsererror").length)
              )
                return (
                  l.responseXML ||
                    (l = Object.assign({}, l, { responseXML: _ })),
                  C.oncomplete(l)
                );
              er(C, ee.ul, 601);
            },
            eo = (l) =>
              function (_) {
                if (
                  ((_ = _.currentTarget || l.xhr),
                  clearTimeout(l.timeoutId),
                  l.responseType)
                ) {
                  if ("json" === l.responseType) {
                    var C = _,
                      X = l;
                    if (
                      !C.response ||
                      ("string" == typeof C.response &&
                        '"' !== C.responseText.substr(1))
                    )
                      try {
                        C = Object.assign({}, C, {
                          response: JSON.parse(C.responseText),
                        });
                      } catch (et) {
                        er(X, ee.ul, 611, et);
                        return;
                      }
                    return X.oncomplete(C);
                  }
                } else {
                  let en,
                    eo = _.responseXML;
                  if (eo)
                    try {
                      en = eo.firstChild;
                    } catch (ea) {}
                  if (
                    (eo && en) ||
                    (l.useDomParser &&
                      _.responseText &&
                      !eo &&
                      null != (eo = (0, N.parseXML)(_.responseText)) &&
                      eo.firstChild)
                  )
                    return ei(_, eo, l);
                  if (l.requireValidXML) {
                    er(l, ee.ul, 602);
                    return;
                  }
                }
                l.oncomplete(_);
              },
            ea,
            es = (l, _, C, N) => {
              var ei;
              let es;
              l === Object(l) && (l = (N = l).url);
              let el = Object.assign(
                  {
                    xhr: null,
                    url: l,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: _ || et,
                    onerror: C || et,
                    mimeType: N && !N.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: null != N && N.plainText ? "text" : "",
                    useDomParser: !1,
                    requestFilter: null,
                  },
                  N
                ),
                eu = ea("Error loading file", el);
              if ("XMLHttpRequest" in window) {
                if (
                  ((es = el.xhr = el.xhr || new window.XMLHttpRequest()),
                  "function" == typeof el.requestFilter)
                ) {
                  let ec;
                  try {
                    ec = el.requestFilter({ url: l, xhr: es });
                  } catch (e$) {
                    return eu(e$, 5), es;
                  }
                  ec && "open" in ec && "send" in ec && (es = el.xhr = ec);
                }
                (ei = el),
                  (es.onreadystatechange = function (l) {
                    var _ = l.currentTarget || ei.xhr;
                    if (4 === _.readyState) {
                      if (
                        (clearTimeout(ei.timeoutId), !((_ = _.status) >= 400))
                      )
                        return 200 === _
                          ? eo(ei)(l)
                          : (0 === _ &&
                              (0, X.isFileProtocol)() &&
                              !/^[a-z][a-z0-9+.-]*:/.test(ei.url) &&
                              er(ei, ee.ul, 7),
                            void 0);
                      er(ei, ee.ul, _ < 600 ? _ : 6);
                    }
                  }),
                  (es.onerror = eu),
                  "overrideMimeType" in es
                    ? el.mimeType && es.overrideMimeType(el.mimeType)
                    : (el.useDomParser = !0);
                try {
                  (l = l.replace(/#.*$/, "")), es.open("GET", l, !0);
                } catch (ed) {
                  return eu(ed, 3), es;
                }
                if (el.responseType)
                  try {
                    es.responseType = el.responseType;
                  } catch (e_) {}
                el.timeout &&
                  ((el.timeoutId = setTimeout(function () {
                    en(es), er(el, ee.ud, 1);
                  }, el.timeout)),
                  (es.onabort = function () {
                    clearTimeout(el.timeoutId);
                  }));
                try {
                  el.withCredentials &&
                    "withCredentials" in es &&
                    (es.withCredentials = !0),
                    es.send();
                } catch (ef) {
                  eu(ef, 4);
                }
                return es;
              }
              er(el, ee.ud, 2);
            };
          ea = (l, _) =>
            function (l, C) {
              var N = l.currentTarget || _.xhr;
              if (
                (clearTimeout(_.timeoutId),
                _.retryWithoutCredentials && _.xhr.withCredentials)
              ) {
                en(N);
                let X = Object.assign({}, _, {
                  xhr: null,
                  withCredentials: !1,
                  retryWithoutCredentials: !1,
                });
                es(X);
              } else
                !C && N.status >= 400 && N.status < 600 && (C = N.status),
                  er(_, C ? ee.ul : ee.ud, C || 6, l);
            };
        },
        328(l, _, C) {
          "use strict";
          function N(l, _) {
            if (null == l)
              throw TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(l), _);
          }
          C.d(_, {
            IH: () => ei,
            S1: () => eo,
            X$: () => ea,
            ZP: () => en,
            on: () => er,
            wj: () => es,
          });
          let X = (l, _, C, N) => {
              let X = -1,
                ee = l.length;
              for (; ++X < ee; ) {
                let et = l[X];
                if (N)
                  try {
                    et.callback.apply(et.context || C, _);
                  } catch (en) {
                    console.log('Error in "' + N + '" event handler:', en);
                  }
                else et.callback.apply(et.context || C, _);
              }
            },
            ee = /\s+/,
            et = (l, _, C, X) => {
              if (C) {
                if ("object" == typeof C) {
                  for (let et in C)
                    N(C, et) && l[_].apply(l, [et, C[et]].concat(X));
                  return !1;
                }
                if (ee.test(C)) {
                  let en = C.split(ee);
                  for (let er = 0, ei = en.length; er < ei; er++)
                    l[_].apply(l, [en[er]].concat(X));
                  return !1;
                }
              }
              return !0;
            };
          class en {
            on(l, _, C) {
              return (
                et(this, "on", l, [_, C]) &&
                  _ &&
                  ((this._events ||= {})[l] ||= []).push({
                    callback: _,
                    context: C,
                  }),
                this
              );
            }
            once(l, _, C) {
              if (!et(this, "once", l, [_, C]) || !_) return this;
              let N = 0;
              function X() {
                N++ || (ee.off(l, X), _.apply(this, arguments));
              }
              let ee = this;
              return (X._callback = _), this.on(l, X, C);
            }
            off(l, _, C) {
              if (this._events && et(this, "off", l, [_, C])) {
                if (l || _ || C) {
                  let N = l ? [l] : Object.keys(this._events);
                  for (let X = 0, ee = N.length; X < ee; X++) {
                    l = N[X];
                    var en = this._events[l];
                    if (en) {
                      let er = (this._events[l] = []);
                      if (_ || C)
                        for (let ei = 0, eo = en.length; ei < eo; ei++) {
                          var ea = en[ei];
                          ((_ &&
                            _ !== ea.callback &&
                            _ !== ea.callback._callback) ||
                            (C && C !== ea.context)) &&
                            er.push(ea);
                        }
                      er.length || delete this._events[l];
                    }
                  }
                } else delete this._events;
              }
              return this;
            }
            trigger(l, ..._) {
              var C;
              return (
                this._events &&
                  et(this, "trigger", l, _) &&
                  ((l = this._events[l]),
                  (C = this._events.all),
                  l && X(l, _, this),
                  C) &&
                  X(C, arguments, this),
                this
              );
            }
            triggerSafe(l, ..._) {
              var C, N;
              return (
                this._events &&
                  et(this, "trigger", l, _) &&
                  ((C = this._events[l]),
                  (N = this._events.all),
                  C && X(C, _, this, l),
                  N) &&
                  X(N, arguments, this, l),
                this
              );
            }
          }
          let er = en.prototype.on,
            ei = en.prototype.once,
            eo = en.prototype.off,
            ea = en.prototype.trigger,
            es = en.prototype.triggerSafe;
          (en.on = er), (en.once = ei), (en.off = eo), (en.trigger = ea);
        },
        2268(l, _, C) {
          "use strict";
          C.d(_, {
            A: () => ea,
            DF: () => ei,
            Dt: () => e_,
            G6: () => e$,
            NO: () => e0,
            O7: () => ef,
            Q6: () => el,
            cL: () => eh,
            dI: () => eg,
            gn: () => ed,
            i7: () => eu,
            id: () => er,
            pZ: () => ee,
            tq: () => ep,
            un: () => eo,
            w1: () => ec,
            xb: () => et,
            yS: () => es,
            zc: () => en,
          });
          let N = (l) => null !== navigator.userAgent.match(l),
            X = () =>
              "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
            ee = () => N(/firefox\//i),
            et = () => N(/iP(hone|od)/i),
            en = () => N(/iPad/i) || X(),
            er = () => N(/Macintosh/i) && !X(),
            ei = () => N(/FBAV/i),
            eo = () => N(/\sEdge?\/\d+/i),
            ea = () => N(/msie/i),
            es = () => N(/SMART-TV/),
            el = () => es() && !N(/SamsungBrowser/),
            eu = () =>
              N(/\s(?:(?:Headless)?Chrome|CriOS)\//i) &&
              !eo() &&
              !N(/UCBrowser/i),
            ec = () =>
              !N(/\sEdg\/\d+/i) && (eo() || N(/trident\/.+rv:\s*11/i) || ea()),
            e$ = () =>
              N(/safari/i) &&
              !N(/(?:Chrome|CriOS|chromium|android|phantom)/i) &&
              !es(),
            ed = () => N(/iP(hone|ad|od)/i) || X(),
            e_ = function () {
              return "boolean" == typeof e_.mock_
                ? e_.mock_
                : N(/Android/i) && !N(/Windows Phone/i);
            },
            ef = () =>
              (!N(/chrome\/[123456789]/i) || !!N(/chrome\/18/i) || !!ee()) &&
              e_();
          e_.mock_ = null;
          let ep = () => ed() || e_() || N(/Windows Phone/i),
            eh = function () {
              if ("boolean" == typeof eh.mock_) return eh.mock_;
              try {
                return window.self !== window.top;
              } catch (l) {
                return !0;
              }
            };
          eh.mock_ = null;
          let e0 = () => !1,
            eg = () => 0;
        },
        8381(l, _, C) {
          "use strict";
          C.d(_, { $W: () => et, Mf: () => er, T2: () => ei, _b: () => en });
          var N = C(8518),
            X = C(2557),
            ee = C(4446);
          let et = function (l, _) {
              let C = [];
              if (l && l.timestamps && l.timestamps.length) {
                let X = l.timestamps.sort((l, _) => l.begin - _.begin);
                X.forEach((ee, et) => {
                  var en = ((l, _ = "en") => {
                      let C = (0, N.G3)();
                      for (
                        var X, ee = Object.keys(l.title), et = ee[0];
                        !l.title[C];

                      ) {
                        let en = ee.find(((X = C), (l) => 0 === l.indexOf(X)));
                        if (en) {
                          C = en;
                          break;
                        }
                        let er = C.lastIndexOf("-");
                        if (er <= 0) {
                          C = null;
                          break;
                        }
                        C = C.slice(0, er);
                      }
                      return C || (ee.indexOf(_) >= 0 ? _ : et);
                    })(ee, l.defaultLanguage),
                    en = ee.title[en],
                    er = ee.time,
                    ee = ee.image;
                  let ei = _;
                  (er = {
                    begin: er,
                    end: (ei = et + 1 < X.length ? X[et + 1].time : ei),
                    text: en,
                    cueType: "chapters",
                  }),
                    ee && (er.image = ee),
                    C.push(er);
                });
              }
              return C;
            },
            en = function (l, _) {
              let C = (0, N.G3)(),
                ee = l.reduce(function (l, _) {
                  var N;
                  return (
                    (_ && _.cueType && "chapters" !== _.cueType) ||
                      ((N = new X.u({
                        time: _.begin,
                        image: _.image,
                      })).addTitle(C, _.text),
                      l.push(N)),
                    l
                  );
                }, []);
              return _ ? ((_.timestamps = ee), _) : new X.t(C, ee);
            },
            er = function (l, _) {
              if ("number" != typeof l || l < 0 || !_ || !_.length) return null;
              let C = null;
              for (let N = 0; N < _.length; N++) {
                var X = _[N];
                X.time > l || (C && !(X.time > C.time)) || (C = X);
              }
              return C;
            },
            ei = function (l, _) {
              let C = !0;
              return (
                l.forEach((l) => {
                  l &&
                    (!l.defaultLanguage ||
                      !l.timestamps ||
                      l.timestamps.some(
                        (l) => !l.title || null === l.time || void 0 === l.time
                      )) &&
                    (C = !1);
                }),
                _(C ? null : (0, ee.l9)(Error(), ee.aD))
              );
            };
        },
        974(l, _, C) {
          "use strict";
          function N(l, _) {
            if (null == l)
              throw TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(l), _);
          }
          C.d(_, {
            HY: () => ea,
            iv: () => er,
            oB: () => en,
            oI: () => et,
            vs: () => ei,
          });
          var X = C(2957),
            _ = C(9563),
            ee = C.n(_);
          let et = ee().clear,
            en = (l, _) => {
              if (null != l) {
                let C;
                void 0 === l.length && (l = [l]);
                var ee = {};
                for (C in _)
                  N(_, C) &&
                    ((en = C),
                    (er = _[C]),
                    (ee[C] =
                      "" === er || null == er
                        ? ""
                        : "string" == typeof er && isNaN(er)
                          ? /png|gif|jpe?g/i.test(er) && 0 > er.indexOf("url")
                            ? "url(" + er + ")"
                            : er
                          : 0 === er || "z-index" === en || "opacity" === en
                            ? "" + er
                            : /color/i.test(en)
                              ? "#" +
                                (0, X.vk)(
                                  er.toString(16).replace(/^0x/i, ""),
                                  6
                                )
                              : Math.ceil(er) + "px"));
                for (let et = 0; et < l.length; et++) {
                  var en,
                    er,
                    ei,
                    eo = l[et];
                  if (null != eo)
                    for (C in ee)
                      N(ee, C) &&
                        ((ei = ((l) => {
                          l = l.split("-");
                          for (let _ = 1; _ < l.length; _++)
                            l[_] = l[_].charAt(0).toUpperCase() + l[_].slice(1);
                          return l.join("");
                        })(C)),
                        eo.style[ei] !== ee[C]) &&
                        (eo.style[ei] = ee[C]);
                }
              }
            },
            er = (l, _, C, X) => {
              C = C || "all-players";
              let et = "";
              if ("object" == typeof _) {
                let er = document.createElement("div");
                en(er, _);
                let ei = er.style.cssText;
                N(_, "content") &&
                  (ei = ei && ei + ' content: "' + _.content + '";'),
                  X && (ei = ei && ei.replace(/;/g, " !important;")),
                  (et = "{" + ei + "}");
              } else "string" == typeof _ && (et = _);
              "" !== et && "{}" !== et
                ? ee().style([[l, l + et]], C)
                : ee().clear(C, l);
            },
            ei = (l, _) => {
              en(l, { transform: _ });
            },
            eo,
            ea = (l, _) => {
              let C = "rgb";
              var N = void 0 !== _ && 100 !== _;
              if ((N && (C += "a"), !eo)) {
                let X = document.createElement("canvas");
                (X.height = 1),
                  (X.width = 1),
                  (eo = X.getContext("2d", { willReadFrequently: !0 }));
              }
              return (
                l ? isNaN(parseInt(l, 16)) || (l = "#" + l) : (l = "#000000"),
                eo.clearRect(0, 0, 1, 1),
                (eo.fillStyle = l),
                eo.fillRect(0, 0, 1, 1),
                (C +=
                  "(" +
                  (l = eo.getImageData(0, 0, 1, 1).data)[0] +
                  ", " +
                  l[1] +
                  ", " +
                  l[2]),
                N && (C += ", " + _ / 100),
                C + ")"
              );
            };
        },
        5004(l, _, C) {
          "use strict";
          C.d(_, { z: () => N });
          let N =
            Date.now ||
            function () {
              return new Date().getTime();
            };
        },
        2799(l, _, C) {
          "use strict";
          C.d(_, {
            A8: () => e5,
            AH: () => ey,
            EU: () => ec,
            FK: () => ed,
            IV: () => e0,
            L_: () => eg,
            P$: () => e2,
            SH: () => ev,
            UM: () => e6,
            Ww: () => eT,
            az: () => eu,
            bJ: () => el,
            cS: () => eb,
            cn: () => eh,
            gB: () => es,
            i3: () => em,
            kq: () => e3,
            nG: () => e4,
            nh: () => e$,
            oH: () => eo,
            og: () => e1,
            pv: () => ei,
            s1: () => ep,
          });
          var N = C(2957),
            X = C(6042),
            ee = C(8348);
          let et = window.DOMParser,
            en,
            er = !0,
            ei = (l, _) => l.classList.contains(_),
            eo = (l) => {
              var _ = l.querySelectorAll("script,object,iframe,meta");
              for (let C = _.length; C--; ) {
                var N = _[C];
                N.parentNode.removeChild(N);
              }
              return l;
            },
            ea =
              /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/,
            es = (l) => {
              var _ = l.attributes;
              for (let C = _.length; C--; ) {
                var N,
                  X = _[C].name;
                /^on/.test(X) && l.removeAttribute(X),
                  /href/.test(X) &&
                    ((N = _[C].value),
                    (/javascript:|javascript&colon;/.test(N) || !ea.test(N)) &&
                      (l.removeAttribute(X),
                      console.warn("Invalid or unsafe URL")));
              }
              return l;
            },
            el = (l) => {
              en ||
                ((en = new et()),
                (er = (() => {
                  try {
                    if (en.parseFromString("", "text/html")) return !0;
                  } catch (l) {}
                  return !1;
                })()));
              let _ = (
                er
                  ? en.parseFromString(l, "text/html")
                  : ((C = document.implementation.createHTMLDocument("")),
                    l.toLowerCase().indexOf("<!doctype") > -1
                      ? (C.documentElement.innerHTML = l)
                      : (C.body.innerHTML = l),
                    C)
              ).body;
              eo(_);
              var C,
                N = _.querySelectorAll("*");
              for (let X = N.length; X--; ) {
                let ee = N[X];
                es(ee);
              }
              return _;
            },
            eu = (l) => el(l).firstChild,
            ec = (l) => {
              for (; l.firstChild; ) l.removeChild(l.firstChild);
            },
            e$ = (l, _) => {
              if ((ec(l), _)) {
                var C = document.createDocumentFragment(),
                  N = el(_).childNodes;
                for (let X = 0; X < N.length; X++)
                  C.appendChild(N[X].cloneNode(!0));
                l.appendChild(C);
              }
            },
            ed = (l) => l + (l.toString().indexOf("%") > 0 ? "" : "px"),
            e_ = (l) => ((0, X.HD)(l.className) ? l.className.split(" ") : []),
            ef = (l, _) => {
              (_ = (0, N.fy)(_)), l.className !== _ && (l.className = _);
            },
            ep = (l) => l.classList || e_(l),
            eh = (l, _) => {
              let C = e_(l);
              (Array.isArray(_) ? _ : _.split(" ")).forEach(function (l) {
                (0, X.r3)(C, l) || C.push(l);
              }),
                ef(l, C.join(" "));
            },
            e0 = (l, _) => {
              var C = e_(l),
                _ = Array.isArray(_) ? _ : _.split(" ");
              ef(l, (0, X.e5)(C, _).join(" "));
            },
            eg = (l, _, C) => {
              let N = l.className || "";
              _.test(N) ? (N = N.replace(_, C)) : C && (N += " " + C), ef(l, N);
            },
            e1 = (l, _, C) => {
              var N = ei(l, _);
              (C = (0, X.jn)(C) ? C : !N) !== N && (C ? eh : e0)(l, _);
            },
            e2 = (l, _, C) => {
              l.setAttribute(_, C);
            },
            e3 = (l) => {
              var _ = document.createElement("link");
              (_.rel = "stylesheet"),
                (_.href = l),
                document.getElementsByTagName("head")[0].appendChild(_);
            },
            eb = (l) => {
              l && ec(l);
            },
            e5 = (l) => {
              var _,
                C,
                N = {
                  left: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  top: 0,
                  bottom: 0,
                };
              return (
                l &&
                  document.body.contains(l) &&
                  ((l = l.getBoundingClientRect()),
                  (_ = window.pageYOffset),
                  (C = window.pageXOffset),
                  l.width || l.height || l.left || l.top) &&
                  ((N.left = l.left + C),
                  (N.right = l.right + C),
                  (N.top = l.top + _),
                  (N.bottom = l.bottom + _),
                  (N.width = l.right - l.left),
                  (N.height = l.bottom - l.top)),
                N
              );
            },
            ev = (l, _) => {
              l.insertBefore(_, l.firstChild);
            },
            ey = (l) => l.nextElementSibling,
            em = (l) => l.previousElementSibling,
            e4 = (l, _, C = {}, N = document) => {
              if (ea.test(l)) {
                let X = N.createElement("a");
                (X.href = l),
                  (X.target = _),
                  (X = es(Object.assign(X, C))),
                  ee.Browser.firefox
                    ? X.dispatchEvent(
                        new MouseEvent("click", {
                          bubbles: !0,
                          cancelable: !0,
                          view: window,
                        })
                      )
                    : X.click();
              }
            },
            e6 = () => {
              var l = window.screen.orientation;
              return (
                (!!l &&
                  ("landscape-primary" === l.type ||
                    "landscape-secondary" === l.type)) ||
                90 === window.orientation ||
                -90 === window.orientation
              );
            },
            eT = (l) => {
              var _;
              return (
                ((_ = document.createElement("textarea")).innerHTML = l),
                _.value
                  .replace(/&|<|>|"|''/gm, function (l) {
                    return "&#" + l.charCodeAt(0) + ";";
                  })
                  .replace(
                    /&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim,
                    "<$1$2>"
                  )
              );
            };
        },
        4429(l, _, C) {
          "use strict";
          C.d(_, { Z: () => e$ });
          var _ = C(1569),
            N = C(7034),
            X = C(9888),
            ee = C(2957),
            et = C(7411),
            en = C(4742);
          function er(l, _) {
            (this.name = l),
              (this.message = _.message || _.toString()),
              (this.error = _);
          }
          var ei = C(6042),
            eo = C(2268),
            ea = C(2799),
            es = C(974),
            el = C(6886),
            eu = C(1261),
            ec = C(5499),
            C = C(6234);
          let e$ = Object.assign({}, X, N, _, {
            addClass: ea.cn,
            hasClass: ea.pv,
            removeClass: ea.IV,
            replaceClass: ea.L_,
            toggleClass: ea.og,
            classList: ea.s1,
            styleDimension: ea.FK,
            createElement: ea.az,
            emptyElement: ea.EU,
            addStyleSheet: ea.kq,
            bounds: ea.A8,
            openLink: ea.nG,
            replaceInnerHtml: ea.nh,
            css: es.iv,
            clearCss: es.oI,
            style: es.oB,
            transform: es.vs,
            getRgba: es.HY,
            ajax: el.h,
            crossdomain(l) {
              var _ = window.URL;
              try {
                var C = new _(l, location.origin);
                return (
                  location.protocol + "//" + location.host !=
                  C.protocol + "//" + C.host
                );
              } catch (N) {}
              return !0;
            },
            tryCatch: function (l, _, C = []) {
              if (en.Z.debug) return l.apply(_ || this, C);
              try {
                return l.apply(_ || this, C);
              } catch (N) {
                return new er(l.name, N);
              }
            },
            Error: er,
            Timer: et.Z,
            log: ec.c,
            genId: C.B,
            between: eu.v,
            foreach: function (l, _) {
              for (let C in l)
                (function (l, _) {
                  if (null == l)
                    throw TypeError(
                      "Cannot convert undefined or null to object"
                    );
                  return Object.prototype.hasOwnProperty.call(Object(l), _);
                })(l, C) && _(C, l[C]);
            },
            flashVersion: eo.dI,
            isIframe: eo.cL,
            indexOf: ei.cq,
            trim: ee.fy,
            pad: ee.vk,
            extension: ee.AO,
            hms: ee.WZ,
            seconds: ee.m9,
            prefix: ee.O4,
            suffix: ee.uA,
            noop() {},
          });
        },
        7543(l, _, C) {
          "use strict";
          C.d(_, { C: () => N });
          let N = (l) =>
            !!(l = l || window.event) &&
            Boolean(l) &&
            /^(?:mouse|pointer|touch|gesture|click|key)/.test(l.type);
        },
        8518(l, _, C) {
          "use strict";
          C.d(_, {
            Cq: () => eu,
            Dq: () => eg,
            G3: () => e$,
            Mh: () => e2,
            Pm: () => eh,
            dl: () => e0,
            id: () => el,
            q2: () => ef,
            t6: () => e_,
            tK: () => es,
          });
          var _ = C(6042),
            N = C(2268),
            X = C(6886),
            ee = C(7034),
            et = C(696);
          let en = {},
            er = {
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
              nb: "Bokm\xe5l",
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
              vo: "Volap\xfck",
              wa: "Walloon",
              wo: "Wolof",
              xh: "Xhosa",
              yi: "Yiddish",
              yo: "Yoruba",
              za: "Zhuang",
              zh: "Chinese",
              zu: "Zulu",
            },
            ei = (0, _.U_)(er),
            eo = (l) => l.toLowerCase().replace("-", "_"),
            ea = (l) => {
              var l = eo(l),
                _ = l.indexOf("_");
              return -1 === _ ? l : l.substring(0, _);
            },
            es = (l) =>
              l
                ? Object.keys(l).reduce((_, C) => ((_[eo(C)] = l[C]), _), {})
                : {},
            el = (l) => {
              if (l) return (3 !== l.length && er[ea(l)]) || l;
            },
            eu = (l) => ei[l] || "",
            ec = (l) =>
              (l = l.querySelector("html")) ? l.getAttribute("lang") : null,
            e$ = function () {
              if ("string" == typeof e$.mock_) return e$.mock_;
              let l = ec(document);
              if (!l && (0, N.cL)())
                try {
                  l = ec(window.top.document);
                } catch (_) {}
              return l || navigator.language || "en";
            };
          e$.mock_ = null;
          let ed = [
              "ar",
              "da",
              "de",
              "el",
              "es",
              "fi",
              "fr",
              "he",
              "id",
              "it",
              "ja",
              "ko",
              "nb",
              "nl",
              "nn",
              "no",
              "oc",
              "pt",
              "ro",
              "ru",
              "sl",
              "sv",
              "th",
              "tr",
              "vi",
              "zh",
            ],
            e_ = (l) =>
              8207 === l.charCodeAt(0) ||
              /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(l),
            ef = function (l) {
              return "boolean" == typeof ef.mock_
                ? ef.mock_
                : ed.indexOf(ea(l)) >= 0;
            };
          ef.mock_ = null;
          let ep = (l, _, C) => {
              (_ = l[C] || _[C]) && (l[C] = _);
            },
            eh = (l, _, C) =>
              Object.assign(
                {},
                ((l) => {
                  var {
                      advertising: _,
                      related: C,
                      sharing: N,
                      abouttext: X,
                    } = l,
                    ee = Object.assign({}, l.localization);
                  _ &&
                    ((ee.advertising = ee.advertising || {}),
                    ep(ee.advertising, _, "admessage"),
                    ep(ee.advertising, _, "cuetext"),
                    ep(ee.advertising, _, "loadingAd"),
                    ep(ee.advertising, _, "podmessage"),
                    ep(ee.advertising, _, "skipmessage"),
                    ep(ee.advertising, _, "skiptext")),
                    "string" == typeof ee.related
                      ? (ee.related = { heading: ee.related })
                      : (ee.related = ee.related || {}),
                    C && ep(ee.related, C, "autoplaymessage"),
                    N &&
                      ((ee.sharing = ee.sharing || {}),
                      ep(ee.sharing, N, "heading"),
                      ep(ee.sharing, N, "copied")),
                    X && ep(ee, l, "abouttext");
                  var _ = ee.close || ee.nextUpClose;
                  return _ && (ee.close = _), ee;
                })(l),
                _[ea(C)],
                _[eo(C)]
              ),
            e0 = function (l) {
              return "boolean" == typeof e0.mock_
                ? e0.mock_
                : (0, ee.isDeepKeyCompliant)(
                    et.Z,
                    l,
                    (l, _) => "string" == typeof _[l]
                  );
            };
          e0.mock_ = null;
          let eg = function (l, _) {
            if ("function" == typeof eg.mock_) return eg.mock_;
            let C = en[_];
            if (!C) {
              let N =
                l +
                "translations/" +
                ((l = ea(_)), /^n[bn]$/.test(l) ? "no" : l) +
                ".json";
              en[_] = C = new Promise((l, C) => {
                (0, X.h)({
                  url: N,
                  oncomplete: l,
                  onerror(l, N, X, ee) {
                    (en[_] = null), C(ee);
                  },
                  responseType: "json",
                });
              });
            }
            return C;
          };
          eg.mock_ = null;
          let e1 = (l, _, C, N) => {
              l[_] = Object.assign({}, C[_], N[_]);
            },
            e2 = (l, _) => {
              var C = Object.assign({}, l, _);
              return (
                e1(C, "errors", l, _),
                e1(C, "related", l, _),
                e1(C, "sharing", l, _),
                e1(C, "advertising", l, _),
                e1(C, "shortcuts", l, _),
                e1(C, "captionsStyles", l, _),
                C
              );
            };
        },
        5499(l, _, C) {
          "use strict";
          C.d(_, { c: () => N });
          let N =
            "function" == typeof console.log
              ? console.log.bind(console)
              : () => {};
        },
        1261(l, _, C) {
          "use strict";
          C.d(_, { v: () => N });
          let N = function (l, _, C) {
            return Math.max(Math.min(l, C), _);
          };
        },
        9888(l, _, C) {
          "use strict";
          C.r(_),
            C.d(_, {
              getAbsolutePath: () => et,
              isAbsolutePath: () => ee,
              parseDimension: () => ei,
              parseXML: () => en,
              serialize: () => er,
              timeFormat: () => eo,
              timeFormatAria: () => ea,
            });
          var N = C(6042),
            X = C(5950);
          let ee = (l) => /^(?:(?:https?|file):)?\/\//.test(l),
            et = (l, _) => (0, X.kd)(l, _),
            en = (l) => {
              let _ = null;
              try {
                (_ = new window.DOMParser().parseFromString(
                  l,
                  "text/xml"
                )).querySelector("parsererror") && (_ = null);
              } catch (C) {}
              return _;
            },
            er = (l) => {
              if (void 0 === l) return null;
              if ("string" == typeof l && l.length < 6) {
                var _ = l.toLowerCase();
                if ("true" === _) return !0;
                if ("false" === _) return !1;
                if (!(0, N.i2)(Number(l)) && !(0, N.i2)(parseFloat(l)))
                  return Number(l);
              }
              return l;
            },
            ei = (l) =>
              (0, N.qh)(l)
                ? l
                : "" === l
                  ? 0
                  : l.lastIndexOf("%") > -1
                    ? l
                    : parseInt(l.replace("px", ""), 10),
            eo = (l, _) =>
              ((0, N.i2)(l) && (l = parseInt(l.toString(), 10)),
              (0, N.i2)(l) || !isFinite(l) || (l <= 0 && !_))
                ? "00:00"
                : (_ = l < 0 ? "-" : "") +
                  ((_ = Math.floor((l = Math.abs(l)) / 3600)) ? _ + ":" : "") +
                  ((_ = Math.floor((l - 3600 * _) / 60)) < 10 ? "0" : "") +
                  _ +
                  ":" +
                  ((_ = Math.floor(l % 60)) < 10 ? "0" : "") +
                  _,
            ea = (l) => {
              var _;
              return ((0, N.i2)(l) && (l = parseInt(l.toString(), 10)),
              (0, N.i2)(l) || !isFinite(l) || l <= 0)
                ? "0 seconds"
                : ((_ = Math.floor(l / 3600))
                    ? _ + (_ >= 1 ? " hour" + (_ > 1 ? "s" : "") + ", " : "")
                    : "") +
                    ((_ = Math.floor((l - 3600 * _) / 60))
                      ? _ +
                        (_ >= 1 ? " minute" + (_ > 1 ? "s" : "") + ", " : "")
                      : "") +
                    (_ = Math.floor(l % 60)) +
                    (_ >= 1 ? " second" + (_ > 1 ? "s" : "") : "");
            };
        },
        1569(l, _, C) {
          "use strict";
          C.r(_),
            C.d(_, {
              getScriptPath: () => ee,
              loadFrom: () => er,
              repo: () => et,
              versionCheck: () => en,
            });
          var N = C(6601),
            X = C(7034);
          let ee = function (l) {
              var _ = document.getElementsByTagName("script");
              for (let C = 0; C < _.length; C++) {
                var N = _[C].src;
                if (N) {
                  var X = N.lastIndexOf("/" + l);
                  if (X >= 0) return N.substr(0, X + 1);
                }
              }
              return "";
            },
            et = function () {
              var l = "//ssl.p.jwpcdn.com/player/v/8.33.2";
              return ((0, X.isFileProtocol)() ? "https:" : "") + l;
            },
            en = function (l) {
              var l = ("0" + l).split(/\W/),
                _ = N.i.split(/\W/),
                C = parseFloat(l[0]),
                X = parseFloat(_[0]);
              return (
                !(X < C) &&
                (C !== X || !(parseFloat("0" + l[1]) > parseFloat(_[1])))
              );
            },
            er = function () {
              return et();
            };
        },
        6234(l, _, C) {
          "use strict";
          C.d(_, { B: () => X, F: () => N });
          let N = 12,
            X = (l) => {
              let _ = "";
              for (; _.length < l; )
                _ += (() => {
                  try {
                    var l = window.crypto || window.msCrypto;
                    if (null != l && l.getRandomValues)
                      return l
                        .getRandomValues(new Uint32Array(1))[0]
                        .toString(36);
                  } catch (_) {}
                  return Math.random().toString(36).slice(2, 9);
                })();
              return _.slice(0, l);
            };
        },
        1776(l, _, C) {
          "use strict";
          C.d(_, { U: () => N, W: () => X });
          let N = window.requestAnimationFrame || ((l) => setTimeout(l, 17)),
            X = window.cancelAnimationFrame || clearTimeout;
        },
        676(l, _, C) {
          "use strict";
          C.d(_, { ZP: () => et });
          var _ = C(328),
            N = C(1643);
          function X(l, _, C) {
            let X = this,
              et = 0,
              en = (l) => {
                (et = 2), X.trigger(N.pn, l).off();
              },
              er = (l) => {
                (et = 3), X.trigger(N.xQ, l).off();
              };
            (this.getStatus = function () {
              return et;
            }),
              (this.load = function () {
                let N = ee[l];
                return (
                  0 === et &&
                    (N && N.then(er).catch(en),
                    (et = 1),
                    (N = new Promise((N, X) => {
                      let ee = (
                          _
                            ? (l) => {
                                var _ = document.createElement("link");
                                return (
                                  (_.type = "text/css"),
                                  (_.rel = "stylesheet"),
                                  (_.href = l),
                                  _
                                );
                              }
                            : (l, _) => {
                                var C = document.createElement("script");
                                return (
                                  (C.type = "text/javascript"),
                                  (C.charset = "utf-8"),
                                  (C.async = !0),
                                  (C.timeout = _ || 45e3),
                                  (C.src = l),
                                  C
                                );
                              }
                        )(l, C),
                        et;
                      function ei(l) {
                        eo(), en(l), X(l);
                      }
                      let eo = function () {
                        (ee.onerror = ee.onload = null), clearTimeout(et);
                      };
                      (et = setTimeout(() => {
                        ei(Error("Network timeout " + l));
                      }, 45e3)),
                        (ee.onerror = function () {
                          ei(Error("Failed to load " + l));
                        }),
                        (ee.onload = function (l) {
                          eo(), er(l), N(l);
                        });
                      var ea =
                        document.getElementsByTagName("head")[0] ||
                        document.documentElement;
                      ea.insertBefore(ee, ea.firstChild);
                    })),
                    (ee[l] = N)),
                  N
                );
              });
          }
          let ee = {};
          Object.assign(X.prototype, _.ZP);
          let et = X;
        },
        2957(l, _, C) {
          "use strict";
          C.d(_, {
            AO: () => er,
            Dc: () => en,
            O4: () => es,
            U5: () => ea,
            WZ: () => ei,
            fy: () => ee,
            m9: () => eo,
            uA: () => el,
            vk: () => et,
            zz: () => eu,
          });
          var N = C(6042);
          let X = window.parseFloat,
            ee = (l) => l.replace(/^\s+|\s+$/g, ""),
            et = (l, _, C) => {
              for (l = "" + l, C = C || "0"; l.length < _; ) l = C + l;
              return l;
            },
            en = (l, _) => {
              var C = l.attributes;
              for (let N = 0; N < C.length; N++)
                if (C[N].name && C[N].name.toLowerCase() === _.toLowerCase())
                  return C[N].value.toString();
              return "";
            },
            er = (l) => {
              var _;
              return l && "rtmp" !== l.substr(0, 4)
                ? (_ = /[(,]format=(m3u8|mpd)-/i.exec(l))
                  ? _[1]
                  : (_ = l.replace(
                        /^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/,
                        "$1"
                      )) !== l
                    ? _.toLowerCase()
                    : (l = l.split("?")[0].split("#")[0]).lastIndexOf(".") > -1
                      ? l.substr(l.lastIndexOf(".") + 1, l.length).toLowerCase()
                      : ""
                : "";
            },
            ei = (l) => {
              var _ = ((l / 60) | 0) % 60,
                C = l % 60;
              return (
                et(((l / 3600) | 0).toString(), 2) +
                ":" +
                et(_.toString(), 2) +
                ":" +
                et(C.toFixed(3), 6)
              );
            },
            eo = (l, _) => {
              if (!l) return 0;
              if ((0, N.qh)(l)) return l;
              var l = l.replace(",", "."),
                C = l.slice(-1),
                ee = l.split(":"),
                et = ee.length;
              let en = 0;
              if ("s" === C) en = X(l);
              else if ("m" === C) en = 60 * X(l);
              else if ("h" === C) en = 3600 * X(l);
              else if (et > 1) {
                let er = et - 1;
                4 === et && (_ && (en = X(ee[er]) / _), --er),
                  (en = (en += X(ee[er])) + 60 * X(ee[er - 1])),
                  et >= 3 && (en += 3600 * X(ee[er - 2]));
              } else en = X(l);
              return (0, N.qh)(en) ? en : 0;
            },
            ea = (l, _, C) => {
              if ((0, N.HD)(l) && "%" === l.slice(-1)) {
                let ee = X(l);
                return _ && (0, N.qh)(_) && (0, N.qh)(ee)
                  ? (_ * ee) / 100
                  : null;
              }
              return eo(l, C);
            },
            es = (l, _) => l.map((l) => _ + l),
            el = (l, _) => l.map((l) => l + _),
            eu = (l) => Boolean(l) && (0, N.HD)(l) && "%" === l.slice(-1);
        },
        5882(l, _, C) {
          "use strict";
          C.d(_, { GU: () => ep, ZP: () => e6, dO: () => e1 });
          var N = C(8348),
            X = C(1643),
            _ = C(328),
            ee = C(5004),
            et = C(2799);
          let en = "ontouchstart" in window,
            er = "PointerEvent" in window && !N.OS.android,
            ei = !er && (!en || !N.OS.mobile),
            eo = "window",
            ea = "init",
            es = "select",
            el = "keydown",
            eu = N.Features.passiveEvents,
            ec = !!eu && { passive: !0 },
            e$,
            ed,
            e_ = (l, _, C) => {
              let N = l.el,
                X = (() => {
                  var { target: l, touches: X, changedTouches: ee } = C;
                  let et,
                    en = C.pointerType;
                  en =
                    X || ee
                      ? ((et = (null != X && X.length ? X : ee)[0]),
                        en || "touch")
                      : ((et = C), en || "mouse");
                  var { pageX: X, pageY: ee } = et;
                  return {
                    type: _,
                    pointerType: en,
                    pageX: X,
                    pageY: ee,
                    sourceEvent: C,
                    currentTarget: N,
                    target: l,
                  };
                })();
              l.trigger(_, X);
            },
            ef = (l, _, C) => {
              var N = l.el,
                X = C.target;
              l.trigger(_, {
                type: _,
                sourceEvent: C,
                currentTarget: N,
                target: X,
              });
            },
            ep = (l) =>
              (l = l.ownerDocument || l).defaultView ||
              l.parentWindow ||
              window,
            eh = (l, _, C, N, X = ec) => {
              let ee = l.handlers[_],
                et = l.options[_];
              if (
                (ee || ((ee = l.handlers[_] = {}), (et = l.options[_] = {})),
                ee[C])
              )
                throw Error(_ + " " + C + " already registered");
              (ee[C] = N),
                (et[C] = X),
                (l = l.el),
                (_ = _ === eo ? ep(l) : l) && _.addEventListener(C, N, X);
            },
            e0 = (l) => {
              var _ = l.el;
              null !== l.pointerId &&
                (_.releasePointerCapture(l.pointerId), (l.pointerId = null));
            },
            eg = (l, _) => {
              let { el: C, handlers: N, options: X } = l,
                ee = _ === eo ? ep(C) : C,
                et = N[_],
                en = X[_];
              et &&
                (Object.keys(et).forEach((l) => {
                  var _ = en[l];
                  "boolean" == typeof _
                    ? ee.removeEventListener(l, et[l], _)
                    : ee.removeEventListener(l, et[l]);
                }),
                (N[_] = null),
                (X[_] = null));
            },
            e1 = (l) =>
              (!!Boolean(l.ctrlKey) && "click" === l.type) ||
              ("which" in l ? 3 === l.which : "button" in l && 2 === l.button),
            e2 = (l, _) => {
              if (
                ((ed = ed || new e6(document).on("interaction")),
                !l.handlers[ea] && !l.handlers[es])
              ) {
                let C = l.el;
                eh(l, _, "blur", () => {
                  (0, et.IV)(C, "jw-tab-focus"), (l.clicking = !1);
                }),
                  eh(l, _, "focus", () => {
                    ed.event &&
                      ed.event.type === el &&
                      (0, et.cn)(C, "jw-tab-focus");
                  });
              }
            },
            e3 = (l, _, C, N) => {
              er
                ? eh(l, _, "pointerdown", C, N)
                : (ei && eh(l, _, "mousedown", C, N),
                  eh(l, _, "touchstart", C, N));
            },
            eb = (l) => {
              if (!l.handlers[es]) {
                let _ = l.el;
                e2(l, es),
                  e3(l, es, (C) => {
                    var N = C.target;
                    e1(C) ||
                      (Boolean(l.directSelect) && N !== _) ||
                      (C.isPrimary && "BUTTON" === N.tagName && N.focus(),
                      (l.lastStart = (0, ee.z)()),
                      (l.clicking = !0));
                  }),
                  eh(l, es, "click", (C) => {
                    var N, et;
                    e1(C) ||
                      (Boolean(l.directSelect) && C.target !== _) ||
                      (((0, ee.z)() - l.lastStart > 500 && !0 === l.clicking) ||
                        ((et = C),
                        (N = l).enableDoubleClick &&
                          ((0, ee.z)() - N.lastClick < 300
                            ? (e_(N, X.P, et), (N.lastClick = 0))
                            : (N.lastClick = (0, ee.z)())),
                        e_(l, X.ot, C)),
                      (l.clicking = !1));
                  });
              }
            },
            e5 = (l) =>
              0 === l.type.indexOf("touch")
                ? (l.originalEvent || l).changedTouches[0]
                : l,
            ev = (l) => {
              if (!l.handlers[ea]) {
                let { el: _, passive: C } = l,
                  N = !!eu && { passive: C },
                  ee = (_) => {
                    if (l.dragged) e_(l, X.Wp, _);
                    else {
                      let { pageX: N, pageY: ee } = e5(_),
                        et = N - l.startX,
                        en = ee - l.startY;
                      et * et + en * en > 36 &&
                        (e_(l, X.nv, _), (l.dragged = !0), e_(l, X.Wp, _));
                    }
                    !C &&
                      "touchmove" === _.type &&
                      _.preventDefault &&
                      _.preventDefault();
                  },
                  en = (_) => {
                    clearTimeout(e$),
                      l.el &&
                        (e0(l), eg(l, eo), l.dragged) &&
                        ((l.dragged = !1), e_(l, X.Sv, _));
                  };
                e2(l, ea),
                  e3(
                    l,
                    ea,
                    (X) => {
                      if (((0, et.IV)(_, "jw-tab-focus"), !e1(X))) {
                        var { target: er, type: ei } = X;
                        if (!l.directSelect || er === _) {
                          var { pageX: er, pageY: ea } = e5(X);
                          if (
                            ((l.dragged = !1),
                            (l.startX = er),
                            (l.startY = ea),
                            eg(l, eo),
                            "pointerdown" === ei && X.isPrimary)
                          ) {
                            if (!C) {
                              let es = X.pointerId;
                              (l.pointerId = es), _.setPointerCapture(es);
                            }
                            eh(l, eo, "pointermove", ee, N),
                              eh(l, eo, "pointercancel", en),
                              eh(l, eo, "pointerup", en);
                          } else
                            "mousedown" === ei
                              ? (eh(l, eo, "mousemove", ee, N),
                                eh(l, eo, "mouseup", en))
                              : "touchstart" === ei &&
                                (eh(l, eo, "touchmove", ee, N),
                                eh(l, eo, "touchcancel", en),
                                eh(l, eo, "touchend", en));
                        }
                      }
                    },
                    N
                  );
              }
            },
            ey = {
              drag(l) {
                ev(l);
              },
              dragStart(l) {
                ev(l);
              },
              dragEnd(l) {
                ev(l);
              },
              click(l) {
                eb(l);
              },
              doubleClick(l) {
                (l.enableDoubleClick = !0), eb(l);
              },
              longPress(l) {
                let _ = "longPress";
                if (N.OS.iOS) {
                  let C = () => {
                    clearTimeout(e$);
                  };
                  eh(l, _, "touchstart", (N) => {
                    C(),
                      (e$ = setTimeout(() => {
                        e_(l, _, N);
                      }, 500));
                  }),
                    eh(l, _, "touchmove", C),
                    eh(l, _, "touchcancel", C),
                    eh(l, _, "touchend", C);
                } else l.el.oncontextmenu = (C) => (e_(l, _, C), !1);
              },
              focus(l) {
                let _ = "focus";
                eh(l, _, _, (C) => {
                  ef(l, _, C);
                });
              },
              blur(l) {
                let _ = "blur";
                eh(l, _, _, (C) => {
                  ef(l, _, C);
                });
              },
              over(l) {
                (er || ei) &&
                  eh(l, X.B1, er ? "pointerover" : "mouseover", (_) => {
                    "touch" !== _.pointerType && e_(l, X.B1, _);
                  });
              },
              out(l) {
                if (er) {
                  let _ = l.el;
                  eh(l, X.U3, "pointerout", (C) => {
                    var N;
                    "touch" !== C.pointerType &&
                      "clientX" in C &&
                      ((N = document.elementFromPoint(C.clientX, C.clientY)),
                      _.contains(N) || e_(l, X.U3, C));
                  });
                } else
                  ei &&
                    eh(l, X.U3, "mouseout", (_) => {
                      e_(l, X.U3, _);
                    });
              },
              move(l) {
                (er || ei) &&
                  eh(l, X.tP, er ? "pointermove" : "mousemove", (_) => {
                    "touch" !== _.pointerType && e_(l, X.tP, _);
                  });
              },
              enter(l) {
                eh(l, X.K5, el, (_) => {
                  ("Enter" === _.key || 13 === _.keyCode) &&
                    (_.stopPropagation(), ef(l, X.K5, _));
                });
              },
              keydown(l) {
                eh(
                  l,
                  el,
                  el,
                  (_) => {
                    ef(l, el, _);
                  },
                  !1
                );
              },
              gesture(l) {
                let _ = "gesture",
                  C = (C) => e_(l, _, C);
                eh(l, _, "click", C), eh(l, _, el, C);
              },
              interaction(l) {
                var _ = "interaction",
                  C = (_) => {
                    l.event = _;
                  };
                eh(l, _, "mousedown", C, !0), eh(l, _, el, C, !0);
              },
              tap() {},
              doubleTap() {},
            },
            em = /\s+/,
            e4 = (l) => l && !em.test(l) && "object" != typeof l;
          class e6 extends _.ZP {
            constructor(l, _) {
              super();
              var C = !(_ = _ || {}).preventScrolling;
              (this.directSelect = Boolean(_.directSelect)),
                (this.dragged = !1),
                (this.enableDoubleClick = !1),
                (this.el = l),
                (this.handlers = {}),
                (this.options = {}),
                (this.lastClick = 0),
                (this.lastStart = 0),
                (this.passive = C),
                (this.pointerId = null),
                (this.startX = 0),
                (this.startY = 0),
                (this.event = null),
                (this.clicking = !1);
            }
            on(l, _, C) {
              return (
                e4(l) && !this.handlers[l] && ey[l](this), super.on(l, _, C)
              );
            }
            off(l, _, C) {
              if (e4(l)) eg(this, l);
              else if (!l) {
                let N = this.handlers;
                Object.keys(N).forEach((l) => {
                  eg(this, l);
                });
              }
              return super.off(l, _, C);
            }
            destroy() {
              this.el && (this.off(), er && e0(this), (this.el = null));
            }
          }
        },
        6042(l, _, C) {
          "use strict";
          function N(l) {
            if (!em(l)) return [];
            if (eb) return eb(l);
            var _ = [];
            for (let C in l) ey(l, C) && _.push(C);
            return _;
          }
          function X(l, _, ...C) {
            if (e5 && l.bind === e5) return e5.apply(l, [_].concat(C));
            if (ew(l)) return N;
            throw TypeError();
            function N(...X) {
              if (!(this instanceof N)) return l.apply(_, C.concat(X));
              ek.prototype = l.prototype;
              var ee = new ek();
              ek.prototype = null;
              var X = l.apply(ee, C.concat(X));
              return Object(X) === X ? X : ee;
            }
          }
          function ee(l, _, C) {
            _ = _ || eH;
            let N = !0;
            return null == l
              ? N
              : eg && l.every === eg
                ? l.every(_, C)
                : (e4(l, function (l, X, ee) {
                    if (!(N = N && _.call(C, l, X, ee))) return ea;
                  }),
                  Boolean(N));
          }
          function et(l, _) {
            let C;
            return function (...N) {
              return --l > 0 && (C = _.apply(this, N)), l <= 1 && (_ = null), C;
            };
          }
          function en(l) {
            return null == l ? eH : ew(l) ? l : ez(l);
          }
          function er(l) {
            return function (_, C, N) {
              let X = {};
              return (
                (C = en(C)),
                e4(_, function (ee, et) {
                  l(X, (et = C.call(N, ee, et, _)), ee);
                }),
                X
              );
            };
          }
          function ei(l, ..._) {
            return function (...C) {
              let N = 0;
              var X = _.slice();
              for (let ee = 0, et = X.length; ee < et; ee++)
                ey(X[ee], "partial") && (X[ee] = C[N++]);
              for (; N < arguments.length; ) X.push(C[N++]);
              return l.apply(this, X);
            };
          }
          function eo(l, _, ...C) {
            return setTimeout(function () {
              return l.apply(null, C);
            }, _);
          }
          C.d(_, {
            Cb: () => ez,
            HD: () => eA,
            Kn: () => em,
            P2: () => to,
            S6: () => e4,
            UI: () => eM,
            U_: () => ta,
            Yj: () => eD,
            ZP: () => td,
            _e: () => te,
            a9: () => tc,
            ar: () => eJ,
            ce: () => ts,
            cq: () => eK,
            dp: () => eF,
            e1: () => eZ,
            e5: () => tt,
            ei: () => tu,
            hX: () => eO,
            hj: () => eP,
            i2: () => eC,
            jn: () => eW,
            l7: () => tl,
            mf: () => ew,
            o8: () => eX,
            qh: () => t$,
            r3: () => eQ,
            sE: () => eL,
            u4: () => eB,
            vM: () => eq,
            wB: () => eY,
            xV: () => eV,
            yR: () => eH,
          }),
            (_ = C(5004));
          let ea = {},
            es = Array.prototype,
            el = Object.prototype,
            eu = Function.prototype,
            ec = es.slice,
            e$ = es.concat,
            ed = el.toString,
            e_ = el.hasOwnProperty,
            ef = es.map,
            ep = es.reduce,
            eh = es.forEach,
            e0 = es.filter,
            eg = es.every,
            e1 = es.some,
            e2 = es.indexOf,
            e3 = Array.isArray,
            eb = Object.keys,
            e5 = eu.bind,
            ev = window.isFinite,
            ey = function (l, _) {
              return e_.call(l, _);
            },
            em = function (l) {
              return l === Object(l);
            },
            e4 = function (l, _, C) {
              let X, ee;
              if (null != l) {
                if (eh && l.forEach === eh) l.forEach(_, C);
                else if (l.length === Number(l.length)) {
                  for (X = 0, ee = l.length; X < ee; X++)
                    if (_.call(C, l[X], X, l) === ea) return;
                } else {
                  var et = N(l);
                  for (X = 0, ee = et.length; X < ee; X++)
                    if (_.call(C, l[et[X]], et[X], l) === ea) return;
                }
              }
              return l;
            },
            e6 = e4,
            eT = [];
          e4(["Function", "String", "Number", "Date", "RegExp"], function (l) {
            eT[l] = function (_) {
              return ed.call(_) == "[object " + l + "]";
            };
          });
          let eS = eT.Date,
            e7 = eT.RegExp,
            ew = eT.Function,
            eP = eT.Number,
            eA = eT.String,
            e8 =
              e3 ||
              function (l) {
                return "[object Array]" == ed.call(l);
              },
            eC = function (l) {
              return eP(l) && l != Number(l);
            },
            eM = function (l, _, C) {
              let N = [];
              return null == l
                ? N
                : ef && l.map === ef
                  ? l.map(_, C)
                  : (e4(l, function (l, X, ee) {
                      N.push(_.call(C, l, X, ee));
                    }),
                    N);
            },
            ex = eM,
            ek = function () {},
            eB = function (l, _, C, N) {
              let ee = arguments.length > 2;
              if ((null == l && (l = []), ep && l.reduce === ep))
                return (N && (_ = X(_, N)), ee) ? l.reduce(_, C) : l.reduce(_);
              if (
                (e4(l, function (l, X, et) {
                  ee ? (C = _.call(N, C, l, X, et)) : ((C = l), (ee = !0));
                }),
                ee)
              )
                return C;
              throw TypeError("Reduce of empty array with no initial value");
            },
            eE = eB,
            eG = eB,
            eH = function (l) {
              return l;
            },
            eD = function (l, _, C) {
              _ = _ || eH;
              let N = !1;
              return null == l
                ? N
                : e1 && l.some === e1
                  ? l.some(_, C)
                  : (e4(l, function (l, X, ee) {
                      if ((N = N || _.call(C, l, X, ee))) return ea;
                    }),
                    Boolean(N));
            },
            eI = eD,
            eL = function (l, _, C) {
              let N;
              return (
                eD(l, function (l, X, ee) {
                  if (_.call(C, l, X, ee)) return (N = l), !0;
                }),
                N
              );
            },
            eN = eL,
            eO = function (l, _, C) {
              let N = [];
              return null == l
                ? N
                : e0 && l.filter === e0
                  ? l.filter(_, C)
                  : (e4(l, function (l, X, ee) {
                      _.call(C, l, X, ee) && N.push(l);
                    }),
                    N);
            },
            ej = eO,
            eR = ee,
            eF = function (l) {
              return null == l
                ? 0
                : (l.length === Number(l.length) ? l : N(l)).length;
            };
          eT.Function = function (l) {
            return "function" == typeof l;
          };
          let eV = function (l) {
              return ev(l) && !eC(parseFloat(l));
            },
            eW = function (l) {
              return !0 === l || !1 === l || "[object Boolean]" == ed.call(l);
            },
            eX = function (l) {
              return void 0 === l;
            },
            ez = function (l) {
              return function (_) {
                return _[l];
              };
            },
            eq = er(function (l, _, C) {
              ey(l, _) ? l[_].push(C) : (l[_] = [C]);
            }),
            eU = er(function (l, _, C) {
              l[_] = C;
            }),
            eZ = function (l, _, C, N) {
              var X = (C = en(C)).call(N, _);
              let ee = 0,
                et = l.length;
              for (; ee < et; ) {
                let er = (ee + et) >>> 1;
                C.call(N, l[er]) < X ? (ee = 1 + er) : (et = er);
              }
              return ee;
            },
            eK = function (l, _, C) {
              if (null != l) {
                let N = 0;
                var X = l.length;
                if (C) {
                  if ("number" != typeof C)
                    return l[(N = eZ(l, _))] === _ ? N : -1;
                  N = C < 0 ? Math.max(0, X + C) : C;
                }
                if (e2 && l.indexOf === e2) return l.indexOf(_, C);
                for (; N < X; N++) if (l[N] === _) return N;
              }
              return -1;
            },
            eQ = function (l, _) {
              return (
                null != l &&
                (l.length !== Number(l.length) &&
                  (l = (function (l) {
                    var _ = N(l),
                      C = N.length,
                      X = Array(C);
                    for (let ee = 0; ee < C; ee++) X[ee] = l[_[ee]];
                    return X;
                  })(l)),
                eK(l, _) >= 0)
              );
            },
            e9 = eQ,
            eY = function (l) {
              return function (_) {
                if (_ !== l) {
                  for (let C in l) if (l[C] !== _[C]) return !1;
                }
                return !0;
              };
            },
            eJ = function (l, _) {
              return eO(l, eY(_));
            },
            te = function (l, _) {
              return eL(l, eY(_));
            },
            tt = function (l, ..._) {
              let C = e$.apply(es, _);
              return eO(l, function (l) {
                return !eQ(C, l);
              });
            },
            tn = ei(et, 2),
            tr = ei(eo, { partial: ei }, 1),
            ti = _.z,
            to = function (l, _, C) {
              let N,
                X,
                ee,
                et = null,
                en = 0;
              function er() {
                (en = !1 === C.leading ? 0 : ti()),
                  (et = null),
                  (ee = l.apply(N, X)),
                  (N = X = null);
              }
              return (
                (C = C || {}),
                function (...ei) {
                  var eo = ti();
                  en || !1 !== C.leading || (en = eo);
                  var ea = _ - (eo - en);
                  return (
                    (N = this),
                    (X = ei),
                    ea <= 0
                      ? (clearTimeout(et),
                        (et = null),
                        (en = eo),
                        (ee = l.apply(N, X)),
                        (N = X = null))
                      : et || !1 === C.trailing || (et = setTimeout(er, ea)),
                    ee
                  );
                }
              );
            },
            ta = function (l) {
              var _ = {},
                C = N(l);
              for (let X = 0, ee = C.length; X < ee; X++) _[l[C[X]]] = C[X];
              return _;
            },
            ts = function (l, ..._) {
              return (
                e4(_, function (_) {
                  if (_) for (let C in _) void 0 === l[C] && (l[C] = _[C]);
                }),
                l
              );
            },
            tl =
              Object.assign ||
              function (l, ..._) {
                return (
                  e4(_, function (_) {
                    if (_)
                      for (let C in _)
                        (function (l, _) {
                          if (null == l)
                            throw TypeError(
                              "Cannot convert undefined or null to object"
                            );
                          return Object.prototype.hasOwnProperty.call(
                            Object(l),
                            _
                          );
                        })(_, C) && (l[C] = _[C]);
                  }),
                  l
                );
              },
            tu = function (l, ..._) {
              let C = {};
              return (
                e4((_ = [].concat(..._)), function (_) {
                  _ in l && (C[_] = l[_]);
                }),
                C
              );
            },
            tc = function (l) {
              return function () {
                return l;
              };
            },
            t$ = (l) => eP(l) && !eC(l),
            td = {
              after: function (l, _) {
                return function (...C) {
                  if (--l < 1) return _.apply(this, C);
                };
              },
              all: ee,
              any: eD,
              before: et,
              bind: X,
              clone: function (l) {
                return em(l) ? (e8(l) ? l.slice() : tl({}, l)) : l;
              },
              collect: ex,
              compact: function (l) {
                return eO(l, eH);
              },
              constant: tc,
              contains: eQ,
              debounce(l, _ = 100) {
                let C;
                return function (...N) {
                  clearTimeout(C),
                    (C = setTimeout(() => {
                      l.apply(this, N);
                    }, _));
                };
              },
              defaults: ts,
              defer: tr,
              delay: eo,
              detect: eN,
              difference: tt,
              each: e4,
              every: eR,
              extend: tl,
              filter: eO,
              find: eL,
              findWhere: te,
              foldl: eE,
              forEach: e6,
              groupBy: eq,
              has: ey,
              identity: eH,
              include: e9,
              indexBy: eU,
              indexOf: eK,
              inject: eG,
              invert: ta,
              isArray: e8,
              isBoolean: eW,
              isDate: eS,
              isFinite: eV,
              isFunction: ew,
              isNaN: eC,
              isNull: function (l) {
                return null === l;
              },
              isNumber: eP,
              isObject: em,
              isRegExp: e7,
              isString: eA,
              isUndefined: eX,
              isValidNumber: t$,
              keys: N,
              last: function (l, _, C) {
                if (null != l)
                  return null == _ || C
                    ? l[l.length - 1]
                    : ec.call(l, Math.max(l.length - _, 0));
              },
              map: eM,
              matches: eY,
              max: function (l, _, C) {
                if (!_ && e8(l) && l[0] === Number(l[0]) && l.length < 65535)
                  return Math.max(...l);
                let N = -1 / 0,
                  X = -1 / 0;
                return (
                  e4(l, function (l, ee, et) {
                    (ee = _ ? _.call(C, l, ee, et) : l) > X &&
                      ((N = l), (X = ee));
                  }),
                  N
                );
              },
              memoize: function (l, _) {
                let C = {};
                return (
                  (_ = _ || eH),
                  function (...N) {
                    var X = _.apply(this, N);
                    return ey(C, X) ? C[X] : (C[X] = l.apply(this, N));
                  }
                );
              },
              now: ti,
              omit: function (l, ..._) {
                var C = {};
                for (let N in l) eQ(_, N) || (C[N] = l[N]);
                return C;
              },
              once: tn,
              partial: ei,
              pick: tu,
              pluck: function (l, _) {
                return eM(l, ez(_));
              },
              property: ez,
              propertyOf: function (l) {
                return null == l
                  ? function () {}
                  : function (_) {
                      return l[_];
                    };
              },
              reduce: eB,
              reject: function (l, _, C) {
                return eO(
                  l,
                  function (l, N, X) {
                    return !_.call(C, l, N, X);
                  },
                  C
                );
              },
              result: function (l, _) {
                if (null != l) return ew((_ = l[_])) ? _.call(l) : _;
              },
              select: ej,
              size: eF,
              some: eI,
              sortedIndex: eZ,
              throttle: to,
              where: eJ,
              without: function (l, ..._) {
                return tt(l, _);
              },
            };
        },
        5950(l, _, C) {
          "use strict";
          C.d(_, {
            O9: () => et,
            _N: () => ee,
            kd: () => ei,
            ke: () => en,
            vl: () => X,
          });
          let N = /^[^:/?#]+:?\/\/[^/?#]+/,
            X = function (l) {
              if (!l) return {};
              var _,
                C = ((l) => {
                  if (l) return new URL(l, window.location);
                })(l),
                N = {};
              for (let X of C.searchParams.keys())
                N[X] ||
                  ((_ = C.searchParams.getAll(X)),
                  (N[X] = 1 === _.length ? _[0] : _));
              return N;
            },
            ee = function (l) {
              return !l ||
                ((l = new URLSearchParams(l).get("jw_start") || -1),
                isNaN(l)) ||
                l < -1
                ? -1
                : Number(l);
            },
            et = function (l, _ = "{seek_to_second_number}") {
              if (l) {
                (l = new URL(l)).searchParams.set("jw_start", "");
                let C;
                return l.toString().replace(/jw_start=?/i, "jw_start=" + _);
              }
            },
            en = (l, _) => {
              if (l) return new URLSearchParams(l).has(_);
            },
            er = (l) => !!l && null !== l.match(N),
            ei = (l, _) =>
              ((_ = _ || document.location.href), l && er(_))
                ? er(l)
                  ? l
                  : new URL(l, _).toString()
                : "";
        },
        7034(l, _, C) {
          "use strict";
          C.r(_),
            C.d(_, {
              exists: () => X,
              isDeepKeyCompliant: () => eo,
              isFileProtocol: () => et,
              isHTTPS: () => ee,
              isRtmp: () => en,
              isYouTube: () => er,
              typeOf: () => ei,
            });
          let N = window.location.protocol,
            X = (l) => {
              switch (typeof l) {
                case "string":
                  return l.length > 0;
                case "object":
                  return null !== l;
                case "undefined":
                  return !1;
                default:
                  return !0;
              }
            },
            ee = () => "https:" === N,
            et = () => "file:" === N,
            en = (l, _) => 0 === l.indexOf("rtmp:") || "rtmp" === _,
            er = (l, _) =>
              "youtube" === _ ||
              /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(l),
            ei = (l) => {
              var _;
              return null === l
                ? "null"
                : "object" == (_ = typeof l) && Array.isArray(l)
                  ? "array"
                  : _;
            },
            eo = (l, _, C) => {
              var N = Object.keys(l);
              return (
                Object.keys(_).length >= N.length &&
                N.every((N) => {
                  var X = l[N],
                    ee = _[N];
                  return X && "object" == typeof X
                    ? !!ee && "object" == typeof ee && eo(X, ee, C)
                    : C(N, l);
                })
              );
            };
        },
        9025(l, _, C) {
          "use strict";
          C.d(_, { Z: () => N });
          let N = document.createElement("video");
        },
        6601(l, _, C) {
          "use strict";
          C.d(_, { i: () => N });
          let N =
            "8.33.2+commercial_master.561.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.7.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.3.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
        },
        4225(l, _, C) {
          "use strict";
          C.d(_, {
            Z: () =>
              function (l, _) {
                var { message: _, code: C } = _,
                  _ = N(
                    l.get("id"),
                    _,
                    l.get("localization").errors.errorCode,
                    C.toString()
                  ),
                  C = l.get("width"),
                  l = l.get("height"),
                  _ = (0, X.az)(_);
                return (
                  (0, ee.oB)(_, {
                    width: C.toString().indexOf("%") > 0 ? C : C + "px",
                    height: l.toString().indexOf("%") > 0 ? l : l + "px",
                  }),
                  _
                );
              },
          });
          let N = (l, _, C, N) =>
            '<div id="' +
            l +
            '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' +
            l +
            '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' +
            l +
            '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' +
            l +
            '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' +
            (_ || "") +
            '<span class="jw-break jw-reset"></span>' +
            (N ? ("(" + C + ": " + N + ")").replace(/\s+/g, "&nbsp;") : "") +
            "</div></div></div></div>";
          var X = C(2799),
            ee = C(974);
        },
        9926(l, _, C) {
          "use strict";
          C.d(_, { Z: () => ei });
          var N = C(1776),
            X = C(2799),
            ee = C(974);
          let et = [],
            en = -1,
            er = () => {
              (0, N.W)(en),
                (en = (0, N.U)(() => {
                  et.forEach((l) => {
                    l.view.updateBounds();
                    var _ = l.view.model.get("containerWidth");
                    (l.resized = l.width !== _), (l.width = _);
                  }),
                    et.forEach((l) => {
                      l.contractElement.scrollLeft = 2 * l.width;
                    }),
                    et.forEach((l) => {
                      (0, ee.oB)(l.expandChild, { width: l.width + 1 }),
                        l.resized &&
                          l.view.model.get("visibility") &&
                          l.view.updateStyles();
                    }),
                    et.forEach((l) => {
                      l.expandElement.scrollLeft = l.width + 1;
                    }),
                    et.forEach((l) => {
                      l.resized && l.view.checkResized();
                    });
                }));
            };
          class ei {
            constructor(l, _, C) {
              var N = {
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                en = { width: "100%", height: "100%" },
                ei = (0, X.az)(
                  '<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'
                ),
                eo = ei.firstChild,
                ea = eo.firstChild,
                es = eo.nextSibling;
              (0, ee.oB)([eo, es], Object.assign({ overflow: "auto" }, N, en)),
                (0, ee.oB)(ei, Object.assign({}, N, en)),
                (this.expandElement = eo),
                (this.expandChild = ea),
                (this.contractElement = es),
                (this.hiddenElement = ei),
                (this.element = l),
                (this.view = _),
                (this.model = C),
                (this.width = 0),
                (this.resized = !1),
                l.firstChild
                  ? l.insertBefore(ei, l.firstChild)
                  : l.appendChild(ei),
                l.addEventListener("scroll", er, !0),
                et.push(this),
                er();
            }
            destroy() {
              var l;
              this.view &&
                (-1 !== (l = et.indexOf(this)) && et.splice(l, 1),
                this.element.removeEventListener("scroll", er, !0),
                this.element.removeChild(this.hiddenElement),
                (this.view = this.model = null));
            }
          }
        },
        4671(l, _, C) {
          "use strict";
          C.d(_, { Z: () => eu });
          var N = C(6875);
          let X = [],
            ee = [],
            et = [],
            en = {},
            er,
            ei = !1,
            eo = (l, _) => {
              for (let C = _.length; C--; ) {
                var N = _[C];
                if (l.target === N.getContainer()) {
                  N.setIntersection(l);
                  break;
                }
              }
            },
            ea = () => {
              X.forEach((l) => {
                l.model.set("activeTab", (0, N.Z)());
              });
            },
            es = (l, _) => {
              -1 !== (l = _.indexOf(l)) && _.splice(l, 1);
            },
            el = (l) => {
              et.forEach((_) => {
                _(l);
              });
            };
          document.addEventListener("visibilitychange", ea),
            document.addEventListener("webkitvisibilitychange", ea);
          let eu = {
            add(l) {
              X.push(l);
            },
            remove(l) {
              es(l, X),
                document.removeEventListener("visibilitychange", ea),
                document.removeEventListener("webkitvisibilitychange", ea),
                window.removeEventListener("scroll", el);
            },
            addScrollHandler(l) {
              ei || ((ei = !0), window.addEventListener("scroll", el)),
                et.push(l);
            },
            removeScrollHandler(l) {
              -1 !== (l = et.indexOf(l)) && et.splice(l, 1);
            },
            addWidget(l) {
              ee.push(l);
            },
            removeWidget(l) {
              es(l, ee);
            },
            size: () => X.length,
            observe(l) {
              var _;
              (_ = window.IntersectionObserver),
                (er =
                  er ||
                  new _(
                    (l) => {
                      if (null != l && l.length)
                        for (let _ = l.length; _--; ) {
                          var C = l[_];
                          eo(C, X), eo(C, ee);
                        }
                    },
                    {
                      threshold: [
                        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
                      ],
                    }
                  )),
                en[l.id] || ((en[l.id] = !0), er.observe(l));
            },
            unobserve(l) {
              er && en[l.id] && (delete en[l.id], er.unobserve(l));
            },
          };
        },
        2445(l, _, C) {
          "use strict";
          C.d(_, { ZP: () => ef, qG: () => e_ });
          var N = C(5083),
            X = C(1569),
            ee = C(6042),
            et = C(7034),
            en = C(6577),
            er = C(6599),
            ei = C(386);
          let eo = "__CONTEXTUAL__",
            ea = (l, _) => {
              if ((l = l.querySelector(_))) return l.getAttribute("content");
            };
          var _ = C(4737),
            es = C.n(_),
            el = C(67),
            eu = C(3487);
          let ec = (l) =>
              "string" == typeof l &&
              /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(l),
            e$ = (l) => "https:" + l,
            ed = (l, _, C) => {
              _ && delete (l[_.client || eu.sb(C)] = _).client;
            },
            e_ = (l) => {
              let _ = Object.assign({}, l.plugins),
                C = (0, ei.Z)(l.edition);
              if (C("ads")) {
                let N = Object.assign({}, l.advertising),
                  X = N.client;
                X && delete (_[eu.sb(X) || X] = N).client,
                  N.bids && ed(_, N.bids, "bidding");
              }
              if (C("jwpsrv")) {
                let ee = l.analytics;
                ee !== Object(ee) && (ee = {}), ed(_, ee, "jwpsrv");
              }
              return (
                ed(_, l.ga, "gapro"),
                ed(_, l.interactive, "interactive"),
                ed(_, l.keepWatching, "keepWatching"),
                _
              );
            },
            ef = function (l, _) {
              let eu = (0, N.ZP)(l, _);
              var ed,
                ef,
                ep,
                eh,
                e0,
                eg,
                e1,
                e2,
                e3,
                eb,
                l = eu.key || en.default.key,
                _ = new er.ZP(l),
                e5 = _.edition();
              if (
                (((eu =
                  "free" === _.edition()
                    ? Object.assign(
                        {
                          skin: {
                            active: "#ff0046",
                            timeslider: { progress: "none" },
                          },
                          logo: { position: "control-bar", file: es() },
                        },
                        N.ke,
                        (0, ee.ei)(eu, [
                          "analytics",
                          "aspectratio",
                          "base",
                          "file",
                          "height",
                          "playlist",
                          "sources",
                          "timeSlider",
                          "width",
                        ])
                      )
                    : eu).key = l),
                (eu.edition = e5),
                (eu.error = _.error()),
                (eu.generateSEOMetadata = eu.generateSEOMetadata || !1),
                "unlimited" === e5)
              ) {
                let ev = (0, X.getScriptPath)("jwplayer.js");
                if (!ev)
                  throw Error(
                    "Error setting up player: Could not locate jwplayer.js script tag"
                  );
                C.p = ev;
              }
              let ey, em;
              eu.related =
                ((ed = eu),
                (ef = (0, ei.Z)(ed.edition)),
                (ep = ed.related),
                (ef = !ef("discovery") || ep !== Object(ep)),
                (eh = !ep || "none" !== ep.displayMode),
                (ey =
                  void 0 === (e0 = ep || {}).oncomplete
                    ? "none"
                    : e0.oncomplete),
                (em = e0.autoplaytimer),
                !1 === ey || ed.repeat
                  ? (ey = "hide")
                  : "none" === ey && (em = 0),
                (e0 = ("autoplay" === ey && em <= 0) || "none" === ey),
                Object.assign({}, ep, {
                  disableRelated: ef,
                  showButton: eh,
                  oncomplete: ey,
                  autoplaytimer: em,
                  shouldAutoAdvance: e0,
                }));
              let e4;
              if (
                ((eu.ab &&=
                  ((e4 = (eg = eu).ab).clone && (e4 = e4.clone()),
                  Object.keys(e4.tests).forEach((l) => {
                    e4.tests[l].forEach((l) => {
                      l.addConfig && l.addConfig(eg, l.selection);
                    });
                  }),
                  e4)),
                (eu.plugins = e_(eu)),
                (l = eu.playlist),
                (0, ee.HD)(l) && l.indexOf(eo) > -1)
              ) {
                let e6;
                (eu.playlist =
                  ((e1 = document),
                  (e2 = eu.playlist),
                  (e3 =
                    null == e1 ||
                    null == e1.querySelector ||
                    null == (e3 = e1.querySelector("title"))
                      ? void 0
                      : e3.textContent),
                  (eb = ea(e1, 'meta[property="og:title"]')),
                  (e6 = encodeURIComponent(eb || e3 || "")),
                  (eb =
                    ea(e1, 'meta[property="og:description"]') ||
                    ea(e1, 'meta[name="description"]')) &&
                    (e6 += "&page_description=" + encodeURIComponent(eb)),
                  e2.replace(eo, e6))),
                  (eu.contextual = !0);
              }
              if ((0, et.isFileProtocol)()) {
                let { playlist: eT, related: eS } = eu;
                ec(eT) && (eu.playlist = e$(eT)),
                  eS && ec(eS.file) && (eS.file = e$(eS.file));
              }
              return (
                eu.__abSendDomainToFeeds &&
                  ((_ = eu.playlist),
                  /\.jwplatform.com|\.jwplayer.com/.test(_)) &&
                  (eu.playlist =
                    (e5 = eu.playlist) +
                    (-1 !== e5.indexOf("?") ? "&" : "?") +
                    "page_domain=" +
                    encodeURIComponent((0, el.X)())),
                eu
              );
            };
        },
        6577(l, _, C) {
          "use strict";
          C.d(_, { default: () => eG });
          var _ = C(1096),
            _ = C.n(_);
          window.Promise ||= _();
          var _ = C(1569),
            N = C(6391),
            X = C(2963),
            ee = C(670),
            X = { availableProviders: X.B, registerProvider: ee.Z },
            et = C(1241);
          X.registerPlugin = function (l, _, C) {
            "jwpsrv" !== l && (0, et.fo)(l, _, C);
          };
          let en = X;
          var er = C(8675),
            ei = C(6601),
            eo = C(4742),
            ea = C(8348),
            es = C(623),
            el = C(1643),
            eu = C(7411),
            ec = C(328),
            e$ = C(3487);
          let ed = [["vastxml", "adtag", "schedules"]],
            e_ = { googima: ed, vast: ed },
            ef = (l, _) => {
              var C = l.getPlugin(_),
                N = Object.keys(e_);
              if (-1 === N.indexOf(_))
                throw Error(
                  "destroyDynamicPlugin must be called with plugins with one of the following plugins: " +
                    N.toString()
                );
              if (C) {
                if (
                  (C.resize && l.off("resize", C.resizeHandler),
                  delete l.plugins[_],
                  C.destroy)
                )
                  try {
                    C.destroy();
                  } catch (X) {}
                null != (N = C.div) &&
                  N.parentElement &&
                  N.parentElement.removeChild(N),
                  l.trigger("pluginDestroyed", {
                    type: "pluginDestroyed",
                    name: _,
                  });
              }
            },
            ep = (l, _, C, N) => {
              var X = (0, e$.Nq)(_),
                ee = Object.keys(e_),
                N = N[(et = _)] || N[(0, e$.sb)(et)] || N[(0, e$.Nq)(et)] || {};
              if (-1 === ee.indexOf(X))
                throw Error(
                  "setupDynamicPlugin must be called with plugins with one of the following plugins: " +
                    ee.toString()
                );
              ef(l, X);
              var et = ((l, _, C) => {
                let N = Object.assign({}, l),
                  X = Object.assign({}, _),
                  ee = Object.keys(X).filter((l) => null === l);
                return (
                  ee.forEach((l) => delete N[l]),
                  ee.forEach((l) => delete X[l]),
                  C.forEach((l) => {
                    l.some((l) => X[l]) && l.forEach((l) => delete N[l]);
                  }),
                  Object.assign({}, N, X)
                );
              })(N, C, e_[X]);
              return (0, er.Ve)(_, et, l);
            };
          var eh = C(4429),
            e0 = C(6042);
          let eg = 0;
          function e1(l, _) {
            return (
              (_ = new es.ZP(_)).on(el.Rc, (_) => {
                l._qoe.tick("ready"),
                  (_.setupTime = l._qoe.between("setup", "ready"));
              }),
              _.on("all", (_, C) => {
                l.trigger(_, C);
              }),
              _
            );
          }
          function e2(l, _) {
            let C = l.plugins,
              N = Object.keys(C).map((l) => {
                var _ = C[l];
                return delete C[l], _;
              });
            _.get("setupConfig") && l.trigger("remove"),
              l.off(),
              _.playerDestroy(),
              N.forEach((l) => {
                if (l.reset)
                  try {
                    l.reset();
                  } catch (_) {}
                else if (l.destroy)
                  try {
                    l.destroy();
                  } catch (C) {}
              }),
              _.getContainer().removeAttribute("data-jwplayer-id");
          }
          function e3(l) {
            let _ = ++eg,
              C = l.id || "player-" + _,
              X = new eu.Z(),
              ee = {},
              et = e1(this, l);
            X.tick("init"),
              l.setAttribute("data-jwplayer-id", C),
              Object.defineProperties(this, {
                id: { enumerable: !0, get: () => C },
                uniqueId: { enumerable: !0, get: () => _ },
                plugins: { enumerable: !0, get: () => ee },
                _qoe: { enumerable: !0, get: () => X },
                version: { enumerable: !0, get: () => ei.i },
                Events: { enumerable: !0, get: () => ec.ZP },
                utils: { enumerable: !0, get: () => eh.Z },
                _: { enumerable: !0, get: () => e0.ZP },
              }),
              Object.assign(this, {
                _events: {},
                setup(_) {
                  return (
                    X.clear("ready"),
                    X.tick("setup"),
                    et && e2(this, et),
                    (et = e1(this, l)).init(_, this),
                    this.on(_.events, null, this)
                  );
                },
                remove() {
                  this.getPip() && this.setPip(!1);
                  var l = this;
                  for (let _ = N.Z.length; _--; )
                    if (N.Z[_].uniqueId === l.uniqueId) {
                      N.Z.splice(_, 1);
                      break;
                    }
                  return (
                    et && e2(this, et),
                    Object.keys(ee).forEach((l) => {
                      delete ee[l];
                    }),
                    this
                  );
                },
                qoe() {
                  var l = et.getItemQoe();
                  return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: l.getFirstFrame ? l.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: l.dump(),
                  };
                },
                addCues(l) {
                  return Array.isArray(l) && et.addCues(l), this;
                },
                getAudioTracks: () => et.getAudioTracks(),
                getBuffer: () => et.get("buffer"),
                getCaptions: () => et.get("captions"),
                getCaptionsList: () => et.getCaptionsList(),
                getConfig: () => et.getConfig(),
                getContainer: () => et.getContainer(),
                getControls: () => et.get("controls"),
                getCues: () => et.getCues(),
                getCurrentAudioTrack: () => et.getCurrentAudioTrack(),
                getCurrentCaptions: () => et.getCurrentCaptions(),
                getCurrentQuality: () => et.getCurrentQuality(),
                getCurrentTime: () => et.get("currentTime"),
                getAbsolutePosition: () => et.getAbsolutePosition(),
                getDuration: () => et.get("duration"),
                getEnvironment: () => ea,
                getFullscreen: () => et.get("fullscreen"),
                getHeight: () => et.getHeight(),
                getItemMeta: () => et.get("itemMeta") || {},
                getMute: () => et.getMute(),
                getContainerPercentViewable: () => et.get("intersectionRatio"),
                getPercentViewable: () => et.get("visibility"),
                getPip: () => et.get("pip"),
                getPlaybackRate: () => et.get("playbackRate"),
                getPlaylist: () => et.get("playlist"),
                getPlaylistIndex: () => et.get("item"),
                getPlaylistItem(l) {
                  var _;
                  return eh.Z.exists(l)
                    ? (_ = this.getPlaylist())
                      ? _[l]
                      : null
                    : et.get("playlistItem");
                },
                getPosition: () => et.get("position"),
                getProvider: () => et.getProvider(),
                getQualityLevels: () => et.getQualityLevels(),
                getSafeRegion: (l = !0) => et.getSafeRegion(l),
                getState: () => et.getState(),
                getStretching: () => et.get("stretching"),
                getContainerViewable: () => et.get("containerViewable"),
                getViewable: () => et.get("viewable"),
                getVisualQuality: () => et.getVisualQuality(),
                getVolume: () => et.get("volume"),
                getWidth: () => et.getWidth(),
                isReady: () => et.isReady(),
                setCaptions(l) {
                  return et.setCaptions(l), this;
                },
                setConfig(l) {
                  return et.setConfig(l), this;
                },
                setControls(l) {
                  return et.setControls(l), this;
                },
                setCurrentAudioTrack(l) {
                  et.setCurrentAudioTrack(l);
                },
                setCurrentCaptions(l) {
                  et.setCurrentCaptions(l);
                },
                setCurrentQuality(l) {
                  et.setCurrentQuality(l);
                },
                setFullscreen(l) {
                  return et.setFullscreen(l), this;
                },
                setAllowFullscreen(l) {
                  return et.setAllowFullscreen(l), this;
                },
                setMute(l) {
                  return et.setMute(l), this;
                },
                setPip(l) {
                  return et.setPip(l), this;
                },
                setPlaybackRate(l) {
                  return et.setPlaybackRate(l), this;
                },
                setPlaylistItem(l, _) {
                  return et.setPlaylistItem(l, _), this;
                },
                setCues(l) {
                  return Array.isArray(l) && et.setCues(l), this;
                },
                setVolume(l) {
                  return et.setVolume(l), this;
                },
                load(l, _) {
                  return et.load(l, _), this;
                },
                play(l) {
                  return et.play(l), this;
                },
                pause(l) {
                  return et.pause(l), this;
                },
                playToggle(l) {
                  switch (this.getState()) {
                    case el.r0:
                    case el.Kb:
                      return this.pause(l);
                    default:
                      return this.play(l);
                  }
                },
                seek(l, _) {
                  return et.seek(l, _), this;
                },
                playlistItem(l, _) {
                  return et.playlistItem(l, _), this;
                },
                playlistNext(l) {
                  return et.playlistNext(l), this;
                },
                playlistPrev(l) {
                  return et.playlistPrev(l), this;
                },
                next(l) {
                  return et.next(l), this;
                },
                requestPip(l) {
                  return et.requestPip(l), this;
                },
                castToggle() {
                  return et.castToggle(), this;
                },
                stopCasting() {
                  return et.stopCasting(), this;
                },
                requestCast(l) {
                  return et.requestCast(l), this;
                },
                createInstream: () => et.createInstream(),
                stop() {
                  return et.stop(), this;
                },
                resize(l, _) {
                  return et.resize(l, _), this;
                },
                addButton(l, _, C, N, X) {
                  return et.addButton(l, _, C, N, X), this;
                },
                removeButton(l) {
                  return et.removeButton(l), this;
                },
                getMediaElement: () => et.getMediaElement(),
                attachMedia() {
                  return et.attachMedia(), this;
                },
                detachMedia() {
                  return et.detachMedia(), this;
                },
                isBeforeComplete: () => et.isBeforeComplete(),
                isBeforePlay: () => et.isBeforePlay(),
                setPlaylistItemCallback(l, _) {
                  et.setItemCallback(l, _);
                },
                removePlaylistItemCallback() {
                  et.setItemCallback(null);
                },
                getPlaylistItemPromise: (l) => et.getItemPromise(l),
                getFloating: () => Boolean(et.get("isFloating")),
                setFloating(l) {
                  et.setConfig({ floating: { mode: l ? "always" : "never" } });
                },
                getChapters: () => et.getChapters(),
                getCurrentChapter: () => et.getCurrentChapter(),
                setChapter: (l) => et.setChapter(l),
                setupDynamicPlugin(l, _) {
                  return l
                    ? ep(this, l, _, et.get("plugins"))
                    : Promise.resolve();
                },
                destroyDynamicPlugin(l) {
                  if (l) return ef(this, l);
                },
              });
          }
          function eb(l) {
            let _, C;
            if (
              (l
                ? "string" == typeof l
                  ? (_ = e5(l)) || (C = document.getElementById(l))
                  : "number" == typeof l
                    ? (_ = N.Z[l])
                    : l.nodeType &&
                      (_ = e5((C = l).id || C.getAttribute("data-jwplayer-id")))
                : (_ = N.Z[0]),
              _)
            )
              return _;
            if (C) {
              let X = new e3(C);
              return N.Z.push(X), X;
            }
            return { registerPlugin: er.fo };
          }
          Object.assign(e3.prototype, {
            on(l, _, C) {
              return ec.on.call(this, l, _, C);
            },
            once(l, _, C) {
              return ec.IH.call(this, l, _, C);
            },
            off(l, _, C) {
              return ec.S1.call(this, l, _, C);
            },
            trigger(l, _) {
              return (
                ((_ = e0.ZP.isObject(_) ? Object.assign({}, _) : {}).type = l),
                (eo.Z.debug ? ec.X$ : ec.wj).call(this, l, _)
              );
            },
            getPlugin(l) {
              return this.plugins[l];
            },
            addPlugin(l, _) {
              "function" == typeof (this.plugins[l] = _).addToPlayer &&
                (this.isReady()
                  ? _.addToPlayer.call(this, !0)
                  : this.on("ready", function () {
                      _.addToPlayer.call(this, !1);
                    })),
                _.resize && this.on("resize", _.resizeHandler);
            },
            registerPlugin(l, _, C) {
              (0, er.fo)(l, _, C);
            },
            getAdBlock: () => !1,
            playAd(l) {},
            pauseAd(l) {},
            skipAd() {},
          }),
            (C.p = (0, _.loadFrom)());
          let e5 = (l) => {
              for (let _ = 0; _ < N.Z.length; _++)
                if (N.Z[_].id === l) return N.Z[_];
              return null;
            },
            ev = (l) => {
              Object.defineProperties(l, {
                api: { get: () => en, set() {} },
                version: { get: () => ei.i, set() {} },
                debug: {
                  get: () => eo.Z.debug,
                  set(l) {
                    eo.Z.debug = Boolean(l);
                  },
                },
              });
            };
          ev(eb);
          let ey = eb;
          var ee = C(5882),
            X = C(6599),
            _ = C(676),
            em = C(5592),
            e4 = C(6769),
            e6 = C(9025),
            eT = e0.ZP.extend,
            eS = { _: e0.ZP };
          (eS.utils = Object.assign(eh.Z, {
            key: X.ZP,
            extend: eT,
            scriptloader: _.ZP,
            rssparser: { parse: e4.Z },
            tea: em.p,
            UI: ee.ZP,
          })),
            (eS.utils.css.style = eS.utils.style),
            (eS.vid = e6.Z);
          var X = eS,
            e7 = C(7543);
          function ew(l) {
            var _ = {};
            ek(this, l, l, _), ek(this, l, e3.prototype, _);
          }
          function eP(l) {
            return (l = ey(l)).uniqueId ? (l._publicApi ||= new ew(l)) : l;
          }
          let eA = /^(?:on(?:ce)?|off|trigger)$/,
            e8 = (l) => {
              console.warn(
                "The API method jwplayer()." +
                  l +
                  "() is disabled in the free edition of JW Player."
              );
            },
            eC = (l, _) => {
              if (_.length) {
                let C = l.getPlugin("jwpsrv");
                null != C &&
                  C.trackExternalAPIUsage &&
                  (_.forEach((l) => {
                    var _ = C,
                      N = l[0],
                      l = l[1];
                    try {
                      var X = ((l) => {
                        switch (N) {
                          case "setup":
                            return Boolean(l);
                          case "getSafeRegion":
                          case "pauseAd":
                          case "setControls":
                          case "setFullscreen":
                          case "setMute":
                            if (Boolean(l) === l) return l;
                            return;
                          case "setPlaylistItem":
                          case "getPlaylistItem":
                            if ((0 | l) === l) return l;
                            return;
                          case "setPlaybackRate":
                          case "setVolume":
                            return Number(l);
                          case "setConfig":
                            return Object.keys(Object(l)).join(",");
                          case "on":
                          case "once":
                          case "off":
                          case "trigger":
                          case "getPlugin":
                          case "addPlugin":
                          case "registerPlugin":
                            return "" + l;
                        }
                        return null;
                      })(l);
                      _.trackExternalAPIUsage(N, X);
                    } catch (ee) {
                      eo.Z.debug && console.warn(ee);
                    }
                  }),
                  (_.length = 0));
              }
            },
            eM = (l, _, C, N, X) =>
              function (...ee) {
                let et = ee[0],
                  en = (_._trackCallQueue ||= []),
                  er = eA.test(C),
                  ei = er && ee[1] && ee[1]._callback,
                  eo =
                    X.edition ||
                    ((ea = X), (eu = _.getConfig().edition), (ea.edition = eu));
                if ("free" === eo) {
                  if (
                    [
                      "addButton",
                      "addCues",
                      "detachMedia",
                      "load",
                      "next",
                      "pause",
                      "play",
                      "playlistItem",
                      "playlistNext",
                      "playlistPrev",
                      "playToggle",
                      "resize",
                      "seek",
                      "setCaptions",
                      "setConfig",
                      "setControls",
                      "setCues",
                      "setFullscreen",
                      "setMute",
                      "setPlaybackRate",
                      "setPlaylistItem",
                      "setVolume",
                      "stop",
                    ].indexOf(C) > -1
                  )
                    return e8(C), l;
                  if (
                    [
                      "createInstream",
                      "setCurrentAudioTrack",
                      "setCurrentCaptions",
                      "setCurrentQuality",
                    ].indexOf(C) > -1
                  )
                    return e8(C), null;
                }
                if ((ei || en.push([C, et]), er))
                  return eC(_, en), _[C].apply(l, ee);
                var ea = C,
                  es = ee,
                  el = {
                    reason:
                      "play" !== ea &&
                      "seek" !== ea &&
                      "pause" !== ea &&
                      (0, e7.C)()
                        ? "interaction"
                        : "external",
                  };
                switch (ea) {
                  case "play":
                  case "pause":
                  case "playToggle":
                  case "playlistNext":
                  case "playlistPrev":
                  case "next":
                    es[0] = el;
                    break;
                  case "seek":
                  case "playlistItem":
                    es[1] = el;
                }
                var eu = _[C](...ee);
                return ("remove" === C
                  ? _.off.call(l)
                  : "setup" === C &&
                    (_.off.call(l),
                    _.off(et.events, null, _),
                    _.on.call(l, et.events, null, l),
                    _.on("all", (C, ee) => {
                      if ("ready" === C) {
                        let et = Object.keys(_).filter(
                            (l) =>
                              "_" !== l[0] &&
                              -1 === N.indexOf(l) &&
                              "function" == typeof _[l]
                          ),
                          er = N.concat(et);
                        et.forEach((C) => {
                          l[C] = eM(l, _, C, er, X);
                        });
                      }
                      _.trigger.call(l, C, ee), eC(_, en);
                    })),
                eC(_, en),
                eu === _)
                  ? l
                  : eu;
              },
            ex = ["getMediaElement"],
            ek = (l, _, C, N) => {
              let X = Object.keys(C);
              X.forEach((ee) => {
                var et = C[ee];
                -1 === ex.indexOf(ee) &&
                  ("function" == typeof et && "Events" !== ee
                    ? (l[ee] = eM(l, _, ee, X, N))
                    : "_events" === ee
                      ? (l._events = {})
                      : Object.defineProperty(l, ee, {
                          enumerable: !0,
                          get: () => C[ee],
                        }));
              });
            },
            eB = window;
          Object.assign(ey, X),
            Object.assign(eP, X),
            ev(eP),
            "function" == typeof eB.define &&
              eB.define.amd &&
              eB.define([], function () {
                return eP;
              });
          let eE = eP,
            eG = (eE = eB.jwplayer ? eB.jwplayer : eE);
        },
        8675(l, _, C) {
          "use strict";
          C.d(_, { Ve: () => N.Ve, ZP: () => X, fo: () => N.fo }), C(3487);
          var N = C(1241);
          let X = N.ZP;
        },
        3487(l, _, C) {
          "use strict";
          C.d(_, { MK: () => N.MK, Nq: () => N.Nq, bX: () => X, sb: () => ee }),
            C(1569);
          var N = C(7164);
          let X = function (l) {
              let _ = (0, N.bX)(l);
              if (l)
                switch ((0, N.Nq)(l)) {
                  case "jwpsrv":
                    _ = 305001;
                    break;
                  case "googima":
                    _ = 305002;
                    break;
                  case "vast":
                    _ = 305003;
                    break;
                  case "freewheel":
                    _ = 305004;
                    break;
                  case "dai":
                    _ = 305005;
                    break;
                  case "gapro":
                    _ = 305006;
                    break;
                  case "bidding":
                    _ = 305007;
                }
              return _;
            },
            ee = (l) => {
              let _ = "";
              return ("https:" !== window.location.protocol &&
                "http:" !== window.location.protocol &&
                (_ = "https:"),
              (l = {
                bidding: "//ssl.p.jwpcdn.com/player/v/8.33.2/bidding.js",
                jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.33.2/jwpsrv.js",
                dai: "//ssl.p.jwpcdn.com/player/v/8.33.2/dai.js",
                vast: "//ssl.p.jwpcdn.com/player/v/8.33.2/vast.js",
                googima: "//ssl.p.jwpcdn.com/player/v/8.33.2/googima.js",
                freewheel: "//ssl.p.jwpcdn.com/player/v/8.33.2/freewheel.js",
                gapro: "//ssl.p.jwpcdn.com/player/v/8.33.2/gapro.js",
                interactive:
                  "//ssl.p.jwpcdn.com/player/v/8.33.2/interactive.js",
                keepWatching:
                  "//ssl.p.jwpcdn.com/player/v/8.33.2/keepWatching.js",
              }[l]))
                ? _ + l
                : "";
            };
        },
        1918(l, _, C) {
          "use strict";
          C.d(_, { Gb: () => eo, d3: () => ea, lD: () => ei, w0: () => er });
          var N = C(386);
          let X = [
              { configName: "clearkey", keyName: "org.w3.clearkey" },
              { configName: "widevine", keyName: "com.widevine.alpha" },
              { configName: "playready", keyName: "com.microsoft.playready" },
            ],
            ee = [],
            et = {},
            en,
            er = (l) =>
              l.some(
                (l) => Boolean(l.drm) || l.sources.some((l) => Boolean(l.drm))
              ),
            ei = (l) =>
              en ||
              (((Boolean(navigator.requestMediaKeySystemAccess) &&
                Boolean(
                  window.MediaKeySystemAccess.prototype.getConfiguration
                )) ||
                Boolean(window.MSMediaKeys)) &&
              (0, N.Z)(l)("drm")
                ? (X.forEach((l) => {
                    _ = l.keyName;
                    var _,
                      C = (
                        navigator.requestMediaKeySystemAccess
                          ? navigator.requestMediaKeySystemAccess(_, [
                              {
                                initDataTypes: ["cenc"],
                                videoCapabilities: [
                                  {
                                    contentType:
                                      'video/mp4;codecs="avc1.4d401e"',
                                  },
                                ],
                                audioCapabilities: [
                                  {
                                    contentType: 'audio/mp4;codecs="mp4a.40.2"',
                                  },
                                ],
                              },
                            ])
                          : new Promise((l, C) => {
                              let N;
                              try {
                                N = new window.MSMediaKeys(_);
                              } catch (X) {
                                C(X);
                                return;
                              }
                              l(N);
                            })
                      )
                        .then(function () {
                          et[l.configName] = !0;
                        })
                        .catch(function () {
                          et[l.configName] = !1;
                        });
                    ee.push(C);
                  }),
                  (en = Promise.all(ee)))
                : Promise.resolve()),
            eo = (l) => et[l],
            ea = (l) => {
              if (en) return Object.keys(l).some((l) => eo(l));
            };
        },
        2963(l, _, C) {
          "use strict";
          C.d(_, { B: () => es });
          var _ = C(6593),
            N = C(8348),
            X = C(386),
            ee = C(1918),
            et = C(9025);
          let en = (l) => {
              (null != l && l.length && Array.isArray(l)) ||
                (l = ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']);
              let _ = window.MediaSource;
              return (
                !!_ &&
                !!_.isTypeSupported &&
                l.every((l) => _.isTypeSupported(l))
              );
            },
            er = (l) =>
              /hls|m3u8/.test(
                ((null == l ? void 0 : l.type) || "").toLowerCase()
              ) ||
              ((null == l ? void 0 : l.file) || "")
                .toLowerCase()
                .indexOf(".m3u8") > -1,
            ei = (l) =>
              /mpd|dash/.test(
                ((null == l ? void 0 : l.type) || "").toLowerCase()
              ) ||
              ((null == l ? void 0 : l.file) || "")
                .toLowerCase()
                .indexOf("mpd-time-csf") > -1,
            eo = _.B.find((l) => "html5" === l.name),
            ea = eo.supports;
          (eo.supports = function (...l) {
            var [_, C] = l,
              l = ea.apply(this, l);
            if (ei(_)) return !1;
            if (l && _.drm && er(_)) {
              let N = (0, X.Z)(C)("drm");
              if (N && _.drm.fairplay) {
                let ee = window.WebKitMediaKeys;
                if (null == ee || null == ee.isTypeSupported) return;
                return ee.isTypeSupported("com.apple.fps.1_0", "video/mp4");
              }
              return N;
            }
            return l;
          }),
            _.B.push({
              name: "shaka",
              supports: (l) =>
                (!l.drm || !!(0, ee.d3)(l.drm)) &&
                en(l.mediaTypes) &&
                (ei(l) || er(l)),
            }),
            _.B.unshift({
              name: "hlsjs",
              supports(l) {
                var _, C;
                return (
                  !l.drm &&
                  !!er(l) &&
                  ((_ = Boolean(
                    null == et.Z || null == et.Z.canPlayType
                      ? void 0
                      : et.Z.canPlayType("application/vnd.apple.mpegURL")
                  )),
                  (C =
                    "boolean" == typeof (null == l ? void 0 : l.safarihlsjs) &&
                    l.safarihlsjs),
                  "boolean" == typeof (null == l ? void 0 : l.hlsjsdefault) &&
                    l.hlsjsdefault,
                  "boolean" == typeof (null == l ? void 0 : l.androidhls) &&
                    l.androidhls,
                  !_ || !N.Browser.safari || !!C) &&
                  (!_ ||
                    !N.OS.android ||
                    !1 === l.androidhls ||
                    !1 !== l.hlsjsdefault) &&
                  en(l.mediaTypes)
                );
              },
            });
          let es = _.B;
        },
        2303(l, _, C) {
          "use strict";
          C.d(_, { Z: () => ei });
          var N = C(2963),
            X = C(12),
            ee = C(670),
            et = C(2894),
            _ = {
              html5: () =>
                C.e(250)
                  .then(
                    function (l) {
                      var _ = C(9181).default;
                      return (0, ee.Z)(_), _;
                    }.bind(null, C)
                  )
                  .catch((0, et.Ep)(152)),
            };
          function en(l) {
            this.config = l || {};
          }
          Object.assign(_, {
            shaka: () =>
              C.e(371)
                .then(
                  function (l) {
                    var _ = C(2287).default;
                    return (0, ee.Z)(_), _;
                  }.bind(null, C)
                )
                .catch((0, et.Ep)(154)),
            hlsjs: () =>
              C.e(98)
                .then(
                  function (l) {
                    var _ = C(9054).default;
                    return (0, ee.Z)(_), _;
                  }.bind(null, C)
                )
                .catch((0, et.Ep)(153)),
          });
          let er = _;
          Object.assign(en.prototype, {
            load(l) {
              let _ = er[l],
                C = () => Promise.reject(Error("Failed to load media"));
              return _ ? _().then(() => X.U[l] || C()) : C();
            },
            providerSupports: (l, _) => l.supports(_),
            choose(l) {
              if (l === Object(l)) {
                var _ = N.B.length;
                for (let C = 0; C < _; C++) {
                  var ee = N.B[C];
                  if (this.providerSupports(ee, l))
                    return {
                      priority: _ - C - 1,
                      name: ee.name,
                      type: l.type,
                      providerToCheck: ee,
                      provider: X.U[ee.name],
                    };
                }
              }
              return {};
            },
          }),
            ((_ = en).prototype.providerSupports = function (l, _) {
              return l.supports(_, this.config.edition);
            });
          let ei = _;
        },
        5140(l, _, C) {
          "use strict";
          C.d(_, { t: () => N });
          let N = window.atob;
          window.btoa;
        },
        386(l, _, C) {
          "use strict";
          C.d(_, {
            Z: () =>
              function (l) {
                let _ = {
                  setup: [N, X, ee, et, en, er, eo, ea, es, ei],
                  drm: [en, er, eo, ea, es],
                  ads: [eo, ea, es, ei, en, er, ee],
                  jwpsrv: [N, X, ee, et, en, er, eo, es, ei, el],
                  discovery: [eo, en, er, es, ea],
                };
                return function (C) {
                  return _[C] && _[C].indexOf(l) > -1;
                };
              },
          });
          let N = "free",
            X = "starter",
            ee = "business",
            et = "premium",
            en = "enterprise",
            er = "developer",
            ei = "platinum",
            eo = "ads",
            ea = "unlimited",
            es = "trial",
            el = "invalid";
        },
        7010(l, _, C) {
          "use strict";
          C.d(_, {
            Z: () =>
              function () {
                return X(window, document.location.search);
              },
          });
          var N = C(5950);
          let X = function (l, _) {
            return l.location !== l.parent.location && (0, N.ke)(_, "isAMP");
          };
        },
        560(l, _, C) {
          "use strict";
          C.d(_, { Z: () => X });
          let N = () => N._iframe;
          (N.mock = (l) => {
            N._iframe = l;
          }),
            (N.unmock = () => {
              N._iframe = N._original;
            }),
            (N._iframe = window.top !== window.self),
            (N._original = N._iframe);
          let X = N;
        },
        6599(l, _, C) {
          "use strict";
          C.d(_, { ZP: () => ei, u5: () => en });
          var N = C(5592),
            X = C(386),
            ee = C(5140),
            et = C(4446);
          let en = 100013,
            er = "invalid",
            ei = class {
              constructor(l) {
                (this.keyData = ((l) => {
                  let _, C, et;
                  try {
                    var en = (0, N.p)(
                      l || "",
                      (0, ee.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")
                    ).split("/");
                    if (
                      ("pro" === (_ = en[0]) && (_ = "premium"),
                      (0, X.Z)(_)("setup") || (_ = er),
                      en.length > 2)
                    ) {
                      C = en[1];
                      let ei = parseInt(en[2], 10);
                      ei > 0 && (et = new Date()).setTime(ei);
                    }
                  } catch (eo) {
                    _ = er;
                  }
                  return { edition: _, token: C, expiration: et };
                })(l)),
                  (this.edition = function () {
                    return this.keyData.edition;
                  }),
                  (this.token = function () {
                    return this.keyData.token;
                  }),
                  (this.expiration = function () {
                    return this.keyData.expiration;
                  }),
                  (this.duration = function () {
                    return this.keyData.expiration
                      ? this.keyData.expiration.getTime() - new Date().getTime()
                      : 0;
                  }),
                  (this.error = function () {
                    let _;
                    return (void 0 === l
                      ? (_ = 100011)
                      : this.keyData.edition !== er && this.keyData.token
                        ? 0 > this.duration() && (_ = en)
                        : (_ = 100012),
                    _)
                      ? new et.rG(et.pJ, _)
                      : null;
                  });
              }
            };
        },
        67(l, _, C) {
          "use strict";
          C.d(_, { X: () => X });
          var N = C(560);
          let X = () => {
            var l, _;
            let C = window.location.host;
            if ((0, N.Z)()) {
              C = (
                document.referrer
                  ? ((l = document.referrer),
                    ((_ = document.createElement("a")).href = l),
                    _)
                  : {}
              ).host;
              try {
                C = C || window.top.location.host;
              } catch (X) {}
            }
            return C;
          };
        },
        5592(l, _, C) {
          "use strict";
          C.d(_, { p: () => ee });
          var N = C(5140);
          let X = (l) => {
              var _ = Array(Math.ceil(l.length / 4));
              for (let C = 0; C < _.length; C++)
                _[C] =
                  l.charCodeAt(4 * C) +
                  (l.charCodeAt(4 * C + 1) << 8) +
                  (l.charCodeAt(4 * C + 2) << 16) +
                  (l.charCodeAt(4 * C + 3) << 24);
              return _;
            },
            ee = function (l, _) {
              if (((l = String(l)), (_ = String(_)), 0 === l.length)) return "";
              var C = X((0, N.t)(l)),
                ee = X(unescape(encodeURIComponent(_)).slice(0, 16)),
                et = C.length;
              let en,
                er,
                ei = void C[et - 1],
                eo = C[0],
                ea = 2654435769 * Math.floor(6 + 52 / et);
              for (; ea; ) {
                er = (ea >>> 2) & 3;
                for (let es = et - 1; es >= 0; es--)
                  (en =
                    ((((ei = C[es > 0 ? es - 1 : et - 1]) >>> 5) ^ (eo << 2)) +
                      ((eo >>> 3) ^ (ei << 4))) ^
                    ((ea ^ eo) + (ee[(3 & es) ^ er] ^ ei))),
                    (eo = C[es] -= en);
                ea -= 2654435769;
              }
              l = ((l) => {
                var _ = Array(l.length);
                for (let C = 0; C < l.length; C++)
                  _[C] = String.fromCharCode(
                    255 & l[C],
                    (l[C] >>> 8) & 255,
                    (l[C] >>> 16) & 255,
                    (l[C] >>> 24) & 255
                  );
                return _.join("");
              })(C).replace(/\0+$/, "");
              try {
                return decodeURIComponent(escape(l));
              } catch (el) {
                return l;
              }
            };
        },
        1096: function (l) {
          l.exports = (function () {
            "use strict";
            function l() {}
            function _(l) {
              if (!(this instanceof _))
                throw TypeError("Promises must be constructed via new");
              if ("function" != typeof l) throw TypeError("not a function");
              (this._state = 0),
                (this._handled = !1),
                (this._value = void 0),
                (this._deferreds = []),
                et(l, this);
            }
            function C(l, C) {
              for (; 3 === l._state; ) l = l._value;
              0 !== l._state
                ? ((l._handled = !0),
                  _._immediateFn(function () {
                    var _,
                      ee = 1 === l._state ? C.onFulfilled : C.onRejected;
                    if (null !== ee) {
                      try {
                        _ = ee(l._value);
                      } catch (et) {
                        X(C.promise, et);
                        return;
                      }
                      N(C.promise, _);
                    } else (1 === l._state ? N : X)(C.promise, l._value);
                  }))
                : l._deferreds.push(C);
            }
            function N(l, C) {
              try {
                if (C === l)
                  throw TypeError("A promise cannot be resolved with itself.");
                if (C && ("object" == typeof C || "function" == typeof C)) {
                  var N,
                    en,
                    er = C.then;
                  if (C instanceof _)
                    return (l._state = 3), (l._value = C), ee(l);
                  if ("function" == typeof er)
                    return et(
                      ((N = er),
                      (en = C),
                      function () {
                        N.apply(en, arguments);
                      }),
                      l
                    );
                }
                (l._state = 1), (l._value = C), ee(l);
              } catch (ei) {
                X(l, ei);
              }
            }
            function X(l, _) {
              (l._state = 2), (l._value = _), ee(l);
            }
            function ee(l) {
              2 === l._state &&
                0 === l._deferreds.length &&
                _._immediateFn(function () {
                  l._handled || _._unhandledRejectionFn(l._value);
                });
              for (var N = 0, X = l._deferreds.length; N < X; N++)
                C(l, l._deferreds[N]);
              l._deferreds = null;
            }
            function et(l, _) {
              var C = !1;
              try {
                l(
                  function (l) {
                    C || ((C = !0), N(_, l));
                  },
                  function (l) {
                    C || ((C = !0), X(_, l));
                  }
                );
              } catch (ee) {
                C || ((C = !0), X(_, ee));
              }
            }
            var en = setTimeout;
            return (
              (_.prototype.catch = function (l) {
                return this.then(null, l);
              }),
              (_.prototype.then = function (_, N) {
                var X = new this.constructor(l);
                return (
                  C(
                    this,
                    new (function (l, C, N) {
                      (this.onFulfilled = "function" == typeof _ ? _ : null),
                        (this.onRejected = "function" == typeof C ? C : null),
                        (this.promise = N);
                    })(0, N, X)
                  ),
                  X
                );
              }),
              (_.prototype.finally = function (l) {
                var _ = this.constructor;
                return this.then(
                  function (C) {
                    return _.resolve(l()).then(function () {
                      return C;
                    });
                  },
                  function (C) {
                    return _.resolve(l()).then(function () {
                      return _.reject(C);
                    });
                  }
                );
              }),
              (_.all = function (l) {
                return new _(function (_, C) {
                  if (!l || void 0 === l.length)
                    throw TypeError("Promise.all accepts an array");
                  var N = Array.prototype.slice.call(l);
                  if (0 === N.length) return _([]);
                  for (var X = N.length, ee = 0; N.length > ee; ee++)
                    !(function l(ee, et) {
                      try {
                        if (
                          et &&
                          ("object" == typeof et || "function" == typeof et)
                        ) {
                          var en = et.then;
                          if ("function" == typeof en)
                            return en.call(
                              et,
                              function (_) {
                                l(ee, _);
                              },
                              C
                            );
                        }
                        (N[ee] = et), 0 == --X && _(N);
                      } catch (er) {
                        C(er);
                      }
                    })(ee, N[ee]);
                });
              }),
              (_.resolve = function (l) {
                return l && "object" == typeof l && l.constructor === _
                  ? l
                  : new _(function (_) {
                      _(l);
                    });
              }),
              (_.reject = function (l) {
                return new _(function (_, C) {
                  C(l);
                });
              }),
              (_.race = function (l) {
                return new _(function (_, C) {
                  for (var N = 0, X = l.length; N < X; N++) l[N].then(_, C);
                });
              }),
              (_._immediateFn =
                "function" == typeof setImmediate
                  ? function (l) {
                      setImmediate(l);
                    }
                  : function (l) {
                      en(l, 0);
                    }),
              (_._unhandledRejectionFn = function (l) {
                void 0 !== console &&
                  console &&
                  console.warn("Possible Unhandled Promise Rejection:", l);
              }),
              _
            );
          })();
        },
        9563(l) {
          var _,
            C,
            N,
            X = {},
            ee = {};
          function et() {
            return (C = void 0 === C ? _.apply(this, arguments) : C);
          }
          function en(l, _) {
            var C,
              N,
              X = ee[l],
              en = (X =
                X ||
                (ee[l] = {
                  element:
                    (((N = document.createElement("style")).type = "text/css"),
                    N.setAttribute("data-jwplayer-id", l),
                    (l = N),
                    et().appendChild(l),
                    N),
                  counter: 0,
                })).counter++,
              er = X.element;
            function eo() {
              ei(er, en, "");
            }
            return (
              (C = function (l) {
                ei(er, en, l);
              })(_.css),
              function (l) {
                l
                  ? (l.css !== _.css || l.media !== _.media) && C((_ = l).css)
                  : eo();
              }
            );
          }
          function er(l, _) {
            return (N[l] = _), N.filter(Boolean).join("\n");
          }
          function ei(l, _, C) {
            l.styleSheet
              ? (l.styleSheet.cssText = er(_, C))
              : ((C = document.createTextNode(C)),
                (_ = l.childNodes[_])
                  ? l.replaceChild(C, _)
                  : l.appendChild(C));
          }
          (_ = function () {
            return document.head || document.getElementsByTagName("head")[0];
          }),
            (l.exports = {
              style: function (l, _) {
                for (
                  var C = _,
                    N = (function (l) {
                      for (var _ = [], C = {}, N = 0; N < l.length; N++) {
                        var X = l[N],
                          ee = X[0],
                          X = { css: X[1], media: X[2] };
                        C[ee]
                          ? C[ee].parts.push(X)
                          : _.push((C[ee] = { id: ee, parts: [X] }));
                      }
                      return _;
                    })(l),
                    ee = 0;
                  ee < N.length;
                  ee++
                ) {
                  var et = N[ee],
                    er = (X[C] || {})[et.id];
                  if (er) {
                    for (var ei = 0; ei < er.parts.length; ei++)
                      er.parts[ei](et.parts[ei]);
                    for (; ei < et.parts.length; ei++)
                      er.parts.push(en(C, et.parts[ei]));
                  } else {
                    for (var eo = [], ei = 0; ei < et.parts.length; ei++)
                      eo.push(en(C, et.parts[ei]));
                    (X[C] = X[C] || {}),
                      (X[C][et.id] = { id: et.id, parts: eo });
                  }
                }
              },
              clear: function (l, _) {
                var C = X[l];
                if (C) {
                  if (_) {
                    var N = C[_];
                    if (N)
                      for (var ee = 0; ee < N.parts.length; ee += 1)
                        N.parts[ee]();
                  } else {
                    for (
                      var et = Object.keys(C), en = 0;
                      en < et.length;
                      en += 1
                    )
                      for (
                        var er = C[et[en]], ei = 0;
                        ei < er.parts.length;
                        ei += 1
                      )
                        er.parts[ei]();
                    delete X[l];
                  }
                }
              },
            }),
            (N = []);
        },
        4737(l) {
          l.exports =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>';
        },
      },
      ee = {};
    function et(l) {
      var _ = ee[l];
      return (
        void 0 === _ &&
          ((_ = ee[l] = { id: l, loaded: !1, exports: {} }),
          X[l].call(_.exports, _, _.exports, et),
          (_.loaded = !0)),
        _.exports
      );
    }
    (et.m = X),
      (et.n = (l) => {
        var _ = l && l.__esModule ? () => l.default : () => l;
        return et.d(_, { a: _ }), _;
      }),
      (et.d = (l, _) => {
        for (var C in _)
          et.o(_, C) &&
            !et.o(l, C) &&
            Object.defineProperty(l, C, { enumerable: !0, get: _[C] });
      }),
      (et.f = {}),
      (et.e = (l) =>
        Promise.all(
          Object.keys(et.f).reduce((_, C) => (et.f[C](l, _), _), [])
        )),
      (et.u = (l) =>
        ({
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
          977: "provider.cast",
        })[l] + ".js"),
      (et.o = (l, _) => Object.prototype.hasOwnProperty.call(l, _)),
      (l = {}),
      (_ = "jwplayer:"),
      (et.l = (C, N, X, ee) => {
        if (l[C]) l[C].push(N);
        else {
          if (void 0 !== X)
            for (
              var en, er, ei = document.getElementsByTagName("script"), eo = 0;
              eo < ei.length;
              eo++
            ) {
              var ea = ei[eo];
              if (
                ea.getAttribute("src") == C ||
                ea.getAttribute("data-webpack") == _ + X
              ) {
                en = ea;
                break;
              }
            }
          en ||
            ((er = !0),
            ((en = document.createElement("script")).charset = "utf-8"),
            (en.timeout = 55),
            et.nc && en.setAttribute("nonce", et.nc),
            en.setAttribute("data-webpack", _ + X),
            (en.src = C)),
            (l[C] = [N]);
          var N = (_, N) => {
              (en.onerror = en.onload = null), clearTimeout(es);
              var X = l[C];
              if (
                (delete l[C],
                en.parentNode && en.parentNode.removeChild(en),
                X && X.forEach((l) => l(N)),
                _)
              )
                return _(N);
            },
            es = setTimeout(
              N.bind(null, void 0, { type: "timeout", target: en }),
              55e3
            );
          (en.onerror = N.bind(null, en.onerror)),
            (en.onload = N.bind(null, en.onload)),
            er && document.head.appendChild(en);
        }
      }),
      (et.r = (l) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(l, "__esModule", { value: !0 });
      }),
      (et.nmd = (l) => ((l.paths = []), (l.children ||= []), l)),
      (et.p = ""),
      (C = { 313: 0 }),
      (et.f.j = (l, _) => {
        var N,
          X,
          ee = et.o(C, l) ? C[l] : void 0;
        0 !== ee &&
          (ee
            ? _.push(ee[2])
            : ((N = new Promise((_, N) => (ee = C[l] = [_, N]))),
              _.push((ee[2] = N)),
              (_ = et.p + et.u(l)),
              (X = Error()),
              et.l(
                _,
                (_) => {
                  var N;
                  et.o(C, l) &&
                    (0 !== (ee = C[l]) && (C[l] = void 0), ee) &&
                    ((N = _ && ("load" === _.type ? "missing" : _.type)),
                    (_ = _ && _.target && _.target.src),
                    (X.message =
                      "Loading chunk " +
                      l +
                      " failed.\n(" +
                      N +
                      ": " +
                      _ +
                      ")"),
                    (X.name = "ChunkLoadError"),
                    (X.type = N),
                    (X.request = _),
                    ee[1](X));
                },
                "chunk-" + l,
                l
              )));
      }),
      (en = (l, _) => {
        var N,
          X,
          [ee, en, er] = _,
          ei = 0;
        if (ee.some((l) => 0 !== C[l])) {
          for (N in en) et.o(en, N) && (et.m[N] = en[N]);
          er && er(et);
        }
        for (l && l(_); ei < ee.length; ei++)
          (X = ee[ei]), et.o(C, X) && C[X] && C[X][0](), (C[X] = 0);
      }),
      (N = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(
        en.bind(null, 0)
      ),
      (N.push = en.bind(null, N.push.bind(N))),
      (et.nc = void 0);
    var en = et(6577);
    window.jwplayer = en.default;
  })(),
  (function (l, _) {
    var C, N;
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = _())
      : "function" == typeof define && define.amd
        ? define(_)
        : ((C = (l = l || self).Cookies),
          ((N = l.Cookies = _()).noConflict = function () {
            return (l.Cookies = C), N;
          }));
  })(this, function () {
    "use strict";
    function l(l) {
      for (var _ = 1; _ < arguments.length; _++) {
        var C,
          N = arguments[_];
        for (C in N) l[C] = N[C];
      }
      return l;
    }
    var _ = {
      read: function (l) {
        return l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      },
      write: function (l) {
        return encodeURIComponent(l).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    };
    return (function C(N, X) {
      function ee(_, C, ee) {
        if ("undefined" != typeof document) {
          "number" == typeof (ee = l({}, X, ee)).expires &&
            (ee.expires = new Date(Date.now() + 864e5 * ee.expires)),
            (ee.expires &&= ee.expires.toUTCString()),
            (_ = encodeURIComponent(_)
              .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
              .replace(/[()]/g, escape)),
            (C = N.write(C, _));
          var et,
            en = "";
          for (et in ee)
            ee[et] &&
              ((en += "; " + et), !0 !== ee[et]) &&
              (en += "=" + ee[et].split(";")[0]);
          return (document.cookie = _ + "=" + C + en);
        }
      }
      return Object.create(
        {
          set: ee,
          get: function (l) {
            if ("undefined" != typeof document && (!arguments.length || l)) {
              for (
                var C = document.cookie ? document.cookie.split("; ") : [],
                  X = {},
                  ee = 0;
                ee < C.length;
                ee++
              ) {
                var et = C[ee].split("="),
                  en = et.slice(1).join("=");
                '"' === en[0] && (en = en.slice(1, -1));
                try {
                  var er = _.read(et[0]);
                  if (((X[er] = N.read(en, er)), l === er)) break;
                } catch (ei) {}
              }
              return l ? X[l] : X;
            }
          },
          remove: function (_, C) {
            ee(_, "", l({}, C, { expires: -1 }));
          },
          withAttributes: function (_) {
            return C(this.converter, l({}, this.attributes, _));
          },
          withConverter: function (_) {
            return C(l({}, this.converter, _), this.attributes);
          },
        },
        {
          attributes: { value: Object.freeze(X) },
          converter: { value: Object.freeze(N) },
        }
      );
    })(_, { path: "/" });
  }),
  (function (l) {
    (function () {
      if ("undefined" != typeof module && module.exports)
        return function (l) {
          module.exports = l();
        };
      if ("function" == typeof define && define.amd) return define;
      if ("undefined" != typeof window)
        return function (l) {
          window.MobileDetect = l();
        };
      throw Error("unknown environment");
    })()(function () {
      "use strict";
      function _(l, _) {
        return null != l && null != _ && l.toLowerCase() === _.toLowerCase();
      }
      function C(l, _) {
        var C,
          N,
          X = l.length;
        if (X && _) {
          for (C = _.toLowerCase(), N = 0; N < X; ++N)
            if (C === l[N].toLowerCase()) return !0;
        }
        return !1;
      }
      function N(l) {
        for (var _ in l) es.call(l, _) && (l[_] = RegExp(l[_], "i"));
      }
      function X(l, _) {
        (this.ua = (l || "").substr(0, 500)),
          (this._cache = {}),
          (this.maxPhoneWidth = _ || 600);
      }
      var ee,
        et,
        en,
        er,
        ei,
        eo,
        ea = {
          mobileDetectRules: {
            phones: {
              iPhone: "\\biPhone\\b|\\biPod\\b",
              BlackBerry:
                "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
              HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
              Nexus:
                "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
              Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
              Motorola:
                "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
              Samsung:
                "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
              LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
              Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
              Asus: "Asus.*Galaxy|PadFone.*Mobile",
              NokiaLumia: "Lumia [0-9]{3,4}",
              Micromax:
                "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
              Palm: "PalmSource|Palm",
              Vertu:
                "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
              Pantech:
                "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
              Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
              Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
              iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
              SimValley:
                "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
              Wolfgang:
                "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
              Alcatel: "Alcatel",
              Nintendo: "Nintendo (3DS|Switch)",
              Amoi: "Amoi",
              INQ: "INQ",
              OnePlus: "ONEPLUS",
              GenericPhone:
                "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
            },
            tablets: {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              GoogleTablet: "Android.*Pixel C",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet:
                "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet:
                "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet:
                "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet:
                "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
              ToshibaTablet:
                "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet:
                "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet:
                "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
              DellTablet:
                "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet:
                "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet:
                "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet:
                "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet:
                "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
              PhilipsTablet:
                "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet:
                "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet:
                "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet:
                "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet:
                "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet:
                "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet:
                "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet:
                "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet:
                "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android.*\\bG1\\b(?!\\))",
              MicromaxTablet:
                "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet:
                "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet:
                "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet:
                "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet:
                "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet:
                "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet:
                "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet:
                "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet:
                "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9|TECNO DP8D",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet:
                "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet:
                "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet:
                "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet:
                "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet:
                "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet:
                "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MediacomTablet:
                "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet:
                "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
            },
            oss: {
              AndroidOS: "Android",
              BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
              PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
              SymbianOS:
                "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
              WindowsMobileOS:
                "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
              WindowsPhoneOS:
                "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
              iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
              iPadOS: "CPU OS 13",
              MeeGoOS: "MeeGo",
              MaemoOS: "Maemo",
              JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
              webOS: "webOS|hpwOS",
              badaOS: "\\bBada\\b",
              BREWOS: "BREW",
            },
            uas: {
              Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
              Dolfin: "\\bDolfin\\b",
              Opera:
                "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
              Skyfire: "Skyfire",
              Edge: "Mobile Safari/[.0-9]* Edge",
              IE: "IEMobile|MSIEMobile",
              Firefox:
                "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
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
              GenericBrowser:
                "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
              PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
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
              IE: [
                "IEMobile/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];",
                "Trident/[0-9.]+;.*rv:[VER]",
              ],
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
              BlackBerry: [
                "BlackBerry[\\w]+/[VER]",
                "BlackBerry.*Version/[VER]",
                "Version/[VER]",
              ],
              BREW: "BREW [VER]",
              Java: "Java/[VER]",
              "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]",
              ],
              "Windows Phone": "Windows Phone [VER]",
              "Windows CE": "Windows CE/[VER]",
              "Windows NT": "Windows NT [VER]",
              Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
              webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            },
            utils: {
              Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
              MobileBot:
                "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
              DesktopMode: "WPDesktop",
              TV: "SonyDTV|HbbTV",
              WebKit: "(webkit)[ /]([\\w.]+)",
              Console:
                "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
              Watch: "SM-V700",
            },
          },
          detectMobileBrowsers: {
            fullPattern:
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern:
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i,
          },
        },
        es = Object.prototype.hasOwnProperty;
      (ea.FALLBACK_PHONE = "UnknownPhone"),
        (ea.FALLBACK_TABLET = "UnknownTablet"),
        (ea.FALLBACK_MOBILE = "UnknownMobile");
      var el =
          "isArray" in Array
            ? Array.isArray
            : function (l) {
                return "[object Array]" === Object.prototype.toString.call(l);
              },
        eu = ea.mobileDetectRules;
      for (ee in eu.props)
        if (es.call(eu.props, ee)) {
          for (
            ei = (et = el((et = eu.props[ee])) ? et : [et]).length, er = 0;
            er < ei;
            ++er
          )
            (eo = (en = et[er]).indexOf("[VER]")) >= 0 &&
              (en =
                en.substring(0, eo) + "([\\w._\\+]+)" + en.substring(eo + 5)),
              (et[er] = RegExp(en, "i"));
          eu.props[ee] = et;
        }
      return (
        N(eu.oss),
        N(eu.phones),
        N(eu.tablets),
        N(eu.uas),
        N(eu.utils),
        (eu.oss0 = {
          WindowsPhoneOS: eu.oss.WindowsPhoneOS,
          WindowsMobileOS: eu.oss.WindowsMobileOS,
        }),
        (ea.findMatch = function (l, _) {
          for (var C in l) if (es.call(l, C) && l[C].test(_)) return C;
          return null;
        }),
        (ea.findMatches = function (l, _) {
          var C,
            N = [];
          for (C in l) es.call(l, C) && l[C].test(_) && N.push(C);
          return N;
        }),
        (ea.getVersionStr = function (l, _) {
          var C,
            N,
            X,
            ee,
            et = ea.mobileDetectRules.props;
          if (es.call(et, l)) {
            for (X = (C = et[l]).length, N = 0; N < X; ++N)
              if (null !== (ee = C[N].exec(_))) return ee[1];
          }
          return null;
        }),
        (ea.getVersion = function (l, _) {
          return (l = ea.getVersionStr(l, _)) ? ea.prepareVersionNo(l) : NaN;
        }),
        (ea.prepareVersionNo = function (l) {
          var _ = l.split(/[a-z._ \/\-]/i);
          return (
            1 === _.length && (l = _[0]),
            _.length > 1 && ((l = _[0] + "."), _.shift(), (l += _.join(""))),
            Number(l)
          );
        }),
        (ea.isMobileFallback = function (l) {
          return (
            ea.detectMobileBrowsers.fullPattern.test(l) ||
            ea.detectMobileBrowsers.shortPattern.test(l.substr(0, 4))
          );
        }),
        (ea.isTabletFallback = function (l) {
          return ea.detectMobileBrowsers.tabletPattern.test(l);
        }),
        (ea.prepareDetectionCache = function (_, C, N) {
          var ee;
          if (_.mobile === l) {
            if ((ee = ea.findMatch(ea.mobileDetectRules.tablets, C))) {
              (_.mobile = _.tablet = ee), (_.phone = null);
              return;
            }
            if ((ee = ea.findMatch(ea.mobileDetectRules.phones, C))) {
              (_.mobile = _.phone = ee), (_.tablet = null);
              return;
            }
            ea.isMobileFallback(C)
              ? (ee = X.isPhoneSized(N)) === l
                ? ((_.mobile = ea.FALLBACK_MOBILE), (_.tablet = _.phone = null))
                : ee
                  ? ((_.mobile = _.phone = ea.FALLBACK_PHONE),
                    (_.tablet = null))
                  : ((_.mobile = _.tablet = ea.FALLBACK_TABLET),
                    (_.phone = null))
              : ea.isTabletFallback(C)
                ? ((_.mobile = _.tablet = ea.FALLBACK_TABLET), (_.phone = null))
                : (_.mobile = _.tablet = _.phone = null);
            return;
          }
        }),
        (ea.mobileGrade = function (l) {
          var _ = null !== l.mobile();
          return (l.os("iOS") && l.version("iPad") >= 4.3) ||
            (l.os("iOS") && l.version("iPhone") >= 3.1) ||
            (l.os("iOS") && l.version("iPod") >= 3.1) ||
            (l.version("Android") > 2.1 && l.is("Webkit")) ||
            l.version("Windows Phone OS") >= 7 ||
            (l.is("BlackBerry") && l.version("BlackBerry") >= 6) ||
            l.match("Playbook.*Tablet") ||
            (l.version("webOS") >= 1.4 && l.match("Palm|Pre|Pixi")) ||
            l.match("hp.*TouchPad") ||
            (l.is("Firefox") && l.version("Firefox") >= 12) ||
            (l.is("Chrome") &&
              l.is("AndroidOS") &&
              l.version("Android") >= 4) ||
            (l.is("Skyfire") &&
              l.version("Skyfire") >= 4.1 &&
              l.is("AndroidOS") &&
              l.version("Android") >= 2.3) ||
            (l.is("Opera") &&
              l.version("Opera Mobi") > 11 &&
              l.is("AndroidOS")) ||
            l.is("MeeGoOS") ||
            l.is("Tizen") ||
            (l.is("Dolfin") && l.version("Bada") >= 2) ||
            ((l.is("UC Browser") || l.is("Dolfin")) &&
              l.version("Android") >= 2.3) ||
            l.match("Kindle Fire") ||
            (l.is("Kindle") && l.version("Kindle") >= 3) ||
            (l.is("AndroidOS") && l.is("NookTablet")) ||
            (l.version("Chrome") >= 11 && !_) ||
            (l.version("Safari") >= 5 && !_) ||
            (l.version("Firefox") >= 4 && !_) ||
            (l.version("MSIE") >= 7 && !_) ||
            (l.version("Opera") >= 10 && !_)
            ? "A"
            : (l.os("iOS") && 4.3 > l.version("iPad")) ||
                (l.os("iOS") && 3.1 > l.version("iPhone")) ||
                (l.os("iOS") && 3.1 > l.version("iPod")) ||
                (l.is("Blackberry") &&
                  l.version("BlackBerry") >= 5 &&
                  6 > l.version("BlackBerry")) ||
                (l.version("Opera Mini") >= 5 &&
                  6.5 >= l.version("Opera Mini") &&
                  (l.version("Android") >= 2.3 || l.is("iOS"))) ||
                l.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
                (l.version("Opera Mobi") >= 11 && l.is("SymbianOS"))
              ? "B"
              : (5 > l.version("BlackBerry") ||
                  l.match("MSIEMobile|Windows CE.*Mobile") ||
                  l.version("Windows Mobile"),
                "C");
        }),
        (ea.detectOS = function (l) {
          return (
            ea.findMatch(ea.mobileDetectRules.oss0, l) ||
            ea.findMatch(ea.mobileDetectRules.oss, l)
          );
        }),
        (ea.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height
            ? window.screen.width
            : window.screen.height;
        }),
        (X.prototype = {
          constructor: X,
          mobile: function () {
            return (
              ea.prepareDetectionCache(
                this._cache,
                this.ua,
                this.maxPhoneWidth
              ),
              this._cache.mobile
            );
          },
          phone: function () {
            return (
              ea.prepareDetectionCache(
                this._cache,
                this.ua,
                this.maxPhoneWidth
              ),
              this._cache.phone
            );
          },
          tablet: function () {
            return (
              ea.prepareDetectionCache(
                this._cache,
                this.ua,
                this.maxPhoneWidth
              ),
              this._cache.tablet
            );
          },
          userAgent: function () {
            return (
              this._cache.userAgent === l &&
                (this._cache.userAgent = ea.findMatch(
                  ea.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgent
            );
          },
          userAgents: function () {
            return (
              this._cache.userAgents === l &&
                (this._cache.userAgents = ea.findMatches(
                  ea.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgents
            );
          },
          os: function () {
            return (
              this._cache.os === l && (this._cache.os = ea.detectOS(this.ua)),
              this._cache.os
            );
          },
          version: function (l) {
            return ea.getVersion(l, this.ua);
          },
          versionStr: function (l) {
            return ea.getVersionStr(l, this.ua);
          },
          is: function (l) {
            return (
              C(this.userAgents(), l) ||
              _(l, this.os()) ||
              _(l, this.phone()) ||
              _(l, this.tablet()) ||
              C(ea.findMatches(ea.mobileDetectRules.utils, this.ua), l)
            );
          },
          match: function (l) {
            return (l = l instanceof RegExp ? l : RegExp(l, "i")).test(this.ua);
          },
          isPhoneSized: function (l) {
            return X.isPhoneSized(l || this.maxPhoneWidth);
          },
          mobileGrade: function () {
            return (
              this._cache.grade === l &&
                (this._cache.grade = ea.mobileGrade(this)),
              this._cache.grade
            );
          },
        }),
        "undefined" != typeof window && window.screen
          ? (X.isPhoneSized = function (_) {
              return _ < 0 ? l : ea.getDeviceSmallerSide() <= _;
            })
          : (X.isPhoneSized = function () {}),
        (X._impl = ea),
        (X.version = "1.4.4 2019-09-21"),
        X
      );
    });
  })(),
  (function (l, _) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = _())
      : "function" == typeof define && define.amd
        ? define([], _)
        : "object" == typeof exports
          ? (exports.devtoolsDetector = _())
          : (l.devtoolsDetector = _());
  })("undefined" != typeof self ? self : this, function () {
    var C7, C8;
    return (
      (C7 = [
        function (l, _, C) {
          "use strict";
          (function (l) {
            (_.c = function () {
              return (
                "undefined" != typeof performance ? performance : Date
              ).now();
            }),
              (_.b = function (l) {
                for (
                  var _ = (l = void 0 === l ? {} : l).includes,
                    l = l.excludes,
                    l = void 0 === l ? [] : l,
                    C = !1,
                    N = !1,
                    X = 0,
                    ee = void 0 === _ ? [] : _;
                  X < ee.length;
                  X++
                )
                  if (!0 === ee[X]) {
                    C = !0;
                    break;
                  }
                for (var et = 0, en = l; et < en.length; et++)
                  if (!0 === en[et]) {
                    N = !0;
                    break;
                  }
                return C && !N;
              }),
              (_.d = function (l, _, C) {
                return void 0 !== (l = X.a[l]) && Object(N.compare)(l, _, C);
              }),
              (_.a = function () {
                return "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                    ? window
                    : void 0 !== l
                      ? l
                      : this;
              });
            var N = C(11);
            C.n(N);
            var X = C(5);
          }).call(_, C(10));
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "c", function () {
            return X;
          }),
            C.d(_, "d", function () {
              return ee;
            }),
            C.d(_, "b", function () {
              return et;
            }),
            C.d(_, "g", function () {
              return en;
            }),
            C.d(_, "e", function () {
              return er;
            }),
            C.d(_, "a", function () {
              return ei;
            }),
            C.d(_, "f", function () {
              return eo;
            });
          var N,
            _ = C(3),
            C = C(0),
            C = Object(C.a)(),
            X =
              "InstallTrigger" in ((null == C ? void 0 : C.window) || {}) ||
              /firefox/i.test(_.b),
            ee = /trident/i.test(_.b) || /msie/i.test(_.b),
            et = /edge/i.test(_.b),
            en = /webkit/i.test(_.b) && !et,
            er = /IqiyiApp/.test(_.b),
            ei =
              (null == (N = null == C ? void 0 : C.window)
                ? void 0
                : N.chrome) !== void 0 ||
              /chrome/i.test(_.b) ||
              /CriOS/i.test(_.b),
            eo =
              "[object SafariRemoteNotification]" ===
                (
                  (null ==
                  (C =
                    null == (N = null == C ? void 0 : C.window)
                      ? void 0
                      : N.safari)
                    ? void 0
                    : C.pushNotification) || !1
                ).toString() ||
              (/safari/i.test(_.b) && !ei);
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "b", function () {
            return ee;
          }),
            C.d(_, "c", function () {
              return et;
            }),
            C.d(_, "a", function () {
              return en;
            });
          var N = C(1);
          function X(l) {
            if (console) {
              if (!N.d && !N.b) return console[l];
              if ("log" === l || "clear" === l)
                return function () {
                  for (var _ = [], C = 0; C < arguments.length; C++)
                    _[C] = arguments[C];
                  console[l].apply(console, _);
                };
            }
            return function () {
              for (var l = 0; l < arguments.length; l++);
            };
          }
          var ee = X("log"),
            et = X("table"),
            en = X("clear");
        },
        function (l, _, C) {
          "use strict";
          (_.a = function () {
            for (var l, _ = [], C = 0; C < arguments.length; C++)
              _[C] = arguments[C];
            return null != N && N.document
              ? (l = N.document).createElement.apply(l, _)
              : {};
          }),
            C.d(_, "b", function () {
              return X;
            });
          var _ = C(0),
            N = Object(_.a)(),
            X =
              (null == (C = null == N ? void 0 : N.navigator)
                ? void 0
                : C.userAgent) || "xxxxx";
        },
        function (l, _, C) {
          "use strict";
          Object.defineProperty(_, "__esModule", { value: !0 }),
            (_.addListener = function (l) {
              ea.addListener(l);
            }),
            (_.removeListener = function (l) {
              ea.removeListener(l);
            }),
            (_.isLaunch = function () {
              return ea.isLaunch();
            }),
            (_.launch = function () {
              ea.launch();
            }),
            (_.stop = function () {
              ea.stop();
            }),
            (_.setDetectDelay = function (l) {
              ea.setDetectDelay(l);
            });
          var N = C(7),
            X = C(8);
          C.d(_, "DevtoolsDetector", function () {
            return N.a;
          }),
            C.d(_, "checkers", function () {
              return X;
            });
          var ee = C(0);
          C.d(_, "match", function () {
            return ee.b;
          }),
            C.d(_, "specificVersionMatch", function () {
              return ee.d;
            });
          var et = C(1);
          C.d(_, "isFirefox", function () {
            return et.c;
          }),
            C.d(_, "isIE", function () {
              return et.d;
            }),
            C.d(_, "isEdge", function () {
              return et.b;
            }),
            C.d(_, "isWebkit", function () {
              return et.g;
            }),
            C.d(_, "isIqiyiApp", function () {
              return et.e;
            }),
            C.d(_, "isChrome", function () {
              return et.a;
            }),
            C.d(_, "isSafari", function () {
              return et.f;
            });
          var en = C(2);
          C.d(_, "log", function () {
            return en.b;
          }),
            C.d(_, "table", function () {
              return en.c;
            }),
            C.d(_, "clear", function () {
              return en.a;
            });
          var er = C(19);
          C.d(_, "isMobile", function () {
            return er.a;
          });
          var ei = C(5);
          C.d(_, "versionMap", function () {
            return ei.a;
          });
          var eo = C(6);
          C.d(_, "isMac", function () {
            return eo.d;
          }),
            C.d(_, "isIpad", function () {
              return eo.b;
            }),
            C.d(_, "isIphone", function () {
              return eo.c;
            }),
            C.d(_, "isAndroid", function () {
              return eo.a;
            }),
            C.d(_, "isWindows", function () {
              return eo.e;
            });
          var ea = new N.a({
            checkers: [
              X.erudaChecker,
              X.elementIdChecker,
              X.regToStringChecker,
              X.functionToStringChecker,
              X.depRegToStringChecker,
              X.dateToStringChecker,
              X.performanceChecker,
              X.debuggerChecker,
            ],
          });
          _.default = ea;
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return N;
          });
          for (
            var N = {},
              X = 0,
              ee = (C(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || [];
            X < ee.length;
            X++
          ) {
            var et = ee[X].split("/"),
              en = et[0],
              et = et[1];
            N[en] = et;
          }
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "d", function () {
            return N;
          }),
            C.d(_, "b", function () {
              return X;
            }),
            C.d(_, "c", function () {
              return ee;
            }),
            C.d(_, "a", function () {
              return et;
            }),
            C.d(_, "e", function () {
              return en;
            });
          var _ = C(3),
            N = /macintosh/i.test(_.b),
            X = /ipad/i.test(_.b) || (N && navigator.maxTouchPoints > 1),
            ee = /iphone/i.test(_.b),
            et = /android/i.test(_.b),
            en = /windows/i.test(_.b);
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return ee;
          });
          var N =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            X =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              };
          (et.prototype.launch = function () {
            this._detectLoopDelay <= 0 && this.setDetectDelay(500),
              this._detectLoopStopped &&
                ((this._detectLoopStopped = !1), this._detectLoop());
          }),
            (et.prototype.stop = function () {
              this._detectLoopStopped ||
                ((this._detectLoopStopped = !0), clearTimeout(this._timer));
            }),
            (et.prototype.isLaunch = function () {
              return !this._detectLoopStopped;
            }),
            (et.prototype.setDetectDelay = function (l) {
              this._detectLoopDelay = l;
            }),
            (et.prototype.addListener = function (l) {
              this._listeners.push(l);
            }),
            (et.prototype.removeListener = function (l) {
              this._listeners = this._listeners.filter(function (_) {
                return _ !== l;
              });
            }),
            (et.prototype._broadcast = function (l) {
              for (var _ = 0, C = this._listeners; _ < C.length; _++) {
                var N = C[_];
                try {
                  N(l.isOpen, l);
                } catch (X) {}
              }
            }),
            (et.prototype._detectLoop = function () {
              return N(this, void 0, void 0, function () {
                var l,
                  _,
                  C,
                  N,
                  ee,
                  et = this;
                return X(this, function (X) {
                  switch (X.label) {
                    case 0:
                      (l = !1),
                        (_ = ""),
                        (C = 0),
                        (N = this._checkers),
                        (X.label = 1);
                    case 1:
                      if (C < N.length) return [4, (ee = N[C]).isEnable()];
                      return [3, 6];
                    case 2:
                      if (X.sent()) return (_ = ee.name), [4, ee.isOpen()];
                      return [3, 4];
                    case 3:
                      (l = X.sent()), (X.label = 4);
                    case 4:
                      if (l) return [3, 6];
                      X.label = 5;
                    case 5:
                      return C++, [3, 1];
                    case 6:
                      return (
                        l != this._isOpen &&
                          ((this._isOpen = l),
                          this._broadcast({ isOpen: l, checkerName: _ })),
                        this._detectLoopDelay > 0
                          ? (this._timer = setTimeout(function () {
                              return et._detectLoop();
                            }, this._detectLoopDelay))
                          : this.stop(),
                        [2]
                      );
                  }
                });
              });
            });
          var ee = et;
          function et(l) {
            (l = l.checkers),
              (this._listeners = []),
              (this._isOpen = !1),
              (this._detectLoopStopped = !0),
              (this._detectLoopDelay = 500),
              (this._checkers = l.slice());
          }
        },
        function (l, _, C) {
          "use strict";
          Object.defineProperty(_, "__esModule", { value: !0 });
          var N = C(9);
          C.d(_, "depRegToStringChecker", function () {
            return N.a;
          });
          var X = C(12);
          C.d(_, "elementIdChecker", function () {
            return X.a;
          });
          var ee = C(13);
          C.d(_, "functionToStringChecker", function () {
            return ee.a;
          });
          var et = C(14);
          C.d(_, "regToStringChecker", function () {
            return et.a;
          });
          var en = C(15);
          C.d(_, "debuggerChecker", function () {
            return en.a;
          });
          var er = C(16);
          C.d(_, "dateToStringChecker", function () {
            return er.a;
          });
          var ei = C(17);
          C.d(_, "performanceChecker", function () {
            return ei.a;
          });
          var eo = C(18);
          C.d(_, "erudaChecker", function () {
            return eo.a;
          });
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return eo;
          });
          var N = C(1),
            X = C(2),
            ee = C(0),
            et =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            en =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            er = / /,
            ei = !1;
          er.toString = function () {
            return (ei = !0), eo.name;
          };
          var eo = {
            name: "dep-reg-to-string",
            isOpen: function () {
              return et(this, void 0, void 0, function () {
                return en(this, function (l) {
                  return (
                    (ei = !1), Object(X.c)({ dep: er }), Object(X.a)(), [2, ei]
                  );
                });
              });
            },
            isEnable: function () {
              return et(this, void 0, void 0, function () {
                return en(this, function (l) {
                  return [
                    2,
                    Object(ee.b)({ includes: [!0], excludes: [N.c, N.d] }),
                  ];
                });
              });
            },
          };
        },
        function (C9, CC) {
          var CX = (function () {
            return this;
          })();
          try {
            CX = CX || Function("return this")() || (0, eval)("this");
          } catch (CN) {
            "object" == typeof window && (CX = window);
          }
          C9.exports = CX;
        },
        function (l, _, C) {
          var N;
          void 0 !==
            (_ =
              "function" ==
              typeof (N = function () {
                var l =
                  /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
                function _(l) {
                  var _,
                    C = l.replace(/^v/, "").replace(/\+.*$/, ""),
                    N = "-",
                    X = -1 === (_ = C).indexOf(N) ? _.length : _.indexOf(N),
                    ee = C.substring(0, X).split(".");
                  return ee.push(C.substring(X + 1)), ee;
                }
                function C(l) {
                  return isNaN(Number(l)) ? l : Number(l);
                }
                function N(_) {
                  if ("string" != typeof _)
                    throw TypeError("Invalid argument expected string");
                  if (!l.test(_))
                    throw Error(
                      "Invalid argument not valid semver ('" + _ + "' received)"
                    );
                }
                function X(l, X) {
                  [l, X].forEach(N);
                  for (
                    var ee = _(l), et = _(X), en = 0;
                    en < Math.max(ee.length - 1, et.length - 1);
                    en++
                  ) {
                    var er = parseInt(ee[en] || 0, 10),
                      ei = parseInt(et[en] || 0, 10);
                    if (er > ei) return 1;
                    if (ei > er) return -1;
                  }
                  var eo = ee[ee.length - 1],
                    ea = et[et.length - 1];
                  if (eo && ea) {
                    var es = eo.split(".").map(C),
                      el = ea.split(".").map(C);
                    for (en = 0; en < Math.max(es.length, el.length); en++) {
                      if (
                        void 0 === es[en] ||
                        ("string" == typeof el[en] && "number" == typeof es[en])
                      )
                        return -1;
                      if (
                        void 0 === el[en] ||
                        ("string" == typeof es[en] &&
                          "number" == typeof el[en]) ||
                        es[en] > el[en]
                      )
                        return 1;
                      if (el[en] > es[en]) return -1;
                    }
                  } else if (eo || ea) return eo ? -1 : 1;
                  return 0;
                }
                var ee = [">", ">=", "=", "<", "<="],
                  et = {
                    ">": [1],
                    ">=": [0, 1],
                    "=": [0],
                    "<=": [-1, 0],
                    "<": [-1],
                  };
                return (
                  (X.validate = function (_) {
                    return "string" == typeof _ && l.test(_);
                  }),
                  (X.compare = function (l, _, C) {
                    !(function (l) {
                      if ("string" != typeof l)
                        throw TypeError(
                          "Invalid operator type, expected string but got " +
                            typeof l
                        );
                      if (-1 === ee.indexOf(l))
                        throw TypeError(
                          "Invalid operator, expected one of " + ee.join("|")
                        );
                    })(C);
                    var N = X(l, _);
                    return et[C].indexOf(N) > -1;
                  }),
                  X
                );
              })
                ? N.apply(_, [])
                : N) && (l.exports = _);
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return eo;
          });
          var N = C(1),
            X = C(2),
            ee = C(0),
            _ = C(3),
            et =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            en =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            er = Object(_.a)("div"),
            ei = !1;
          Object.defineProperty(er, "id", {
            get: function () {
              return (ei = !0), eo.name;
            },
            configurable: !0,
          });
          var eo = {
            name: "element-id",
            isOpen: function () {
              return et(this, void 0, void 0, function () {
                return en(this, function (l) {
                  return (ei = !1), Object(X.b)(er), Object(X.a)(), [2, ei];
                });
              });
            },
            isEnable: function () {
              return et(this, void 0, void 0, function () {
                return en(this, function (l) {
                  return [
                    2,
                    Object(ee.b)({ includes: [!0], excludes: [N.d, N.b, N.c] }),
                  ];
                });
              });
            },
          };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return ea;
          });
          var N = C(1),
            X = C(2),
            ee = C(6),
            et = C(0),
            en =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            er =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              };
          function ei() {}
          var eo = 0;
          ei.toString = function () {
            return eo++, "";
          };
          var ea = {
            name: "function-to-string",
            isOpen: function () {
              return en(this, void 0, void 0, function () {
                return er(this, function (l) {
                  return (
                    (eo = 0), Object(X.b)(ei), Object(X.a)(), [2, 2 === eo]
                  );
                });
              });
            },
            isEnable: function () {
              return en(this, void 0, void 0, function () {
                return er(this, function (l) {
                  return [
                    2,
                    Object(et.b)({
                      includes: [!0],
                      excludes: [N.e, N.c, (ee.b || ee.c) && N.a],
                    }),
                  ];
                });
              });
            },
          };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return eo;
          });
          var N = C(2),
            X = C(1),
            ee = C(0),
            et =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            en =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            er = / /,
            ei = !1;
          er.toString = function () {
            return (ei = !0), eo.name;
          };
          var eo = {
            name: "reg-to-string",
            isOpen: function () {
              return et(this, void 0, void 0, function () {
                return en(this, function (l) {
                  return (ei = !1), Object(N.b)(er), Object(N.a)(), [2, ei];
                });
              });
            },
            isEnable: function () {
              return et(this, void 0, void 0, function () {
                return en(this, function (l) {
                  return [2, Object(ee.b)({ includes: [!0], excludes: [X.g] })];
                });
              });
            },
          };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return et;
          });
          var N = C(0),
            X =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            ee =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            et = {
              name: "debugger-checker",
              isOpen: function () {
                return X(this, void 0, void 0, function () {
                  var l;
                  return ee(this, function (_) {
                    return (
                      (l = Object(N.c)()),
                      function () {}.constructor("debugger")(),
                      [2, Object(N.c)() - l > 100]
                    );
                  });
                });
              },
              isEnable: function () {
                return X(this, void 0, void 0, function () {
                  return ee(this, function (l) {
                    return [2, !0];
                  });
                });
              },
            };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return ea;
          });
          var N = C(1),
            X = C(2),
            ee = C(0),
            et = C(4),
            en =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            er =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            ei = new Date(),
            eo = 0;
          ei.toString = function () {
            return eo++, "";
          };
          var ea = {
            name: "date-to-string",
            isOpen: function () {
              return en(this, void 0, void 0, function () {
                return er(this, function (l) {
                  return (
                    (eo = 0), Object(X.b)(ei), Object(X.a)(), [2, 2 === eo]
                  );
                });
              });
            },
            isEnable: function () {
              return en(this, void 0, void 0, function () {
                return er(this, function (l) {
                  return [
                    2,
                    Object(ee.b)({
                      includes: [N.a],
                      excludes: [(et.isIpad || et.isIphone) && N.a],
                    }),
                  ];
                });
              });
            },
          };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return eo;
          });
          var N = C(1),
            X = C(2),
            ee = C(0),
            et =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            en =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            er = null,
            ei = 0,
            eo = {
              name: "performance",
              isOpen: function () {
                return et(this, void 0, void 0, function () {
                  var l, _;
                  return en(this, function (C) {
                    var N;
                    return (null === er &&
                      (er = (function () {
                        for (
                          var l = (function () {
                              for (var l = {}, _ = 0; _ < 500; _++)
                                l[`${_}`] = `${_}`;
                              return l;
                            })(),
                            _ = [],
                            C = 0;
                          C < 50;
                          C++
                        )
                          _.push(l);
                        return _;
                      })()),
                    (N = Object(ee.c)()),
                    Object(X.c)(er),
                    (l = Object(ee.c)() - N),
                    (N = Object(ee.c)()),
                    Object(X.b)(er),
                    (ei = Math.max(ei, (_ = Object(ee.c)() - N))),
                    Object(X.a)(),
                    0 == l || 0 === ei)
                      ? [2, !1]
                      : [2, 10 * ei < l];
                  });
                });
              },
              isEnable: function () {
                return et(this, void 0, void 0, function () {
                  return en(this, function (l) {
                    return [2, Object(ee.b)({ includes: [N.a], excludes: [] })];
                  });
                });
              },
            };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return ee;
          });
          var N =
              (this && this.__awaiter) ||
              function (l, _, C, N) {
                return new (C = C || Promise)(function (X, ee) {
                  function et(l) {
                    try {
                      er(N.next(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function en(l) {
                    try {
                      er(N.throw(l));
                    } catch (_) {
                      ee(_);
                    }
                  }
                  function er(l) {
                    var _;
                    l.done
                      ? X(l.value)
                      : ((_ = l.value) instanceof C
                          ? _
                          : new C(function (l) {
                              l(_);
                            })
                        ).then(et, en);
                  }
                  er((N = N.apply(l, _ || [])).next());
                });
              },
            X =
              (this && this.__generator) ||
              function (l, _) {
                var C,
                  N,
                  X,
                  ee = {
                    label: 0,
                    sent: function () {
                      if (1 & X[0]) throw X[1];
                      return X[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  et = { next: en(0), throw: en(1), return: en(2) };
                return (
                  "function" == typeof Symbol &&
                    (et[Symbol.iterator] = function () {
                      return this;
                    }),
                  et
                );
                function en(et) {
                  return function (en) {
                    var er = [et, en];
                    if (C) throw TypeError("Generator is already executing.");
                    for (; ee; )
                      try {
                        if (
                          ((C = 1),
                          N &&
                            (X =
                              2 & er[0]
                                ? N.return
                                : er[0]
                                  ? N.throw || ((X = N.return) && X.call(N), 0)
                                  : N.next) &&
                            !(X = X.call(N, er[1])).done)
                        )
                          return X;
                        switch (
                          ((N = 0), (er = X ? [2 & er[0], X.value] : er)[0])
                        ) {
                          case 0:
                          case 1:
                            X = er;
                            break;
                          case 4:
                            return ee.label++, { value: er[1], done: !1 };
                          case 5:
                            ee.label++, (N = er[1]), (er = [0]);
                            continue;
                          case 7:
                            (er = ee.ops.pop()), ee.trys.pop();
                            continue;
                          default:
                            if (
                              !(X =
                                (X = ee.trys).length > 0 && X[X.length - 1]) &&
                              (6 === er[0] || 2 === er[0])
                            ) {
                              ee = 0;
                              continue;
                            }
                            if (
                              3 === er[0] &&
                              (!X || (er[1] > X[0] && er[1] < X[3]))
                            )
                              ee.label = er[1];
                            else if (6 === er[0] && ee.label < X[1])
                              (ee.label = X[1]), (X = er);
                            else {
                              if (!X || !(ee.label < X[2])) {
                                X[2] && ee.ops.pop(), ee.trys.pop();
                                continue;
                              }
                              (ee.label = X[2]), ee.ops.push(er);
                            }
                        }
                        er = _.call(l, ee);
                      } catch (ei) {
                        (er = [6, ei]), (N = 0);
                      } finally {
                        C = X = 0;
                      }
                    if (5 & er[0]) throw er[1];
                    return { value: er[0] ? er[1] : void 0, done: !0 };
                  };
                }
              },
            ee = {
              name: "eruda",
              isOpen: function () {
                var l;
                return N(this, void 0, void 0, function () {
                  return X(this, function (_) {
                    return "undefined" != typeof eruda
                      ? [
                          2,
                          (null == (l = eruda?._devTools)
                            ? void 0
                            : l._isShow) === !0,
                        ]
                      : [2, !1];
                  });
                });
              },
              isEnable: function () {
                return N(this, void 0, void 0, function () {
                  return X(this, function (l) {
                    return [2, !0];
                  });
                });
              },
            };
        },
        function (l, _, C) {
          "use strict";
          C.d(_, "a", function () {
            return N;
          });
          var _ = C(3),
            N = /mobile/i.test(_.b);
        },
      ]),
      (C8 = {}),
      (C6.m = C7),
      (C6.c = C8),
      (C6.d = function (l, _, C) {
        C6.o(l, _) ||
          Object.defineProperty(l, _, {
            configurable: !1,
            enumerable: !0,
            get: C,
          });
      }),
      (C6.n = function (l) {
        var _ =
          l && l.__esModule
            ? function () {
                return l.default;
              }
            : function () {
                return l;
              };
        return C6.d(_, "a", _), _;
      }),
      (C6.o = function (l, _) {
        return Object.prototype.hasOwnProperty.call(l, _);
      }),
      (C6.p = ""),
      C6((C6.s = 4))
    );
    function C6(l) {
      var _;
      return (
        C8[l] ||
        ((_ = C8[l] = { i: l, l: !1, exports: {} }),
        C7[l].call(_.exports, _, _.exports, C6),
        (_.l = !0),
        _)
      ).exports;
    }
  }),
  (function (l) {
    ("object" != typeof exports || "undefined" == typeof module) &&
    "function" == typeof define &&
    define.amd
      ? define(l)
      : l();
  })(function () {
    "use strict";
    function l(l) {
      var _ = this.constructor;
      return this.then(
        function (C) {
          return _.resolve(l()).then(function () {
            return C;
          });
        },
        function (C) {
          return _.resolve(l()).then(function () {
            return _.reject(C);
          });
        }
      );
    }
    var _ = setTimeout;
    function C() {}
    function N(l) {
      if (!(this instanceof N))
        throw TypeError("Promises must be constructed via new");
      if ("function" != typeof l) throw TypeError("not a function");
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        ei(l, this);
    }
    function X(l, _) {
      for (; 3 === l._state; ) l = l._value;
      0 === l._state
        ? l._deferreds.push(_)
        : ((l._handled = !0),
          N._immediateFn(function () {
            var C,
              N = 1 === l._state ? _.onFulfilled : _.onRejected;
            if (null === N) (1 === l._state ? ee : et)(_.promise, l._value);
            else {
              try {
                C = N(l._value);
              } catch (X) {
                et(_.promise, X);
                return;
              }
              ee(_.promise, C);
            }
          }));
    }
    function ee(l, _) {
      try {
        if (_ === l)
          throw TypeError("A promise cannot be resolved with itself.");
        if (_ && ("object" == typeof _ || "function" == typeof _)) {
          var C,
            X,
            ee = _.then;
          if (_ instanceof N) {
            (l._state = 3), (l._value = _), en(l);
            return;
          }
          if ("function" == typeof ee) {
            ei(
              ((C = ee),
              (X = _),
              function () {
                C.apply(X, arguments);
              }),
              l
            );
            return;
          }
        }
        (l._state = 1), (l._value = _), en(l);
      } catch (er) {
        et(l, er);
      }
    }
    function et(l, _) {
      (l._state = 2), (l._value = _), en(l);
    }
    function en(l) {
      2 === l._state &&
        0 === l._deferreds.length &&
        N._immediateFn(function () {
          l._handled || N._unhandledRejectionFn(l._value);
        });
      for (var _ = 0, C = l._deferreds.length; _ < C; _++)
        X(l, l._deferreds[_]);
      l._deferreds = null;
    }
    function er(l, _, C) {
      (this.onFulfilled = "function" == typeof l ? l : null),
        (this.onRejected = "function" == typeof _ ? _ : null),
        (this.promise = C);
    }
    function ei(l, _) {
      var C = !1;
      try {
        l(
          function (l) {
            C || ((C = !0), ee(_, l));
          },
          function (l) {
            C || ((C = !0), et(_, l));
          }
        );
      } catch (N) {
        C || ((C = !0), et(_, N));
      }
    }
    (N.prototype.catch = function (l) {
      return this.then(null, l);
    }),
      (N.prototype.then = function (l, _) {
        var N = new this.constructor(C);
        return X(this, new er(l, _, N)), N;
      }),
      (N.prototype.finally = l),
      (N.all = function (l) {
        return new N(function (_, C) {
          if (!l || void 0 === l.length)
            throw TypeError("Promise.all accepts an array");
          var N = Array.prototype.slice.call(l);
          if (0 === N.length) return _([]);
          for (var X = N.length, ee = 0; ee < N.length; ee++)
            !(function l(ee, et) {
              try {
                if (et && ("object" == typeof et || "function" == typeof et)) {
                  var en = et.then;
                  if ("function" == typeof en) {
                    en.call(
                      et,
                      function (_) {
                        l(ee, _);
                      },
                      C
                    );
                    return;
                  }
                }
                (N[ee] = et), 0 == --X && _(N);
              } catch (er) {
                C(er);
              }
            })(ee, N[ee]);
        });
      }),
      (N.resolve = function (l) {
        return l && "object" == typeof l && l.constructor === N
          ? l
          : new N(function (_) {
              _(l);
            });
      }),
      (N.reject = function (l) {
        return new N(function (_, C) {
          C(l);
        });
      }),
      (N.race = function (l) {
        return new N(function (_, C) {
          for (var N = 0, X = l.length; N < X; N++) l[N].then(_, C);
        });
      }),
      (N._immediateFn =
        "function" == typeof setImmediate
          ? function (l) {
              setImmediate(l);
            }
          : function (l) {
              _(l, 0);
            }),
      (N._unhandledRejectionFn = function (l) {
        "undefined" != typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", l);
      });
    var eo = (function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof global) return global;
      throw Error("unable to locate global object");
    })();
    "Promise" in eo ? (eo.Promise.prototype.finally ||= l) : (eo.Promise = N);
  });
const O = new MobileDetect(window.navigator.userAgent),
  B = new URLSearchParams(window.location.search);
O.match("playstation|xbox|smart-tv|smarttv") ||
  null !== O.mobile() ||
  B.get("_debug"),
  (function (l, _) {
    "object" == typeof exports
      ? (module.exports = exports = _())
      : "function" == typeof define && define.amd
        ? define([], _)
        : (l.CryptoJS = _());
  })(this, function () {
    var l = (function (l) {
      if (
        ("undefined" != typeof window && window.crypto && (C = window.crypto),
        "undefined" != typeof self && self.crypto && (C = self.crypto),
        !(C =
          (C =
            (C =
              "undefined" != typeof globalThis && globalThis.crypto
                ? globalThis.crypto
                : C) ||
            "undefined" == typeof window ||
            !window.msCrypto
              ? C
              : window.msCrypto) ||
          "undefined" == typeof global ||
          !global.crypto
            ? C
            : global.crypto) && "function" == typeof require)
      )
        try {
          C = require("crypto");
        } catch (_) {}
      var C,
        N =
          Object.create ||
          function (l) {
            return (X.prototype = l), (l = new X()), (X.prototype = null), l;
          };
      function X() {}
      var ee = {},
        et = (ee.lib = {}),
        en = (et.Base = {
          extend: function (l) {
            var _ = N(this);
            return (
              l && _.mixIn(l),
              (_.hasOwnProperty("init") && this.init !== _.init) ||
                (_.init = function () {
                  _.$super.init.apply(this, arguments);
                }),
              ((_.init.prototype = _).$super = this),
              _
            );
          },
          create: function () {
            var l = this.extend();
            return l.init.apply(l, arguments), l;
          },
          init: function () {},
          mixIn: function (l) {
            for (var _ in l) l.hasOwnProperty(_) && (this[_] = l[_]);
            l.hasOwnProperty("toString") && (this.toString = l.toString);
          },
          clone: function () {
            return this.init.prototype.extend(this);
          },
        }),
        er = (et.WordArray = en.extend({
          init: function (l, _) {
            (l = this.words = l || []), (this.sigBytes = _ ?? 4 * l.length);
          },
          toString: function (l) {
            return (l || eo).stringify(this);
          },
          concat: function (l) {
            var _ = this.words,
              C = l.words,
              N = this.sigBytes,
              X = l.sigBytes;
            if ((this.clamp(), N % 4))
              for (var ee = 0; ee < X; ee++) {
                var et = (C[ee >>> 2] >>> (24 - (ee % 4) * 8)) & 255;
                _[(N + ee) >>> 2] |= et << (24 - ((N + ee) % 4) * 8);
              }
            else
              for (var en = 0; en < X; en += 4) _[(N + en) >>> 2] = C[en >>> 2];
            return (this.sigBytes += X), this;
          },
          clamp: function () {
            var _ = this.words,
              C = this.sigBytes;
            (_[C >>> 2] &= 4294967295 << (32 - (C % 4) * 8)),
              (_.length = l.ceil(C / 4));
          },
          clone: function () {
            var l = en.clone.call(this);
            return (l.words = this.words.slice(0)), l;
          },
          random: function (l) {
            for (var _ = [], N = 0; N < l; N += 4)
              _.push(
                (function () {
                  if (C) {
                    if ("function" == typeof C.getRandomValues)
                      try {
                        return C.getRandomValues(new Uint32Array(1))[0];
                      } catch (l) {}
                    if ("function" == typeof C.randomBytes)
                      try {
                        return C.randomBytes(4).readInt32LE();
                      } catch (_) {}
                  }
                  throw Error(
                    "Native crypto module could not be used to get secure random number."
                  );
                })()
              );
            return new er.init(_, l);
          },
        })),
        ei = (ee.enc = {}),
        eo = (ei.Hex = {
          stringify: function (l) {
            for (var _ = l.words, C = l.sigBytes, N = [], X = 0; X < C; X++) {
              var ee = (_[X >>> 2] >>> (24 - (X % 4) * 8)) & 255;
              N.push((ee >>> 4).toString(16)), N.push((15 & ee).toString(16));
            }
            return N.join("");
          },
          parse: function (l) {
            for (var _ = l.length, C = [], N = 0; N < _; N += 2)
              C[N >>> 3] |= parseInt(l.substr(N, 2), 16) << (24 - (N % 8) * 4);
            return new er.init(C, _ / 2);
          },
        }),
        ea = (ei.Latin1 = {
          stringify: function (l) {
            for (var _ = l.words, C = l.sigBytes, N = [], X = 0; X < C; X++) {
              var ee = (_[X >>> 2] >>> (24 - (X % 4) * 8)) & 255;
              N.push(String.fromCharCode(ee));
            }
            return N.join("");
          },
          parse: function (l) {
            for (var _ = l.length, C = [], N = 0; N < _; N++)
              C[N >>> 2] |= (255 & l.charCodeAt(N)) << (24 - (N % 4) * 8);
            return new er.init(C, _);
          },
        }),
        es = (ei.Utf8 = {
          stringify: function (l) {
            try {
              return decodeURIComponent(escape(ea.stringify(l)));
            } catch (_) {
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function (l) {
            return ea.parse(unescape(encodeURIComponent(l)));
          },
        }),
        el = (et.BufferedBlockAlgorithm = en.extend({
          reset: function () {
            (this._data = new er.init()), (this._nDataBytes = 0);
          },
          _append: function (l) {
            "string" == typeof l && (l = es.parse(l)),
              this._data.concat(l),
              (this._nDataBytes += l.sigBytes);
          },
          _process: function (_) {
            var C,
              N = this._data,
              X = N.words,
              ee = N.sigBytes,
              et = this.blockSize,
              en = ee / (4 * et),
              ei =
                (en = _
                  ? l.ceil(en)
                  : l.max((0 | en) - this._minBufferSize, 0)) * et,
              _ = l.min(4 * ei, ee);
            if (ei) {
              for (var eo = 0; eo < ei; eo += et) this._doProcessBlock(X, eo);
              (C = X.splice(0, ei)), (N.sigBytes -= _);
            }
            return new er.init(C, _);
          },
          clone: function () {
            var l = en.clone.call(this);
            return (l._data = this._data.clone()), l;
          },
          _minBufferSize: 0,
        }));
      et.Hasher = el.extend({
        cfg: en.extend(),
        init: function (l) {
          (this.cfg = this.cfg.extend(l)), this.reset();
        },
        reset: function () {
          el.reset.call(this), this._doReset();
        },
        update: function (l) {
          return this._append(l), this._process(), this;
        },
        finalize: function (l) {
          return l && this._append(l), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (l) {
          return function (_, C) {
            return new l.init(C).finalize(_);
          };
        },
        _createHmacHelper: function (l) {
          return function (_, C) {
            return new eu.HMAC.init(l, C).finalize(_);
          };
        },
      });
      var eu = (ee.algo = {});
      return ee;
    })(Math);
    (ex = (_ = (ee = l).lib).Base),
      (ek = _.WordArray),
      ((_ = ee.x64 = {}).Word = ex.extend({
        init: function (l, _) {
          (this.high = l), (this.low = _);
        },
      })),
      (_.WordArray = ex.extend({
        init: function (l, _) {
          (l = this.words = l || []), (this.sigBytes = _ ?? 8 * l.length);
        },
        toX32: function () {
          for (var l = this.words, _ = l.length, C = [], N = 0; N < _; N++) {
            var X = l[N];
            C.push(X.high), C.push(X.low);
          }
          return ek.create(C, this.sigBytes);
        },
        clone: function () {
          for (
            var l = ex.clone.call(this),
              _ = (l.words = this.words.slice(0)),
              C = _.length,
              N = 0;
            N < C;
            N++
          )
            _[N] = _[N].clone();
          return l;
        },
      })),
      "function" == typeof ArrayBuffer &&
        ((eB = (ee = l.lib.WordArray).init),
        ((ee.init = function (l) {
          if (
            (l =
              (l = l instanceof ArrayBuffer ? new Uint8Array(l) : l) instanceof
                Int8Array ||
              ("undefined" != typeof Uint8ClampedArray &&
                l instanceof Uint8ClampedArray) ||
              l instanceof Int16Array ||
              l instanceof Uint16Array ||
              l instanceof Int32Array ||
              l instanceof Uint32Array ||
              l instanceof Float32Array ||
              l instanceof Float64Array
                ? new Uint8Array(l.buffer, l.byteOffset, l.byteLength)
                : l) instanceof Uint8Array
          ) {
            for (var _ = l.byteLength, C = [], N = 0; N < _; N++)
              C[N >>> 2] |= l[N] << (24 - (N % 4) * 8);
            eB.call(this, C, _);
          } else eB.apply(this, arguments);
        }).prototype = ee));
    var _ = l,
      C = _.lib.WordArray;
    function N(l) {
      return ((l << 8) & 4278255360) | ((l >>> 8) & 16711935);
    }
    ((_ = _.enc).Utf16 = _.Utf16BE =
      {
        stringify: function (l) {
          for (var _ = l.words, C = l.sigBytes, N = [], X = 0; X < C; X += 2) {
            var ee = (_[X >>> 2] >>> (16 - (X % 4) * 8)) & 65535;
            N.push(String.fromCharCode(ee));
          }
          return N.join("");
        },
        parse: function (l) {
          for (var _ = l.length, N = [], X = 0; X < _; X++)
            N[X >>> 1] |= l.charCodeAt(X) << (16 - (X % 2) * 16);
          return C.create(N, 2 * _);
        },
      }),
      (_.Utf16LE = {
        stringify: function (l) {
          for (
            var _ = l.words, C = l.sigBytes, X = [], ee = 0;
            ee < C;
            ee += 2
          ) {
            var et = N((_[ee >>> 2] >>> (16 - (ee % 4) * 8)) & 65535);
            X.push(String.fromCharCode(et));
          }
          return X.join("");
        },
        parse: function (l) {
          for (var _ = l.length, X = [], ee = 0; ee < _; ee++)
            X[ee >>> 1] |= N(l.charCodeAt(ee) << (16 - (ee % 2) * 16));
          return C.create(X, 2 * _);
        },
      }),
      (eE = (ee = l).lib.WordArray),
      (ee.enc.Base64 = {
        stringify: function (l) {
          for (
            var _ = l.words,
              C = l.sigBytes,
              N = this._map,
              X = (l.clamp(), []),
              ee = 0;
            ee < C;
            ee += 3
          )
            for (
              var et =
                  (((_[ee >>> 2] >>> (24 - (ee % 4) * 8)) & 255) << 16) |
                  (((_[(ee + 1) >>> 2] >>> (24 - ((ee + 1) % 4) * 8)) & 255) <<
                    8) |
                  ((_[(ee + 2) >>> 2] >>> (24 - ((ee + 2) % 4) * 8)) & 255),
                en = 0;
              en < 4 && ee + 0.75 * en < C;
              en++
            )
              X.push(N.charAt((et >>> ((3 - en) * 6)) & 63));
          var er = N.charAt(64);
          if (er) for (; X.length % 4; ) X.push(er);
          return X.join("");
        },
        parse: function (l) {
          var _,
            C,
            N = l.length,
            X = this._map;
          if (!(ee = this._reverseMap))
            for (var ee = (this._reverseMap = []), et = 0; et < X.length; et++)
              ee[X.charCodeAt(et)] = et;
          var en = X.charAt(64);
          en && -1 !== (en = l.indexOf(en)) && (N = en);
          for (
            var er = l, ei = N, eo = ee, ea = [], es = 0, el = 0;
            el < ei;
            el++
          )
            el % 4 &&
              ((_ = eo[er.charCodeAt(el - 1)] << ((el % 4) * 2)),
              (C = eo[er.charCodeAt(el)] >>> (6 - (el % 4) * 2)),
              (ea[es >>> 2] |= (_ | C) << (24 - (es % 4) * 8)),
              es++);
          return eE.create(ea, es);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      }),
      (eG = (_ = l).lib.WordArray),
      (_.enc.Base64url = {
        stringify: function (l, _ = !0) {
          for (
            var C = l.words,
              N = l.sigBytes,
              X = _ ? this._safe_map : this._map,
              ee = (l.clamp(), []),
              et = 0;
            et < N;
            et += 3
          )
            for (
              var en =
                  (((C[et >>> 2] >>> (24 - (et % 4) * 8)) & 255) << 16) |
                  (((C[(et + 1) >>> 2] >>> (24 - ((et + 1) % 4) * 8)) & 255) <<
                    8) |
                  ((C[(et + 2) >>> 2] >>> (24 - ((et + 2) % 4) * 8)) & 255),
                er = 0;
              er < 4 && et + 0.75 * er < N;
              er++
            )
              ee.push(X.charAt((en >>> ((3 - er) * 6)) & 63));
          var ei = X.charAt(64);
          if (ei) for (; ee.length % 4; ) ee.push(ei);
          return ee.join("");
        },
        parse: function (l, _ = !0) {
          var C,
            N,
            X = l.length,
            ee = _ ? this._safe_map : this._map;
          if (!(et = this._reverseMap))
            for (var et = (this._reverseMap = []), en = 0; en < ee.length; en++)
              et[ee.charCodeAt(en)] = en;
          var _ = ee.charAt(64);
          _ && -1 !== (_ = l.indexOf(_)) && (X = _);
          for (
            var er = l, ei = X, eo = et, ea = [], es = 0, el = 0;
            el < ei;
            el++
          )
            el % 4 &&
              ((C = eo[er.charCodeAt(el - 1)] << ((el % 4) * 2)),
              (N = eo[er.charCodeAt(el)] >>> (6 - (el % 4) * 2)),
              (ea[es >>> 2] |= (C | N) << (24 - (es % 4) * 8)),
              es++);
          return eG.create(ea, es);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _safe_map:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      });
    for (
      var X = Math,
        ee = l,
        et = (_ = ee.lib).WordArray,
        en = _.Hasher,
        _ = ee.algo,
        er = [],
        ei = 0;
      ei < 64;
      ei++
    )
      er[ei] = (4294967296 * X.abs(X.sin(ei + 1))) | 0;
    function eo(l, _, C, N, X, ee, et) {
      return (
        (((l = l + ((_ & C) | (~_ & N)) + X + et) << ee) | (l >>> (32 - ee))) +
        _
      );
    }
    function ea(l, _, C, N, X, ee, et) {
      return (
        (((l = l + ((_ & N) | (C & ~N)) + X + et) << ee) | (l >>> (32 - ee))) +
        _
      );
    }
    function es(l, _, C, N, X, ee, et) {
      return (((l = l + (_ ^ C ^ N) + X + et) << ee) | (l >>> (32 - ee))) + _;
    }
    function el(l, _, C, N, X, ee, et) {
      return (
        (((l = l + (C ^ (_ | ~N)) + X + et) << ee) | (l >>> (32 - ee))) + _
      );
    }
    (_ = _.MD5 =
      en.extend({
        _doReset: function () {
          this._hash = new et.init([
            1732584193, 4023233417, 2562383102, 271733878,
          ]);
        },
        _doProcessBlock: function (l, _) {
          for (var C = 0; C < 16; C++) {
            var N = _ + C,
              X = l[N];
            l[N] =
              (((X << 8) | (X >>> 24)) & 16711935) |
              (((X << 24) | (X >>> 8)) & 4278255360);
          }
          var ee = this._hash.words,
            et = l[_ + 0],
            en = l[_ + 1],
            ei = l[_ + 2],
            eu = l[_ + 3],
            ec = l[_ + 4],
            e$ = l[_ + 5],
            ed = l[_ + 6],
            e_ = l[_ + 7],
            ef = l[_ + 8],
            ep = l[_ + 9],
            eh = l[_ + 10],
            e0 = l[_ + 11],
            eg = l[_ + 12],
            e1 = l[_ + 13],
            e2 = l[_ + 14],
            e3 = l[_ + 15],
            eb = eo(
              ee[0],
              (ey = ee[1]),
              (ev = ee[2]),
              (e5 = ee[3]),
              et,
              7,
              er[0]
            ),
            e5 = eo(e5, eb, ey, ev, en, 12, er[1]),
            ev = eo(ev, e5, eb, ey, ei, 17, er[2]),
            ey = eo(ey, ev, e5, eb, eu, 22, er[3]);
          (eb = eo(eb, ey, ev, e5, ec, 7, er[4])),
            (e5 = eo(e5, eb, ey, ev, e$, 12, er[5])),
            (ev = eo(ev, e5, eb, ey, ed, 17, er[6])),
            (ey = eo(ey, ev, e5, eb, e_, 22, er[7])),
            (eb = eo(eb, ey, ev, e5, ef, 7, er[8])),
            (e5 = eo(e5, eb, ey, ev, ep, 12, er[9])),
            (ev = eo(ev, e5, eb, ey, eh, 17, er[10])),
            (ey = eo(ey, ev, e5, eb, e0, 22, er[11])),
            (eb = eo(eb, ey, ev, e5, eg, 7, er[12])),
            (e5 = eo(e5, eb, ey, ev, e1, 12, er[13])),
            (ev = eo(ev, e5, eb, ey, e2, 17, er[14])),
            (eb = ea(
              eb,
              (ey = eo(ey, ev, e5, eb, e3, 22, er[15])),
              ev,
              e5,
              en,
              5,
              er[16]
            )),
            (e5 = ea(e5, eb, ey, ev, ed, 9, er[17])),
            (ev = ea(ev, e5, eb, ey, e0, 14, er[18])),
            (ey = ea(ey, ev, e5, eb, et, 20, er[19])),
            (eb = ea(eb, ey, ev, e5, e$, 5, er[20])),
            (e5 = ea(e5, eb, ey, ev, eh, 9, er[21])),
            (ev = ea(ev, e5, eb, ey, e3, 14, er[22])),
            (ey = ea(ey, ev, e5, eb, ec, 20, er[23])),
            (eb = ea(eb, ey, ev, e5, ep, 5, er[24])),
            (e5 = ea(e5, eb, ey, ev, e2, 9, er[25])),
            (ev = ea(ev, e5, eb, ey, eu, 14, er[26])),
            (ey = ea(ey, ev, e5, eb, ef, 20, er[27])),
            (eb = ea(eb, ey, ev, e5, e1, 5, er[28])),
            (e5 = ea(e5, eb, ey, ev, ei, 9, er[29])),
            (ev = ea(ev, e5, eb, ey, e_, 14, er[30])),
            (eb = es(
              eb,
              (ey = ea(ey, ev, e5, eb, eg, 20, er[31])),
              ev,
              e5,
              e$,
              4,
              er[32]
            )),
            (e5 = es(e5, eb, ey, ev, ef, 11, er[33])),
            (ev = es(ev, e5, eb, ey, e0, 16, er[34])),
            (ey = es(ey, ev, e5, eb, e2, 23, er[35])),
            (eb = es(eb, ey, ev, e5, en, 4, er[36])),
            (e5 = es(e5, eb, ey, ev, ec, 11, er[37])),
            (ev = es(ev, e5, eb, ey, e_, 16, er[38])),
            (ey = es(ey, ev, e5, eb, eh, 23, er[39])),
            (eb = es(eb, ey, ev, e5, e1, 4, er[40])),
            (e5 = es(e5, eb, ey, ev, et, 11, er[41])),
            (ev = es(ev, e5, eb, ey, eu, 16, er[42])),
            (ey = es(ey, ev, e5, eb, ed, 23, er[43])),
            (eb = es(eb, ey, ev, e5, ep, 4, er[44])),
            (e5 = es(e5, eb, ey, ev, eg, 11, er[45])),
            (ev = es(ev, e5, eb, ey, e3, 16, er[46])),
            (eb = el(
              eb,
              (ey = es(ey, ev, e5, eb, ei, 23, er[47])),
              ev,
              e5,
              et,
              6,
              er[48]
            )),
            (e5 = el(e5, eb, ey, ev, e_, 10, er[49])),
            (ev = el(ev, e5, eb, ey, e2, 15, er[50])),
            (ey = el(ey, ev, e5, eb, e$, 21, er[51])),
            (eb = el(eb, ey, ev, e5, eg, 6, er[52])),
            (e5 = el(e5, eb, ey, ev, eu, 10, er[53])),
            (ev = el(ev, e5, eb, ey, eh, 15, er[54])),
            (ey = el(ey, ev, e5, eb, en, 21, er[55])),
            (eb = el(eb, ey, ev, e5, ef, 6, er[56])),
            (e5 = el(e5, eb, ey, ev, e3, 10, er[57])),
            (ev = el(ev, e5, eb, ey, ed, 15, er[58])),
            (ey = el(ey, ev, e5, eb, e1, 21, er[59])),
            (eb = el(eb, ey, ev, e5, ec, 6, er[60])),
            (e5 = el(e5, eb, ey, ev, e0, 10, er[61])),
            (ev = el(ev, e5, eb, ey, ei, 15, er[62])),
            (ey = el(ey, ev, e5, eb, ep, 21, er[63])),
            (ee[0] = (ee[0] + eb) | 0),
            (ee[1] = (ee[1] + ey) | 0),
            (ee[2] = (ee[2] + ev) | 0),
            (ee[3] = (ee[3] + e5) | 0);
        },
        _doFinalize: function () {
          var l = this._data,
            _ = l.words,
            C = 8 * this._nDataBytes,
            N = 8 * l.sigBytes;
          _[N >>> 5] |= 128 << (24 - (N % 32));
          var ee = X.floor(C / 4294967296);
          (_[15 + (((64 + N) >>> 9) << 4)] =
            (((ee << 8) | (ee >>> 24)) & 16711935) |
            (((ee << 24) | (ee >>> 8)) & 4278255360)),
            (_[14 + (((64 + N) >>> 9) << 4)] =
              (((C << 8) | (C >>> 24)) & 16711935) |
              (((C << 24) | (C >>> 8)) & 4278255360)),
            (l.sigBytes = (_.length + 1) * 4),
            this._process();
          for (var ee = this._hash, et = ee.words, en = 0; en < 4; en++) {
            var er = et[en];
            et[en] =
              (((er << 8) | (er >>> 24)) & 16711935) |
              (((er << 24) | (er >>> 8)) & 4278255360);
          }
          return ee;
        },
        clone: function () {
          var l = en.clone.call(this);
          return (l._hash = this._hash.clone()), l;
        },
      })),
      (ee.MD5 = en._createHelper(_)),
      (ee.HmacMD5 = en._createHmacHelper(_)),
      (eH = (_ = (ee = l).lib).WordArray),
      (eD = _.Hasher),
      (_ = ee.algo),
      (eI = []),
      (_ = _.SHA1 =
        eD.extend({
          _doReset: function () {
            this._hash = new eH.init([
              1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]);
          },
          _doProcessBlock: function (l, _) {
            for (
              var C = this._hash.words,
                N = C[0],
                X = C[1],
                ee = C[2],
                et = C[3],
                en = C[4],
                er = 0;
              er < 80;
              er++
            ) {
              eI[er] =
                er < 16
                  ? 0 | l[_ + er]
                  : ((ei =
                      eI[er - 3] ^ eI[er - 8] ^ eI[er - 14] ^ eI[er - 16]) <<
                      1) |
                    (ei >>> 31);
              var ei = ((N << 5) | (N >>> 27)) + en + eI[er];
              (ei +=
                er < 20
                  ? 1518500249 + ((X & ee) | (~X & et))
                  : er < 40
                    ? 1859775393 + (X ^ ee ^ et)
                    : er < 60
                      ? ((X & ee) | (X & et) | (ee & et)) - 1894007588
                      : (X ^ ee ^ et) - 899497514),
                (en = et),
                (et = ee),
                (ee = (X << 30) | (X >>> 2)),
                (X = N),
                (N = ei);
            }
            (C[0] = (C[0] + N) | 0),
              (C[1] = (C[1] + X) | 0),
              (C[2] = (C[2] + ee) | 0),
              (C[3] = (C[3] + et) | 0),
              (C[4] = (C[4] + en) | 0);
          },
          _doFinalize: function () {
            var l = this._data,
              _ = l.words,
              C = 8 * this._nDataBytes,
              N = 8 * l.sigBytes;
            return (
              (_[N >>> 5] |= 128 << (24 - (N % 32))),
              (_[14 + (((64 + N) >>> 9) << 4)] = Math.floor(C / 4294967296)),
              (_[15 + (((64 + N) >>> 9) << 4)] = C),
              (l.sigBytes = 4 * _.length),
              this._process(),
              this._hash
            );
          },
          clone: function () {
            var l = eD.clone.call(this);
            return (l._hash = this._hash.clone()), l;
          },
        })),
      (ee.SHA1 = eD._createHelper(_)),
      (ee.HmacSHA1 = eD._createHmacHelper(_));
    var eu = Math,
      ee = l,
      ec = (_ = ee.lib).WordArray,
      e$ = _.Hasher,
      _ = ee.algo,
      ed = [],
      e_ = [];
    function ef(l) {
      return ((l - (0 | l)) * 4294967296) | 0;
    }
    for (var ep = 2, eh = 0; eh < 64; )
      (function (l) {
        for (var _ = eu.sqrt(l), C = 2; C <= _; C++) if (!(l % C)) return;
        return 1;
      })(ep) &&
        (eh < 8 && (ed[eh] = ef(eu.pow(ep, 0.5))),
        (e_[eh] = ef(eu.pow(ep, 1 / 3))),
        eh++),
        ep++;
    var e0 = [],
      _ = (_.SHA256 = e$.extend({
        _doReset: function () {
          this._hash = new ec.init(ed.slice(0));
        },
        _doProcessBlock: function (l, _) {
          for (
            var C = this._hash.words,
              N = C[0],
              X = C[1],
              ee = C[2],
              et = C[3],
              en = C[4],
              er = C[5],
              ei = C[6],
              eo = C[7],
              ea = 0;
            ea < 64;
            ea++
          ) {
            e0[ea] =
              ea < 16
                ? 0 | l[_ + ea]
                : ((((es = e0[ea - 15]) << 25) | (es >>> 7)) ^
                    ((es << 14) | (es >>> 18)) ^
                    (es >>> 3)) +
                  e0[ea - 7] +
                  ((((es = e0[ea - 2]) << 15) | (es >>> 17)) ^
                    ((es << 13) | (es >>> 19)) ^
                    (es >>> 10)) +
                  e0[ea - 16];
            var es = (N & X) ^ (N & ee) ^ (X & ee),
              el =
                eo +
                (((en << 26) | (en >>> 6)) ^
                  ((en << 21) | (en >>> 11)) ^
                  ((en << 7) | (en >>> 25))) +
                ((en & er) ^ (~en & ei)) +
                e_[ea] +
                e0[ea],
              eo = ei,
              ei = er,
              er = en,
              en = (et + el) | 0,
              et = ee,
              ee = X,
              X = N,
              N =
                (el +
                  ((((N << 30) | (N >>> 2)) ^
                    ((N << 19) | (N >>> 13)) ^
                    ((N << 10) | (N >>> 22))) +
                    es)) |
                0;
          }
          (C[0] = (C[0] + N) | 0),
            (C[1] = (C[1] + X) | 0),
            (C[2] = (C[2] + ee) | 0),
            (C[3] = (C[3] + et) | 0),
            (C[4] = (C[4] + en) | 0),
            (C[5] = (C[5] + er) | 0),
            (C[6] = (C[6] + ei) | 0),
            (C[7] = (C[7] + eo) | 0);
        },
        _doFinalize: function () {
          var l = this._data,
            _ = l.words,
            C = 8 * this._nDataBytes,
            N = 8 * l.sigBytes;
          return (
            (_[N >>> 5] |= 128 << (24 - (N % 32))),
            (_[14 + (((64 + N) >>> 9) << 4)] = eu.floor(C / 4294967296)),
            (_[15 + (((64 + N) >>> 9) << 4)] = C),
            (l.sigBytes = 4 * _.length),
            this._process(),
            this._hash
          );
        },
        clone: function () {
          var l = e$.clone.call(this);
          return (l._hash = this._hash.clone()), l;
        },
      }));
    (ee.SHA256 = e$._createHelper(_)),
      (ee.HmacSHA256 = e$._createHmacHelper(_)),
      (eL = (ee = l).lib.WordArray),
      (eN = (_ = ee.algo).SHA256),
      (_ = _.SHA224 =
        eN.extend({
          _doReset: function () {
            this._hash = new eL.init([
              3238371032, 914150663, 812702999, 4144912697, 4290775857,
              1750603025, 1694076839, 3204075428,
            ]);
          },
          _doFinalize: function () {
            var l = eN._doFinalize.call(this);
            return (l.sigBytes -= 4), l;
          },
        })),
      (ee.SHA224 = eN._createHelper(_)),
      (ee.HmacSHA224 = eN._createHmacHelper(_));
    var ee = l,
      eg = ee.lib.Hasher,
      e1 = (_ = ee.x64).Word,
      e2 = _.WordArray,
      _ = ee.algo;
    function e3() {
      return e1.create.apply(e1, arguments);
    }
    for (
      var eb = [
          e3(1116352408, 3609767458),
          e3(1899447441, 602891725),
          e3(3049323471, 3964484399),
          e3(3921009573, 2173295548),
          e3(961987163, 4081628472),
          e3(1508970993, 3053834265),
          e3(2453635748, 2937671579),
          e3(2870763221, 3664609560),
          e3(3624381080, 2734883394),
          e3(310598401, 1164996542),
          e3(607225278, 1323610764),
          e3(1426881987, 3590304994),
          e3(1925078388, 4068182383),
          e3(2162078206, 991336113),
          e3(2614888103, 633803317),
          e3(3248222580, 3479774868),
          e3(3835390401, 2666613458),
          e3(4022224774, 944711139),
          e3(264347078, 2341262773),
          e3(604807628, 2007800933),
          e3(770255983, 1495990901),
          e3(1249150122, 1856431235),
          e3(1555081692, 3175218132),
          e3(1996064986, 2198950837),
          e3(2554220882, 3999719339),
          e3(2821834349, 766784016),
          e3(2952996808, 2566594879),
          e3(3210313671, 3203337956),
          e3(3336571891, 1034457026),
          e3(3584528711, 2466948901),
          e3(113926993, 3758326383),
          e3(338241895, 168717936),
          e3(666307205, 1188179964),
          e3(773529912, 1546045734),
          e3(1294757372, 1522805485),
          e3(1396182291, 2643833823),
          e3(1695183700, 2343527390),
          e3(1986661051, 1014477480),
          e3(2177026350, 1206759142),
          e3(2456956037, 344077627),
          e3(2730485921, 1290863460),
          e3(2820302411, 3158454273),
          e3(3259730800, 3505952657),
          e3(3345764771, 106217008),
          e3(3516065817, 3606008344),
          e3(3600352804, 1432725776),
          e3(4094571909, 1467031594),
          e3(275423344, 851169720),
          e3(430227734, 3100823752),
          e3(506948616, 1363258195),
          e3(659060556, 3750685593),
          e3(883997877, 3785050280),
          e3(958139571, 3318307427),
          e3(1322822218, 3812723403),
          e3(1537002063, 2003034995),
          e3(1747873779, 3602036899),
          e3(1955562222, 1575990012),
          e3(2024104815, 1125592928),
          e3(2227730452, 2716904306),
          e3(2361852424, 442776044),
          e3(2428436474, 593698344),
          e3(2756734187, 3733110249),
          e3(3204031479, 2999351573),
          e3(3329325298, 3815920427),
          e3(3391569614, 3928383900),
          e3(3515267271, 566280711),
          e3(3940187606, 3454069534),
          e3(4118630271, 4000239992),
          e3(116418474, 1914138554),
          e3(174292421, 2731055270),
          e3(289380356, 3203993006),
          e3(460393269, 320620315),
          e3(685471733, 587496836),
          e3(852142971, 1086792851),
          e3(1017036298, 365543100),
          e3(1126000580, 2618297676),
          e3(1288033470, 3409855158),
          e3(1501505948, 4234509866),
          e3(1607167915, 987167468),
          e3(1816402316, 1246189591),
        ],
        e5 = [],
        ev = 0;
      ev < 80;
      ev++
    )
      e5[ev] = e3();
    (_ = _.SHA512 =
      eg.extend({
        _doReset: function () {
          this._hash = new e2.init([
            new e1.init(1779033703, 4089235720),
            new e1.init(3144134277, 2227873595),
            new e1.init(1013904242, 4271175723),
            new e1.init(2773480762, 1595750129),
            new e1.init(1359893119, 2917565137),
            new e1.init(2600822924, 725511199),
            new e1.init(528734635, 4215389547),
            new e1.init(1541459225, 327033209),
          ]);
        },
        _doProcessBlock: function (l, _) {
          for (
            var C = this._hash.words,
              N = C[0],
              X = C[1],
              ee = C[2],
              et = C[3],
              en = C[4],
              er = C[5],
              ei = C[6],
              C = C[7],
              eo = N.high,
              ea = N.low,
              es = X.high,
              el = X.low,
              eu = ee.high,
              ec = ee.low,
              e$ = et.high,
              ed = et.low,
              e_ = en.high,
              ef = en.low,
              ep = er.high,
              eh = er.low,
              e0 = ei.high,
              eg = ei.low,
              e1 = C.high,
              e2 = C.low,
              e3 = eo,
              ev = ea,
              ey = es,
              em = el,
              e4 = eu,
              e6 = ec,
              eT = e$,
              eS = ed,
              e7 = e_,
              ew = ef,
              eP = ep,
              eA = eh,
              e8 = e0,
              eC = eg,
              eM = e1,
              ex = e2,
              ek = 0;
            ek < 80;
            ek++
          ) {
            var eB,
              eE,
              eG = e5[ek];
            ek < 16
              ? ((eE = eG.high = 0 | l[_ + 2 * ek]),
                (eB = eG.low = 0 | l[_ + 2 * ek + 1]))
              : ((eR = (eN = e5[ek - 15]).high),
                (eN = eN.low),
                (eL = (eI = e5[ek - 2]).high),
                (eI = eI.low),
                (eD = (eH = e5[ek - 7]).high),
                (eH = eH.low),
                (ej = (eO = e5[ek - 16]).high),
                (eE =
                  (eE =
                    (((eR >>> 1) | (eN << 31)) ^
                      ((eR >>> 8) | (eN << 24)) ^
                      (eR >>> 7)) +
                    eD +
                    ((eB =
                      (eD =
                        ((eN >>> 1) | (eR << 31)) ^
                        ((eN >>> 8) | (eR << 24)) ^
                        ((eN >>> 7) | (eR << 25))) + eH) >>>
                      0 <
                    eD >>> 0
                      ? 1
                      : 0)) +
                  (((eL >>> 19) | (eI << 13)) ^
                    ((eL << 3) | (eI >>> 29)) ^
                    (eL >>> 6)) +
                  ((eB += eN =
                    ((eI >>> 19) | (eL << 13)) ^
                    ((eI << 3) | (eL >>> 29)) ^
                    ((eI >>> 6) | (eL << 26))) >>>
                    0 <
                  eN >>> 0
                    ? 1
                    : 0)),
                (eB += eR = eO.low),
                (eG.high = eE = eE + ej + (eB >>> 0 < eR >>> 0 ? 1 : 0)),
                (eG.low = eB));
            var eH = (e7 & eP) ^ (~e7 & e8),
              eD = (ew & eA) ^ (~ew & eC),
              eI = (e3 & ey) ^ (e3 & e4) ^ (ey & e4),
              eL =
                ((ev >>> 28) | (e3 << 4)) ^
                ((ev << 30) | (e3 >>> 2)) ^
                ((ev << 25) | (e3 >>> 7)),
              eN = eb[ek],
              eO = eN.high,
              ej = eN.low,
              eR =
                ex +
                (((ew >>> 14) | (e7 << 18)) ^
                  ((ew >>> 18) | (e7 << 14)) ^
                  ((ew << 23) | (e7 >>> 9))),
              eG =
                eM +
                (((e7 >>> 14) | (ew << 18)) ^
                  ((e7 >>> 18) | (ew << 14)) ^
                  ((e7 << 23) | (ew >>> 9))) +
                (eR >>> 0 < ex >>> 0 ? 1 : 0),
              eF = eL + ((ev & em) ^ (ev & e6) ^ (em & e6)),
              eM = e8,
              ex = eC,
              e8 = eP,
              eC = eA,
              eP = e7,
              eA = ew,
              e7 =
                (eT +
                  (eG =
                    eG +
                    eH +
                    ((eR += eD) >>> 0 < eD >>> 0 ? 1 : 0) +
                    eO +
                    ((eR += ej) >>> 0 < ej >>> 0 ? 1 : 0) +
                    eE +
                    ((eR += eB) >>> 0 < eB >>> 0 ? 1 : 0)) +
                  ((ew = (eS + eR) | 0) >>> 0 < eS >>> 0 ? 1 : 0)) |
                0,
              eT = e4,
              eS = e6,
              e4 = ey,
              e6 = em,
              ey = e3,
              em = ev,
              e3 =
                (eG +
                  ((((e3 >>> 28) | (ev << 4)) ^
                    ((e3 << 30) | (ev >>> 2)) ^
                    ((e3 << 25) | (ev >>> 7))) +
                    eI +
                    (eF >>> 0 < eL >>> 0 ? 1 : 0)) +
                  ((ev = (eR + eF) | 0) >>> 0 < eR >>> 0 ? 1 : 0)) |
                0;
          }
          (ea = N.low = ea + ev),
            (N.high = eo + e3 + (ea >>> 0 < ev >>> 0 ? 1 : 0)),
            (el = X.low = el + em),
            (X.high = es + ey + (el >>> 0 < em >>> 0 ? 1 : 0)),
            (ec = ee.low = ec + e6),
            (ee.high = eu + e4 + (ec >>> 0 < e6 >>> 0 ? 1 : 0)),
            (ed = et.low = ed + eS),
            (et.high = e$ + eT + (ed >>> 0 < eS >>> 0 ? 1 : 0)),
            (ef = en.low = ef + ew),
            (en.high = e_ + e7 + (ef >>> 0 < ew >>> 0 ? 1 : 0)),
            (eh = er.low = eh + eA),
            (er.high = ep + eP + (eh >>> 0 < eA >>> 0 ? 1 : 0)),
            (eg = ei.low = eg + eC),
            (ei.high = e0 + e8 + (eg >>> 0 < eC >>> 0 ? 1 : 0)),
            (e2 = C.low = e2 + ex),
            (C.high = e1 + eM + (e2 >>> 0 < ex >>> 0 ? 1 : 0));
        },
        _doFinalize: function () {
          var l = this._data,
            _ = l.words,
            C = 8 * this._nDataBytes,
            N = 8 * l.sigBytes;
          return (
            (_[N >>> 5] |= 128 << (24 - (N % 32))),
            (_[30 + (((128 + N) >>> 10) << 5)] = Math.floor(C / 4294967296)),
            (_[31 + (((128 + N) >>> 10) << 5)] = C),
            (l.sigBytes = 4 * _.length),
            this._process(),
            this._hash.toX32()
          );
        },
        clone: function () {
          var l = eg.clone.call(this);
          return (l._hash = this._hash.clone()), l;
        },
        blockSize: 32,
      })),
      (ee.SHA512 = eg._createHelper(_)),
      (ee.HmacSHA512 = eg._createHmacHelper(_)),
      (eO = (_ = (ee = l).x64).Word),
      (ej = _.WordArray),
      (eR = (_ = ee.algo).SHA512),
      (_ = _.SHA384 =
        eR.extend({
          _doReset: function () {
            this._hash = new ej.init([
              new eO.init(3418070365, 3238371032),
              new eO.init(1654270250, 914150663),
              new eO.init(2438529370, 812702999),
              new eO.init(355462360, 4144912697),
              new eO.init(1731405415, 4290775857),
              new eO.init(2394180231, 1750603025),
              new eO.init(3675008525, 1694076839),
              new eO.init(1203062813, 3204075428),
            ]);
          },
          _doFinalize: function () {
            var l = eR._doFinalize.call(this);
            return (l.sigBytes -= 16), l;
          },
        })),
      (ee.SHA384 = eR._createHelper(_)),
      (ee.HmacSHA384 = eR._createHmacHelper(_));
    for (
      var ey = Math,
        ee = l,
        em = (_ = ee.lib).WordArray,
        e4 = _.Hasher,
        e6 = ee.x64.Word,
        _ = ee.algo,
        eT = [],
        eS = [],
        e7 = [],
        ew = 1,
        eP = 0,
        eA = 0;
      eA < 24;
      eA++
    ) {
      eT[ew + 5 * eP] = (((eA + 1) * (eA + 2)) / 2) % 64;
      var e8 = (2 * ew + 3 * eP) % 5;
      (ew = eP % 5), (eP = e8);
    }
    for (ew = 0; ew < 5; ew++)
      for (eP = 0; eP < 5; eP++)
        eS[ew + 5 * eP] = eP + ((2 * ew + 3 * eP) % 5) * 5;
    for (var eC = 1, eM = 0; eM < 24; eM++) {
      for (
        var ex,
          ek,
          eB,
          eE,
          eG,
          eH,
          eD,
          eI,
          eL,
          eN,
          eO,
          ej,
          eR,
          eF,
          eV,
          eW,
          eX,
          ez,
          eq,
          eU,
          eZ,
          eK,
          eQ,
          e9,
          eY,
          eJ,
          te,
          tt,
          tn,
          tr,
          ti,
          to,
          ta,
          ts,
          tl,
          tu,
          tc,
          t$,
          td,
          t_,
          tf,
          tp,
          th,
          t0,
          tg,
          t1 = 0,
          t2 = 0,
          t3 = 0;
        t3 < 7;
        t3++
      )
        1 & eC &&
          ((tg = (1 << t3) - 1) < 32
            ? (t2 ^= 1 << tg)
            : (t1 ^= 1 << (tg - 32))),
          128 & eC ? (eC = (eC << 1) ^ 113) : (eC <<= 1);
      e7[eM] = e6.create(t1, t2);
    }
    for (var tb = [], t5 = 0; t5 < 25; t5++) tb[t5] = e6.create();
    function tv(l, _, C) {
      return (l & _) | (~l & C);
    }
    function ty(l, _, C) {
      return (l & C) | (_ & ~C);
    }
    function tm(l, _) {
      return (l << _) | (l >>> (32 - _));
    }
    function t4(l) {
      return "string" == typeof l ? tl : ts;
    }
    function t6(l, _, C) {
      var N,
        X = this._iv;
      X ? ((N = X), (this._iv = void 0)) : (N = this._prevBlock);
      for (var ee = 0; ee < C; ee++) l[_ + ee] ^= N[ee];
    }
    function tT(l, _, C, N) {
      var X,
        ee = this._iv;
      ee ? ((X = ee.slice(0)), (this._iv = void 0)) : (X = this._prevBlock),
        N.encryptBlock(X, 0);
      for (var et = 0; et < C; et++) l[_ + et] ^= X[et];
    }
    function tS(l) {
      var _, C, N;
      return (
        ((l >> 24) & 255) == 255
          ? ((C = (l >> 8) & 255),
            (N = 255 & l),
            255 == (_ = (l >> 16) & 255)
              ? ((_ = 0),
                255 === C ? ((C = 0), 255 === N ? (N = 0) : ++N) : ++C)
              : ++_,
            (l = 0),
            (l = (l += _ << 16) + (C << 8) + N))
          : (l += 16777216),
        l
      );
    }
    (_ = _.SHA3 =
      e4.extend({
        cfg: e4.cfg.extend({ outputLength: 512 }),
        _doReset: function () {
          for (var l = (this._state = []), _ = 0; _ < 25; _++)
            l[_] = new e6.init();
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        },
        _doProcessBlock: function (l, _) {
          for (var C = this._state, N = this.blockSize / 2, X = 0; X < N; X++) {
            var ee = l[_ + 2 * X],
              et = l[_ + 2 * X + 1],
              ee =
                (((ee << 8) | (ee >>> 24)) & 16711935) |
                (((ee << 24) | (ee >>> 8)) & 4278255360);
            ((e0 = C[X]).high ^=
              (((et << 8) | (et >>> 24)) & 16711935) |
              (((et << 24) | (et >>> 8)) & 4278255360)),
              (e0.low ^= ee);
          }
          for (var en = 0; en < 24; en++) {
            for (var er = 0; er < 5; er++) {
              for (var ei = 0, eo = 0, ea = 0; ea < 5; ea++)
                (ei ^= (e0 = C[er + 5 * ea]).high), (eo ^= e0.low);
              var es = tb[er];
              (es.high = ei), (es.low = eo);
            }
            for (er = 0; er < 5; er++)
              for (
                var el = tb[(er + 4) % 5],
                  eu = tb[(er + 1) % 5],
                  ec = eu.high,
                  eu = eu.low,
                  ei = el.high ^ ((ec << 1) | (eu >>> 31)),
                  eo = el.low ^ ((eu << 1) | (ec >>> 31)),
                  ea = 0;
                ea < 5;
                ea++
              )
                ((e0 = C[er + 5 * ea]).high ^= ei), (e0.low ^= eo);
            for (var e$ = 1; e$ < 25; e$++) {
              var ed = (e0 = C[e$]).high,
                e_ = e0.low,
                ef = eT[e$];
              eo =
                ef < 32
                  ? ((ei = (ed << ef) | (e_ >>> (32 - ef))),
                    (e_ << ef) | (ed >>> (32 - ef)))
                  : ((ei = (e_ << (ef - 32)) | (ed >>> (64 - ef))),
                    (ed << (ef - 32)) | (e_ >>> (64 - ef)));
              var ed = tb[eS[e$]];
              (ed.high = ei), (ed.low = eo);
            }
            var ep = tb[0],
              eh = C[0];
            for (er = 0, ep.high = eh.high, ep.low = eh.low; er < 5; er++)
              for (ea = 0; ea < 5; ea++) {
                var e0 = C[(e$ = er + 5 * ea)],
                  eg = tb[e$],
                  e1 = tb[((er + 1) % 5) + 5 * ea],
                  e2 = tb[((er + 2) % 5) + 5 * ea];
                (e0.high = eg.high ^ (~e1.high & e2.high)),
                  (e0.low = eg.low ^ (~e1.low & e2.low));
              }
            (e0 = C[0]),
              (ep = e7[en]),
              (e0.high ^= ep.high),
              (e0.low ^= ep.low);
          }
        },
        _doFinalize: function () {
          var l = this._data,
            _ = l.words;
          this._nDataBytes;
          var C = 8 * l.sigBytes,
            N = 32 * this.blockSize;
          (_[C >>> 5] |= 1 << (24 - (C % 32))),
            (_[((ey.ceil((1 + C) / N) * N) >>> 5) - 1] |= 128),
            (l.sigBytes = 4 * _.length),
            this._process();
          for (
            var X = this._state,
              C = this.cfg.outputLength / 8,
              ee = C / 8,
              et = [],
              en = 0;
            en < ee;
            en++
          ) {
            var er = X[en],
              ei = er.high,
              er = er.low,
              ei =
                (((ei << 8) | (ei >>> 24)) & 16711935) |
                (((ei << 24) | (ei >>> 8)) & 4278255360);
            et.push(
              (((er << 8) | (er >>> 24)) & 16711935) |
                (((er << 24) | (er >>> 8)) & 4278255360)
            ),
              et.push(ei);
          }
          return new em.init(et, C);
        },
        clone: function () {
          for (
            var l = e4.clone.call(this),
              _ = (l._state = this._state.slice(0)),
              C = 0;
            C < 25;
            C++
          )
            _[C] = _[C].clone();
          return l;
        },
      })),
      (ee.SHA3 = e4._createHelper(_)),
      (ee.HmacSHA3 = e4._createHmacHelper(_)),
      (eF = (_ = (ee = l).lib).WordArray),
      (eV = _.Hasher),
      (_ = ee.algo),
      (eW = eF.create([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
        6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0,
        6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
        4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
      ])),
      (eX = eF.create([
        5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
        13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
        12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
        14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
      ])),
      (ez = eF.create([
        11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11,
        9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14,
        8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6,
        5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
      ])),
      (eq = eF.create([
        8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
        12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12,
        13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12,
        5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
      ])),
      (eU = eF.create([0, 1518500249, 1859775393, 2400959708, 2840853838])),
      (eZ = eF.create([1352829926, 1548603684, 1836072691, 2053994217, 0])),
      (_ = _.RIPEMD160 =
        eV.extend({
          _doReset: function () {
            this._hash = eF.create([
              1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]);
          },
          _doProcessBlock: function (l, _) {
            for (var C, N, X, ee, et, en, er = 0; er < 16; er++) {
              var ei = _ + er,
                eo = l[ei];
              l[ei] =
                (((eo << 8) | (eo >>> 24)) & 16711935) |
                (((eo << 24) | (eo >>> 8)) & 4278255360);
            }
            for (
              var ea = this._hash.words,
                es = eU.words,
                el = eZ.words,
                eu = eW.words,
                ec = eX.words,
                e$ = ez.words,
                ed = eq.words,
                e_ = (C = ea[0]),
                ef = (N = ea[1]),
                ep = (X = ea[2]),
                eh = (ee = ea[3]),
                e0 = (et = ea[4]),
                er = 0;
              er < 80;
              er += 1
            )
              (en =
                ((en = tm(
                  (en =
                    ((en = (C + l[_ + eu[er]]) | 0) +
                      (er < 16
                        ? (N ^ X ^ ee) + es[0]
                        : er < 32
                          ? tv(N, X, ee) + es[1]
                          : er < 48
                            ? ((N | ~X) ^ ee) + es[2]
                            : er < 64
                              ? ty(N, X, ee) + es[3]
                              : (N ^ (X | ~ee)) + es[4])) |
                    0),
                  e$[er]
                )) +
                  et) |
                0),
                (C = et),
                (et = ee),
                (ee = tm(X, 10)),
                (X = N),
                (N = en),
                (en =
                  ((en = tm(
                    (en =
                      ((en = (e_ + l[_ + ec[er]]) | 0) +
                        (er < 16
                          ? (ef ^ (ep | ~eh)) + el[0]
                          : er < 32
                            ? ty(ef, ep, eh) + el[1]
                            : er < 48
                              ? ((ef | ~ep) ^ eh) + el[2]
                              : er < 64
                                ? tv(ef, ep, eh) + el[3]
                                : (ef ^ ep ^ eh) + el[4])) |
                      0),
                    ed[er]
                  )) +
                    e0) |
                  0),
                (e_ = e0),
                (e0 = eh),
                (eh = tm(ep, 10)),
                (ep = ef),
                (ef = en);
            (en = (ea[1] + X + eh) | 0),
              (ea[1] = (ea[2] + ee + e0) | 0),
              (ea[2] = (ea[3] + et + e_) | 0),
              (ea[3] = (ea[4] + C + ef) | 0),
              (ea[4] = (ea[0] + N + ep) | 0),
              (ea[0] = en);
          },
          _doFinalize: function () {
            var l = this._data,
              _ = l.words,
              C = 8 * this._nDataBytes,
              N = 8 * l.sigBytes;
            (_[N >>> 5] |= 128 << (24 - (N % 32))),
              (_[14 + (((64 + N) >>> 9) << 4)] =
                (((C << 8) | (C >>> 24)) & 16711935) |
                (((C << 24) | (C >>> 8)) & 4278255360)),
              (l.sigBytes = (_.length + 1) * 4),
              this._process();
            for (var N = this._hash, X = N.words, ee = 0; ee < 5; ee++) {
              var et = X[ee];
              X[ee] =
                (((et << 8) | (et >>> 24)) & 16711935) |
                (((et << 24) | (et >>> 8)) & 4278255360);
            }
            return N;
          },
          clone: function () {
            var l = eV.clone.call(this);
            return (l._hash = this._hash.clone()), l;
          },
        })),
      (ee.RIPEMD160 = eV._createHelper(_)),
      (ee.HmacRIPEMD160 = eV._createHmacHelper(_)),
      (_ = (ee = l).lib.Base),
      (eK = ee.enc.Utf8),
      (ee.algo.HMAC = _.extend({
        init: function (l, _) {
          (l = this._hasher = new l.init()),
            "string" == typeof _ && (_ = eK.parse(_));
          for (
            var C = l.blockSize,
              N = 4 * C,
              l =
                ((_ = _.sigBytes > N ? l.finalize(_) : _).clamp(),
                (this._oKey = _.clone())),
              _ = (this._iKey = _.clone()),
              X = l.words,
              ee = _.words,
              et = 0;
            et < C;
            et++
          )
            (X[et] ^= 1549556828), (ee[et] ^= 909522486);
          (l.sigBytes = _.sigBytes = N), this.reset();
        },
        reset: function () {
          var l = this._hasher;
          l.reset(), l.update(this._iKey);
        },
        update: function (l) {
          return this._hasher.update(l), this;
        },
        finalize: function (l) {
          var _ = this._hasher,
            l = _.finalize(l);
          return _.reset(), _.finalize(this._oKey.clone().concat(l));
        },
      })),
      (t7 = (_ = (ee = l).lib).Base),
      (eQ = _.WordArray),
      (tV = (_ = ee.algo).SHA1),
      (e9 = _.HMAC),
      (eY = _.PBKDF2 =
        t7.extend({
          cfg: t7.extend({ keySize: 4, hasher: tV, iterations: 1 }),
          init: function (l) {
            this.cfg = this.cfg.extend(l);
          },
          compute: function (l, _) {
            for (
              var C = this.cfg,
                N = e9.create(C.hasher, l),
                X = eQ.create(),
                ee = eQ.create([1]),
                et = X.words,
                en = ee.words,
                er = C.keySize,
                ei = C.iterations;
              et.length < er;

            ) {
              var eo = N.update(_).finalize(ee);
              N.reset();
              for (
                var ea = eo.words, es = ea.length, el = eo, eu = 1;
                eu < ei;
                eu++
              ) {
                (el = N.finalize(el)), N.reset();
                for (var ec = el.words, e$ = 0; e$ < es; e$++) ea[e$] ^= ec[e$];
              }
              X.concat(eo), en[0]++;
            }
            return (X.sigBytes = 4 * er), X;
          },
        })),
      (ee.PBKDF2 = function (l, _, C) {
        return eY.create(C).compute(l, _);
      }),
      (tV = (t7 = (_ = l).lib).Base),
      (eJ = t7.WordArray),
      (ee = (t7 = _.algo).MD5),
      (te = t7.EvpKDF =
        tV.extend({
          cfg: tV.extend({ keySize: 4, hasher: ee, iterations: 1 }),
          init: function (l) {
            this.cfg = this.cfg.extend(l);
          },
          compute: function (l, _) {
            for (
              var C,
                N = this.cfg,
                X = N.hasher.create(),
                ee = eJ.create(),
                et = ee.words,
                en = N.keySize,
                er = N.iterations;
              et.length < en;

            ) {
              C && X.update(C), (C = X.update(l).finalize(_)), X.reset();
              for (var ei = 1; ei < er; ei++) (C = X.finalize(C)), X.reset();
              ee.concat(C);
            }
            return (ee.sigBytes = 4 * en), ee;
          },
        })),
      (_.EvpKDF = function (l, _, C) {
        return te.create(C).compute(l, _);
      }),
      l.lib.Cipher ||
        ((ee = (tV = (t7 = l).lib).Base),
        (tt = tV.WordArray),
        (tn = tV.BufferedBlockAlgorithm),
        (_ = t7.enc).Utf8,
        (tr = _.Base64),
        (ti = t7.algo.EvpKDF),
        (to = tV.Cipher =
          tn.extend({
            cfg: ee.extend(),
            createEncryptor: function (l, _) {
              return this.create(this._ENC_XFORM_MODE, l, _);
            },
            createDecryptor: function (l, _) {
              return this.create(this._DEC_XFORM_MODE, l, _);
            },
            init: function (l, _, C) {
              (this.cfg = this.cfg.extend(C)),
                (this._xformMode = l),
                (this._key = _),
                this.reset();
            },
            reset: function () {
              tn.reset.call(this), this._doReset();
            },
            process: function (l) {
              return this._append(l), this._process();
            },
            finalize: function (l) {
              return l && this._append(l), this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (l) {
              return {
                encrypt: function (_, C, N) {
                  return t4(C).encrypt(l, _, C, N);
                },
                decrypt: function (_, C, N) {
                  return t4(C).decrypt(l, _, C, N);
                },
              };
            },
          })),
        (tV.StreamCipher = to.extend({
          _doFinalize: function () {
            return this._process(!0);
          },
          blockSize: 1,
        })),
        (_ = t7.mode = {}),
        ((_ = (tu = tV.BlockCipherMode =
          ee.extend({
            createEncryptor: function (l, _) {
              return this.Encryptor.create(l, _);
            },
            createDecryptor: function (l, _) {
              return this.Decryptor.create(l, _);
            },
            init: function (l, _) {
              (this._cipher = l), (this._iv = _);
            },
          })).extend()).Encryptor = _.extend({
          processBlock: function (l, _) {
            var C = this._cipher,
              N = C.blockSize;
            t6.call(this, l, _, N),
              C.encryptBlock(l, _),
              (this._prevBlock = l.slice(_, _ + N));
          },
        })),
        (_.Decryptor = _.extend({
          processBlock: function (l, _) {
            var C = this._cipher,
              N = C.blockSize,
              X = l.slice(_, _ + N);
            C.decryptBlock(l, _), t6.call(this, l, _, N), (this._prevBlock = X);
          },
        })),
        (tu = _.CBC = _),
        (_ = (t7.pad = {}).Pkcs7 =
          {
            pad: function (l, _) {
              for (
                var _ = 4 * _,
                  C = _ - (l.sigBytes % _),
                  N = (C << 24) | (C << 16) | (C << 8) | C,
                  X = [],
                  ee = 0;
                ee < C;
                ee += 4
              )
                X.push(N);
              (_ = tt.create(X, C)), l.concat(_);
            },
            unpad: function (l) {
              var _ = 255 & l.words[(l.sigBytes - 1) >>> 2];
              l.sigBytes -= _;
            },
          }),
        (tV.BlockCipher = to.extend({
          cfg: to.cfg.extend({ mode: tu, padding: _ }),
          reset: function () {
            to.reset.call(this);
            var l,
              _ = this.cfg,
              C = _.iv,
              _ = _.mode;
            this._xformMode == this._ENC_XFORM_MODE
              ? (l = _.createEncryptor)
              : ((l = _.createDecryptor), (this._minBufferSize = 1)),
              this._mode && this._mode.__creator == l
                ? this._mode.init(this, C && C.words)
                : ((this._mode = l.call(_, this, C && C.words)),
                  (this._mode.__creator = l));
          },
          _doProcessBlock: function (l, _) {
            this._mode.processBlock(l, _);
          },
          _doFinalize: function () {
            var l,
              _ = this.cfg.padding;
            return (
              this._xformMode == this._ENC_XFORM_MODE
                ? (_.pad(this._data, this.blockSize), (l = this._process(!0)))
                : ((l = this._process(!0)), _.unpad(l)),
              l
            );
          },
          blockSize: 4,
        })),
        (ta = tV.CipherParams =
          ee.extend({
            init: function (l) {
              this.mixIn(l);
            },
            toString: function (l) {
              return (l || this.formatter).stringify(this);
            },
          })),
        (tu = (t7.format = {}).OpenSSL =
          {
            stringify: function (l) {
              var _ = l.ciphertext,
                l = l.salt,
                l = l
                  ? tt.create([1398893684, 1701076831]).concat(l).concat(_)
                  : _;
              return l.toString(tr);
            },
            parse: function (l) {
              var _,
                l = tr.parse(l),
                C = l.words;
              return (
                1398893684 == C[0] &&
                  1701076831 == C[1] &&
                  ((_ = tt.create(C.slice(2, 4))),
                  C.splice(0, 4),
                  (l.sigBytes -= 16)),
                ta.create({ ciphertext: l, salt: _ })
              );
            },
          }),
        (ts = tV.SerializableCipher =
          ee.extend({
            cfg: ee.extend({ format: tu }),
            encrypt: function (l, _, C, N) {
              N = this.cfg.extend(N);
              var X = l.createEncryptor(C, N),
                _ = X.finalize(_),
                X = X.cfg;
              return ta.create({
                ciphertext: _,
                key: C,
                iv: X.iv,
                algorithm: l,
                mode: X.mode,
                padding: X.padding,
                blockSize: l.blockSize,
                formatter: N.format,
              });
            },
            decrypt: function (l, _, C, N) {
              return (
                (N = this.cfg.extend(N)),
                (_ = this._parse(_, N.format)),
                l.createDecryptor(C, N).finalize(_.ciphertext)
              );
            },
            _parse: function (l, _) {
              return "string" == typeof l ? _.parse(l, this) : l;
            },
          })),
        (_ = (t7.kdf = {}).OpenSSL =
          {
            execute: function (l, _, C, N) {
              return (
                (N = N || tt.random(8)),
                (l = ti.create({ keySize: _ + C }).compute(l, N)),
                (C = tt.create(l.words.slice(_), 4 * C)),
                (l.sigBytes = 4 * _),
                ta.create({ key: l, iv: C, salt: N })
              );
            },
          }),
        (tl = tV.PasswordBasedCipher =
          ts.extend({
            cfg: ts.cfg.extend({ kdf: _ }),
            encrypt: function (l, _, C, N) {
              return (
                (C = (N = this.cfg.extend(N)).kdf.execute(
                  C,
                  l.keySize,
                  l.ivSize
                )),
                (N.iv = C.iv),
                (l = ts.encrypt.call(this, l, _, C.key, N)).mixIn(C),
                l
              );
            },
            decrypt: function (l, _, C, N) {
              return (
                (N = this.cfg.extend(N)),
                (_ = this._parse(_, N.format)),
                (C = N.kdf.execute(C, l.keySize, l.ivSize, _.salt)),
                (N.iv = C.iv),
                ts.decrypt.call(this, l, _, C.key, N)
              );
            },
          }))),
      (l.mode.CFB =
        (((ee = l.lib.BlockCipherMode.extend()).Encryptor = ee.extend({
          processBlock: function (l, _) {
            var C = this._cipher,
              N = C.blockSize;
            tT.call(this, l, _, N, C), (this._prevBlock = l.slice(_, _ + N));
          },
        })),
        (ee.Decryptor = ee.extend({
          processBlock: function (l, _) {
            var C = this._cipher,
              N = C.blockSize,
              X = l.slice(_, _ + N);
            tT.call(this, l, _, N, C), (this._prevBlock = X);
          },
        })),
        ee)),
      (l.mode.CTR =
        ((t7 = (tu = l.lib.BlockCipherMode.extend()).Encryptor =
          tu.extend({
            processBlock: function (l, _) {
              var C = this._cipher,
                N = C.blockSize,
                X = this._iv,
                ee = this._counter;
              X && ((ee = this._counter = X.slice(0)), (this._iv = void 0));
              var et = ee.slice(0);
              C.encryptBlock(et, 0), (ee[N - 1] = (ee[N - 1] + 1) | 0);
              for (var en = 0; en < N; en++) l[_ + en] ^= et[en];
            },
          })),
        (tu.Decryptor = t7),
        tu)),
      (l.mode.CTRGladman =
        ((_ = (tV = l.lib.BlockCipherMode.extend()).Encryptor =
          tV.extend({
            processBlock: function (l, _) {
              var C = this._cipher,
                N = C.blockSize,
                X = this._iv,
                ee = this._counter;
              X && ((ee = this._counter = X.slice(0)), (this._iv = void 0)),
                0 === ((X = ee)[0] = tS(X[0])) && (X[1] = tS(X[1]));
              var et = ee.slice(0);
              C.encryptBlock(et, 0);
              for (var en = 0; en < N; en++) l[_ + en] ^= et[en];
            },
          })),
        (tV.Decryptor = _),
        tV)),
      (l.mode.OFB =
        ((t7 = (ee = l.lib.BlockCipherMode.extend()).Encryptor =
          ee.extend({
            processBlock: function (l, _) {
              var C = this._cipher,
                N = C.blockSize,
                X = this._iv,
                ee = this._keystream;
              X && ((ee = this._keystream = X.slice(0)), (this._iv = void 0)),
                C.encryptBlock(ee, 0);
              for (var et = 0; et < N; et++) l[_ + et] ^= ee[et];
            },
          })),
        (ee.Decryptor = t7),
        ee)),
      (l.mode.ECB =
        (((_ = l.lib.BlockCipherMode.extend()).Encryptor = _.extend({
          processBlock: function (l, _) {
            this._cipher.encryptBlock(l, _);
          },
        })),
        (_.Decryptor = _.extend({
          processBlock: function (l, _) {
            this._cipher.decryptBlock(l, _);
          },
        })),
        _)),
      (l.pad.AnsiX923 = {
        pad: function (l, _) {
          var C = l.sigBytes,
            _ = 4 * _,
            _ = _ - (C % _),
            C = C + _ - 1;
          l.clamp(),
            (l.words[C >>> 2] |= _ << (24 - (C % 4) * 8)),
            (l.sigBytes += _);
        },
        unpad: function (l) {
          var _ = 255 & l.words[(l.sigBytes - 1) >>> 2];
          l.sigBytes -= _;
        },
      }),
      (l.pad.Iso10126 = {
        pad: function (_, C) {
          (C *= 4),
            (C -= _.sigBytes % C),
            _.concat(l.lib.WordArray.random(C - 1)).concat(
              l.lib.WordArray.create([C << 24], 1)
            );
        },
        unpad: function (l) {
          var _ = 255 & l.words[(l.sigBytes - 1) >>> 2];
          l.sigBytes -= _;
        },
      }),
      (l.pad.Iso97971 = {
        pad: function (_, C) {
          _.concat(l.lib.WordArray.create([2147483648], 1)),
            l.pad.ZeroPadding.pad(_, C);
        },
        unpad: function (_) {
          l.pad.ZeroPadding.unpad(_), _.sigBytes--;
        },
      }),
      (l.pad.ZeroPadding = {
        pad: function (l, _) {
          (_ *= 4), l.clamp(), (l.sigBytes += _ - (l.sigBytes % _ || _));
        },
        unpad: function (l) {
          for (
            var _ = l.words, C = l.sigBytes - 1, C = l.sigBytes - 1;
            C >= 0;
            C--
          )
            if ((_[C >>> 2] >>> (24 - (C % 4) * 8)) & 255) {
              l.sigBytes = C + 1;
              break;
            }
        },
      }),
      (l.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
      (tc = (tV = l).lib.CipherParams),
      (t$ = tV.enc.Hex),
      (tV.format.Hex = {
        stringify: function (l) {
          return l.ciphertext.toString(t$);
        },
        parse: function (l) {
          return (l = t$.parse(l)), tc.create({ ciphertext: l });
        },
      });
    for (
      var t7 = l,
        ee = t7.lib.BlockCipher,
        _ = t7.algo,
        tw = [],
        tP = [],
        tA = [],
        t8 = [],
        tC = [],
        tM = [],
        tx = [],
        tk = [],
        tB = [],
        tE = [],
        tG = [],
        tH = 0;
      tH < 256;
      tH++
    )
      tG[tH] = tH < 128 ? tH << 1 : (tH << 1) ^ 283;
    for (var tD = 0, tI = 0, tH = 0; tH < 256; tH++) {
      var tL = tI ^ (tI << 1) ^ (tI << 2) ^ (tI << 3) ^ (tI << 4),
        tN = tG[(tP[(tw[tD] = tL = (tL >>> 8) ^ (255 & tL) ^ 99)] = tD)],
        tO = tG[tN],
        tj = tG[tO],
        tR = (257 * tG[tL]) ^ (16843008 * tL);
      (tA[tD] = (tR << 24) | (tR >>> 8)),
        (t8[tD] = (tR << 16) | (tR >>> 16)),
        (tC[tD] = (tR << 8) | (tR >>> 24)),
        (tM[tD] = tR),
        (tx[tL] =
          ((tR =
            (16843009 * tj) ^ (65537 * tO) ^ (257 * tN) ^ (16843008 * tD)) <<
            24) |
          (tR >>> 8)),
        (tk[tL] = (tR << 16) | (tR >>> 16)),
        (tB[tL] = (tR << 8) | (tR >>> 24)),
        (tE[tL] = tR),
        tD
          ? ((tD = tN ^ tG[tG[tG[tj ^ tN]]]), (tI ^= tG[tG[tI]]))
          : (tD = tI = 1);
    }
    var tF = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      _ = (_.AES = ee.extend({
        _doReset: function () {
          if (!this._nRounds || this._keyPriorReset !== this._key) {
            for (
              var l = (this._keyPriorReset = this._key),
                _ = l.words,
                C = l.sigBytes / 4,
                N = (1 + (this._nRounds = 6 + C)) * 4,
                X = (this._keySchedule = []),
                ee = 0;
              ee < N;
              ee++
            )
              ee < C
                ? (X[ee] = _[ee])
                : ((er = X[ee - 1]),
                  ee % C
                    ? C > 6 &&
                      ee % C == 4 &&
                      (er =
                        (tw[er >>> 24] << 24) |
                        (tw[(er >>> 16) & 255] << 16) |
                        (tw[(er >>> 8) & 255] << 8) |
                        tw[255 & er])
                    : ((er =
                        (tw[(er = (er << 8) | (er >>> 24)) >>> 24] << 24) |
                        (tw[(er >>> 16) & 255] << 16) |
                        (tw[(er >>> 8) & 255] << 8) |
                        tw[255 & er]),
                      (er ^= tF[(ee / C) | 0] << 24)),
                  (X[ee] = X[ee - C] ^ er));
            for (var et = (this._invKeySchedule = []), en = 0; en < N; en++) {
              var er,
                ee = N - en;
              (er = en % 4 ? X[ee] : X[ee - 4]),
                (et[en] =
                  en < 4 || ee <= 4
                    ? er
                    : tx[tw[er >>> 24]] ^
                      tk[tw[(er >>> 16) & 255]] ^
                      tB[tw[(er >>> 8) & 255]] ^
                      tE[tw[255 & er]]);
            }
          }
        },
        encryptBlock: function (l, _) {
          this._doCryptBlock(l, _, this._keySchedule, tA, t8, tC, tM, tw);
        },
        decryptBlock: function (l, _) {
          var C = l[_ + 1];
          (l[_ + 1] = l[_ + 3]),
            (l[_ + 3] = C),
            this._doCryptBlock(l, _, this._invKeySchedule, tx, tk, tB, tE, tP);
          var C = l[_ + 1];
          (l[_ + 1] = l[_ + 3]), (l[_ + 3] = C);
        },
        _doCryptBlock: function (l, _, C, N, X, ee, et, en) {
          for (
            var er = this._nRounds,
              ei = l[_] ^ C[0],
              eo = l[_ + 1] ^ C[1],
              ea = l[_ + 2] ^ C[2],
              es = l[_ + 3] ^ C[3],
              el = 4,
              eu = 1;
            eu < er;
            eu++
          )
            var ec =
                N[ei >>> 24] ^
                X[(eo >>> 16) & 255] ^
                ee[(ea >>> 8) & 255] ^
                et[255 & es] ^
                C[el++],
              e$ =
                N[eo >>> 24] ^
                X[(ea >>> 16) & 255] ^
                ee[(es >>> 8) & 255] ^
                et[255 & ei] ^
                C[el++],
              ed =
                N[ea >>> 24] ^
                X[(es >>> 16) & 255] ^
                ee[(ei >>> 8) & 255] ^
                et[255 & eo] ^
                C[el++],
              e_ =
                N[es >>> 24] ^
                X[(ei >>> 16) & 255] ^
                ee[(eo >>> 8) & 255] ^
                et[255 & ea] ^
                C[el++],
              ei = ec,
              eo = e$,
              ea = ed,
              es = e_;
          (ec =
            ((en[ei >>> 24] << 24) |
              (en[(eo >>> 16) & 255] << 16) |
              (en[(ea >>> 8) & 255] << 8) |
              en[255 & es]) ^
            C[el++]),
            (e$ =
              ((en[eo >>> 24] << 24) |
                (en[(ea >>> 16) & 255] << 16) |
                (en[(es >>> 8) & 255] << 8) |
                en[255 & ei]) ^
              C[el++]),
            (ed =
              ((en[ea >>> 24] << 24) |
                (en[(es >>> 16) & 255] << 16) |
                (en[(ei >>> 8) & 255] << 8) |
                en[255 & eo]) ^
              C[el++]),
            (e_ =
              ((en[es >>> 24] << 24) |
                (en[(ei >>> 16) & 255] << 16) |
                (en[(eo >>> 8) & 255] << 8) |
                en[255 & ea]) ^
              C[el++]),
            (l[_] = ec),
            (l[_ + 1] = e$),
            (l[_ + 2] = ed),
            (l[_ + 3] = e_);
        },
        keySize: 8,
      }));
    t7.AES = ee._createHelper(_);
    var tV = l,
      tW = (t7 = tV.lib).WordArray,
      t7 = t7.BlockCipher,
      ee = tV.algo,
      tX = [
        57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43,
        35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62,
        54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
      ],
      tz = [
        14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7,
        27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49,
        39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
      ],
      tq = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
      tU = [
        {
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
          4160749569: 8421378,
        },
        {
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
          528482304: 540672,
        },
        {
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
          33030144: 65792,
        },
        {
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
          2064384: 4198464,
        },
        {
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
          129024: 536871040,
        },
        {
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
          8064: 268443656,
        },
        {
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
          504: 1048577,
        },
        {
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
          2147483679: 134350848,
        },
      ],
      tZ = [
        4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679,
      ],
      tK = (ee.DES = t7.extend({
        _doReset: function () {
          for (var l = this._key.words, _ = [], C = 0; C < 56; C++) {
            var N = tX[C] - 1;
            _[C] = (l[N >>> 5] >>> (31 - (N % 32))) & 1;
          }
          for (var X = (this._subKeys = []), ee = 0; ee < 16; ee++) {
            for (var et = (X[ee] = []), en = tq[ee], C = 0; C < 24; C++)
              (et[(C / 6) | 0] |= _[(tz[C] - 1 + en) % 28] << (31 - (C % 6))),
                (et[4 + ((C / 6) | 0)] |=
                  _[28 + ((tz[C + 24] - 1 + en) % 28)] << (31 - (C % 6)));
            for (C = 1, et[0] = (et[0] << 1) | (et[0] >>> 31); C < 7; C++)
              et[C] = et[C] >>> ((C - 1) * 4 + 3);
            et[7] = (et[7] << 5) | (et[7] >>> 27);
          }
          for (var er = (this._invSubKeys = []), C = 0; C < 16; C++)
            er[C] = X[15 - C];
        },
        encryptBlock: function (l, _) {
          this._doCryptBlock(l, _, this._subKeys);
        },
        decryptBlock: function (l, _) {
          this._doCryptBlock(l, _, this._invSubKeys);
        },
        _doCryptBlock: function (l, _, C) {
          (this._lBlock = l[_]),
            (this._rBlock = l[_ + 1]),
            tQ.call(this, 4, 252645135),
            tQ.call(this, 16, 65535),
            t9.call(this, 2, 858993459),
            t9.call(this, 8, 16711935),
            tQ.call(this, 1, 1431655765);
          for (var N = 0; N < 16; N++) {
            for (
              var X = C[N],
                ee = this._lBlock,
                et = this._rBlock,
                en = 0,
                er = 0;
              er < 8;
              er++
            )
              en |= tU[er][((et ^ X[er]) & tZ[er]) >>> 0];
            (this._lBlock = et), (this._rBlock = ee ^ en);
          }
          var ei = this._lBlock;
          (this._lBlock = this._rBlock),
            (this._rBlock = ei),
            tQ.call(this, 1, 1431655765),
            t9.call(this, 8, 16711935),
            t9.call(this, 2, 858993459),
            tQ.call(this, 16, 65535),
            tQ.call(this, 4, 252645135),
            (l[_] = this._lBlock),
            (l[_ + 1] = this._rBlock);
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2,
      }));
    function tQ(l, _) {
      (_ = ((this._lBlock >>> l) ^ this._rBlock) & _),
        (this._rBlock ^= _),
        (this._lBlock ^= _ << l);
    }
    function t9(l, _) {
      (_ = ((this._rBlock >>> l) ^ this._lBlock) & _),
        (this._lBlock ^= _),
        (this._rBlock ^= _ << l);
    }
    (tV.DES = t7._createHelper(tK)),
      (ee = ee.TripleDES =
        t7.extend({
          _doReset: function () {
            var l = this._key.words;
            if (2 !== l.length && 4 !== l.length && l.length < 6)
              throw Error(
                "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
              );
            var _ = l.slice(0, 2),
              C = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4),
              l = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            (this._des1 = tK.createEncryptor(tW.create(_))),
              (this._des2 = tK.createEncryptor(tW.create(C))),
              (this._des3 = tK.createEncryptor(tW.create(l)));
          },
          encryptBlock: function (l, _) {
            this._des1.encryptBlock(l, _),
              this._des2.decryptBlock(l, _),
              this._des3.encryptBlock(l, _);
          },
          decryptBlock: function (l, _) {
            this._des3.decryptBlock(l, _),
              this._des2.encryptBlock(l, _),
              this._des1.decryptBlock(l, _);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2,
        })),
      (tV.TripleDES = t7._createHelper(ee));
    var _ = l,
      tV = _.lib.StreamCipher,
      t7 = _.algo,
      tY = (t7.RC4 = tV.extend({
        _doReset: function () {
          for (
            var l = this._key,
              _ = l.words,
              C = l.sigBytes,
              N = (this._S = []),
              X = 0;
            X < 256;
            X++
          )
            N[X] = X;
          for (var X = 0, ee = 0; X < 256; X++) {
            var et = X % C,
              et = (_[et >>> 2] >>> (24 - (et % 4) * 8)) & 255,
              ee = (ee + N[X] + et) % 256,
              et = N[X];
            (N[X] = N[ee]), (N[ee] = et);
          }
          this._i = this._j = 0;
        },
        _doProcessBlock: function (l, _) {
          l[_] ^= tJ.call(this);
        },
        keySize: 8,
        ivSize: 0,
      }));
    function tJ() {
      for (
        var l = this._S, _ = this._i, C = this._j, N = 0, X = 0;
        X < 4;
        X++
      ) {
        var C = (C + l[(_ = (_ + 1) % 256)]) % 256,
          ee = l[_];
        (l[_] = l[C]),
          (l[C] = ee),
          (N |= l[(l[_] + l[C]) % 256] << (24 - 8 * X));
      }
      return (this._i = _), (this._j = C), N;
    }
    function ne() {
      for (var l = this._X, _ = this._C, C = 0; C < 8; C++) t_[C] = _[C];
      for (
        C = 0,
          _[0] = (_[0] + 1295307597 + this._b) | 0,
          _[1] = (_[1] + 3545052371 + (_[0] >>> 0 < t_[0] >>> 0 ? 1 : 0)) | 0,
          _[2] = (_[2] + 886263092 + (_[1] >>> 0 < t_[1] >>> 0 ? 1 : 0)) | 0,
          _[3] = (_[3] + 1295307597 + (_[2] >>> 0 < t_[2] >>> 0 ? 1 : 0)) | 0,
          _[4] = (_[4] + 3545052371 + (_[3] >>> 0 < t_[3] >>> 0 ? 1 : 0)) | 0,
          _[5] = (_[5] + 886263092 + (_[4] >>> 0 < t_[4] >>> 0 ? 1 : 0)) | 0,
          _[6] = (_[6] + 1295307597 + (_[5] >>> 0 < t_[5] >>> 0 ? 1 : 0)) | 0,
          _[7] = (_[7] + 3545052371 + (_[6] >>> 0 < t_[6] >>> 0 ? 1 : 0)) | 0,
          this._b = _[7] >>> 0 < t_[7] >>> 0 ? 1 : 0;
        C < 8;
        C++
      ) {
        var N = l[C] + _[C],
          X = 65535 & N,
          ee = N >>> 16;
        tf[C] =
          (((((X * X) >>> 17) + X * ee) >>> 15) + ee * ee) ^
          ((((4294901760 & N) * N) | 0) + (((65535 & N) * N) | 0));
      }
      (l[0] =
        (tf[0] +
          ((tf[7] << 16) | (tf[7] >>> 16)) +
          ((tf[6] << 16) | (tf[6] >>> 16))) |
        0),
        (l[1] = (tf[1] + ((tf[0] << 8) | (tf[0] >>> 24)) + tf[7]) | 0),
        (l[2] =
          (tf[2] +
            ((tf[1] << 16) | (tf[1] >>> 16)) +
            ((tf[0] << 16) | (tf[0] >>> 16))) |
          0),
        (l[3] = (tf[3] + ((tf[2] << 8) | (tf[2] >>> 24)) + tf[1]) | 0),
        (l[4] =
          (tf[4] +
            ((tf[3] << 16) | (tf[3] >>> 16)) +
            ((tf[2] << 16) | (tf[2] >>> 16))) |
          0),
        (l[5] = (tf[5] + ((tf[4] << 8) | (tf[4] >>> 24)) + tf[3]) | 0),
        (l[6] =
          (tf[6] +
            ((tf[5] << 16) | (tf[5] >>> 16)) +
            ((tf[4] << 16) | (tf[4] >>> 16))) |
          0),
        (l[7] = (tf[7] + ((tf[6] << 8) | (tf[6] >>> 24)) + tf[5]) | 0);
    }
    function nt() {
      for (var l = this._X, _ = this._C, C = 0; C < 8; C++) th[C] = _[C];
      for (
        C = 0,
          _[0] = (_[0] + 1295307597 + this._b) | 0,
          _[1] = (_[1] + 3545052371 + (_[0] >>> 0 < th[0] >>> 0 ? 1 : 0)) | 0,
          _[2] = (_[2] + 886263092 + (_[1] >>> 0 < th[1] >>> 0 ? 1 : 0)) | 0,
          _[3] = (_[3] + 1295307597 + (_[2] >>> 0 < th[2] >>> 0 ? 1 : 0)) | 0,
          _[4] = (_[4] + 3545052371 + (_[3] >>> 0 < th[3] >>> 0 ? 1 : 0)) | 0,
          _[5] = (_[5] + 886263092 + (_[4] >>> 0 < th[4] >>> 0 ? 1 : 0)) | 0,
          _[6] = (_[6] + 1295307597 + (_[5] >>> 0 < th[5] >>> 0 ? 1 : 0)) | 0,
          _[7] = (_[7] + 3545052371 + (_[6] >>> 0 < th[6] >>> 0 ? 1 : 0)) | 0,
          this._b = _[7] >>> 0 < th[7] >>> 0 ? 1 : 0;
        C < 8;
        C++
      ) {
        var N = l[C] + _[C],
          X = 65535 & N,
          ee = N >>> 16;
        t0[C] =
          (((((X * X) >>> 17) + X * ee) >>> 15) + ee * ee) ^
          ((((4294901760 & N) * N) | 0) + (((65535 & N) * N) | 0));
      }
      (l[0] =
        (t0[0] +
          ((t0[7] << 16) | (t0[7] >>> 16)) +
          ((t0[6] << 16) | (t0[6] >>> 16))) |
        0),
        (l[1] = (t0[1] + ((t0[0] << 8) | (t0[0] >>> 24)) + t0[7]) | 0),
        (l[2] =
          (t0[2] +
            ((t0[1] << 16) | (t0[1] >>> 16)) +
            ((t0[0] << 16) | (t0[0] >>> 16))) |
          0),
        (l[3] = (t0[3] + ((t0[2] << 8) | (t0[2] >>> 24)) + t0[1]) | 0),
        (l[4] =
          (t0[4] +
            ((t0[3] << 16) | (t0[3] >>> 16)) +
            ((t0[2] << 16) | (t0[2] >>> 16))) |
          0),
        (l[5] = (t0[5] + ((t0[4] << 8) | (t0[4] >>> 24)) + t0[3]) | 0),
        (l[6] =
          (t0[6] +
            ((t0[5] << 16) | (t0[5] >>> 16)) +
            ((t0[4] << 16) | (t0[4] >>> 16))) |
          0),
        (l[7] = (t0[7] + ((t0[6] << 8) | (t0[6] >>> 24)) + t0[5]) | 0);
    }
    return (
      (_.RC4 = tV._createHelper(tY)),
      (t7 = t7.RC4Drop =
        tY.extend({
          cfg: tY.cfg.extend({ drop: 192 }),
          _doReset: function () {
            tY._doReset.call(this);
            for (var l = this.cfg.drop; l > 0; l--) tJ.call(this);
          },
        })),
      (_.RC4Drop = tV._createHelper(t7)),
      (_ = (ee = l).lib.StreamCipher),
      (tV = ee.algo),
      (td = []),
      (t_ = []),
      (tf = []),
      (tV = tV.Rabbit =
        _.extend({
          _doReset: function () {
            for (var l = this._key.words, _ = this.cfg.iv, C = 0; C < 4; C++)
              l[C] =
                (((l[C] << 8) | (l[C] >>> 24)) & 16711935) |
                (((l[C] << 24) | (l[C] >>> 8)) & 4278255360);
            for (
              var N = (this._X = [
                  l[0],
                  (l[3] << 16) | (l[2] >>> 16),
                  l[1],
                  (l[0] << 16) | (l[3] >>> 16),
                  l[2],
                  (l[1] << 16) | (l[0] >>> 16),
                  l[3],
                  (l[2] << 16) | (l[1] >>> 16),
                ]),
                X = (this._C = [
                  (l[2] << 16) | (l[2] >>> 16),
                  (4294901760 & l[0]) | (65535 & l[1]),
                  (l[3] << 16) | (l[3] >>> 16),
                  (4294901760 & l[1]) | (65535 & l[2]),
                  (l[0] << 16) | (l[0] >>> 16),
                  (4294901760 & l[2]) | (65535 & l[3]),
                  (l[1] << 16) | (l[1] >>> 16),
                  (4294901760 & l[3]) | (65535 & l[0]),
                ]),
                C = (this._b = 0);
              C < 4;
              C++
            )
              ne.call(this);
            for (C = 0; C < 8; C++) X[C] ^= N[(C + 4) & 7];
            if (_) {
              var _ = _.words,
                ee = _[0],
                _ = _[1],
                ee =
                  (((ee << 8) | (ee >>> 24)) & 16711935) |
                  (((ee << 24) | (ee >>> 8)) & 4278255360),
                _ =
                  (((_ << 8) | (_ >>> 24)) & 16711935) |
                  (((_ << 24) | (_ >>> 8)) & 4278255360),
                et = (ee >>> 16) | (4294901760 & _),
                en = (_ << 16) | (65535 & ee);
              for (
                X[0] ^= ee,
                  X[1] ^= et,
                  X[2] ^= _,
                  X[3] ^= en,
                  X[4] ^= ee,
                  X[5] ^= et,
                  X[6] ^= _,
                  X[7] ^= en,
                  C = 0;
                C < 4;
                C++
              )
                ne.call(this);
            }
          },
          _doProcessBlock: function (l, _) {
            var C = this._X;
            ne.call(this),
              (td[0] = C[0] ^ (C[5] >>> 16) ^ (C[3] << 16)),
              (td[1] = C[2] ^ (C[7] >>> 16) ^ (C[5] << 16)),
              (td[2] = C[4] ^ (C[1] >>> 16) ^ (C[7] << 16)),
              (td[3] = C[6] ^ (C[3] >>> 16) ^ (C[1] << 16));
            for (var N = 0; N < 4; N++)
              (td[N] =
                (((td[N] << 8) | (td[N] >>> 24)) & 16711935) |
                (((td[N] << 24) | (td[N] >>> 8)) & 4278255360)),
                (l[_ + N] ^= td[N]);
          },
          blockSize: 4,
          ivSize: 2,
        })),
      (ee.Rabbit = _._createHelper(tV)),
      (ee = (t7 = l).lib.StreamCipher),
      (_ = t7.algo),
      (tp = []),
      (th = []),
      (t0 = []),
      (_ = _.RabbitLegacy =
        ee.extend({
          _doReset: function () {
            for (
              var l = this._key.words,
                _ = this.cfg.iv,
                C = (this._X = [
                  l[0],
                  (l[3] << 16) | (l[2] >>> 16),
                  l[1],
                  (l[0] << 16) | (l[3] >>> 16),
                  l[2],
                  (l[1] << 16) | (l[0] >>> 16),
                  l[3],
                  (l[2] << 16) | (l[1] >>> 16),
                ]),
                N = (this._C = [
                  (l[2] << 16) | (l[2] >>> 16),
                  (4294901760 & l[0]) | (65535 & l[1]),
                  (l[3] << 16) | (l[3] >>> 16),
                  (4294901760 & l[1]) | (65535 & l[2]),
                  (l[0] << 16) | (l[0] >>> 16),
                  (4294901760 & l[2]) | (65535 & l[3]),
                  (l[1] << 16) | (l[1] >>> 16),
                  (4294901760 & l[3]) | (65535 & l[0]),
                ]),
                X = (this._b = 0);
              X < 4;
              X++
            )
              nt.call(this);
            for (X = 0; X < 8; X++) N[X] ^= C[(X + 4) & 7];
            if (_) {
              var l = _.words,
                _ = l[0],
                l = l[1],
                _ =
                  (((_ << 8) | (_ >>> 24)) & 16711935) |
                  (((_ << 24) | (_ >>> 8)) & 4278255360),
                l =
                  (((l << 8) | (l >>> 24)) & 16711935) |
                  (((l << 24) | (l >>> 8)) & 4278255360),
                ee = (_ >>> 16) | (4294901760 & l),
                et = (l << 16) | (65535 & _);
              for (
                N[0] ^= _,
                  N[1] ^= ee,
                  N[2] ^= l,
                  N[3] ^= et,
                  N[4] ^= _,
                  N[5] ^= ee,
                  N[6] ^= l,
                  N[7] ^= et,
                  X = 0;
                X < 4;
                X++
              )
                nt.call(this);
            }
          },
          _doProcessBlock: function (l, _) {
            var C = this._X;
            nt.call(this),
              (tp[0] = C[0] ^ (C[5] >>> 16) ^ (C[3] << 16)),
              (tp[1] = C[2] ^ (C[7] >>> 16) ^ (C[5] << 16)),
              (tp[2] = C[4] ^ (C[1] >>> 16) ^ (C[7] << 16)),
              (tp[3] = C[6] ^ (C[3] >>> 16) ^ (C[1] << 16));
            for (var N = 0; N < 4; N++)
              (tp[N] =
                (((tp[N] << 8) | (tp[N] >>> 24)) & 16711935) |
                (((tp[N] << 24) | (tp[N] >>> 8)) & 4278255360)),
                (l[_ + N] ^= tp[N]);
          },
          blockSize: 4,
          ivSize: 2,
        })),
      (t7.RabbitLegacy = ee._createHelper(_)),
      l
    );
  });
const G = (l, _) => {
    try {
      var C = CryptoJS.AES.decrypt(l, _);
      return JSON.parse(C.toString(CryptoJS.enc.Utf8));
    } catch (N) {
      console.log(N.message);
    }
    return [];
  },
  b = (l) => Array.isArray(l),
  T = (...l) => l.join(""),
  i = () => {
    Q.getPosition() > 10 ? Q.seek(Q.getPosition() - 10) : Q.seek(0);
  },
  u = () => {
    Q.getPosition() < Q.getDuration() && Q.seek(Q.getPosition() + 10);
  },
  U = () => {
    window.open("/embed-2/download/" + z, "_blank");
  },
  v = () => {
    window.open("/embed-1/download/" + z, "_blank");
  },
  K = (l) =>
    "undefined" != typeof Storage && localStorage.getItem(l)
      ? localStorage.getItem(l)
      : null,
  E = (l, _) => {
    "undefined" != typeof Storage && localStorage.setItem(l, _);
  },
  q = (l) => {
    "undefined" != typeof Storage && localStorage.removeItem(l);
  },
  M = (l) => {
    let _ = "",
      C = l,
      N = 0;
    for (let X = 0; X < numberOfPartKey; X++) {
      let ee, et;
      switch (X) {
        case 0:
          (ee = partKeyStartPosition_0), (et = partKeyLength_0);
          break;
        case 1:
          (ee = partKeyStartPosition_1), (et = partKeyLength_1);
          break;
        case 2:
          (ee = partKeyStartPosition_2), (et = partKeyLength_2);
          break;
        case 3:
          (ee = partKeyStartPosition_3), (et = partKeyLength_3);
          break;
        case 4:
          (ee = partKeyStartPosition_4), (et = partKeyLength_4);
          break;
        case 5:
          (ee = partKeyStartPosition_5), (et = partKeyLength_5);
          break;
        case 6:
          (ee = partKeyStartPosition_6), (et = partKeyLength_6);
          break;
        case 7:
          (ee = partKeyStartPosition_7), (et = partKeyLength_7);
          break;
        case 8:
          (ee = partKeyStartPosition_8), (et = partKeyLength_8);
      }
      var en = ee + N,
        er = en + et;
      (_ += l.slice(en, er)),
        (C = C.replace(l.substring(en, er), "")),
        (N += et);
    }
    return G(C, _);
  };
let J;
!(function () {
  let C6 = {},
    C7;
  "undefined" != typeof document &&
    null !== document.currentScript &&
    (C7 = new URL(document.currentScript.src, location.href).toString());
  let C8,
    C9 = Array(128).fill(void 0);
  function CC(l) {
    return C9[l];
  }
  C9.push(void 0, null, !0, !1);
  let CX = 0,
    CN = null;
  function Cl() {
    return (CN =
      null !== CN && 0 !== CN.byteLength
        ? CN
        : new Uint8Array(C8.memory.buffer));
  }
  let CO =
      "undefined" != typeof TextEncoder
        ? new TextEncoder("utf-8")
        : {
            encode() {
              throw Error("TextEncoder not available");
            },
          },
    CB =
      "function" == typeof CO.encodeInto
        ? function (l, _) {
            return CO.encodeInto(l, _);
          }
        : function (l, _) {
            var C = CO.encode(l);
            return _.set(C), { read: l.length, written: C.length };
          };
  function CG(l, _, C) {
    if (void 0 === C) {
      var N = CO.encode(l);
      let X = _(N.length, 1) >>> 0;
      return (
        Cl()
          .subarray(X, X + N.length)
          .set(N),
        (CX = N.length),
        X
      );
    }
    let ee = l.length,
      et = _(ee, 1) >>> 0;
    var en = Cl();
    let er = 0;
    for (; er < ee; er++) {
      var ei = l.charCodeAt(er);
      if (ei > 127) break;
      en[et + er] = ei;
    }
    return (
      er !== ee &&
        (0 !== er && (l = l.slice(er)),
        (et = C(et, ee, (ee = er + 3 * l.length), 1) >>> 0),
        (N = Cl().subarray(et + er, et + ee)),
        (er += (_ = CB(l, N)).written),
        (et = C(et, ee, er, 1) >>> 0)),
      (CX = er),
      et
    );
  }
  function Cb(l) {
    return null == l;
  }
  let CT = null;
  function Ci() {
    return (CT =
      null === CT ||
      !0 === CT.buffer.detached ||
      (void 0 === CT.buffer.detached && CT.buffer !== C8.memory.buffer)
        ? new DataView(C8.memory.buffer)
        : CT);
  }
  let Cu = C9.length;
  function CU(l) {
    l < 132 || ((C9[l] = Cu), (Cu = l));
  }
  function Cv(l) {
    var _ = CC(l);
    return CU(l), _;
  }
  let CK =
    "undefined" != typeof TextDecoder
      ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
      : {
          decode() {
            throw Error("TextDecoder not available");
          },
        };
  function CE(l, _) {
    return (l >>>= 0), CK.decode(Cl().subarray(l, l + _));
  }
  function Cq(l) {
    Cu === C9.length && C9.push(C9.length + 1);
    var _ = Cu;
    return (Cu = C9[_]), (C9[_] = l), _;
  }
  "undefined" != typeof TextDecoder && CK.decode();
  let CM =
    "undefined" == typeof FinalizationRegistry
      ? { register() {}, unregister() {} }
      : new FinalizationRegistry((l) => {
          C8.__wbindgen_export_2.get(l.dtor)(l.a, l.b);
        });
  function CJ(l, _, C, N) {
    let X = { a: l, b: _, cnt: 1, dtor: C };
    return (
      ((l = (...l) => {
        X.cnt++;
        try {
          return N(X.a, X.b, ...l);
        } finally {
          0 == --X.cnt &&
            (C8.__wbindgen_export_2.get(X.dtor)(X.a, X.b),
            (X.a = 0),
            CM.unregister(X));
        }
      }).original = X),
      CM.register(l, X, X),
      l
    );
  }
  function CR(l, _) {
    return Cv(C8.__wbindgen_export_3(l, _));
  }
  function Cs(l, _, C) {
    C8.__wbindgen_export_4(l, _, Cq(C));
  }
  function Cw(l, _) {
    C8.__wbindgen_export_5(l, _);
  }
  function Cf(l, _) {
    try {
      return l.apply(this, _);
    } catch (C) {
      C8.__wbindgen_export_6(Cq(C));
    }
  }
  function CW(l, _) {
    return (_ = _(+l.length, 1) >>> 0), Cl().set(l, _), (CX = l.length), _;
  }
  async function CP(l, _) {
    var C, N;
    return "function" == typeof Response && l instanceof Response
      ? Object.assign(
          (N = await WebAssembly.instantiate((C = await l.arrayBuffer()), _)),
          { bytes: C }
        )
      : (N = await WebAssembly.instantiate(l, _)) instanceof
          WebAssembly.Instance
        ? { instance: N, module: l }
        : N;
  }
  function Cn() {
    let CQ = { wbg: {} };
    return (
      (CQ.wbg.__wbindgen_is_undefined = function (l) {
        return void 0 === CC(l);
      }),
      (CQ.wbg.__wbindgen_is_null = function (l) {
        return null === CC(l);
      }),
      (CQ.wbg.__wbindgen_string_get = function (l, _) {
        var _ = CC(_),
          _ = "string" == typeof _ ? _ : void 0,
          _ = Cb(_) ? 0 : CG(_, C8.__wbindgen_export_0, C8.__wbindgen_export_1),
          C = CX;
        Ci().setInt32(l + 4, C, !0), Ci().setInt32(l + 0, _, !0);
      }),
      (CQ.wbg.__wbindgen_object_drop_ref = function (l) {
        Cv(l);
      }),
      (CQ.wbg.__wbindgen_cb_drop = function (l) {
        return (l = Cv(l).original), 1 == l.cnt-- && ((l.a = 0), !0);
      }),
      (CQ.wbg.__wbindgen_string_new = function (l, _) {
        return Cq(CE(l, _));
      }),
      (CQ.wbg.__wbindgen_boolean_get = function (l) {
        return "boolean" != typeof (l = CC(l)) ? 2 : l ? 1 : 0;
      }),
      (CQ.wbg.__wbindgen_number_get = function (l, _) {
        (_ = "number" == typeof (_ = CC(_)) ? _ : void 0),
          Ci().setFloat64(l + 8, Cb(_) ? 0 : _, !0),
          Ci().setInt32(l + 0, !Cb(_), !0);
      }),
      (CQ.wbg.__wbg_instanceof_CanvasRenderingContext2d_4ec30ddd3f29f8f9 =
        function (l) {
          let _;
          try {
            _ = CC(l) instanceof CanvasRenderingContext2D;
          } catch (C) {
            _ = !1;
          }
          return _;
        }),
      (CQ.wbg.__wbg_setfillStyle_59f426135f52910f = function (l, _) {
        CC(l).fillStyle = CC(_);
      }),
      (CQ.wbg.__wbg_setshadowBlur_229c56539d02f401 = function (l, _) {
        CC(l).shadowBlur = _;
      }),
      (CQ.wbg.__wbg_setshadowColor_340d5290cdc4ae9d = function (l, _, C) {
        CC(l).shadowColor = CE(_, C);
      }),
      (CQ.wbg.__wbg_setfont_16d6e31e06a420a5 = function (l, _, C) {
        CC(l).font = CE(_, C);
      }),
      (CQ.wbg.__wbg_settextBaseline_c3266d3bd4a6695c = function (l, _, C) {
        CC(l).textBaseline = CE(_, C);
      }),
      (CQ.wbg.__wbg_drawImage_cb13768a1bdc04bd = function () {
        return Cf(function (l, _, C, N) {
          CC(l).drawImage(CC(_), C, N);
        }, arguments);
      }),
      (CQ.wbg.__wbg_getImageData_66269d289f37d3c7 = function () {
        return Cf(function (l, _, C, N, X) {
          return Cq(CC(l).getImageData(_, C, N, X));
        }, arguments);
      }),
      (CQ.wbg.__wbg_rect_2fa1df87ef638738 = function (l, _, C, N, X) {
        CC(l).rect(_, C, N, X);
      }),
      (CQ.wbg.__wbg_fillRect_4dd28e628381d240 = function (l, _, C, N, X) {
        CC(l).fillRect(_, C, N, X);
      }),
      (CQ.wbg.__wbg_fillText_07e5da9e41652f20 = function () {
        return Cf(function (l, _, C, N, X) {
          CC(l).fillText(CE(_, C), N, X);
        }, arguments);
      }),
      (CQ.wbg.__wbg_setProperty_5144ddce66bbde41 = function () {
        return Cf(function (l, _, C, N, X) {
          CC(l).setProperty(CE(_, C), CE(N, X));
        }, arguments);
      }),
      (CQ.wbg.__wbg_createElement_03cf347ddad1c8c0 = function () {
        return Cf(function (l, _, C) {
          return Cq(CC(l).createElement(CE(_, C)));
        }, arguments);
      }),
      (CQ.wbg.__wbg_querySelector_118a0639aa1f51cd = function () {
        return Cf(function (l, _, C) {
          return ((l = CC(l).querySelector(CE(_, C))), Cb(l)) ? 0 : Cq(l);
        }, arguments);
      }),
      (CQ.wbg.__wbg_querySelectorAll_50c79cd4f7573825 = function () {
        return Cf(function (l, _, C) {
          return Cq(CC(l).querySelectorAll(CE(_, C)));
        }, arguments);
      }),
      (CQ.wbg.__wbg_getAttribute_706ae88bd37410fa = function (l, _, C, N) {
        (_ = CC(_).getAttribute(CE(C, N))),
          (C = Cb(_)
            ? 0
            : CG(_, C8.__wbindgen_export_0, C8.__wbindgen_export_1)),
          (N = CX),
          Ci().setInt32(l + 4, N, !0),
          Ci().setInt32(l + 0, C, !0);
      }),
      (CQ.wbg.__wbg_target_6795373f170fd786 = function (l) {
        return ((l = CC(l).target), Cb(l)) ? 0 : Cq(l);
      }),
      (CQ.wbg.__wbg_addEventListener_f984e99465a6a7f4 = function () {
        return Cf(function (l, _, C, N) {
          CC(l).addEventListener(CE(_, C), CC(N));
        }, arguments);
      }),
      (CQ.wbg.__wbg_instanceof_HtmlCanvasElement_1e81f71f630e46bc = function (
        l
      ) {
        let _;
        try {
          _ = CC(l) instanceof HTMLCanvasElement;
        } catch (C) {
          _ = !1;
        }
        return _;
      }),
      (CQ.wbg.__wbg_setwidth_233645b297bb3318 = function (l, _) {
        CC(l).width = _ >>> 0;
      }),
      (CQ.wbg.__wbg_setheight_fcb491cf54e3527c = function (l, _) {
        CC(l).height = _ >>> 0;
      }),
      (CQ.wbg.__wbg_getContext_dfc91ab0837db1d1 = function () {
        return Cf(function (l, _, C) {
          return ((l = CC(l).getContext(CE(_, C))), Cb(l)) ? 0 : Cq(l);
        }, arguments);
      }),
      (CQ.wbg.__wbg_toDataURL_97b108dd1a4b7454 = function () {
        return Cf(function (l, _) {
          var _ = CG(
              CC(_).toDataURL(),
              C8.__wbindgen_export_0,
              C8.__wbindgen_export_1
            ),
            C = CX;
          Ci().setInt32(l + 4, C, !0), Ci().setInt32(l + 0, _, !0);
        }, arguments);
      }),
      (CQ.wbg.__wbg_style_ca229e3326b3c3fb = function (l) {
        return Cq(CC(l).style);
      }),
      (CQ.wbg.__wbg_instanceof_HtmlImageElement_9c82d4e3651a8533 = function (
        l
      ) {
        let _;
        try {
          _ = CC(l) instanceof HTMLImageElement;
        } catch (C) {
          _ = !1;
        }
        return _;
      }),
      (CQ.wbg.__wbg_src_87a0e38af6229364 = function (l, _) {
        var _ = CG(CC(_).src, C8.__wbindgen_export_0, C8.__wbindgen_export_1),
          C = CX;
        Ci().setInt32(l + 4, C, !0), Ci().setInt32(l + 0, _, !0);
      }),
      (CQ.wbg.__wbg_width_e1a38bdd483e1283 = function (l) {
        return CC(l).width;
      }),
      (CQ.wbg.__wbg_height_e4cc2294187313c9 = function (l) {
        return CC(l).height;
      }),
      (CQ.wbg.__wbg_complete_1162c2697406af11 = function (l) {
        return CC(l).complete;
      }),
      (CQ.wbg.__wbg_data_d34dc554f90b8652 = function (l, _) {
        var _ = CW(CC(_).data, C8.__wbindgen_export_0),
          C = CX;
        Ci().setInt32(l + 4, C, !0), Ci().setInt32(l + 0, _, !0);
      }),
      (CQ.wbg.__wbg_origin_305402044aa148ce = function () {
        return Cf(function (l, _) {
          var _ = CG(
              CC(_).origin,
              C8.__wbindgen_export_0,
              C8.__wbindgen_export_1
            ),
            C = CX;
          Ci().setInt32(l + 4, C, !0), Ci().setInt32(l + 0, _, !0);
        }, arguments);
      }),
      (CQ.wbg.__wbg_length_8a9352f7b7360c37 = function (l) {
        return CC(l).length;
      }),
      (CQ.wbg.__wbg_get_c30ae0782d86747f = function (l, _) {
        return ((l = CC(l)[_ >>> 0]), Cb(l)) ? 0 : Cq(l);
      }),
      (CQ.wbg.__wbg_timeOrigin_f462952854d802ec = function (l) {
        return CC(l).timeOrigin;
      }),
      (CQ.wbg.__wbg_instanceof_Window_cee7a886d55e7df5 = function (l) {
        let _;
        try {
          _ = CC(l) instanceof Window;
        } catch (C) {
          _ = !1;
        }
        return _;
      }),
      (CQ.wbg.__wbg_document_eb7fd66bde3ee213 = function (l) {
        return ((l = CC(l).document), Cb(l)) ? 0 : Cq(l);
      }),
      (CQ.wbg.__wbg_location_b17760ac7977a47a = function (l) {
        return Cq(CC(l).location);
      }),
      (CQ.wbg.__wbg_localStorage_3d538af21ea07fcc = function () {
        return Cf(function (l) {
          return ((l = CC(l).localStorage), Cb(l)) ? 0 : Cq(l);
        }, arguments);
      }),
      (CQ.wbg.__wbg_performance_4ca1873776fdb3d2 = function (l) {
        return ((l = CC(l).performance), Cb(l)) ? 0 : Cq(l);
      }),
      (CQ.wbg.__wbg_origin_e1f8acdeb3a39a2b = function (l, _) {
        var _ = CG(
            CC(_).origin,
            C8.__wbindgen_export_0,
            C8.__wbindgen_export_1
          ),
          C = CX;
        Ci().setInt32(l + 4, C, !0), Ci().setInt32(l + 0, _, !0);
      }),
      (CQ.wbg.__wbg_get_8986951b1ee310e0 = function (l, _, C) {
        return ((l = CC(l)[CE(_, C)]), Cb(l)) ? 0 : Cq(l);
      }),
      (CQ.wbg.__wbg_setTimeout_6ed7182ebad5d297 = function () {
        return Cf(function (l, _, C) {
          return CC(l).setTimeout(CC(_), C);
        }, arguments);
      }),
      (CQ.wbg.__wbindgen_is_object = function (l) {
        return "object" == typeof (l = CC(l)) && null !== l;
      }),
      (CQ.wbg.__wbg_crypto_1d1f22824a6a080c = function (l) {
        return Cq(CC(l).crypto);
      }),
      (CQ.wbg.__wbg_process_4a72847cc503995b = function (l) {
        return Cq(CC(l).process);
      }),
      (CQ.wbg.__wbg_versions_f686565e586dd935 = function (l) {
        return Cq(CC(l).versions);
      }),
      (CQ.wbg.__wbg_node_104a2ff8d6ea03a2 = function (l) {
        return Cq(CC(l).node);
      }),
      (CQ.wbg.__wbindgen_is_string = function (l) {
        return "string" == typeof CC(l);
      }),
      (CQ.wbg.__wbg_require_cca90b1a94a0255b = function () {
        return Cf(function () {
          return Cq(module.require);
        }, arguments);
      }),
      (CQ.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (l) {
        return Cq(CC(l).msCrypto);
      }),
      (CQ.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
        return Cf(function (l, _) {
          CC(l).randomFillSync(Cv(_));
        }, arguments);
      }),
      (CQ.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
        return Cf(function (l, _) {
          CC(l).getRandomValues(CC(_));
        }, arguments);
      }),
      (CQ.wbg.__wbindgen_is_function = function (l) {
        return "function" == typeof CC(l);
      }),
      (CQ.wbg.__wbg_self_05040bd9523805b9 = function () {
        return Cf(function () {
          return Cq(self.self);
        }, arguments);
      }),
      (CQ.wbg.__wbg_window_adc720039f2cb14f = function () {
        return Cf(function () {
          return Cq(window.window);
        }, arguments);
      }),
      (CQ.wbg.__wbg_globalThis_622105db80c1457d = function () {
        return Cf(function () {
          return Cq(globalThis.globalThis);
        }, arguments);
      }),
      (CQ.wbg.__wbg_global_f56b013ed9bcf359 = function () {
        return Cf(function () {
          return Cq(global.global);
        }, arguments);
      }),
      (CQ.wbg.__wbg_newnoargs_cfecb3965268594c = function (l, _) {
        return Cq(Function(CE(l, _)));
      }),
      (CQ.wbg.__wbindgen_object_clone_ref = function (l) {
        return Cq(CC(l));
      }),
      (CQ.wbg.__wbg_eval_c824e170787ad184 = function () {
        return Cf(function (Cj, CY) {
          let Cz = eval(CE(Cj, CY));
          return Cq(Cz);
        }, arguments);
      }),
      (CQ.wbg.__wbg_call_3f093dd26d5569f8 = function () {
        return Cf(function (l, _) {
          return Cq(CC(l).call(CC(_)));
        }, arguments);
      }),
      (CQ.wbg.__wbg_call_67f2111acd2dfdb6 = function () {
        return Cf(function (l, _, C) {
          return Cq(CC(l).call(CC(_), CC(C)));
        }, arguments);
      }),
      (CQ.wbg.__wbg_toString_6eb7c1f755c00453 = function (l) {
        return Cq(CC(l).toString());
      }),
      (CQ.wbg.__wbg_set_961700853a212a39 = function () {
        return Cf(function (l, _, C) {
          return Reflect.set(CC(l), CC(_), CC(C));
        }, arguments);
      }),
      (CQ.wbg.__wbg_buffer_b914fb8b50ebbc3e = function (l) {
        return Cq(CC(l).buffer);
      }),
      (CQ.wbg.__wbg_toString_139023ab33acec36 = function (l) {
        return Cq(CC(l).toString());
      }),
      (CQ.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e = function (
        l,
        _,
        C
      ) {
        return Cq(new Uint8Array(CC(l), _ >>> 0, C >>> 0));
      }),
      (CQ.wbg.__wbg_new_b1f2d6842d615181 = function (l) {
        return Cq(new Uint8Array(CC(l)));
      }),
      (CQ.wbg.__wbg_newwithlength_0d03cef43b68a530 = function (l) {
        return Cq(new Uint8Array(l >>> 0));
      }),
      (CQ.wbg.__wbg_buffer_67e624f5a0ab2319 = function (l) {
        return Cq(CC(l).buffer);
      }),
      (CQ.wbg.__wbg_subarray_adc418253d76e2f1 = function (l, _, C) {
        return Cq(CC(l).subarray(_ >>> 0, C >>> 0));
      }),
      (CQ.wbg.__wbg_length_21c4b0ae73cba59d = function (l) {
        return CC(l).length;
      }),
      (CQ.wbg.__wbg_set_7d988c98e6ced92d = function (l, _, C) {
        CC(l).set(CC(_), C >>> 0);
      }),
      (CQ.wbg.__wbindgen_throw = function (l, _) {
        throw Error(CE(l, _));
      }),
      (CQ.wbg.__wbindgen_memory = function () {
        return Cq(C8.memory);
      }),
      (CQ.wbg.__wbindgen_closure_wrapper117 = function (l, _, C) {
        return Cq(CJ(l, _, 2, CR));
      }),
      (CQ.wbg.__wbindgen_closure_wrapper119 = function (l, _, C) {
        return Cq(CJ(l, _, 2, Cs));
      }),
      (CQ.wbg.__wbindgen_closure_wrapper121 = function (l, _, C) {
        return Cq(CJ(l, _, 2, Cw));
      }),
      (CQ.wbg.__wbindgen_closure_wrapper123 = function (l, _, C) {
        return Cq(CJ(l, _, 9, Cs));
      }),
      CQ
    );
  }
  function Cy(l, _) {}
  function CD(l, _) {
    return (
      (C8 = l.exports),
      (Ct.__wbindgen_wasm_module = _),
      (CT = null),
      (CN = null),
      C8
    );
  }
  function Cp(l) {
    if (void 0 !== C8) return C8;
    void 0 !== l && Object.getPrototypeOf(l) === Object.prototype
      ? (l = l.module)
      : console.warn(
          "using deprecated parameters for `initSync()`; pass a single object instead"
        );
    var _ = Cn();
    Cy(_), l instanceof WebAssembly.Module || (l = new WebAssembly.Module(l));
    var _ = new WebAssembly.Instance(l, _);
    return CD(_, l);
  }
  async function Ct(l) {
    var _, C;
    return void 0 !== C8
      ? C8
      : ((_ = Cn()),
        ({
          instance: l,
          module: _,
          bytes: C,
        } = ((l = fetch(l)), Cy(_), await CP(await l, _))),
        CD(l, _),
        C);
  }
  (C6.groot = function () {
    C8.groot();
  }),
    (J = Object.assign(Ct, { initSync: Cp }, C6));
})();
const R = (l) => {
    $("#log-stack").append("<div> " + l + " <div>");
  },
  s = async (l) =>
    ((l.mu = l.location.pathname),
    (l.ra = l.requestAnimationFrame || function () {}),
    (l.t = (l.performance && l.performance.timeOrigin) || 0),
    null == l.mu || null == l.ra)
      ? null
      : l.mu.length > 0
        ? l
        : void 0,
  w = async (l) =>
    /\{\s+\[native code\]/.test(Function.prototype.toString.call(l)),
  f = () => {
    try {
      navigator.appVersion;
      var l,
        _,
        C,
        N = navigator.userAgent,
        X = navigator.appName,
        ee = "" + parseFloat(navigator.appVersion),
        et = parseInt(navigator.appVersion, 10);
      return (
        -1 != (_ = N.indexOf("Opera"))
          ? ((X = "Opera"),
            (ee = N.substring(_ + 6)),
            -1 != (_ = N.indexOf("Version")) && (ee = N.substring(_ + 8)))
          : -1 != (_ = N.indexOf("MSIE"))
            ? ((X = "Microsoft Internet Explorer"), (ee = N.substring(_ + 5)))
            : -1 != (_ = N.indexOf("Chrome"))
              ? ((X = "Chrome"), (ee = N.substring(_ + 7)))
              : -1 != (_ = N.indexOf("Safari"))
                ? ((X = "Safari"),
                  (ee = N.substring(_ + 7)),
                  -1 != (_ = N.indexOf("Version")) && (ee = N.substring(_ + 8)))
                : -1 != (_ = N.indexOf("Firefox"))
                  ? ((X = "Firefox"), (ee = N.substring(_ + 8)))
                  : (l = N.lastIndexOf(" ") + 1) < (_ = N.lastIndexOf("/")) &&
                    ((X = N.substring(l, _)),
                    (ee = N.substring(_ + 1)),
                    X.toLowerCase() == X.toUpperCase()) &&
                    (X = navigator.appName),
        -1 !=
          (C = (ee =
            -1 != (C = ee.indexOf(";")) ? ee.substring(0, C) : ee).indexOf(
            " "
          )) && (ee = ee.substring(0, C)),
        (et = parseInt("" + ee, 10)),
        isNaN(et) &&
          ((ee = "" + parseFloat(navigator.appVersion)),
          (et = parseInt(navigator.appVersion, 10))),
        { browserName: X, fullVersion: +ee.split(".")[0], majorVersion: et }
      );
    } catch (en) {
      return { browserName: "", fullVersion: "", majorVersion: "" };
    }
  },
  W = async () => {
    var l = f(),
      _ =
        null !=
        (document &&
          document.getElementById &&
          document.getElementById("9cbc1d63ef40c79")),
      C = document && document.createElement("canvas"),
      N = C && null != C.getContext,
      X = null != CanvasGradient,
      ee = null != window.WebSocket,
      et = document && null != document.$cdc_asdjflasutopfhvcZLmcfl_,
      en = null != window.GPU,
      er = null != window.webkitMediaStream,
      ei = null != window.RTCPeerConnection,
      eo = null != window.RTCDataChannel,
      C = C && C.getContext && null != C.getContext("webgl"),
      ea = null != window.WebGLActiveInfo,
      es = null != window.WebAssembly,
      el = window.WebAssembly && null != WebAssembly.instantiate,
      eu = window.WebAssembly && null != WebAssembly.Module;
    (_ = [
      _,
      N,
      ee,
      et,
      en,
      er,
      ei,
      eo,
      C,
      ea,
      es,
      el,
      null != window.mdn,
      null != window.chrome,
      null != window.documentPictureInPicture,
      eu,
      window.Audio,
      X,
      null != window.document,
      null != window.navigator,
      window.navigator && null != window.navigator.userAgentData,
      window.navigator &&
        window.navigator.userAgentData &&
        1 == window.navigator.userAgentData.mobile,
      window.navigator &&
        window.navigator &&
        "Mozilla" == window.navigator.appCodeName,
      l && l.fullVersion && l.fullVersion < 100,
    ]
      .map((l) => (l ? "1" : "0"))
      .join("")),
      (window.browser_version = (function (l) {
        for (var _ = l.match(/.{1,8}/g), C = [], N = 0; N < _.length; N++)
          C.push(+parseInt(_[N], 2).toString(10));
        return (C[0] << 24) | (C[1] << 16) | (C[2] << 8) | C[3];
      })(_));
  },
  P = async (l) => {
    var _;
    if (null != l && null != l.mu)
      return null == (_ = mu.split("/")) || (_.length < 2 && !w(l.eval))
        ? ""
        : ((l.xrax = _[_.length - 1]), void 0);
  },
  n = async () => {
    P(await s(window));
  };
function y(l) {
  return [
    (4278190080 & l) >> 24,
    (16711680 & l) >> 16,
    (65280 & l) >> 8,
    255 & l,
  ];
}
const D = (l) => {
    var _,
      C = null;
    return null == (C = l.navigate) ||
      ((_ = l.localStorage.getItem("ktime")), l.t != _)
      ? null
      : ((l = C()), new Uint8Array(l));
  },
  p = async (l, _) => {
    try {
      for (let C = 0; C < l.length; C++) l[C] = l[C] ^ _[C % _.length];
    } catch (N) {
      return null;
    }
  },
  t = async (l) => {
    try {
      var _ = await J("/images/loading.png?v=0.0.9");
      (window.bytes = _), J.groot(), l.jwt_plugin(_);
    } catch (C) {
      console.log(C), (l.error = !0);
    }
  };
var d,
  L,
  m,
  Q = jwplayer("megacloud-player"),
  j = Boolean(parseInt(settings.autoPlay)),
  Y = Boolean(parseInt(settings.vast)),
  z = $("#megacloud-player").data("id"),
  g = $("#megacloud-player").data("realid"),
  H = $("#megacloud-player").data("mediaid"),
  x = $("#megacloud-player").data("fileversion"),
  a = !0,
  e = parseInt(settings.time),
  S = { channel: "megacloud" },
  o = [
    {
      link: "https://1flix.to/",
      image: "https://iili.io/JvfI5dv.jpg",
      name: "1flix",
    },
  ];
const c = () => {
    var l;
    return o[Math.floor(Math.random() * o.length)];
  },
  Z = () => {
    var l = c();
    l &&
      ($("#overlay-center").html(
        '<a id="closeBanner" href="javascript:;" style="position: absolute; top: -15px; right: -15px; z-index: 99; background:#fff; width:30px;height:30px;border-radius:50%; text-align:center;border:solid 1px;"><img style="width:16px;margin-top:7px;" src="/images/close.png"/></a><a rel="nofollow" target="_blank" href="' +
          l.link +
          '"><img alt="' +
          l.name +
          '" src="' +
          l.image +
          '" style="max-width:100%; width:300px;" /></a>'
      ),
      $("#overlay-center").show());
  },
  F = new URLSearchParams(window.location.search);
F.get("_debug") &&
  $(".mg3-player").prepend(
    '<div style="position: absolute; z-index: 90; left: 0; top: 0;"><p>Peers: <span id="id"></span></p><p>HTTP: <span id="http-bytes"></span></p><p>PEER: <span id="peer-bytes"></span></p><p>UPLOADED: <span id="peer-uploaded"></span></p></div>'
  );
const V = new MobileDetect(window.navigator.userAgent);
window.safeSetupP2pConfig = function () {
  var l = { videoId: H };
  F.get("_debug") &&
    (l.listener = {
      onHttpDownloaded: function (l) {
        document.getElementById("http-bytes").innerHTML = l;
      },
      onP2pDownloaded: function (l) {
        document.getElementById("peer-bytes").innerHTML = l;
      },
      onUploaded: function (l) {
        document.getElementById("peer-uploaded").innerHTML = l;
      },
      onNewPeer: function (l) {
        setTimeout(() => {
          document.getElementById("id").innerHTML = Object.values(
            dwr.p2p.manager.peers
          )
            .map((l) => l.peer.remoteAddress)
            .join(", ");
        }, 200);
      },
      onClosePeer: function (l) {
        setTimeout(() => {
          document.getElementById("id").innerHTML = Object.values(
            dwr.p2p.manager.peers
          )
            .map((l) => l.peer.remoteAddress)
            .join(", ");
        }, 200);
      },
    });
  var l = window.SetupJwPlayer && window.SetupJwPlayer(Q, l);
  return null == l
    ? (window.P2PLog && window.P2PLog("SETUP_FAILED"), {})
    : { hlsjsConfig: { loader: l } };
};
const h = async ({ sources: l, tracks: _ }) => {
  (l = {
    playbackRateControls: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
    mute: !1,
    cast: {},
    autostart: j,
    sources: l,
    tracks: _,
    key: "7MeMRClEneUmFoHRO3u3ypzAZXlVgNtBE2pKDw==",
  }),
    Y &&
      (l.advertising = {
        client: "vast",
        schedule: [
          {
            tag: "https://services.vlitag.com/vpaid/?q=1ba9c35e4570ec49cfc2da2c2116ac79&vast_slot=vi_2284298620&defaultVolume=&page_url=https://rapid-cloud.co",
          },
        ],
      }),
    Q.setup(l),
    Q.on("ready", function () {
      $(".jw-icon-rewind").remove(),
        Q.addButton(
          "/images/skip-10-next.svg?v=0.1",
          "+10s",
          u,
          "forward-10s-button"
        ),
        Q.addButton(
          "/images/skip-10-prev.svg?v=0.1",
          "-10s",
          i,
          "rewind-10s-button"
        ),
        $("#megacloud-player").prepend('<div id="overlay-control"></div>'),
        d &&
          $("#overlay-control").prepend(
            '<div class="botright"><a style="display: none;" href="javascript:;" id="skip-intro" class="zbtn zbtn-outline">Skip Intro</a></div>'
          ),
        L &&
          $("#overlay-control").prepend(
            '<div class="botright"><a style="display: none;" href="javascript:;" id="skip-outro" class="zbtn zbtn-outline">Skip Outro</a></div>'
          );
    }),
    Q.on("pause", function () {}),
    Q.on("captionsChanged", function (l) {}),
    Q.on("firstFrame", function () {
      var l = 0,
        _ = 0,
        C = Q.getDuration();
      d &&
        0 === $(".jw-intro").length &&
        ((_ = (d.start / C) * 100),
        (l = ((d.end - d.start) / C) * 100),
        $(".jw-slider-container").append(
          '<div class="jw-reset jw-intro" style="margin-left: ' +
            _ +
            "%; width: " +
            l +
            '%"></div>'
        )),
        L &&
          0 === $(".jw-outro").length &&
          ((L.end = L.end > C ? C : L.end),
          (l = (L.start / C) * 100 - l - _),
          (_ = ((L.end - L.start) / C) * 100),
          $(".jw-slider-container").append(
            '<div class="jw-reset jw-outro" style="margin-left: ' +
              l +
              "%; width: " +
              _ +
              '%"></div>'
          )),
        g && ((C = K("vc_" + g + "_time")), e > 0 ? Q.seek(e) : C && Q.seek(C));
    }),
    Q.on("play", function () {}),
    Q.on("buffer", function (l) {}),
    Q.on("time", function (l) {
      C0(l.position),
        g && E("vc_" + g + "_time", Q.getPosition()),
        (S.event = "time"),
        (S.time = Q.getPosition()),
        (S.duration = Q.getDuration()),
        (S.percent = (Q.getPosition() / Q.getDuration()) * 100),
        window.parent.postMessage(JSON.stringify(S), "*");
    }),
    Q.on("complete", function () {
      (e = 0),
        q("vc_" + g + "_time"),
        (S.event = "complete"),
        window.parent.postMessage(JSON.stringify(S), "*");
    }),
    Q.on("error", function () {
      A();
    }),
    Q.on("setupError", function () {});
};
function A() {
  (S.event = "error"), window.parent.postMessage(JSON.stringify(S), "*");
}
var I = window.addEventListener ? "addEventListener" : "attachEvent",
  r = window[I],
  k = "attachEvent" === I ? "onmessage" : "message";
function C0(l) {
  d && l >= d.start && l < d.end
    ? 1 === parseInt(settings.autoSkipIntro)
      ? C1()
      : $("#skip-intro").show()
    : $("#skip-intro").hide(),
    L && l >= L.start && l < L.end
      ? 1 === parseInt(settings.autoSkipIntro)
        ? C2()
        : $("#skip-outro").show()
      : $("#skip-outro").hide();
}
function C1() {
  Q.seek(d.end), $("#skip-intro").hide();
}
function C2() {
  Q.seek(L.end), $("#skip-outro").hide();
}
r(k, function (l) {
  var _ = l.data || l.message;
  try {
    "seek" === (_ = JSON.parse(_)).event && Q.seek(_.time);
  } catch (C) {}
}),
  $(document).on("click", "#skip-intro", function () {
    C1();
  }),
  $(document).on("click", "#skip-outro", function () {
    C2();
  });
const C3 = () => {
  $("#overlay-center").hide(), Q.play();
};
$(document).on("click", "#closeBanner", () => {
  C3();
});
const C4 = (l, _) => {
    var C,
      N = window.browser_version;
    let X =
      (window.localStorage && window.localStorage.getItem("kversion")) || N;
    var ee = (window.localStorage && window.localStorage.getItem("kid")) || "";
    if (null == window.pid) console.log("=> pid null");
    else {
      var et = D(window),
        ee =
          "/embed-2/ajax/e-1/getSources?id=" +
          window.pid +
          "&v=" +
          X +
          "&h=" +
          ee +
          "&b=" +
          N;
      let en = { sources: [], tracks: [] };
      $.get(ee, function (l) {
        var N;
        b(l.sources)
          ? (en.sources = l.sources)
          : ((C = y(X)),
            (N = 0 != l.t ? (p(et, C), et) : (p((N = l.k), C), N)),
            (N = btoa(String.fromCharCode.apply(null, new Uint8Array(N)))),
            (en.sources = G(l.sources, N))),
          (en.tracks = l.tracks),
          console.log(en),
          _(en);
      });
    }
  },
  C5 = () => {
    n().then(() => W()), t(window);
    let l = setInterval(() => {
      (null != window.navigate || window.error) &&
        (clearInterval(l), C4(window.xrax, h));
    }, 100);
  };
C5();
