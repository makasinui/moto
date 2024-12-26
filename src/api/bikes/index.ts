import axios from "axios";
import { IBrand, IModel } from "../../types";
import { url } from '../';


const httpGetAllBrands = async (): Promise<IBrand[]> => {
    const bikeUrl = `${url}/allbikes`
    try {
        const { data } = await axios.get(`${bikeUrl}/brands`);
        return data;
    } catch(err) {
        console.error(err)
    }

    return [];
}

const httpGetAllModels = async (brand: string): Promise<IModel[]> => {
    const bikeUrl = `${url}/allbikes`
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