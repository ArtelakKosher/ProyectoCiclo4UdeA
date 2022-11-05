import React from "react";

import MetaData from "../components/layout/metadata/MetaData";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import orderNowImg from "../assets/images/content/delivery72RESO.png";
import "../assets/styles/order-now-section.css";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";

import { FaShippingFast, FaShieldAlt } from "react-icons/fa";

import "../assets/styles/home.css";

import whyImg from "../assets/images/sellos/jalav_ocre_azul_20cm.png";

import { RiCheckboxCircleFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <MetaData title="Inicio" />
      <section>
        <br />
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="order-now__content  ">
                <h5 className="mb-3" style={{color:"#12284C"}}>Realiza tu pedido fácilmente</h5>
                <h1 className="mb-4 order-now__title" style={{color:"#12284C"}}>
                  <span>¿Con antojos?</span> Porqué no darte <br /> un gusto
                  <span> ahora.</span>
                </h1>

                <p style={{color:"#12284C"}}>¡Descubre los deliciosos sabores de nuestros productos!</p>

                <div className="order-now__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link
                      to="/products"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Ordena ahora
                    </Link>
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>

                <div className=" order-now__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <FaShippingFast size={25} />
                    </span>{" "}
                    Sin gastos de envío
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <FaShieldAlt size={25} />
                    </span>{" "}
                    Pago 100% seguro
                  </p>
                </div>
              </div>
            </Col>

            <Col
              lg="6"
              md="6"
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div className="order-now__img">
                <img src={orderNowImg} alt="ordernow-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <br />

      <section className="why__choose-us">
        <br />
        <Container>
          <Row>
            <Col
              lg="6"
              md="6"
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                padding: "40px",
              }}
            >
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__artelak">
                <h2 className="artelak__title mb-4" style={{color:"#12284C"}}>
                  ¿Por qué <span>Artelak</span>?
                </h2>
                <p className="artelak__desc" style={{color:"#12284C"}}>
                  Porque necesitamos productos reales, procesos honestos y
                  rigurosos que permitan contribuir con una alimentación rica en
                  valores nutricionales. 
                  <br />
                  <br />
                  Nuestros productos hablan de nuestros
                  valores, esos que nuestra familia nos ha inculcado y ese valor
                  agregado sí que hace competencia. 
                  <br />
                  <br />
                  No nos interesa lucrarnos por engañar a nuestros clientes, nos 
                  interesa un negocio justo, donde el comprador recibe lo que se 
                  le ofrece. Un comprador exigente que tiene conciencia y 
                  entendimiento de llevar a su hogar productos que cuiden su salud. 
                  All fin y al cabo saldrá más costoso curar una enfermedad que 
                  prevenirla con comida de verdad.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <RiCheckboxCircleFill size={25} /> Productos naturales
                    </p>
                    <p className="choose__us-desc">
                      Nuestros productos no contienen almidones ni espesantes.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <RiCheckboxCircleFill size={25} /> Productos de calidad
                    </p>
                    <p className="choose__us-desc">
                      Contamos con certificación Kosher Jalav Israel. Nuestra producción es responsable, apoyamos el silvo-pastoreo, práctica verde.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <RiCheckboxCircleFill size={25} /> Atención personalizada
                    </p>
                    <p className="choose__us-desc">
                      Nos encargamos de realizar seguimiento desde la tu solicitud de pedido, hasta que llegue a la puerta de tu casa.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home; //Arrow funtion atajo: rafce
