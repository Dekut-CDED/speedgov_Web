import React from 'react';
import { Row, Col } from 'reactstrap';
import ViolationContainer from './ViolationContainer';
import { connect } from 'react-redux';
import { GetAllLocationViolation } from '../../actions/Location';
import PropTypes from 'prop-types';

import Widget from '../../components/Widget';
import LeafletMap from './components/Map/Map';
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
            <Widget
              title={
                <h6>
                  <span className="badge badge-success"> Configure Map</span>
                </h6>
              }
              refresh
              close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA2}
                        alt="..."
                      />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Chris Gray</h6>
                      <p className="help-block text-ellipsis m-0">
                        Hey! What&apos;s up? So many times since we
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA4}
                        alt="..."
                      />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Jamey Brownlow</h6>
                      <p className="help-block text-ellipsis m-0">
                        Good news coming tonight. Seems they agreed to proceed
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA1}
                        alt="..."
                      />
                      <i className="status status-bottom bg-default" />
                    </span>
                    <div>
                      <h6 className="m-0">Livia Walsh</h6>
                      <p className="help-block text-ellipsis m-0">
                        Check my latest email plz!
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA5}
                        alt="..."
                      />
                      <i className="status status-bottom bg-danger" />
                    </span>
                    <div>
                      <h6 className="m-0">Jaron Fitzroy</h6>
                      <p className="help-block text-ellipsis m-0">
                        What about summer break?
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input
                  type="search"
                  className="form-control form-control-sm bg-custom-dark border-0"
                  placeholder="Search"
                />
              </footer>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col>
            <ViolationContainer />
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
  locations: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
});
export default connect(mapStateToProps)(Dashboard);
