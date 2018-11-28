import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';

// import '../../../../node_modules/react-grid-layout/css/styles.css'

class RoadMapGrid extends Component {
    constructor(props) {
        super(props);

        this.grid = React.createRef();
    }

    differenceDay = (start_date, end_date) => {
        const oneDay = 24 * 60 * 60 * 1000;
        start_date.setHours(0);
        end_date.setHours(0);
        const diffDay = (end_date.getTime() - start_date.getTime()) / oneDay;

        return diffDay;
    }

    calculateDataGrid = (listTasks) => {
        const {start_date, end_date, tasks} = listTasks;
        const numOfCols = this.differenceDay(new Date(start_date), new Date(end_date));
        const dataGrids = tasks.map(task => {
            const x = this.differenceDay(new Date(start_date), new Date(task.start_date));
            const w = this.differenceDay(new Date(task.start_date), new Date(task.end_date));
            const y = task.row;
            return {x, y, w};
        });

        return {
            cols: numOfCols,
            data: dataGrids
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.grid.current.scrollLeft = this.props.scrollLeft;
    }

    render() {
        const {listTasks} = this.props;
        const dataGrids = this.calculateDataGrid(listTasks);

        return (
            <div className="RoadMapGrid" ref={this.grid}>
                <ReactGridLayout
                    className="layout"
                    cols={dataGrids.cols}
                    rowHeight={40}
                    width={dataGrids.cols * 60 + 10}
                    verticalCompact={false}
                    style={{width: dataGrids.cols * 60}}
                >
                    {
                        dataGrids.data.map((data, index) => {
                            return <div key={index}
                                        data-grid={{x: data.x, y: data.y, w: data.w, h: 1, maxH: 1}}>{index}</div>;
                        })
                    }
                </ReactGridLayout>
            </div>
        )
    }
}

RoadMapGrid.propTypes = {
    listTasks: PropTypes.object.isRequired,
}

export default RoadMapGrid;
