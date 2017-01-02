function getTempCallBack(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallBack('London', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City Not Found');
        }, 1000);
    });
}

getTempPromise('London').then(function(temp) {
    console.log('Promise Success', temp);
}, function(err) {
    console.log('Promise Error', err);
});

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a == 'number' && typeof b == 'number') {
            resolve(a + b);
        } else {
            reject('a,b Not Found');
        }
    });
}

addPromise(10, 20).then(function(temp) {
    console.log('Promise Success', temp);
}, function(err) {
    console.log('Promise Error', err);
});