$(document).ready(() => {
  init()
})
var showingAlbums = [0, 1, 2]

const init = () => {
  for (var i = 0; i < 3; i++) {
    $("#albums-wrapper").append(albumElement(showingAlbums[i]))
  }
}

window.addEventListener("keyup", event => {
  if (!lock) {
    if (event.keyCode == 37) shiftLeft()
    if (event.keyCode == 39) shiftRight()
  }
})

window.onwheel = (event) => {
  if (!lock) {
    if (event.deltaY < 0) shiftLeft()
    if (event.deltaY > 0) shiftRight()
  }
}

const shiftLeft = () => {
  var albumToRemove = showingAlbums.shift()
  var albumToShow = showingAlbums[showingAlbums.length - 1] + 1
  if (albumToShow >= json.length) albumToShow = 0
  showingAlbums.push(albumToShow)

  remove(albumToRemove)
  show(albumToShow, "left")

}

const shiftRight = () => {
  var albumToRemove = showingAlbums.pop()
  var albumToShow = showingAlbums[0] - 1
  if (albumToShow < 0) albumToShow = json.length - 1
  showingAlbums.unshift(albumToShow)

  remove(albumToRemove)
  show(albumToShow, "right")
}

var lock = false

const remove = (albumToRemove) => {
  lock = true
  $("#" + albumToRemove)
    .addClass("collapse")
    .on('transitionend', () => {
      $("#" + albumToRemove).remove()
      lock = false
    })
}

const show = (albumToShow, direction) => {
  lock = true
  var $albumToShow = $(albumElement(albumToShow))
  $albumToShow
    .addClass("open")
    .on('animationend', () => {
      $("#" + albumToShow).removeClass("open")
      lock = false
    })
  if (direction == "left")
    $albumToShow.appendTo("#albums-wrapper")
  if (direction == "right")
    $albumToShow.prependTo("#albums-wrapper")
}