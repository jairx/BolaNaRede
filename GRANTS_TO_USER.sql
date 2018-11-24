create user teamx@localhost identified by 'Copa2018';

grant create, drop, delete, insert, select, update on bolanarede.tipo_falta to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.falta to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.jogo to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.campeonato to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.colocacao to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.gol to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.selecao to teamx@localhost;

grant create, drop, delete, insert, select, update on bolanarede.time_campeonato to teamx@localhost;

flush privileges;