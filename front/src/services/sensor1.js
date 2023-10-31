const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getSensorTurvidez = async () => {
  try {
    const response = await fetch(`${baseUrl}tubidez`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteSensorTurvidez = async (id, callback) => {
  const response = await fetch(`${baseUrl}tubidez/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {
    callback();
  }
};
export const updateSensorTurvidez = async (tubidezactual, callback) => {
  const response = await fetch(`${baseUrl}tubidez/${tubidezactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      date: tubidezactual.date,
      valueTur: tubidezactual.valueTur,
      state: tubidezactual.state,
      created_at: tubidezactual.created_at,
      updated_at: tubidezactual.updated_at,

    }),
  });
  if (response.ok) {
    callback();
  }
};
export const postSensorTurvidez = async (date,valueTur,state,created_at,updated_at, callback) => {
  const response = await fetch(`${baseUrl}tubidez`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
        date: date,
        valueTur: valueTur,
        state: state,
        created_at: created_at,
        updated_at: updated_at,
    }),
  });
  if (response.ok) {
    callback();
  }
};
