import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";
import {useNavigate} from "react-router-dom";
import React from "react";


export function AppError(props: {error?: string}) {
    let navigate = useNavigate();
    const clickHome = () => {
        navigate("/");
    }
    return (<>
        <div className="container mx-auto px-4">
            <AppHeader />
            <div className="flex flex-wrap -mx-4">
                <div className="md:w-2/3 md:mx-auto">
                    <div className="card bg-base-100 shadow-xl w-96 mt-2 p-2 bg-white border border-dark rounded text-center">
                        {props.error ? props.error : "Yikes An Unexpected Error!" }
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={clickHome} >
                        Return Home
                    </button>
                </div>
            </div>
            <AppFooter/>
        </div>
    </>);
}
