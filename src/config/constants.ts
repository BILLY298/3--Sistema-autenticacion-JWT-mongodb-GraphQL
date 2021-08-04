import environments from "./environments";

if (process.env.NODE_ENV !== 'production'){
    const environment = environments;
}

const SECRET_KEY = process.env.SECRET;

export const COLLECTIONS = {
    MOVIMIENTOS : 'movimientos',
    EMPLEADOS : 'empleados',
    HERRAMIENTAS : 'herramientas',
    USERS: 'users'
}