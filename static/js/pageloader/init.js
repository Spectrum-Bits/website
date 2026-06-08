import { PageListener } from "./pagelistener.js";

function handleListener() {
    
    let pl;

    if (!window.pageListener) {
        pl = new PageListener();
        pl.createPage('/contact/','*Contact page | WIP*')
        pl.createPage('/contests/','*Contests page | WIP*')
        pl.createPage('/sponsors/','*Sponsors page | WIP*')
        pl.createPage('/mentors/','*Mentors page | WIP*')
        pl.createPage('/team/','*Team page | WIP*') 
        pl.createPage('/robots/','*Robots page | WIP*')
    } else {
        pl = window.pageListener;
    }

    pl.listen();
}

handleListener();
