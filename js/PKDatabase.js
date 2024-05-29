// Open a websql database
var db = openDatabase('myDb', '1.0', 'myDb', 2 * 1024 * 1024);

// Create a table to store the data
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS news (id unique, newsUsername, newsTitle, newsCategory, newsLink, newsComment)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS events (id unique, eventsUsername, eventsTitle, eventsDate, eventsMandatory, eventsInfo)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS reviews (id unique, reviewUsername, reviewTitle, reviewComments, reviewRating)');
});