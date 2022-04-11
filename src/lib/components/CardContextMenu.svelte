<script>
    import { deleteSubject } from '../algoritmos/deleteSubject';

    export let display = 'none';
    export let currentSubjectID;
</script>


<section
    style:display={display}
    
    >

    <button>Editar Materia</button>

    <button
        on:click={() => deleteSubject(currentSubjectID)}
        >Eliminar Materia
    </button>
    
    <svg 
        width="8" height="6" 
        viewBox="0 0 8 6" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.45749 0.485504C4.06909 -0.161835 3.13091 -0.161834 2.74251 0.485505L0 5.05635H7.2L4.45749 0.485504Z" fill="white"
            />
    </svg>
        
        
        
</section>

<style lang="scss">
    section {
        padding: 8px;
        background: #FFFFFF;
        border-radius: 4px;
        //outline: 1px solid red;

        position: absolute;
        top: 80%;
        right: 0;

        display: flex;
        flex-direction: column;
        gap: 4px;

        // EVITAR QUE INTERFIERA CON EL SWITCH
        z-index: 20;
        //margin-top: 4px;
    }

    button {
        padding: 12px 10px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: #67798E;
        border-radius: 2px;
        border: none;
        width: 118px ;
        background-color: transparent;
        text-align: left;

        cursor: pointer;

        &:hover {
            color: #566576;
            background-color: #EBF4FE;
        }
    }

    svg {
        position: absolute;
        //outline: 1px solid red;
        top: -5px;
        right: 8px;
    }
</style>
