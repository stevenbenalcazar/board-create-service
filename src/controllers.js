const pool = require('../config/db');

const createBoard = async (req, res) => {
  try {
    const { name, workspace_id } = req.body;
    if (!name || !workspace_id) {
      return res.status(400).json({ message: 'Name and workspace ID required' });
    }

    const result = await pool.query(
      'INSERT INTO boards (name, workspace_id) VALUES ($1, $2) RETURNING *',
      [name, workspace_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createBoard };
