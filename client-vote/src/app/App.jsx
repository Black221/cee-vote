import {Routes, Route} from 'react-router-dom';

import Layout from './Layout';
import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Vote from "./vote/Vote";
import RequiredAuth from '../guards/RequiredAuth';
import Admin from './admin/Admin';
import NotFound from './redirection/NotFound';
import Redirection from './redirection/redirection';

function App() {

  return (
	<>
		 <Routes>
            <Route path="/" element={ <Layout /> }>

                {/*} <ScrollToTop /> */}

                {/* Public routes */}
                <Route path={`/`} exact element={ <Home /> } />
                <Route path={`/login`} exact element={ <Login /> } />
                <Route path={`/register`} exact element={ <Register /> } />

                {/* Private routes */}
                <Route element={ <RequiredAuth/> }>
					        <Route path={`/vote`} exact element={ <Vote /> } />
                </Route>

                {/* Admin routes */}
                <Route path={`/office/*`} exact element={ <Admin /> } />

                {/*Not Found page*/}
                <Route path={`*`} element={ <NotFound /> } />

            </Route>
        </Routes>
	</>
  )
}

export default App
