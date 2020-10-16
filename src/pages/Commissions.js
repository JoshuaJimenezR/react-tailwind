import React from 'react';
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Table from "../components/Table";

const headerTable = ["Numero de transacción", "Empresa", "Monto", "Porcentaje", "Monto Comision", "Fecha Limite", "Estado"];

const records = [
    {
        id: 1,
        transaction_friendly_id: "2020-2909-0000000115-1601407792",
        company: "Los patitos",
        amount: "₡ 25,00,000",
        percentage: "3%",
        amount_commission: "₡ 50,00",
        color: "green",
        due_date: "31/12/2020",
        status: "Liquidada",
    }
];

const Commissions = () => {
    return (
        <Container>
            <div className="grid grid-cols-1">
                <div className="grid-rows-2">
                    <PageHeader
                        title="Comisiones"
                        description="A continuación se muestran las comisiones asociadas a su cuenta."
                    />
                </div>
                <div className="grid-rows-2 grid-flow-row gap-2 my-2">
                    <div>
                        Filtros
                    </div>
                    <Table header={headerTable} records={records} type="commissions"/>
                </div>
            </div>
        </Container>
    );
};

export default Commissions;
