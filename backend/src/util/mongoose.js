// Tối ưu hóa dữ liệu trả về từ MongoDB.

// Xử lý lỗi bảo mật của Handlebar. Không cho phép truy cập trực tiếp dữ liệu từ database. Thay vào đó convert dữ liệu đã có thành dạng object JS thông thường. Tránh expose vulnerabilities.
// Map toàn bộ dữ liệu và trả nó về dạng object

// Xử lý array
export function mutipleMongooseToObject(mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
}
// Xử lý một object
export function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}
