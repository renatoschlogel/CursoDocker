CREATE DATABASE email_sender;

\c email_sender

create table emails (
    id serial not null,
    data timestemp not null default current_timestemp,
    assunto varchar(100) not null,
    mensagem VARCHAR(250) not null
);