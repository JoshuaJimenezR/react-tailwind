import React, {Component} from 'react';
import DenyIcon from "../Icons/DenyIcon";
import Container from "../components/Container";

class NotFound extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    };

    render() {
        return (
            <Container>
                <DenyIcon/>
                <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
                    404
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                    Pagina no encontrada. &nbsp;
                    <button
                        className="text-purple-600 hover:underline dark:text-purple-300"
                        onClick={this.handleClick}
                    >Ir a inicio.
                    </button>
                    .
                </p>
            </Container>
        );
    }
}

export default NotFound;
