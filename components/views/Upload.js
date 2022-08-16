import html from "html-literal";

export default () => html`

<body class="bod">
<div class="text">
  <p>Click on the "Choose File" button to upload a file</p>
</div>
<div class="form">
  <form action="/Submit a song">
    <input type="file" id="myFile" name="filename">
    <input type="submit">
  </form>
    <form action="/Song name"><pre>
      <input type="text"name="Song" placeholder="Song">
      <input type="text"name="Artist" placeholder="Artist">
      <input type="text"name="Album" placeholder="Album"></pre>
    </form>

</div>
</body>

`;
