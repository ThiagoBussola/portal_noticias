const mysql = require("mysql");

const connMySQL = function () {
	console.log("Conexão com o banco estabelecida");
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "portal_noticias",
	});
};

module.exports = function () {
	console.log("O autoload carregou o módulo de conexao");
	return connMySQL;
};
