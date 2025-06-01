CREATE DATABASE projeto_individual;
USE projeto_individual;

-- Criando tabela dos usuários do sistema
CREATE TABLE usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45) UNIQUE,
senha VARCHAR(45)
);

-- Criando tabela dos usuários do sistema
CREATE TABLE personagens (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45)
);

-- Inserindo os personagens
INSERT INTO personagens (nome, sobrenome) VALUES
('Rubens', 'Barrichello'),
('Alan', 'Prost'),
('Nelson', 'Piquet'),
('Max', 'Verstappen'),
('Lewis', 'Hamilton'),
('Michael', 'Schumacher'),
('Ayrton', 'Senna');

-- Criando a tabela das partidas dos usuários
CREATE TABLE partida (
idPartida INT AUTO_INCREMENT,
fkUsuario INT,
fkPersonagem INT,
resultadoPartida INT,
CONSTRAINT chkresultadoPartida CHECK (resultadoPartida IN(0,1)),
colisoes INT,
tempo INT,
dtPartida DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkPartidaUsuario FOREIGN KEY (fkUsuario) REFERENCES usuarios(id),
CONSTRAINT fkPartidaPersonagens FOREIGN KEY (fkPersonagem) REFERENCES personagens(id),
CONSTRAINT pkComposta PRIMARY KEY (idPartida, fkUsuario, fkPersonagem)
);

SELECT * FROM usuarios;
SELECT * FROM personagens;
SELECT * FROM partida;	

-- KPIs
SELECT resultadoPartida, colisoes, TIME_FORMAT(SEC_TO_TIME(tempo), '%i:%s') AS tempo FROM partida
	WHERE fkUsuario = 4 ORDER BY dtPartida DESC LIMIT 1;

-- Gráfico 1
SELECT p.nome AS nomePersonagem, COUNT(pa.idPartida) AS 'qtdPersonagem'
	FROM partida AS pa
		JOIN personagens AS p
			ON pa.fkPersonagem = p.id
	WHERE fkUsuario = 1
	GROUP BY pa.fkPersonagem
	ORDER BY COUNT(pa.idPartida) DESC
	LIMIT 5;
    
-- Gráfico 2 - Pizza
SELECT COUNT(resultadoPartida) AS 'Quantidade de partidas', SUM(resultadoPartida) AS'vitória', (COUNT(resultadoPartida) -  SUM(resultadoPartida)) AS 'Derrota' FROM partida
	WHERE fkUsuario = 1;
    
-- Gráfico 3 - Linha
SELECT u.nome AS usuario, tempo AS tempo, DATE_FORMAT(dtPartida, '%d/%m/%Y') AS data FROM partida AS p 
	JOIN usuarios AS u
		ON fkUsuario = u.id 
		WHERE fkUsuario = 1
	ORDER BY dtPartida DESC;

-- Tabela de ranking
SELECT u.nome AS nomeUsuario, MIN(p.tempo) AS tempoPartida FROM partida AS p
	JOIN usuarios AS u
		ON p.fkUsuario = u.id
        GROUP BY u.id
	ORDER BY MIN(p.tempo)
    LIMIT 10;

