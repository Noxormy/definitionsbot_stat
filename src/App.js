import './App.sass'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {SuspenseWithPerf} from "reactfire";
import Main from "./Pages/Main"
import Header from "./Components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="page">
                <SuspenseWithPerf fallback={<p>Loading...</p>} traceId="page">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Main/>
                            </Route>
                        </Switch>
                    </Router>
                </SuspenseWithPerf>
            </div>
        </div>
    )
}

export default App
