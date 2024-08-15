import {createSlice} from '@reduxjs/toolkit'



const todoSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            state.push({name:action.payload , id:Date.now()})
        },
        deleteData:(state,action)=>{
           return state.filter((data)=> data.id!==action.payload)
        },
        updateData:(state,action)=>{
            const obj=state.find((data)=>data.id==action.payload.id)
            if(obj){
                obj.name=action.payload.data
            }
           
        }
    }
    
})
export const {addData,deleteData,updateData}=todoSlice.actions
export default todoSlice.reducer