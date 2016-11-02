"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.Pattern = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      var _require = require('d3-selection'),
          select = _require.select;

      var _require2 = require('d3-voronoi'),
          voronoi = _require2.voronoi;

      var libgrid = {
        gen: function gen(cols, rows, size) {
          var out = [];
          for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
              out.push({
                x: i * size,
                y: j * size
              });
            }
          }
          return out;
        },
        parametric: function parametric(count, aspectRatio) {
          var rows = Math.sqrt(count / aspectRatio);
          return {
            rows: rows,
            cols: rows * aspectRatio
          };
        }
      };

      function randomPicker(list) {
        var count = list.length;
        return function () {
          return list[~~(Math.random() * count)];
        };
      }

      function Drawing(container) {
        this.container = container;
        this.handlers = {};
      }
      Drawing.prototype.destroy = function () {
        this.svg.remove();
      };
      Drawing.prototype.init = function (opts) {
        var width = parseInt(opts.width || window.innerWidth, 10);
        var height = parseInt(opts.height || window.innerHeight, 10);
        var size = Math.ceil(opts.size || 50);
        var count = width * height / Math.pow(size, 2);
        var aspectRatio = width / height;

        this.svg = select(this.container).append('svg').attr('class', 'frame');

        var xSpread = Math.max(0.001, opts.spread.x);
        var ySpread = Math.max(0.001, opts.spread.y);
        var padding = 4;

        var nextColor = randomPicker(opts.colors);

        var grid = libgrid.parametric(count, aspectRatio);
        var cols = Math.ceil(grid.cols) + padding;
        var rows = Math.ceil(grid.rows) + padding;

        var sites = libgrid.gen(cols, rows, size).map(function (point) {
          return [point.x + (size * Math.random() - size / 2) * xSpread, point.y + (size * Math.random() - size / 2) * ySpread];
        });

        this.svg.attr('width', width);
        this.svg.attr('height', height);
        var root = this.svg.append("g");
        root.attr("transform", "translate(" + -size * padding / 2 + ", " + -size * padding / 2 + ")");

        var layout = voronoi();

        root.append("g").attr("class", "triangles").selectAll("path").data(layout.triangles(sites)).enter().append("path").call(drawTriangle);

        function drawTriangle(triangle) {
          triangle.classed("primary", function (d) {
            return d[0] === sites[0] || d[1] === sites[0] || d[2] === sites[0];
          }).attr("d", function (d) {
            return "M" + d.join("L") + "Z";
          }).style("fill", function () {
            return nextColor();
          }).style("stroke", function () {
            return select(this).style("fill");
          });
        }
      };

      module.exports = Drawing;
    }, { "d3-selection": 2, "d3-voronoi": 3 }], 2: [function (require, module, exports) {
      // https://d3js.org/d3-selection/ Version 1.0.2. Copyright 2016 Mike Bostock.
      (function (global, factory) {
        (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.d3 = global.d3 || {});
      })(this, function (exports) {
        'use strict';

        var xhtml = "http://www.w3.org/1999/xhtml";

        var namespaces = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: xhtml,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        };

        function namespace(name) {
          var prefix = name += "",
              i = prefix.indexOf(":");
          if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
          return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
        }

        function creatorInherit(name) {
          return function () {
            var document = this.ownerDocument,
                uri = this.namespaceURI;
            return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
          };
        }

        function creatorFixed(fullname) {
          return function () {
            return this.ownerDocument.createElementNS(fullname.space, fullname.local);
          };
        }

        function creator(name) {
          var fullname = namespace(name);
          return (fullname.local ? creatorFixed : creatorInherit)(fullname);
        }

        var nextId = 0;

        function local() {
          return new Local();
        }

        function Local() {
          this._ = "@" + (++nextId).toString(36);
        }

        Local.prototype = local.prototype = {
          constructor: Local,
          get: function get(node) {
            var id = this._;
            while (!(id in node)) {
              if (!(node = node.parentNode)) return;
            }return node[id];
          },
          set: function set(node, value) {
            return node[this._] = value;
          },
          remove: function remove(node) {
            return this._ in node && delete node[this._];
          },
          toString: function toString() {
            return this._;
          }
        };

        var matcher = function matcher(selector) {
          return function () {
            return this.matches(selector);
          };
        };

        if (typeof document !== "undefined") {
          var element = document.documentElement;
          if (!element.matches) {
            var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
            matcher = function matcher(selector) {
              return function () {
                return vendorMatches.call(this, selector);
              };
            };
          }
        }

        var matcher$1 = matcher;

        var filterEvents = {};

        exports.event = null;

        if (typeof document !== "undefined") {
          var element$1 = document.documentElement;
          if (!("onmouseenter" in element$1)) {
            filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
          }
        }

        function filterContextListener(listener, index, group) {
          listener = contextListener(listener, index, group);
          return function (event) {
            var related = event.relatedTarget;
            if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
              listener.call(this, event);
            }
          };
        }

        function contextListener(listener, index, group) {
          return function (event1) {
            var event0 = exports.event; // Events can be reentrant (e.g., focus).
            exports.event = event1;
            try {
              listener.call(this, this.__data__, index, group);
            } finally {
              exports.event = event0;
            }
          };
        }

        function parseTypenames(typenames) {
          return typenames.trim().split(/^|\s+/).map(function (t) {
            var name = "",
                i = t.indexOf(".");
            if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
            return { type: t, name: name };
          });
        }

        function onRemove(typename) {
          return function () {
            var on = this.__on;
            if (!on) return;
            for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
              if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
              } else {
                on[++i] = o;
              }
            }
            if (++i) on.length = i;else delete this.__on;
          };
        }

        function onAdd(typename, value, capture) {
          var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
          return function (d, i, group) {
            var on = this.__on,
                o,
                listener = wrap(value, i, group);
            if (on) for (var j = 0, m = on.length; j < m; ++j) {
              if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
                this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                o.value = value;
                return;
              }
            }
            this.addEventListener(typename.type, listener, capture);
            o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
            if (!on) this.__on = [o];else on.push(o);
          };
        }

        function selection_on(typename, value, capture) {
          var typenames = parseTypenames(typename + ""),
              i,
              n = typenames.length,
              t;

          if (arguments.length < 2) {
            var on = this.node().__on;
            if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
              for (i = 0, o = on[j]; i < n; ++i) {
                if ((t = typenames[i]).type === o.type && t.name === o.name) {
                  return o.value;
                }
              }
            }
            return;
          }

          on = value ? onAdd : onRemove;
          if (capture == null) capture = false;
          for (i = 0; i < n; ++i) {
            this.each(on(typenames[i], value, capture));
          }return this;
        }

        function customEvent(event1, listener, that, args) {
          var event0 = exports.event;
          event1.sourceEvent = exports.event;
          exports.event = event1;
          try {
            return listener.apply(that, args);
          } finally {
            exports.event = event0;
          }
        }

        function sourceEvent() {
          var current = exports.event,
              source;
          while (source = current.sourceEvent) {
            current = source;
          }return current;
        }

        function point(node, event) {
          var svg = node.ownerSVGElement || node;

          if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [point.x, point.y];
          }

          var rect = node.getBoundingClientRect();
          return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
        }

        function mouse(node) {
          var event = sourceEvent();
          if (event.changedTouches) event = event.changedTouches[0];
          return point(node, event);
        }

        function none() {}

        function selector(selector) {
          return selector == null ? none : function () {
            return this.querySelector(selector);
          };
        }

        function selection_select(select) {
          if (typeof select !== "function") select = selector(select);

          for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
              if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
              }
            }
          }

          return new Selection(subgroups, this._parents);
        }

        function empty() {
          return [];
        }

        function selectorAll(selector) {
          return selector == null ? empty : function () {
            return this.querySelectorAll(selector);
          };
        }

        function selection_selectAll(select) {
          if (typeof select !== "function") select = selectorAll(select);

          for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
              }
            }
          }

          return new Selection(subgroups, parents);
        }

        function selection_filter(match) {
          if (typeof match !== "function") match = matcher$1(match);

          for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
              if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
              }
            }
          }

          return new Selection(subgroups, this._parents);
        }

        function sparse(update) {
          return new Array(update.length);
        }

        function selection_enter() {
          return new Selection(this._enter || this._groups.map(sparse), this._parents);
        }

        function EnterNode(parent, datum) {
          this.ownerDocument = parent.ownerDocument;
          this.namespaceURI = parent.namespaceURI;
          this._next = null;
          this._parent = parent;
          this.__data__ = datum;
        }

        EnterNode.prototype = {
          constructor: EnterNode,
          appendChild: function appendChild(child) {
            return this._parent.insertBefore(child, this._next);
          },
          insertBefore: function insertBefore(child, next) {
            return this._parent.insertBefore(child, next);
          },
          querySelector: function querySelector(selector) {
            return this._parent.querySelector(selector);
          },
          querySelectorAll: function querySelectorAll(selector) {
            return this._parent.querySelectorAll(selector);
          }
        };

        function constant(x) {
          return function () {
            return x;
          };
        }

        var keyPrefix = "$"; // Protect against keys like “__proto__”.

        function bindIndex(parent, group, enter, update, exit, data) {
          var i = 0,
              node,
              groupLength = group.length,
              dataLength = data.length;

          // Put any non-null nodes that fit into update.
          // Put any null nodes into enter.
          // Put any remaining data into enter.
          for (; i < dataLength; ++i) {
            if (node = group[i]) {
              node.__data__ = data[i];
              update[i] = node;
            } else {
              enter[i] = new EnterNode(parent, data[i]);
            }
          }

          // Put any non-null nodes that don’t fit into exit.
          for (; i < groupLength; ++i) {
            if (node = group[i]) {
              exit[i] = node;
            }
          }
        }

        function bindKey(parent, group, enter, update, exit, data, key) {
          var i,
              node,
              nodeByKeyValue = {},
              groupLength = group.length,
              dataLength = data.length,
              keyValues = new Array(groupLength),
              keyValue;

          // Compute the key for each node.
          // If multiple nodes have the same key, the duplicates are added to exit.
          for (i = 0; i < groupLength; ++i) {
            if (node = group[i]) {
              keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
              if (keyValue in nodeByKeyValue) {
                exit[i] = node;
              } else {
                nodeByKeyValue[keyValue] = node;
              }
            }
          }

          // Compute the key for each datum.
          // If there a node associated with this key, join and add it to update.
          // If there is not (or the key is a duplicate), add it to enter.
          for (i = 0; i < dataLength; ++i) {
            keyValue = keyPrefix + key.call(parent, data[i], i, data);
            if (node = nodeByKeyValue[keyValue]) {
              update[i] = node;
              node.__data__ = data[i];
              nodeByKeyValue[keyValue] = null;
            } else {
              enter[i] = new EnterNode(parent, data[i]);
            }
          }

          // Add any remaining nodes that were not bound to data to exit.
          for (i = 0; i < groupLength; ++i) {
            if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
              exit[i] = node;
            }
          }
        }

        function selection_data(value, key) {
          if (!value) {
            data = new Array(this.size()), j = -1;
            this.each(function (d) {
              data[++j] = d;
            });
            return data;
          }

          var bind = key ? bindKey : bindIndex,
              parents = this._parents,
              groups = this._groups;

          if (typeof value !== "function") value = constant(value);

          for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
            var parent = parents[j],
                group = groups[j],
                groupLength = group.length,
                data = value.call(parent, parent && parent.__data__, j, parents),
                dataLength = data.length,
                enterGroup = enter[j] = new Array(dataLength),
                updateGroup = update[j] = new Array(dataLength),
                exitGroup = exit[j] = new Array(groupLength);

            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
              if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while (!(next = updateGroup[i1]) && ++i1 < dataLength) {}
                previous._next = next || null;
              }
            }
          }

          update = new Selection(update, parents);
          update._enter = enter;
          update._exit = exit;
          return update;
        }

        function selection_exit() {
          return new Selection(this._exit || this._groups.map(sparse), this._parents);
        }

        function selection_merge(selection) {

          for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
            for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
              if (node = group0[i] || group1[i]) {
                merge[i] = node;
              }
            }
          }

          for (; j < m0; ++j) {
            merges[j] = groups0[j];
          }

          return new Selection(merges, this._parents);
        }

        function selection_order() {

          for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
            for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
              if (node = group[i]) {
                if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
                next = node;
              }
            }
          }

          return this;
        }

        function selection_sort(compare) {
          if (!compare) compare = ascending;

          function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
          }

          for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
              if (node = group[i]) {
                sortgroup[i] = node;
              }
            }
            sortgroup.sort(compareNode);
          }

          return new Selection(sortgroups, this._parents).order();
        }

        function ascending(a, b) {
          return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }

        function selection_call() {
          var callback = arguments[0];
          arguments[0] = this;
          callback.apply(null, arguments);
          return this;
        }

        function selection_nodes() {
          var nodes = new Array(this.size()),
              i = -1;
          this.each(function () {
            nodes[++i] = this;
          });
          return nodes;
        }

        function selection_node() {

          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
              var node = group[i];
              if (node) return node;
            }
          }

          return null;
        }

        function selection_size() {
          var size = 0;
          this.each(function () {
            ++size;
          });
          return size;
        }

        function selection_empty() {
          return !this.node();
        }

        function selection_each(callback) {

          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
              if (node = group[i]) callback.call(node, node.__data__, i, group);
            }
          }

          return this;
        }

        function attrRemove(name) {
          return function () {
            this.removeAttribute(name);
          };
        }

        function attrRemoveNS(fullname) {
          return function () {
            this.removeAttributeNS(fullname.space, fullname.local);
          };
        }

        function attrConstant(name, value) {
          return function () {
            this.setAttribute(name, value);
          };
        }

        function attrConstantNS(fullname, value) {
          return function () {
            this.setAttributeNS(fullname.space, fullname.local, value);
          };
        }

        function attrFunction(name, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
          };
        }

        function attrFunctionNS(fullname, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
          };
        }

        function selection_attr(name, value) {
          var fullname = namespace(name);

          if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
          }

          return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
        }

        function defaultView(node) {
          return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
          node.document && node // node is a Window
          || node.defaultView; // node is a Document
        }

        function styleRemove(name) {
          return function () {
            this.style.removeProperty(name);
          };
        }

        function styleConstant(name, value, priority) {
          return function () {
            this.style.setProperty(name, value, priority);
          };
        }

        function styleFunction(name, value, priority) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
          };
        }

        function selection_style(name, value, priority) {
          var node;
          return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : defaultView(node = this.node()).getComputedStyle(node, null).getPropertyValue(name);
        }

        function propertyRemove(name) {
          return function () {
            delete this[name];
          };
        }

        function propertyConstant(name, value) {
          return function () {
            this[name] = value;
          };
        }

        function propertyFunction(name, value) {
          return function () {
            var v = value.apply(this, arguments);
            if (v == null) delete this[name];else this[name] = v;
          };
        }

        function selection_property(name, value) {
          return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
        }

        function classArray(string) {
          return string.trim().split(/^|\s+/);
        }

        function classList(node) {
          return node.classList || new ClassList(node);
        }

        function ClassList(node) {
          this._node = node;
          this._names = classArray(node.getAttribute("class") || "");
        }

        ClassList.prototype = {
          add: function add(name) {
            var i = this._names.indexOf(name);
            if (i < 0) {
              this._names.push(name);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          remove: function remove(name) {
            var i = this._names.indexOf(name);
            if (i >= 0) {
              this._names.splice(i, 1);
              this._node.setAttribute("class", this._names.join(" "));
            }
          },
          contains: function contains(name) {
            return this._names.indexOf(name) >= 0;
          }
        };

        function classedAdd(node, names) {
          var list = classList(node),
              i = -1,
              n = names.length;
          while (++i < n) {
            list.add(names[i]);
          }
        }

        function classedRemove(node, names) {
          var list = classList(node),
              i = -1,
              n = names.length;
          while (++i < n) {
            list.remove(names[i]);
          }
        }

        function classedTrue(names) {
          return function () {
            classedAdd(this, names);
          };
        }

        function classedFalse(names) {
          return function () {
            classedRemove(this, names);
          };
        }

        function classedFunction(names, value) {
          return function () {
            (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
          };
        }

        function selection_classed(name, value) {
          var names = classArray(name + "");

          if (arguments.length < 2) {
            var list = classList(this.node()),
                i = -1,
                n = names.length;
            while (++i < n) {
              if (!list.contains(names[i])) return false;
            }return true;
          }

          return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
        }

        function textRemove() {
          this.textContent = "";
        }

        function textConstant(value) {
          return function () {
            this.textContent = value;
          };
        }

        function textFunction(value) {
          return function () {
            var v = value.apply(this, arguments);
            this.textContent = v == null ? "" : v;
          };
        }

        function selection_text(value) {
          return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
        }

        function htmlRemove() {
          this.innerHTML = "";
        }

        function htmlConstant(value) {
          return function () {
            this.innerHTML = value;
          };
        }

        function htmlFunction(value) {
          return function () {
            var v = value.apply(this, arguments);
            this.innerHTML = v == null ? "" : v;
          };
        }

        function selection_html(value) {
          return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
        }

        function raise() {
          if (this.nextSibling) this.parentNode.appendChild(this);
        }

        function selection_raise() {
          return this.each(raise);
        }

        function lower() {
          if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }

        function selection_lower() {
          return this.each(lower);
        }

        function selection_append(name) {
          var create = typeof name === "function" ? name : creator(name);
          return this.select(function () {
            return this.appendChild(create.apply(this, arguments));
          });
        }

        function constantNull() {
          return null;
        }

        function selection_insert(name, before) {
          var create = typeof name === "function" ? name : creator(name),
              select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
          return this.select(function () {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
          });
        }

        function remove() {
          var parent = this.parentNode;
          if (parent) parent.removeChild(this);
        }

        function selection_remove() {
          return this.each(remove);
        }

        function selection_datum(value) {
          return arguments.length ? this.property("__data__", value) : this.node().__data__;
        }

        function dispatchEvent(node, type, params) {
          var window = defaultView(node),
              event = window.CustomEvent;

          if (event) {
            event = new event(type, params);
          } else {
            event = window.document.createEvent("Event");
            if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
          }

          node.dispatchEvent(event);
        }

        function dispatchConstant(type, params) {
          return function () {
            return dispatchEvent(this, type, params);
          };
        }

        function dispatchFunction(type, params) {
          return function () {
            return dispatchEvent(this, type, params.apply(this, arguments));
          };
        }

        function selection_dispatch(type, params) {
          return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
        }

        var root = [null];

        function Selection(groups, parents) {
          this._groups = groups;
          this._parents = parents;
        }

        function selection() {
          return new Selection([[document.documentElement]], root);
        }

        Selection.prototype = selection.prototype = {
          constructor: Selection,
          select: selection_select,
          selectAll: selection_selectAll,
          filter: selection_filter,
          data: selection_data,
          enter: selection_enter,
          exit: selection_exit,
          merge: selection_merge,
          order: selection_order,
          sort: selection_sort,
          call: selection_call,
          nodes: selection_nodes,
          node: selection_node,
          size: selection_size,
          empty: selection_empty,
          each: selection_each,
          attr: selection_attr,
          style: selection_style,
          property: selection_property,
          classed: selection_classed,
          text: selection_text,
          html: selection_html,
          raise: selection_raise,
          lower: selection_lower,
          append: selection_append,
          insert: selection_insert,
          remove: selection_remove,
          datum: selection_datum,
          on: selection_on,
          dispatch: selection_dispatch
        };

        function select(selector) {
          return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
        }

        function selectAll(selector) {
          return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : selector], root);
        }

        function touch(node, touches, identifier) {
          if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

          for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
              return point(node, touch);
            }
          }

          return null;
        }

        function touches(node, touches) {
          if (touches == null) touches = sourceEvent().touches;

          for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
            points[i] = point(node, touches[i]);
          }

          return points;
        }

        exports.creator = creator;
        exports.local = local;
        exports.matcher = matcher$1;
        exports.mouse = mouse;
        exports.namespace = namespace;
        exports.namespaces = namespaces;
        exports.select = select;
        exports.selectAll = selectAll;
        exports.selection = selection;
        exports.selector = selector;
        exports.selectorAll = selectorAll;
        exports.touch = touch;
        exports.touches = touches;
        exports.window = defaultView;
        exports.customEvent = customEvent;

        Object.defineProperty(exports, '__esModule', { value: true });
      });
    }, {}], 3: [function (require, module, exports) {
      // https://d3js.org/d3-voronoi/ Version 1.0.2. Copyright 2016 Mike Bostock.
      (function (global, factory) {
        (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.d3 = global.d3 || {});
      })(this, function (exports) {
        'use strict';

        function constant(x) {
          return function () {
            return x;
          };
        }

        function x(d) {
          return d[0];
        }

        function y(d) {
          return d[1];
        }

        function RedBlackTree() {
          this._ = null; // root node
        }

        function RedBlackNode(node) {
          node.U = // parent node
          node.C = // color - true for red, false for black
          node.L = // left node
          node.R = // right node
          node.P = // previous node
          node.N = null; // next node
        }

        RedBlackTree.prototype = {
          constructor: RedBlackTree,

          insert: function insert(after, node) {
            var parent, grandpa, uncle;

            if (after) {
              node.P = after;
              node.N = after.N;
              if (after.N) after.N.P = node;
              after.N = node;
              if (after.R) {
                after = after.R;
                while (after.L) {
                  after = after.L;
                }after.L = node;
              } else {
                after.R = node;
              }
              parent = after;
            } else if (this._) {
              after = RedBlackFirst(this._);
              node.P = null;
              node.N = after;
              after.P = after.L = node;
              parent = after;
            } else {
              node.P = node.N = null;
              this._ = node;
              parent = null;
            }
            node.L = node.R = null;
            node.U = parent;
            node.C = true;

            after = node;
            while (parent && parent.C) {
              grandpa = parent.U;
              if (parent === grandpa.L) {
                uncle = grandpa.R;
                if (uncle && uncle.C) {
                  parent.C = uncle.C = false;
                  grandpa.C = true;
                  after = grandpa;
                } else {
                  if (after === parent.R) {
                    RedBlackRotateLeft(this, parent);
                    after = parent;
                    parent = after.U;
                  }
                  parent.C = false;
                  grandpa.C = true;
                  RedBlackRotateRight(this, grandpa);
                }
              } else {
                uncle = grandpa.L;
                if (uncle && uncle.C) {
                  parent.C = uncle.C = false;
                  grandpa.C = true;
                  after = grandpa;
                } else {
                  if (after === parent.L) {
                    RedBlackRotateRight(this, parent);
                    after = parent;
                    parent = after.U;
                  }
                  parent.C = false;
                  grandpa.C = true;
                  RedBlackRotateLeft(this, grandpa);
                }
              }
              parent = after.U;
            }
            this._.C = false;
          },

          remove: function remove(node) {
            if (node.N) node.N.P = node.P;
            if (node.P) node.P.N = node.N;
            node.N = node.P = null;

            var parent = node.U,
                sibling,
                left = node.L,
                right = node.R,
                next,
                red;

            if (!left) next = right;else if (!right) next = left;else next = RedBlackFirst(right);

            if (parent) {
              if (parent.L === node) parent.L = next;else parent.R = next;
            } else {
              this._ = next;
            }

            if (left && right) {
              red = next.C;
              next.C = node.C;
              next.L = left;
              left.U = next;
              if (next !== right) {
                parent = next.U;
                next.U = node.U;
                node = next.R;
                parent.L = node;
                next.R = right;
                right.U = next;
              } else {
                next.U = parent;
                parent = next;
                node = next.R;
              }
            } else {
              red = node.C;
              node = next;
            }

            if (node) node.U = parent;
            if (red) return;
            if (node && node.C) {
              node.C = false;return;
            }

            do {
              if (node === this._) break;
              if (node === parent.L) {
                sibling = parent.R;
                if (sibling.C) {
                  sibling.C = false;
                  parent.C = true;
                  RedBlackRotateLeft(this, parent);
                  sibling = parent.R;
                }
                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                  if (!sibling.R || !sibling.R.C) {
                    sibling.L.C = false;
                    sibling.C = true;
                    RedBlackRotateRight(this, sibling);
                    sibling = parent.R;
                  }
                  sibling.C = parent.C;
                  parent.C = sibling.R.C = false;
                  RedBlackRotateLeft(this, parent);
                  node = this._;
                  break;
                }
              } else {
                sibling = parent.L;
                if (sibling.C) {
                  sibling.C = false;
                  parent.C = true;
                  RedBlackRotateRight(this, parent);
                  sibling = parent.L;
                }
                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                  if (!sibling.L || !sibling.L.C) {
                    sibling.R.C = false;
                    sibling.C = true;
                    RedBlackRotateLeft(this, sibling);
                    sibling = parent.L;
                  }
                  sibling.C = parent.C;
                  parent.C = sibling.L.C = false;
                  RedBlackRotateRight(this, parent);
                  node = this._;
                  break;
                }
              }
              sibling.C = true;
              node = parent;
              parent = parent.U;
            } while (!node.C);

            if (node) node.C = false;
          }
        };

        function RedBlackRotateLeft(tree, node) {
          var p = node,
              q = node.R,
              parent = p.U;

          if (parent) {
            if (parent.L === p) parent.L = q;else parent.R = q;
          } else {
            tree._ = q;
          }

          q.U = parent;
          p.U = q;
          p.R = q.L;
          if (p.R) p.R.U = p;
          q.L = p;
        }

        function RedBlackRotateRight(tree, node) {
          var p = node,
              q = node.L,
              parent = p.U;

          if (parent) {
            if (parent.L === p) parent.L = q;else parent.R = q;
          } else {
            tree._ = q;
          }

          q.U = parent;
          p.U = q;
          p.L = q.R;
          if (p.L) p.L.U = p;
          q.R = p;
        }

        function RedBlackFirst(node) {
          while (node.L) {
            node = node.L;
          }return node;
        }

        function createEdge(left, right, v0, v1) {
          var edge = [null, null],
              index = edges.push(edge) - 1;
          edge.left = left;
          edge.right = right;
          if (v0) setEdgeEnd(edge, left, right, v0);
          if (v1) setEdgeEnd(edge, right, left, v1);
          cells[left.index].halfedges.push(index);
          cells[right.index].halfedges.push(index);
          return edge;
        }

        function createBorderEdge(left, v0, v1) {
          var edge = [v0, v1];
          edge.left = left;
          return edge;
        }

        function setEdgeEnd(edge, left, right, vertex) {
          if (!edge[0] && !edge[1]) {
            edge[0] = vertex;
            edge.left = left;
            edge.right = right;
          } else if (edge.left === right) {
            edge[1] = vertex;
          } else {
            edge[0] = vertex;
          }
        }

        // Liang–Barsky line clipping.
        function clipEdge(edge, x0, y0, x1, y1) {
          var a = edge[0],
              b = edge[1],
              ax = a[0],
              ay = a[1],
              bx = b[0],
              by = b[1],
              t0 = 0,
              t1 = 1,
              dx = bx - ax,
              dy = by - ay,
              r;

          r = x0 - ax;
          if (!dx && r > 0) return;
          r /= dx;
          if (dx < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          } else if (dx > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          }

          r = x1 - ax;
          if (!dx && r < 0) return;
          r /= dx;
          if (dx < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          } else if (dx > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          }

          r = y0 - ay;
          if (!dy && r > 0) return;
          r /= dy;
          if (dy < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          } else if (dy > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          }

          r = y1 - ay;
          if (!dy && r < 0) return;
          r /= dy;
          if (dy < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
          } else if (dy > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
          }

          if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

          if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
          if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
          return true;
        }

        function connectEdge(edge, x0, y0, x1, y1) {
          var v1 = edge[1];
          if (v1) return true;

          var v0 = edge[0],
              left = edge.left,
              right = edge.right,
              lx = left[0],
              ly = left[1],
              rx = right[0],
              ry = right[1],
              fx = (lx + rx) / 2,
              fy = (ly + ry) / 2,
              fm,
              fb;

          if (ry === ly) {
            if (fx < x0 || fx >= x1) return;
            if (lx > rx) {
              if (!v0) v0 = [fx, y0];else if (v0[1] >= y1) return;
              v1 = [fx, y1];
            } else {
              if (!v0) v0 = [fx, y1];else if (v0[1] < y0) return;
              v1 = [fx, y0];
            }
          } else {
            fm = (lx - rx) / (ry - ly);
            fb = fy - fm * fx;
            if (fm < -1 || fm > 1) {
              if (lx > rx) {
                if (!v0) v0 = [(y0 - fb) / fm, y0];else if (v0[1] >= y1) return;
                v1 = [(y1 - fb) / fm, y1];
              } else {
                if (!v0) v0 = [(y1 - fb) / fm, y1];else if (v0[1] < y0) return;
                v1 = [(y0 - fb) / fm, y0];
              }
            } else {
              if (ly < ry) {
                if (!v0) v0 = [x0, fm * x0 + fb];else if (v0[0] >= x1) return;
                v1 = [x1, fm * x1 + fb];
              } else {
                if (!v0) v0 = [x1, fm * x1 + fb];else if (v0[0] < x0) return;
                v1 = [x0, fm * x0 + fb];
              }
            }
          }

          edge[0] = v0;
          edge[1] = v1;
          return true;
        }

        function clipEdges(x0, y0, x1, y1) {
          var i = edges.length,
              edge;

          while (i--) {
            if (!connectEdge(edge = edges[i], x0, y0, x1, y1) || !clipEdge(edge, x0, y0, x1, y1) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
              delete edges[i];
            }
          }
        }

        function createCell(site) {
          return cells[site.index] = {
            site: site,
            halfedges: []
          };
        }

        function cellHalfedgeAngle(cell, edge) {
          var site = cell.site,
              va = edge.left,
              vb = edge.right;
          if (site === vb) vb = va, va = site;
          if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
          if (site === va) va = edge[1], vb = edge[0];else va = edge[0], vb = edge[1];
          return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
        }

        function cellHalfedgeStart(cell, edge) {
          return edge[+(edge.left !== cell.site)];
        }

        function cellHalfedgeEnd(cell, edge) {
          return edge[+(edge.left === cell.site)];
        }

        function sortCellHalfedges() {
          for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
            if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
              var index = new Array(m),
                  array = new Array(m);
              for (j = 0; j < m; ++j) {
                index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
              }index.sort(function (i, j) {
                return array[j] - array[i];
              });
              for (j = 0; j < m; ++j) {
                array[j] = halfedges[index[j]];
              }for (j = 0; j < m; ++j) {
                halfedges[j] = array[j];
              }
            }
          }
        }

        function clipCells(x0, y0, x1, y1) {
          var nCells = cells.length,
              iCell,
              cell,
              site,
              iHalfedge,
              halfedges,
              nHalfedges,
              start,
              startX,
              startY,
              end,
              endX,
              endY,
              cover = true;

          for (iCell = 0; iCell < nCells; ++iCell) {
            if (cell = cells[iCell]) {
              site = cell.site;
              halfedges = cell.halfedges;
              iHalfedge = halfedges.length;

              // Remove any dangling clipped edges.
              while (iHalfedge--) {
                if (!edges[halfedges[iHalfedge]]) {
                  halfedges.splice(iHalfedge, 1);
                }
              }

              // Insert any border edges as necessary.
              iHalfedge = 0, nHalfedges = halfedges.length;
              while (iHalfedge < nHalfedges) {
                end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
                start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
                if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
                  halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end, Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1] : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1] : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0] : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0] : null)) - 1);
                  ++nHalfedges;
                }
              }

              if (nHalfedges) cover = false;
            }
          }

          // If there weren’t any edges, have the closest site cover the extent.
          // It doesn’t matter which corner of the extent we measure!
          if (cover) {
            var dx,
                dy,
                d2,
                dc = Infinity;

            for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
              if (cell = cells[iCell]) {
                site = cell.site;
                dx = site[0] - x0;
                dy = site[1] - y0;
                d2 = dx * dx + dy * dy;
                if (d2 < dc) dc = d2, cover = cell;
              }
            }

            if (cover) {
              var v00 = [x0, y0],
                  v01 = [x0, y1],
                  v11 = [x1, y1],
                  v10 = [x1, y0];
              cover.halfedges.push(edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1, edges.push(createBorderEdge(site, v01, v11)) - 1, edges.push(createBorderEdge(site, v11, v10)) - 1, edges.push(createBorderEdge(site, v10, v00)) - 1);
            }
          }

          // Lastly delete any cells with no edges; these were entirely clipped.
          for (iCell = 0; iCell < nCells; ++iCell) {
            if (cell = cells[iCell]) {
              if (!cell.halfedges.length) {
                delete cells[iCell];
              }
            }
          }
        }

        var circlePool = [];

        var firstCircle;

        function Circle() {
          RedBlackNode(this);
          this.x = this.y = this.arc = this.site = this.cy = null;
        }

        function attachCircle(arc) {
          var lArc = arc.P,
              rArc = arc.N;

          if (!lArc || !rArc) return;

          var lSite = lArc.site,
              cSite = arc.site,
              rSite = rArc.site;

          if (lSite === rSite) return;

          var bx = cSite[0],
              by = cSite[1],
              ax = lSite[0] - bx,
              ay = lSite[1] - by,
              cx = rSite[0] - bx,
              cy = rSite[1] - by;

          var d = 2 * (ax * cy - ay * cx);
          if (d >= -epsilon2) return;

          var ha = ax * ax + ay * ay,
              hc = cx * cx + cy * cy,
              x = (cy * ha - ay * hc) / d,
              y = (ax * hc - cx * ha) / d;

          var circle = circlePool.pop() || new Circle();
          circle.arc = arc;
          circle.site = cSite;
          circle.x = x + bx;
          circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

          arc.circle = circle;

          var before = null,
              node = circles._;

          while (node) {
            if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
              if (node.L) node = node.L;else {
                before = node.P;break;
              }
            } else {
              if (node.R) node = node.R;else {
                before = node;break;
              }
            }
          }

          circles.insert(before, circle);
          if (!before) firstCircle = circle;
        }

        function detachCircle(arc) {
          var circle = arc.circle;
          if (circle) {
            if (!circle.P) firstCircle = circle.N;
            circles.remove(circle);
            circlePool.push(circle);
            RedBlackNode(circle);
            arc.circle = null;
          }
        }

        var beachPool = [];

        function Beach() {
          RedBlackNode(this);
          this.edge = this.site = this.circle = null;
        }

        function createBeach(site) {
          var beach = beachPool.pop() || new Beach();
          beach.site = site;
          return beach;
        }

        function detachBeach(beach) {
          detachCircle(beach);
          beaches.remove(beach);
          beachPool.push(beach);
          RedBlackNode(beach);
        }

        function removeBeach(beach) {
          var circle = beach.circle,
              x = circle.x,
              y = circle.cy,
              vertex = [x, y],
              previous = beach.P,
              next = beach.N,
              disappearing = [beach];

          detachBeach(beach);

          var lArc = previous;
          while (lArc.circle && Math.abs(x - lArc.circle.x) < epsilon && Math.abs(y - lArc.circle.cy) < epsilon) {
            previous = lArc.P;
            disappearing.unshift(lArc);
            detachBeach(lArc);
            lArc = previous;
          }

          disappearing.unshift(lArc);
          detachCircle(lArc);

          var rArc = next;
          while (rArc.circle && Math.abs(x - rArc.circle.x) < epsilon && Math.abs(y - rArc.circle.cy) < epsilon) {
            next = rArc.N;
            disappearing.push(rArc);
            detachBeach(rArc);
            rArc = next;
          }

          disappearing.push(rArc);
          detachCircle(rArc);

          var nArcs = disappearing.length,
              iArc;
          for (iArc = 1; iArc < nArcs; ++iArc) {
            rArc = disappearing[iArc];
            lArc = disappearing[iArc - 1];
            setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
          }

          lArc = disappearing[0];
          rArc = disappearing[nArcs - 1];
          rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

          attachCircle(lArc);
          attachCircle(rArc);
        }

        function addBeach(site) {
          var x = site[0],
              directrix = site[1],
              lArc,
              rArc,
              dxl,
              dxr,
              node = beaches._;

          while (node) {
            dxl = leftBreakPoint(node, directrix) - x;
            if (dxl > epsilon) node = node.L;else {
              dxr = x - rightBreakPoint(node, directrix);
              if (dxr > epsilon) {
                if (!node.R) {
                  lArc = node;
                  break;
                }
                node = node.R;
              } else {
                if (dxl > -epsilon) {
                  lArc = node.P;
                  rArc = node;
                } else if (dxr > -epsilon) {
                  lArc = node;
                  rArc = node.N;
                } else {
                  lArc = rArc = node;
                }
                break;
              }
            }
          }

          createCell(site);
          var newArc = createBeach(site);
          beaches.insert(lArc, newArc);

          if (!lArc && !rArc) return;

          if (lArc === rArc) {
            detachCircle(lArc);
            rArc = createBeach(lArc.site);
            beaches.insert(newArc, rArc);
            newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
            attachCircle(lArc);
            attachCircle(rArc);
            return;
          }

          if (!rArc) {
            // && lArc
            newArc.edge = createEdge(lArc.site, newArc.site);
            return;
          }

          // else lArc !== rArc
          detachCircle(lArc);
          detachCircle(rArc);

          var lSite = lArc.site,
              ax = lSite[0],
              ay = lSite[1],
              bx = site[0] - ax,
              by = site[1] - ay,
              rSite = rArc.site,
              cx = rSite[0] - ax,
              cy = rSite[1] - ay,
              d = 2 * (bx * cy - by * cx),
              hb = bx * bx + by * by,
              hc = cx * cx + cy * cy,
              vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

          setEdgeEnd(rArc.edge, lSite, rSite, vertex);
          newArc.edge = createEdge(lSite, site, null, vertex);
          rArc.edge = createEdge(site, rSite, null, vertex);
          attachCircle(lArc);
          attachCircle(rArc);
        }

        function leftBreakPoint(arc, directrix) {
          var site = arc.site,
              rfocx = site[0],
              rfocy = site[1],
              pby2 = rfocy - directrix;

          if (!pby2) return rfocx;

          var lArc = arc.P;
          if (!lArc) return -Infinity;

          site = lArc.site;
          var lfocx = site[0],
              lfocy = site[1],
              plby2 = lfocy - directrix;

          if (!plby2) return lfocx;

          var hl = lfocx - rfocx,
              aby2 = 1 / pby2 - 1 / plby2,
              b = hl / plby2;

          if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

          return (rfocx + lfocx) / 2;
        }

        function rightBreakPoint(arc, directrix) {
          var rArc = arc.N;
          if (rArc) return leftBreakPoint(rArc, directrix);
          var site = arc.site;
          return site[1] === directrix ? site[0] : Infinity;
        }

        var epsilon = 1e-6;
        var epsilon2 = 1e-12;
        var beaches;
        var cells;
        var circles;
        var edges;

        function triangleArea(a, b, c) {
          return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
        }

        function lexicographic(a, b) {
          return b[1] - a[1] || b[0] - a[0];
        }

        function Diagram(sites, extent) {
          var site = sites.sort(lexicographic).pop(),
              x,
              y,
              circle;

          edges = [];
          cells = new Array(sites.length);
          beaches = new RedBlackTree();
          circles = new RedBlackTree();

          while (true) {
            circle = firstCircle;
            if (site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) {
              if (site[0] !== x || site[1] !== y) {
                addBeach(site);
                x = site[0], y = site[1];
              }
              site = sites.pop();
            } else if (circle) {
              removeBeach(circle.arc);
            } else {
              break;
            }
          }

          sortCellHalfedges();

          if (extent) {
            var x0 = +extent[0][0],
                y0 = +extent[0][1],
                x1 = +extent[1][0],
                y1 = +extent[1][1];
            clipEdges(x0, y0, x1, y1);
            clipCells(x0, y0, x1, y1);
          }

          this.edges = edges;
          this.cells = cells;

          beaches = circles = edges = cells = null;
        }

        Diagram.prototype = {
          constructor: Diagram,

          polygons: function polygons() {
            var edges = this.edges;

            return this.cells.map(function (cell) {
              var polygon = cell.halfedges.map(function (i) {
                return cellHalfedgeStart(cell, edges[i]);
              });
              polygon.data = cell.site.data;
              return polygon;
            });
          },

          triangles: function triangles() {
            var triangles = [],
                edges = this.edges;

            this.cells.forEach(function (cell, i) {
              var site = cell.site,
                  halfedges = cell.halfedges,
                  j = -1,
                  m = halfedges.length,
                  s0,
                  e1 = edges[halfedges[m - 1]],
                  s1 = e1.left === site ? e1.right : e1.left;

              while (++j < m) {
                s0 = s1;
                e1 = edges[halfedges[j]];
                s1 = e1.left === site ? e1.right : e1.left;
                if (i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
                  triangles.push([site.data, s0.data, s1.data]);
                }
              }
            });

            return triangles;
          },

          links: function links() {
            return this.edges.filter(function (edge) {
              return edge.right;
            }).map(function (edge) {
              return {
                source: edge.left.data,
                target: edge.right.data
              };
            });
          }
        };

        function voronoi() {
          var x$$ = x,
              y$$ = y,
              extent = null;

          function voronoi(data) {
            return new Diagram(data.map(function (d, i) {
              var s = [Math.round(x$$(d, i, data) / epsilon) * epsilon, Math.round(y$$(d, i, data) / epsilon) * epsilon];
              s.index = i;
              s.data = d;
              return s;
            }), extent);
          }

          voronoi.polygons = function (data) {
            return voronoi(data).polygons();
          };

          voronoi.links = function (data) {
            return voronoi(data).links();
          };

          voronoi.triangles = function (data) {
            return voronoi(data).triangles();
          };

          voronoi.x = function (_) {
            return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), voronoi) : x$$;
          };

          voronoi.y = function (_) {
            return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), voronoi) : y$$;
          };

          voronoi.extent = function (_) {
            return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
          };

          voronoi.size = function (_) {
            return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
          };

          return voronoi;
        }

        exports.voronoi = voronoi;

        Object.defineProperty(exports, '__esModule', { value: true });
      });
    }, {}] }, {}, [1])(1);
});