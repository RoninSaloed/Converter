const input = document.querySelector(".input")
const output = document.querySelector(".output")
const fromFirst = document.querySelector(".fromFirst")
const toSecond = document.querySelector(".toSecond")
function converter() {
    const fromFirstEl = fromFirst.value
    const toSecondEl = toSecond.value

    fetch(`./values.json`)
        .then((res) => res.json())
        .then((data) => {
            f1 = data.find(unit => unit.unit === fromFirstEl)
            f2 = data.find(unit => unit.unit === toSecondEl)
            console.log(f1)
            console.log(f2)

            output.value = ((input.value * f1.value) / f2.value).toFixed(2)
            console.log(output.value)
        })

}
fromFirst.addEventListener('change', converter);
input.addEventListener('input', converter);
toSecond.addEventListener('change', converter);
converter()







