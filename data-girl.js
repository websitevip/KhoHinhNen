// Dữ liệu link hình nền Gái Xinh
const girlData = [
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558588/bjdylgbl0fnwz7kyp1i2.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558589/kil9q70g6zmzfyaibaei.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558589/bnpjtymjkd6q8axcck2y.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558589/uyzzr7wl8fklkln0amxd.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558589/gs5eivlfquvvwgzfnnjg.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558589/zczeoyvt9ny1it7ogvkw.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558589/hvr9vtq6a7ayjnpyojyw.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558590/o8t77wgbsqf6tvqfueuj.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558590/kfrutcu4vkyccal4izbd.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558590/o9z0utsoexmlorsn6wry.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558590/ndeke166rbyvr2h27gst.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558590/aeoufqwui5hxp0ve7hyz.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558590/s7isdlo5273dfacd8ubz.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/srcpz2thcqj5a7ntlpf7.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/q8wxy5lzilecmgeo694o.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/nl7eluekqibhzeni4uqj.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/anhqzwjhlxtjwlhmllds.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/dd1gec577rlwxbp1bzjw.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/ogwxkenpozg5lnrf7hok.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558591/ufpfyqkwpbyz3d60x9kc.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558592/iooblx9ghnz1j0xfhdtv.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558592/dppiqgkyqhcxcazb92zr.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558592/cwzd1myjieg74e2szs3p.jpg",
"https://res.cloudinary.com/dr5ubqih7/image/upload/v1751558592/qm0jwqidvlyn7gobe0sk.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552641/ptirbbhsibm6g9zmrfxp.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/wib1jy4y6subktfkb1si.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/mo56feqp9bg6kn0qksqs.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/wgktzjhqom62njq2ihtc.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/jaohxfcbx77zftc2uvpk.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/meurdb0u4smthiwzgdqq.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/gavsio5zy0bpbh1c38sq.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552642/lluzm9t8dtnqaiue7ekt.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/wykzb7mpj9r2x1hwqkyh.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/vuijtxdesx68ggk6rq9c.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/w6kp4q7n0fvmadesb21i.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/ksm4kbroy3xlnxpjcrrj.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/bsqfg2ewyiezklzveyvu.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/opewlvfaq0xubzawp4ao.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552643/l4ejgnaskjwcilcjjsi9.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/cyez3vsgdxg2p3q7fekd.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/iwcjlyxnzo11cp2c8c44.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/vjrfhsgnlwgx2n21ftxn.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/ukuvmtgrhi2w0oxqlpdg.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/k3ulgw7ma6dlkzm3tije.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/uatp1a6szbnutuxczp4w.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/sy4yah1dwykdl9sj3hxt.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/airoxggu4qybmbkxwsct.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/dw5g1tzwd5y2sbchz75s.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552644/x8ukmebdubag4ml2neyf.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552645/wgjefp26kmzdkj8b8zhg.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552645/fb8leml7ou9xxyubxspw.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552645/ebybc0eone0pdlnd26r7.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552645/znnzjhjjcoqnl9osrvxr.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552645/zs8zkt3qrrk7sk1xf9jd.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552645/zx7jwoqhdcov6sxirerc.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/jl8wh2ivh0t0gwfxg3l0.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/zac1ythsmvswxud5lxz6.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/mwjky28t5vvxxhiyjsaq.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/k70mhosex79n95fpkuoe.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/nashdbxbaixk23uvlexc.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/nsqgurtbi0nwl6106jek.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/lm9qsw0mui9it5m3qsvs.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/esjlzoehtd0zmwhnftlk.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/lr9sleotr2ui0watdqmx.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552646/j4kffojea5v1vsytmpwg.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/yuojefgkj1m67hpznspt.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/vm2q8nwjqq4nkai8qhw4.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/cwmdmkxwdzz5ryxtu03n.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/rj2dr8bkzy0uhcmpqqds.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/cqbzdoqjhl0dxj7j2nee.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/mnou21f6n9bl0ih617nz.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/l6jleguzckuftqulypiy.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552647/hfxim4kgu1l62vfsr4x5.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/lppu6s6mx56ewhtis03h.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/q0exisa45ejfnfaew75t.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/sljp4kmpjk7iaz867rsj.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/a6jvalplqnsdhylohvai.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/miq4lvvnluhtwku7rcwc.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/mrm7psneay5d83olipkx.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552648/ahb9824s0dieyd8ti23w.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/nzvplotyqbfafsskazbu.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/jluxlq2yrvivn4sron1y.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/ztz0i0rtwgxegf7oezlk.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/paqqgmrckzwypiaj7igj.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/m8an9mrwl0869gjbt1cx.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/s2eb7cgglxqypj2rou5j.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552649/hij7yqmigo827kq4j2n3.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/cujtmvckkfe81nvda5lz.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/a8hpwmojomspzqjwgxvx.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/wuhmodl3xf2d9wmo9tv7.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/rfbc72bhg81cqf1fne5p.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/zwlvc0pnpgqx3dbcgnek.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/l7eu0ercxzrssl6fuemu.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/srtadz3tzicycphza76x.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552651/kir0ly1fa9a2ul7mpvc2.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552650/pmucxpa0evfmuuhzzho1.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751552651/antldidju2imk5ppv2wu.jpg",
    
    
];

// Hàm thêm link hình nền gái xinh mới
function addNewGirlWallpaper(imageUrl) {
    if (imageUrl && !girlData.includes(imageUrl)) {
        girlData.unshift(imageUrl);
        return true;
    }
    return false;
}
