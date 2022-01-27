import { writable, derived } from 'svelte/store';
import { getData } from '../firebase/firebaseFunctions';


// HACE LA PETICIÓN AL SERVIDOR Y HACE BIND DE LA DATA
    let materias = writable([]);

    async function bindData() {
        let data = await getData('lareData', 'bryanbell');
        materias.set(data);
    };

    bindData();



// CALCULA EL TOTAL DE UNIDADES DE MÉRITO GANADAS
    let totalUMG = derived(materias, 
                        ($materias) => {
                    	    let UMG = $materias
                    	    	.map(({ nota, uv }) => nota * uv)
                    	    	.reduce((acc, elem) => {
                    	    		return acc + elem;
                    	    	}, 0);
                            
                    	    return UMG;
                        }
                    );



// CALCULA EL TOTAL DE UV
    let totalUV = derived(materias, 
                        ($materias) => {
                    	    let TUV = $materias
                    	    	.map(({ uv }) => uv)
                    	    	.reduce((acc, elem) => {
                    	    		return acc + elem;
                    	    	}, 0);
                            
                            return TUV;
                        }
                    );



// CALCULA EL PROMEDIO (DERIVADA DE DOS DERIVADAS)
    let promedio = derived([totalUMG, totalUV], 
                        ($array) => {
                            const [ totalUMG, totalUV ] = $array;
                            return (totalUMG / totalUV).toFixed(3);
                        }
                    );



export { materias, promedio, totalUMG };
