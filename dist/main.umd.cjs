(function (e, c) {
    typeof exports == "object" && typeof module < "u"
        ? (module.exports = c(require("vue")))
        : typeof define == "function" && define.amd
        ? define(["vue"], c)
        : ((e = typeof globalThis < "u" ? globalThis : e || self), (e.MyLib = c(e.Vue)));
})(this, function (e) {
    "use strict";
    function c(t) {
        return t.toUpperCase();
    }
    const a = (t) => (e.pushScopeId("data-v-493dfbbe"), (t = t()), e.popScopeId(), t),
        i = { class: "card" },
        _ = a(() =>
            e.createElementVNode(
                "p",
                null,
                [
                    e.createTextVNode(" Edit "),
                    e.createElementVNode("code", null, "components/HelloWorld.vue"),
                    e.createTextVNode(" to test HMR "),
                ],
                -1
            )
        ),
        p = a(() =>
            e.createElementVNode(
                "p",
                null,
                [
                    e.createTextVNode(" Check out "),
                    e.createElementVNode("a", { href: "https://vuejs.org/guide/quick-start.html#local", target: "_blank" }, "create-vue"),
                    e.createTextVNode(", the official Vue + Vite starter "),
                ],
                -1
            )
        ),
        m = a(() =>
            e.createElementVNode(
                "p",
                null,
                [
                    e.createTextVNode(" Install "),
                    e.createElementVNode("a", { href: "https://github.com/johnsoncodehk/volar", target: "_blank" }, "Volar"),
                    e.createTextVNode(" in your IDE for a better DX "),
                ],
                -1
            )
        ),
        h = a(() => e.createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)),
        V = { name: "hello-world" },
        f = e.defineComponent({
            ...V,
            props: { msg: null },
            setup(t) {
                const o = e.ref(0);
                let l = "Hello World";
                return (n, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                        e.Fragment,
                        null,
                        [
                            e.createElementVNode("h1", null, e.toDisplayString(t.msg), 1),
                            e.createElementVNode("p", null, e.toDisplayString(e.unref(c)(e.unref(l))), 1),
                            e.createElementVNode("div", i, [
                                e.createElementVNode(
                                    "button",
                                    { type: "button", onClick: r[0] || (r[0] = (C) => o.value++) },
                                    "count is " + e.toDisplayString(o.value),
                                    1
                                ),
                                _,
                            ]),
                            p,
                            m,
                            h,
                        ],
                        64
                    )
                );
            },
        }),
        S = "",
        d = (t, o) => {
            const l = t.__vccOpts || t;
            for (const [n, r] of o) l[n] = r;
            return l;
        },
        N = d(f, [["__scopeId", "data-v-493dfbbe"]]),
        s = (t) => (e.pushScopeId("data-v-ca6ea87c"), (t = t()), e.popScopeId(), t),
        u = { class: "card" },
        g = s(() =>
            e.createElementVNode(
                "p",
                null,
                [
                    e.createTextVNode(" Edit "),
                    e.createElementVNode("code", null, "components/WorldHello.vue"),
                    e.createTextVNode(" to test HMR "),
                ],
                -1
            )
        ),
        E = s(() =>
            e.createElementVNode(
                "p",
                null,
                [
                    e.createTextVNode(" Check out "),
                    e.createElementVNode("a", { href: "https://vuejs.org/guide/quick-start.html#local", target: "_blank" }, "create-vue"),
                    e.createTextVNode(", the official Vue + Vite starter "),
                ],
                -1
            )
        ),
        b = s(() =>
            e.createElementVNode(
                "p",
                null,
                [
                    e.createTextVNode(" Install "),
                    e.createElementVNode("a", { href: "https://github.com/johnsoncodehk/volar", target: "_blank" }, "Volar"),
                    e.createTextVNode(" in your IDE for a better DX "),
                ],
                -1
            )
        ),
        y = s(() => e.createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)),
        k = { name: "world-hello" },
        x = e.defineComponent({
            ...k,
            props: { msg: { default: "hi there" }, bar: null },
            setup(t) {
                const o = e.ref(0);
                return (l, n) => (
                    e.openBlock(),
                    e.createElementBlock(
                        e.Fragment,
                        null,
                        [
                            e.createElementVNode("h1", null, e.toDisplayString(t.msg), 1),
                            e.createElementVNode("div", u, [
                                e.createElementVNode(
                                    "button",
                                    { type: "button", onClick: n[0] || (n[0] = (r) => o.value++) },
                                    "count is " + e.toDisplayString(o.value),
                                    1
                                ),
                                g,
                            ]),
                            E,
                            b,
                            y,
                        ],
                        64
                    )
                );
            },
        }),
        I = "",
        T = Object.freeze(
            Object.defineProperty(
                { __proto__: null, HelloWorld: N, WorldHello: d(x, [["__scopeId", "data-v-ca6ea87c"]]) },
                Symbol.toStringTag,
                { value: "Module" }
            )
        );
    return {
        install(t, o) {
            Object.entries(T).forEach(([l, n]) => {
                t.component(n.name, n);
            });
        },
    };
});
