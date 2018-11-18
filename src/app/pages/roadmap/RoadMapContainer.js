import React, {Component} from 'react';
import RoadMapDate from "./date/RoadMapDate";
import GridHover from "./GridHover";
import RoadMapGrid from "./RoadMapGrid";

class RoadMapContainer extends Component {
    state = {
        hoverX: 0,
        hoverY: 0
    }

    onMouseMoveItem = (e) => {
        const rect = e.target.getBoundingClientRect();
        const mouseY = e.clientY;
        const posX = rect.x;
        const posY = Math.floor((mouseY - 46) / 60) * 60 - 2;
        this.setState({
            hoverX: posX,
            hoverY: posY
        });
    }

    render() {
        return (
            <div className="RoadMapContainer">
                <div className="RoadMapContent">
                    <RoadMapDate onMouseMove={this.onMouseMoveItem}/>
                    <GridHover posX={this.state.hoverX} posY={this.state.hoverY}/>
                    <RoadMapGrid/>
                </div>
            </div>
        );
    }
}

export default RoadMapContainer;