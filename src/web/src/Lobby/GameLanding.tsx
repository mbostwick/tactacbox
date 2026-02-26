import {useAppStore} from "../AppState";
import {AppHeader} from "../AppHeader";
import {AppFooter} from "../AppFooter";
import {useNavigate} from "react-router-dom";
import {RustApp} from "../App";
import {Game} from "../Game/Game";

export function GameLanding(props: {rustFeatures: RustApp}){
    const activeGame = useAppStore(state => state.game);
    const navigate = useNavigate();
    return <>
            <div className="container mx-auto px-4">
                <AppHeader />
                <div className="flex flex-wrap -mx-4">
                    <Game />
                </div>
                <AppFooter/>
            </div>
    </>
}
