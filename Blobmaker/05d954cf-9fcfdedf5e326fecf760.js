(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    ZMKu: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return In;
      });
      n("cxuS"),
        n("zTTH"),
        n("U6Bt"),
        n("Ll4R"),
        n("HQhv"),
        n("eMsz"),
        n("wZFJ"),
        n("sc67"),
        n("m210"),
        n("4DPX"),
        n("zGcK"),
        n("cFtU"),
        n("OeI1"),
        n("Ggvi"),
        n("AqHK"),
        n("TAD1"),
        n("v9g0"),
        n("MIFh"),
        n("xJgp"),
        n("6kNP"),
        n("rzGZ"),
        n("Dq+y"),
        n("8npG"),
        n("YbXK"),
        n("ToIb"),
        n("JHok");
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("eUsl"),
        a = n("tKSW"),
        s = n("2Deh"),
        u = n("Ibe6"),
        c = n("Neuu"),
        l = n("82gj"),
        f = n("lyHL"),
        p = function (t) {
          return !isNaN(parseFloat(t));
        },
        h = (function () {
          function t(t) {
            var e = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0),
                  (e.prev = e.current),
                  (e.current = t),
                  e.updateSubscribers &&
                    e.prev !== e.current &&
                    e.updateSubscribers.forEach(e.notifySubscriber),
                  n &&
                    e.renderSubscribers &&
                    e.renderSubscribers.forEach(e.notifySubscriber);
                var r = Object(o.c)(),
                  i = r.delta,
                  a = r.timestamp;
                e.lastUpdated !== a &&
                  ((e.timeDelta = i),
                  (e.lastUpdated = a),
                  o.b.postRender(e.scheduleVelocityCheck));
              }),
              (this.notifySubscriber = function (t) {
                t(e.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return o.b.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated && (e.prev = e.current);
              }),
              this.set(t, !1),
              (this.canTrackVelocity = p(this.current));
          }
          return (
            (t.prototype.subscribeTo = function (t, e) {
              var n = this,
                r = function () {
                  return e(n.current);
                };
              return (
                t.add(r),
                function () {
                  return t.delete(r);
                }
              );
            }),
            (t.prototype.onChange = function (t) {
              return (
                this.updateSubscribers || (this.updateSubscribers = new Set()),
                this.subscribeTo(this.updateSubscribers, t)
              );
            }),
            (t.prototype.onRenderRequest = function (t) {
              return (
                this.renderSubscribers || (this.renderSubscribers = new Set()),
                this.notifySubscriber(t),
                this.subscribeTo(this.renderSubscribers, t)
              );
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Object(a.l)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  e.stopAnimation = t(n);
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers && this.updateSubscribers.clear(),
                this.renderSubscribers && this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function d(t) {
        return new h(t);
      }
      function v(t) {
        var e = Object(i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      var m,
        g = function (t) {
          return t instanceof h;
        },
        y = Object(s.c)({
          onRead: function () {
            return null;
          },
          onRender: function (t, e) {
            return (0, e.onUpdate)(t);
          },
        }),
        b = (function () {
          function t() {
            (this.hasMounted = !1),
              (this.values = new Map()),
              (this.unsubscribers = new Map());
          }
          return (
            (t.prototype.has = function (t) {
              return this.values.has(t);
            }),
            (t.prototype.set = function (t, e) {
              this.values.set(t, e),
                this.hasMounted && this.bindValueToOutput(t, e);
            }),
            (t.prototype.delete = function (t) {
              this.values.delete(t);
              var e = this.unsubscribers.get(t);
              e && e();
            }),
            (t.prototype.get = function (t, e) {
              var n = this.values.get(t);
              return (
                void 0 === n &&
                  void 0 !== e &&
                  ((n = new h(e)), this.set(t, n)),
                n
              );
            }),
            (t.prototype.forEach = function (t) {
              return this.values.forEach(t);
            }),
            (t.prototype.bindValueToOutput = function (t, e) {
              var n = this,
                r = e.onRenderRequest(function (e) {
                  return n.output && n.output(t, e);
                }),
                i = e.onChange(function (e) {
                  n.onUpdate && n.onUpdate.set(t, e);
                });
              this.unsubscribers.has(t) && this.unsubscribers.get(t)(),
                this.unsubscribers.set(t, function () {
                  r(), i();
                });
            }),
            (t.prototype.setOnUpdate = function (t) {
              (this.onUpdate = void 0),
                t && (this.onUpdate = y({ onUpdate: t }));
            }),
            (t.prototype.setTransformTemplate = function (t) {
              this.transformTemplate !== t &&
                ((this.transformTemplate = t), this.updateTransformTemplate());
            }),
            (t.prototype.updateTransformTemplate = function () {
              this.output && this.output("transform", this.transformTemplate);
            }),
            (t.prototype.mount = function (t) {
              var e = this;
              (this.hasMounted = !0),
                t && (this.output = t),
                this.values.forEach(function (t, n) {
                  return e.bindValueToOutput(n, t);
                }),
                this.updateTransformTemplate();
            }),
            (t.prototype.unmount = function () {
              var t = this;
              this.values.forEach(function (e, n) {
                var r = t.unsubscribers.get(n);
                r && r();
              });
            }),
            t
          );
        })(),
        O = new Set([
          "dragOriginX",
          "dragOriginY",
          "_dragValueX",
          "_dragValueY",
        ]),
        x = function (t) {
          var e = v(function () {
            var e = new b();
            for (var n in t) g(t[n]) && !O.has(n) && e.set(n, t[n]);
            return e;
          });
          return (
            e.setOnUpdate(t.onUpdate),
            e.setTransformTemplate(t.transformTemplate),
            e
          );
        },
        j =
          ((m = function (t) {
            return t.get();
          }),
          function (t) {
            var e = {};
            return (
              t.forEach(function (t, n) {
                return (e[n] = m(t));
              }),
              e
            );
          }),
        E = new Set(["originX", "originY", "originZ"]),
        w = function (t) {
          return E.has(t);
        },
        S = function (t, e, n, i) {
          var o = j(t),
            a = n.transformTemplate;
          return (
            a && (o.transform = e.transform ? a({}, e.transform) : a),
            Object(s.b)(Object(r.a)(Object(r.a)({}, e), o), !i)
          );
        },
        T = function () {
          return {};
        },
        C = function (t, e, n) {
          void 0 === e && (e = {});
          var r = {},
            i = v(T);
          for (var o in i) void 0 === e[o] && (t.delete(o), (i[o] = void 0));
          for (var o in e) {
            var a = e[o];
            if (g(a)) t.set(o, a);
            else if (Object(s.e)(o) || w(o)) {
              if (t.has(o)) {
                if (a !== i[o]) t.get(o).set(a);
              } else t.set(o, d(a));
              i[o] = a;
            } else r[o] = a;
          }
          return n ? n(r) : r;
        },
        P = function (t) {
          return Array.isArray(t);
        },
        A = function (t) {
          return Boolean(t && "object" == typeof t && t.mix && t.toValue);
        },
        D = function (t) {
          return P(t) ? t[t.length - 1] || 0 : t;
        },
        k = [
          u.g,
          u.j,
          u.h,
          u.d,
          u.n,
          u.m,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        R = Object(r.d)(k, [u.b, u.c]),
        V = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        M = function (t) {
          return k.find(V(t));
        },
        L = function (t) {
          return R.find(V(t));
        },
        F = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        I = function (t) {
          return {
            type: "spring",
            stiffness: 700,
            damping: 0 === t ? 100 : 35,
          };
        },
        B = function () {
          return { ease: "linear", duration: 0.3 };
        },
        U = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        H = {
          x: F,
          y: F,
          z: F,
          rotate: F,
          rotateX: F,
          rotateY: F,
          rotateZ: F,
          scaleX: I,
          scaleY: I,
          scale: I,
          opacity: B,
          backgroundColor: B,
          color: B,
          default: I,
        },
        N = function (t) {
          var e = t.to,
            n = t.duration;
          return Object(c.a)(function (t) {
            var r = t.update,
              i = t.complete;
            r(e), n ? Object(c.b)(n).start({ complete: i }) : i();
          });
        },
        X = function (t) {
          if (Array.isArray(t)) {
            Object(l.a)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = t[0],
              n = t[1],
              r = t[2],
              i = t[3];
            return Object(f.cubicBezier)(e, n, r, i);
          }
          return "string" == typeof t
            ? (Object(l.a)(void 0 !== f[t], "Invalid easing type '" + t + "'"),
              f[t])
            : t;
        },
        Y = function (t) {
          return Array.isArray(t) && "number" != typeof t[0];
        },
        G = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" != typeof e && !Array.isArray(e)) ||
              !("string" != typeof e || !u.c.test(e) || e.startsWith("url(")))
          );
        },
        z = function (t) {
          return 1e3 * t;
        },
        _ = { tween: c.f, spring: c.e, keyframes: c.d, inertia: c.c, just: N },
        q = {
          tween: function (t) {
            if (t.ease) {
              var e = Y(t.ease) ? t.ease[0] : t.ease;
              t.ease = X(e);
            }
            return t;
          },
          keyframes: function (t) {
            var e = t.from,
              n =
                (t.to, t.velocity, Object(r.c)(t, ["from", "to", "velocity"]));
            if (n.values && null === n.values[0]) {
              var i = Object(r.d)(n.values);
              (i[0] = e), (n.values = i);
            }
            return (
              n.ease && (n.easings = Y(n.ease) ? n.ease.map(X) : X(n.ease)),
              (n.ease = f.linear),
              n
            );
          },
        },
        W = function (t, e, n) {
          var i = n ? n.delay : 0;
          if (
            void 0 === n ||
            !(function (t) {
              t.when,
                t.delay,
                t.delayChildren,
                t.staggerChildren,
                t.staggerDirection;
              var e = Object(r.c)(t, [
                "when",
                "delay",
                "delayChildren",
                "staggerChildren",
                "staggerDirection",
              ]);
              return Object.keys(e).length;
            })(n)
          )
            return Object(r.a)(
              { delay: i },
              (function (t, e) {
                var n;
                return (
                  (n = P(e) ? U : H[t] || H.default),
                  Object(r.a)({ to: e }, n(e))
                );
              })(t, e)
            );
          var o = n[t] || n.default || n;
          return !1 === o.type
            ? {
                delay: o.hasOwnProperty("delay") ? o.delay : i,
                to: P(e) ? e[e.length - 1] : e,
                type: "just",
              }
            : P(e)
            ? Object(r.a)(
                Object(r.a)(
                  { values: e, duration: 0.8, delay: i, ease: "linear" },
                  o
                ),
                { type: "keyframes" }
              )
            : Object(r.a)({ type: "tween", to: e, delay: i }, o);
        },
        Z = function (t, e, n, i) {
          var o = e.get(),
            a = G(t, o),
            s = G(t, n);
          Object(l.b)(
            a === s,
            "You are trying to animate " +
              t +
              ' from "' +
              o +
              '" to "' +
              n +
              '". ' +
              o +
              " is not an animatable value - to enable this animation set " +
              o +
              " to a value animatable to " +
              n +
              " via the `style` property."
          );
          var u,
            c = W(t, n, i),
            f = c.type,
            p = void 0 === f ? "tween" : f,
            h = Object(r.c)(c, ["type"]),
            d = a && s ? _[p] : N,
            v = (function (t, e) {
              return q[t] ? q[t](e) : e;
            })(p, Object(r.a)({ from: o, velocity: e.getVelocity() }, h));
          return (
            ((u = v).hasOwnProperty("duration") ||
              u.hasOwnProperty("repeatDelay")) &&
              (v.duration && (v.duration = z(v.duration)),
              v.repeatDelay && (v.repeatDelay = z(v.repeatDelay))),
            [d, v]
          );
        };
      function K(t, e, n, i) {
        void 0 === i && (i = {});
        var o = i.delay,
          a = void 0 === o ? 0 : o,
          s = Object(r.c)(i, ["delay"]);
        return e.start(function (i) {
          var o,
            u = Z(t, e, n, s),
            l = u[0],
            f = u[1],
            p = f.delay,
            h = Object(r.c)(f, ["delay"]);
          void 0 !== p && (a = p);
          var d = function () {
            var t = l(h);
            o = t.start({
              update: function (t) {
                return e.set(t);
              },
              complete: i,
            });
          };
          return (
            a ? (o = Object(c.b)(z(a)).start({ complete: d })) : d(),
            function () {
              o && o.stop();
            }
          );
        });
      }
      var J = (function () {
        function t(t) {
          var e = this,
            n = t.values,
            r = t.readValueFromSource,
            i = t.makeTargetAnimatable;
          (this.props = {}),
            (this.variants = {}),
            (this.baseTarget = {}),
            (this.overrides = []),
            (this.resolvedOverrides = []),
            (this.activeOverrides = new Set()),
            (this.isAnimating = new Set()),
            (this.hasValue = function (t) {
              return !e.values.has(t);
            }),
            (this.values = n),
            (this.readValueFromSource = r),
            (this.makeTargetAnimatable = i),
            this.values.forEach(function (t, n) {
              return (e.baseTarget[n] = t.get());
            });
        }
        return (
          (t.prototype.setProps = function (t) {
            this.props = t;
          }),
          (t.prototype.setVariants = function (t) {
            t && (this.variants = t);
          }),
          (t.prototype.setDefaultTransition = function (t) {
            t && (this.defaultTransition = t);
          }),
          (t.prototype.setValues = function (t, e) {
            var n = void 0 === e ? {} : e,
              i = n.isActive,
              o = void 0 === i ? new Set() : i,
              a = n.priority,
              s = this.resolveVariant(t),
              u = s.target,
              c = s.transitionEnd;
            for (var l in (u = this.transformValues(
              Object(r.a)(Object(r.a)({}, u), c)
            ))) {
              if (o.has(l)) return;
              if ((o.add(l), u)) {
                var f = D(u[l]);
                if (this.values.has(l)) {
                  var p = this.values.get(l);
                  p && p.set(f);
                } else this.values.set(l, d(f));
                a || (this.baseTarget[l] = f);
              }
            }
          }),
          (t.prototype.transformValues = function (t) {
            var e = this.props.transformValues;
            return e ? e(t) : t;
          }),
          (t.prototype.checkForNewValues = function (t) {
            var e = Object.keys(t).filter(this.hasValue),
              n = e.length;
            if (n)
              for (var r = 0; r < n; r++) {
                var i = e[r],
                  o = t[i],
                  a = null;
                Array.isArray(o) && (a = o[0]),
                  null === a &&
                    ((a = this.readValueFromSource(i)),
                    Object(l.a)(
                      null !== a,
                      'No initial value for "' +
                        i +
                        '" can be inferred. Ensure an initial value for "' +
                        i +
                        '" is defined on the component.'
                    )),
                  "string" == typeof a && /^\-?\d*\.?\d+$/.test(a)
                    ? (a = parseFloat(a))
                    : !L(a) && u.c.test(o) && (a = u.c.getAnimatableNone(o)),
                  this.values.set(i, d(a)),
                  (this.baseTarget[i] = a);
              }
          }),
          (t.prototype.resolveVariant = function (t) {
            if (!t)
              return {
                target: void 0,
                transition: void 0,
                transitionEnd: void 0,
              };
            var e, n;
            "function" == typeof t &&
              (t = t(
                this.props.custom,
                ((e = this.values),
                (n = {}),
                e.forEach(function (t, e) {
                  return (n[e] = t.get());
                }),
                n),
                (function (t) {
                  var e = {};
                  return (
                    t.forEach(function (t, n) {
                      return (e[n] = t.getVelocity());
                    }),
                    e
                  );
                })(this.values)
              ));
            var i = t.transition;
            return {
              transition: void 0 === i ? this.defaultTransition : i,
              transitionEnd: t.transitionEnd,
              target: Object(r.c)(t, ["transition", "transitionEnd"]),
            };
          }),
          (t.prototype.getHighestPriority = function () {
            return this.activeOverrides.size
              ? Math.max.apply(Math, Array.from(this.activeOverrides))
              : 0;
          }),
          (t.prototype.setOverride = function (t, e) {
            (this.overrides[e] = t),
              this.children &&
                this.children.forEach(function (n) {
                  return n.setOverride(t, e);
                });
          }),
          (t.prototype.startOverride = function (t) {
            var e = this.overrides[t];
            if (e) return this.start(e, { priority: t });
          }),
          (t.prototype.clearOverride = function (t) {
            var e = this;
            if (
              (this.children &&
                this.children.forEach(function (e) {
                  return e.clearOverride(t);
                }),
              this.overrides[t])
            ) {
              this.activeOverrides.delete(t);
              var n = this.getHighestPriority();
              if ((this.resetIsAnimating(), n))
                this.overrides[n] && this.startOverride(n);
              var r = this.resolvedOverrides[t];
              if (r) {
                var i = {};
                for (var o in this.baseTarget)
                  void 0 !== r[o] && (i[o] = this.baseTarget[o]);
                this.onStart(),
                  this.animate(i).then(function () {
                    return e.onComplete();
                  });
              }
            }
          }),
          (t.prototype.apply = function (t) {
            return Array.isArray(t)
              ? this.applyVariantLabels(t)
              : "string" == typeof t
              ? this.applyVariantLabels([t])
              : void this.setValues(t);
          }),
          (t.prototype.applyVariantLabels = function (t) {
            var e = this,
              n = new Set();
            Object(r.d)(t)
              .reverse()
              .forEach(function (r) {
                var i = e.resolveVariant(e.variants[r]),
                  o = i.target,
                  a = i.transitionEnd;
                a && e.setValues(a, { isActive: n }),
                  o && e.setValues(o, { isActive: n }),
                  e.children &&
                    e.children.size &&
                    e.children.forEach(function (e) {
                      return e.applyVariantLabels(t);
                    });
              });
          }),
          (t.prototype.start = function (t, e) {
            var n,
              r,
              i = this;
            return (
              void 0 === e && (e = {}),
              e.priority && this.activeOverrides.add(e.priority),
              this.resetIsAnimating(e.priority),
              (r = t),
              (n = Array.isArray(r)
                ? this.animateVariantLabels(t, e)
                : "string" == typeof t
                ? this.animateVariant(t, e)
                : this.animate(t, e)),
              this.onStart(),
              n.then(function () {
                return i.onComplete();
              })
            );
          }),
          (t.prototype.animate = function (t, e) {
            var n = this,
              i = void 0 === e ? {} : e,
              o = i.delay,
              a = void 0 === o ? 0 : o,
              s = i.priority,
              u = void 0 === s ? 0 : s,
              c = i.transitionOverride,
              l = this.resolveVariant(t),
              f = l.target,
              p = l.transition,
              h = l.transitionEnd;
            if ((c && (p = c), !f)) return Promise.resolve();
            (f = this.transformValues(f)),
              h && (h = this.transformValues(h)),
              this.checkForNewValues(f);
            var d = this.transformValues(
              (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null != (r = $(a, e))
                      ? r
                      : null === (i = n.get(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(f, p, this.values)
            );
            if (this.makeTargetAnimatable) {
              var v = this.makeTargetAnimatable(f, d, h);
              (f = v.target), (h = v.transitionEnd);
            }
            u && (this.resolvedOverrides[u] = f), this.checkForNewValues(f);
            var m = [];
            for (var g in f) {
              var y = this.values.get(g);
              if (y && f && void 0 !== f[g]) {
                var b = f[g];
                u || (this.baseTarget[g] = D(b)),
                  this.isAnimating.has(g) ||
                    (this.isAnimating.add(g),
                    m.push(K(g, y, b, Object(r.a)({ delay: a }, p))));
              }
            }
            var O = Promise.all(m);
            return h
              ? O.then(function () {
                  n.setValues(h, { priority: u });
                })
              : O;
          }),
          (t.prototype.animateVariantLabels = function (t, e) {
            var n = this,
              i = Object(r.d)(t)
                .reverse()
                .map(function (t) {
                  return n.animateVariant(t, e);
                });
            return Promise.all(i);
          }),
          (t.prototype.animateVariant = function (t, e) {
            var n = this,
              r = !1,
              i = 0,
              o = 0,
              a = 1,
              s = (e && e.priority) || 0,
              u = this.variants[t],
              c = u
                ? function () {
                    return n.animate(u, e);
                  }
                : function () {
                    return Promise.resolve();
                  },
              l = this.children
                ? function () {
                    return n.animateChildren(t, i, o, a, s);
                  }
                : function () {
                    return Promise.resolve();
                  };
            if (u && this.children) {
              var f = this.resolveVariant(u).transition;
              f &&
                ((r = f.when || r),
                (i = f.delayChildren || i),
                (o = f.staggerChildren || o),
                (a = f.staggerDirection || a));
            }
            if (r) {
              var p = "beforeChildren" === r ? [c, l] : [l, c],
                h = p[1];
              return (0, p[0])().then(h);
            }
            return Promise.all([c(), l()]);
          }),
          (t.prototype.animateChildren = function (t, e, n, r, i) {
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === r && (r = 1),
              void 0 === i && (i = 0),
              !this.children)
            )
              return Promise.resolve();
            var o = [],
              a = (this.children.size - 1) * n,
              s =
                1 === r
                  ? function (t) {
                      return t * n;
                    }
                  : function (t) {
                      return a - t * n;
                    };
            return (
              Array.from(this.children).forEach(function (n, r) {
                var a = n.animateVariant(t, { priority: i, delay: e + s(r) });
                o.push(a);
              }),
              Promise.all(o)
            );
          }),
          (t.prototype.onStart = function () {
            var t = this.props.onAnimationStart;
            t && t();
          }),
          (t.prototype.onComplete = function () {
            var t = this.props.onAnimationComplete;
            t && t();
          }),
          (t.prototype.checkOverrideIsAnimating = function (t) {
            for (var e = this.overrides.length, n = t + 1; n < e; n++) {
              var r = this.resolvedOverrides[n];
              if (r) for (var i in r) this.isAnimating.add(i);
            }
          }),
          (t.prototype.resetIsAnimating = function (t) {
            void 0 === t && (t = 0),
              this.isAnimating.clear(),
              t < this.getHighestPriority() && this.checkOverrideIsAnimating(t),
              this.children &&
                this.children.forEach(function (e) {
                  return e.resetIsAnimating(t);
                });
          }),
          (t.prototype.stop = function () {
            this.values.forEach(function (t) {
              return t.stop();
            });
          }),
          (t.prototype.addChild = function (t) {
            this.children || (this.children = new Set()),
              this.children.add(t),
              this.overrides.forEach(function (e, n) {
                e && t.setOverride(e, n);
              });
          }),
          (t.prototype.removeChild = function (t) {
            this.children && this.children.delete(t);
          }),
          (t.prototype.resetChildren = function () {
            this.children && this.children.clear();
          }),
          t
        );
      })();
      function $(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      var Q = (function () {
          function t() {
            (this.hasMounted = !1),
              (this.pendingAnimations = []),
              (this.componentControls = new Set());
          }
          return (
            (t.prototype.setVariants = function (t) {
              (this.variants = t),
                this.componentControls.forEach(function (e) {
                  return e.setVariants(t);
                });
            }),
            (t.prototype.setDefaultTransition = function (t) {
              (this.defaultTransition = t),
                this.componentControls.forEach(function (e) {
                  return e.setDefaultTransition(t);
                });
            }),
            (t.prototype.subscribe = function (t) {
              var e = this;
              return (
                this.componentControls.add(t),
                this.variants && t.setVariants(this.variants),
                this.defaultTransition &&
                  t.setDefaultTransition(this.defaultTransition),
                function () {
                  return e.componentControls.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, e) {
              var n = this;
              if (this.hasMounted) {
                var r = [];
                return (
                  this.componentControls.forEach(function (n) {
                    var i = n.start(t, { transitionOverride: e });
                    r.push(i);
                  }),
                  Promise.all(r)
                );
              }
              return new Promise(function (r) {
                n.pendingAnimations.push({ animation: [t, e], resolve: r });
              });
            }),
            (t.prototype.set = function (t) {
              return (
                Object(l.a)(
                  this.hasMounted,
                  "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
                ),
                this.componentControls.forEach(function (e) {
                  return e.apply(t);
                })
              );
            }),
            (t.prototype.stop = function () {
              this.componentControls.forEach(function (t) {
                return t.stop();
              });
            }),
            (t.prototype.mount = function () {
              var t = this;
              (this.hasMounted = !0),
                this.pendingAnimations.forEach(function (e) {
                  var n = e.animation,
                    r = e.resolve;
                  return t.start.apply(t, n).then(r);
                });
            }),
            (t.prototype.unmount = function () {
              (this.hasMounted = !1), this.stop();
            }),
            t
          );
        })(),
        tt = Object(i.createContext)(null);
      function et(t) {
        return v(function () {
          return d(t);
        });
      }
      function nt(t) {
        return t;
      }
      function rt(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function it(t, e) {
        var n = t.top,
          r = t.left,
          i = t.bottom,
          o = t.right;
        void 0 === e && (e = nt);
        var a = e({ x: r, y: n }),
          s = e({ x: o, y: i });
        return { top: a.y, left: a.x, bottom: s.y, right: s.x };
      }
      function ot(t) {
        var e = t.min;
        return (t.max - e) / 2 + e;
      }
      var at = Object(a.c)(0, 1);
      function st(t, e) {
        return rt(
          it(
            (function (t) {
              var e = t.top,
                n = t.right,
                r = t.bottom,
                i = t.left;
              return (
                e === r && ((e -= 0.5), (r += 0.5)),
                i === n && ((i -= 0.5), (n += 0.5)),
                { top: e, right: n, bottom: r, left: i }
              );
            })(t.getBoundingBox()),
            e
          )
        );
      }
      function ut(t, e) {
        var n = t.getComputedStyle(),
          r = {};
        for (var i in e) {
          var o = e[i];
          !1 !== o.read && (o.read ? (r[i] = o.read(n[i])) : (r[i] = n[i]));
        }
        return (
          Object(l.b)(
            "inline" !== n.display,
            "Magic components can't be display: inline, as inline elements don't accept a transform. Try inline-block instead."
          ),
          r
        );
      }
      function ct(t, e, n) {
        return { layout: st(t, n), style: ut(t, e) };
      }
      function lt(t, e, n, r) {
        var i = e.max - e.min,
          o = n.max - n.min;
        (t.scale = i / o),
          (t.origin =
            void 0 !== r
              ? r
              : (function (t, e) {
                  var n = 0.5,
                    r = t.max - t.min,
                    i = e.max - e.min;
                  return (
                    r > i
                      ? (n = Object(a.j)(t.min, t.max - i, e.min))
                      : i > r && (n = Object(a.j)(e.min, e.max - r, t.min)),
                    at(n)
                  );
                })(e, n)),
          (t.originPoint = n.min + t.origin * o),
          (t.translate = (function (t, e, n) {
            return Object(a.f)(t.min, t.max, n) - Object(a.f)(e.min, e.max, n);
          })(e, n, t.origin)),
          Ot(t.scale, 1, 1e-4) && (t.scale = 1),
          Ot(t.translate) && (t.translate = 0);
      }
      function ft(t, e) {
        return (
          (function (t, e) {
            var n = t.scale,
              r = t.originPoint;
            return r + n * (e - r);
          })(e, t) + e.translate
        );
      }
      function pt(t, e) {
        (t.min = ft(t.min, e)), (t.max = ft(t.max, e));
      }
      function ht(t, e) {
        pt(t.x, e.x), pt(t.y, e.y);
      }
      function dt(t, e) {
        return void 0 === e
          ? t
          : (function (t) {
              var e = t instanceof h ? t.get() : t;
              return A(e) ? e.toValue() : e;
            })(e);
      }
      var vt = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function mt(t, e, n, r, i) {
        (e[t].min = Object(a.f)(n[t].min, r[t].min, i)),
          (e[t].max = Object(a.f)(n[t].max, r[t].max, i));
      }
      var gt = {
          snapshotTarget: function (t) {
            return t.snapshotTarget();
          },
          startAnimation: function (t) {
            return t.startAnimation();
          },
        },
        yt = function () {
          var t = new Set();
          return {
            add: function (e) {
              return t.add(e);
            },
            flush: function (e) {
              var n = void 0 === e ? gt : e,
                r = n.snapshotTarget,
                i = n.startAnimation;
              if (t.size) {
                var o = Array.from(t).sort(bt);
                o.forEach(function (t) {
                  return t.resetStyles();
                }),
                  o.forEach(r),
                  o.forEach(i),
                  t.clear();
              }
            },
          };
        },
        bt = function (t, e) {
          return t.depth - e.depth;
        };
      function Ot(t, e, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === n && (n = 0.01),
          Object(a.d)(t, e) < n
        );
      }
      function xt(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      var jt = Object(i.createContext)({ static: !1, magicDepth: -1 }),
        Et = function (t) {
          return "string" == typeof t || Array.isArray(t);
        },
        wt = function (t) {
          return t instanceof Q;
        },
        St = function (t, e, n, o, a) {
          void 0 === o && (o = !1);
          var s,
            u,
            c = a.initial,
            l = a.animate,
            f = a.variants,
            p = a.whileTap,
            h = a.whileHover,
            d = a.layoutId,
            m = Object(i.useContext)(tt);
          void 0 !== (null === (s = m) || void 0 === s ? void 0 : s.initial) &&
            (c = m.initial),
            !1 !== c || wt(l) ? "boolean" != typeof c && (u = c) : (u = l);
          var g = Object(i.useRef)(!1),
            y = f || Et(l) || Et(p) || Et(h) || wt(l),
            b = Et(u) ? u : t.initial,
            O = Et(l) ? l : t.animate,
            x = o ? b : null,
            j = y && Et(O) ? O : null,
            E = v(Tt),
            w = Object(i.useRef)(Object(r.d)(t.magicDeltas || [], [E])),
            S = et(0),
            T = Object(i.useMemo)(
              function () {
                return {
                  controls: y ? e : t.controls,
                  initial: b,
                  animate: O,
                  values: n,
                  hasMounted: g,
                  isReducedMotion: t.isReducedMotion,
                  magicDepth:
                    l || void 0 !== d ? t.magicDepth + 1 : t.magicDepth,
                  magicDelta: E,
                  magicDeltas: w.current,
                  magicProgress: S,
                };
              },
              [x, j, t.isReducedMotion, l, d]
            );
          return (
            (T.static = o),
            (function (t, e) {
              void 0 === e && (e = !1);
              var n = Object(i.useRef)(!0);
              (!e || (e && n.current)) && t(), (n.current = !1);
            })(function () {
              var n = u || t.initial;
              n && e.apply(n);
            }, !o),
            Object(i.useEffect)(function () {
              g.current = !0;
            }, []),
            T
          );
        };
      function Tt() {
        return {
          x: Object(r.a)({}, vt),
          y: Object(r.a)({}, vt),
          isVisible: !0,
        };
      }
      var Ct = function (t) {
          var e = t.animate,
            n = t.variants,
            r = t.inherit;
          return (void 0 === r || r) && !!n && (!e || e instanceof Q);
        },
        Pt = function (t) {
          return "object" == typeof t && t.hasOwnProperty("current");
        },
        At = null,
        Dt = {
          isOpen: function () {
            return null !== At;
          },
          open: function () {
            Object(l.a)(!At, "Sync render session already open"), (At = []);
          },
          flush: function () {
            Object(l.a)(null !== At, "No sync render session found"),
              At &&
                At.forEach(function (t) {
                  return t.render();
                }),
              (At = null);
          },
          push: function (t) {
            Object(l.a)(null !== At, "No sync render session found"),
              At && At.push(t);
          },
        };
      function kt(t, e, n) {
        return (
          e.set(t, n),
          function () {
            return e.delete(t);
          }
        );
      }
      var Rt = (function () {
          function t(t, e) {
            var n = this;
            (this.hasMounted = !1),
              (this.mountSubscriptions = new Map()),
              (this.unmountSubscriptions = new Map()),
              (this.ref = function (t) {
                null === t || n.hasMounted
                  ? null === t && n.unmount()
                  : n.mount(t);
              }),
              (this.externalRef = e),
              (this.stylerConfig = t);
          }
          return (
            (t.prototype.mount = function (t) {
              var e = this;
              Object(l.a)(
                t instanceof Element,
                "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef"
              ),
                (this.hasMounted = !0),
                (this.current = t),
                (this.styler = Object(s.d)(t, this.stylerConfig)),
                this.mountSubscriptions.forEach(function (t) {
                  return t(e);
                }),
                this.mountSubscriptions.clear(),
                this.externalRef &&
                  ("function" == typeof this.externalRef
                    ? this.externalRef(t)
                    : Pt(this.externalRef) && (this.externalRef.current = t));
            }),
            (t.prototype.unmount = function () {
              var t = this;
              this.unmountSubscriptions.forEach(function (e) {
                return e(t);
              }),
                this.unmountSubscriptions.clear(),
                delete this.current,
                delete this.styler,
                this.externalRef &&
                  ("function" == typeof this.externalRef
                    ? this.externalRef(null)
                    : Pt(this.externalRef) &&
                      (this.externalRef.current = null));
            }),
            (t.prototype.onMount = function (t, e) {
              return kt(t, this.mountSubscriptions, e);
            }),
            (t.prototype.onUnmount = function (t, e) {
              return kt(t, this.unmountSubscriptions, e);
            }),
            (t.prototype.setStyle = function (t, e) {
              this.styler && this.styler.set(t, e);
            }),
            (t.prototype.getStyle = function (t) {
              return (
                Object(l.a)(
                  this.hasMounted,
                  "Attempting to read styles of an unmounted element"
                ),
                this.styler && this.styler.get(t)
              );
            }),
            (t.prototype.getInstance = function () {
              return this.current;
            }),
            (t.prototype.getBoundingBox = function () {
              return this.current.getBoundingClientRect();
            }),
            (t.prototype.getComputedStyle = function () {
              return window.getComputedStyle(this.current);
            }),
            (t.prototype.render = function (t) {
              void 0 === t && (t = !1), this.styler.render(t);
            }),
            t
          );
        })(),
        Vt = Symbol("self");
      var Mt = Object(i.createContext)({
        transformPagePoint: function (t) {
          return t;
        },
        autoValues: {},
        features: [],
      });
      var Lt = function (t) {
          var e = t.getValueControlsConfig,
            n = t.loadFeatures,
            o = t.renderComponent;
          return Object(i.forwardRef)(function (t, a) {
            var s = Object(i.useContext)(jt),
              u = s.static || t.static || !1,
              c = x(t),
              l = C(c, t.style, t.transformValues),
              f = Ct(t),
              p = (function (t, e, n, r) {
                return (
                  void 0 === n && (n = !0),
                  v(function () {
                    var i = new Rt(
                      {
                        preparseOutput: !1,
                        enableHardwareAcceleration: e,
                        allowTransformNone: n,
                      },
                      r
                    );
                    return (
                      i.onMount(Vt, function () {
                        t.mount(function (t, e) {
                          i.setStyle(t, e), Dt.isOpen() && Dt.push(i);
                        });
                      }),
                      i.onUnmount(Vt, function () {
                        return t.unmount();
                      }),
                      i
                    );
                  })
                );
              })(c, !u, t.allowTransformNone, a),
              h = (function (t, e, n) {
                var o = e.variants,
                  a = e.transition,
                  s = Object(i.useContext)(jt).controls,
                  u = Object(i.useContext)(tt),
                  c = v(function () {
                    return new J(t);
                  });
                return (
                  (u && !u.isPresent) ||
                    (c.resetChildren(),
                    c.setProps(e),
                    c.setVariants(o),
                    c.setDefaultTransition(a)),
                  Object(i.useEffect)(function () {
                    n && s && s.addChild(c);
                  }),
                  Object(i.useEffect)(function () {
                    return function () {
                      e.onAnimationComplete;
                      var t = Object(r.c)(e, ["onAnimationComplete"]);
                      c.setProps(t), s && s.removeChild(c);
                    };
                  }, []),
                  c
                );
              })(
                v(function () {
                  return e(p, c);
                }),
                t,
                f
              ),
              d = St(s, h, c, u, t),
              m = Object(i.useContext)(Mt),
              g = u ? null : n(p, c, t, d, s, h, f, m),
              y = o(p, l, c, t, u);
            return Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(jt.Provider, { value: d }, y),
              g
            );
          });
        },
        Ft = [
          "animate",
          "circle",
          "clipPath",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "tspan",
          "use",
          "view",
        ];
      function It(t) {
        return Object(i.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      function Bt(t, e, n, r) {
        if (n)
          return (
            t.addEventListener(e, n, r),
            function () {
              return t.removeEventListener(e, n, r);
            }
          );
      }
      function Ut(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Ht(t) {
        return !!t.touches;
      }
      var Nt = { pageX: 0, pageY: 0 };
      function Xt(t) {
        var e = t.touches[0] || t.changedTouches[0] || Nt;
        return { x: e.pageX, y: e.pageY };
      }
      function Yt(t) {
        var e = t.pageX,
          n = void 0 === e ? 0 : e,
          r = t.pageY;
        return { x: n, y: void 0 === r ? 0 : r };
      }
      function Gt(t) {
        return { point: Ht(t) ? Xt(t) : Yt(t) };
      }
      var zt,
        _t = function (t, e) {
          if ((void 0 === e && (e = !1), t)) {
            var n = function (e) {
              return t(e, Gt(e));
            };
            return e
              ? (function (t) {
                  if (t)
                    return function (e) {
                      var n = e instanceof MouseEvent;
                      (!n || (n && 0 === e.button)) && t(e);
                    };
                })(n)
              : n;
          }
        },
        qt = "undefined" != typeof window,
        Wt = function () {
          return qt && null === window.onpointerdown;
        },
        Zt = function () {
          return qt && null === window.ontouchstart;
        },
        Kt = function () {
          return qt && null === window.onmousedown;
        },
        Jt = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        $t = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function Qt(t) {
        return Wt() ? t : Zt() ? $t[t] : Kt() ? Jt[t] : t;
      }
      function te(t, e, n, r) {
        return Bt(t, Qt(e), _t(n, "pointerdown" === e), r);
      }
      function ee(t, e, n, r) {
        return (function (t, e, n, r) {
          Object(i.useEffect)(
            function () {
              var i = t.current;
              if (n && i) return Bt(i, e, n, r);
            },
            [t, e, n, r]
          );
        })(t, Qt(e), _t(n, "pointerdown" === e), r);
      }
      !(function (t) {
        (t.subtract = function (t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }),
          (t.relativeTo = function (t) {
            var e;
            return function (n) {
              var r = n.x,
                i = n.y,
                o =
                  void 0 !== e
                    ? e
                    : (e =
                        "string" == typeof t ? document.getElementById(t) : t);
              if (o) {
                var a = o.getBoundingClientRect();
                return {
                  x: r - a.left - window.scrollX,
                  y: i - a.top - window.scrollY,
                };
              }
            };
          });
      })(zt || (zt = {}));
      var ne = !1;
      "undefined" != typeof window &&
        document.addEventListener(
          "touchmove",
          function (t) {
            ne && t.preventDefault();
          },
          { passive: !1 }
        );
      var re = function () {
          return (ne = !1);
        },
        ie = (function () {
          function t(t, e, n) {
            var i = this,
              s = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                  var t = ae(i.lastMoveEventInfo, i.history),
                    e = null !== i.startEvent,
                    n = Object(a.d)(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var s = t.point,
                      u = Object(o.c)().timestamp;
                    i.history.push(
                      Object(r.a)(Object(r.a)({}, s), { timestamp: u })
                    );
                    var c = i.handlers,
                      l = c.onStart,
                      f = c.onMove;
                    e ||
                      (l && l(i.lastMoveEvent, t),
                      (i.startEvent = i.lastMoveEvent)),
                      f && f(i.lastMoveEvent, t);
                  }
                }
              }),
              !(Ht(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = s);
              var u = oe(Gt(t), this.transformPagePoint),
                c = u.point,
                l = Object(o.c)().timestamp;
              this.history = [
                Object(r.a)(Object(r.a)({}, c), { timestamp: l }),
              ];
              var f = e.onSessionStart;
              f && f(t, ae(u, this.history));
              var p = te(window, "pointermove", function (t, e) {
                  return i.handlePointerMove(t, e);
                }),
                h = te(window, "pointerup", function (t, e) {
                  return i.handlePointerUp(t, e);
                });
              this.removeListeners = function () {
                p && p(), h && h();
              };
            }
          }
          return (
            (t.prototype.handlePointerMove = function (t, e) {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = oe(e, this.transformPagePoint)),
                Ut(t) && 0 === t.buttons
                  ? this.handlePointerUp(t, e)
                  : o.b.update(this.updatePoint, !0);
            }),
            (t.prototype.handlePointerUp = function (t, e) {
              this.end();
              var n = this.handlers.onEnd;
              if (n) {
                var r = ae(oe(e, this.transformPagePoint), this.history);
                n && n(t, r);
              }
            }),
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                o.a.update(this.updatePoint),
                re();
            }),
            t
          );
        })();
      function oe(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ae(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: zt.subtract(n, ue(e)),
          offset: zt.subtract(n, se(e)),
          velocity: ce(e, 0.1),
        };
      }
      function se(t) {
        return t[0];
      }
      function ue(t) {
        return t[t.length - 1];
      }
      function ce(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = ue(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > z(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      var le = function t(e, n) {
          return !!n && (e === n || t(e, n.parentElement));
        },
        fe = ["whileHover", "whileTap", "whileDrag"],
        pe = function (t) {
          return fe.indexOf(t) + 1;
        };
      function he(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var de = he("dragHorizontal"),
        ve = he("dragVertical");
      function me(t) {
        var e = !1;
        if ("y" === t) e = ve();
        else if ("x" === t) e = de();
        else {
          var n = de(),
            r = ve();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      var ge = pe("whileTap");
      var ye = pe("whileHover"),
        be = function (t) {
          return function (e, n) {
            Ut(e) && t(e, n);
          };
        };
      function Oe(t, e) {
        !(function (t, e) {
          var n = t.onPan,
            r = t.onPanStart,
            o = t.onPanEnd,
            a = t.onPanSessionStart,
            s = n || r || o || a,
            u = Object(i.useRef)(null),
            c = Object(i.useContext)(Mt).transformPagePoint,
            l = {
              onSessionStart: a,
              onStart: r,
              onMove: n,
              onEnd: function (t, e) {
                (u.current = null), o && o(t, e);
              },
            };
          null !== u.current && u.current.updateHandlers(l),
            ee(
              e,
              "pointerdown",
              s &&
                function (t) {
                  u.current = new ie(t, l, { transformPagePoint: c });
                }
            ),
            It(function () {
              return u.current && u.current.end();
            });
        })(t, e),
          (function (t, e) {
            var n = t.onTap,
              r = t.onTapStart,
              o = t.onTapCancel,
              a = t.whileTap,
              s = t.controls,
              u = n || r || o || a,
              c = Object(i.useRef)(!1),
              l = Object(i.useRef)(null);
            function f() {
              l.current && l.current(), (l.current = null);
            }
            a && s && s.setOverride(a, ge);
            var p = Object(i.useRef)(null);
            (p.current = function (t, r) {
              var i = e.current;
              if ((f(), c.current && i)) {
                (c.current = !1), s && a && s.clearOverride(ge);
                var u = me(!0);
                u && (u(), le(i, t.target) ? n && n(t, r) : o && o(t, r));
              }
            }),
              ee(
                e,
                "pointerdown",
                u
                  ? function (t, n) {
                      f(),
                        (l.current = te(window, "pointerup", function (t, e) {
                          return p.current(t, e);
                        })),
                        e.current &&
                          !c.current &&
                          ((c.current = !0),
                          r && r(t, n),
                          s && a && s.startOverride(ge));
                    }
                  : void 0
              ),
              It(f);
          })(t, e),
          (function (t, e) {
            var n = t.whileHover,
              r = t.onHoverStart,
              i = t.onHoverEnd,
              o = t.controls;
            n && o && o.setOverride(n, ye),
              ee(
                e,
                "pointerenter",
                be(function (t, e) {
                  r && r(t, e), n && o && o.startOverride(ye);
                })
              ),
              ee(
                e,
                "pointerleave",
                be(function (t, e) {
                  i && i(t, e), n && o && o.clearOverride(ye);
                })
              );
          })(t, e);
      }
      var xe = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        je = [
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onPanSessionStart",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileTap",
          "whileHover",
          "onHoverStart",
          "onHoverEnd",
        ],
        Ee = {
          key: "gestures",
          shouldRender: function (t) {
            return je.some(function (e) {
              return t.hasOwnProperty(e);
            });
          },
          Component: xe(function (t) {
            var e = t.nativeElement;
            Oe(Object(r.c)(t, ["nativeElement"]), e);
          }),
        },
        we = new WeakMap(),
        Se = (function () {
          function t(t) {
            var e = t.nativeElement,
              n = t.values,
              r = t.controls;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = {}),
              (this.point = {}),
              (this.origin = { x: d(0), y: d(0) }),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.prev = { x: 0, y: 0 }),
              (this.nativeElement = e),
              (this.values = n),
              (this.controls = r),
              we.set(e, this);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor;
              void 0 !== r && r && this.snapToCursor(t);
              var i = this.props.transformPagePoint;
              this.panSession = new ie(
                t,
                {
                  onSessionStart: function () {
                    (ne = !0), n.stopMotion();
                  },
                  onStart: function (t, e) {
                    n.resolveDragConstraints(),
                      Te(function (t) {
                        var e = n.point[t];
                        e && n.origin[t].set(e.get());
                      });
                    var r = n.props,
                      i = r.drag,
                      o = r.dragPropagation;
                    if (
                      !i ||
                      o ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = me(i)),
                      n.openGlobalLock)
                    ) {
                      (n.isDragging = !0), (n.currentDirection = null);
                      var a = n.props.onDragStart;
                      a && a(t, Ce(e, n.point));
                    }
                  },
                  onMove: function (t, e) {
                    var r = n.props,
                      i = r.dragPropagation,
                      o = r.dragDirectionLock;
                    if (i || n.openGlobalLock) {
                      var a = e.offset;
                      if (o && null === n.currentDirection) {
                        if (
                          ((n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10);
                            var n = null;
                            Math.abs(t.y) > e
                              ? (n = "y")
                              : Math.abs(t.x) > e && (n = "x");
                            return n;
                          })(a)),
                          null !== n.currentDirection)
                        ) {
                          var s = n.props.onDirectionLock;
                          s && s(n.currentDirection);
                        }
                      } else {
                        n.updatePoint("x", a), n.updatePoint("y", a);
                        var u = n.props.onDrag;
                        u && u(t, Ce(e, n.point));
                      }
                    }
                  },
                  onEnd: function (t, e) {
                    n.stop(t, e);
                  },
                },
                { transformPagePoint: i }
              );
            }),
            (t.prototype.resolveDragConstraints = function () {
              if (this.constraintsNeedResolution) {
                var t = this.props,
                  e = t.dragConstraints,
                  n = t.onMeasureDragConstraints,
                  r = t.transformPagePoint,
                  i = e.current;
                if (
                  ((this.constraints = (function (t, e, n, r) {
                    Object(l.a)(
                      null !== t && null !== e,
                      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                    );
                    var i = De(t, r),
                      o = e.style.transform;
                    e.style.transform = "none";
                    var a = De(e, r);
                    return (
                      (e.style.transform = o),
                      (function (t, e) {
                        return { x: Ae(t.x, e.x), y: Ae(t.y, e.y) };
                      })(i, a)
                    );
                  })(i, this.nativeElement.getInstance(), this.point, r)),
                  n)
                ) {
                  var o = n(
                    (function (t) {
                      var e = t.x,
                        n = t.y;
                      return {
                        top: n.min,
                        bottom: n.max,
                        left: e.min,
                        right: e.max,
                      };
                    })(this.constraints)
                  );
                  o && (this.constraints = rt(o));
                }
                this.applyConstraintsToPoint();
              }
            }),
            (t.prototype.cancelDrag = function () {
              re(),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null));
            }),
            (t.prototype.stop = function (t, e) {
              var n;
              null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null);
              var r = this.isDragging;
              if ((this.cancelDrag(), r)) {
                var i = this.props,
                  o = i.dragMomentum,
                  a = i.dragElastic,
                  s = i.onDragEnd;
                if (o || a) {
                  var u = e.velocity;
                  this.animateDragEnd(u);
                } else this.recordBoxInfo(this.constraints);
                s && s(t, Ce(e, this.point));
              }
            }),
            (t.prototype.recordBoxInfo = function (t) {
              t && (this.prevConstraints = t),
                this.point.x && (this.prev.x = this.point.x.get()),
                this.point.y && (this.prev.y = this.point.y.get());
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this,
                n = this.props.transformPagePoint,
                r = Gt(t).point,
                i = De(this.nativeElement.getInstance(), n),
                o = ot(i.x) + window.scrollX,
                a = ot(i.y) + window.scrollY,
                s = { x: r.x - o, y: r.y - a };
              Te(function (t) {
                var n = e.point[t];
                n && e.origin[t].set(n.get());
              }),
                this.updatePoint("x", s),
                this.updatePoint("y", s);
            }),
            (t.prototype.setPoint = function (t, e) {
              this.point[t] = e;
            }),
            (t.prototype.updatePoint = function (t, e) {
              var n = this.props,
                r = n.drag,
                i = n.dragElastic,
                o = this.point[t];
              if (Pe(t, r, this.currentDirection) && o) {
                var a = ke(t, this.origin[t].get() + e[t], this.constraints, i);
                o.set(a);
              }
            }),
            (t.prototype.updateProps = function (t) {
              var e = this,
                n = t.drag,
                i = void 0 !== n && n,
                o = t.dragDirectionLock,
                a = void 0 !== o && o,
                s = t.dragPropagation,
                u = void 0 !== s && s,
                c = t.dragConstraints,
                l = void 0 !== c && c,
                f = t.dragElastic,
                p = void 0 === f || f,
                h = t.dragMomentum,
                d = void 0 === h || h,
                v = Object(r.c)(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = Object(r.a)(
                {
                  drag: i,
                  dragDirectionLock: a,
                  dragPropagation: u,
                  dragConstraints: l,
                  dragElastic: p,
                  dragMomentum: d,
                },
                v
              );
              var m = v._dragValueX,
                g = v._dragValueY,
                y = v.dragOriginX,
                b = v.dragOriginY;
              y && (this.origin.x = y),
                b && (this.origin.y = b),
                Te(function (t) {
                  if (Pe(t, i, e.currentDirection)) {
                    var n = "x" === t ? m : g;
                    e.setPoint(t, n || e.values.get(t, 0));
                  }
                }),
                (this.constraintsNeedResolution = Pt(l)),
                this.constraintsNeedResolution
                  ? (this.constraints = this.constraints || !1)
                  : (this.constraints = !(!l || !1 === l) && rt(l));
            }),
            (t.prototype.applyConstraintsToPoint = function () {
              var t = this;
              return Te(function (e) {
                var n = t.point[e];
                n && !n.isAnimating() && ke(e, n, t.constraints, 0);
              });
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n._dragValueX,
                c = n._dragValueY,
                l = n._dragTransitionControls,
                f = Te(function (n) {
                  var f;
                  if (Pe(n, i, e.currentDirection)) {
                    var p = e.constraints ? e.constraints[n] : {},
                      h = a ? 200 : 1e6,
                      d = a ? 40 : 1e7,
                      v = l || e.controls,
                      m = Object(r.a)(
                        Object(r.a)(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: h,
                            bounceDamping: d,
                            timeConstant: 750,
                            restDelta: 1,
                          },
                          s
                        ),
                        p
                      ),
                      g = "x" === n ? u : c;
                    return g
                      ? K(n, g, 0, m)
                      : v.start((((f = {})[n] = 0), (f.transition = m), f));
                  }
                });
              return Promise.all(f).then(function () {
                e.recordBoxInfo(e.constraints), e.scalePoint();
                var t = e.props.onDragTransitionEnd;
                t && t();
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              Te(function (e) {
                var n = t.point[e];
                n && n.stop();
              });
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.dragConstraints,
                r = e.transformPagePoint;
              if (Pt(n)) {
                var i = De(n.current, r),
                  o = De(this.nativeElement.getInstance(), r),
                  a = function (e) {
                    var n = t.point[e];
                    if (n) {
                      if (n.isAnimating())
                        return n.stop(), void t.recordBoxInfo();
                      var r = t.prevConstraints[e],
                        a = r.min,
                        s = r.max - a,
                        u = i[e].max - i[e].min,
                        c = o[e].max - o[e].min,
                        l = s ? (u - c) / s : 1;
                      n.set(t.prev[e] * Math.abs(l));
                    }
                  };
                a("x"), a("y");
              }
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = te(t, "pointerdown", function (t) {
                  var n = e.props,
                    r = n.drag,
                    i = n.dragListener;
                  r && (void 0 === i || i) && e.start(t);
                }),
                r = Bt(window, "resize", function () {
                  return e.scalePoint();
                });
              return (
                this.constraintsNeedResolution
                  ? (this.resolveDragConstraints(),
                    this.recordBoxInfo(this.constraints))
                  : !this.isDragging &&
                    this.constraints &&
                    this.applyConstraintsToPoint(),
                function () {
                  n && n(), r && r(), e.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function Te(t) {
        return [t("x"), t("y")];
      }
      function Ce(t, e) {
        return Object(r.a)(Object(r.a)({}, t), {
          point: { x: e.x ? e.x.get() : 0, y: e.y ? e.y.get() : 0 },
        });
      }
      function Pe(t, e, n) {
        return !((!0 !== e && e !== t) || (null !== n && n !== t));
      }
      function Ae(t, e) {
        var n,
          r = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ((r = (n = [i, r])[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      function De(t, e) {
        return rt(it(t.getBoundingClientRect(), e));
      }
      function ke(t, e, n, r) {
        var i = e instanceof h ? e.get() : e;
        if (!n) return i;
        var o = n[t],
          a = o.min,
          s = o.max;
        return (
          void 0 !== a && i < a
            ? (i = r ? Re(a, i, r) : Math.max(a, i))
            : void 0 !== s && i > s && (i = r ? Re(s, i, r) : Math.min(s, i)),
          e instanceof h && e.set(i),
          i
        );
      }
      function Re(t, e, n) {
        var r = "number" == typeof n ? n : 0.35;
        return Object(a.f)(t, e, r);
      }
      function Ve() {
        var t = Object(i.useContext)(tt);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register;
        return Object(i.useEffect)(r, []), !e && n ? [!1, n] : [!0];
      }
      function Me(t, e, n, o) {
        var a = t.dragControls,
          s = Object(i.useContext)(Mt).transformPagePoint,
          u = v(function () {
            return new Se({ nativeElement: e, values: n, controls: o });
          });
        u.updateProps(
          Object(r.a)(Object(r.a)({}, t), { transformPagePoint: s })
        ),
          (function (t) {
            var e = Ve(),
              n = e[0],
              r = e[1];
            Object(i.useEffect)(
              function () {
                !n && r && (r(), t.stopMotion());
              },
              [n]
            );
          })(u),
          Object(i.useEffect)(
            function () {
              return a && a.subscribe(u);
            },
            [u]
          ),
          Object(i.useEffect)(function () {
            return u.mount(e.getInstance());
          }, []);
      }
      var Le = {
        key: "drag",
        shouldRender: function (t) {
          return !!t.drag;
        },
        Component: xe(function (t) {
          var e = t.nativeElement,
            n = t.values,
            i = t.controls;
          return Me(
            Object(r.c)(t, ["nativeElement", "values", "controls"]),
            e,
            n,
            i
          );
        }),
      };
      function Fe(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var Ie = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Be = 4;
      function Ue(t, e, n) {
        void 0 === n && (n = 1),
          Object(l.a)(
            n <= Be,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var r = (function (t) {
            var e = Ie.exec(t);
            return e ? [e[1], e[2]] : [,];
          })(t),
          i = r[0],
          o = r[1];
        if (i) {
          var a = window.getComputedStyle(e).getPropertyValue(i);
          return a || (Fe(o) ? Ue(o, e, n + 1) : o);
        }
      }
      var He,
        Ne = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Xe = function (t) {
          return Ne.has(t);
        },
        Ye = function (t) {
          return Object.keys(t).some(Xe);
        },
        Ge = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        ze = function (t) {
          return t === u.g || t === u.j;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(He || (He = {}));
      var _e = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        qe = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return _e(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? _e(a[1], t) : 0;
          };
        },
        We = new Set(["x", "y", "z"]),
        Ze = s.f.filter(function (t) {
          return !We.has(t);
        });
      function Ke(t, e) {
        var n = [];
        return (
          Ze.forEach(function (e) {
            var r = t.get(e);
            void 0 !== r &&
              (n.push([e, r.get()]), r.set(e.startsWith("scale") ? 1 : 0));
          }),
          n.length && e.render(),
          n
        );
      }
      var Je = {
          width: function (t) {
            var e = t.width;
            return e;
          },
          height: function (t) {
            var e = t.height;
            return e;
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.height,
              r = e.top;
            return parseFloat(r) + n;
          },
          right: function (t, e) {
            var n = t.width,
              r = e.left;
            return parseFloat(r) + n;
          },
          x: qe(4, 13),
          y: qe(5, 14),
        },
        $e = function (t, e, n, i, o) {
          void 0 === i && (i = {}),
            void 0 === o && (o = {}),
            (n = Object(r.a)({}, n)),
            (o = Object(r.a)({}, o));
          var a = Object.keys(n).filter(Xe),
            s = [],
            c = !1,
            f = [];
          for (var p in a) {
            var h = t.get(p);
            if (t.has(p)) {
              var d = i[p],
                v = n[p],
                m = M(d),
                g = void 0;
              if (P(v))
                for (var y = v.length, b = null === v[0] ? 1 : 0; b < y; b++)
                  g
                    ? Object(l.a)(
                        M(v[b]) === g,
                        "All keyframes must be of the same type"
                      )
                    : ((g = M(v[b])),
                      Object(l.a)(
                        g === m || (ze(m) && ze(g)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              else g = M(v);
              if (m !== g)
                if (ze(m) && ze(g)) {
                  var O = h.get();
                  "string" == typeof O && h.set(parseFloat(O)),
                    "string" == typeof v
                      ? (n[p] = parseFloat(v))
                      : Array.isArray(v) &&
                        g === u.j &&
                        (n[p] = v.map(parseFloat));
                } else
                  c || ((s = Ke(t, e)), (c = !0)),
                    f.push(p),
                    (o[p] = void 0 !== o[p] ? o[p] : n[p]),
                    Ge(h, v);
            }
          }
          if (f.length) {
            var x = (function (t, e, n, r) {
              var i = n.getBoundingBox(),
                o = n.getComputedStyle(),
                a = o.display,
                s = {
                  top: o.top,
                  left: o.left,
                  bottom: o.bottom,
                  right: o.right,
                  transform: o.transform,
                };
              "none" === a && n.setStyle("display", t.display || "block"),
                n.render();
              var u = n.getBoundingBox();
              return (
                r.forEach(function (n) {
                  var r = e.get(n);
                  Ge(r, Je[n](i, s)), (t[n] = Je[n](u, o));
                }),
                t
              );
            })(n, t, e, f);
            return (
              s.length &&
                s.forEach(function (e) {
                  var n = e[0],
                    r = e[1];
                  t.get(n).set(r);
                }),
              e.render(),
              { target: x, transitionEnd: o }
            );
          }
          return { target: n, transitionEnd: o };
        };
      var Qe,
        tn,
        en,
        nn = function (t, e) {
          return function (n, i, o) {
            var a = (function (t, e, n, i) {
              var o = Object(r.c)(n, []),
                a = e.getInstance();
              if (!(a instanceof HTMLElement))
                return { target: o, transitionEnd: i };
              for (var s in (i && (i = Object(r.a)({}, i)),
              t.forEach(function (t) {
                var e = t.get();
                if (Fe(e)) {
                  var n = Ue(e, a);
                  n && t.set(n);
                }
              }),
              o)) {
                var u = o[s];
                if (Fe(u)) {
                  var c = Ue(u, a);
                  c && ((o[s] = c), i && void 0 === i[s] && (i[s] = u));
                }
              }
              return { target: o, transitionEnd: i };
            })(t, e, n, o);
            return (
              (n = a.target),
              (o = a.transitionEnd),
              (function (t, e, n, r, i) {
                return Ye(n)
                  ? $e(t, e, n, r, i)
                  : { target: n, transitionEnd: i };
              })(t, e, n, i, o)
            );
          };
        },
        rn = Object(i.createContext)(yt());
      function on(t, e) {
        var n = parseFloat(t);
        return u.j.test(t) ? n : (n / 100) * (e.max - e.min);
      }
      function an(t, e) {
        var n = t.split(" "),
          r = n[0],
          i = n[1];
        return { x: on(r, e.x), y: on(i || r, e.y) };
      }
      !(function (t) {
        (t[(t.Entering = 0)] = "Entering"),
          (t[(t.Present = 1)] = "Present"),
          (t[(t.Exiting = 2)] = "Exiting");
      })(Qe || (Qe = {})),
        (function (t) {
          (t[(t.Hide = 0)] = "Hide"), (t[(t.Show = 1)] = "Show");
        })(tn || (tn = {})),
        (function (t) {
          (t[(t.Lead = 0)] = "Lead"), (t[(t.Previous = 1)] = "Previous");
        })(en || (en = {}));
      var sn = function (t) {
          return {
            reset: function (t) {
              return void 0 !== t.borderRadius ? t.borderRadius : "";
            },
            createUpdater: function (e, n, r, i, o, s, u, c) {
              if (n || r) {
                var l = e.get(t, ""),
                  f = an(n, u),
                  p = an(r, c);
                return function (e) {
                  var n = Object(a.f)(f.x, p.x, e),
                    u = Object(a.f)(f.y, p.y, e);
                  i[t] = n + "px " + u + "px";
                  var c = n / o.x.scale / s.x,
                    h = u / o.y.scale / s.y,
                    d =
                      1 === e && o.x.scale / s.x / o.y.scale / s.y == 1
                        ? r
                        : c + "px " + h + "px";
                  l.set(d);
                };
              }
            },
          };
        },
        un = {
          backgroundColor: {
            reset: function (t) {
              return void 0 !== t.background ? t.background : "";
            },
          },
          borderRadius: { read: !1 },
          borderTopLeftRadius: sn("borderTopLeftRadius"),
          borderTopRightRadius: sn("borderTopRightRadius"),
          borderBottomLeftRadius: sn("borderBottomLeftRadius"),
          borderBottomRightRadius: sn("borderBottomRightRadius"),
          boxShadow: {
            createUpdater: function (t, e, n, i, o, s) {
              if (!ln(e) || !ln(n)) {
                var c = cn(e, n),
                  l = cn(n, e),
                  f = Object(r.d)(c),
                  p = Object(a.g)(c[0], f[0]),
                  h = u.c.createTransformer("none" !== n ? n : e),
                  d = o.x,
                  v = o.y,
                  m = t.get("boxShadow", "");
                return function (t) {
                  (f[0] = p(t)),
                    (f[1] = Object(a.f)(c[1], l[1], t)),
                    (f[2] = Object(a.f)(c[2], l[2], t)),
                    (f[3] = Object(a.f)(c[3], l[3], t)),
                    (f[4] = Object(a.f)(c[4], l[4], t)),
                    (i.boxShadow = h(f)),
                    (f[1] = f[1] / d.scale / s.x),
                    (f[2] = f[2] / v.scale / s.y);
                  var e = Object(a.f)(d.scale, v.scale, 0.5),
                    n = Object(a.f)(s.x, s.y, 0.5);
                  (f[3] = f[3] / e / n), (f[4] = f[4] / e / n), m.set(h(f));
                };
              }
            },
          },
          color: {},
          opacity: {
            read: function (t) {
              return null !== t ? parseFloat(t) : 0;
            },
          },
        };
      function cn(t, e) {
        return "none" === t && (t = u.c.getAnimatableNone(e)), u.c.parse(t);
      }
      function ln(t) {
        return !t || "none" === t;
      }
      var fn,
        pn = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            (n.willAnimate = !1),
              (n.shouldAnimate = !0),
              (n.correctedLayout = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              }),
              (n.frameTarget = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              }),
              (n.hasAnimatedRotate = !1),
              (n.treeScale = { x: 1, y: 1 }),
              (n.current = { rotate: 0 }),
              (n.delta = e.localContext.magicDelta),
              (n.depth = e.localContext.magicDepth),
              (n.progress = e.localContext.magicProgress);
            var i,
              o = e.autoValues;
            return (
              (n.supportedAutoValues = Object(r.a)(Object(r.a)({}, un), o)),
              (n.animatableStyles =
                ((i = n.supportedAutoValues),
                Object.keys(i).filter(function (t) {
                  return !i[t].createUpdater;
                }))),
              n
            );
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props.sharedLayoutContext;
              e.register
                ? ((this.unregisterSharedLayoutContext = e.register(this)),
                  (this.componentDidUpdate = function (n) {
                    var r = t.props.layoutOrder;
                    void 0 !== r && r !== n.layoutOrder && e.move(t),
                      t.willAnimate || t.safeToRemove(),
                      (t.willAnimate = !1);
                  }))
                : ((this.getSnapshotBeforeUpdate = function () {
                    return t.snapshotOrigin(), e.add(t), null;
                  }),
                  (this.componentDidUpdate = function () {
                    return e.flush();
                  }));
            }),
            (e.prototype.componentWillUnmount = function () {
              this.unregisterSharedLayoutContext &&
                this.unregisterSharedLayoutContext(),
                this.stopLayoutAnimation && this.stopLayoutAnimation();
            }),
            (e.prototype.shouldComponentUpdate = function (t) {
              var e =
                  void 0 !== this.props.magicDependency ||
                  void 0 !== t.magicDependency,
                n = this.props.magicDependency !== t.magicDependency,
                r = this.props.isPresent !== t.isPresent;
              return (this.shouldAnimate = !e || (e && n) || r), !0;
            }),
            (e.prototype.resetRotation = function () {
              var t = this.props,
                e = t.nativeElement,
                n = t.values.get("rotate");
              (this.current.rotate = n ? n.get() : 0),
                this.current.rotate && (e.setStyle("rotate", 0), e.render());
            }),
            (e.prototype.resetStyles = function () {
              var t = this.props,
                e = t.animate,
                n = t.nativeElement,
                r = t.style,
                i = (function (t, e) {
                  var n = {
                    x: 0,
                    y: 0,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotate: 0,
                  };
                  for (var r in e) {
                    var i = e[r];
                    void 0 !== t[r]
                      ? (n[r] = t[r])
                      : i.reset
                      ? (n[r] = i.reset(t))
                      : (n[r] = "");
                  }
                  return n;
                })(void 0 === r ? {} : r, this.supportedAutoValues);
              "object" == typeof e &&
                e.hasOwnProperty("opacity") &&
                delete i.opacity,
                n.setStyle(i),
                n.render(!0);
            }),
            (e.prototype.snapshotOrigin = function () {
              this.willAnimate = !0;
              var t = this.props,
                e = t.nativeElement,
                n = t.transformPagePoint,
                r = ct(e, this.supportedAutoValues, n);
              return (
                (function (t, e) {
                  for (var n in e) t[n] = e[n];
                })(r.style, this.current),
                (this.measuredOrigin = r)
              );
            }),
            (e.prototype.snapshotTarget = function () {
              var t = this.props,
                e = t.nativeElement,
                n = t.style,
                r = t.transformPagePoint,
                i = ct(e, this.supportedAutoValues, r);
              (i.style.rotate = dt(0, n && n.rotate)),
                (this.measuredTarget = i);
            }),
            (e.prototype.hide = function () {
              (this.delta.isVisible = !1),
                this.stopLayoutAnimation && this.stopLayoutAnimation();
              var t = this.props,
                e = t.values,
                n = t.nativeElement;
              e.get("opacity", 0).set(0),
                n.render(),
                this.isPresent() || this.safeToRemove();
            }),
            (e.prototype.show = function () {
              this.delta.isVisible = !0;
              var t = this.props,
                e = t.values,
                n = t.style,
                r = e.get("opacity", 1),
                i = n ? dt(1, n.opacity) : 1;
              r.set(i);
            }),
            (e.prototype.setVisibility = function (t) {
              return (
                t === tn.Show ? this.show() : this.hide(), this.safeToRemove()
              );
            }),
            (e.prototype.startAnimation = function (t) {
              var e,
                n,
                i = this;
              void 0 === t && (t = {});
              var o,
                a = t.origin,
                s = t.target,
                u = t.visibilityAction,
                c = Object(r.c)(t, ["origin", "target", "visibilityAction"]);
              if (void 0 !== u) return this.setVisibility(u);
              var l = [],
                f = this.props,
                p = f.nativeElement,
                h = f.values.get("rotate");
              h && p.setStyle("rotate", h.get()),
                (this.visualTarget = s || this.measuredTarget),
                (this.visualOrigin =
                  a || this.measuredOrigin || this.visualTarget),
                (this.delta.isVisible =
                  0 !==
                    (null === (e = this.visualOrigin) || void 0 === e
                      ? void 0
                      : e.style.opacity) ||
                  0 !==
                    (null === (n = this.visualTarget) || void 0 === n
                      ? void 0
                      : n.style.opacity));
              var d = this.props.parentContext.magicDeltas || [];
              return (
                this.shouldAnimate &&
                  this.visualOrigin &&
                  this.visualTarget &&
                  this.delta.isVisible &&
                  (function (t) {
                    for (var e = !0, n = t.length, r = 0; r < n; r++)
                      t[r].isVisible || (e = !1);
                    return e;
                  })(d) &&
                  (Dt.open(),
                  (l = [
                    this.startLayoutAnimation(c),
                    this.startStyleAnimation(c),
                  ].filter(Boolean)),
                  (o = Promise.all(l).then(function () {
                    var t = i.props.onMagicComplete;
                    t && t();
                  })),
                  Dt.flush()),
                !l.length && this.safeToRemove(),
                p.render(),
                o
              );
            }),
            (e.prototype.startLayoutAnimation = function (t) {
              var e,
                n = this;
              this.stopLayoutAnimation && this.stopLayoutAnimation();
              var i = this.visualOrigin.style,
                a = this.visualTarget.style,
                s = Boolean(i.rotate || a.rotate);
              s && (this.hasAnimatedRotate = s);
              var u = this.props.values,
                c = {};
              for (var l in this.supportedAutoValues) {
                var f = this.supportedAutoValues[l];
                f.createUpdater &&
                  (c[l] = f.createUpdater(
                    u,
                    i[l],
                    a[l],
                    this.current,
                    this.delta,
                    this.treeScale,
                    this.visualOrigin.layout,
                    this.visualTarget.layout
                  ));
              }
              this.frameTarget = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              };
              var p = u.get("x", 0),
                h = u.get("y", 0),
                d = u.get("scaleX", 1),
                v = u.get("scaleY", 1),
                m = u.get("rotate", 0);
              p.stop(), h.stop();
              var g = u.get("opacity", i.opacity),
                y = function () {
                  var e = n.progress.get() / 1e3;
                  for (var r in (n.updateBoundingBox(
                    e,
                    n.hasAnimatedRotate ? 0.5 : void 0
                  ),
                  n.updateTransform(p, h, d, v),
                  n.hasAnimatedRotate && n.updateRotate(e, m),
                  c)) {
                    var o = c[r];
                    o && o(e);
                  }
                  t.crossfade && g.set(t.crossfade(i.opacity, a.opacity, e));
                };
              this.progress.set(0), this.progress.set(0);
              var b = this.props,
                O = b.transition,
                x = b.animate,
                j = b.nativeElement;
              if (!1 !== x) {
                var E = we.get(j);
                if (E && E.isDragging) {
                  this.updateBoundingBox(0);
                  var w = E.origin,
                    S = w.x,
                    T = w.y;
                  S.set(S.get() + this.delta.x.translate - p.get()),
                    T.set(T.get() + this.delta.y.translate - h.get()),
                    this.safeToRemove();
                } else
                  e = K(
                    "progress",
                    this.progress,
                    1e3,
                    Object(r.a)(Object(r.a)({}, t.transition || O), {
                      restDelta: 1,
                      restSpeed: 10,
                    })
                  ).then(function () {
                    return n.safeToRemove();
                  });
              } else this.safeToRemove();
              var C,
                P = this.props.parentContext.magicProgress,
                A = function () {
                  return o.b.update(y, !1, !0);
                },
                D = this.progress.onChange(A);
              return (
                P && (C = P.onChange(A)),
                (this.stopLayoutAnimation = function () {
                  o.a.update(y), n.progress.stop(), D(), C && C();
                }),
                y(),
                e
              );
            }),
            (e.prototype.startStyleAnimation = function (t) {
              for (
                var e = !1,
                  n = {},
                  r = this.props.values,
                  i = this.animatableStyles.length,
                  o = 0;
                o < i;
                o++
              ) {
                var a = this.animatableStyles[o];
                if ("opacity" !== a || !t.crossfade) {
                  var s = this.visualOrigin.style[a],
                    u = this.visualTarget.style[a];
                  if (s !== u) (e = !0), r.get(a, s).set(s), (n[a] = u);
                }
              }
              var c = this.props,
                l = c.transition,
                f = c.controls;
              if (((n.transition = t.transition || l || {}), e))
                return f.start(n);
            }),
            (e.prototype.updateBoundingBox = function (t, e) {
              var n,
                r,
                i = this.props.parentContext.magicDeltas || [];
              (n = this.correctedLayout),
                (r = this.measuredTarget.layout),
                xt(n.x, r.x),
                xt(n.y, r.y),
                (function (t, e, n) {
                  var r = n.length;
                  e.x = e.y = 1;
                  for (var i = 0; i < r; i++) {
                    var o = n[i];
                    ht(t, o), (e.x *= o.x.scale), (e.y *= o.y.scale);
                  }
                })(this.correctedLayout, this.treeScale, i),
                (function (t, e, n, r) {
                  mt("x", t, e, n, r), mt("y", t, e, n, r);
                })(
                  this.frameTarget,
                  this.visualOrigin.layout,
                  this.visualTarget.layout,
                  t
                ),
                (function (t, e, n, r) {
                  lt(t.x, e.x, n.x, r), lt(t.y, e.y, n.y, r);
                })(this.delta, this.frameTarget, this.correctedLayout, e);
            }),
            (e.prototype.updateTransform = function (t, e, n, r) {
              var i = this.props.nativeElement,
                o = this.delta.x,
                a = this.delta.y;
              i.setStyle("originX", o.origin),
                i.setStyle("originY", a.origin),
                t.set(o.translate / this.treeScale.x),
                e.set(a.translate / this.treeScale.y),
                n.set(o.scale),
                r.set(a.scale);
            }),
            (e.prototype.updateRotate = function (t, e) {
              var n = Object(a.f)(
                this.visualOrigin.style.rotate,
                this.visualTarget.style.rotate,
                t
              );
              e.set(n);
            }),
            (e.prototype.isPresent = function () {
              return this.props.isPresent;
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              t && t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component),
        hn = {
          key: "auto",
          shouldRender: function (t) {
            var e = t.animate,
              n = t.layoutId;
            return (
              ("boolean" == typeof e || void 0 !== n) &&
              "undefined" != typeof window
            );
          },
          Component: function (t) {
            var e = Ve(),
              n = e[0],
              o = e[1],
              a = Object(i.useContext)(rn),
              s = Object(i.useContext)(Mt),
              u = s.autoValues,
              c = s.transformPagePoint;
            return Object(i.createElement)(
              pn,
              Object(r.a)({ isPresent: n }, t, {
                safeToRemove: o,
                sharedLayoutContext: a,
                autoValues: u,
                transformPagePoint: c,
              })
            );
          },
        },
        dn = new Set([
          "initial",
          "animate",
          "exit",
          "style",
          "variants",
          "transition",
          "transformTemplate",
          "transformValues",
          "custom",
          "inherit",
          "static",
          "layoutId",
          "layoutOrder",
          "isPresent",
          "magicDependency",
          "allowTransformNone",
          "onMagicComplete",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "drag",
          "dragControls",
          "dragListener",
          "dragConstraints",
          "dragDirectionLock",
          "dragElastic",
          "dragMomentum",
          "dragPropagation",
          "dragTransition",
          "_dragValueX",
          "_dragValueY",
          "_dragTransitionControls",
          "dragOriginX",
          "dragOriginY",
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onPanSessionStart",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileHover",
          "whileTap",
          "onHoverEnd",
          "onHoverStart",
        ]);
      function vn(t) {
        return dn.has(t);
      }
      !(function (t) {
        (t.Target = "Target"),
          (t.VariantLabel = "VariantLabel"),
          (t.AnimationSubscription = "AnimationSubscription");
      })(fn || (fn = {}));
      var mn = function (t, e) {
        return (
          void 0 !== e &&
          (Array.isArray(t) && Array.isArray(e)
            ? !(function (t, e) {
                if (null === e) return !1;
                var n = e.length;
                if (n !== t.length) return !1;
                for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
                return !0;
              })(e, t)
            : t !== e)
        );
      };
      function gn(t, e) {
        void 0 === e && (e = !1);
        t.transition;
        var n = t.transitionEnd,
          i = Object(r.c)(t, ["transition", "transitionEnd"]);
        return e ? Object(r.a)(Object(r.a)({}, i), n) : i;
      }
      var yn,
        bn,
        On = function (t) {
          var e,
            n = t instanceof h ? t.get() : t;
          return Array.from(
            new Set((e = n) ? (Array.isArray(e) ? e : [e]) : [])
          );
        },
        xn = function (t) {
          return [t.join(",")];
        },
        jn = function (t, e) {
          return t.join(",") !== e.join(",");
        };
      var En =
          (((yn = {})[fn.Target] = xe(function (t) {
            return (function (t, e, n, o) {
              var a = Object(i.useRef)(!0),
                s = Object(i.useRef)(null);
              s.current || (s.current = gn(t, !0)),
                Object(i.useEffect)(
                  function () {
                    var i = {},
                      u = gn(t),
                      c = gn(t, !0);
                    for (var l in u) {
                      var f =
                          a.current && (!n.has(l) || n.get(l).get() !== c[l]),
                        p = null !== c[l],
                        h = mn(s.current[l], c[l]);
                      p && (h || f) && (i[l] = u[l]);
                    }
                    (a.current = !1),
                      (s.current = Object(r.a)(Object(r.a)({}, s.current), c)),
                      Object.keys(i).length &&
                        e.start(
                          Object(r.a)(Object(r.a)({}, i), {
                            transition: t.transition || o,
                            transitionEnd: t.transitionEnd,
                          })
                        );
                  },
                  [t]
                );
            })(t.animate, t.controls, t.values, t.transition);
          })),
          (yn[fn.VariantLabel] = xe(function (t) {
            var e = t.animate,
              n = t.inherit,
              r = void 0 === n || n,
              o = t.controls;
            return (function (t, e, n, r) {
              var o = On(e),
                a = Object(i.useContext)(jt),
                s = a.hasMounted && a.hasMounted.current,
                u = Object(i.useRef)(!1);
              Object(i.useEffect)(function () {
                var e = !1;
                n
                  ? ((e = !!s), (o = On(a.animate)))
                  : (e = u.current || jn(On(t), o)),
                  e && r.start(o),
                  (u.current = !0);
              }, xn(o));
            })(t.initial, e, r, o);
          })),
          (yn[fn.AnimationSubscription] = xe(function (t) {
            return (function (t, e) {
              var n = Object(i.useMemo)(
                function () {
                  return t.subscribe(e);
                },
                [t]
              );
              Object(i.useEffect)(
                function () {
                  return function () {
                    n && n();
                  };
                },
                [n]
              );
            })(t.animate, t.controls);
          })),
          yn),
        wn = function (t) {
          return t.animate instanceof Q;
        },
        Sn = ["initial", "animate", "whileTap", "whileHover"],
        Tn =
          (((bn = {})[fn.Target] = function (t) {
            return !(
              void 0 === t.animate ||
              ((e = t.animate), Array.isArray(e) || "string" == typeof e) ||
              wn(t)
            );
            var e;
          }),
          (bn[fn.VariantLabel] = function (t) {
            return (
              void 0 !== t.variants ||
              Sn.some(function (e) {
                return "string" == typeof t[e];
              })
            );
          }),
          (bn[fn.AnimationSubscription] = wn),
          bn),
        Cn = function (t) {
          var e = void 0;
          for (var n in fn) Tn[n](t) && (e = n);
          return e ? En[e] : void 0;
        },
        Pn = {
          key: "exit",
          shouldRender: function (t) {
            return !!t.exit && !Ct(t);
          },
          Component: xe(function (t) {
            var e,
              n = t.animate,
              o = t.controls,
              a = t.exit,
              s = Ve(),
              u = s[0],
              c = s[1],
              l = Object(i.useContext)(tt),
              f = Object(i.useRef)(!1),
              p =
                void 0 !==
                (null === (e = l) || void 0 === e ? void 0 : e.custom)
                  ? l.custom
                  : t.custom;
            Object(i.useEffect)(
              function () {
                u
                  ? !f.current ||
                    !n ||
                    "boolean" == typeof n ||
                    n instanceof Q ||
                    o.start(n)
                  : (!f.current &&
                      a &&
                      (o.setProps(
                        Object(r.a)(Object(r.a)({}, t), { custom: p })
                      ),
                      o.start(a).then(c)),
                    (f.current = !0)),
                  u && (f.current = !1);
              },
              [n, o, p, a, u, c, t]
            );
          }),
        },
        An = function (t) {
          return !vn(t);
        };
      try {
        var Dn = n("9uj6").default;
        An = function (t) {
          return t.startsWith("on") ? !vn(t) : Dn(t);
        };
      } catch (yn) {}
      var kn = function (t, e, n, r) {
          var i = { style: S(t, e, n, r) };
          return (
            n.drag && ((i.style.userSelect = "none"), (i.draggable = !1)), i
          );
        },
        Rn = function (t, e) {
          var n = j(t),
            i = Object(s.a)(n, void 0, void 0, void 0, void 0, !1);
          return (i.style = Object(r.a)(Object(r.a)({}, e), i.style)), i;
        },
        Vn = [hn, Le, Ee, Pn];
      function Mn(t) {
        var e = "string" == typeof t,
          n = e && -1 !== Ft.indexOf(t);
        return {
          renderComponent: function (o, a, s, u, c) {
            var l = e
                ? (function (t) {
                    var e = {};
                    for (var n in t) An(n) && (e[n] = t[n]);
                    return e;
                  })(u)
                : u,
              f = n ? Rn(s, a) : kn(s, a, u, c);
            return Object(i.createElement)(
              t,
              Object(r.a)(Object(r.a)(Object(r.a)({}, l), { ref: o.ref }), f)
            );
          },
          loadFeatures: function (t, e, n, o, a, s, u, c) {
            var l = Object(r.d)(Vn, c.features),
              f = l.length,
              p = [],
              h = Cn(n);
            h &&
              p.push(
                Object(i.createElement)(h, {
                  key: "animation",
                  initial: n.initial,
                  animate: n.animate,
                  variants: n.variants,
                  transition: n.transition,
                  controls: s,
                  inherit: u,
                  values: e,
                })
              );
            for (var d = 0; d < f; d++) {
              var v = l[d],
                m = v.shouldRender,
                g = v.key,
                y = v.Component;
              m(n, a) &&
                p.push(
                  Object(i.createElement)(
                    y,
                    Object(r.a)({ key: g }, n, {
                      localContext: o,
                      parentContext: a,
                      values: e,
                      controls: s,
                      nativeElement: t,
                    })
                  )
                );
            }
            return p;
          },
          getValueControlsConfig: function (t, e) {
            return {
              values: e,
              readValueFromSource: function (e) {
                return t.getStyle(e);
              },
              makeTargetAnimatable: nn(e, t),
            };
          },
        };
      }
      var Ln = [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "webview",
        ].reduce(function (t, e) {
          var n = Mn(e);
          return (t[e] = Lt(n)), t;
        }, {}),
        Fn = Ft.reduce(function (t, e) {
          return (t[e] = Lt(Mn(e))), t;
        }, {}),
        In = Object(r.a)(
          Object(r.a)(
            {
              custom: function (t) {
                return Lt(Mn(t));
              },
            },
            Ln
          ),
          Fn
        );
      function Bn(t, e, n) {
        var r, i, o, a;
        return n && t !== n.lead
          ? { visibilityAction: tn.Hide }
          : n &&
            t.presence !== Qe.Entering &&
            t === n.lead &&
            n.lead !== n.prevLead
          ? { visibilityAction: tn.Show }
          : (t.presence === Qe.Entering
              ? (o =
                  null === (r = n) || void 0 === r
                    ? void 0
                    : r.getFollowOrigin())
              : t.presence === Qe.Exiting &&
                (a =
                  null === (i = n) || void 0 === i
                    ? void 0
                    : i.getFollowTarget()),
            { origin: o, target: a });
      }
      function Un(t, e, n) {
        var r,
          i = {},
          o = n && n.lead,
          a = null === (r = o) || void 0 === r ? void 0 : r.presence;
        return (
          n && t === o
            ? t.presence === Qe.Entering
              ? (i.origin = n.getFollowOrigin())
              : t.presence === Qe.Exiting && (i.target = n.getFollowTarget())
            : n &&
              t === n.follow &&
              (a === Qe.Entering
                ? (i.target = n.getLeadTarget())
                : a === Qe.Exiting && (i.origin = n.getLeadOrigin())),
          e
            ? (n && t !== o
                ? n && t === n.follow
                  ? o && a !== Qe.Entering
                    ? a === Qe.Exiting && (i.crossfade = Yn)
                    : (i.crossfade = Gn)
                  : (i.visibilityAction = tn.Hide)
                : t.presence === Qe.Entering
                ? (i.crossfade = Yn)
                : t.presence === Qe.Exiting && (i.crossfade = Gn),
              i)
            : i
        );
      }
      function Hn(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Object(a.j)(t, e, r));
        };
      }
      var Nn = Hn(0, 0.5, f.circOut),
        Xn = Hn(0.5, 0.95, f.linear),
        Yn = function (t, e, n) {
          return Object(a.f)(0, e, Nn(n));
        },
        Gn = function (t, e, n) {
          return Object(a.f)(t, 0, Xn(n));
        };
      var zn = (function () {
          function t() {
            this.order = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = t.props.layoutOrder;
              if (void 0 === e) this.order.push(t);
              else {
                var n = this.order.findIndex(function (t) {
                  return e <= (t.props.layoutOrder || 0);
                });
                -1 === n &&
                  ((t.presence = Qe.Entering), (n = this.order.length)),
                  this.order.splice(n, 0, t);
              }
            }),
            (t.prototype.remove = function (t) {
              var e = this.order.findIndex(function (e) {
                return t === e;
              });
              -1 !== e && this.order.splice(e, 1);
            }),
            (t.prototype.updateLeadAndFollow = function () {
              (this.prevLead = this.lead), (this.prevFollow = this.follow);
              var t = (function (t, e) {
                  for (
                    var n = e[0],
                      r = e[1],
                      i = void 0,
                      o = 0,
                      a = void 0,
                      s = t.length,
                      u = !1,
                      c = s - 1;
                    c >= 0;
                    c--
                  ) {
                    var l = t[c];
                    if ((c === s - 1 && (u = l.isPresent()), u)) i = l;
                    else {
                      var f = t[c - 1];
                      f && f.isPresent() && (i = l);
                    }
                    if (i) {
                      o = c;
                      break;
                    }
                  }
                  if ((i || (i = t[0]), (a = t[o - 1]), i))
                    for (c = o - 1; c >= 0; c--) {
                      if ((l = t[c]).isPresent()) {
                        a = l;
                        break;
                      }
                    }
                  return (
                    i !== n &&
                      !u &&
                      a === r &&
                      t.find(function (t) {
                        return t === n;
                      }) &&
                      (i = n),
                    [i, a]
                  );
                })(this.order, [this.lead, this.follow]),
                e = t[0],
                n = t[1];
              (this.lead = e), (this.follow = n);
            }),
            (t.prototype.updateSnapshot = function () {
              this.lead && (this.snapshot = this.lead.measuredOrigin);
            }),
            (t.prototype.isLeadPresent = function () {
              var t;
              return (
                this.lead &&
                (null === (t = this.lead) || void 0 === t
                  ? void 0
                  : t.presence) !== Qe.Exiting
              );
            }),
            (t.prototype.getFollowOrigin = function () {
              return this.follow ? this.follow.measuredOrigin : this.snapshot;
            }),
            (t.prototype.getFollowTarget = function () {
              var t;
              return null === (t = this.follow) || void 0 === t
                ? void 0
                : t.measuredTarget;
            }),
            (t.prototype.getLeadOrigin = function () {
              var t;
              return null === (t = this.lead) || void 0 === t
                ? void 0
                : t.measuredOrigin;
            }),
            (t.prototype.getLeadTarget = function () {
              var t;
              return null === (t = this.lead) || void 0 === t
                ? void 0
                : t.measuredTarget;
            }),
            t
          );
        })(),
        _n = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.children = new Set()),
            (e.stacks = new Map()),
            (e.batch = yt()),
            (e.hasMounted = !1),
            (e.isAnimating = !1),
            (e.shouldRerender = !1),
            (e.state = {
              forceRender: function () {
                e.isAnimating
                  ? (e.shouldRerender = !0)
                  : ((e.shouldRerender = !1),
                    e.setState(Object(r.a)({}, e.state)));
              },
              register: function (t) {
                return e.addChild(t);
              },
              move: function (t) {
                e.removeChildFromStack(t), e.addChildToStack(t);
              },
            }),
            e
          );
        }
        Object(r.b)(e, t),
          (e.prototype.componentDidMount = function () {
            (this.hasMounted = !0),
              this.stacks.forEach(function (t) {
                return t.updateLeadAndFollow();
              });
          }),
          (e.prototype.shouldComponentUpdate = function (t, e) {
            if (((this.shouldTransition = !1), this.state !== e))
              this.shouldTransition = !0;
            else {
              var n = this.props.dependency,
                r = !!(null != n ? n : t.dependency),
                i = n !== t.dependency;
              this.shouldTransition = !r || (r && i);
            }
            this.shouldTransition &&
              this.props.supportRotate &&
              this.children.forEach(function (t) {
                return t.resetRotation();
              });
            return !0;
          }),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.shouldTransition
              ? (this.children.forEach(function (t) {
                  return t.snapshotOrigin();
                }),
                this.stacks.forEach(function (t) {
                  return t.updateSnapshot();
                }),
                null)
              : null;
          }),
          (e.prototype.componentDidUpdate = function () {
            this.shouldTransition && this.startAnimation();
          }),
          (e.prototype.addChild = function (t) {
            var e = this;
            return (
              this.setRootDepth(t),
              this.children.add(t),
              (t.presence = this.hasMounted ? Qe.Entering : Qe.Present),
              this.addChildToStack(t),
              function () {
                return e.removeChild(t);
              }
            );
          }),
          (e.prototype.addChildToStack = function (t) {
            var e = t.props.layoutId;
            void 0 !== e && this.getStack(e).add(t);
          }),
          (e.prototype.removeChild = function (t) {
            this.children.delete(t), this.removeChildFromStack(t);
          }),
          (e.prototype.removeChildFromStack = function (t) {
            var e = t.props.layoutId;
            void 0 !== e && this.getStack(e).remove(t);
          }),
          (e.prototype.getStack = function (t) {
            return (
              !this.stacks.has(t) && this.stacks.set(t, new zn()),
              this.stacks.get(t)
            );
          }),
          (e.prototype.setRootDepth = function (t) {
            void 0 === this.rootDepth
              ? (this.rootDepth = t.depth)
              : (this.rootDepth = Math.min(t.depth, this.rootDepth));
          }),
          (e.prototype.startAnimation = function () {
            var t = this,
              e = 0,
              n = 0,
              i = this.props,
              o = i.type,
              a = i.transition,
              s = { type: o, transition: void 0 === a ? _n : a },
              u = "crossfade" === o ? Un : Bn;
            this.children.forEach(function (t) {
              t.isPresent()
                ? t.presence !== Qe.Entering &&
                  (t.presence =
                    t.presence === Qe.Exiting ? Qe.Entering : Qe.Present)
                : (t.presence = Qe.Exiting);
            }),
              this.stacks.forEach(function (t) {
                return t.updateLeadAndFollow();
              });
            var c = {
              snapshotTarget: function (e) {
                var n,
                  r,
                  i = e.props.layoutId,
                  o = void 0 !== i ? t.getStack(i) : void 0;
                ((function (t) {
                  return !0 === t.props.animate;
                })(e) ||
                  e.presence !== Qe.Exiting ||
                  (null ===
                    (r = null === (n = o) || void 0 === n ? void 0 : n.lead) ||
                  void 0 === r
                    ? void 0
                    : r.isPresent())) &&
                  e.snapshotTarget();
              },
              startAnimation: function (i) {
                var o = i.props.layoutId,
                  a = void 0 !== o ? t.getStack(o) : void 0,
                  c = u(i, i.depth === t.rootDepth, a),
                  l = i.startAnimation(Object(r.a)(Object(r.a)({}, s), c));
                l &&
                  ((t.isAnimating = !0),
                  e++,
                  l.then(function () {
                    i.isPresent() && (i.presence = Qe.Present),
                      n++,
                      t.shouldRerender &&
                        n >= e &&
                        ((t.isAnimating = !1), t.state.forceRender());
                  }));
              },
            };
            this.children.forEach(function (e) {
              return t.batch.add(e);
            }),
              this.batch.flush(c),
              this.stacks.forEach(function (t) {
                return (t.snapshot = void 0);
              });
          }),
          (e.prototype.render = function () {
            return Object(i.createElement)(
              rn.Provider,
              { value: this.state },
              this.props.children
            );
          });
      })(i.Component);
      d(0), d(0), d(0), d(0);
      var qn = d(null);
      if ("undefined" != typeof window)
        if (window.matchMedia) {
          var Wn = window.matchMedia("(prefers-reduced-motion)"),
            Zn = function () {
              return qn.set(Wn.matches);
            };
          Wn.addListener(Zn), Zn();
        } else qn.set(!1);
      !(function () {
        function t() {
          this.componentControls = new Set();
        }
        (t.prototype.subscribe = function (t) {
          var e = this;
          return (
            this.componentControls.add(t),
            function () {
              return e.componentControls.delete(t);
            }
          );
        }),
          (t.prototype.start = function (t, e) {
            this.componentControls.forEach(function (n) {
              n.start(t.nativeEvent || t, e);
            });
          });
      })();
    },
  },
]);
//# sourceMappingURL=05d954cf-9fcfdedf5e326fecf760.js.map
