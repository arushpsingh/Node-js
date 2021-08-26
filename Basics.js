// console.log("Basics of Node");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Display Property</title>
  <style>
    *{
      box-sizing: border-box;
    }
    header{
      border: 2px solid rgb(223, 86, 86);
      background-color: blanchedalmond;
      margin: auto;
      width: 30%;
    }
    img{
      margin: 15px auto;
      width: 350px;
      display: block;
    }
    h4{
      margin: 0px auto;
      text-align: center;
    }
    .box{
      border: 2px solid rgb(61, 61, 61);
      margin: 8px;
      padding: 10px;
      background-color: rgb(233, 159, 159);
      display: inline-block;
      width: 30%;
      box-sizing: border-box;
    }     
    .container{
      margin: auto;
      width: 1000px;
    }
  </style>
</head>
<body>
  <header class="top">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ib8MoRW7x-URow4JXix6fAZLbTqfV48b1Q&
    usqp=CAU" alt="">
    <h4>Welcome </h4>
  </header>
  <div class="container">
    <div class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae est perferendis quod doloremque necessitatibus ipsam voluptatum, eaque, soluta dolor inventore nulla, sequi obcaecati impedit quis. Alias possimus atque repellendus.</p>
    </div>
    <div class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae est perferendis quod doloremque necessitatibus ipsam voluptatum, eaque, soluta dolor inventore nulla, sequi obcaecati impedit quis. Alias possimus atque repellendus.</p>
    </div>
    <div class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae est perferendis quod doloremque necessitatibus ipsam voluptatum, eaque, soluta dolor inventore nulla, sequi obcaecati impedit quis. Alias possimus atque repellendus.</p>
    </div>
  </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});