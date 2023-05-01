import {Provider} from "react-redux";
import store from "./store/store";
import {Main, SignUp} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uslugi from "./pages/FooterPages/Uslugi";
import Disayneri from "./pages/FooterPages/Disayneri";
import OCompany from "./pages/FooterPages/OCompany";
function App() {

    return (
        <div>
            <Provider store={store}>
               <BrowserRouter>
                <Routes>
                    <Route element={<SignUp/>} path='/signUp'/>
                    <Route element={<Main/>} path='/'/>
                    <Route element={<Uslugi/>} path='/Uslugi'/>
                    <Route element={<OCompany/>} path='/OCompany'/>
                    <Route element={<Disayneri/>} path='/Disayneri'/>
                </Routes>
               </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
