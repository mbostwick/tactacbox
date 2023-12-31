import 'bootstrap/dist/css/bootstrap.min.css';
import {GameLanding} from "./Lobby/GameLanding";
import {InitOutput} from "../../../pkg";
import "./App.css";


let loadedModule: InitOutput | null = null;
import("../../../pkg/tactacbox.js").then(module => {
    module.default().then(x=> {
        loadedModule = x;
    });
});
export type GameStatus = "Unknown" | "OnGoing" | "Winner" | "Draw" ;
function mapRustGameStatus(givenEnum: number): GameStatus {
    switch (givenEnum){
        case 0:{
            return "OnGoing"
        }
        case 1:{
            return "Winner";
        }
        case 2:{
            return "Draw";
        }
        default: {
            return "Unknown";
        }
    }
}
export interface RustApp {
    check_cube_for_win: (turns: number) => GameStatus
}
function getRustApp(): RustApp{
    return {
        "check_cube_for_win": (turns: number) =>{
            return mapRustGameStatus(loadedModule.check_cube_for_win(turns));
        }
    }
}
export function App(){
    const rustApp = getRustApp();
    return <>
        <GameLanding rustFeatures={rustApp}/>
    </>;
}