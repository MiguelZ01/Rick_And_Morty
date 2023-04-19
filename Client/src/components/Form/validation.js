const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'Ingresa un email valido.';
    }
    if(!userData.email){ 
        errors.email = 'Debes ingresar un email.';
    }
    if(userData.email.length > 35){
        errors.email = 'Email no debe superar los 35 caracteres.'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'No puede estar en cero.'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'Debe tener entre 6 a 10 caracteres.'
    }

    return errors;
}

export default validation;