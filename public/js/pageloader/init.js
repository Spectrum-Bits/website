import { PageListener } from "./pagelistener.js";

function handleListener() {
    
    let pl;

    if (!window.pageListener) {
        pl = new PageListener();
        pl.createPage('/static/contact/','*Contact page | WIP*')
        pl.createPage('/static/contests/','*Contests page | WIP*')
        pl.createPage('/static/sponsors/','*Sponsors page | WIP*')
        pl.createPage('/static/mentors/','*Mentors page | WIP*')
        pl.createPage('/static/team/','*Team page | WIP*') 
        pl.createPage('/static/robots/','*Robots page | WIP*')
    } else {
        pl = window.pageListener;
    }

    pl.listen();
}

handleListener();
