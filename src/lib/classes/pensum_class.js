class PensumSubjects {
    
    constructor({code = '03GC01', name = 'Análisis Sociopolítico', uv = 4, additions = 0, area = 'gc'}) {
        this.code = code;
        this.name = name;
        this.uv = uv;
        this.additions = additions;
        this.area = area;
    }

    setAdditions(value) {
        this.additions += value; 
    }

}

export {
    PensumSubjects,
}