import React, { FC, useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Country: React.FC = () => {
  const navigate = useNavigate();
  // const [id, setId] = React.useState<IState["id"]>("")
  // const [id, setId] = React.useState('');

  const [data, setData] = useState<any>();
  const [input, setInput] = useState<string>("");

  const handleChange = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${input}`
    );
    setData(response);
    console.log(response.data);
    navigate("/Details", { state: { data: response.data } });
  };

//   const handleDisable = (event) =>{
//     setId(event.target.value);
//     console.log(id)
// };

  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: "100px",
        height: "300px",
        border: "1px solid black",
        bgcolor: " #e2e4e9;",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" data-testid ='Country_Data'>Country Data</Typography>
        <TextField
          style={{ marginBottom: "10px" }}
          id="textfield"
          label="Entry Country"
          onChange={(e) => setInput(e.target.value)}
         
        />
        <Button
          style={{ padding: 10, paddingRight: "80px", paddingLeft: "80px" }}
          variant="contained"
          id="submit"
          data-testid="submit"
          title="Country"
          onClick={handleChange}
         
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};
export default Country;
