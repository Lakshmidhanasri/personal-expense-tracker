const Transaction = require("../models/transactionModel");

exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpense;
    res.status(200).json({ totalIncome, totalExpense, balance });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch summary" });
  }
};
