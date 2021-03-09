import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "./Yugioh.css";
import { Button } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";
import "react-table/react-table.css";
import "bootstrap/dist/css/bootstrap.css";
import FormModal from "../component/FormModal";
import { getColumns } from "../store/dataStore";

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
                {/* Boton para agregar acciones a la tabla */}
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

  const columns = getColumns();
  return (
    <div>
      <FormModal show={modal} setShow={(isShow) => setModal(isShow)} obj={obj} />

      <ReactTable columns={columns} data={cards} pageSize={5} />
    </div>
  );
};

export default Yugioh;
