// nota: deje el boton deshabilitado luego del click, ya que no sabia si al momento de hacer otro click
//debia mostras los post nuevamente o no debia hacer nada
//estuve intentando hacer una funcion que permita solo dar 1 click pero no tuve exito

const button = document.querySelector("button");
const post = document.querySelector("#post-data");
const getDatos = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    button.addEventListener("click", async (e) => {
      button.disabled = true;

      const response = await fetch(url);
      if (response.status !== 404) {
        const datos = await response.json();
        datos.forEach((element) => {
          if (element.id <= 5) {
            post.innerHTML += `
            <li><strong>${element.title}</strong> </li>
            <p>${element.body}</p>
            `;
          }
        });
      } else {
        alert("Error en el llamado a la api");
        throw new Error("404");
      }
    });
  } catch (err) {
    console.log("ocurrio un error");
  }
};
getDatos();
