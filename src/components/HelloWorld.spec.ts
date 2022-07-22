import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld.spec.cy.ts", () => {
    it("playground", () => {
        cy.mount(HelloWorld, {
            props: {
                msg: "Hello Cypress",
            },
        });
    });
});
