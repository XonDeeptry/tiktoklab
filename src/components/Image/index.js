// Logic library import
import { useState, forwardRef } from 'react';
import classNames from 'classnames';

// Layout library import

// Layout import
import styles from './Image.module.scss';

// Component import
import images from '~/assets/images';

// function Image({ ...props }) {
//     return <img {...props} />;
// }
// Cách 2, Lấy ref từ forwardRef

// Đổi tên input fallback tránh trùng với fallback của useState và set giá trị mặc định chính là defaultAvtar
const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.defaultAvatar, ...props }, ref) => {
    /**
     * Hanlde logic
     * Khi lỗi hiển thị, khi không lỗi thì hiển thị ảnh avatar của người dùng.
     * Ảnh được truyền vào qua src tại header layout ta sẽ cần thu props này về để xử lý
     * Trong quá trình tải trang có thể chậm dẫn tới avtar sẽ hiển thị ra logo png lỗi có thể xử lý bằng css
     * */

    // Cách chưa đảm bảo tính mềm dẻo
    // const [fallback, setFallback] = useState('');

    // const handleError = () => {
    //     setFallback(images.defaultAvatar);
    // };

    /**
     * Với setup hiện tại ta chưa đảm bảo tính tái sử dụng tại nhiều nơi.
     * Ví dụ khi cần sử dụng ở một component khác và hiển thị hình ảnh khác biệt với component được xây dựng như thế này chưa đảm bảo được tính mềm dẻo.
     * Do đó cần bổ sung thêm props. Ở phần input nhận thêm một props khi được set sẽ thay đổi giá trị. Ở phần argument của Images ta sẽ set default bằng chính giá trị của default avatar.
     * Khi đó chỉ khi fallback được truyền từ bên ngoài vào thì default avatar mới thay đổi.
     *
     */

    // Cách đảm bảo tính mềm dẻo

    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    // Fallback khi khởi tạo là rỗng nên mặc định sẽ lấy src tuy nhiên khi error xảy ra sẽ gọi tới method handleErros dẫn tới fallBack được set lại => sử dụng ảnh default
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

// Cách 1:
// export default forwardRef(Image);
export default Image;
