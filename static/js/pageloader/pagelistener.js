import { Page } from "./page.js";

export class PageListener {

    constructor() {
        this.pages = new Map();
        this.listening = false;
        window.pageListener = this;
    }

    createPage(routeName, contentHtml) {
        if (this.pages.has(routeName)) {
            console.warn("Cannot add the same page twice!");
            return;
        }

        this.pages.set(routeName, new Page(routeName, contentHtml));
    }

    listen() {

        if (this.listening) return;

        const renderCurrentPage = () => {

            const routeName = this.normalizeRoute(location.pathname);

            const page = this.pages.get(routeName);

            if (page) {
                page.render();
            }

        };

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", renderCurrentPage);
        } else {
            renderCurrentPage();
        }

        this.listening = true;
    }

    normalizeRoute(pathname) {

        const clean = pathname
            .replace(/index\.html$/, "")
            .replace(/\/$/, "");

        const last = clean.split("/").filter(Boolean).pop();

        return last ? `/${last}/` : "/";
    }
}