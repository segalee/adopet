export function getImgUrl(ev) {
    const CLOUD_NAME = 'dwde5tdk3'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', 'gpa3uxpa');

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {

            return res.url;

        })
        .catch(err => console.error(err))
}
