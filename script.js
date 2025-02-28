const input = document.getElementById("numberInput");
const output = document.getElementById("output");
const deviseSource = document.getElementById("devise-source");
const deviseCible = document.getElementById("devise-cible");
const switchBtn = document.getElementById("switch");

const tauxConversion = {
    "EUR": { "EUR": 1, "USD": 1.03594, "GBP": 0.8327, "JPY": 159.3410, "TRY": 37.4478 },
    "USD": { "EUR": 0.9653, "USD": 1, "GBP": 0.8045, "JPY": 153.555, "TRY": 36.1087 },
    "GBP": { "EUR": 1.2007, "USD": 1.2429, "GBP": 1, "JPY": 191.3460, "TRY": 44.9236 },
    "JPY": { "EUR": 0.0063, "USD": 0.0065, "GBP": 0.0052, "JPY": 1, "TRY": 0.2351 },
    "TRY": { "EUR": 0.0267, "USD": 0.0277, "GBP": 0.0223, "JPY": 4.2527, "TRY": 1 }
};

function convertir() {
    let valeur = parseFloat(input.value);
    if (isNaN(valeur) || valeur === 0) {
        output.textContent = `Résultat : 0 ${deviseCible.value}`;
        return;
    }
    let resultat = valeur * tauxConversion[deviseSource.value][deviseCible.value];
    output.textContent = `Résultat : ${resultat.toFixed(2)} ${deviseCible.value}`;
}

input.addEventListener("input", convertir);
deviseSource.addEventListener("change", convertir);
deviseCible.addEventListener("change", convertir);

switchBtn.addEventListener("click", () => {
    let temp = deviseSource.value;
    deviseSource.value = deviseCible.value;
    deviseCible.value = temp;
    convertir();
});