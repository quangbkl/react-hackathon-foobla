import React, {Component} from 'react';
import RoadMapHeader from "./RoadMapHeader";
import RoadMapContainer from "./RoadMapContainer";
import ReactGridLayout from 'react-grid-layout';

class RoadMapPage extends Component {
    render() {
        return (
            <div className="RoadMapPage">
                <RoadMapHeader/>
                <RoadMapContainer/>
            </div>
        );
    }
}

export default RoadMapPage;
