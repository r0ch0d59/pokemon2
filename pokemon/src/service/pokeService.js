import axiosService from "./axiosService";
import axios from "axios";

export async function getAll(){
   return axiosService.get('/pokemon');
}

