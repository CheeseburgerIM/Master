window.onload = () => {
    var master = new Date("2022/12/24")
    var current = new Date()
    var value = (master.getTime() - current.getTime()) / (24 * 3600 * 1000)
    var scores = {
        math: 115,
        datastructure: 115,
        english: 70,
        politics: 60
    }
    var total = 0;
    for (let item in scores) {
        total = total + scores[item]
    }
    document.body.innerHTML =
        `
    <master>2023届考研已过去 ${-Math.floor(value)} 天</master>
    <b>&nbsp;&nbsp;&nbsp;&nbsp;预期分数</b>
    <ul>
        <li>数一： ${scores.math}</li>
        <li>英一： ${scores.english}</li>
        <li>数据结构： ${scores.datastructure}</li>
        <li>政治： ${scores.politics}</li>
        <li><b>总分： ${total}</b></li>
    </ul>
    `
}