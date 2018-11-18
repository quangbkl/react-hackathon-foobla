import React, {Component} from 'react';

class ItemDate extends Component {
    render() {
        const {onMouseMove} = this.props;

        return (
            <li onMouseMove={onMouseMove}>
                <div className="Item-header">
                    <div className="Item-month">
                        <span>SEP</span>
                    </div>
                    <div className="Item-date">
                        <div>M</div>
                        <div className="Item-day">3</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ItemDate;