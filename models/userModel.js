import _ from "lodash";
import db from '../clients/db.mysql.js';

export default {
  async getUserProfile(id) {
    const [raws] = await db.query(`
       SELECT * FROM users 
        `)

    return raws
  },

  async createPost (id) {
    const [raws] = await db.query(`
       SELECT * FROM users WHERE id = ?
        `, [id])

    return _.head(raws)|| null;
  },

  async create(first_name, last_name, email, dob, password) {
    const [raws] = await db.query(`
        INSERT INTO users (first_name, last_name,email, dob)
        VALUES (?,?,?,?,?) 
        `, [first_name, last_name, email, dob, password])

    return raws
  },
  findAll(param) {
    
  },
  findOne(param) {
    
  }
}