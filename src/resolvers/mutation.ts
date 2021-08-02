import { IResolvers } from "graphql-tools";
import { Datetime } from "../lib/datetime";
const mutation : IResolvers = {
    Mutation : {
        async eliminarEmpleado(_: void, { id }, { db }) : Promise<any>{
            const empleados = db.collection("empleados");

            
            const result = await empleados.deleteOne({ id });
            
            console.log(result);

            if (result.deletedCount === 1) {
            console.dir("Successfully deleted one document.");
            } else {
            console.log("No documents matched the query. Deleted 0 documents.");
            }
        },
        async registerUser(_: void, { user }, { db }) : Promise<any>{
            const lastUser = await db.collection('users').find()
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
            const lastHerramienta = await db.collection('herramientas').find()
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
            const lastEmpleado = await db.collection('empleados').find()
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
            const lastMovimiento = await db.collection('movimientos').find()
                                .limit(1).sort({fecha: -1 }).toArray();
            if ( lastMovimiento.length === 0){
                movimiento.id = 1;
            } else {
                movimiento.id = lastMovimiento[0].id + 1;
            }
            movimiento.fecha = new Datetime().getCurrentDateTime();
            await db.collection('movimientos').insertOne(movimiento);
            return movimiento;
        }
    }
}

export default mutation;