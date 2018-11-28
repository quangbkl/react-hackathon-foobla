import React, {Component} from 'react';

class ItemDate extends Component {
    monthToText = (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthsUpper = months.map(month => {
            return month.substring(0, 3).toLocaleUpperCase();
        });
        return monthsUpper[date.getMonth()];
    }

    weekdayToText = (date) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return days[date.getDay()].substring(0, 1);
    }

    render() {
        const {onMouseMove, date} = this.props;
        const month = date.getDate() === 1 ? this.monthToText(date) : '';
        const weekday = this.weekdayToText(date);

        return (
            <li onMouseMove={onMouseMove}>
                <div className="Item-header">
                    <div className="Item-month">
                        <span>{month}</span>
                    </div>
                    <div className="Item-date">
                        <div>{weekday}</div>
                        <div className="Item-day">{date.getDate()}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ItemDate;
