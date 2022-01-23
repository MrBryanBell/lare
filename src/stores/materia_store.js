import { writable, derived } from "svelte/store";
import { getData } from "../firebase/firebaseFunctions";


let materias = writable([]);

let promedio = derived(materias, ($materias) => {
    let UMG = 
        $materias
        .map(({ nota, uv }) => nota * uv)
        .reduce((acc, elem) => {
            return acc + elem;
    }, 0)

    let TUV = 
        $materias
        .map(({ uv }) => uv)
        .reduce((acc, elem) => {
            return acc + elem;
    }, 0)

    return (UMG / TUV).toFixed(3);
})

async function bindData(){
    let data = await getData('lareData', 'bryanbell');
    materias.set(data);
}

bindData();



export { materias, promedio };
