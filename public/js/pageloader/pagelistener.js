
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
            const routeName = this.normalizeRoute(location.pathname)

            if(this.pages.get(routeName)) {
                this.pages.get(routeName).render()
            }
        })
        this.listening = true
    }

    normalizeRoute(pathname) {
        return pathname.replace(/index\.html$/, "")
    }
}
