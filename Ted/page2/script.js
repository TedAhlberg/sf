// Search input
const inputFocus = () => {
  $("input").css("width", "84%")
  $(".search-border").addClass("search-border-focus")
  $(".search-icon").addClass("search-icon-focus")
}

const inputFocusout = () => {
  $("input").css("width", "0%")
  $(".search-border").removeClass("search-border-focus")
  $(".search-icon").removeClass("search-icon-focus")
}

$(() => {
  $(".search-icon").click(() => {
    $("input").focus()
  })

  var inputValue = $("input").val()
  if (inputValue.length > 0)
    inputFocus()

  $("input").on("focus", () => {
    console.log("focus")
    inputFocus()
  })

  $("input").on("focusout", () => {
    let value = $("input").val()
    if (value.length === 0)
      inputFocusout()
  })

})

//Navigation
const getItemElements = (event) => {
  let elements = []
  elements[0] = $(event.target.childNodes[1])
  elements[1] = $(event.target.childNodes[3])
  elements[2] = $(event.target.childNodes[5])
  return elements
}

$(() => {
  //mouseover
  $(".nav-item").on("mouseover", (event) => {
    let itemElements = getItemElements(event)
    itemElements[0].addClass("nav-item-mouseover")
    itemElements[1].addClass("nav-item-mouseover")
    itemElements[2].addClass("nav-arrow-mouseover")
  })

  //mouseleave
  $(".nav-item").on("mouseleave", (event) => {
    let itemElements = getItemElements(event)
    itemElements[0].removeClass("nav-item-mouseover")
    itemElements[1].removeClass("nav-item-mouseover")
    itemElements[2].removeClass("nav-arrow-mouseover")
  })
})