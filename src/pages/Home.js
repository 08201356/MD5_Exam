import {Outlet} from "react-router-dom";

export default function Home(){
    return (
        <div className={'row'}>
            <Outlet/>
        </div>
    )
}