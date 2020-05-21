
// Text fuction
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
  setTimeout(() => {
    $("#cover").removeClass("cover-off")
    $("#cover").addClass("cover-start")
  })
}, 2000)

$(() => {

})