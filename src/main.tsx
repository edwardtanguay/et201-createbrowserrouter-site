import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Page404 } from "./pages/Page404.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Page404 />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "/about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
