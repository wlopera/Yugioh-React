import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

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
    let id = event.target.id.value;
    let nombre = event.target.name.value;
    let newObj = [];
    //newObj[id] = [nombre];
    // setJsonData(newObj);
    setModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Carta Yugioh</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input type="text" name="nombre" id="nombre" defaultValue={obj.nombre} />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>
              <Button color="secondary" className="ml-1" onClick={toggle}>
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
