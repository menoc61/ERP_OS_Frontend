import { ADD_CUSTOMER } from "../../types/CustomerType";
import axios from "axios";
import { toast } from "react-toastify";

const addCustomerAction = (data) => {
	return {
		type: ADD_CUSTOMER,
		payload: data,
	};
};

export const addCustomer = (values) => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json;charset=UTF-8",
				},
				url: `customer/`,
				data: {
					...values,
				},
			});
			//dispatching data
			dispatch(addCustomerAction(data));
			toast.success("Client ajouté");
			return {
				message: "success",
			};
		} catch (error) {
			toast.error("Erreur lors l'ajout d'un client, essayez à nouveau");
			console.log(error.message);
		}
	};
};
