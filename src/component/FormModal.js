import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import ToolTipMain from "../component/ToolTipMain";

import "./FormModal.css";

const FormModal = (props) => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});

  useEffect(() => {
    setModal(props.show);
    setObj(props.obj);
  }, [props.show]);

  const toggle = () => {
    setModal(!modal);
    props.setShow(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let id = event.target.id.value;
    // let nombre = event.target.name.value;
    // let newObj = [];
    //newObj[id] = [nombre];
    // setJsonData(newObj);
    setModal(!modal);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: "905px" }}>
      <ModalHeader toggle={toggle}>Carta Juego Yugioh</ModalHeader>
      <ModalBody className="modalBodyContainer">
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Row>
            <Col>
              <img src={`${process.env.PUBLIC_URL}/images/${obj.image}`} width={"85%"} height={"90%"} />
            </Col>
            <Col style={{ marginRight: "10px" }}>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nombre"
                    id="nombre"
                    defaultValue={obj.nombre}
                    placeholder="Nombre"
                    style={{ paddingTop: "10px" }}
                  />
                  <ToolTipMain target="nombre" message="Carta en español" />
                </Col>
                <Col>
                  <Input type="text" name="name" id="name" defaultValue={obj.name} placeholder="Name" />
                  <ToolTipMain target="name" message="Carta en inglés" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Input type="text" name="level" id="level" defaultValue={obj.level} placeholder="Nivel" />
                  <ToolTipMain target="level" message="Nivel" />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="attribute"
                    id="attribute"
                    defaultValue={obj.attribute}
                    placeholder="Atributo"
                  />
                  <ToolTipMain target="attribute" message="Atributos" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Input type="text" name="ATK" id="ATK" defaultValue={obj.ATK} placeholder="Puntos de ataque" />
                  <ToolTipMain target="ATK" message="Puntos de ataque" />
                </Col>
                <Col>
                  <Input type="text" name="DEF" id="DEF" defaultValue={obj.DEF} placeholder="Puntos de defensa" />
                  <ToolTipMain target="DEF" message="Puntos de defensa" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Input type="text" name="type" id="type" defaultValue={obj.type} placeholder="Tipo de carta" />
                  <ToolTipMain target="type" message="Tipo de carta" />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="character"
                    id="character"
                    defaultValue={obj.character}
                    placeholder="Pertence a"
                  />
                  <ToolTipMain target="character" message="Aquien pertenece la carta" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Input
                    type="textarea"
                    rows={10}
                    name="description"
                    id="description"
                    defaultValue={obj.description}
                    placeholder="Descripcion"
                  />
                  <ToolTipMain target="description" message="Descripción de la carta" />
                </Col>
              </Row>
              <FormGroup style={{ paddingTop: "20px" }}>
                <Button color="primary" type="submit" style={{ float: "right" }}>
                  Salvar
                </Button>
                <Button
                  color="secondary"
                  className="ml-1"
                  onClick={toggle}
                  style={{ float: "right", marginRight: "2px" }}
                >
                  Cancelar
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default FormModal;
