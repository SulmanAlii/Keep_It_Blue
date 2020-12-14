import React,{useState} from "react";
import { Col, Container,Form,FormGroup,Row,Button } from "reactstrap";
import './contacto.css'
import emailjs from 'emailjs-com'

const Contacto = () => {


    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [City, setCity] = useState()
    const [Pregunta, setPregunta] = useState()


    const onSubmit = (e) => {
        e.preventDefault()
        const template = {
            name : Name,
            from_name : Email,
            city : City,
            message : Pregunta
        }

        console.log(template);

        emailjs.send('service_610w2nv','template_wskqtlr', template,'user_weIWTfBfNxWteC5kwuTOT')
        .then((result) => {
            setName(" ")
            setEmail(" ")
            setCity(" ")
            setPregunta(" ")
        }).catch((err) => {
            console.log(err);
        });
    }


return (
    <Container fluid className="main_container border border-blue ">
        <Col>
        <h1 className="contact_title">Contacto</h1>

            <Row className="row_form d-flex justify-content-center ">
                <Form className="text-center form_contacto" onSubmit={onSubmit}>
                    <FormGroup className="form_group" >
                        <label htmlFor="name">Nombre</label><br/>
                        <input type="text" placeholder="Enter Your Name" id="name"  name="user_name" value={Name}  onChange={(e) => setName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" placeholder="Enter Your Email" id="email" value={Email}  name="user_email" onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="Ciudad">Ciudad</label><br/>
                        <input type="text" placeholder="Enter Your City" id="Ciudad" value={City}  name="city" onChange={(e) => setCity(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="question">Pregunta</label><br/>
                        <textarea type="text" placeholder="Ask Your Question" id="question" value={Pregunta}  name="pregunta" onChange={(e) => setPregunta(e.target.value)}/>
                    </FormGroup>
                    <Button className="contact_button" type="submit">SEND</Button>
                </Form>
            </Row>
        </Col>
    </Container>
);



}

export default Contacto; 