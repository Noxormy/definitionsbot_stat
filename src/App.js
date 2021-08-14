import { FirebaseAppProvider } from 'reactfire';
import {firebaseConfig} from "./helpers/configs";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Main from "./Pages/Main"
import './App.sass'

function App() {
    return (
        <div className="App">
            <header>
            </header>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <div className="page">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Main/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </FirebaseAppProvider>
        </div>
    )
}

export default App
