var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Anandhukrishnacs:Anandhu9048381226@cluster0.9aerkak.mongodb.net/CASESTUDY?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch((error) => {
    console.log(err);
  });
