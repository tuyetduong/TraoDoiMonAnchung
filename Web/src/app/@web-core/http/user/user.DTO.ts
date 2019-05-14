export interface User {
  id?: string;
  TenDangNhap?: string;
  Password?: string;
  Email?: string;
  IDThucDon?: string;
  SDT?: string;
  gender?: string;
  avatar?: string;
  role?: string;
  salt?: string;
  activated?: boolean;
}


export interface GetUserRequest {
    page?: number;
    amount?: number;
    typesort?: string;
    search?: string;
}

export interface GetUserResponse {
    data: User[];
}

