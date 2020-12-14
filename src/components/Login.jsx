import React,{useState} from 'react'
import {Col, Container, Row,Input,Label,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../css/register.css'

const Login = () => {

    const [Email,setEmail] = useState();
const [Password,setPassword] = useState();
const [volver,setVolver] = useState(false);

    return (
        <Container fluid className=" border border-blue">
        <Row>
            <Col>
            <div className="register">
            <div className="input_fields">
            <h2  className="title"><b>CREATE AN ACCOUNT</b></h2>
                <form>
                    <Label >Email</Label> <br/>
                    <input type="email" placeholder="Enter your Email" value={Email} onChange={(e) => setEmail(e.target.value)} required/> <br/>
                    <Label >Password</Label> <br/>
                    <input type="password"  placeholder="Enter your Password" value={Password} onChange={(e) => setPassword(e.target.value)}/> <br/>
                    <Button >Login</Button>
                </form>
               <small>Create an Account.<Link to="/signup"><b style={{color:"black"}}>Register</b></Link></small>

            </div>
        </div>
            </Col>
        </Row>
    </Container>
    )
}

export default Login;
