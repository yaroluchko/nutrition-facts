const fat_input = document.querySelector('input[name="fat"]');
const carbs_input = document.querySelector('input[name="carbohydrates"]');
const protein_input = document.querySelector('input[name="protein"]');
const inputs = [fat_input, carbs_input, protein_input];
const color_input = document.querySelector('input[name="color"]');
const bgcolor_input = document.querySelector('input[name="bg-color"]');
console.log(inputs);

const updateCalories = () => {
    const fat = fat_input.value;
    const carbs = carbs_input.value;
    const protein = protein_input.value;
    const calories = fat * 9 + carbs * 4 + protein * 4;
    document.querySelector('.calories').innerHTML = calories;
    document.querySelector('.calories.fat').innerHTML = `From fat: ${fat * 9}`;
}

const percentage_map  = {"fat": 65, "carbohydrates": 275, "protein": 50};


inputs.forEach(input => {
    input.addEventListener('input', () => {
        const value = input.value;
        const value_int = parseInt(value);
        document.querySelector(`.${input.name}:not(.calories)`).innerHTML = `${value_int}g`;
        document.querySelector(`.${input.name}.percentage`).innerHTML = Math.round(value_int / percentage_map[input.name] * 100) + "%";
        updateCalories();
    });
})

color_input.addEventListener('input', () => {
    document.querySelector('#demo-1-article').style.color = color_input.value;
    document.querySelectorAll('.demo-1-table').forEach(table => {
        if(Array.from(table.classList).includes("2nd-table")){
            table.style.borderBottom = `2px solid ${color_input.value}`;
        }
        table.style.borderTop = `2px solid ${color_input.value}`;
    })
});

bgcolor_input.addEventListener('input', () => {
    document.querySelector('#demo-1-article').style.backgroundColor = bgcolor_input.value;
});

