import { writable, derived, get } from 'svelte/store';
import { getData } from '../firebase/firebaseFunctions';

// HACE LA PETICIÓN AL SERVIDOR Y HACE BIND DE LA DATA
    let materias = writable([]);

    export async function bindData(uid) {
        let { subjectsParsed } = await getData('lareData', `${uid}`);

        materias.set(subjectsParsed);
    };



// CALCULA EL TOTAL DE UNIDADES DE MÉRITO GANADAS
    let totalUMG = derived(materias, 
                        ($materias) => {
                    	    let UMG = $materias
                    	    	.map(( mat ) => mat.getUMT())
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
                    	    	.map(( mat ) => mat.getUV())
                    	    	.reduce((acc, elem) => {
                    	    		return acc + elem;
                    	    	}, 0);
                            
                            return TUV;
                        }
                    );



// CALCULA EL PROMEDIO (DERIVADA DE DOS DERIVADAS)
    let cumAcumulado = derived([totalUMG, totalUV], 
                        ($array) => {
                            const [ totalUMG, totalUV ] = $array;
                            return (totalUMG / totalUV);
                        }
                    );



    let cumEgresado = derived(materias, 
        ($materias) => {

            let materiasPasadas = $materias
                .filter(( mat ) => mat.getGrade() >= 6)

            let total = materiasPasadas
                .reduce((acc, elem) => {
                    acc.UMT += elem.getUMT()
                    acc.UV += elem.getUV()
                    
                    return acc;

                }, { UMT: 0, UV: 0 });


            return total.UMT / total.UV;
        }
    )


export { materias, cumAcumulado, totalUMG, cumEgresado, totalUV };
