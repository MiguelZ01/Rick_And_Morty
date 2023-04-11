const validation = (userData, errors, setErrors) => {

    // EMAIL
    if (!/\S+@\S+\.\S+/.test(userData.email)){ 
        setErrors({
            ...errors,
            email: 'Ingresa un usuario valido'
        }) 
    }

    else if (!userData.email){
        setErrors({
            ...errors,
            email: 'El nombre de usuario no puede estar vacio'
        })

    }

    else if (userData.email.length > 35){
        setErrors({
            ...errors,
            email: 'No puede tener mas de 35 caracteres'
        })
    }

    else {setErrors({
        ...errors,
        email: ''
    });
}

    // PASSWORD
    if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(userData.password)) {
        setErrors({
            ...errors,
            password: 'Longitud de 6 a 10 caracters'
        })
    }

    else if(!/\d/.test(userData.password)){
        setErrors({
            ...errors,
            password: 'Debe contener un numero'
        })
    }

    else {setErrors({
        ...errors,
        email: ''
    })}
}

export default validation;