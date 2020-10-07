import React from 'react';
import { Row, Col } from 'reactstrap';
import ViolationContainer from './ViolationContainer';
import Vio from './vioContainer';
import { connect } from 'react-redux';
import { GetAllLocationViolation } from '../../actions/Location';
import PropTypes from 'prop-types';

import Widget from '../../components/Widget';
import LeafletMap from './components/Map/MapContainer';
import DashboardData from './components/Data/appdata';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';

import s from './Dashboard.module.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
  }
  componentDidMount() {
    this.props.dispatch(GetAllLocationViolation());
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col>
            <h1 className="page-title">Dashboard &nbsp;</h1>
          </Col>
          <Col>{/* <DashboardData />*/}</Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Widget className="bg-transparent">
              <LeafletMap />
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Col>
              <ViolationContainer />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <Vio />
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  GetAnauthorizedRequests: PropTypes.func.isRequired,
  locations: PropTypes.object.isRequired,
};

Dashboard.propTypes = {
  locations: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
});
export default connect(mapStateToProps)(Dashboard);
