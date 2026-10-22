import { Component } from 'react';
//import './employers-add-form.css';
import './employers-add-form.scss'
import styled from 'styled-components';

const Header = styled.h3`
    font-size: 35px;
    text-align: center;
`


class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { name, salary } = this.state
        
        if(!name.trim() || !salary || Number(salary) <= 0) {
            return
        }

        this.props.onAdd(name.trim(), Number(salary));

        this.setState({
            name: '',
            salary:''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
        <div className="app-add-form">
            <Header>Добавьте нового сотрудника</Header>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
    }
}

export default EmployersAddForm;