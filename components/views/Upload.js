import html from "html-literal";

export default () => html`

<body class="bod">
<div class="text">
  <p>Click on the "Choose File" button to upload a file</p>
</div>
<div class="form">
  <!-- <form action="/Submit a song">
    <input type="file" id="myFile" name="filename"> -->
<!--
  </form> -->
    <form action="" method="POST"><pre>
      <input type="text"name="song" id="song" placeholder="song">
      <input type="text"name="artist" id="artist" placeholder="artist">
      <input type="text"name="album" id="album" placeholder="album"></pre>
      <input type="submit">
    </form>

</div>
</body>

`;
