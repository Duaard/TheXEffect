import React from 'react';
import { Home, Sidebar } from './views/index';

function App() {
    return (
        <div>
            <Sidebar />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
