import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Progress, Alert} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {dismissAlert} from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import {changeActiveSidebarItem} from '../../actions/navigation';
import {logoutUser} from '../../actions/user';

class Sidebar extends React.Component {
    static propTypes = {
        sidebarStatic: PropTypes.bool,
        sidebarOpened: PropTypes.bool,
        dispatch: PropTypes.func.isRequired,
        activeItem: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
        }).isRequired,
    };

    static defaultProps = {
        sidebarStatic: false,
        activeItem: '',
    };

    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);
    }

    componentDidMount() {
        this.element.addEventListener('transitionend', () => {
            if (this.props.sidebarOpened) {
                this.element.classList.add(s.sidebarOpen);
            }
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
            if (nextProps.sidebarOpened) {
                this.element.style.height = `${this.element.scrollHeight}px`;
            } else {
                this.element.classList.remove(s.sidebarOpen);
                setTimeout(() => {
                    this.element.style.height = '';
                }, 0);
            }
        }
    }

    dismissAlert(id) {
        this.props.dispatch(dismissAlert(id));
    }

    doLogout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <nav
                className={cx(s.root)}
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <header className={s.logo}>
                    <a >DeKUT <span
                        className="fw-bold">StuSurvey</span></a>
                </header>
                <ul className={s.nav}>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard"
                        isHeader
                        iconName="flaticon-home"
                        link="/app/main"
                        index="main"
                    />
                    <h5 className={[s.navTitle, s.groupTitle].join(' ')}>MISCALLENEOUS</h5>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Notifications"
                        isHeader
                        iconName="flaticon-layers"
                        link="/app/notifications"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Components"
                        isHeader
                        iconName="flaticon-list"
                        link="/app/forms"
                        index="forms"
                        childrenLinks={[
                            {
                                header: 'Map', link: '/app/maps',
                            },
                        ]}
                    />
                </ul>
                <h5 className={s.navTitle}>
                    LABELS
                    {/* eslint-disable-next-line */}
                    <a className={s.actionLink}>
                        <i className={`${s.glyphiconSm} glyphicon glyphicon-plus float-right`}/>
                    </a>
                </h5>
                {/* eslint-disable */}
                <ul className={s.sidebarLabels}>
                    <li>
                        <a href="#">
                            <i className="fa fa-circle text-success mr-2"/>
                            <span className={s.labelName}>My Recent</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-circle text-primary mr-2"/>
                            <span className={s.labelName}>Starred</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-circle text-danger mr-2"/>
                            <span className={s.labelName}>Background</span>
                        </a>
                    </li>
                </ul>
                {/* eslint-enable */}
            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarStatic: store.navigation.sidebarStatic,
        alertsList: store.alerts.alertsList,
        activeItem: store.navigation.activeItem,
    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
