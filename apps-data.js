// Dữ liệu link hình nền
const appsData = [
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435160/t3cipnit96ynvx4ulbzb.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435161/yaamobraolzpts19cxkv.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435161/by3dqevq33rdjxsuxnse.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435161/yxxzvao7h5bsxayhtftv.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435161/vyu8gxycpeq0uqpssp1a.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435161/xgnnhwk8i2ogfs72ag2a.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435161/xig5xhxheyrpmtfka6wq.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/kvzeqfzjkrhu2oqdmnef.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/etuzlkrww4elzsqwhczp.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/irjxb58lfnjy8ac4xb0u.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/lfth3uakgltz26dbtjeq.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/vnsqop8nrbcyndom37ek.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/o3vat5nkes6ky0mekobn.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/lscd6rqzteiztarmdcap.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/mohkl8eisfxxyoggjffm.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435162/iwxrwe8tzhk5omiqmm9n.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/gzznczg5el199sfmfjiu.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/zx5ha2ckzkpk7usibx4k.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/snvlstadx77siwv1npnx.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/igahzlxfucn42svbaafo.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/xjfcy1ft3y0bfonw9qqc.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/t9fvu4xkf2ups3vv60y8.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435163/v5yi0kdboanxdv6mqevk.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/uqtmcz6ekqrzodxh6e6f.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/yn1k5cpiwfu7wlsq2qjo.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/pzrkwcvcdua1jrimzhwy.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/h3gve8hqrr6mi2clops0.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/nvkryx31kzhymdp0ivjc.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/azdqe5k4buewy729a5os.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435164/kqzgminpc5cazuwenkff.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/ldewjecslz6ndusik5rx.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/qg3jkqijrkixdbit4hqt.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/iqfkn24pv3b7zv7idayd.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/gtimf0es1u5mk1vsygkw.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/d89kn4dg053odcfcnlz4.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/gobr8hmwzcva0ydydaj6.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435166/f2qgrka0vnognxrfux4s.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435166/q6tlc74wwx6irvxnl3k4.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435165/dhw64yhadhsxioxplb7y.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435166/gtmr2ahsh1aibbihbfo3.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435166/opvsfxr5kknzft8eiuz8.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435166/lmyplknrknzpgphg1dxx.jpg",

    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab", 
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435574/mpm7jym0odimqslgwj2w.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435574/dljopeqnidjxmqkxtee8.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435574/zzddp6dqpah9i0damm1q.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435574/jmlneobaw63pm5bfsibu.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435574/bkqsbloklpymzovlr27q.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435574/lov3dgrbbhrdjrak0pmn.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435575/igbh1l3q8ecz7c9egppu.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435575/ugm0kzyp4fraspviyczr.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435575/k7lrjhyubce9mlcwfyox.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435575/eh4mid2kyk40jfvakjxi.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435575/qm1vgg78gfh8tsrfpnmd.jpg",
    "https://res.cloudinary.com/dr5ubqih7/image/upload/v1751435576/krrozcltasdqyohth1ig.jpg"
];

// Hàm thêm link hình nền mới
function addNewWallpaper(imageUrl) {
    if (imageUrl && !appsData.includes(imageUrl)) {
        appsData.unshift(imageUrl);
        return true;
    }
    return false;
}