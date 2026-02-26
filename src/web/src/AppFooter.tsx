import {useNavigate} from "react-router-dom";

export function AppFooter() {
    let navigate = useNavigate();

    return <>
        <hr/>
        <div className="flex flex-wrap align-self-end">
            <div className="m-2">
                <button className="btn btn-link" onClick={() => navigate("/about")}>
                    About
                </button>
                <button className="btn btn-link" onClick={() => navigate("/terms")}>
                    Terms
                </button>
                <button className="btn btn-link" onClick={() => navigate("/privacy")}>
                    Privacy
                </button>
            </div>
        </div>
    </>
}
