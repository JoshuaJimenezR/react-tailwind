import React from 'react';
import './index.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Commissions from "./pages/Commissions";
import ZotaCash from "./pages/ZotaCash";
import VendorDirectory from "./pages/VendorDirectory";
import Configuration from "./pages/Configuration";
import TransactionDetails from "./pages/TransactionsDetails";
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
import TransactionsShow from "./pages/TransactionsShow";

const App = () => (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SideBar />

        <div className="flex flex-col flex-1 w-full">
            <Header />
            <main className="h-full overflow-y-auto mt-5">
                <Switch>
                    <Route path="/transacciones/details/:id" component={TransactionDetails} />
                    <Route path="/transacciones/show/:id" component={TransactionsShow} />
                    <Route path="/transacciones" component={Transactions} />
                    <Route path="/comisiones" component={Commissions} />
                    <Route path="/zotacash" component={ZotaCash} />
                    <Route path="/directorio-empresas" component={VendorDirectory} />
                    <Route path="/configuracion" component={Configuration} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/" exact component={Dashboard} />
                    <Redirect to="/not-found" />
                </Switch>
            </main>
        </div>
    </div>
);

export default App;
