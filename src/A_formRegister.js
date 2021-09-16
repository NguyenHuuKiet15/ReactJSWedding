import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , FormControl, InputGroup, Table } from 'react-bootstrap';
import API, { endpoints } from './API';



class A_formRegister extends React.Component {
    constructor() {
        super()
        this.state = {
            "weddings": [],
            "tempData": [],
            "getData": [],
        }
    }
    componentDidMount() {
        API.get(endpoints['weddings']).then(res => {
            this.setState({
                "weddings": res.data.results,

            })
        })
    }
    isChange = (event) => {
        const dl = event.target.value
        var newStateArray = this.state.tempData.slice();
        newStateArray.push(dl);
        
        this.setState({
            tempData : Array.from(new Set(newStateArray))
        })
        
        
        console.log(this.state.tempData)
    }
    getText = (data) => {
        this.setState({
            getData: data
        })
      
    }
    
    render() {
        var arrayData = []
        this.state.weddings.map((item) => {
            for (let k = 0; k < this.state.getData.length; k++){
                if (item.organization_date.indexOf(this.state.getData[k]) !== -1 ||  item.name.indexOf(this.state.getData[k]) !== -1 ||
                (item.organization_date.indexOf(this.state.getData[k]) !== -1 &&  item.name.indexOf(this.state.getData[k]) !== -1)) {
                    arrayData.push({
                        "id": item.id,
                        "name": item.name,
                        "date": item.organization_date,
                        "shift": item.shift,
                        "wedding_hall": item.wedding_hall,
                    },)
                    break
                }
            }

           
        })
        console.log(this.state.getData.length)
        // console.log(arrayData)

        return (
            <>
                <section className="locator-store">
                    <div className="obj">
                        <div className="locator-store-title center">
                            <h2>Đăng kí đặt chỗ</h2>
                        </div>
                        <div className="content-contact-inner">
                            <div className="order-party-form">
                                <form>
                                    <div className="email-nCustomer input">
                                        <div className="email label">
                                            <div><p>Email:</p></div>
                                            <input type="email" id="email" />
                                        </div>
                                        <div className="nCustomer label">
                                            <div><p>Số lượng khách:</p></div>
                                            <input type="number" id="number" />
                                        </div>
                                    </div>
                                    <div className="name-phone input">
                                        <div className="name label">
                                            <div><p>Họ và tên:</p></div>
                                            <input type="text" id="name" />
                                        </div>
                                        <div className="phone label">
                                            <div><p>Số điện thoại:</p></div>
                                            <input type="text" id="phone" />
                                        </div>
                                    </div>
                                    <div className=" input">
                                        <div >
                                            <div className="lobby label">
                                                <div><p>Sảnh tiệc:</p></div>
                                                <input type="number" placeholder id="lobby" />
                                            </div>
                                            <div className="time-date label">
                                                <div><p>Thời gian:</p></div>
                                                <div className="time input">
                                                    <select>
                                                        <option>Buổi sáng (10h00 - 14h30)</option>
                                                        <option>Buổi chiều (16h00 - 20h30)</option>
                                                        <option value="Cả ngày">Cả ngày</option>
                                                    </select>
                                                    <div className="date" style={{ marginTop: 0, width: '150px !important' }}>
                                                        <input type="date" placeholder id="date" style={{ width: '150px !important' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textarea label">
                                        <div className="submit">
                                            <button type="submit" id="submit">Đăng ký</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="serchInfo" style={{ width: '100%', marginTop: '50px', padding: '20px' }}>
                                    <InputGroup className="mb-3">
                                        <input type="date" name="sDate"  style={{ width: '20px !important' }} onChange={(event) => this.isChange(event)}/>
                                        <select defaultValue="0" name="shift" onChange={(event) => this.isChange(event)} >
                                            <option value="0"> Sảnh </option>
                                            <option value="Wedding6">Wedding6 </option>
                                            <option value="Wedding5">Wedding5</option>
                                            <option value="Wedding4">Wedding4</option>
                                        </select>
                                        <FormControl 
                                            placeholder="Nhập từ khóa tìm kiếm" />
                                        <InputGroup.Append >
                                            <Button style={{ margin: '0' }} variant="info" onClick={(data) => this.getText(this.state.tempData)}>Tìm</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Name</th>
                                                <th>organization_date</th>
                                                <th>shift</th>
                                                <th>wedding_hall</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {arrayData.map(x => (
                                                <A_Row name={x.name} stt={x.id} date={x.date}
                                                    shift={x.shift} wedding_hall={x.wedding_hall} />
                                            ))}

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </>
        );
    }
}

class A_Row extends React.Component {
    render() {

        return (
            <>
                <tr>
                    <td>{this.props.stt}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.shift}</td>
                    <td>{this.props.wedding_hall}</td>
                </tr>
            </>
        )
    }
}

export default A_formRegister;