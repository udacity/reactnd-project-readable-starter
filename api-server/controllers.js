exports.set = function(req, res) {
    // params, uuid_art, title_art, author
    return new Promise((res) => {
        // let posts = getData(token);
        // posts[post.id] = {
        //     id: post.id,
        //     timestamp: post.timestamp,
        //     title: post.title,
        //     body: post.body,
        //     author: post.author,
        //     category: post.category,
        //     voteScore: 1,
        //     deleted: false,
        //     commentCount: 0
        // }
        res('OK');
    });

};

exports.listGet = function(req, res) {
    return new Promise((res) => {
        res('list')
    });
};

exports.listArt = function(req, res) {
    return new Promise((res) => {
        res('list_art')
    });
};

exports.scores = function(req, res) {
    return new Promise((res) => {
        // res.writeHead(200, {"Content-Type": "application/json"});
        // res.end(JSON.stringify({"message": "Cos tutaj wpiszemy"}));
        res('scores')
    });
};