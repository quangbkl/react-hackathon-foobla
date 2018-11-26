import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';

// import '../../../../node_modules/react-grid-layout/css/styles.css'

class RoadMapGrid extends Component {
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

    render() {
        const {listTasks} = this.props;
        const dataGrids = this.calculateDataGrid(listTasks);

        return (
            <div className="RoadMapGrid">
                <GridLayout className="layout" cols={dataGrids.cols} rowHeight={40} width={dataGrids.cols * 60} verticalCompact={false}>
                    {
                        dataGrids.data.map((data, index) => {
                            return <div key={index} data-grid={{x: data.x, y: data.y, w: data.w, h: 1}}>{index}</div>;
                        })
                    }
                    <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2}}>a</div>
                    <div key="b" data-grid={{x: 1, y: 0, w: 7, h: 1, minW: 1, maxH: 1}}>b</div>
                    <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
                </GridLayout>
            </div>
        )
    }
}

RoadMapGrid.propTypes = {
    listTasks: PropTypes.object.isRequired,
}

export default RoadMapGrid;
