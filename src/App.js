// App.js
import './App.css';
import { ToDoWrapper } from './componient/ToDoWrapper';
import { StoreProvider } from './Store';

function App() {
    return (
        <div className="App">
            <StoreProvider>
                <ToDoWrapper />
            </StoreProvider>
        </div>
    );
}

export default App;
