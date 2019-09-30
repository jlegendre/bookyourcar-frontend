import httpClient from "../../utils/httpClient";

export const fetchImageUser = callback => () => {
    httpClient.request({
        url: `/Images/GetImageByUser`,
        method: 'GET'
    }).then(response => {
        return callback(response.data);
    })
};

export const fetchPostImageUser = (file, callback) => () => {
    let formData = new FormData();
    formData.append("file", file);

    httpClient.post('/Images/UploadImageUser', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    }).then(() => callback && callback(true))
};