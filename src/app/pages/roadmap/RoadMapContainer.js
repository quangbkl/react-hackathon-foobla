import React, {Component} from 'react';
import RoadMapDate from "./date/RoadMapDate";
import GridHover from "./GridHover";
import RoadMapGrid from "./RoadMapGrid";

class RoadMapContainer extends Component {
    state = {
        hoverX: 0,
        hoverY: 0,
        scrollLeft: 0,
        listTasks: {
            start_date: new Date('2018-11-11T03:24:00').toString(),
            end_date: new Date('2018-12-30T03:24:00').toString(),
            tasks: [
                {
                    name: 'Quang BKL',
                    notes: 'Hey. I am Quang.',
                    members: [],
                    comments: ['Hello. Where you come from?'],
                    owner: 'quang_bkl_99',
                    is_completed: false,
                    start_date: new Date('2018-11-15T03:24:00').toString(),
                    end_date: new Date('2018-11-18T03:24:00').toString(),
                    row: 1
                }
            ]
        }
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

    onScrollDate = (e) => {
        this.setState({
            scrollLeft: e.target.scrollLeft
        });
    }

    render() {
        const {listTasks} = this.state;
        return (
            <div className="RoadMapContainer">
                <div className="RoadMapContent">
                    <RoadMapDate onMouseMove={this.onMouseMoveItem} listTasks={listTasks}
                                 onScrollDate={this.onScrollDate}/>
                    {/*<GridHover posX={this.state.hoverX} posY={this.state.hoverY}/>*/}
                    <RoadMapGrid listTasks={listTasks} scrollLeft={this.state.scrollLeft}/>
                </div>
            </div>
        );
    }
}

export default RoadMapContainer;
