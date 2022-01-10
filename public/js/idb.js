let db;
const request = indexedDB.open('budget_app', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_account_action', { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {
        uploadAccountAction();
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(['new_account_action'], 'readwrite');
    const accountObjectStore = transaction.objectStore('new_account_action');
    accountObjectStore.add(record);
};