import {Provider} from "react-redux";
import store from "./store/store";
import {Main, SignUp} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    return (
        <div>
            <Provider store={store}>
               <BrowserRouter>
                <Routes>
                    <Route element={<SignUp/>} path='/signUp'/>
                    <Route element={<Main/>} path='/'/>
                </Routes>
               </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
