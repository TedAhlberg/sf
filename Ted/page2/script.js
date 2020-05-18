$(() => {
  $(".search-icon").click(() => {
    $("input").focus()
  })

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

  var inputValue = $("input").val()
  if(inputValue.length > 0)
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