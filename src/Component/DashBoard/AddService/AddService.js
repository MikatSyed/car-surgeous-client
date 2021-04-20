import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


import Sidebar from '../Sidebar/Sidebar';


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[imageURL , setImageURL] = useState(null);
    const onSubmit = data => {
        const evenData = {
            name : data.name,
            description : data.description,
            // imageURL: imageURL
         
        };
        const url = `'https://fast-mesa-06149.herokuapp.com/addElement`
      console.log(evenData);
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(evenData)
        })
        .then(res => console.log('server side responsed'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','624d1380187d45b6ee69de16b51ca873');
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
           
            <section className="container-fluid row">
          <Sidebar/>
           <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
               <h5 className="text-primary">Add a Service</h5>



               <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="exampleInputEmail1">Service Title</label><br/>
      <input  {...register("name")} className="form-control" /><br/>
      <label htmlFor="exampleInputEmail1">Description</label><br/>
      <input  {...register("description")} className="form-control" /><br/>
     {/* <input  onChange={handleImageUpload} name="exampleRequired" type="file" {...register("", { required: true })} /><br/> */}
      <input type="submit" className="btn btn-info"/>
    </form>


        </div>
        </section>
        </div>
    );
};

export default AddProduct;

        