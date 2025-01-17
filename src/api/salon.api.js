import HTTP from "../service/http";
import { methods } from "../constants";
import {  __endpoint_salonAddress, __endpoint_salons, __endpoint_singleSalon } from "../constants/endpoints";




 export const createSalon = (payload) => HTTP.Request(methods.POST, __endpoint_salons , payload);
 export const getSalon = (payload) => HTTP.Request(methods.GET, __endpoint_salons , payload);
 export const singleSalon = (salonId,payload) => HTTP.Request(methods.GET, __endpoint_singleSalon(salonId) , payload);
 export const salonAddress = (salonId,payload) => HTTP.Request(methods.PATCH, __endpoint_salonAddress(salonId) , payload);

//fake api  
export const createBankAccount = (payload) => HTTP.Request(methods.POST, __endpoint_salons, payload);

