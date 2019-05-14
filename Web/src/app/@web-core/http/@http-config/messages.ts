export const SUCCESS = {
    AUTH: {
        LOGOUT: 'Đăng xuất thành công',
        LOGIN: 'Đăng nhập thành công',
        DANGKY: 'Đăng ký thành công'
    },
    USER: {
        GET: 'Lấy dữ liệu thành công',
        CREATE: 'Tạo tài khoản thành công',
        UPDATE: 'Cập nhật tài khoản thành công',
        DELETE: 'Xóa tài khoản thành công'
    },
    SUAT_AN: {
        GET: 'Lấy dữ liệu thành công',
        CREATE: 'Tạo suất ăn thành công',
        REQUEST: "Gửi yêu cầu ăn cùng thành công"
    }
};

export const FAIL = {
    LOGOUT: 'Đăng xuất thất bại',
    EMPLOYEE: {
        DATE: 'Ngày tìm kiếm bắt đầu phải nhỏ hơn ngày tìm kiếm kết thúc'
    },
    AUTH: {
        COMPARE_PASSWORD: 'Mật khẩu không khớp vui lòng '
    },
};

export const STATUS = {
    SUCCESS: 'Thành công!',
    FAIL: 'Lỗi!',
    WARNING: 'Cảnh báo!'
};

export const ARLET = {
    DATE: {
        WRONG_FORMAT: 'Ngày không hợp lệ! Ngày hợp lệ là ngày có định dạng ngày/tháng/năm'
    },
    USER: {
        PASSWORD_ENOUGH_LENGTH: 'Mật khẩu phải tối thiểu 6 kí tự',
        PASSWORD_NOT_VALID: 'Mật khẩu không khớp, vui lòng kiểm tra lại'
    }
};
