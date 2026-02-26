import {AppHeader} from "../AppHeader";
import {AppFooter} from "../AppFooter";

export function AboutPage() {
    return <>
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
                <AppHeader/>
            </div>
            <div className="flex flex-wrap -mx-4">
                <div className="jumbotron">
                    <h2 className="display-4"> About </h2>
                    <p>
                        A simple game to for showing some complex subjects.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4">
                <AppFooter/>
            </div>
        </div>
    </>
}
