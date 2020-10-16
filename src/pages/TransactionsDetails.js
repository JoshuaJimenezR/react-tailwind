import React, {Component} from 'react';
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Table from "../components/Table";

const record = {
        id: 1,
        transaction_friendly_id: "2020-2909-0000000115-1601407792",
        buyer: "A",
        seller: "B",
        amount: "₡ 2,500,000",
        real_amount: "¢ 800,000",
        color: "green",
        updated_at: "25/09/2020",
        status: "Liquidada"
    };

const records = [
    {
        id: 1,
        type: "ZotaCash",
        description: "Pago Inicial con ZotaCash disponible",
        amount: "₡ 1,500,000",
        color: "green",
        updated_at: "25/09/2020",
        status: "Liquidada"
    },
    {
        id: 2,
        type: "Venta",
        description: "Recibio pago por medio de una venta",
        amount: "₡ 200,000",
        color: "green",
        updated_at: "25/09/2020",
        status: "Liquidada"
    },
];

const headerTable = ["tipo", "Detalle", "Monto", "Fecha Ultimo Cambio", "Estado"];

class TransactionsDetails extends Component {
    render() {
        return (
            <Container>
                <PageHeader
                    title={`Transaccion ${record.transaction_friendly_id}`}
                    description="Detalle de la transacción."
                />

                <div className="grid grid-cols-2 mb-5">
                    <div>
                        <p>Monto Transacción:</p>
                        <input className="form-input" type="text" value={record.amount} disabled/>
                    </div>
                    <div>
                        <p>Monto Real:</p>
                        <input className="form-input" type="text" value={record.real_amount} disabled/>
                    </div>
                </div>

                <div className="grid grid-cols-2 mb-5">
                    <div>
                        <p>Comprador:</p>
                        <input type="text" value={record.buyer} disabled/>
                    </div>
                    <div>
                        <p>Proveedor:</p>
                        <input type="text" value={record.seller} disabled/>
                    </div>
                </div>

                <Table header={headerTable} records={records} type="transaction-detail"/>
            </Container>
        );
    }
}

export default TransactionsDetails;
