import PgMock2 from "pgmock2"

const pg = new PgMock2()

pg.add("whatever", [], { rows: [], rowCount: 0 })
