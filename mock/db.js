/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

const faker = require('faker')

let categories = []

for (let i = 0; i < 20; i++) {
    categories.push({
        id: i,
        name: faker.random.words(),
        desc: faker.lorem.paragraph(),
    })
}

// faker.locale = 'zh-CN'

const word = faker.lorem.word

const users = (function() {
    let _users = []
    for(let i = 0; i < 20; i++) {
        _users.push({
            id: i,
            role: 10,
            name: faker.internet.userName(),
            pwd: faker.internet.password(),
            schoolId: faker.random.number(),
            avatar: faker.internet.avatar(),
            paperDone: [{
                name: '概率论',
                score: 66
            }, {
                name: '西方美学史',
                score: 77
            }, {
                name: '操作系统',
                score: 90
            }],
            papers: [{}],
            news: [{
                id: i,
                title: faker.random.words(),
                content: faker.lorem.paragraph(),
                bg: faker.image.imageUrl(),
                up: faker.random.number(),
                down: faker.random.number(),
                user: [{}],
                createdAt: faker.date.past()
            }]
        })
    }
    return _users
})()

const exams = (function() {
    let _exams = []
    for (let i = 0; i < 100; i++) {
        _exams.push({
            id: i,
            title: faker.lorem.word(),
            desc: faker.lorem.paragraph(),
            image: faker.image.image()
        })
    }
    return _exams
})()

const questions = []

for (let i = 1; i < 20; i++) {
    questions.push({
        id: i,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        answers: [word(), word(), word(), word()],
        correct: 3,
        hasBug: 0,
        score: 5,
        courses: "pay"
    })
}

const news = (function() {
    let _news = []
    for (let i = 0; i < 20; i++) {
        _news.push({
            id: i,
            title: faker.lorem.words(),
            content: '<div class="common__page common__page--content"> <h2 id="section">下单</h2> <p>实际上之前很早就期待MacBook Pro，一直是准备买的，只是因为一直得到风声，十月份会有新品，所以一直是在等待。</p> <p>终于在十月末发布了新品，虽然各种感觉诚意不足，可是仍旧是比之前的MacBooK Pro要好一些的。而且因为对macOS的迷信，就上了贼船。</p> <p>关于钱，是真的贵。我一个普通的15英寸MBP达到了2万的售价。好不容易求着我爹才给买的。</p> <p><img src="http://cdn.iamhele.com/github.io/images/screenfetch.png" alt="MBP profile"></p> <p>幸好学生优惠还能用，所以售价为19948.</p> <p>11月2号下单，在16号到货。打开满是新苹果的味道。</p> <h2 id="section-1">设置</h2> <p>开始就是各种配置。一般都能看得懂，所以没什么可说的吧。</p> <p>配置好了我首先下载Xcode，然后是<a href="http://brew.sh/">homebrew</a>，随后安装各种工具。</p> <p>包括：<a href="http://weixin.qq.com/cgi-bin/readtemplate?t=mac&amp;platform=wx&amp;lang=zh_CN">微信</a>, <a href="http://im.qq.com/macqq/">QQ</a>, <a href="https://iterm2.com/">iTerm2</a>, <a href="https://www.google.com/chrome/browser/desktop/index.html">chrome</a>, <a href="https://www.sublimetext.com/3">sublime text</a>, <a href="https://code.visualstudio.com/">vscode</a>, <a href="http://music.163.com/#/download">网易云音乐</a>, <a href="https://www.jetbrains.com/webstorm/">Web Storm</a>, <a href="http://dl.xunlei.com/?from=index">迅雷</a>, <a href="https://www.docker.com/products/docker#/mac">Docker</a></p> <p>期间又用homebrew安装了macvim和go。还有proxychains-ng</p> <p>话说，这一套安装下来还是有点儿疲惫的。</p> <p>然后因为要写论文什么的，试了一下Pages，简直炸裂。不兼容特性一大堆，页面设置页做不好。然后又去装了Office。</p> <p>这里，政治正确的说法应该是买正版软件的。但是，我确实想说，这些正版软件实在是太贵了。几乎都是几百，轻则人民币，重则直接美刀！</p> <p>我很想支持他们的工作，可是这些价格贵的实在是太离谱了。我这么一个穷学生怎么可能买得起。</p> <h2 id="section-2">转换头</h2> <p>2016版MBP的一大特点就是只有四个Type-C的接口。这就导致几乎所有的外设都得通过转接口实现联通。</p> <p>所以我买了一个媒体转接口(就是一个Type-C接口转出一个USB-A，一个HDMI还有一个Type-C)，还有一个Type-A转三个USB-A再带一根网线的那种。总共两个，花了将近两百吧。</p> <p>只是最近用的时候发现，非官方转接口似乎有问题的。</p> <p>我把显示器的HDMI接出去有时候是没有信号的。一定要先把所有线都拔了，然后只插一个HDMI连接，显示器上有图像了再连USB-A的接口才行。</p> <p>很诡异对吧。</p> <p>所以我退货了，买了苹果官方的线。</p> <h2 id="section-3">新手须知</h2> <p>作为一个长期使用Ubuntu的用户来说，命令行根本没有什么问题，想怎么用就怎么用。</p> <p>可是这个图形界面就很尴尬了。不会用。。。</p> <p>首先是Finder，我是想把东西放在<code class="highlighter-rouge">$HOME</code>下的，可是找半天都找不到，问了老司机才知道原来要把目录拖进Finder的收藏夹才行。</p> <p>然后是输入法的切换，默认是大小写锁定键，而不是搜狗输入法中习惯的shift。已经好几天了，我到现在还习惯用shift。</p> <p>还有外接显示器的时候要把<code class="highlighter-rouge">节能</code>设置中的<code class="highlighter-rouge">自动切换图形卡模式</code>关掉。</p> <p>sublime的配置文件地址在<code class="highlighter-rouge">~/Library/Application Support/Sublime Text 3/Packages/User/</code></p> <p>sublime配置到命令行需要自己做个软连接：</p>  <p>而VSCode要配置到命令行可以直接在VSCode里面打开控制面板，敲<code class="highlighter-rouge">shell command</code>就能看到安装选项了。</p> <h2 id="touch-bar">Touch bar</h2> <p>这个功能其实还好吧。反应还是非常灵敏的。比如我现在在这里打字，touch bar上就会提示出备选项。在用Pages的时候也会有各种提示。</p> <p>虽然目前除了苹果家的产品，其他的都没加入touch bar支持，但是未来肯定是有的。</p> <p>Touch ID集成了。不过只有App Store能用到，其他地方没有调用。</p> <p>总体来说潜力很大。</p> <p>但是老子的ESC怎么就没了！！！</p> <p>作为一个Vim用户没有ESC怎么活！！！</p> <p>好，我忍了，外接键盘好吧？但是说好的Touch bar怎么用？</p> <p>不外接键盘又怎么用ESC！！！</p> <p>我相信你隔着这块屏幕都能感觉到我的心情！</p> <p>杀父之仇不过如此啊！何必呢！</p> <p>苹果的码农都不用Vim么！我不信啊！</p> <p>说好的针对专业用户呢！</p> <p>相比之下，看着屏幕再转移视线到下边的touch bar上的上下文开销就显得微不足道了。</p> <p>好气啊！</p> <h2 id="section-4">键盘</h2> <p>配的是第二代蝶式键盘。听网络风评，第一代键盘用起来可能跟吃屎没什么区别。</p> <p>这个键盘其实我用了两天感觉还好吧。</p> <p>键程短是真的，可是也是有反馈的哎。</p> <p>打起字来也会啪啪响，有点儿小青轴的感觉。</p> <p>其实还好。</p> <p>不过这几个 command, option, control 的键位我有点儿反应不过来，毕竟用了那么长时间的Windows键盘。习惯就好了吧。</p> <p>下面那么大一块的触控板有点儿吸引眼球。学了一点儿多指操作，感觉还挺好的。</p> <h2 id="terminal-">Terminal 代理</h2> <p>作为一个码农，自然是要会某些技能的。</p> <p>我有时候也写一点儿Go，而Go的一些包在google code上。今天在下载第三方包的时候碰到了很大的问题，我明明是有代理的，但是却一直提示我链接失败。</p> <p>后来找到了答案。原来是因为Terminal并不会用在网络设置中的代理，因为终端只是运行命令的，而没有网络链接。</p> <p>解决方法也是有的。</p>',
            bg: faker.image.imageUrl(),
            up: faker.random.number(),
            down: faker.random.number(),
            user: []
        })
    }
    return _news
})()

module.exports = function() {
    const data = {
        courses: categories,
        user: users,
        paper: [{
            id: 1,
            title: '电子支付清算',
            alert: '请加油～',
            score: '2',
            hero: faker.image.image(),
            questions
        }],
        questions,
        news,
        // 'news/articles': news,
        // 'news/trendings': news,
        exams,
        'profile/me': users[0]
    }
    return data
}
