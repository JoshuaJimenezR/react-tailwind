import React, {Component} from 'react';
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Table from "../components/Table";
import CtaAction from "../components/CtaAction";
import SlideOver from "../components/SlideOver";

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


const headerTable = ["tipo", "Detalle", "Monto", "Fecha Ultimo Cambio", "Estado"];


class TransactionsShow extends Component {
    constructor(props){
        super(props);

        this.state = {
            slideOver: false

        };
    }

    updateSlideOver = () => {
        this.setState({
            ...this.state,
            slideOver: true
        });
    };

    closeSlideOver = () => {
        this.setState({
            ...this.state,
            slideOver: false
        });
    };

    render() {
        const actions = [
            {
                title: "Comprador",
                onClick: this.updateSlideOver
            },
            {
                title: "Proveedor",
                onClick: this.updateSlideOver
            },
        ];

        return (
            <Container>
                <div className="grid grid-flow-row gap-0">
                    <div>
                        <PageHeader>
                            <div className="inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-blue-400 bg-white hover:text-blue-700">
                                <p>Analisis | Paso 2 de 7</p>
                            </div>
                        </PageHeader>
                    </div>
                    <div>
                        <CtaAction title="Estudio de empresas" actions={actions}/>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 mt-12">
                            <div className="col-span-2">
                                <div className="title">
                                    <h2 className="font-extrabold tracking-tight text-gray-700 sm:text-lg ">
                                        Transacción: #{record.transaction_friendly_id}
                                    </h2>
                                </div>
                                <form className="mt-0" action="#" method="POST">
                                    <div className="grid grid-cols-3 gap-4 my-3">
                                        <div className="">
                                            <label htmlFor="">Monto Colones</label>
                                            <input aria-label="" type="text" required
                                                   className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                                   placeholder="" />
                                        </div>
                                        <div className="-mt-px">
                                            <label htmlFor="">Comision a cobrar al proveedor</label>
                                            <input aria-label="" name="text" type="text" required
                                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                                   placeholder="" />
                                        </div>
                                        <div className="-mt-px">
                                            <label htmlFor="">Fecha de pago en días</label>
                                            <input aria-label="" name="text" type="text" required
                                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                                   placeholder="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="-mt-px">
                                            <label htmlFor="">Comentarios de la transacción</label>
                                            <textarea rows="3" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5">

                                            </textarea>
                                        </div>
                                    </div>
                                    <div>
                                        Uploads
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                                        >
                                            Guardar Cambios
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="ml-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 flex justify-content-start">
                                <h2 className="font-extrabold tracking-tight text-gray-700 sm:text-lg ">
                                    Documentos Adjuntos
                                </h2>
                                <div>Orden de compra</div>
                                <div>Recibido conforme</div>
                                <div>Factura</div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-start-2 col-span-2 flex justify-end">
                            <div className="ml-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                                >
                                    Enviar a analisis
                                </button>
                            </div>
                            <div className="ml-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                                >
                                    Enviar a Proveedor
                                </button>
                            </div>
                            <div className="ml-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                                >
                                    Supervision
                                </button>
                            </div>
                            <div className="ml-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <SlideOver visible={this.state.slideOver} close={this.closeSlideOver} title="Detalle de Comprador"/>
            </Container>
        );
    }
}

export default TransactionsShow;
