import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from "@mui/base/TablePaginationUnstyled";

import { getPerService } from "../../service/getPerService";
import { getPerBarCode } from "../../service/getPerBarCode";

import SearchIcon from "../../assets/searchIcon.png";
import Made from "../../assets/correct.png";
import NotMade from "../../assets/error.jpg";
import Loading from "../../assets/loading.gif";

import {
  Main,
  DivTable,
  SearchInput,
  InputDiv,
  Div,
  LoadingImage,
} from "./styles";

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;

  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
  }
  `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 55px;
    width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 5px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 4px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
    max-width: 65%;
  }

  & .${classes.actions} > button {
    margin: 0 15px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }

  }
  `
);

const defaultFormFields = {
  codService: "",
  barCode: "",
};

export default function Logs() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { codService, barCode } = formFields;

  const setCode = new Set();

  async function onServiceSearch() {
    setLoading(true);
    if (codService < 3) {
      setLoading(false);
      return;
    }
    const response = await getPerService(codService);
    setLoading(false);

    setData(response.data.message);
  }

  async function onBarCodeSearch() {
    if (barCode < 3) {
      return;
    }
    const response = await getPerBarCode(barCode);
    setData([response.data.message]);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const barCodes = data?.filter((person) => {
    const duplicatedPerson = setCode.has(person.codBarras);
    setCode.add(person.codBarras);
    return !duplicatedPerson;
  });

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - barCodes.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Main>
      <DivTable>
        <Div>
          <InputDiv>
            <SearchInput
              name="codService"
              value={codService}
              onChange={handleChange}
              placeholder="Pesquise pelo serviço"
            />
            <img
              onClick={() => {
                setData([]);
                onServiceSearch();
              }}
              src={SearchIcon}
              alt="ícone de pesquisa"
            />
          </InputDiv>
          <InputDiv>
            <SearchInput
              name="barCode"
              value={barCode}
              onChange={handleChange}
              placeholder="Pesquise código de barras"
            />
            <img
              onClick={() => {
                setData([]);
                onBarCodeSearch();
              }}
              src={SearchIcon}
              alt="ícone de pesquisa"
            />
          </InputDiv>
          {loading && <LoadingImage src={Loading} alt="Carregando" />}
        </Div>

        <Root sx={{ width: "95%" }}>
          <table aria-label="custom pagination table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição da peça</th>
                <th>Descrição do serviço</th>
                <th>Laminação</th>
                <th>Usinagem</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0
                ? barCodes?.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : barCodes
              )?.map((row) => {
                return (
                  <tr key={row.codBarras}>
                    <td style={{ width: 220 }}> {row.codBarras}</td>
                    <td style={{ width: 220 }} align="right">
                      {row.descricao_peca}
                    </td>
                    <td style={{ width: 320 }} align="right">
                      {row.descricao_servico}
                    </td>
                    <td
                      style={{
                        width: 100,
                      }}
                      align="right"
                    >
                      {row?.laminacao?.realizado ? (
                        <img src={Made} />
                      ) : (
                        <img src={NotMade} />
                      )}
                    </td>
                    <td
                      style={{
                        width: 100,
                      }}
                      align="right"
                    >
                      {row?.usinagem?.realizado ? (
                        <img src={Made} />
                      ) : (
                        <img src={NotMade} />
                      )}
                    </td>
                    <td style={{ width: 320 }} align="right">
                      {row.observacao ? row.observacao : "Nenhuma observação"}
                    </td>
                  </tr>
                );
              })}

              {emptyRows > 0 && (
                <tr style={{ height: 3 * emptyRows }}>
                  <td colSpan={3} />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <CustomTablePagination
                  rowsPerPageOptions={[
                    10,
                    20,
                    25,
                    { label: "Todos", value: -1 },
                  ]}
                  colSpan={6}
                  count={barCodes.length}
                  rowsPerPage={rowsPerPage}
                  labelRowsPerPage={"Códigos por página"}
                  page={page}
                  slotProps={{
                    select: {
                      "aria-label": "rows per page",
                    },
                    actions: {
                      showFirstButton: true,
                      showLastButton: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </tr>
            </tfoot>
          </table>
        </Root>
      </DivTable>
    </Main>
  );
}
