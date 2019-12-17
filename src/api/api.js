import axios from 'axios';

export default axios.create({
    baseURL: 'http://g3clothingstore.azurewebsites.net/api/types',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    // xsrfCookieName: 'csrftoken',
    //xsrfHeaderName: 'X-CSRFToken',
    // withCredentials: true
});