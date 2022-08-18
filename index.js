import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
//import dotenv from "dotenv";
//dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  console.log(state);
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}
function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".Nav-bar").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Upload") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        artist: inputList.artist.value,
        album: inputList.album.value,
        song: inputList.song.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.SONG_API}`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Upload.songs.push(response.data);
          router.navigate("/songs");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}
router.hooks({
  before: (done, params) => {
    let view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    done();
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
