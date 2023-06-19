const fs = require("fs");
const path = require("path");

//Criar uma pasta
if (!fs.existsSync(path.join(__dirname, "/test"))) {
  fs.mkdir(path.join(__dirname, "test"), {}, (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Pasta criada com sucesso");
  });
}

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello node",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo criado com sucesso");

    //Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      " Hello node 2",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log("Arquivo escrito com sucesso");

        //Ler arquivos
        fs.readFile(
          path.join(__dirname, "test", "test.txt"),
          "utf-8",
          (error, data) => {
            if (error) {
              return console.log(error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);
