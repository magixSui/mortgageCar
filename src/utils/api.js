let projectName = 'mortage';
let HOST = process.env.NODE_ENV === 'development'? '' : '../'
let API = {
  car: {
    list: HOST + projectName + '/car/list',
    query: HOST + projectName + '/car/query',
    save: HOST + projectName + '/car/save',
    delete: HOST + projectName + '/car/delete'
  }
};

export default API;