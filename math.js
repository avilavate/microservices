var seneca = require('seneca')();
console.log(seneca);

seneca.add('role:math,cmd:sum', (msg, reply) => {
    reply(null, { answer: (msg.left + msg.right) })
})
var ans = 0;

seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 2 }, function (err, result) {
    if (err) return console.error(err)
    console.log(result);
    var p = new Promise((res, rej) => {
        res(result);
    });
    p.then((d) => {
        console.log(d);
    })
});
