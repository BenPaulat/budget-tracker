let db;
const request = indexedDB.open('budget_app', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('account_action', { autoIncrement: true });
};