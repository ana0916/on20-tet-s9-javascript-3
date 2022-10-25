// if / else mais generico
const horario = prompt('Digite um horario:')

if(horario >=0 && horario < 6) {
    alert('e manha')
} else if (horario >= 6 ){
    alert('e noite')
}

// e = &&
// ou = ||

// operador ternario
//horario < 12 ? alert('dia') : alert('noite')

// switch/case para casos especificos

const region = prompt('type your region')

switch (region) {
    case 'nordeste':
        alert('possui 9 estados');
        break;
    case 'norte':
        alert('possui 7 estados');
        break
    case 'centro-oeste':
        alert('possui 3 estados e o DF');
        break;
    case 'sudeste':
        alert('possui 4 estados');
        break;
    case 'sul':
        alert('possui 3 estados');
        break;          
    default:
        alert('regiao nao exsite no brasil')
        break;
}