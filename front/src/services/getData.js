const http = import.meta.env.VITE_BACKEND_URL;


export const peticiongetdelete = async (url, metodo) => {
    const responde = await fetch(http+url, {
      method: metodo ? "DELETE" : "GET",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
    if (responde.ok) {
      const json = await responde.json();
      return json;
    }
    return null;
  };
  