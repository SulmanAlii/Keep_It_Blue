import React,{useState} from 'react'
import {Col, Container, Row,Input,Label,Button} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import '../css/register.css'
import Axios from 'axios';

const Login = () => {

    const tokenn = JSON.parse(localStorage.getItem('token'))

    const [Email,setEmail] = useState();
    const [Password,setPassword] = useState();
    const [volver,setVolver] = useState(false);
    



const login = () => {
    const login_data = {
        email : Email,
        password : Password
    }

    Axios.post('https://keepit-blue.herokuapp.com/login' , login_data)
    .then((user) => {
        if(user.data.token){
            localStorage.setItem('token', JSON.stringify({token : user.data.token, name: user.data.user.name}));
            setVolver(true)
            window.location.reload()
            
        }
    })
    .catch(err => console.log(err))
    }

    if(volver) return <Redirect  to="/"/>


    return (
        <Container fluid className=" border border-blue">
        <Row>
            <Col>
            <div className="register">
            <div className="input_fields">
            <h2  className="title"><b>Iniciar sesión</b></h2>
                <form>
                    <Label >Correo</Label> <br/>
                    <input type="email" placeholder="Introduce tu correo" value={Email} onChange={(e) => setEmail(e.target.value)} required/> <br/>
                    <Label >Contraseña</Label> <br/>
                    <input type="password"  placeholder="Introduce contraseña" value={Password} onChange={(e) => setPassword(e.target.value)}/> <br/>
                    <Button onClick={() => login()}>Iniciar sessión</Button>
                </form>
               <small>Crear una cuenta.<Link to="/signup"><b style={{color:"black"}}>Registro</b></Link></small>

            </div>
        </div>
            </Col>
        </Row>
    </Container>
    )
}

export default Login;
