import {useSelector} from "react-redux";

const Main =()=>{
    const {probka} = useSelector(state=>state.probkaReducer)
    console.log(probka)
    return (
        <div>
    hi
        </div>
    )
}
export default Main