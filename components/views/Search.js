import html from "html-literal";

export default () => html`
  <div class="bod">
    <p>Search for your favorite Artist from any genre.</p>
    <div id="form">
      <label for="text">Type here!</label>
      <input
        type="text"
        placeholder="Search by Artist"
        width="100px"
        length="50px"
      />
    </div>
  </div>
`;
