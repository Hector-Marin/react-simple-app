import React, {Component} from 'react';
import Loading from '../components/Loading';
import url from '../config';
import NewCard from './NewCard';
import ServerError from './ServerError';


class NewCardContainer extends Component {

    state = {
        form: {
            title: "",
            description: "",
            image: "",
            color: ""
        },
        loading: false,
        error: false
    }

    handleChange = (event) => {
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name] : event.target.value
            }
        });
        console.log(this.state);
    }

    handleSubmit = async (event) => {
        this.setState({
            loading: true
        })
        event.preventDefault();
        try {
            // let config = {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body : JSON.stringify(this.state.form)
            // }

            // let res = await fetch(`${url}/postRequest`, config);
            // let json = await res.json();

            let res = await setTimeout(() => {

                console.log(this.state.form);

                this.setState({
                    loading: false
                })

                this.props.history.push('home');

                console.log('Hi, im the posth method');
            }, 2000);
            

        } catch (error) {
            this.setState({
                loading: false,
                error: true
            })
        }
        console.log(this.state);

    }

    render(){
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <ServerError/>
        return <NewCard
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                />
    }
}

export default NewCardContainer;