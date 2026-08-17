import { ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = (
    err,
    req,
    res,
    next
) => {
    return res.status(500).json({
        success: false,
        message: err.message || "Something went wrong",
        error: err,
    });
};