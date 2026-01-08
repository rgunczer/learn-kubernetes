const express = require('express')
const app = express()
const port = 3000
const defaultColor = 'green';

app.get('/', (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SampleApp</title>
    <style>
      body {
        background-color: ${process.env.BG_COLOR || defaultColor};
      }
    </style>
</head>
<body>
   <h1>Hello from a NodeJS server</h1> 
</body>
</html>
  `;
  res.send(html);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`BG_COLOR is [${process.env.BG_COLOR || defaultColor}]`)
})

