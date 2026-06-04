
import { Page } from "./page.js"

export class PageListener {

    constructor() {
        this.pages = new Map()
        window.pageListener = this
        this.listening=false 
    }

    createPage(routeName,contentMd) {
        if(this.pages.get(routeName)) {
            console.warn('Cannot add the same page twice!')
            return 
        }
        const pageInstance = new Page(routeName,contentMd)
        this.pages.set(routeName,pageInstance)
    }

    listen() {
        if(this.listening) {
            return  
        }
        window.addEventListener('load', () => {
            console.log('location changed: ', location.pathname)
            if(this.pages.get(location.pathname)) {
                this.pages.get(location.pathname).render()
            }
        })
    }
}