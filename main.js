const colors = ['green', 'red', 'rgb(133,122,200)', '#f15023']
const btn = document.getElementById('hero')
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    //number between 0-3
    const randomNum = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}