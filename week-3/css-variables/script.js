

const inputs = document.querySelectorAll('.controls input');

function updateVariables() {
    const unit = this.dataset.unit;
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${unit}`);
    console.log(this.name)
}

inputs.forEach(input => input.addEventListener('change', updateVariables));
inputs.forEach(input => input.addEventListener('mousemove', updateVariables));