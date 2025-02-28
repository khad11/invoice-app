const baseUrl = "https://json-api.uz/api/project/fn28";

// get all data
export async function getAll(route = "/invoices") {
  const req = await fetch(baseUrl + route);
  console.log(req);

  if (req.status === 200) {
    const { data } = await req.json();

    return data;
  } else {
    throw new Error("Something went wrong!!");
  }
}

// get one data
export async function getOneData(route = "/invoices", id = "/1") {
  const req = await fetch(baseUrl + route);

  if (req.status === 200) {
    const { data } = await req.json();
    return data;
  } else {
    throw new Error("Something went wrong!!");
  }
}

// create data

export async function CreateData(route = "/invoices", addedData) {
  const req = await fetch(baseUrl + route, {
    method: "POST",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(addedData),
  });

  if (req.status === 200) {
    const { data } = await req.json();
    return data;
  } else {
    throw new Error("Something went wrong!!");
  }
}
// delete data

export async function deleteData(route = "/invoices", id = "/1") {
  const req = await fetch(baseUrl + route + id, {
    method: "DELETE",
  });

  if (req.status === 200) {
    const { data } = await req.json();
    return id;
  } else {
    throw new Error("Something went wrong!!");
  }
}

// edited data

export async function editData(route = "/invoices", id = "/1", editedData) {
  const req = await fetch(baseUrl + "/invoices", id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(editedData),
  });

  if (req.status === 200) {
    const { data } = await req.json();
  } else {
    throw new Error("Something went wrong!!");
  }
}
