import React, {Component} from 'react';

class RoadMapContainer extends Component {
    render() {
        return (
            <div className="RoadMapContainer">
                <ul>
                    <li>
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
                </ul>
            </div>
        );
    }
}

export default RoadMapContainer;