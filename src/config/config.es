import path from 'path'

const CONFIG = new Map();
CONFIG.set('phpUrl','http://127.0.0.1:88/homework/addThumbService.php');
CONFIG.set('port',3000);
CONFIG.set('viewDir',path.join(__dirname,'..','views'));
CONFIG.set('staticDir',path.join(__dirname,'..','public'));

export default CONFIG