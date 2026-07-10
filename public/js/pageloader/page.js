
import { marked } from "../../vendor/marked/marked.esm.js";

export class Page {

    constructor(routeName, contentMd) {
        this.routeName = routeName 
        this.contentMd = contentMd
    } 

    render() {
        const pageContent = document.getElementById('page-content')
        if (!pageContent) {
            return
        }

        pageContent.innerHTML = marked.parse(this.contentMd)
    }
}
