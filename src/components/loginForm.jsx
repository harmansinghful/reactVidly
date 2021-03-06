import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Component {
    state = {
        account: {username:'', password:''},
        errors: {
            
        }
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]}
        Joi.validate(obj, name, {abortEarly: false});

    }

    validate = () => {
        const options = {abortEarly: false};
        const result = Joi.validate(this.state.account, this.schema, options);
        console.log(result);
        if(!result.error) return null;
        
        const errors = {};
        for(let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    } 

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState({errors: errors || {} });
        // Call the server, save changes and redirect the user
        console.log("Submitted");
    }

    handleChange = ({currentTarget:input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    }

    render() { 
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input 
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;