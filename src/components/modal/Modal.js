import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.refModal = React.createRef();
    }

    onClickOutsideContent = (e) => {
        if (e.target === this.refModal.current) {
            this.props.onClose();
        }
    }

    render() {
        const {show, onClose} = this.props;

        if (!show) {
            return null;
        }

        return (
            <div className="modal open" onClick={this.onClickOutsideContent} ref={this.refModal}>
                <article className="content-wrapper">
                    {/*<button className="close"/>*/}
                    <div className="content">
                        {this.props.children}
                    </div>
                </article>
            </div>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;
