// Dữ liệu link hình nền Gái Xinh
const girlData = [
    
    
];

// Hàm thêm link hình nền gái xinh mới
function addNewGirlWallpaper(imageUrl) {
    if (imageUrl && !girlData.includes(imageUrl)) {
        girlData.unshift(imageUrl);
        return true;
    }
    return false;
}