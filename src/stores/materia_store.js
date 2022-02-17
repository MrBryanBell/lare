import { writable, derived } from 'svelte/store';
import { getData } from '../firebase/firebaseFunctions';
import { MateriaClass } from '../classes/materia_class';
import { listOfSubjects } from './listOfSubjects';

// HACE LA PETICIÓN AL SERVIDOR Y HACE BIND DE LA DATA
    let materias = writable([]);

    export async function bindData(uid) {
        let data = await getData('lareData', `${uid}`);
        let parsedData = data.map((data) => {
            const currentSubject = listOfSubjects.find((sub) => sub.code == data.code);
            const dataCombined = {...data, ...currentSubject};
            const subjectFromClass = new MateriaClass(dataCombined);
            return subjectFromClass;
        })
        materias.set(parsedData);
    };



// CALCULA EL TOTAL DE UNIDADES DE MÉRITO GANADAS
    let totalUMG = derived(materias, 
                        ($materias) => {
                    	    let UMG = $materias
                    	    	.map(({ grade, uv }) => grade * uv)
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
                            return (totalUMG / totalUV);
                        }
                    );



export { materias, promedio, totalUMG };
