import {Logo} from "./Logo";
import { Parallax } from 'react-parallax';

export function AppHeader() {
    return <>
        <div className="flex flex-wrap -mx-4">
            <Logo/>
        </div>
    </>
}
