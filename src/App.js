import {Provider} from "react-redux";
import store from "./store/store";
import {Main, SignUp} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uslugi from "./pages/FooterPages/Uslugi";
import Disayneri from "./pages/FooterPages/Disayneri";
import OCompany from "./pages/FooterPages/OCompany";
import DisaynerPage from "./pages/DisaynerPage/DisaynerPage";
import DeisgnerPagePag from "./components/paginationDesignerPage.jsx/deisgnerPagePag";
import Header from "./components/header/Header"

import Comments from "./components/otzivi/comments/AddComment";
import AddComments from "./components/otzivi/comments/AddComment";

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
                    <Route element={<DisaynerPage/>} path="/DisaynerPage"/>
                    <Route element={<DeisgnerPagePag/>} path="/Pagi"/>
                    <Route element={<Header/>} path="/Header"/>
               
                    <Route element={<Comments/>} path="/Card"/>
                    <Route element={<AddComments/>} path="/Add"/>
                </Routes>
               </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
