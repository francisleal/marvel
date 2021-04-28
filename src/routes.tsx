
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Filmes from "./pages/Filmes";
import HQs from "./pages/HQs";
import Login from "./pages/Login";
import Personagens from "./pages/Personagens";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/Cadastro" component={Cadastro}></Route>
                <Route path="/Personagens" component={Personagens}></Route>
                <Route path="/Filmes" component={Filmes}></Route>
                <Route path="/HQs" component={HQs}></Route>
            </Switch>
        </BrowserRouter>
    )
}