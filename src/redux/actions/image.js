import httpClient from "../../utils/httpClient";

const fetchImageUser = (id, callback) => () => {
    httpClient.request({
        url: `/Images/GetImageByUser?userId=${id}`,
        method: 'GET'
    }).then(response => {
        callback(response.data);
    })

};