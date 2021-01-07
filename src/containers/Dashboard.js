import React, {Component} from 'react';
import PageHeader from '../components/ui/Content/PageHeader';
import Table from "../components/ui/Tables/Table";
import Container from "../components/ui/Content/Container";


const records = [
    {
        transaction_friendly_id: "2020-2909-0000000115-1601407792",
        status: "Liquidada",
        description: "Venta a MB",
        amount: "₡ 25,00,000",
        balance: "¢ 1,000,000",
        date: "24/09/2020",
        color: "green"
    },
    {
        transaction_friendly_id: "2020-2909-0000000115-1601407793",
        status: "Pendiente de pago",
        description: "Venta a MB",
        amount: "₡ 25,00,000",
        balance: "¢ 1,000,000",
        date: "24/09/2020",
        color: "yellow"
    },
    {
        transaction_friendly_id: "2020-2909-0000000115-1601407794",
        status: "Retenida",
        description: "Compra a MB",
        amount: "₡ 25,00,000",
        balance: "¢ 1,000,000",
        date: "24/09/2020",
        color: "green"
    },
];

const headerTable = ["Numero de transacción", "Estado", "Descripción", "Monto", "Balance", "Fecha", "Color"];

class Dashboard extends Component {
    showAdvancedDetails = () => {
        const { advancedDetails } = this.state;
        const advancedDetailsText = (advancedDetails ? "Mostrar detalle": "Esconder detalle");
        this.setState({ advancedDetails: !advancedDetails, advancedDetailsText})
    };

    render() {
        return (
            <Container>
                <PageHeader
                    title="Estado de cuenta"
                    description="A continuación se detalla su información crediticia con ZotaCard"
                />
                <div className="grid grid-cols-1">
                    <div className="grid-rows-2 grid-flow-row gap-2 my-2">
                        <Table>
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    { headerTable.map((item) => (
                                        <th className="px-4 py-3">{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {records.map((record) => (
                                    <tr key={record.id} className="text-gray-700 dark:text-gray-400">
                                        {Object.entries(record).map(([index, item]) => (
                                            <td>{item}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Dashboard;
