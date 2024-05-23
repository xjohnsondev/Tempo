\echo 'Delete and recreate tempo db?'

DROP DATABASE tempo;
CREATE DATABASE tempo ENCODING 'UTF8';
\connect tempo

\i tempo-schema.sql
\i tempo-seed.sql

DROP DATABASE tempo_test;
CREATE DATABASE tempo_test ENCODING 'UTF8';
\connect tempo_test

\i tempo-schema.sql
\i tempo-seed.sql
