import Order from "../model/order.model.js";

export const createOrder = async (req, res) => {
    try {
        const { userId, userName, bookId, bookName, price } = req.body;
        
        const newOrder = new Order({
            userId,
            userName,
            bookId,
            bookName,
            price
        });

        await newOrder.save();
        res.status(201).json({ message: "Book booked successfully!", order: newOrder });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};