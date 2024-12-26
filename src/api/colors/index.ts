import axios from "axios";
import { IColor} from "../../types";
import { url } from '../';


const httpGetAllColors = async (): Promise<IColor[]> => {
    const colorUrl = `${url}`
    try {
        const { data } = await axios.get(`${colorUrl}/colors`);
        return data;
    } catch(err) {
        console.error(err)
    }

    return [];
}


export {
    httpGetAllColors,
}