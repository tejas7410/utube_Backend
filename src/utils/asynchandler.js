const asynchandler = (requestHandler) => {
    return async (req, res, next) => {
        Promise.resolve(
            requestHandler(req, res, next)
        ).catch((error) => next(error));
    }
};

export { asynchandler };










// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//         })
//     }
// }