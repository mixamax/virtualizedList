import "./App.css";
import { Routing } from "../2_pages";
import { withProviders } from "./providers/withProviders";

function App() {
    return <Routing />;
}

export default withProviders(App);
