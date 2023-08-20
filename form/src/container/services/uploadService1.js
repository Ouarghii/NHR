import axios from'axios'

class Upload1{
    create(formData){
       const url="http://localhost:3000/view1";
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
export default new Upload1()