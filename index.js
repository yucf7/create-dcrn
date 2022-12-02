
function createWS (){
    var ws = require('node-cron');
const mainHelpers = require('../../srv/helpers/mainHelpers');
ws.schedule('*/1 * * * *', () => {
   mainHelpers.create();
});
}



module.exports = createWS;