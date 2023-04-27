import {Provider} from "react-redux";
import store from "./store/store";
import {Main} from "./pages";

function App() {

    return (
        <div>
            <Provider store={store}>
                <Main/>

            </Provider>
        </div>
    );
}

export default App;
