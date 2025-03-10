import React, { useState } from "react";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState();

  const handleCalculate = () => {
    if(!input || input == '') {
      setSum(0);  
      return;    
    };
    let delimiter = /[\\n,]+/;
    let numSet = input;
    if(input.startsWith('//')) {
      let delimterString = input.split('//')[1].split('\\n')
      delimiter = delimterString[0];
      numSet = delimterString[1]; 
    }
    const numArray = numSet.split(delimiter);
    const sumEvaluated = numArray.map((num) => parseInt(num)).reduce((acc, val) => {
        return acc+val
    }, 0);
    setSum(sumEvaluated);
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    bgcolor="#f8fafa"
  >
    <Card sx={{ width: 400, p: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" align="center" fontWeight="bold">
          String Calculator
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
          Enter numbers
          <br />
          (Format: <span style={{ color: "purple" }}>//[delimiter]\n[numbers]</span>)
        </Typography>
        <TextField
          fullWidth
          data-testid="input"
          variant="outlined"
          placeholder="E.g., //;\n1;2;3 or 1,2,3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          fullWidth
          data-testid="calculate"
          variant="contained"
          sx={{ mt: 2, bgcolor: "blue" }}
          onClick={handleCalculate}
        >
          Calculate
        </Button>
        {(sum || sum == 0) && <Typography data-testid="output" variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
          Sum is: {sum}
        </Typography>}
      </CardContent>
    </Card>
  </Box>
  );
}

export default App;
