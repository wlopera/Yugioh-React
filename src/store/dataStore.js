export const getColumns = () => {
  const columns = [
    {
      Header: "Nombre",
      accessor: "nombre",
      sortable: true,
      filterable: true,
    },
    {
      Header: "nivel",
      accessor: "level",
      sortable: true,
    },
    {
      Header: "Atributo",
      accessor: "attribute",
      sortable: true,
      filterable: true,
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
      style: { overflow: "hidden", textOverflow: "ellipsis" },
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

  return columns;
};
