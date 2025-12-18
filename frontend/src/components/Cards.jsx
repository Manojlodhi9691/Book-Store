import React from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Cards({ item }) {
  const [authUser] = useAuth();

  const handleBookNow = async () => {
    if (!authUser) {
      toast.error("Please login first to book a book!");
      return;
    }

    const orderDetails = {
      userId: authUser._id,
      userName: authUser.fullname,
      bookId: item._id,
      bookName: item.name,
      price: item.price,
    };

    try {
      const res = await axios.post("http://localhost:4000/order/book", orderDetails);
      if (res.data) {
        toast.success("Order Placed: " + item.name);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to book the book.");
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure><img src={item.image} alt="Books" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <button 
              onClick={handleBookNow}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
            >
              BUY Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;