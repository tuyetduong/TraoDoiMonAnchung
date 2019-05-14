import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');

export const APICONFIG = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGINADMIN: '',
    DANGKY: '/api/auth/register'
  },
  USER: {
    GETALL: '',
    CREATE: '',
    GETONE: (id) => ``,
    UPDATE: (id) => ``,
    DELETE: (id) => ``,
    GETINFOBYTOKEN: '/api/users/informationbytoken'
  },
  SUAT_AN: {
    GET: '/api/suat-an/get-suat-an',
    GETALL: '/api/suat-an/get-all-suat-an',
    CREATE: '/api/suat-an/tao-suat-an',
    GETONE: (id) => `/api/suat-an/get-one-suat-an/${id}`,
    GETLATLNGFROMADDRESS: '/api/suat-an/getLatlng',
    REQUEST_BINH_LUAN: '/api/suat-an/binh-luan-suat-an',
    REQUEST_AN_CUNG: (id) => `/api/suat-an/request-an-cung/${id}`,
    DUYET_AN_CUNG: `/api/suat-an/duyet-an-cung`
  }
};
