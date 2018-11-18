import React, {Component} from 'react';
import {Resizable, ResizableBox} from 'react-resizable';


class GridHover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 60,
            height: 60
        };
    }

    render() {
        const {posX, posY} = this.props;
        return (
            <div className="GridHover resizable-box" style={{top: posY, left: posX}}>
                <ResizableBox
                    width={this.state.width}
                    height={this.state.height}
                    axis="x"
                >
                </ResizableBox>
            </div>
        )
    }
}

export default GridHover;