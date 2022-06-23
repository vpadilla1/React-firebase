export const erroresFirebase = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
            return {
                code: "email",
                message: "Este usuario ya esta registrado"
            } 
        case "auth/invalid-email":
            return {
                code: "email",
                message: "Formato de email no valido"
            } 
        case "auth/user-not-found":
            return {
                code: "email",
                message: "El usuario no existe"
            } 
        case "auth/wrong-password":
            return {
                code: "password",
                message: "Contraseña incorrecta"
            }
        default:
            return "Ocurio un error en el server"
    }
}

