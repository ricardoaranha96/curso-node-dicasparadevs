const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/?retryWrites=true&w=majority`
    );
    return console.log("Conexão com o banco de dados realizada com sucesso");
  } catch (error) {
    return console.log("Ocorreu um erro ao se conectar com o banco de dados");
  }
};

module.exports = connectToDatabase;
