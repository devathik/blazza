import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "@/config/env";
import catchAsync from "@/helpers/catchAsync";

export const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized access - Token missing" });
    }

    // Support standard Bearer token format
    if (token.startsWith("Bearer ")) {
      token = token.slice(7);
    }

    let decoded: any;
    try {
      const secret = (env.jwt_access_secret as string) || "dev-access-secret";
      decoded = jwt.verify(token, secret);
    } catch (err: any) {
      console.error("JWT Verification Failure:", err.message || err);
      return res.status(401).json({ 
        success: false, 
        message: `Unauthorized access - Invalid token (${err.message || "verification failed"})` 
      });
    }

    (req as any).user = decoded; // add user to request

    if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
      return res.status(403).json({ success: false, message: "Forbidden access" });
    }

    next();
  });
};
