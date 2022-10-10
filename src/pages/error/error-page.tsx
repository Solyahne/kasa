import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/header";
import "./error-page.css";

export default function ErrorPage(): JSX.Element {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Header />
            <div className="errormsg">
                <h1 className="error">404</h1>
                <p className="oups">Oups! La page que<br className='breakpointmobile'></br> vous demandez n'existe pas.</p>
                <Link to='/' className="backtohome">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );

}