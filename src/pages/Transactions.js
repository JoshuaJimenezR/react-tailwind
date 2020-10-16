import React, {Component} from 'react';
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Table from "../components/Table";
import SlideOver from "../components/SlideOver";

const headerTable = ["Numero de transacción", "Comprador", "Proveedor", "Monto", "Fecha Ultimo Cambio", "Estado"];

const records = [
    {
        id: 1,
        transaction_friendly_id: "2020-2909-0000000115-1601407792",
        buyer: "A",
        seller: "B",
        amount: "₡ 25,00,000",
        color: "green",
        updated_at: "25/09/2020",
        status: "Liquidada"
    }
];

class Transactions extends Component {
    constructor(props){
        super(props);

        this.state = {
            createTransaction: false
        };
    }

    updateSlideOver = () => {
        this.setState({
            ...this.state,
            createTransaction: true
        });
    };

    closeSlideOver = () => {
        this.setState({
              ...this.state,
              createTransaction: false
        });
    };

    render() {
        return (
            <Container>
                <div className="grid grid-cols-1">
                    <div className="grid-rows-2">
                        <PageHeader
                            title="Transacciones"
                            description="A continuación se muestran las ultimas transacciones tramitadas con nosotros."
                        >
                            <button
                                type="button"
                                onClick={this.updateSlideOver}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                            >
                                Gestionar
                            </button>
                        </PageHeader>

                        <Table header={headerTable} records={records} type="transaction"/>
                    </div>
                </div>

                <SlideOver visible={this.state.createTransaction} close={this.closeSlideOver} title="Gestionar Transacción"/>
            </Container>
        );
    }
}

export default Transactions;
