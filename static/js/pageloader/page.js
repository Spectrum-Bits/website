export class Page {

    constructor(routeName, contentHtml) {
        this.routeName = routeName;
        this.contentHtml = contentHtml;
    }

    render() {
        const pageContent = document.getElementById("page-content");

        if (!pageContent) {
            return;
        }

        pageContent.innerHTML = this.contentHtml;
    }
}