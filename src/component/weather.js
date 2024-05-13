import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';

const Weather =() => {

    const [weather,setWeather] = useState();

    const handleSearch = (e) => {
        let location = e.target.value;
        if(location){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=16764c64bc9a3f01a334b3896066d1ca`)
            .then((response)=>{
                setWeather(response.data)
                console.log("data")
                console.log(weather)
            })
            .catch(error =>{
                 console.log("error",error)
            })

        }
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      
        return (
          <TableContainer component={Paper}>
      
      
              <input
                  type = "text"
                  placeholder='Search Country..'
                  onChange={handleSearch}
                  />
              
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell >Country</StyledTableCell>
                  <StyledTableCell >Humidity</StyledTableCell>
                  <StyledTableCell >Temperature</StyledTableCell>
                  <StyledTableCell >Pressure</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <StyledTableRow >
                    <StyledTableCell >{weather?.name}</StyledTableCell>
                    <StyledTableCell >{weather?.main?.humidity}</StyledTableCell>
                    <StyledTableCell >{weather?.main?.temp}</StyledTableCell>
                    <StyledTableCell >{weather?.main?.pressure}</StyledTableCell>
                  </StyledTableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
        );
}

export default Weather


