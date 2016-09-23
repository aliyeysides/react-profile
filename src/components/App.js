import React from 'react';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import ProjectView from './ProjectView.js';

export default class App extends React.Component {
    render() {
        return (
            <div className="exterior">
                <Navigation />
                <ProjectView />
                <Footer />
            </div>
        )
    }
}