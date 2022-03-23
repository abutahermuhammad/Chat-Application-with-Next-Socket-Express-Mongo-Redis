export const middleware = async (req, ev) => {
    return new Response({
        ip: req.ip,
        geo: req.geo, // this will spin the globe!
        ua: req.ua,
    });
};

export default middleware;
