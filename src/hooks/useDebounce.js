import { useState, useEffect } from 'react';

// Nhận giá trị chính là value search và thời gian chờ
function useDebounce(value, delay) {
    // Set state bằng với giá search
    const [debounceValue, setDebounceValue] = useState(value);
    // Tạo timer chờ sau đó set lại giá trị khi chờ xong input
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        // Cleanup function xóa đi timer
        return () => clearTimeout(handler);
        // Khi giá trị đầu vào thay đổi thì mới gọi useEffect
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    // Trả lại giá trị khi không thay đổi.
    return debounceValue;
}

export default useDebounce;
