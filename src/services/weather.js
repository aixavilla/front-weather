import axios from 'axios';

const city = 'Santiago';
const country = 'CL';
const key = 'cc95d2271e8b13b49ce1a0a6f6d84dc6';
const units = 'metric'

const currentWeather = async () => {
  try{
    const res = await axios.get(`/weather?q=${city},${country}&appid=${key}&units=${units}`);
    return res.data;
  }catch(e){
    return { message:e.response.data.message, error:e }
  }
};

export default { currentWeather };