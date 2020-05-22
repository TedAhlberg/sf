// Text function
const showText = (i) => {
  let str = "CH0" + i
  $("#text").empty().text(str)
  $("#text").removeClass("text-off")
  setTimeout(() => {
    $("#text").addClass("text-off")
  }, 4500)
}

// Start timer
setTimeout(() => {
  $("#crt").removeClass("crt-off")
  showText(1)
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

// Arrow hovers
$(() => {
  $("#arrow-left").on("mouseover", () => {
    $("#arrow-left").addClass("arrow-hover")
  })
  $("#arrow-left").on("mouseout", () => {
    $("#arrow-left").removeClass("arrow-hover")
  })

  $("#arrow-right").on("mouseover", () => {
    $("#arrow-right").addClass("arrow-hover")
  })
  $("#arrow-right").on("mouseout", () => {
    $("#arrow-right").removeClass("arrow-hover")
  })
})

const displayAlbum = (i) => {
  $(".album-header").text(info.albums[i].title)
  $(".album-header").addClass("album-header-enter")
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
    }, 200)
  }
  loop()
}
