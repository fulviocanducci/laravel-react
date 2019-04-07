import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Create extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="row mt-2">
                <div className="col-lg-12">
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={e => this.props.change(e.target.value)} placeholder="Digite um novo todo" value={this.props.input} />
                        <span className="input-group-btn">
                           <button className="btn btn-default" type="button" onClick={() => this.props.click() }>Gravar</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create;