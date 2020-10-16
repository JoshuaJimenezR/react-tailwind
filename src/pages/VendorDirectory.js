import React from 'react';
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import CompanyDirectoryList from "../components/CompanyDirectoryList";


const records = [
    {
        name: "Josh Jimenez Rodriguez",
        company: "Los Patitos S.A",
        email: "joshuajimenezr@gmail.com",
        tel: '2222-2222'
    }
];
const VendorDirectory = () => {
    return (
        <Container>
            <PageHeader
                title="Directorio de empresas"
                description="A continuación se muestran las empresas con las cuales pueden transar."
            />

            <CompanyDirectoryList records={records}/>
        </Container>
    );
};

export default VendorDirectory;
