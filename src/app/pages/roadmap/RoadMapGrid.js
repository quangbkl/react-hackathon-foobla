import React, {Component} from 'react';
import GridLayout from 'react-grid-layout';
// import '../../../../node_modules/react-grid-layout/css/styles.css'

class RoadMapGrid extends Component {
    render() {
        const layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2},
            {i: 'd', x: 6, y: 0, w: 1, h: 2},
            {i: 'e', x: 8, y: 0, w: 1, h: 2},
            {i: 'f', x: 10, y: 0, w: 1, h: 2},
            {i: 'g', x: 12, y: 0, w: 1, h: 2},
            {i: 'h', x: 14, y: 0, w: 1, h: 2},
            {i: 'i', x: 18, y: 0, w: 1, h: 2},
            {i: 'k', x: 20, y: 0, w: 1, h: 2}
        ];
        return (
            <div className="RoadMapGrid">
                <GridLayout className="GridLayout" isResizable={false} layout={layout} cols={10} rowHeight={12}
                            width={2400}
                    minH={1200}
                >
                    <div key="a">a</div>
                    <div key="b">b</div>
                    <div key="c">c</div>
                    <div key="d">c</div>
                    <div key="e">c</div>
                    <div key="f">c</div>
                    <div key="g">c</div>
                    <div key="h">c</div>
                    <div key="i">c</div>
                    <div key="k">c</div>
                </GridLayout>
            </div>
        )
    }
}

export default RoadMapGrid;