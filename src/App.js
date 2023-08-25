import Sidebar from './components/Sidebar/Sidebar';
import Timer from './components/Timer/Timer';
import Settings from './components/Settings/Settings';
import './App.css';
import Provider from './contexts/ConfigContext';
function App() {
    
    return (
        <Provider>
            <div className="app">
                <div className="app-content">
                    <Sidebar></Sidebar>
                    <Timer></Timer>
                    <Settings></Settings>
                </div>
            </div>
        </Provider>
    );
}

export default App;