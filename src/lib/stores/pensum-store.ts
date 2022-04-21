import Wr_Pensum from '$lib/classes/custom-stores/pensum';
import Pensum from '../classes/pensum';


const initConfig = new Pensum({
    id: '',
    university: '',
    faculty: '',
    career: '',
    collaborators: [],
    subjects: [],
});

const pensum = new Wr_Pensum(initConfig);

export default pensum;