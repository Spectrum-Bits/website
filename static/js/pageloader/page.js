
import { marked } from "../../vendor/marked/marked.esm.js";

export class Page {

    constructor(routeName, contentMd) { // use pop state to detect when to activate
        this.routeName = routeName 
        this.contentMd = contentMd
    } 

    render() {
        const pageContent = document.getElementById('page-content')
        console.log('rendering')
        pageContent.innerHTML = marked.parse(this.contentMd)
    }
}
