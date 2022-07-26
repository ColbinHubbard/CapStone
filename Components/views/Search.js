import html from "html-literal";

export default () => html`
  <body>
    <p>Search for your favorite Artist from any genre.</p>
    <div id="Form">
      <label for="text">Type here!</label>
      <input
        type="text"
        placeholder="Search by Artist"
        width="100px"
        length="50px"
      />
    </div>
  </body>
  <link rel="stylesheet" href="./Search.css" />
`;
