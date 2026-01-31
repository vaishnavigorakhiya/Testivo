const express = require("express");
const path = require("path");

const app = express();

// static files
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// API route
app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1, 
      name: "Customizable Name String Art",
      category: "Home Decor",
      image :"/images/StringArtName.jpg",
      description: "Turn your Name into exquisite personalized Name string art."
    },
    {
      id: 2,
      name: "Embroidery Hoop Art",
      category: "Home Decor",
      image :"/images/capEmb.jpeg",
      description: "Custom Embroidered Photo and Hoop"
    },
    {
      id: 3,
      name: "Crochet Art",
      category: "Home Decor",
      image :"/images/CrochatKeyChain.jpg",
      description: "Colorful handmade Crochet things"
    }
  ])
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
