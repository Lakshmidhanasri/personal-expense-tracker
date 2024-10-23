const Transaction = require("../models/transactionModel");

// Add new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const transaction = await Transaction.create({
      type,
      category,
      amount,
      date,
      description,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: "Failed to add transaction" });
  }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch transactions" });
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch transaction" });
  }
};

// Update transaction
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.update(req.body);
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to update transaction" });
  }
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.destroy();
      res.status(200).json({ message: "Transaction deleted" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to delete transaction" });
  }
};
