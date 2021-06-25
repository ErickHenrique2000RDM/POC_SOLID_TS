module.exports = {
    isNumber(id: Number){
        const idNumber = Number(id);
        if(!idNumber){
            throw new Error('Invalid id');
        }
    }
}