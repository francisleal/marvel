import { ListarEmpresasProvider } from "./providers/LocalStoraProvider";
import Routes from "./routes";

function App() {
    return (
        <ListarEmpresasProvider>
            <Routes />
        </ListarEmpresasProvider>
    );
}

export default App;
