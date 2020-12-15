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

    console.log(comentarios);


        const posts = comentarios.map(value => {
           return  <Col xs="4" key={value.id}>
                        <h1>{value.nombre}</h1>
                            <img src={`http://localhost:5000/img/${value.foto}`} className="opinion_img" alt="IMAGE_OPINION"/>
                            <ul className="nom_platja">
                                <li>{value.nomplatja},{value.nomcomarca.substring(5,value.nomcomarca.length)}</li>
                            </ul>
                            <h5 className="mt-2 m-1"><i class="fa fa-circle" aria-hidden="true"></i>{value.opinion}</h5>
                            <span>{Array.from({length : value.puntuacion}, () => <i class="fa fa-star" aria-hidden="true" style={{color:"#FFDF00"}}></i>) }</span>
                    </Col>
        })
    

    return (
        <Container fluid className="main_container_opinion">
        <h1 className="title">Comentarios</h1>
        <Row className="mb-2 ml-3">
        <span>Order By</span>
        <hr/>
        <select className="h-6 ml-1" name="option" id="option" onChange={(e) => orderPosts(e)}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        </Row>
           
            <Row>
                    {posts}
                    {props.state?.length > 0 ? 
                      props.state?.map(value => {
                        return  <Col xs="4" key={value.data.data.item.id} className="m-3">
                                  <h1>{value.data.data.item.nombre}</h1>
                                  <img src={`http://localhost:5000/img/${value.data.data.item.foto}`} className="opinion_img" alt="IMAGE_OPINION"/>
                                  <h5>{value.data.data.item.opinion}</h5>
                                  <span>{Array.from({length : value.data.data.item.puntuacion}, () => <i class="fa fa-star" aria-hidden="true" style={{color:"#FFDF00"}}></i>) }</span>
                                </Col>
                      }) : ""
                    }
                </Row>
        </Container>
    )

    }


const maStateToProps = (state) => {
        return {state : state.opiniones}
}

export default connect(maStateToProps)(Opinion);
