import Timer from './components/Timer/Timer';
import Settings from './components/Settings/Settings';
import Provider from './contexts/ConfigContext';
import './App.css';
function App() {
    
    return (
        <Provider>
            <div className="app">
                <div className="app-content">
                    <Settings></Settings>
                    <Timer></Timer>
                </div>
                <div className="modal-container"></div>
            </div>
        </Provider>
    );
}

export default App;