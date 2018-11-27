import React, {Component} from 'react';
import ItemDate from "./ItemDate";

class RoadMapDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicking: false
        };

        this.listsDate = React.createRef();
    }

    onMouseDown = (e) => {
        this.setState({
            clicking: true
        });

        this.lastClientX = e.clientX;
        e.preventDefault();
    }

    onMouseUp = (e) => {
        this.setState({
            clicking: false
        });
    }

    onMouseMove = (e) => {
        if (this.state.clicking) {
            this.listsDate.current.scrollLeft -=
                (-this.lastClientX + (this.lastClientX = e.clientX));
        }
    }

    onScroll = () => {
        console.log('Scrolling...');
    }

    generatorMapDate = (startDate, endDate) => {
        const mapDates = [];
        while (startDate < endDate) {
            mapDates.push(startDate);
            startDate.setDate(startDate.getDate() + 1);
        }

        return mapDates;
    }

    render() {
        const {listTasks} = this.props;
        const {start_date, end_date} = listTasks;
        const mapDates = this.generatorMapDate(new Date(start_date), new Date(end_date));

        return (
            <div className="RoadMapDate">
                <ul onScroll={this.onScroll} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}
                    onMouseMove={this.onMouseMove} ref={this.listsDate}>
                    {
                        mapDates.map(itemDate => {
                            return <ItemDate {...this.props} date={itemDate}/>;
                        })
                    }

                    {/*<ItemDate {...this.props}/>*/}
                </ul>
            </div>
        );
    }
}

export default RoadMapDate;
