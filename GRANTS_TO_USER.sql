create user jairneto_teamx@localhost identified by 'Copa2018';

grant create, drop, delete, insert, select, update on jairneto_bolanarede.tipo_falta to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.falta to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.jogo to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.campeonato to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.colocacao to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.gol to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.selecao to jairneto_teamx@localhost;

grant create, drop, delete, insert, select, update on jairneto_bolanarede.time_campeonato to jairneto_teamx@localhost;

flush privileges;