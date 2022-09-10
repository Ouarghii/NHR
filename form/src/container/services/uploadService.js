import axios from'axios'

class Upload{
    create(formData){
       const url="http://localhost:3000/view";
       const config={
          headers:{
            'content-type':'multipart/form-data',
          }
       }
       return axios.post(url,formData,config)
    }
    getPosts(){
        const url="http://localhost:3000/getjustfy"
        return axios.get(url)

    }
}
export default new Upload()