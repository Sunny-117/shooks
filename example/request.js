export default (path, params = {}) => new Promise(resolve => {
    const {pageNo} = params;
    setTimeout(() => { // 我这里就用setTimeout模拟一段逻辑了
        const offset = (pageNo - 1) * 10;
        resolve([
            {id: 1, text: `${path}-${offset + 1}`},
            {id: 2, text: `${path}-${offset + 2}`}
        ]);
    }, 1000);
});
