import { Component } from 'react';

export default class Shelf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shelfItems: [
                'shampoo',
                'chocolate',
                'yoghurt'
            ]
        };
    }

    onClickAdd(item) {
        this.props.addItem(item);
    }

    render() {
        const shelfItems = this.state.shelfItems.map((item, i) => {
            return (
                <li key={i}>
                    {item}
                    <button onClick={() => this.onClickAdd(item)}>Add to cart</button>
                </li>
            );
        })
        return (
            <div>
                <h2>Shelf</h2>
                <ul>
                    {shelfItems}
                </ul>
            </div>
        )
    }
}