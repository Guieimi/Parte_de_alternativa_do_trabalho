document.addEventListener("DOMContentLoaded", function () {
    const metaForm = document.getElementById("meta-form");
    const exerciciosDiv = document.getElementById("exercicios");
    const alimentacaoDiv = document.getElementById("alimentacao");

    metaForm.addEventListener("change", function () {
        const selectedOption = metaForm.meta.value;

        // Limpa as informações anteriores
        exerciciosDiv.innerHTML = "";
        alimentacaoDiv.innerHTML = "";

        // Adicione aqui a lógica para exibir exercícios e planos de alimentação com base na escolha do usuário
        switch (selectedOption) {
            case "hipertrofia":
                exerciciosDiv.innerHTML = "Exercícios para hipertrofia: ...";
                alimentacaoDiv.innerHTML = "Plano de alimentação para hipertrofia: ...";
                break;
            case "perda-de-peso":
                exerciciosDiv.innerHTML = "Exercícios para perda de peso: ...";
                alimentacaoDiv.innerHTML = "Plano de alimentação para perda de peso: ...";
                break;
            // Adicione casos para outras opções
        }
    });
});
