import ApiRequest from '../routes/login/ApiRequest'

export const singlePageLoader=async({request,params})=>{
    const res = await ApiRequest("/posts/"+params.id)
    return res.data;
}       



export const listPageLoader= async({request,params})=>{
    const query = request.url.split("?")[1]
    console.log(query)
    const res=await ApiRequest("/posts?"+query);
    return res.data;
    
}