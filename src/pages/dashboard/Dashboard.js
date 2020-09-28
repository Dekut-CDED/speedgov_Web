import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
} from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Rickshaw from './components/rickshaw/Rickshaw';

import AnimateNumber from 'react-animated-number';

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
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard &nbsp;
        </h1>

        <Row>
          <Col lg={7}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={4}>
          <Widget title={<h6>Calendar</h6>} settings close bodyClass={"pt-2 px-0 py-0"}>
              <Calendar />
              <div className="list-group fs-mini">
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-primary float-right">6:45</span>
                  Weed out the flower bed
                </button>
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-success float-right">9:41</span>
                  Stop world water pollution
                </button>
              </div>
            </Widget>
          </Col>

        </Row>

        <Row>
          <Col lg={4} xs={12}>
          <Widget
              title={<h6><span className="badge badge-success">New</span>Permissions</h6>}
              refresh close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA2} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Chris Gray</h6>
                      <p className="help-block text-ellipsis m-0">Hey! What&apos;s up? So many times since we</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA4} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Jamey Brownlow</h6>
                      <p className="help-block text-ellipsis m-0">Good news coming tonight. Seems they agreed to
                        proceed</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA1} alt="..." />
                      <i className="status status-bottom bg-default" />
                    </span>
                    <div>
                      <h6 className="m-0">Livia Walsh</h6>
                      <p className="help-block text-ellipsis m-0">Check my latest email plz!</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA5} alt="..." />
                      <i className="status status-bottom bg-danger" />
                    </span>
                    <div>
                      <h6 className="m-0">Jaron Fitzroy</h6>
                      <p className="help-block text-ellipsis m-0">What about summer break?</p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input type="search" className="form-control form-control-sm bg-custom-dark border-0" placeholder="Search" />
              </footer>

            </Widget>
          </Col>
          <Col lg={4} xs={12}>
          <Widget
              title={<h6><span className="badge badge-success">New</span>Violations</h6>}
              refresh close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA2} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Chris Gray</h6>
                      <p className="help-block text-ellipsis m-0">Hey! What&apos;s up? So many times since we</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA4} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Jamey Brownlow</h6>
                      <p className="help-block text-ellipsis m-0">Good news coming tonight. Seems they agreed to
                        proceed</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA1} alt="..." />
                      <i className="status status-bottom bg-default" />
                    </span>
                    <div>
                      <h6 className="m-0">Livia Walsh</h6>
                      <p className="help-block text-ellipsis m-0">Check my latest email plz!</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA5} alt="..." />
                      <i className="status status-bottom bg-danger" />
                    </span>
                    <div>
                      <h6 className="m-0">Jaron Fitzroy</h6>
                      <p className="help-block text-ellipsis m-0">What about summer break?</p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input type="search" className="form-control form-control-sm bg-custom-dark border-0" placeholder="Search" />
              </footer>

            </Widget>
          </Col>
          <Col lg={4} xs={12}>
          <Widget
              title={<h6><span className="badge badge-success">New</span> Permission Request</h6>}
              refresh close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA2} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Chris Gray</h6>
                      <p className="help-block text-ellipsis m-0">Hey! What&apos;s up? So many times since we</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA4} alt="..." />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Jamey Brownlow</h6>
                      <p className="help-block text-ellipsis m-0">Good news coming tonight. Seems they agreed to
                        proceed</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA1} alt="..." />
                      <i className="status status-bottom bg-default" />
                    </span>
                    <div>
                      <h6 className="m-0">Livia Walsh</h6>
                      <p className="help-block text-ellipsis m-0">Check my latest email plz!</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img className="rounded-circle" src={peopleA5} alt="..." />
                      <i className="status status-bottom bg-danger" />
                    </span>
                    <div>
                      <h6 className="m-0">Jaron Fitzroy</h6>
                      <p className="help-block text-ellipsis m-0">What about summer break?</p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input type="search" className="form-control form-control-sm bg-custom-dark border-0" placeholder="Search" />
              </footer>

            </Widget>
          </Col>

        </Row>      </div>
    );
  }
}

export default Dashboard;
