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
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="tel"  />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridHall">
              <Form.Label>Dịch vụ</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBook">
              <Form.Label>Ngày đặc tiệc</Form.Label>
              <Form.Control type="date"  Value= {this.props.temInfo.organization_date}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBook">
              <Form.Label>Ca</Form.Label>
              <Form.Control type="text"  value= {`Ca ${this.props.temInfo.shift}`}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridShiff">
                <Form.Label>Menu</Form.Label>
                <Form.Control type="text" value= {`Menu ${this.props.temInfo.menu}`}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridShiff">
                <Form.Label>Sảnh</Form.Label>
                <Form.Control type="text" value = {`Sảnh ${this.props.temInfo.wedding_hall}`}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Tổng chi phí:</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          
        </Form>
      </>
    );
  }
}

export default A_modal;