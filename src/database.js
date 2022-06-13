import {connect} from "mongoose";
import { MONGODB_URI } from "./config";

(async () =>{
    try{
        const db = await connect(MONGODB_URI);
        console.log("DB connected to",db.connection.name);
    }
    catch(error){
        console.log("mensaje de error:"+error);
    }
})();

/*mongodb+srv://CarlosRodrigo:rodrigo03@freecluster.dw9jl.mongodb.net/?retryWrites=true&w=majority  */