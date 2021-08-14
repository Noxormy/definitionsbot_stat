import './App.sass'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {SuspenseWithPerf} from "reactfire";
import Main from "./Pages/Main"
import Header from "./Components/Header";
import Loading from "./Components/Loading";

function App() {
    return (
        <div className="App">
            <Header/>
            <SuspenseWithPerf fallback={<Loading/>} traceId="page">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                    </Switch>
                </Router>
            </SuspenseWithPerf>
        </div>
    )
}

export default App
