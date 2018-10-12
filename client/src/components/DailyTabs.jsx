import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MondayTable from './MondayTable';
import TuesdayTable from './TuesdayTabel';

export default class DailyTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="daily-tabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Sun
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Mon
            </NavLink>
            
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Tues
            </NavLink>
            
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Wed
            </NavLink>
            
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Thurs
            </NavLink>
            
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
             
              Fri
            </NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              Sat
            </NavLink>
            
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Card body>
                  <MondayTable/>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                <TuesdayTable/>
                </Card>
              </Col>
              {/* <Col sm="6">
                <Card body>
                  <CardText>Form Content</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col> */}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Card body>
                {/* <MedTable/> */}
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}