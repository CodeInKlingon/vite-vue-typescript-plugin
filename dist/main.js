import { defineComponent as d, ref as i, openBlock as p, createElementBlock as h, Fragment as f, createElementVNode as e, toDisplayString as a, unref as _, pushScopeId as m, popScopeId as v, createTextVNode as o } from "vue";
function b(t) {
  return t.toUpperCase();
}
const r = (t) => (m("data-v-493dfbbe"), t = t(), v(), t), k = { class: "card" }, y = /* @__PURE__ */ r(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ e("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), V = /* @__PURE__ */ r(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), I = /* @__PURE__ */ r(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), $ = /* @__PURE__ */ r(() => /* @__PURE__ */ e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), H = {
  name: "hello-world"
}, C = /* @__PURE__ */ d({
  ...H,
  props: {
    msg: null
  },
  setup(t) {
    const l = i(0);
    let s = "Hello World";
    return (n, c) => (p(), h(f, null, [
      e("h1", null, a(t.msg), 1),
      e("p", null, a(_(b)(_(s))), 1),
      e("div", k, [
        e("button", {
          type: "button",
          onClick: c[0] || (c[0] = (q) => l.value++)
        }, "count is " + a(l.value), 1),
        y
      ]),
      V,
      I,
      $
    ], 64));
  }
});
const g = (t, l) => {
  const s = t.__vccOpts || t;
  for (const [n, c] of l)
    s[n] = c;
  return s;
}, j = /* @__PURE__ */ g(C, [["__scopeId", "data-v-493dfbbe"]]), u = (t) => (m("data-v-ca6ea87c"), t = t(), v(), t), x = { class: "card" }, E = /* @__PURE__ */ u(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ e("code", null, "components/WorldHello.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), S = /* @__PURE__ */ u(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), W = /* @__PURE__ */ u(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), D = /* @__PURE__ */ u(() => /* @__PURE__ */ e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), w = {
  name: "world-hello"
}, O = /* @__PURE__ */ d({
  ...w,
  props: {
    msg: { default: "hi there" },
    bar: null
  },
  setup(t) {
    const l = i(0);
    return (s, n) => (p(), h(f, null, [
      e("h1", null, a(t.msg), 1),
      e("div", x, [
        e("button", {
          type: "button",
          onClick: n[0] || (n[0] = (c) => l.value++)
        }, "count is " + a(l.value), 1),
        E
      ]),
      S,
      W,
      D
    ], 64));
  }
});
const M = /* @__PURE__ */ g(O, [["__scopeId", "data-v-ca6ea87c"]]), N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HelloWorld: j,
  WorldHello: M
}, Symbol.toStringTag, { value: "Module" })), P = {
  install(t, l) {
    Object.entries(N).forEach(([s, n]) => {
      t.component(n.name, n);
    });
  }
};
export {
  P as default
};
