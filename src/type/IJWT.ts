import { JwtPayload } from "jsonwebtoken";

export interface IJWTData extends JwtPayload {

    userId?: string 
}