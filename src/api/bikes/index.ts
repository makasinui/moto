import axios from "axios";
import { IBrand } from "../../types";
import { url } from '../';

const bikeUrl = `${url}/allbikes`

const httpGetAllBrands = async (): Promise<IBrand[]> => {
    try {
        const { data } = await axios.get(`${bikeUrl}/brands`);
        return data;
    } catch(err) {
        console.error(err)
    }

    return [];
}

const httpGetAllModels = async (brand: string): Promise<IBrand[]> => {
    try {
        const { data } = await axios.get(`${bikeUrl}/models/${brand}`);
        return data;
    } catch(err) {
        console.error(err)
    }

    return [];
}

export {
    httpGetAllBrands,
    httpGetAllModels
}