const images = {
    // svg trả về một object có attribute default chứa đường dẫn tới file đo dó cần phải .default để lấy attribute đó ra
    logo: require('~/assets/images/logo.svg').default,
    // Các file png được webpack trả về nguyên vẹn thay vì object như svg nên không cần sử dụng . default
    defaultAvatar: require('~/assets/images/defaultAvatar.png'),
};

export default images;
