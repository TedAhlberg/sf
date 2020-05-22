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
}, 3000)

$(() => {
  // Left arrow
  $("#arrow-left").on("mouseover", () => {
    $("#arrow-left").addClass("arrow-hover")
  })
  $("#arrow-left").on("mouseout", () => {
    $("#arrow-left").removeClass("arrow-hover")
  })

  // Right arrow
  $("#arrow-right").on("mouseover", () => {
    $("#arrow-right").addClass("arrow-hover")
  })
  $("#arrow-right").on("mouseout", () => {
    $("#arrow-right").removeClass("arrow-hover")
  })
})