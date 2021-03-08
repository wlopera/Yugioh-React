import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "./Yugioh.css";
import "font-awesome/css/font-awesome.min.css";

import { Button } from "reactstrap";

import "react-table/react-table.css";
import "bootstrap/dist/css/bootstrap.css";

import ModalExample from "./ModalExample";

const Yugioh = () => {
  const [cards, setCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});

  useEffect(() => {
    fetch("json/cards.json")
      .then((response) => response.json())
      .then((data) => {
        const data2 = data.map((item, key) => {
          return {
            ...item,
            id: key,
            actions: (
              <div className="text-center">
                {/* use this button to add a edit kind of action */}
                <Button
                  onClick={() => {
                    let obj = data2.find((o) => o.id === key);
                    setModal(!modal);
                    setObj(obj);
                  }}
                  color="inverse"
                  size="sm"
                  round="true"
                  icon="true"
                >
                  <i className="fa fa-edit" />
                </Button>
              </div>
            ),
          };
        });

        setCards(data2);
      });
  }, []);

  const columns = [
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "nivel",
      accessor: "level",
    },
    {
      Header: "Atributo",
      accessor: "attribute",
    },
    {
      Header: "Tipo",
      accessor: "type",
    },
    {
      Header: "ATK",
      accessor: "ATK",
    },
    {
      Header: "DEF",
      accessor: "DEF",
    },
    {
      Header: "description",
      accessor: "description",
      width: 300,
      style: { whiteSpace: "unset" },
    },
    {
      Header: "Image",
      accessor: "image",
      // maxWidth: 300,
      // minWidth: 400,
      Cell: ({ value }) => (
        <img src={`${process.env.PUBLIC_URL}/images/${value}`} width={"50%"} height={"50%"} className="my_image" />
      ),
    },
    {
      Header: "character",
      accessor: "character",
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <div>
      <ModalExample show={modal} setShow={(isShow) => setModal(isShow)} obj={obj} />

      <ReactTable columns={columns} data={cards} />
    </div>
  );
};

export default Yugioh;
