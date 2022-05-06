const demo = document.querySelector('#demo-1');
const fat_input = document.querySelector('input[name="fat"]');
const carbs_input = document.querySelector('input[name="carbohydrates"]');
const protein_input = document.querySelector('input[name="protein"]');
const inputs = [fat_input, carbs_input, protein_input];
const color_input = document.querySelector('input[name="color"]');
const bgcolor_input = document.querySelector('input[name="bg-color"]');
const serving = document.querySelector('input[name="serving"]');
console.log(inputs);

const updateCalories = () => {
    const fat = fat_input.value;
    const carbs = carbs_input.value;
    const protein = protein_input.value;
    const calories = fat * 9 + carbs * 4 + protein * 4;
}

const percentage_map  = {"fat": 65, "carbohydrates": 275, "protein": 50};


inputs.forEach(input => {
    input.addEventListener('input', () => {
        const value = input.value;
        const value_int = parseInt(value);
        demo.setAttribute(input.name, value_int);
        updateCalories();
    });
})

color_input.addEventListener('input', () => {
    demo.style.setProperty("--color", color_input.value);
});

bgcolor_input.addEventListener('input', () => {
    demo.style.setProperty("--bg-color",bgcolor_input.value);
});

serving.addEventListener('input', () => {
   demo.setAttribute('serving', serving.value);
});

