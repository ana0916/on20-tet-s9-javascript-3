/*
escala de IDH
muitoBaixo = 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 -- .799
multoAlto 0.8 - 1
*/

let data = [
    {
        pais: 'noruega',
        idh: 0.944,
    },
    {
        pais: 'qatar',
        idh: 0.850,
    },
    {
        pais: 'canadá',
        idh: 0.913,
    },
    {
        pais: 'brasil',
        idh: 0.755,
    },
    {
        pais: 'japão',
        idh: 0.891,
    }, {
        pais: 'vietnã',
        idh: 0.666,
    },
    {
        pais: 'afeganistão',
        idh: 0.465,
    },
    {
        pais: 'camarões',
        idh: 0.512,
    },
];

for (pais of data) {
    if (pais.idh >= 0 && pais.idh < 0.5) {
        console.log('IDH de ${pais.pais} muito baixo')
    } else if (pais.idh < 0.6) {
        console.log('IDH de ${pais.pais} baixo')
    } else if (pais.idh < .7) {
        console.log('IDH de ${pais.pais} medio')
    } else if (pais.idh < .8) {
        console.log('IDH de ${pais.pais}alto')
    } else if (pais.idh <= 1) {
        console.log('IDH de ${pais.pais} muito alto')
    }
}



