import sqlite from 'sqlite3';
const dbPath = './database.db';

const db = new sqlite.Database(dbPath);

db.serialize(() => {
    db.run("CREATE TABLE products (name VARCHAR(20), description TEXT, image TEXT, price DECIMAL(10,2), min_days_until_delivery INT)");
});

db.close();