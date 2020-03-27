const albumElement = (id) => {
  let genres = json[id].genres
  let list = "<ol>"
  for (i in genres) {
    list += "<li>" + genres[i] + "</li>"
  }
  list += "</ol>"

  return `
    <div id="` + id + `" class="album">
      <img src="` + "res/" + json[id].cover + ".jpg" + `" class="cover">
      <span class="title">` + json[id].title + `</span>
      <span class="artist">` + json[id].artist + `</span>
      <span class="genres">Genres` + list + `</span>
      <a href="` + json[id].youtube + `" 
        target="_blank" rel="noopener noreferrer">
        <img class="youtube-logo" src="res/youtube-logo.png">
      </a>
    </div>
  `
}