export const validFormCant = (Cant) => {

    let noValidCant = Cant === 0 || isNaN(Cant);

    if(isNaN(Cant) || Cant === 0){
        
        return noValidCant;
    }

}
export const validFormName = (Name) => {

    let noValidName = Name.trim() === "";
    if(Name.trim() === ""){
        return noValidName
    }
}