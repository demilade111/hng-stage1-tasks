const resolveClientIp = (req) => {
     let clientIp = req.clientIp || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     if (clientIp && clientIp.includes(',')) {
       clientIp = clientIp.split(',')[0];
     }
     if (clientIp === '::1' || clientIp === '127.0.0.1') {
       clientIp = '8.8.8.8'; 
     }
     return clientIp;
   };
   
   module.exports = {
     resolveClientIp,
   };
   