const arc = require("@architect/functions");

const data = [
  {
    date: "2022-04-01T00:00:00",
    regnumber: "AB12345",
    location: "Bergen",
  },
  {
    date: "2022-04-02T00:00:00",
    regnumber: "AB12345",
    location: "Oslo",
  },
  {
    date: "2022-04-02T10:00:00",
    regnumber: "AB12345",
    location: "Lysaker",
  },
  {
    date: "2022-04-02T12:00:00",
    regnumber: "AB12345",
    location: "Drammensveien",
  },
  {
    date: "2022-04-03T00:00:00",
    regnumber: "AB12345",
    location: "Stavanger",
  },

  {
    date: "2022-04-01T00:00:00",
    regnumber: "BC23456",
    location: "Bergen",
  },
  {
    date: "2022-04-02T00:00:00",
    regnumber: "BC23456",
    location: "Oslo",
  },
  {
    date: "2022-04-02T10:00:00",
    regnumber: "BC23456",
    location: "Lysaker",
  },
  {
    date: "2022-04-02T12:00:00",
    regnumber: "BC23456",
    location: "Drammensveien",
  },
  {
    date: "2022-04-03T00:00:00",
    regnumber: "BC23456",
    location: "Stavanger",
  },
];

const populate = async () => {
  const client = await arc.tables();
  for (const tollPassage of data) {
    const tollPassagesClient = client.tollPassages;
    tollPassagesClient.put(tollPassage);
  }
};

populate();
