import React, {Component} from 'react';
import Container from "../components/ui/Content/Container";
import Input from "../components/ui/Form/Input";
import Joi from 'joi-browser';

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            account: {
                email: "",
                password: ""
            },
            errors: {}
        }
    }

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password')
    };

    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, { abortEarly: false });

        if(!result.error){
            return null;
        }

        const errors = {};

        for(let item of result.error.details){
            errors[item.path[0]] = item.message;
        }

        return errors;
    };

    validateProperty = ({name, value}) => {
        if(name === "email") {
            if (value.trim() === '') return 'Username is required';
        }

        if(name === "password") {
            if (value.trim() === '') return 'Password is required';
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log("Submitted");
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);

        if(errorMessage){
            errors[input.name] = errorMessage;
        }else{
            delete errors[input.name];
        }

        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({account, errors});
    };

    render() {

        const { account, errors } = this.state;
        return (
            <Container>
                <div className="flex items-center justify-center p-0 sm:p-0">
                    <div className="w-3/5">
                        <form onSubmit={this.handleSubmit}>
                            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                ZotaCard
                            </h1>
                            <Input
                                name="email"
                                value={account.email}
                                label="Correo Electronico"
                                onChange={this.handleChange}
                                placeholder="correo@electronico.com"
                                autoFocus="autoFocus"
                                type="text"
                                error={errors.email}
                            />

                            <Input
                                name="password"
                                value={account.password}
                                label="Contraseña"
                                onChange={this.handleChange}
                                placeholder="*********"
                                type="password"
                                error={errors.password}
                            />

                            <button
                                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                            >
                                Log in
                            </button>

                            <p className="mt-4">
                                <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                                    Forgot your password?
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default LoginForm;
