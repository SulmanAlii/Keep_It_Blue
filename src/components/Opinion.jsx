import React,{useEffect,useState} from 'react'
import { Col, Container, Row } from 'reactstrap';
import '../css/opinion.css';
import {connect} from 'react-redux';


const Opinion = (props) => {

    const [comentarios, setcomentarios] = useState([])
    const [orderBy, setorderBy] = useState();


    useEffect(() =>  {
        fetch("http://localhost:5000/opinions")
        .then(data => data.json())
        .then(opinions => setcomentarios(opinions))
        .catch(err => console.log("ERROR", err))
    },[])


    const orderPosts = (e) => {
        setorderBy(e.target.value)

        comentarios.sort((a,b) => a > b ? 1 : -1)
        
    }

 
        const posts = comentarios.map(value => {
            let time = value.createdAt.split("T",1);
           return  <Col xs="12" sm="6" md="4" key={value.id}>
                        <h1 style={{display:"inline-block"}}>{value.nombre+"  "}</h1>
                        <h6 style={{display:"inline-block", float:"right"}}>{time}</h6>
                            <img src={`http://localhost:5000/img/${value.foto}`} className="opinion_img" alt="IMAGE_OPINION"/>
                            <h5>{value.opinion}</h5>
                            <span>{Array.from({length : value.puntuacion}, () => <i class="fa fa-star" aria-hidden="true" style={{color:"#FFDF00"}}></i>) }</span>
                        </Col>
        })
    

    return (
        <Container fluid className="main_container_opinion">
            <span>Order By</span><select name="option" id="option" onChange={(e) => orderPosts(e)}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
                <Row>
                    {posts}
                </Row>
        </Container>
    )

    }
export default Opinion;
