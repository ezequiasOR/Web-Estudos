SELECT e.nome AS Estado, c.nome AS Cidade, e.regiao AS Região
FROM estados AS e, cidades AS c
WHERE e.id = c.estado_id;

SELECT c.nome AS Cidade, e.nome AS Estado, e.regiao AS regiao
FROM estados AS e INNER JOIN cidades AS c
ON e.id = c.estado_id;