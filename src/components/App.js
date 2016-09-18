import React from 'react';
import Navigation from './navigation.js';
import Footer from './footer.js';

export default class App extends React.Component {
    render() {
        return (
            <div className="exterior">
                <Navigation />
                <Footer />
            </div>
        )
    }
}