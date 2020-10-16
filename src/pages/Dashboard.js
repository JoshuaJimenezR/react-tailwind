import React, {Component} from 'react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import Table from "../components/Table";
import Container from "../components/Container";

const statsObject = [
    {
        title: "Credito Aprobado",
        amount: "10,000,000",
        negative: "300,000"
    },
    {
        title: "ZotaCash",
        amount: "1,000,000"
    },
    {
        title: "Retenidos",
        amount: "2,000,000"
    },
    {
        title: "Disponible para compra",
        amount: "8,000,000"
    },
];

const statsAdvanced = [
    {
        title: "Compras",
        amount: "1,200,000",
    },
    {
        title: "Ventas",
        amount: "500,000",
    },
];

const records = [
    {
        id: 1,
        transaction_friendly_id: "2020-2909-0000000115-1601407792",
        date: "24/09/2020",
        status: "Liquidada",
        description: "Venta a MB",
        amount: "₡ 25,00,000",
        balance: "¢ 1,000,000",
        color: "green"
    },
    {
        id:2,
        transaction_friendly_id: "2020-2909-0000000115-1601407793",
        date: "24/09/2020",
        status: "Pendiente de pago",
        description: "Venta a MB",
        amount: "₡ 25,00,000",
        balance: "¢ 1,000,000",
        color: "yellow"
    },
    {
        id: 3,
        transaction_friendly_id: "2020-2909-0000000115-1601407794",
        date: "24/09/2020",
        status: "Retenida",
        description: "Compra a MB",
        amount: "₡ 25,00,000",
        balance: "¢ 1,000,000",
        color: "green"
    },
];

const headerTable = ["Numero de transacción", "Estado", "Descripción", "Monto", "Balance"];

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            advancedDetails: false,
            advancedDetailsText: "Mostrar detalle"
        }
    }

    showAdvancedDetails = () => {
        const { advancedDetails } = this.state;
        const advancedDetailsText = (advancedDetails ? "Mostrar detalle": "Esconder detalle");
        this.setState({ advancedDetails: !advancedDetails, advancedDetailsText})
    };

    render() {

        const { advancedDetails, advancedDetailsText } = this.state;
        return (
            <Container>
                <PageHeader
                    title="Estado de cuenta"
                    description="A continuación se detalla su información crediticia con ZotaCard"
                >
                    <button
                        type="button"
                        onClick={this.showAdvancedDetails}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                    >
                        { advancedDetailsText }
                    </button>
                </PageHeader>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <Stats records={statsObject}/>
                </div>

                { advancedDetails &&
                    <div className="grid grid-rows-2 grid-flow-row gap-4 my-2">
                        <div className="row-span-1">
                            <hr/>
                            <div className="grid grid-cols-2 mt-8">
                                <div>
                                    Acciones
                                </div>
                                <div className="col-span-1 pl-5">
                                    <h3>Informacion Crediticia</h3>
                                    <p>Credito Aprobado: </p>
                                    <p>ZotaCash: </p>
                                    <p>Disponible para compra:</p>
                                    <p>Retenidos</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 mt-5">
                            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
                                <Stats records={statsAdvanced}/>
                            </div>
                        </div>
                        <div className="row-span-1 mb-5">
                            Grafico
                        </div>
                    </div>
                }
                <div className="grid grid-cols-1">
                    <div className="grid-rows-2 grid-flow-row gap-2 my-2">
                        <div>
                            Filtros
                        </div>
                        <Table records={records} header={headerTable} type="detail"/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Dashboard;
