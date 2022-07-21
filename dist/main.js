import { defineComponent as u, ref as d, openBlock as i, createElementBlock as p, Fragment as h, createElementVNode as t, toDisplayString as c, pushScopeId as m, popScopeId as v, createTextVNode as o } from "vue";
const a = (e) => (m("data-v-92071cb7"), e = e(), v(), e), g = { class: "card" }, f = /* @__PURE__ */ a(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), k = /* @__PURE__ */ a(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), y = /* @__PURE__ */ a(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), V = /* @__PURE__ */ a(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), I = {
  name: "hello-world"
}, $ = /* @__PURE__ */ u({
  ...I,
  props: {
    msg: null
  },
  setup(e) {
    const n = d(0);
    return (s, l) => (i(), p(h, null, [
      t("h1", null, c(e.msg), 1),
      t("div", g, [
        t("button", {
          type: "button",
          onClick: l[0] || (l[0] = (_) => n.value++)
        }, "count is " + c(n.value), 1),
        f
      ]),
      k,
      y,
      V
    ], 64));
  }
});
const b = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [l, _] of n)
    s[l] = _;
  return s;
}, H = /* @__PURE__ */ b($, [["__scopeId", "data-v-92071cb7"]]), r = (e) => (m("data-v-ad52b3b2"), e = e(), v(), e), j = { class: "card" }, x = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ t("code", null, "components/WorldHello.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), C = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), E = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), S = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), W = {
  name: "world-hello"
}, D = /* @__PURE__ */ u({
  ...W,
  props: {
    msg: null
  },
  setup(e) {
    const n = d(0);
    return (s, l) => (i(), p(h, null, [
      t("h1", null, c(e.msg), 1),
      t("div", j, [
        t("button", {
          type: "button",
          onClick: l[0] || (l[0] = (_) => n.value++)
        }, "count is " + c(n.value), 1),
        x
      ]),
      C,
      E,
      S
    ], 64));
  }
});
const w = /* @__PURE__ */ b(D, [["__scopeId", "data-v-ad52b3b2"]]), O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HelloWorld: H,
  WorldHello: w
}, Symbol.toStringTag, { value: "Module" })), N = {
  install(e, n) {
    Object.entries(O).forEach(([s, l]) => {
      e.component(l.name, l);
    });
  }
};
export {
  N as default
};
