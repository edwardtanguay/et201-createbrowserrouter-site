import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
	return (
		<>
		<Header/>
			<main className="p-2 mt-2">
				<Outlet/>
			</main>
		</>
	);
}

export default App;
