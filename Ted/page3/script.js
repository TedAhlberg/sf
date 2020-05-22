var inputLock = true
var albumIndex = 0

// Start timer
setTimeout(() => {
  $("#crt").removeClass("crt-off")
  showText(albumIndex)
  $("#cover").removeClass("cover-off")
  $("#cover").addClass("cover-start")
}, 2000)

// Enter Site
setTimeout(() => {
  $("#arrow-left-wrapper").addClass("left-animation")
  $("#arrow-right-wrapper").addClass("right-animation")
  $("h1").addClass("header-animation")
  displayAlbum(0)
}, 4500)

// Input lock
setTimeout(() => {
  inputLock = false
  $("#arrow-left-wrapper").css("cursor", "pointer")
  $("#arrow-right-wrapper").css("cursor", "pointer")
  $("#cover").removeClass("cover-start")
}, 6000)

// Shift funcitons
const shiftLeft = () => {
  inputLock = true
  if (albumIndex === 0) albumIndex = 4
  else albumIndex--

  $("#cover").css("background-image",
    "url(\"./res/" + info.albums[albumIndex].cover + "\")"
  ).addClass("cover-switch")
  showText(albumIndex)
  hideAlbumElements()
  setTimeout(() => {
    displayAlbum(albumIndex)
  }, 1000)
}

const shiftRight = () => {
  inputLock = true
  if (albumIndex === 4) albumIndex = 0
  else albumIndex++

  $("#cover").css("background-image",
    "url(\"./res/" + info.albums[albumIndex].cover + "\")"
  ).addClass("cover-switch")
  showText(albumIndex)
  hideAlbumElements()
  setTimeout(() => {
    displayAlbum(albumIndex)
  }, 1750)
}

$(() => {
  $("#arrow-left").on("click", () => {
    if (!inputLock)
      shiftLeft()
  })
  $("#arrow-right").on("click", () => {
    if (!inputLock)
      shiftRight()
  })
})

// Hide functions
const hideAlbumElements = () => {
  $(".album-header").addClass("hide-element")
  $(".album-tracks").addClass("hide-element")
  $("#footer").addClass("hide-element")
}

// Text function
const showText = (i) => {
  let str = "CH0" + (i + 1)
  $("#text").empty().text(str)
  $("#text").removeClass("text-off")
  setTimeout(() => {
    $("#text").addClass("text-off")
  }, 4500)
}

// Display Album & Footer
const displayAlbum = (i) => {
  $(".album-header").text(info.albums[i].title)
  $(".album-header").removeClass("hide-element")
  $(".album-header").addClass("album-header-enter")

  $(".album-tracks").empty()
  $(".album-tracks").removeClass("hide-element")

  let j = 0;
  let length = info.albums[i].tracklist.length

  let loop = () => {
    let title = info.albums[i].tracklist[j].title
    let time = info.albums[i].tracklist[j].time

    setTimeout(() => {
      let $track = $(
        "<div class=\"track\">" +
        "<span class=\"track-title\">"
        + title +
        "</span>" +
        "<span class=\"track-time\">"
        + time +
        "</span>" +
        "</div>"
      )
      $track.appendTo(".album-tracks")

      j++
      if (j < length)
        loop()
      else {
        $(".cover").removeClass("cover-switch")
        $("#footer").removeClass("hide-element")
        $("#footer").addClass("footer-enter")
        inputLock = false
      }
    }, 100)
  }
  loop()
}
