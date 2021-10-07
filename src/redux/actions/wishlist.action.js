import { wishlistType } from "../actionType/actionTypes";

export const removeWishListSuccess = (payload) => ({
  type: wishlistType.REMOVE_WISHLIST,
  payload: payload,
});

export const addWishlist = (payload) => ({
  type: wishlistType.ADD_WISHLIST,
  payload: payload,
});
