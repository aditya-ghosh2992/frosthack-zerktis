import React, {useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:'',
        description:'',
        price:'',
        category:'Dentist'
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', Number(data.price))
        formData.append('category', data.category)
        formData.append('image', image)
        const response = await axios.post(`${url}/api/food/add`, formData);

        if(response.data.success){
            setData({
                name:'',
                description:'',
                price:'',
                category:'Dentist'
            })
            setImage(false);
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
        <form  className="flex-col" onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image? URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Doctor name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Doctor description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write content about the doctor here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Doctor category</p>
                    <select onChange={onChangeHandler}  name="category">
                        <option value="Dentist">Dentist</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Orthopedist">Orthopedist</option>
                        <option value="Opticians">Opticians </option>
                        <option value="Surgeons">Surgeons</option>
                        <option value="Neurologist ">Neurologist </option>
                        <option value="Blood Test">Blood Test</option>
                        <option value="Disganiastic Center">Disganiastic Center</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Doctor Fee's</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$10'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add