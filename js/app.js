// selection
const triggerBtn = document.querySelectorAll(".routine-btn")
const selectionBtn = document.getElementById("weekly")
const timeFrames = document.querySelectorAll(".timeframe")
// fetch API json file
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => setTimeframes(data))
// function setTimeframes
function setTimeframes(dataJSON) {
  triggerBtn.forEach((btn) => {
    // btn.dataset.id === "weekly" ? btn.classList.add("selected-btn") : null
    selectionBtn.classList.add("selected-btn")
    btn.addEventListener("click", () => {
      selectionBtn.classList.remove("selected-btn")
      dataJSON.forEach((ar, index) => {
        const currentTimeframe = timeFrames[index]
        if (ar.title === currentTimeframe.dataset.id) {
          for (const property in ar.timeframes) {
            if (property === btn.dataset.id) {
              const current = currentTimeframe.querySelector(".current")
              const previous = currentTimeframe.querySelector(".previous")
              const currentJSON = ar.timeframes[property].current
              const previousJSON = ar.timeframes[property].previous
              current.textContent = `${currentJSON}hrs`
              if (property === `daily`) {
                previous.textContent = `Last Day - ${previousJSON}hrs`
              } else if (property === `weekly`) {
                previous.textContent = `Last Week - ${previousJSON}hrs`
              } else {
                previous.textContent = `Last Month - ${previousJSON}hrs`
              }
            }
          }
        }
      })
    })
  })
}
