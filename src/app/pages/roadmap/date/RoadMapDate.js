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
    render() {
        const {listTasks} = this.props;

        return (
            <div className="RoadMapDate">
                <ul onScroll={this.onScroll} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove} ref={this.listsDate} >
                    {
                        listTasks.map(task => {

                        })
                    }

                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                    <ItemDate {...this.props}/>
                </ul>
            </div>
        );
    }
}

export default RoadMapDate;
