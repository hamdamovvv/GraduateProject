import {useSelector} from "react-redux";
import Footer from "../../components/Footer/Footer";
const Main =()=>{
    const {probka} = useSelector(state=>state.probkaReducer)
    console.log(probka)
    return (
        <div>

    <Footer/>
    


   
        </div>
    )
}
export default Main