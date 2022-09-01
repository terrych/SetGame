import React, { Component } from 'react';
import "./App.css";
import { Card } from './Card';

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: this.props.board ?? []
        }
    }

    renderCard(array) {
        return (
            <Card
                array={array}
            />
        );
    }

    render() {
        return (
            <div className="col-9 board">
                {Array(3).fill(1).map((el, i) =>
                    <div className="row">
                        {Array(4).fill(1).map((el2, j) =>
                            <div className="col-3">
                                {this.renderCard(this.state.board && this.state.board.length > 0 ? this.state.board[4 * i + j] : [0, 0, 0, 0])}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}