import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp, faPlus} from '@fortawesome/free-solid-svg-icons'

class RoadMapHeader extends Component {
    render() {
        return (
            <div className="RoadMapHeader">
                <div>Left</div>
                <div>
                    <div className="SelectItem">
                        Quang BKL
                        <FontAwesomeIcon style={{'margin-left': 4}} icon={faChevronDown}/>
                    </div>
                    <a className="AddBrief" data-tip="Add brief">
                        <FontAwesomeIcon icon={faPlus}/>
                    </a>
                </div>
                <div>Right</div>
            </div>
        );
    }
}

export default RoadMapHeader;