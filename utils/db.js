import Database from 'better-sqlite3';

export default function getDB() {
    const db = new Database('encapsulame.db');
    db.pragma('journal_mode = WAL');
    return db;
}