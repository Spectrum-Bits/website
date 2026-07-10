
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

        const renderCurrentPage = () => {
            const routeName = this.normalizeRoute(location.pathname)
            const page = this.pages.get(routeName)

            if(page) {
                page.render()
            }
        }

        if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', renderCurrentPage)
        } else {
            renderCurrentPage()
        }

        this.listening = true
    }

    normalizeRoute(pathname) {
        const cleanPath = pathname.replace(/index\.html$/, "").replace(/\/$/, "")
        const routeName = cleanPath.split('/').filter(Boolean).pop()

        return routeName ? `/${routeName}/` : '/'
    }
}
