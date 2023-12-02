import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {AboutPage} from "./SiteDisplay/AboutPage";
import {TermsPage} from "./SiteDisplay/TermsPage";
import {PrivacyPage} from "./SiteDisplay/PrivacyPage";
import {AppError} from "./AppError";
import {App} from "./App";
import {BuildGame} from "./Game/BuildGame";
import {Game} from "./Game/Game";
import {GameListing} from "./Lobby/GameListing";

const router = createBrowserRouter([
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <AppError />
    },
    {
        path: "/terms",
        element: <TermsPage />,
        errorElement: <AppError />
    },
    {
        path: "/privacy",
        element: <PrivacyPage />,
        errorElement: <AppError />
    },
    {
        path: "/new-game",
        element: <BuildGame />,
        errorElement: <AppError />
    },
    {
        path: "/game/:source/:id",
        element: <Game />,
        errorElement: <AppError />
    },
    {
        path: "/games",
        element: <GameListing />,
        errorElement: <AppError />
    },
    {
        path: "/",
        element: <App />,
        errorElement: <AppError />
    },
]);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);