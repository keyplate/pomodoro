import Timer from './components/Timer';
import './App.css';
import Sidebar from './components/Sidebar';
function App() {
    const config = {
        sessionDurations: { focus: 600, rest: 120, longRest: 240},
        sessionSequence: ['focus', 'rest', 'focus', 'rest', 'focus', 'longRest'],
    }
    
    return (
        <div className="app">
            <Sidebar></Sidebar>
            <Timer config={config}></Timer>
        </div>
    );
}

export default App;