import { IResolvers } from "graphql-tools";
import { COLLECTIONS } from "../config/constants";
import { Datetime } from "../lib/datetime";
const mutation : IResolvers = {
    Mutation : {
        async eliminarEmpleado(_: void, { id }, { db }) : Promise<any>{
            try {
                let query = { id: parseInt(id) };
                
                const empleadoEliminado = await db.collection(COLLECTIONS.EMPLEADOS).findOne(query);
                
                const deleteEmpleado = await db.collection(COLLECTIONS.EMPLEADOS).findOneAndDelete(
                    query
                );
                return empleadoEliminado;
            }
            catch(ex){
                return ex
            }
        },
        async eliminarHerramienta(_: void, { id }, { db }) : Promise<any>{
            try {
                let query = { id: parseInt(id) };
                
                const herramientaEliminada = await db.collection(COLLECTIONS.HERRAMIENTAS).findOne(query);
                
                const deleteHerramienta = await db.collection(COLLECTIONS.HERRAMIENTAS).findOneAndDelete(
                    query
                );
                return herramientaEliminada;
            }
            catch(ex){
                return ex
            }
        },
        async eliminarMovimiento(_: void, { id }, { db }) : Promise<any>{
            try {
                let query = { id: parseInt(id) };
                
                const movimientoEliminado = await db.collection(COLLECTIONS.MOVIMIENTOS).findOne(query);
                
                const deleteMovimiento = await db.collection(COLLECTIONS.MOVIMIENTOS).findOneAndDelete(
                    query
                );
                return movimientoEliminado;
            }
            catch(ex){
                return ex
            }
        },
        async registerUser(_: void, { user }, { db }) : Promise<any>{
            const lastUser = await db.collection(COLLECTIONS.USERS).find()
                                .limit(1).sort({registerDate: -1 }).toArray();
            if ( lastUser.length === 0){
                user.id = 1;
            } else {
                user.id = lastUser[0].id + 1;
            }
            user.registerDate = new Datetime().getCurrentDateTime();
            await db.collection('users').insertOne(user);
            return user;
        },
        async registerHerramienta(_: void, { herramienta }, { db }) : Promise<any>{
            const lastHerramienta = await db.collection(COLLECTIONS.HERRAMIENTAS).find()
                                .limit(1).sort({registerDate: -1 }).toArray();
            if ( lastHerramienta.length === 0){
                herramienta.id = 1;
            } else {
                herramienta.id = lastHerramienta[0].id + 1;
            }
            herramienta.registerDate = new Datetime().getCurrentDateTime();
            await db.collection('herramientas').insertOne(herramienta);
            return herramienta;
        },
        async registerEmpleado(_: void, { empleado }, { db }) : Promise<any>{
            const lastEmpleado = await db.collection(COLLECTIONS.EMPLEADOS).find()
                                .limit(1).sort({registerDate: -1 }).toArray();
            if ( lastEmpleado.length === 0){
                empleado.id = 1;
            } else {
                empleado.id = lastEmpleado[0].id + 1;
            }
            empleado.registerDate = new Datetime().getCurrentDateTime();
            await db.collection('empleados').insertOne(empleado);
            return empleado;
        },
        async registerMovimiento(_: void, { movimiento }, { db }) : Promise<any>{
            const lastMovimiento = await db.collection(COLLECTIONS.MOVIMIENTOS).find()
                                .limit(1).sort({fecha: -1 }).toArray();
            if ( lastMovimiento.length === 0){
                movimiento.id = 1;
            } else {
                movimiento.id = lastMovimiento[0].id + 1;
            }
            movimiento.fecha = new Datetime().getCurrentDateTime();
            await db.collection(COLLECTIONS.MOVIMIENTOS).insertOne(movimiento);
            return movimiento;
        }
    }
}

export default mutation;