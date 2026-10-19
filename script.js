const tabelaTAF = {
    M: {
        corrida: [
            { minIdade: 18, maxIdade: 21, limites: [2599, 2799, 3149, 3199] },
            { minIdade: 22, maxIdade: 25, limites: [2699, 2849, 3099, 3249] },
            { minIdade: 26, maxIdade: 29, limites: [2599, 2749, 2999, 3149] },
            { minIdade: 30, maxIdade: 33, limites: [2549, 2649, 2899, 3099] },
            { minIdade: 34, maxIdade: 37, limites: [2449, 2549, 2799, 2949] },
            { minIdade: 38, maxIdade: 41, limites: [2349, 2449, 2699, 2849] },
            { minIdade: 42, maxId5: 45, limites: [2249, 2399, 2599, 2749] },
            { minIdade: 46, maxIdade: 49, limites: [2149, 2299, 2499, 2649] },
            { minIdade: 50, maxIdade: 53, suficiencia: 1900 },
            { minIdade: 54, maxIdade: 57, suficiencia: 1800 },
            { minIdade: 58, maxIdade: 61, suficiencia: 1600 },
            { minIdade: 62, maxIdade: 65, suficiencia: 1400 }
        ],
        flexao: [
            { minIdade: 18, maxIdade: 21, limites: [21, 24, 33, 38] },
            { minIdade: 22, maxIdade: 25, limites: [23, 26, 35, 40] },
            { minIdade: 26, maxIdade: 29, limites: [21, 24, 33, 38] },
            { minIdade: 30, maxIdade: 33, limites: [20, 23, 31, 36] },
            { minIdade: 34, maxIdade: 37, limites: [17, 20, 28, 33] },
            { minIdade: 38, maxIdade: 41, limites: [16, 19, 27, 31] },
            { minIdade: 42, maxId5: 45, limites: [14, 17, 24, 28] },
            { minIdade: 46, maxIdade: 49, limites: [11, 14, 21, 25] },
            { minIdade: 50, maxIdade: 53, suficiencia: 11 },
            { minIdade: 54, maxIdade: 57, suficiencia: 9 },
            { minIdade: 58, maxIdade: 61, suficiencia: 8 },
            { minIdade: 62, maxIdade: 65, suficiencia: 6 }
        ],
        abdominal: [
            { minIdade: 18, maxIdade: 21, limites: [34, 44, 63, 73] },
            { minIdade: 22, maxIdade: 25, limites: [41, 51, 68, 78] },
            { minIdade: 26, maxIdade: 29, limites: [37, 48, 65, 75] },
            { minIdade: 30, maxIdade: 33, limites: [33, 42, 60, 69] },
            { minIdade: 34, maxIdade: 37, limites: [30, 39, 56, 65] },
            { minIdade: 38, maxIdade: 41, limites: [28, 37, 54, 63] },
            { minIdade: 42, maxIdade: 45, limites: [26, 35, 52, 61] },
            { minIdade: 46, maxIdade: 49, limites: [24, 33, 50, 59] },
            { minIdade: 50, maxIdade: 53, suficiencia: 23 },
            { minIdade: 54, maxId7: 57, suficiencia: 21 },
            { minIdade: 58, maxIdade: 61, suficiencia: 19 },
            { minIdade: 62, maxIdade: 65, suficiencia: 17 }
        ],
        barra: [
            { minIdade: 18, maxIdade: 21, limites: [4, 6, 9, 11] },
            { minIdade: 22, maxIdade: 25, limites: [5, 7, 10, 12] },
            { minIdade: 26, maxIdade: 29, limites: [4, 6, 9, 11] },
            { minIdade: 30, maxIdade: 33, limites: [4, 5, 8, 10] },
            { minIdade: 34, maxIdade: 37, limites: [3, 4, 6, 8] },
            { minIdade: 38, maxIdade: 39, limites: [2, 3, 5, 7] },
            { minIdade: 40, maxIdade: 45, suficiencia: 2 },
            { minIdade: 46, maxIdade: 49, suficiencia: 1 }
        ]
    },
    F: {
        corrida: [
            { minIdade: 18, maxIdade: 21, limites: [2099, 2199, 2449, 2599] },
            { minIdade: 22, maxIdade: 25, limites: [2149, 2249, 2449, 2649] },
            { minIdade: 26, maxIdade: 29, limites: [2099, 2199, 2399, 2599] },
            { minIdade: 30, maxIdade: 33, limites: [2049, 2050, 2349, 2549] },
            { minIdade: 34, maxIdade: 37, limites: [1999, 2099, 2299, 2499] },
            { minIdade: 38, maxIdade: 41, limites: [1899, 1999, 2199, 2399] },
            { minIdade: 42, maxId5: 45, limites: [1849, 1949, 2149, 2299] },
            { minIdade: 46, maxIdade: 49, limites: [1749, 1849, 2049, 2249] },
            { minIdade: 50, maxIdade: 53, suficiencia: 1600 },
            { minIdade: 54, maxIdade: 57, suficiencia: 1500 },
            { minIdade: 58, maxIdade: 61, suficiencia: 1300 },
            { minIdade: 62, maxIdade: 65, suficiencia: 1100 }
        ],
        flexao: [
            { minIdade: 18, maxIdade: 21, limites: [10, 11, 16, 19] },
            { minIdade: 22, maxIdade: 25, limites: [11, 12, 18, 21] },
            { minIdade: 26, maxIdade: 29, limites: [10, 11, 16, 19] },
            { minIdade: 30, maxIdade: 33, limites: [9, 10, 15, 18] },
            { minIdade: 34, maxIdade: 37, limites: [8, 9, 14, 17] },
            { minIdade: 38, maxIdade: 41, limites: [7, 8, 13, 16] },
            { minIdade: 42, maxId5: 45, limites: [6, 7, 12, 15] },
            { minIdade: 46, maxIdade: 49, limites: [5, 6, 10, 13] },
            { minIdade: 50, maxIdade: 53, suficiencia: 5 },
            { minIdade: 54, maxIdade: 57, suficiencia: 4 },
            { minIdade: 58, maxIdade: 61, suficiencia: 3 },
            { minIdade: 62, maxIdade: 65, suficiencia: 2 }
        ],
        abdominal: [
            { minIdade: 18, maxIdade: 21, limites: [30, 39, 55, 64] },
            { minIdade: 22, maxIdade: 25, limites: [32, 41, 57, 66] },
            { minIdade: 26, maxIdade: 29, limites: [31, 40, 56, 65] },
            { minIdade: 30, maxIdade: 33, limites: [29, 38, 54, 63] },
            { minIdade: 34, maxIdade: 37, limites: [27, 36, 52, 61] },
            { minIdade: 38, maxIdade: 41, limites: [25, 34, 50, 59] },
            { minIdade: 42, maxIdade: 45, limites: [23, 32, 48, 57] },
            { minIdade: 46, maxIdade: 49, limites: [21, 30, 46, 55] },
            { minIdade: 50, maxIdade: 53, suficiencia: 20 },
            { minIdade: 54, maxIdade: 57, suficiencia: 18 },
            { minIdade: 58, maxIdade: 61, suficiencia: 16 },
            { minIdade: 62, maxIdade: 65, suficiencia: 14 }
        ],
        barra: [
            { minIdade: 18, maxIdade: 21, limites: [0, 2, 4, 5] },
            { minIdade: 22, maxIdade: 25, limites: [1, 3, 5, 6] },
            { minIdade: 26, maxIdade: 29, limites: [1, 2, 4, 5] },
            { minIdade: 30, maxIdade: 33, limites: [0, 2, 4, 5] },
            { minIdade: 34, maxIdade: 37, limites: [0, 2, 3, 4] },
            { minIdade: 38, maxIdade: 39, limites: [0, 1, 2, 3] },
            { minIdade: 40, maxIdade: 45, suficiencia: 45 },
            { minIdade: 46, maxIdade: 49, suficiencia: 30 }
        ]
    }
};

function ajustarLabelBarra() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value) || 0;
    const label = document.getElementById('labelBarra');
    const grupo = document.getElementById('grupoBarra');

    if (idade >= 50) {
        grupo.style.display = 'none';
        return;
    }
    
    grupo.style.display = 'block';

    if (sexo === 'F' && idade >= 40 && idade <= 49) {
        label.textContent = "Barra Fixa - Sustentação Estática (segundos):";
    } else {
        label.textContent = "Flexão na Barra Fixa (repetições):";
    }
}

function obterMencao(valor, faixas, idade, flagBarra = false) {
    const faixa = faixas.find(f => idade >= f.minIdade && idade <= f.maxIdade);
    if (!faixa) return 'I';

    if (idade >= 50) {
        if (flagBarra) return 'NA';
        return valor >= faixa.suficiencia ? 'S' : 'I';
    }

    if (flagBarra && idade >= 40 && idade <= 49) {
        return valor >= faixa.suficiencia ? 'S' : 'I';
    }

    const [i, r, b, mb] = faixa.limites;
    if (valor <= i) return 'I';
    if (valor <= r) return 'R';
    if (valor <= b) return 'B';
    if (valor <= mb) return 'MB';
    return 'E';
}

function calcularTaf() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const corrida = parseInt(document.getElementById('corrida').value);
    const flexao = parseInt(document.getElementById('flexao').value);
    const abdominal = parseInt(document.getElementById('abdominal').value);
    const barra = parseInt(document.getElementById('barra').value) || 0;

    if (isNaN(idade) || isNaN(corrida) || isNaN(flexao) || isNaN(abdominal)) {
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        return;
    }

    const mCorrida = obterMencao(corrida, tabelaTAF[sexo].corrida, idade);
    const mFlexao = obterMencao(flexao, tabelaTAF[sexo].flexao, idade);
    const mAbdominal = obterMencao(abdominal, tabelaTAF[sexo].abdominal, idade);
    const mBarra = obterMencao(barra, tabelaTAF[sexo].barra, idade, true);

    const pesoMencao = { 'I': 1, 'R': 2, 'B': 3, 'MB': 4, 'E': 5, 'S': 5, 'NA': 6 };
    const mConceituadas = [mCorrida, mFlexao, mAbdominal];
    
    if (idade < 50) {
        mConceituadas.push(mBarra);
        document.getElementById('resItemBarra').style.display = 'flex';
        atualizarElemento('resBarra', mBarra);
    } else {
        document.getElementById('resItemBarra').style.display = 'none';
    }

    let menorPeso = 6;
    let mGeral = 'I';
    
    mConceituadas.forEach(m => {
        if (pesoMencao[m] < menorPeso) {
            menorPeso = pesoMencao[m];
            mGeral = m;
        }
    });

    if (idade >= 50 && mGeral !== 'I') {
        mGeral = 'S';
    }

    atualizarElemento('resCorrida', mCorrida);
    atualizarElemento('resFlexao', mFlexao);
    atualizarElemento('resAbdominal', mAbdominal);
    atualizarElemento('resGeral', mGeral);

    document.getElementById('resultBox').style.display = 'block';
}

function atualizarElemento(id, mencao) {
    const el = document.getElementById(id);
    if (mencao === 'S') el.textContent = 'Suficiente';
    else if (mencao === 'I') el.textContent = 'Insuficiente';
    else if (mencao === 'R') el.textContent = 'Regular';
    else if (mencao === 'B') el.textContent = 'Bom';
    else if (mencao === 'MB') el.textContent = 'Muito Bom';
    else if (mencao === 'E') el.textContent = 'Excelente';
    else el.textContent = 'Não Aplicável';
    
    el.className = `badge mencao-${mencao}`;
}

document.getElementById('sexo').addEventListener('change', ajustarLabelBarra);
document.getElementById('idade').addEventListener('input', ajustarLabelBarra);
document.getElementById('btnCalcular').addEventListener('click', calcularTaf);
ajustarLabelBarra();