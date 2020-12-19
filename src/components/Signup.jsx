import React,{useState} from 'react'
import {Col, Container, Row,Input,Label,Button} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import '../css/register.css'
import Axios from 'axios';
import {connect} from 'react-redux';


const Signup = (props) => {

    const [name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [volver,setVolver] = useState(false);
    const [data,setData] = useState();


    const register = () => {

        const registerData = {
            nombre : name,
            email : Email,
            password : Password
        }

        Axios.post('https://keepit-blue.herokuapp.com/signup', registerData)
        .then(data => { return localStorage.setItem('token', JSON.stringify({token : data.data.token, name : data.data.user.name})), setVolver(true), setData(data),props.get_token(data),window.location.reload()})
        .catch(err => console.log(err))

        console.log(props.token);
    }


    


    if(volver) return <Redirect  to="/"/>

    return (
        <Container fluid className=" border border-blue">
            <Row>
                <Col>
                <div className="register">
                <div className="input_fields">
                <h2  className="title"><b>Registrate</b></h2>
                    <form>
                        <Label>Name</Label> <br/>
                        <input type="text" placeholder="Introduce tu Nombre" value={name} onChange={(e) => setName(e.target.value)} required/> <br/>
                        <Label >Correo</Label> <br/>
                        <input type="email" placeholder="Introduce tu Email" value={Email} onChange={(e) => setEmail(e.target.value)} required/> <br/>
                        <Label >Contraseña</Label> <br/>
                        <input type="password"  placeholder="Introduce tu Contraseña" value={Password} onChange={(e) => setPassword(e.target.value)}/> <br/>
                        <Button onClick={() => register()}>Register</Button>
                    </form>
                   <small>Ya tienes cuenta.<Link to="/login"><b style={{color:"black"}}>Iniciar Sessión</b></Link></small>
                </div>
            </div>
                </Col>
            </Row>
        </Container>
    )
}



const mapStateToProps = (state) => {
    return {token : state.tokenData}

}


const mapDispatchToProps = dispatch => {
    return {
        get_token : (data) => dispatch({type : "get_tokenData", data: data })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
