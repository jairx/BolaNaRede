insert into TIPO_FALTA (CARTAO)
values ('Amarelo'), ('Vermelho');

insert into CAMPEONATO (NOME)
values ('Juventus da Eternidade'),
        ('Filósofos do Gramado'),
        ('Futebol Urgente');

insert into SELECAO (NOME, DATA_CRIACAO, COR_CAMISA_1, COR_CAMISA_2, COR_CAMISA_3)
values ('Valentinos', now(), 'preto e branco', 'verde e azul', 'amarelo e vermelho'), 
        ('Enzos', now(), 'roxa', 'preta', 'branca'),
        ('Maldizente do Tucuruvi', now(), 'prata com dourado', 'dourada', null),
        ('Invictus', now(), 'verde escuro e preto', null, null),
        ('Paratudo', now(), 'amarelo', 'vermelho', null),
        ('Fim da Linha', now(), 'dourado', 'branco', null),
        ('Gratidão', now(), 'verde limão', 'top transparente', null),
        ('Filhos da Mãe', now(), 'roxo', 'vermelho e rosa', 'marrom'),
        ('Sola da Bota', now(), 'preto e marrom', 'cinza com azul', 'vermelho e branco'),
        ('Paranuaê', now(), 'marrom e vermelho', 'preto e cinza', 'branco e preto'),
        ('Botequeiros', now(), 'lilás', 'azul marinho', 'verde claro'),
        ('Ira', now(), 'azul e verde', 'vermelho e branco', 'branco e roxo'),
        ('Supita', now(), 'cinza e branco', 'azul e vermelho', null);
        
insert into SELECAO_CAMPEONATO (ID_CAMPEONATO, ID_SELECAO)
values (1, 3), (1, 4), (1, 6), (1, 7), (1, 9), (1, 11), (1, 12), (1, 13),
        (2, 3), (2, 4), (2, 5), (2, 7), (2, 9), (2, 10), (2, 11), (2, 12),
        (3, 5), (3, 6), (3, 8), (3, 9), (3, 10), (3, 11), (3, 12), (3, 13);

insert into COLOCACAO (COLOCACAO, ID_SELECAO, ID_CAMPEONATO)
values (1, 4, 1), (2, 9, 1), (3, 7, 1), (4, 12, 1), (5, 13, 1), (6, 3, 1), (7, 11, 1), (8, 6, 1), 
        (1, 7, 2), (2, 5, 2), (3, 10, 2), (4, 11, 2), (5, 3, 2), (6, 4, 2), (7, 12, 2), (8, 9, 2),
        (1, 5, 3), (2, 6, 3), (3, 11, 3), (4, 10, 3), (5, 12, 3), (6, 8, 3), (7, 9, 3), (8, 13, 3);

insert into JOGO (DATATIME, TERMINADO, VENCEDOR, ID_SELECAO_1, ID_SELECAO_2, ID_CAMPEONATO)
values (now(), 1, 3, 3, 4, 1),
        (now(), 1, 7, 6, 7, 1),
        (now(), 1, 11, 9, 11, 1),
        (now(), 1, 12, 12, 13, 1),
        (now(), 1, 7, 3, 7, 1),
        (now(), 1, 11, 11, 12, 1),
        (now(), 0, null, 7, 11, 1);

insert into FALTA (NUMERO_CAMISA, ID_JOGO, ID_TIPO_FALTA, ID_SELECAO)
values (2, 1, 1, 3),
        (9, 1, 1, 3),
        (2, 1, 2, 3),
        (7, 3, 1, 11),
        (9, 7, 2, 11);

insert into GOL (TEMPO, CRONOMETRO, NUMERO_CAMISA, ID_SELECAO, ID_SELECAO_MARCADOR, ID_JOGO)
values (1, now(), 7, 4, 3, 1),
        (2, now(), 9, 6, 7, 2),
        (1, now(), 11, 11, 7, 7);