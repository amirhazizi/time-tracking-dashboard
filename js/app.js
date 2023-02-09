const triggerBtn = document.querySelectorAll(".routine-btn")
const timeFrames = document.querySelectorAll(".timeframe")

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => setTimeframes(data))
// console.log(triggerBtn)
timeFrames.forEach((timeframe) => {
  //   console.log(timeframe.querySelector(".current"))
  //   console.log(timeframe.querySelector(".previous"))
})
function setTimeframes(ary) {
  triggerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      ary.forEach((ar, index) => {
        if (ar.title === timeFrames[index].dataset.id) {
          for (const property in ar.timeframes) {
            if (property === btn.dataset.id) {
              console.log(ar.timeframes[property])
              timeFrames[index].querySelector(
                ".current"
              ).textContent = `${ar.timeframes[property].current}hrs`
              if (property === `daily`) {
                timeFrames[index].querySelector(
                  ".previous"
                ).textContent = `Last Day - ${ar.timeframes[property].previous}hrs`
              } else if (property === `weekly`) {
                timeFrames[index].querySelector(
                  ".previous"
                ).textContent = `Last Week - ${ar.timeframes[property].previous}hrs`
              } else {
                timeFrames[index].querySelector(
                  ".previous"
                ).textContent = `Last Month - ${ar.timeframes[property].previous}hrs`
              }
            }
          }
        }
      })
    })
  })
}
