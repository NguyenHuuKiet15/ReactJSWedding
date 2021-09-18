import React from 'react';
import {  Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class A_modal extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên" value= {this.props.temInfo.name} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTK">
              <Form.Label>Số tài khoản</Form.Label>
              <Form.Control type="tel" placeholder="STK" value= {this.props.temInfo.stk}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridHall">
              <Form.Label>Sảnh tiệc</Form.Label>
              <Form.Control type="text" value= {this.props.temInfo.hall}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBook">
              <Form.Label>Ngày đặc tiệc</Form.Label>
              <Form.Control type="date"  defaultValue= {this.props.temInfo.date}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridShiff">
                <Form.Label>Ca</Form.Label>
                <Form.Control type="text" value= {this.props.temInfo.shift}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Tổng:</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          
        </Form>
      </>
    );
  }
}

export default A_modal;