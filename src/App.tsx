import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
	return (
		<>
			<h1 className="text-2xl mb-4">Advanced React Router Site</h1>
			<Nav/>
			<main className="p-2 mt-2">
				<Outlet/>
			</main>
		</>
	);
}

export default App;
