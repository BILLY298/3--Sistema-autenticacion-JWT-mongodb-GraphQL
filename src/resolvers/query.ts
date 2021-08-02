import { promises } from "dns";
import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        async empleados(_:void,__: any, {db}): Promise<any>{
            return await db.collection('empleados').find().toArray();
        },
        async movimientos(_:void,__: any, {db}): Promise<any>{
            return await db.collection('movimientos').find().toArray();
        },
        async herramientas(_:void,__: any, {db}): Promise<any>{
            return await db.collection('herramientas').find().toArray();
        },
        async users(_:void,__: any, {db}): Promise<any>{
            return await db.collection('users').find().toArray();
        }
    }
}

export default query;