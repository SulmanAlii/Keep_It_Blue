import React,{useState} from 'react'
import {Col, Container, Row,Input,Label,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../css/register.css'


const Signup = () => {

    const [name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [volver,setVolver] = useState(false);
    const [data,setData] = useState(false);


    return (
        <Container fluid className=" border border-blue">
            <Row>
                <Col>
                <div className="register">
                <div className="input_fields">
                <h2  className="title"><b>CREATE AN ACCOUNT</b></h2>
                    <form>
                        <Label>Name</Label> <br/>
                        <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} required/> <br/>
                        <Label >Email</Label> <br/>
                        <input type="email" placeholder="Enter your Email" value={Email} onChange={(e) => setEmail(e.target.value)} required/> <br/>
                        <Label >Password</Label> <br/>
                        <input type="password"  placeholder="Enter your Password" value={Password} onChange={(e) => setPassword(e.target.value)}/> <br/>
                        <Button >Register</Button>
                    </form>
                   <small>Already have an account.<Link to="/login"><b style={{color:"black"}}>Login</b></Link></small>
                </div>
            </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;
