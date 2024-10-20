import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

const container=ReactDOM.createRoot(document.getElementById("root"));
container.render(
    <Provider store={Store}>
        <App />
    </Provider>
)