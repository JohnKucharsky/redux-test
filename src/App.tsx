import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import { useGetPokemonQuery } from "./redux/api";

function App() {
    const { data, error, isLoading } = useGetPokemonQuery("bulbasaur");
    console.log(data);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="users" element={<Projects />} />
                    <Route path="projects" element={<Users />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
